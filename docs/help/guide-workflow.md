---
id: "guide:workflow"
title: "Run a downloaded workflow"
kind: guide
category: "Start here"
order: 51
icon: "▶️"
tags: "json episode download open load workflow file drag"
---

> Two ways to open a workflow file you downloaded.

## The quick way

Drag the workflow file straight onto the ComfyUI canvas. It opens immediately. Nothing to copy, nothing to restart.

## The tidy way

Put the file where ComfyUI keeps your workflows, so it shows up in the workflows list every time:

- Copy the `.json` file into `ComfyUI/user/default/workflows/`
- Refresh the browser page
- Open it from the workflows list in the sidebar

## Missing nodes when it opens?

A workflow can use nodes you do not have yet. ComfyUI will name them, and the Manager can install the missing ones for you. If the missing node is a Pixaroma one, you are simply on an older version: see Update the nodes.

> **Tip:** A workflow made on someone else's machine may point at models you do not have. The download links are usually in a note on the canvas.
