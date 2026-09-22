---
id: "node:PixaromaTextOverlay"
title: "Text Overlay Pixaroma"
kind: node
category: "Prompt & Text"
order: 45
icon: ""
tags: "caption title font subtitle words on image ttf otf typeface custom font own font install font fonts folder"
comfyClass: "PixaromaTextOverlay"
---

> Adds a styled text layer on top of an image, with a fullscreen editor for precise placement.

## What it does

Draws a single block of styled text over the input image. Configure font, size, weight, italic, alignment, line height, letter spacing, color, opacity, rotation, position, and an optional background bar on the node panel. Click `Open Text Editor` for a fullscreen canvas where you can drag the text to move it, drag a corner to scale, drag the handle to rotate, use snap guides, or align to canvas edges.

## Inputs

**image** — Required image to draw the text on.

**text** — Optional wire from any STRING source. When connected it replaces whatever text is typed on the panel (the box greys out as a reminder).

## Using your own fonts

Put your `.ttf` or `.otf` files in `ComfyUI/models/fonts`, then click the `↻` button at the top of the font list to pick them up without restarting. They appear under `Custom`. The full details are on the Add your own fonts page.

## Outputs

**image** — The input image with your text drawn on top.

> **Tip:** Vertical text direction is supported via the `Horizontal | Vertical` toggle in the panel.
