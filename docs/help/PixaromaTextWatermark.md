---
id: "node:PixaromaTextWatermark"
title: "Text Watermark Pixaroma"
kind: node
category: "Prompt & Text"
order: 46
icon: ""
tags: "signature logo copyright brand stamp font ttf otf typeface custom font own font install font fonts folder"
comfyClass: "PixaromaTextWatermark"
---

> Stamps a styled text watermark at a fixed anchor on every image in a batch.

## What it does

Adds a text watermark to an image or a whole batch. Unlike Text Overlay there is no fullscreen editor - you configure everything on the node panel and click Run. Position is set by choosing one of nine anchor points (a corner, edge midpoint, or center) plus a margin inset, so the watermark lands in the same relative spot on every image regardless of its size.

## Size mode

Switch between `px` (a fixed pixel size) and `% width` (a percentage of each image's width). Percentage mode keeps the watermark visually the same across a batch of mixed resolutions.

## Inputs

**image** — Image or batch to stamp the watermark onto.

**text** — Optional wire from any STRING source. When connected it replaces the panel text (the box greys out).

## Using your own fonts

Put your `.ttf` or `.otf` files in `ComfyUI/models/fonts`, then click the `↻` button at the top of the font list to pick them up without restarting. They appear under `Custom`. Handy for stamping a signature or brand font. The full details are on the Add your own fonts page.

## Outputs

**image** — The input image(s) with the watermark drawn on top.

> **Tip:** Vertical text direction is supported via the `Horizontal | Vertical` toggle.
