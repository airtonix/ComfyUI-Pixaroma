// XY Plot Pixaroma - node-body DOM: axis cards, target dropdown, adaptive
// value entry, counter, option toggles. All CSS is `.pix-xy-*` scoped.
//
// Render model (mirrors Load Image Pattern #5): picker/mode changes do a full
// rebuild (handlers.rerender), but typing into value fields only updates state
// + refreshes the counter/preview in place (no rebuild) so input focus is kept.

import { app } from "/scripts/app.js";
import { pixApiUrl } from "../shared/api_url.mjs";
import {
  readState, writeState,
  enumerateTargets, lookupWidgetMeta, currentValuePreview, axisDisplayName, axisNote,
  resolveAxisValues, computeCounts, axisReady, setLiveAxisMeta,
} from "./core.mjs";
import { registerNodeHelp } from "../shared/index.mjs";
import { isGraphLoading } from "../shared/graph_loading.mjs";
import { attachLineNumbers } from "../shared/line_numbers.mjs";
import { placeZoomedPopup } from "../shared/popup_zoom.mjs";
import { renderFilenameControl, closeFilenameBuilder } from "./filename_ui.mjs";
import { normalizeWrapColumns } from "./layout.mjs";

const BRAND = "#f66744";

// Node Help panel content (the ? button -> themed popup; node UI convention #16).
// The popup is a document.body overlay, so it works in BOTH renderers.
const XY_HELP = {
  title: "XY Plot Pixaroma",
  tagline: "Compare settings side by side in one labeled grid - no extra wiring.",
  sections: [
    {
      heading: "What it does",
      body: "Drop this at the end of your workflow and wire your final image into it, like a Preview node. Pick what changes ACROSS (X = columns) and DOWN (Y = rows), press Run once, and every combination fills a labeled grid right here on the node.",
    },
    {
      heading: "How to use",
      bullets: [
        "Wire your workflow's final image into the `image` input.",
        "In the X card, pick a setting to vary across the columns. Do the same in the Y card for the rows (you can use just one axis if you like).",
        "Enter the values you want to try in the value box.",
        "Press Run once. The grid builds as each run finishes.",
      ],
    },
    {
      heading: "The value box adapts to what you pick",
      defs: [
        ["Number", "A `Range` (Start / End / Steps) or a `List` of values."],
        ["Dropdown", "Click `Choose values…` to open a searchable, wheel-scrollable checklist. Tick the samplers / models / loras you want to compare: each tick becomes one square, not another thing loaded at once. Selected values stay listed in the node; use × to remove one."],
        ["LoRA", "A popover checklist of lora files, or a number when you pick a weight. Loras get a section of their own further down, because they work one level differently from every other setting."],
        ["Prompt text", "`Full list` (one full prompt per line) or `Find & replace` (swap a word for each value). Long prompts wrap onto several rows, and the numbers down the left count your VALUES, so you can always see where the next one starts. The numbers are just a guide - you cannot type in them."],
      ],
      bullets: [
        "The popover shows ALL your installed options (every lora, sampler, checkpoint, etc.), not just the one in the node. Filter and tick values, then click Done, press Escape, or click outside. Selections apply immediately. The `now:` line shows what the target node is set to right now.",
      ],
    },
    {
      heading: "Examples: what to pick for what you want",
      body:
        "Two things to hold on to and the rest follows. The picker chooses WHICH setting changes. The value box under it chooses WHAT that setting becomes, and you get one square per value, not all of them at once.\n\n"
        + "So X and Y choose how many settings change at once, not how many things you can compare. One axis with 5 ticks gives 5 images. Numeric sweeps allow 100 values per axis. Model and prompt lists can be longer, with up to 10,000 images per plot. Use the second axis to change a SECOND setting.\n\n"
        + "Two habits worth having. Watch the counter above the buttons, because it tells you how many images you just asked for and 4 across by 3 down is 12 runs. And leave Lock seed on unless you are plotting the seed itself, or two things change at once and you cannot tell which one did it.",
      defs: [
        ["Which sampler suits this image?",
          "X: your KSampler's `sampler_name`. Tick the 4 or 5 you actually use. One row of squares, one sampler each."],
        ["How many steps do I really need?",
          "X: `steps`, `Range`, Start 10, End 40, Steps 4. That gives 10, 20, 30, 40, and you can see where it stops improving."],
        ["Steps against cfg, all at once",
          "X: `steps` (try 15, 25, 35). Y: `cfg` (try 3, 5, 7). Nine squares showing every pairing, which is far quicker than nine separate runs."],
        ["Same prompt, one word different",
          "Pick your prompt text and choose `Find & replace`. Put the word to swap in Find, and your alternatives in the values. Everything else in the prompt stays put."],
        ["Which checkpoint handles this prompt best?",
          "X: your checkpoint loader's `ckpt_name`. Tick the models to try. Turn `Lock seed` on so the seed is not also changing."],
      ],
    },
    {
      heading: "Comparing LoRAs, case by case",
      body:
        "Loras trip people up more than anything else here, because they sit one level deeper than the other settings. Your lora loader has ROWS. An axis changes ONE row. The list you then tick is every lora on your computer, and each tick is one square. So the row you pick is WHERE the change happens, and the ticks are WHAT goes there.",
      defs: [
        ["Just one lora in the loader",
          "The easy case. Pick `LoRA 1 file` and tick as many loras as you want to see. Each square runs exactly one of them, with nothing else muddying it."],
        ["Two or more loras in the loader",
          "The axis still changes only the row you picked. Every OTHER row that is switched on is applied in every square, which can hide the thing you are comparing. Switch off the ones you are not testing. If one would get in the way, an orange line under the picker tells you which."],
        ["Keeping a lora in every square on purpose",
          "Sometimes that is exactly what you want: a style lora you always use, while you compare something else. Leave its row on and read the grid as A plus style against B plus style."],
        ["What weight should it be?",
          "Pick `LoRA 1 strength` and enter a list like `0, 0.4, 0.7, 1`. The `0` square is your before shot, because a lora at 0 does nothing at all."],
        ["Which lora AND at what weight",
          "X: `LoRA 1 file` with your candidates. Y: `LoRA 1 strength` with a few weights. Every lora at every weight, in one grid."],
        ["Two loras mixed together",
          "X: `LoRA 1 file`. Y: `LoRA 2 file`. Here you WANT both rows switched on, since every square is a real pairing, so no warning appears."],
        ["Three rows all changing at once",
          "Not possible, since there are only two axes and so at most two settings can change. Keep the third row fixed and switched on, or run a second plot."],
        ["Trigger words",
          "When you swap the FILE on a LoRA Loader Pixaroma row, that row's ticked trigger words are left out of every square, because they belonged to one particular lora. Put any words you want in all squares into your prompt instead."],
        ["Which entries you get",
          "With LoRA Loader Pixaroma each row appears as `LoRA 1 file` and `LoRA 1 strength`, counted from the top of the node, plus `LoRA 1 clip strength` when model and clip are separate in the gear. The core Load LoRA node and other multi-lora loaders work too."],
      ],
    },
    {
      heading: "Entering numbers",
      bullets: [
        "List: values separated by commas, e.g. `5, 6, 7.1, 10`. Decimals are kept exactly.",
        "Range: set Start, End and Steps (how many). 5 to 15 in 3 steps gives 5, 10, 15.",
        "Shorthand inside a list also works: `4-10 (+2)` steps by 2, and `4-10 [4]` gives 4 evenly spaced values.",
      ],
    },
    {
      heading: "Buttons and options",
      defs: [
        ["Lock seed", "Keeps the seed the same for every square so the only thing changing is what you're testing. Turns off on its own if you're plotting the seed."],
        ["Draw labels", "Show the value labels and axis names on the grid."],
        ["Save cells", "Also save each square on its own, not just the whole grid."],
        ["Wrap grid / Columns", "Available when only X or only Y has values. Set the number of columns, then Run: images fill left to right and wrap into more rows. The counter shows the display layout, but each value still runs only once. The saved grid and live report keep each image's original axis value."],
        ["Grid: Dark / Light / Mono", "The grid background and label style. Switching re-skins the grid you already have, instantly."],
        ["Reset X / Reset Y", "Clear just that one axis."],
        ["Reset XY", "Clear both axes and all selections, back to a fresh node."],
        ["Save Disk / Save Output / Copy", "Save the grid to your computer or ComfyUI output, or copy the grid image."],
        ["Open report", "Open the live HTML report. Its URL appears before the first cell finishes. Each image has its own X/Y values and recorded metadata."],
      ],
    },
    {
      heading: "Live HTML report",
      bullets: [
        "Press Run to get a clickable report URL immediately. The page uses your existing ComfyUI server and receives individual image updates over Server-Sent Events (SSE), without periodic polling.",
        "Live updates reconnect automatically with a fresh snapshot to recover missed cells. Use Refresh now to resync manually or retry failed images.",
        "Select an image to inspect its recorded inputs and workflow. The report does not use the generated grid PNG; each cell shows the first image in its batch.",
        "Reports share the eight-plot memory cache. A ComfyUI restart or cache eviction expires old reports. If a run stops, received cells remain visible and missing cells stay pending.",
      ],
    },
    {
      heading: "Building a filename",
      bullets: [
        "Click Filename… below filename_prefix. Build inserts variables at the caret; Reference explains date codes, relative folders, dimensions, counters, and node values.",
        "Dates use the saving server's clock. Width and height describe the exported grid, including labels and the chosen Save size. The preview stays pending before dimensions are known.",
        "Apply updates the raw pattern. Cancel, Escape, and clicking outside discard the draft. Previewing never creates folders or reserves a file counter.",
        "Both Save buttons expand variables. Save Output adds the next numbered PNG suffix; Save Disk uses the expanded stem plus _grid.png in your browser's chosen location.",
        "Node references use named scalar widgets. Recorded execution values take priority after a run; duplicate names, linked inputs, missing values, and settings swept across the grid need correction.",
      ],
    },
    {
      heading: "Saving and image size",
      body: "The grid shown on the node is a preview, capped at 4096 pixels on its long side so it stays light. The Save row picks how big the SAVED file is:",
      defs: [
        ["2048 / 4096 / 8192", "Cap the exported grid to that many pixels on its long side."],
        ["Full", "Export at native resolution, every cell at its real size. This makes the largest file."],
      ],
      bullets: [
        "The full-size grid is built only when you click Save, so choosing a bigger size never slows your runs down.",
        "Save Disk saves to your computer and Save Output goes to ComfyUI's output folder, both at the Save size. Copy uses the smaller on-screen grid preview. Open report shows the individual images.",
        "The grid sent out of the node's image dot (top right) always stays 4096, to keep anything wired after it fast.",
        "Want the preview bigger on the canvas? Make the NODE wider and it grows with it (and smaller again when you narrow it). A very tall grid stops growing so the node stays manageable; use Open report to inspect individual images.",
      ],
    },
  ],
  footer: "Tip: start small (a few values each way). The node asks you to confirm before running more than 25 squares, since each square is a full workflow run.",
};

// Help is shown by the selection-toolbar Help button (js/help_toolbar).
registerNodeHelp("PixaromaXYPlot", XY_HELP);

function xyToast(detail, severity = "info") {
  const tm = app.extensionManager?.toast;
  if (tm && typeof tm.add === "function") {
    try { tm.add({ severity, summary: "XY Plot", detail, life: 4000 }); return; } catch (_e) {}
  }
  console.warn("[Pixaroma.XYPlot] " + detail);
}

export function injectCSS() {
  // DOM-id guard (survives a module hot-reload without duplicating the style).
  if (document.getElementById("pix-xy-css")) return;
  const css = `
.pix-xy-root{display:flex;flex-direction:column;gap:9px;padding:8px 9px 16px;font-family:'Segoe UI',system-ui,sans-serif;color:#e0e0e0;box-sizing:border-box;}
.pix-xy-axis{border:1px solid rgba(255,255,255,.14);border-radius:7px;padding:9px 10px 10px;background:rgba(0,0,0,.18);}
.pix-xy-axis-head{display:flex;align-items:center;flex-wrap:wrap;gap:7px;font-size:12px;font-weight:600;margin-bottom:8px;}
.pix-xy-badge{background:var(--pix-acc,#f66744);color:#fff;border-radius:4px;width:18px;height:18px;display:grid;place-items:center;font-size:11px;font-weight:700;flex:0 0 auto;}
.pix-xy-axis-dir{color:#9a9a9a;font-weight:500;font-size:11px;}
.pix-xy-head-right{margin-left:auto;display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end;}
.pix-xy-axis-reset{display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:500;color:#9a9a9a;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:3px 8px;cursor:pointer;user-select:none;}
.pix-xy-axis-reset:hover{border-color:var(--pix-acc,#f66744);color:#fff;}
.pix-xy-axis-reset .pix-xy-axis-reset-ic{font-size:12px;line-height:1;}
.pix-xy-row{display:flex;align-items:center;gap:7px;}
.pix-xy-curhint{font-size:10.5px;color:#8a8a8a;font-style:italic;margin:5px 2px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
/* Heads-up from the target node's sweep provider (e.g. "another LoRA row is on too,
   so it is in every square"). Wraps rather than ellipsising - it is a sentence, and
   a truncated warning is worse than none. */
.pix-xy-axisnote{font-size:10.5px;line-height:1.35;color:var(--pix-acc,#f66744);margin:4px 2px 0;display:flex;gap:5px;align-items:flex-start;}
.pix-xy-axisnote .pix-xy-axisnote-ic{flex:0 0 auto;}
/* Says what the checklist below it is for (values, one square per tick). */
.pix-xy-listcapt{font-size:10.5px;line-height:1.35;color:#8a8a8a;margin:0 2px 5px;}
/* custom dropdown (value + ▼ + ◀▶), Pixaroma convention - never native <select> */
.pix-xy-combo{flex:1;display:flex;align-items:center;gap:8px;min-width:0;background:#1d1d1d;border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:6px 9px;font-size:12.5px;cursor:pointer;}
.pix-xy-combo:hover{border-color:var(--pix-acc,#f66744);}
.pix-xy-combo .pix-xy-val{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.pix-xy-combo .pix-xy-val .pix-xy-node{color:var(--pix-acc,#f66744);font-weight:600;}
.pix-xy-combo .pix-xy-val.placeholder{color:#777;}
.pix-xy-combo .pix-xy-car{color:#9a9a9a;font-size:10px;flex:0 0 auto;}
.pix-xy-nav{width:22px;height:30px;flex:0 0 auto;display:grid;place-items:center;background:#1d1d1d;border:1px solid rgba(255,255,255,.14);border-radius:5px;color:var(--pix-acc,#f66744);font-size:11px;cursor:pointer;}
.pix-xy-nav:hover{border-color:var(--pix-acc,#f66744);}
.pix-xy-nav.disabled{opacity:.35;cursor:default;}
/* popup
   Inner sizes are em ON PURPOSE: placeZoomedPopup sets the root font-size from
   the canvas zoom, and em lets that one number scale the rows, gaps and padding
   together (node UI convention #27 - the popup is position:fixed on
   document.body so it inherits no canvas transform and would otherwise read
   tiny beside a zoomed-in node). Do not put px back on the rows. At 100% zoom
   the em values reproduce the previous px sizes exactly. */
.pix-xy-popup{position:fixed;z-index:99999;background:#1d1d1d;border:1px solid rgba(255,255,255,.18);border-radius:7px;box-shadow:0 10px 30px rgba(0,0,0,.6);max-height:340px;overflow:auto;padding:.42em;min-width:220px;box-sizing:border-box;}
.pix-xy-pop-section{font-size:.84em;color:var(--pix-acc,#f66744);font-weight:700;text-transform:uppercase;letter-spacing:.5px;padding:.58em .67em .25em;}
.pix-xy-pop-item{display:flex;flex-direction:column;gap:.08em;padding:.5em .75em;border-radius:4px;font-size:1.04em;cursor:pointer;}
.pix-xy-pop-item:hover{background:#2a2a2a;}
.pix-xy-pop-item.sel{background:color-mix(in srgb, var(--pix-acc,#f66744) 18%, transparent);}
.pix-xy-pop-item-top{display:flex;align-items:center;gap:.67em;}
.pix-xy-pop-item .pix-xy-wname{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.pix-xy-pop-item .pix-xy-wtype{font-size:.8em;color:#888;flex:0 0 auto;}
.pix-xy-pop-prev{font-size:.8em;color:#8a8a8a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;}
.pix-xy-empty{padding:10px;color:#888;font-size:12px;text-align:center;}
/* Scoped so the shared px rules above keep their size in the NODE BODY (the
   checklist reuses .pix-xy-empty, and the font shorthand on .pix-xy-input would
   otherwise pin the popup's filter box at 12px while the rows scale).
   NOTE: no backticks in this comment - it lives inside a JS template literal,
   where a backtick ends the string and empties the whole module. */
.pix-xy-popup .pix-xy-empty{padding:.84em;font-size:1em;}
.pix-xy-popup .pix-xy-input{font-size:1em;}
/* value area */
.pix-xy-valuearea{margin-top:9px;}
.pix-xy-seg{display:inline-flex;background:rgba(0,0,0,.3);border-radius:6px;padding:2px;gap:2px;margin-bottom:8px;}
.pix-xy-moderow{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;}
.pix-xy-moderow .pix-xy-seg{margin-bottom:0;}
.pix-xy-seg span{font-size:11.5px;padding:4px 11px;border-radius:4px;color:#9a9a9a;cursor:pointer;user-select:none;}
/* Selected = orange pill + white text at the SAME weight as unselected. Bumping
   the weight would widen the label and shift the whole dark bar as you switch. */
.pix-xy-seg span.on{background:var(--pix-acc,#f66744);color:#fff;}
.pix-xy-range{display:flex;gap:7px;margin-bottom:7px;}
.pix-xy-field{flex:1;background:#1d1d1d;border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:4px 6px;min-width:0;cursor:text;}
.pix-xy-field:focus-within{border-color:var(--pix-acc,#f66744);}
.pix-xy-field .pix-xy-flbl{font-size:9px;color:var(--pix-acc,#f66744);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:1px;}
.pix-xy-field input{width:100%;background:transparent;border:none;outline:none;color:#e0e0e0;font-size:13px;padding:0;}
.pix-xy-input{width:100%;box-sizing:border-box;background:#1d1d1d;border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:6px 8px;color:#e0e0e0;font:12px monospace;outline:none;}
.pix-xy-input:focus{border-color:var(--pix-acc,#f66744);}
/* WRAPS (pre-wrap, not pre): one value per line means the lines are whole
   prompts, and a straight un-wrapped line pushed them off the right edge behind
   a horizontal scrollbar (user report, 2026-08-02). Newlines still separate
   values - wrapping is purely visual, the value is always split on "\\n".
   min-height is ~5 wrapped rows because a wrapped prompt needs more room than
   an un-wrapped one did; resize:vertical still lets it be dragged bigger. */
textarea.pix-xy-input{resize:vertical;min-height:92px;white-space:pre-wrap;overflow-wrap:break-word;}
.pix-xy-preview{font-size:11.5px;color:#9a9a9a;background:rgba(0,0,0,.25);border-radius:5px;padding:6px 8px;margin-top:6px;word-break:break-word;}
.pix-xy-preview b{color:#8fd19e;font-weight:600;}
.pix-xy-check{overflow:auto;overscroll-behavior:contain;border:1px solid rgba(255,255,255,.14);border-radius:5px;background:#1d1d1d;}
.pix-xy-selected{max-height:180px;margin-top:6px;}
.pix-xy-selected-row{display:flex;align-items:center;gap:8px;padding:5px 9px;font-size:12px;border-bottom:1px solid rgba(255,255,255,.05);}
.pix-xy-selected-row span{flex:1;min-width:0;overflow-wrap:anywhere;}
.pix-xy-value-button{font:inherit;color:#e0e0e0;background:#292929;border:1px solid rgba(255,255,255,.18);border-radius:5px;cursor:pointer;padding:5px 9px;min-height:26px;}
.pix-xy-value-button:hover{border-color:var(--pix-acc,#f66744);}
.pix-xy-value-button:focus-visible,.pix-xy-values-popup input:focus-visible{outline:2px solid var(--pix-acc,#f66744);outline-offset:2px;}
.pix-xy-values-trigger{width:100%;text-align:left;font-size:12px;}
.pix-xy-values-popup{display:flex;flex-direction:column;gap:.5em;overflow:hidden;max-height:min(440px,calc(100dvh - 16px));color:#e0e0e0;font-family:'Segoe UI',system-ui,sans-serif;}
.pix-xy-values-popup .pix-xy-input{flex:none;margin:0;}
.pix-xy-values-popup .pix-xy-check{flex:1;min-height:0;}
.pix-xy-values-popup .pix-xy-item{display:flex;align-items:center;gap:.67em;padding:.5em .75em;min-height:2em;box-sizing:border-box;font-size:1em;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.05);}
.pix-xy-values-popup .pix-xy-item:hover{background:#262626;}
.pix-xy-values-popup .pix-xy-item span{min-width:0;overflow-wrap:anywhere;}
.pix-xy-values-popup input[type=checkbox]{flex:none;width:1.2em;height:1.2em;accent-color:var(--pix-acc,#f66744);}
.pix-xy-values-footer{display:flex;align-items:center;justify-content:space-between;gap:1em;flex:none;}
.pix-xy-values-popup .pix-xy-value-button{padding:.42em .75em;min-height:2em;}
.pix-xy-count{font-size:11px;color:#9a9a9a;margin-top:5px;}
/* counter chip + options */
.pix-xy-counter{text-align:center;font-size:13px;font-weight:600;color:#fff;background:var(--pix-acc,#f66744);border-radius:6px;padding:7px;}
.pix-xy-counter.muted{background:rgba(255,255,255,.06);color:#9a9a9a;font-weight:500;}
.pix-xy-opts{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;}
.pix-xy-opts2{display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap;}
.pix-xy-opts3{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
.pix-xy-themewrap{display:flex;align-items:center;flex-wrap:wrap;gap:7px;}
.pix-xy-themelbl{font-size:11.5px;color:#9a9a9a;}
.pix-xy-themeseg{margin-bottom:0;}
.pix-xy-themeseg span{padding:4px 10px;}
.pix-xy-toggle{display:flex;align-items:center;gap:7px;font-size:11.5px;color:#cfcfcf;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:5px 11px;cursor:pointer;user-select:none;white-space:nowrap;}
.pix-xy-toggle:hover{border-color:var(--pix-acc,#f66744);}
.pix-xy-pill{width:30px;height:16px;flex:0 0 auto;border-radius:8px;background:#444;position:relative;transition:.15s;}
.pix-xy-pill.on{background:var(--pix-acc,#f66744);}
.pix-xy-pill .pix-xy-knob{position:absolute;top:2px;left:2px;width:12px;height:12px;border-radius:50%;background:#fff;transition:.15s;}
.pix-xy-pill.on .pix-xy-knob{left:16px;}
.pix-xy-resetbtn{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:11.5px;color:#cfcfcf;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:5px 11px;cursor:pointer;user-select:none;}
.pix-xy-resetbtn:hover{border-color:var(--pix-acc,#f66744);color:#fff;}
/* grid preview + buttons */
.pix-xy-wrap{display:flex;align-items:center;flex-wrap:wrap;gap:10px 18px;font-size:12px;}
.pix-xy-wrap[hidden]{display:none;}
.pix-xy-wrap label{display:flex;align-items:center;gap:7px;}
.pix-xy-wrap input[type=checkbox]{accent-color:var(--pix-acc,#f66744);width:16px;height:16px;}
.pix-xy-wrap input[type=number]{width:64px;min-width:0;}
.pix-xy-wrap input:disabled{opacity:.45;}
.pix-xy-wrap input:focus-visible{outline:2px solid var(--pix-acc,#f66744);outline-offset:2px;}
.pix-xy-gridmount{display:flex;flex-direction:column;gap:8px;}
.pix-xy-report{display:flex;flex-direction:column;gap:4px;min-width:0;padding:9px 10px;border:1px solid rgba(255,255,255,.14);border-radius:5px;background:#1d1b1a;}
.pix-xy-report[hidden]{display:none;}
.pix-xy-report strong{font-size:12px;color:#eee;}
.pix-xy-report-url{font-size:11px;color:var(--pix-acc,#f66744);overflow-wrap:anywhere;user-select:text;}
.pix-xy-report-status{font-size:11px;color:#b7b1ad;overflow-wrap:anywhere;}
.pix-xy-report-error{color:#ffb3a6;}
.pix-xy-report-url:focus-visible,.pix-xy-sb:focus-visible{outline:2px solid var(--pix-acc,#f66744);outline-offset:3px;}
.pix-xy-gridbox{border:1px solid rgba(255,255,255,.12);border-radius:6px;background:#161616;min-height:60px;display:flex;align-items:center;justify-content:center;overflow:hidden;}
/* max-height is set from JS (grid.mjs) so the preview SCALES with the node
   instead of freezing at a constant - a square or tall grid used to hit a flat
   360px cap and then never grow however wide you made the node (user report,
   2026-08-02). The 360 here is only the pre-JS fallback. */
.pix-xy-gridimg{max-width:100%;max-height:360px;display:block;}
.pix-xy-gridhint{color:#777;font-size:12px;padding:14px;text-align:center;}
.pix-xy-savebar{display:flex;gap:6px;}
.pix-xy-sb{flex:1;text-align:center;font-size:11px;color:#e0e0e0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);border-radius:5px;padding:6px 4px;cursor:pointer;user-select:none;}
.pix-xy-sb:hover{background:var(--pix-acc,#f66744);border-color:var(--pix-acc,#f66744);color:#fff;}
.pix-xy-sb.disabled{opacity:.4;cursor:default;}
.pix-xy-sb.disabled:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.14);color:#e0e0e0;}
`;
  const tag = document.createElement("style");
  tag.id = "pix-xy-css";
  tag.textContent = css;
  document.head.appendChild(tag);
}

export function measureContentHeight(root) {
  if (!root) return 120;
  let h = 0;
  const kids = root.children;
  for (let i = 0; i < kids.length; i++) {
    const c = kids[i];
    if (c && c.offsetHeight) h += c.offsetHeight;
  }
  const cs = getComputedStyle(root);
  const gap = parseFloat(cs.rowGap || cs.gap || "0") || 0;
  h += gap * Math.max(0, kids.length - 1);
  h += (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
  return h < 20 ? 280 : h;
}

export function buildRoot() {
  const root = document.createElement("div");
  root.className = "pix-xy-root";
  root.innerHTML = `
    <div class="pix-xy-filename"></div>
    <div class="pix-xy-axis" data-axis="x"></div>
    <div class="pix-xy-axis" data-axis="y"></div>
    <div class="pix-xy-counter-wrap"></div>
    <div class="pix-xy-wrap" hidden></div>
    <div class="pix-xy-opts"></div>
    <div class="pix-xy-opts2"></div>
    <div class="pix-xy-opts3"></div>
    <div class="pix-xy-gridmount"></div>`;
  return root;
}

// ── small DOM helpers ──────────────────────────────────────────────────────

function el(tag, cls, txt) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt != null) e.textContent = txt;
  return e;
}

// Keydown isolation so ComfyUI / LiteGraph don't grab Arrow / Enter / Z etc.
function isolate(input) {
  input.addEventListener("keydown", (e) => e.stopImmediatePropagation());
  input.addEventListener("pointerdown", (e) => e.stopPropagation());
  return input;
}

function labeledField(label, value, oninput) {
  const wrap = el("div", "pix-xy-field");
  wrap.appendChild(el("span", "pix-xy-flbl", label));
  const inp = isolate(el("input"));
  inp.type = "text";
  inp.value = value == null ? "" : String(value);
  inp.addEventListener("input", () => oninput(inp.value));
  wrap.appendChild(inp);
  // The whole box looks clickable - so clicking the label or the padding
  // (anywhere but the input itself) focuses the input. preventDefault keeps
  // it from stealing/Collapsing a text selection inside the input.
  wrap.addEventListener("mousedown", (e) => {
    if (e.target !== inp) { e.preventDefault(); inp.focus(); }
  });
  return wrap;
}

// ── target dropdown ─────────────────────────────────────────────────────────

let _openPopup = null;
function closePopup() {
  closeFilenameBuilder();
  if (_openPopup) { try { _openPopup._cleanup(); } catch (_e) {} _openPopup.remove(); _openPopup = null; }
}

// Close the picker popup ONLY if it belongs to `node` - so deleting node A
// doesn't tear down node B's open picker (the popup is a module singleton).
export function closePopupIfOwner(node) {
  closeFilenameBuilder(node);
  if (_openPopup && node && _openPopup._pixOwnerId === node.id) closePopup();
}

function flatChoices(node) {
  const out = [];
  for (const t of enumerateTargets(node)) {
    for (const w of t.widgets) out.push({ nodeId: t.nodeId, title: t.title, w });
  }
  return out;
}

function selectChoice(node, axisKey, choice, rerender) {
  const state = readState(node);
  const axis = state[axisKey];
  const sf = choice.w.subField || null;
  const changed = axis.nodeId !== choice.nodeId || axis.widgetName !== choice.w.name || (axis.subField || null) !== sf;
  axis.nodeId = choice.nodeId;
  axis.widgetName = choice.w.name;
  axis.subField = sf;
  // The friendly display name, saved so the grid title and this readout stay readable
  // even if the target node is later deleted (a provider axis's `name` is an internal
  // key). Written only here, on a user pick - it is deliberately absent from
  // emptyAxis(), so backfillAxis can never ADD it on the load path and dirty an older
  // saved workflow (same reasoning as subField, Pattern #11).
  axis.label = (choice.w.label && choice.w.label !== choice.w.name) ? String(choice.w.label) : null;
  axis.widgetType = choice.w.type;
  axis.step = choice.w.step || 1;
  axis.precision = (typeof choice.w.precision === "number") ? choice.w.precision : null;
  axis.realStep = (typeof choice.w.realStep === "number") ? choice.w.realStep : null;
  axis.options = choice.w.type === "combo" ? (choice.w.options || []) : [];
  if (changed) {
    // Reset entry to a sensible default for the new widget type. Mutate the
    // EXISTING raw object IN PLACE - do NOT replace it with a fresh literal, or
    // any value-field handler that captured the old raw by reference would
    // write a stale snapshot and clobber the other axis (the same aliasing bug
    // that readState's backfillAxis was built to prevent).
    axis.mode = choice.w.type === "number" ? "range" : (choice.w.type === "text" ? "fulllist" : null);
    const r = axis.raw || (axis.raw = {});
    r.start = ""; r.end = ""; r.steps = ""; r.listText = "";
    r.checked = []; r.srFind = ""; r.srReplace = "";
  }
  writeState(node, state);
  rerender();
}

function openPicker(node, axisKey, anchorEl, rerender) {
  closePopup();
  const state = readState(node);
  const axis = state[axisKey];
  const targets = enumerateTargets(node);
  const popup = el("div", "pix-xy-popup");

  const rows = [];   // { sec, items: [{ el, hay }] }
  let filter = null;
  if (!targets.length) {
    popup.appendChild(el("div", "pix-xy-empty", "No other nodes with adjustable settings found. Add a node (e.g. KSampler) and wire your workflow first."));
  } else {
    filter = isolate(el("input", "pix-xy-input"));
    filter.type = "text";
    filter.placeholder = "Filter settings…";
    filter.style.cssText += "position:sticky;top:0;margin-bottom:6px;";
    popup.appendChild(filter);
    for (const t of targets) {
      const sec = el("div", "pix-xy-pop-section", t.title);
      popup.appendChild(sec);
      const items = [];
      for (const w of t.widgets) {
        const item = el("div", "pix-xy-pop-item");
        if (axis.nodeId === t.nodeId && axis.widgetName === w.name && (axis.subField || "lora") === (w.subField || "lora")) item.classList.add("sel");
        const top = el("div", "pix-xy-pop-item-top");
        const disp = w.label || w.name;
        top.appendChild(el("span", "pix-xy-wname", disp));
        top.appendChild(el("span", "pix-xy-wtype", w.type));
        item.appendChild(top);
        // A preview of the current value disambiguates identically-named nodes
        // (e.g. the positive vs negative CLIP Text Encode).
        if (w.cur) item.appendChild(el("div", "pix-xy-pop-prev", "= " + w.cur));
        item.addEventListener("click", () => {
          selectChoice(node, axisKey, { nodeId: t.nodeId, title: t.title, w }, rerender);
          closePopup();
        });
        popup.appendChild(item);
        items.push({ el: item, hay: (t.title + " " + disp + " " + (w.cur || "")).toLowerCase() });
      }
      rows.push({ sec, items });
    }
    const applyFilter = (q) => {
      const ql = (q || "").toLowerCase();
      for (const r of rows) {
        let any = false;
        for (const it of r.items) {
          const show = !ql || it.hay.includes(ql);
          it.el.style.display = show ? "" : "none";
          if (show) any = true;
        }
        r.sec.style.display = any ? "" : "none";
      }
    };
    filter.addEventListener("input", () => applyFilter(filter.value));
  }
  document.body.appendChild(popup);
  // Zoom-aware sizing + placement (shared, node UI convention #27): the root
  // font tracks the canvas zoom so the list does not read tiny beside a
  // zoomed-in node, the popup grows to fit its longest row instead of being
  // locked to the anchor's width, and it stays inside the viewport. The helper
  // sets the font BEFORE measuring, which the flip-above branch depends on.
  placeZoomedPopup(popup, anchorEl, {
    baseMaxHeightPx: 340,   // matches the stylesheet's 100%-zoom max-height
    baseMaxWidthPx: 640,
    minWidthPx: 220,
  });

  const onDown = (e) => { if (!popup.contains(e.target)) closePopup(); };
  const onWheel = (e) => { if (!popup.contains(e.target)) closePopup(); };
  const onKey = (e) => { if (e.key === "Escape") closePopup(); };
  setTimeout(() => {
    // If another picker opened in the same tick, closePopup() already ran THIS
    // popup's _cleanup and _openPopup now points at the newer one - bail so we
    // don't attach orphaned, never-removed global listeners (a real leak that
    // also makes the newer popup dismiss on the next outside click).
    if (_openPopup !== popup) return;
    document.addEventListener("mousedown", onDown, true);
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("wheel", onWheel, true);
    document.addEventListener("keydown", onKey, true);
    try { filter?.focus(); } catch (_e) {}
  }, 0);
  popup._cleanup = () => {
    document.removeEventListener("mousedown", onDown, true);
    document.removeEventListener("pointerdown", onDown, true);
    document.removeEventListener("wheel", onWheel, true);
    document.removeEventListener("keydown", onKey, true);
  };
  popup._pixOwnerId = node?.id;   // so closePopupIfOwner only closes this node's popup
  _openPopup = popup;
}

function renderPicker(node, axisKey, mountRow, rerender) {
  const state = readState(node);
  const axis = state[axisKey];
  const choices = flatChoices(node);
  const curIdx = choices.findIndex((c) => c.nodeId === axis.nodeId && c.w.name === axis.widgetName && (c.w.subField || "lora") === (axis.subField || "lora"));

  const combo = el("div", "pix-xy-combo");
  const val = el("span", "pix-xy-val");
  if (axis.nodeId != null && axis.widgetName) {
    const title = choices[curIdx]?.title || ("Node " + axis.nodeId);
    const disp = choices[curIdx]?.w?.label || axisDisplayName(axis, node);
    val.innerHTML = `<span class="pix-xy-node">${escapeHtml(title)}</span> · ${escapeHtml(disp)}`;
  } else {
    val.classList.add("placeholder");
    val.textContent = "Pick a setting…";
  }
  combo.appendChild(val);
  combo.appendChild(el("span", "pix-xy-car", "▼"));
  combo.addEventListener("click", () => openPicker(node, axisKey, combo, rerender));

  const prev = el("div", "pix-xy-nav", "◀");
  const next = el("div", "pix-xy-nav", "▶");
  if (choices.length < 2) { prev.classList.add("disabled"); next.classList.add("disabled"); }
  const step = (dir) => {
    if (!choices.length) return;
    let i = curIdx < 0 ? (dir > 0 ? 0 : choices.length - 1) : (curIdx + dir + choices.length) % choices.length;
    selectChoice(node, axisKey, choices[i], rerender);
  };
  prev.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));

  mountRow.appendChild(prev);
  mountRow.appendChild(combo);
  mountRow.appendChild(next);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// ── value entry (adaptive) ───────────────────────────────────────────────────

function previewText(axis) {
  const vals = resolveAxisValues(axis);
  if (!vals.length) return null;
  const shown = vals.slice(0, 8).map((v) => String(v));
  const more = vals.length > 8 ? ` … (+${vals.length - 8})` : "";
  return { count: vals.length, text: shown.join(", ") + more };
}

function buildPreview(axis) {
  const p = previewText(axis);
  const box = el("div", "pix-xy-preview");
  if (!p) { box.innerHTML = `<span style="color:#777">enter values…</span>`; return box; }
  box.innerHTML = `→ <b>${escapeHtml(p.text)}</b> &nbsp;·&nbsp; ${p.count} value${p.count === 1 ? "" : "s"}`;
  return box;
}

// Release any line-number gutters under `el` before its DOM is thrown away.
// attachLineNumbers installs a ResizeObserver per textarea and a Document holds
// its observers strongly, so wiping innerHTML without this pins the detached
// textarea + wrap + gutter + mirror for the rest of the session. These cards are
// rebuilt on every picker change, mode switch, workflow open and tab switch, so
// it accumulates rather than staying at one.
// Deliberately NOT solved by self-disconnecting on !isConnected inside the
// helper: Nodes 2.0 re-parents the widget root, which momentarily detaches the
// element, and that would kill a live gutter.
export function detachLineGutters(el) {
  if (!el) return;
  el.querySelectorAll("textarea").forEach((t) => {
    try { t._pixLnDetach?.(); } catch (_e) {}
  });
}

function renderComboValues(node, axisKey, mount, axis, options, save, refreshCounter, growth) {
  const checkedSet = new Set(axis.raw.checked || []);
  const trigger = isolate(el("button", "pix-xy-value-button pix-xy-values-trigger"));
  trigger.type = "button";
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-expanded", "false");
  const summary = el("div", "pix-xy-check pix-xy-selected");
  summary.setAttribute("role", "region");
  summary.setAttribute("aria-label", `${axisKey.toUpperCase()} selected values`);
  summary.tabIndex = 0;
  const count = el("div", "pix-xy-count");
  count.setAttribute("aria-live", "polite");
  const caption = el("div", "pix-xy-listcapt", "Choose the values to try. Each selection is one square.");
  mount.append(caption, trigger, summary, count);

  const updateSummary = () => {
    const text = `${checkedSet.size} selected`;
    trigger.textContent = `Choose values… · ${text}`;
    count.textContent = text;
    summary.replaceChildren();
    if (!checkedSet.size) summary.appendChild(el("div", "pix-xy-empty", "No values selected."));
    for (const value of checkedSet) {
      const row = el("div", "pix-xy-selected-row");
      row.appendChild(el("span", null, value));
      const remove = isolate(el("button", "pix-xy-value-button", "×"));
      remove.type = "button";
      remove.setAttribute("aria-label", `Remove ${value}`);
      remove.addEventListener("click", () => {
        const index = [...summary.querySelectorAll("button")].indexOf(remove);
        checkedSet.delete(value);
        commit();
        const buttons = summary.querySelectorAll("button");
        (buttons[Math.min(index, buttons.length - 1)] || trigger).focus({ preventScroll: true });
      });
      row.appendChild(remove);
      summary.appendChild(row);
    }
  };
  const commit = () => {
    axis.raw.checked = options.filter((value) => checkedSet.has(value));
    checkedSet.clear();
    axis.raw.checked.forEach((value) => checkedSet.add(value));
    save();
    updateSummary();
    refreshCounter();
    growth?.();
  };
  updateSummary();

  trigger.addEventListener("click", () => {
    if (_openPopup?._pixAnchor === trigger) { closePopup(); return; }
    closePopup();
    const popup = el("div", "pix-xy-popup pix-xy-values-popup");
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-label", `${axisKey.toUpperCase()} axis values`);
    popup.style.setProperty("--pix-acc", getComputedStyle(mount).getPropertyValue("--pix-acc") || BRAND);
    const filter = isolate(el("input", "pix-xy-input"));
    filter.type = "search";
    filter.placeholder = "Filter values…";
    filter.setAttribute("aria-label", "Filter values");
    const selectAllRow = el("label", "pix-xy-item");
    selectAllRow.style.flex = "none";
    const selectAll = el("input");
    selectAll.type = "checkbox";
    selectAllRow.append(selectAll, el("span", null, "Select all listed"));
    const list = el("div", "pix-xy-check");
    const footer = el("div", "pix-xy-values-footer");
    const popupCount = el("span", null, count.textContent);
    popupCount.setAttribute("aria-live", "polite");
    const done = el("button", "pix-xy-value-button", "Done");
    done.type = "button";
    done.addEventListener("click", () => closePopup());
    footer.append(popupCount, done);
    popup.append(filter, selectAllRow, list, footer);

    let listed = [];
    const updateSelectAll = () => {
      const selected = listed.reduce((count, item) => count + Number(checkedSet.has(item.value)), 0);
      selectAll.disabled = listed.length === 0;
      selectAll.checked = listed.length > 0 && selected === listed.length;
      selectAll.indeterminate = selected > 0 && selected < listed.length;
    };
    selectAll.addEventListener("change", () => {
      for (const { value, checkbox } of listed) {
        if (selectAll.checked) checkedSet.add(value); else checkedSet.delete(value);
        checkbox.checked = selectAll.checked;
      }
      commit();
      popupCount.textContent = count.textContent;
      updateSelectAll();
    });
    const buildList = () => {
      list.replaceChildren();
      list.scrollTop = 0;
      listed = [];
      const query = filter.value.toLowerCase();
      for (const value of options) {
        if (query && !value.toLowerCase().includes(query)) continue;
        const row = el("label", "pix-xy-item");
        const checkbox = el("input");
        checkbox.type = "checkbox";
        checkbox.checked = checkedSet.has(value);
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) checkedSet.add(value); else checkedSet.delete(value);
          commit();
          popupCount.textContent = count.textContent;
          updateSelectAll();
        });
        listed.push({ value, checkbox });
        row.append(checkbox, el("span", null, value));
        list.appendChild(row);
      }
      if (!list.children.length) {
        list.appendChild(el("div", "pix-xy-empty", options.length ? "No matches." : "This dropdown has no options to list."));
      }
      updateSelectAll();
    };
    filter.addEventListener("input", buildList);
    buildList();
    document.body.appendChild(popup);
    placeZoomedPopup(popup, trigger, { baseMaxHeightPx: 440, baseMaxWidthPx: 640, minWidthPx: 280 });
    // The shared helper flips above the anchor but cannot fit a tall popup near
    // the middle of a short viewport. Clamp both height and position here.
    popup.style.maxHeight = Math.min(parseFloat(getComputedStyle(popup).maxHeight), window.innerHeight - 16) + "px";
    popup.style.top = Math.max(8, Math.min(parseFloat(popup.style.top), window.innerHeight - popup.offsetHeight - 8)) + "px";
    trigger.setAttribute("aria-expanded", "true");

    const onDown = (event) => {
      if (!popup.contains(event.target) && !trigger.contains(event.target)) closePopup();
    };
    const onWheel = (event) => { if (!popup.contains(event.target)) closePopup(); };
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        closePopup();
      }
    };
    // Consume wheel input even at either boundary so it cannot zoom the graph
    // or scroll the page. Wheel over the search/footer scrolls this list too.
    popup.addEventListener("wheel", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? list.clientHeight : 1;
      list.scrollTop += event.deltaY * unit;
    }, { passive: false });
    popup.addEventListener("keydown", (event) => {
      event.stopPropagation();
      if (event.key !== "Tab") return;
      const controls = [...popup.querySelectorAll("input,button")];
      const index = controls.indexOf(document.activeElement);
      if (event.shiftKey && index === 0) {
        event.preventDefault(); done.focus();
      } else if (!event.shiftKey && index === controls.length - 1) {
        event.preventDefault(); filter.focus();
      }
    }, true);
    const dismiss = () => closePopup();
    document.addEventListener("pointerdown", onDown, true);
    document.addEventListener("wheel", onWheel, true);
    document.addEventListener("keydown", onKey, true);
    window.addEventListener("resize", dismiss);
    popup._cleanup = () => {
      document.removeEventListener("pointerdown", onDown, true);
      document.removeEventListener("wheel", onWheel, true);
      document.removeEventListener("keydown", onKey, true);
      window.removeEventListener("resize", dismiss);
      trigger.setAttribute("aria-expanded", "false");
      if (trigger.isConnected) trigger.focus({ preventScroll: true });
    };
    popup._pixOwnerId = node.id;
    popup._pixAnchor = trigger;
    _openPopup = popup;
    filter.focus({ preventScroll: true });
  });
}

function renderValueArea(node, axisKey, mount, refreshCounter, rerender, growth) {
  detachLineGutters(mount);
  mount.innerHTML = "";
  const state = readState(node);
  const axis = state[axisKey];
  if (!axis.widgetType) {
    mount.appendChild(el("div", "pix-xy-preview", "Pick a setting above to choose its values."));
    return;
  }
  const save = () => writeState(node, state);
  const refreshPreview = () => {
    const old = mount.querySelector(".pix-xy-preview");
    const fresh = buildPreview(axis);
    if (old) old.replaceWith(fresh); else mount.appendChild(fresh);
    refreshCounter();
  };

  if (axis.widgetType === "number") {
    // Keep precision synced with the live widget (0 = integer width/height/steps,
    // 1 = cfg, 2 = denoise) so a reloaded axis rounds correctly even if it was
    // saved before precision was tracked.
    const nmeta = lookupWidgetMeta(node, axis);
    // Same rule as the option list below: the live values drive resolveAxisValues via
    // the non-serialized stash, and the SAVED copy is only refreshed on a user-driven
    // render (writing it on the load path rewrites serialized state and flags an
    // untouched workflow "modified" - it bites an axis saved before `precision` was
    // tracked, whose stored null differs from the live 0).
    //
    // The STASH is written UNCONDITIONALLY - including to null - because it is what
    // resolveAxisValues actually reads. Only stashing when the fresh meta had a number
    // let a RE-POINTED axis keep the previous target's snap step: X on Empty Latent
    // `width` (real step 8), re-pointed to a LoRA strength (no step), silently snapped
    // 0.3 / 0.6 / 0.9 to 0 / 0 / 0 - three identical squares, no warning, and no Snap
    // toggle to undo it. `liveOptions` below was unconditional from the start, which is
    // exactly why it never had this bug; keep these three symmetrical.
    const livePrec = (nmeta && typeof nmeta.precision === "number") ? nmeta.precision : null;
    const liveStep = (nmeta && typeof nmeta.realStep === "number") ? nmeta.realStep : null;
    setLiveAxisMeta(axis, "livePrecision", livePrec);
    setLiveAxisMeta(axis, "liveRealStep", liveStep);
    if (!isGraphLoading()) {
      if (livePrec != null) axis.precision = livePrec;
      if (liveStep != null) axis.realStep = liveStep;
    }
    const seg = el("div", "pix-xy-seg");
    const sRange = el("span", null, "Range"); const sList = el("span", null, "List");
    (axis.mode === "list" ? sList : sRange).classList.add("on");
    sRange.addEventListener("click", () => { axis.mode = "range"; save(); rerender(); });
    sList.addEventListener("click", () => { axis.mode = "list"; save(); rerender(); });
    seg.appendChild(sRange); seg.appendChild(sList);
    const modeRow = el("div", "pix-xy-moderow");
    modeRow.appendChild(seg);
    // Per-axis Snap toggle - lives in the free space next to Range/List so it
    // adds no node height, and only shows when snapping has an effect (the field's
    // step is coarser than its precision, e.g. width/height snap to /16).
    // Read the EFFECTIVE values, the same ones resolveAxisValues snaps with. Reading the
    // saved copies here meant a workflow saved before realStep was tracked had its values
    // snapped while the toggle to stop it was never drawn - the control was invisible but
    // active.
    const effPrec = (livePrec != null) ? livePrec : axis.precision;
    const effStep = (liveStep != null) ? liveStep : axis.realStep;
    const snapUnit = Math.pow(10, -(effPrec != null ? effPrec : 0));
    if (effStep && effStep > snapUnit + 1e-9) {
      const snapT = buildToggle("Snap", axis.snap !== false, (v) => { axis.snap = v; save(); refreshPreview(); });
      snapT.title = "Round values to this setting's real step (e.g. width to multiples of 16). Off = exact.";
      modeRow.appendChild(snapT);
    }
    mount.appendChild(modeRow);

    if (axis.mode === "list") {
      const inp = isolate(el("input", "pix-xy-input"));
      inp.type = "text";
      inp.placeholder = "e.g.  4, 6, 8, 10   (or  4-10 (+2)  /  4-10 [4] )";
      inp.value = axis.raw.listText || "";
      inp.addEventListener("input", () => { axis.raw.listText = inp.value; save(); refreshPreview(); });
      mount.appendChild(inp);
    } else {
      const rangeRow = el("div", "pix-xy-range");
      rangeRow.appendChild(labeledField("Start", axis.raw.start, (v) => { axis.raw.start = v; save(); refreshPreview(); }));
      rangeRow.appendChild(labeledField("End", axis.raw.end, (v) => { axis.raw.end = v; save(); refreshPreview(); }));
      rangeRow.appendChild(labeledField("Steps", axis.raw.steps, (v) => { axis.raw.steps = v; save(); refreshPreview(); }));
      mount.appendChild(rangeRow);
    }
    mount.appendChild(buildPreview(axis));

  } else if (axis.widgetType === "combo") {
    const meta = lookupWidgetMeta(node, axis);
    const options = (meta && meta.options && meta.options.length) ? meta.options : (axis.options || []);
    // The refreshed list is SERIALIZED state, so persist it only when this render came
    // from a user action. renderBody also runs on the workflow-load path, and there the
    // live list is routinely a little different from the saved one (a LoRA added, a
    // checkpoint renamed) - writing it then rewrites node.properties on a clean open and
    // flags an untouched workflow "modified" (Vue Compat #18/#19).
    //
    // The live list is stashed unconditionally (non-serialized) because resolveAxisValues
    // filters the user's ticks against it. Gating the FILTER as well as the write was a
    // real bug: the checklist below renders from `options` (live) while the filter read
    // the saved list, so a model installed since the save could be ticked and still not
    // plot - hasPlot went false and Run quietly produced one ordinary image.
    setLiveAxisMeta(axis, "liveOptions", options);
    if (!isGraphLoading()) axis.options = options;
    renderComboValues(node, axisKey, mount, axis, options, save, refreshCounter, growth);

  } else if (axis.widgetType === "text") {
    const seg = el("div", "pix-xy-seg");
    const sFull = el("span", null, "Full list"); const sSr = el("span", null, "Find & replace");
    (axis.mode === "sr" ? sSr : sFull).classList.add("on");
    sFull.addEventListener("click", () => { axis.mode = "fulllist"; save(); rerender(); });
    sSr.addEventListener("click", () => { axis.mode = "sr"; save(); rerender(); });
    seg.appendChild(sFull); seg.appendChild(sSr);
    mount.appendChild(seg);

    if (axis.mode === "sr") {
      const find = isolate(el("input", "pix-xy-input"));
      find.type = "text"; find.placeholder = "Find (text already in the prompt), e.g.  an apple";
      find.value = axis.raw.srFind || "";
      find.style.marginBottom = "6px";
      find.addEventListener("input", () => { axis.raw.srFind = find.value; save(); refreshPreview(); });
      mount.appendChild(find);
      const rep = isolate(el("textarea", "pix-xy-input"));
      rep.placeholder = "Replace with (one per line):\na watermelon\na gun";
      rep.value = axis.raw.srReplace || "";
      rep.addEventListener("input", () => { axis.raw.srReplace = rep.value; save(); refreshPreview(); });
      mount.appendChild(rep);
      // Same one-per-line contract as Full list, so it gets the same gutter.
      // Must run AFTER the box is in the document - the gutter measures it.
      attachLineNumbers(rep);
    } else {
      const ta = isolate(el("textarea", "pix-xy-input"));
      ta.placeholder = "One full value per line";
      ta.value = axis.raw.listText || "";
      ta.addEventListener("input", () => { axis.raw.listText = ta.value; save(); refreshPreview(); });
      mount.appendChild(ta);
      // Numbered lines: with wrapping on, one prompt spans several visual rows,
      // so without numbers you cannot see where the next value starts (the
      // user's other half of the same report). Read-only by construction - the
      // numbers are a sibling element, never part of the textarea's value.
      attachLineNumbers(ta);
    }
    mount.appendChild(buildPreview(axis));
  }
}

// ── options toggles ──────────────────────────────────────────────────────────

function buildToggle(label, on, onToggle) {
  const t = el("div", "pix-xy-toggle");
  const pill = el("div", "pix-xy-pill" + (on ? " on" : ""));
  pill.appendChild(el("div", "pix-xy-knob"));
  t.appendChild(pill);
  t.appendChild(el("span", null, label));
  t.addEventListener("click", () => {
    const nowOn = !pill.classList.contains("on");
    pill.classList.toggle("on", nowOn);
    onToggle(nowOn);
  });
  return t;
}

function buildWrapControl(node, mount, onChange, growth) {
  mount.replaceChildren();
  const checkLabel = el("label");
  const checkbox = isolate(el("input", "pix-xy-wrap-enabled"));
  checkbox.type = "checkbox";
  checkLabel.append(checkbox, document.createTextNode("Wrap grid"));
  const columnsLabel = el("label");
  const columns = isolate(el("input", "pix-xy-input pix-xy-wrap-columns"));
  columns.type = "number";
  columns.min = "1";
  columns.max = "100";
  columns.step = "1";
  columnsLabel.append(document.createTextNode("Columns"), columns);
  mount.title = "For one axis only: fill left to right, then wrap into more rows. Applies to the next run.";
  mount.append(checkLabel, columnsLabel);
  checkbox.addEventListener("change", () => {
    const state = readState(node);
    state.wrapGrid = checkbox.checked;
    writeState(node, state);
    onChange();
  });
  columns.addEventListener("change", () => {
    const state = readState(node);
    state.wrapColumns = normalizeWrapColumns(columns.value === "" ? undefined : columns.value);
    columns.value = String(state.wrapColumns);
    writeState(node, state);
    onChange();
  });
  let mounted = false;
  return (layout) => {
    const wasHidden = mount.hidden;
    mount.hidden = !layout.singleAxis;
    const state = readState(node);
    checkbox.checked = state.wrapGrid === true;
    columns.disabled = !checkbox.checked;
    if (document.activeElement !== columns) columns.value = String(normalizeWrapColumns(state.wrapColumns));
    if (mounted && wasHidden !== mount.hidden) growth?.();
    mounted = true;
  };
}

const THEMES = [["dark", "Dark"], ["light", "Light"], ["mono", "Mono"]];

// Grid color-theme picker. Switching re-skins the CURRENT grid instantly (the
// cells are cached server-side) via /pixaroma/api/xy_plot/restyle; if no grid
// exists yet it just stores the choice for the next run.
function buildThemeControl(node, state) {
  const wrap = el("div", "pix-xy-themewrap");
  wrap.appendChild(el("span", "pix-xy-themelbl", "Grid"));
  const seg = el("div", "pix-xy-seg pix-xy-themeseg");
  const cur = state.theme || "dark";
  for (const [val, label] of THEMES) {
    const s = el("span", null, label);
    if (cur === val) s.classList.add("on");
    s.title = `Grid background + label style: ${label}`;
    s.addEventListener("click", async () => {
      const st = readState(node);
      if (st.theme === val) return;
      st.theme = val;
      writeState(node, st);
      seg.querySelectorAll("span").forEach((x) => x.classList.remove("on"));
      s.classList.add("on");
      // Instant re-skin of the grid already on screen.
      const last = node._pixXyLastGrid;
      if (last && last.sessionId) {
        // Token guards rapid theme spam: a stale fetch that resolves late must
        // not overwrite node._pixXyLastGrid (which Save/Copy/Open act on).
        const rtok = (node._pixXyRestyleReq = (node._pixXyRestyleReq || 0) + 1);
        try {
          const resp = await fetch(pixApiUrl("/pixaroma/api/xy_plot/restyle"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_id: last.sessionId, theme: val }),
          });
          if (rtok !== node._pixXyRestyleReq) return;   // superseded by a newer theme click
          if (resp.ok) {
            const data = await resp.json().catch(() => ({}));
            if (data.filename) {
              const url = pixApiUrl(`/view?filename=${encodeURIComponent(data.filename)}&subfolder=&type=temp&t=${Date.now()}`);
              node._pixXyLastGrid = Object.assign({}, last, { filename: data.filename, url });
              node._pixXyGrid?.setGrid(url);
            }
          } else if (resp.status === 404) {
            xyToast("This grid's cells were cleared - run the plot again to see the new theme.");
          } else {
            // 405 = the restyle route isn't loaded -> ComfyUI needs a restart.
            xyToast("Theme saved. Restart ComfyUI to preview themes instantly; it applies on your next Run regardless.", "warn");
          }
        } catch (_e) {
          xyToast("Theme saved - it'll apply on your next Run.");
        }
      }
    });
    seg.appendChild(s);
  }
  wrap.appendChild(seg);
  return wrap;
}

const SAVE_SIZES = [["2048", "2048"], ["4096", "4096"], ["8192", "8192"], ["full", "Full"]];

// Save-resolution picker: the size the Save Disk / Save Output buttons export at
// (grid long side, in px). "Full" = native resolution, so a big grid saves large
// instead of being shrunk to the 4096 preview. Default 4096 (matches today). The
// grid is re-assembled at this size only when you click Save, so picking a bigger
// size costs nothing on a normal run. Does NOT change the node's IMAGE output,
// which stays 4096 for downstream speed. Purely a stored choice - no server call.
function buildSaveResControl(node, state) {
  const wrap = el("div", "pix-xy-themewrap");
  const lbl = el("span", "pix-xy-themelbl", "Save");
  lbl.title = "Resolution the Save Disk / Save Output buttons export at (grid long side, in px). Full = native. The node's own image output stays 4096 for downstream speed.";
  wrap.appendChild(lbl);
  const seg = el("div", "pix-xy-seg pix-xy-themeseg");
  const cur = state.saveMaxSize || "4096";
  for (const [val, label] of SAVE_SIZES) {
    const s = el("span", null, label);
    if (cur === val) s.classList.add("on");
    s.title = val === "full"
      ? "Export at native (full) resolution - largest file."
      : `Export capped to ${val} px on the long side.`;
    s.addEventListener("click", () => {
      const st = readState(node);
      if ((st.saveMaxSize || "4096") === val) return;
      st.saveMaxSize = val;
      writeState(node, st);
      seg.querySelectorAll("span").forEach((x) => x.classList.remove("on"));
      s.classList.add("on");
    });
    seg.appendChild(s);
  }
  wrap.appendChild(seg);
  return wrap;
}

// ── top-level render ─────────────────────────────────────────────────────────

// Fill (or empty) one axis's heads-up slot. DOM only: it never touches node.size,
// node.properties or a widget, so it cannot flag a workflow modified (#18). The
// no-change early return keeps the pointerenter refresh from churning the DOM on
// every pass over the node.
function fillAxisNote(node, slot, axis, otherAxis) {
  const txt = axisNote(node, axis, otherAxis);
  if (slot.dataset.noteTxt === txt) return;
  slot.dataset.noteTxt = txt;
  slot.innerHTML = "";
  if (!txt) return;
  const note = el("div", "pix-xy-axisnote");
  note.appendChild(el("span", "pix-xy-axisnote-ic", "⚠"));
  note.appendChild(el("span", null, txt));
  note.title = txt;
  slot.appendChild(note);
}

// Re-read both heads-up lines WITHOUT rebuilding the body. The note reports state
// that lives on ANOTHER node (the LoRA Loader's row toggles), and nothing re-renders
// this node when that node changes - so a warning the user has just acted on would
// sit there telling them to do it again, which is a worse bug than the one the note
// fixes. Wired to pointerenter on the body: free until the cursor arrives, which is
// exactly when the user comes back to look.
export function refreshAxisNotes(node, root) {
  if (!node || !root) return;
  let state;
  try { state = readState(node); } catch (_e) { return; }
  for (const axisKey of ["x", "y"]) {
    const slot = root.querySelector(`.pix-xy-axis[data-axis="${axisKey}"] .pix-xy-noteslot`);
    if (slot) fillAxisNote(node, slot, state[axisKey], state[axisKey === "x" ? "y" : "x"]);
  }
}

// valueGrowth allows user edits to grow a restored node without resizing it on load.
export function renderBody(node, root, handlers) {
  closePopupIfOwner(node);
  const state = readState(node);
  renderFilenameControl(node, root.querySelector(".pix-xy-filename"), { beforeOpen: closePopup });
  const updateWrap = buildWrapControl(node, root.querySelector(".pix-xy-wrap"),
    () => { refreshCounter(); (handlers.growth || handlers.valueGrowth)?.(); }, handlers.growth || handlers.valueGrowth);

  const refreshCounter = () => {
    const wrap = root.querySelector(".pix-xy-counter-wrap");
    if (!wrap) return;
    const layout = computeCounts(readState(node));
    const { displayCols, displayRows, total, hasPlot } = layout;
    updateWrap(layout);
    wrap.innerHTML = "";
    const chip = el("div", "pix-xy-counter" + (hasPlot ? "" : " muted"));
    chip.textContent = hasPlot
      ? `→ ${total} image${total === 1 ? "" : "s"}  (${displayCols || 1} × ${displayRows || 1}${layout.wrap ? ", wrapped" : ""})`
      : "Pick X and/or Y values to plot";
    wrap.appendChild(chip);
  };

  for (const axisKey of ["x", "y"]) {
    const card = root.querySelector(`.pix-xy-axis[data-axis="${axisKey}"]`);
    detachLineGutters(card);   // the value area's textarea lives in here
    card.innerHTML = "";
    const head = el("div", "pix-xy-axis-head");
    head.appendChild(el("span", "pix-xy-badge", axisKey.toUpperCase()));
    head.appendChild(document.createTextNode(axisKey === "x" ? "across" : "down"));
    head.appendChild(el("span", "pix-xy-axis-dir", axisKey === "x" ? "➡ columns" : "⬇ rows"));
    // Right-aligned header cluster: each axis shows its own Reset once a setting
    // is picked. (Node help moved to the selection-toolbar Help button.)
    const headRight = el("div", "pix-xy-head-right");
    // Per-axis reset (clears just this axis; the other axis + toggles stay).
    // Only shown once a setting is picked - nothing to reset on an empty axis.
    if (handlers.resetAxis && state[axisKey] && state[axisKey].widgetType) {
      const axReset = el("div", "pix-xy-axis-reset");
      axReset.appendChild(el("span", "pix-xy-axis-reset-ic", "↺"));
      axReset.appendChild(el("span", null, "Reset " + axisKey.toUpperCase()));
      axReset.title = `Reset the ${axisKey.toUpperCase()} axis only - clears its setting and values. The other axis and your toggles stay.`;
      axReset.addEventListener("click", () => handlers.resetAxis(axisKey));
      headRight.appendChild(axReset);
    }
    if (headRight.children.length) head.appendChild(headRight);
    card.appendChild(head);
    const pickRow = el("div", "pix-xy-row");
    card.appendChild(pickRow);
    renderPicker(node, axisKey, pickRow, handlers.rerender);
    // "now: <value>" line so the user sees which setting this axis really
    // points at (e.g. the negative 'watermark, text' vs the positive prompt).
    const curp = currentValuePreview(node, state[axisKey]);
    if (curp) {
      const hint = el("div", "pix-xy-curhint", "now: " + curp);
      hint.title = "Current value of the setting this axis points at. If it's not the one you meant, re-pick above.";
      card.appendChild(hint);
    }
    // Anything else on the target node that lands in EVERY square (today: the LoRA
    // Loader's other switched-on rows). Shown here rather than only in the picker
    // popup because the surprise arrives when you look at the finished grid, not
    // when you pick. A stable empty slot, so refreshAxisNotes can update it in
    // place without rebuilding the card (which would drop the filter box's focus
    // and the checklist's scroll position).
    const noteSlot = el("div", "pix-xy-noteslot");
    card.appendChild(noteSlot);
    fillAxisNote(node, noteSlot, state[axisKey], state[axisKey === "x" ? "y" : "x"]);
    const valueArea = el("div", "pix-xy-valuearea");
    card.appendChild(valueArea);
    renderValueArea(node, axisKey, valueArea, refreshCounter, handlers.rerender, handlers.growth || handlers.valueGrowth);
  }

  refreshCounter();

  const opts = root.querySelector(".pix-xy-opts");
  opts.innerHTML = "";
  opts.appendChild(buildToggle("Lock seed", state.lockSeed !== false, (v) => { const s = readState(node); s.lockSeed = v; writeState(node, s); }));
  opts.appendChild(buildToggle("Draw labels", state.drawLabels !== false, (v) => { const s = readState(node); s.drawLabels = v; writeState(node, s); }));
  opts.appendChild(buildToggle("Save cells", state.saveCells === true, (v) => { const s = readState(node); s.saveCells = v; writeState(node, s); }));

  // Second row: grid theme picker on the left, Reset on the right.
  const opts2 = root.querySelector(".pix-xy-opts2");
  opts2.innerHTML = "";
  opts2.appendChild(buildThemeControl(node, state));
  if (handlers.reset) {
    const reset = el("div", "pix-xy-resetbtn");
    reset.appendChild(el("span", null, "↺"));
    reset.appendChild(el("span", null, "Reset XY"));
    reset.title = "Clear BOTH axes, all selections, and the toggles - back to a fresh node.";
    reset.addEventListener("click", () => handlers.reset());
    opts2.appendChild(reset);
  }

  // Third row: the Save-resolution picker, right above the Save buttons.
  const opts3 = root.querySelector(".pix-xy-opts3");
  opts3.innerHTML = "";
  opts3.appendChild(buildSaveResControl(node, state));

  if (handlers.growth) handlers.growth();
}
