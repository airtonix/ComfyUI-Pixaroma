---
id: "node:PixaromaImageInfo"
title: "Image Info Pixaroma"
kind: node
category: "Image"
order: 1
icon: ""
tags: "width height mask filename size dimensions"
comfyClass: "PixaromaImageInfo"
---

> Unpacks the image_info bundle from Load Image Mini into the mask, size and filename you need.

## What it does

Load Image Mini keeps its face small by sending everything except the image through a single image_info output. This node opens that bundle back up. Wire it in only when you actually need the extras, so the loader itself stays compact.

The width, height and filename also show on this node's own face (in the Classic renderer), so a quick glance often saves you from pulling any wires at all.

## Outputs

**image** — The picture (the same one the loader's image output carries).

**mask** — The mask from the image's transparency, ready for inpainting. Blank if the image has no alpha.

**width** — The image width in pixels, after any resize.

**height** — The image height in pixels.

**filename** — The image's file name.

> **Tip:** Connect the image_info output of a Load Image Mini Pixaroma node into this node's image_info input.
