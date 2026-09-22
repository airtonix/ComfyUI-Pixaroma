---
id: "node:PixaromaVersionCheck"
title: "Version Check Pixaroma"
kind: node
category: "Utility"
order: 48
icon: ""
tags: "version diagnostic about update which version"
comfyClass: "PixaromaVersionCheck"
---

> Shows your ComfyUI, frontend, node renderer, and Pixaroma version numbers in one place.

## What it does

Displays four lines: ComfyUI backend version, ComfyUI frontend version, which node interface is active (`Nodes 2.0` or `Legacy`), and the installed Pixaroma version. Click `Copy` to copy all four as plain text for a bug report. Click the `Node UI` row to switch renderers (the page reloads). Click `Refresh` for a hard cache-clearing reload.

## Spotting an out-of-date browser cache

After an update the browser sometimes keeps running the OLD cached version of the nodes even though the files on disk are already new. This node compares the version the browser actually loaded against the version on disk. If they differ, the `Pixaroma` line turns orange and a warning tells you to press `Ctrl+Shift+R`. This catches the sneaky case where everything looks updated but the browser is still running old code, which can make workflows behave strangely or fail. The `Copy` text includes the warning too, so a pasted bug report shows it.

## If Ctrl+Shift+R does not clear it

Some browsers cache very stubbornly. To force a clean reload:

- Press `F12` to open the developer tools.
- Click the `Network` tab.
- Tick the `Disable cache` checkbox at the top of that tab.
- Keep the tools open and refresh the page (`Ctrl+Shift+R` / `Cmd+Shift+R`).

## The buttons on the node

**Node UI** — Shows which node renderer you are on, and switches between them. The page reloads to rebuild every node.

**Copy** — Copies all the version lines as text, ready to paste into a question.

**Refresh** — Clears the cache and reloads. For a guaranteed refresh use Ctrl+Shift+R instead.

> **Tip:** No inputs, no outputs, no work on Run - it is a pure info panel.
