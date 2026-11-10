// The node exposes its live report before queueing the first cell. Report state
// stays runtime-only, like the grid preview; it must not dirty saved workflows.
import { pixApiUrl } from "../shared/api_url.mjs";

function reportUrl(sessionId) {
  return new URL(pixApiUrl(`/pixaroma/xy-report/${encodeURIComponent(sessionId)}`), location.href).href;
}

export function getLiveReport(node) {
  if (node._pixXyReport) return node._pixXyReport;
  const sessionId = node._pixXyLastGrid?.sessionId;
  return sessionId ? { sessionId, url: reportUrl(sessionId), status: "ready" } : null;
}

export function buildReportLink(node, mount) {
  const row = document.createElement("section");
  row.className = "pix-xy-report";
  row.setAttribute("aria-label", "Live HTML report");
  const heading = document.createElement("strong");
  heading.textContent = "Live HTML report";
  const link = document.createElement("a");
  link.className = "pix-xy-report-url";
  link.target = "_blank";
  link.rel = "noopener";
  const status = document.createElement("span");
  status.className = "pix-xy-report-status";
  status.setAttribute("role", "status");
  for (const event of ["pointerdown", "keydown"]) link.addEventListener(event, (e) => e.stopPropagation());
  row.append(heading, link, status);
  mount.appendChild(row);
  const update = () => {
    const report = getLiveReport(node);
    row.hidden = !report;
    if (!report) {
      link.removeAttribute("href");
      link.textContent = "";
      status.textContent = "";
      return;
    }
    link.href = report.url;
    link.textContent = report.url;
    status.textContent = report.status === "error" ? report.error : report.status === "preparing"
      ? "Preparing report…" : "Individual images · updates automatically";
    status.classList.toggle("pix-xy-report-error", report.status === "error");
  };
  update();
  return update;
}

export async function prepareLiveReport(node, config) {
  const report = { sessionId: config.session_id, url: reportUrl(config.session_id), status: "preparing" };
  node._pixXyReport = report;
  node._pixXyGrid?.refreshReport();
  node._pixXyFit?.();
  try {
    const response = await fetch(pixApiUrl("/pixaroma/api/xy_plot/reports"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
      signal: AbortSignal.timeout(15000),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(response.status === 404
        ? "The report API is unavailable. Restart ComfyUI and reload the browser."
        : data.error || `Cannot create report (HTTP ${response.status}).`);
    }
    // Reset or node removal while the request was pending cancels this run.
    if (node._pixXyReport !== report) return false;
    report.status = "ready";
    node._pixXyGrid?.refreshReport();
    return true;
  } catch (error) {
    if (node._pixXyReport !== report) return false;
    report.status = "error";
    report.error = error.message;
    node._pixXyGrid?.refreshReport();
    throw error;
  }
}
