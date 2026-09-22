---
id: "node:PixaromaPaint"
title: "Paint Pixaroma"
kind: node
category: "Editors"
order: 9
icon: ""
tags: "brush draw sketch layers erase paint"
comfyClass: "PixaromaPaint"
---

> A layered painting editor inside ComfyUI - draw, retouch, and compose on stacked layers.

## What it does

Opens a fullscreen painting canvas with multiple layers, Photoshop-style controls (drag to reorder, opacity, blend modes, merge, flatten), and a full brush engine. Tools include pencil, brush, eraser, smudge, fill, shape, and color picker. The smudge tool gives smooth color blending; brush hardness and opacity are fully adjustable.

Drag an image file onto the closed node body to load it as a new top layer and open the editor automatically. The `AI Remove Background` button on image layers extracts subjects with one click. A `Transparent BG` checkbox in the toolbar lets you save a PNG with a transparent background directly to disk.

## How to use

- Drag an image onto the node body to pre-load a layer, or click `Open Paint Studio` to start from scratch.
- Use the layer panel on the right to add, reorder, merge, or delete layers.
- Pick a tool from the left toolbar and paint on the canvas.
- Click `Save` when done; run the workflow to output the result.

## Outputs

**image** — The final composited painting.

**width** — Width of the canvas in pixels.

**height** — Height of the canvas in pixels.
