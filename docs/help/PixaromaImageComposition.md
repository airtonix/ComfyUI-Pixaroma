---
id: "node:PixaromaImageComposition"
title: "Image Composer Pixaroma"
kind: node
category: "Editors"
order: 10
icon: ""
tags: "collage blend layers grade montage composite text layer font ttf otf custom font"
comfyClass: "PixaromaImageComposition"
---

> A layer-based image compositor inside ComfyUI - arrange, blend, and grade multiple images on one canvas.

## What it does

Opens a fullscreen compositor where you stack images as layers and control each one independently: move, scale, rotate, set opacity, choose a blend mode, apply Gaussian blur, or remove its background with AI.

The eraser tool masks any layer non-destructively, with a `Restore` mode to paint areas back in. An FX adjustment layer (like a Photoshop grade layer) applies color-grade effects (exposure, contrast, saturation, tone) plus 14 cinematic presets to everything below it. Text layers let you add styled, editable text directly on the canvas.

Drag an image onto the closed node body to add it as a new layer. Wire upstream IMAGE inputs into placeholder slots for generative workflows.

## How to use

- Drag an image onto the node body to add a layer and open the editor, or click `Open Image Composer`.
- Add more layers via drag-drop, paste, the `+` button, or by wiring an upstream IMAGE into a placeholder slot.
- Select a layer in the panel to move / scale / rotate it with handles, or use the right sidebar to set opacity, blend mode, and blur.
- Add an FX layer to apply a color grade or cinematic preset above any layer group.
- Click `Save` when done; run the workflow to composite and output the result.

## Using your own fonts

Text layers can use your own fonts. Put your `.ttf` or `.otf` files in `ComfyUI/models/fonts`, then click the `↻` button at the top of the font list to pick them up without restarting. They appear under `Custom`. The full details are on the Add your own fonts page.

## Outputs

**image** — The fully composited image.

**width** — Width of the canvas in pixels.

**height** — Height of the canvas in pixels.
