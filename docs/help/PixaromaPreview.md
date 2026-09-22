---
id: "node:PixaromaPreview"
title: "Preview Image Pixaroma"
kind: node
category: "Image"
order: 26
icon: ""
tags: "view result thumbnail show display civitai metadata parameters resources share"
comfyClass: "PixaromaPreview"
---

> Inline image preview with Save, Copy, and Open buttons - batch-aware, with a Strip or Grid layout.

## What it does

Shows every image in a batch as thumbnails on the node. Click a thumbnail to expand it; use the `◀ ▶` arrow keys (or click the image) to flip through the batch; press `Esc` to collapse. Toggle `Strip` (one row) and `Grid` (fills the body) layouts with the small icon in the preview's top-right corner.

Four buttons act on the selected frame: `Save Disk` saves to a folder you choose, `Save Output` writes to ComfyUI's output folder, `Copy` puts the frame on your clipboard, `Open` opens it in a new tab. Both Save buttons embed the workflow into the PNG so you can drag it back in later.

Set `save_mode` to `save` and the node becomes a drop-in for the native Save Image node: every frame is written to output on each Run.

If ComfyUI itself was started with `--disable-metadata`, nothing is written into your images: no workflow, no prompt, no Civitai info. That is a ComfyUI-wide switch you would have added yourself, and it is off unless you did.

## How to use

- Wire any IMAGE source into `image`.
- Leave `save_mode` on `preview` while iterating; switch to `save` for automatic saves.
- Use `filename_prefix` to control the output name. Supports subfolders with `/`, date tokens like `%date:yyyy-MM-dd%`, and node references like `%Seed Pixaroma.seed%` that print another node's value into the name (in `save` mode, and the Save Disk / Save Output buttons).
- Click a thumbnail to expand it, then use the arrow keys to browse the batch.

## Outputs

**image** — The image(s) passed through unchanged so you can keep wiring downstream.

## The buttons on the node

**Save Disk** — Saves the picture to a folder on your computer, letting you choose where and what to call it.

**Save Output** — Saves it straight into ComfyUI's output folder using your filename prefix.

**Copy** — Copies the picture to your clipboard, ready to paste into another app.

**Open** — Opens the picture in a new browser tab for a closer look.

**The layout button** — Switches a batch between Grid and Strip.

**A thumbnail** — Click one to blow it up inside the node. Click again to step to the next frame.

## Sharing on Civitai

Turn on `Add Civitai generation info` in the node's right-click settings and the saved image also carries its settings in the format Civitai reads, so posting it there fills in the model and every LoRA with its strength, plus steps, seed, sampler and size. The values are read from your workflow, so nothing needs wiring in, including when they come from Control Panel Pixaroma or Seed Pixaroma.

The first save after adding a new model pauses briefly to fingerprint it, which is what lets Civitai recognise the file; that happens once per model. Left off, nothing about the file changes.

> **Tip:** Preview state (selected frame, layout) survives switching workflow tabs.
