---
id: "node:PixaromaCrop"
title: "Image Crop Pixaroma"
kind: node
category: "Image"
order: 11
icon: ""
tags: "trim cut region area chop"
comfyClass: "PixaromaCrop"
---

> Crop any image visually with a draggable handle - no typing pixel coordinates.

## What it does

Shows a draggable crop rectangle over your image with corner and edge handles. The on-node panel exposes `Width`, `Height`, `X`, `Y`, `Ratio`, and `Alignment` fields - math expressions like `1024+512` or `512*2` work in any number field. Picking a non-Free alignment auto-centers the crop rectangle.

Three ways to load a source image: wire any upstream IMAGE into the input slot, drag and drop a file onto the node body, or paste from the clipboard with `Ctrl+V`. Drag-drop and paste auto-disconnect the upstream wire so your loaded image takes over.

## How to use

- Wire an upstream IMAGE, drag a file onto the node, or paste with `Ctrl+V`.
- To keep transparency, also wire a MASK into the `mask` input (for example Load Image's MASK output) - it gets cut with the exact same box.
- Adjust the crop rectangle using the panel fields or click `Open Crop Editor` for the fullscreen editor with handles.
- Choose a preset ratio (1:1, 16:9, 9:16, and more) or leave it on `Free`.
- Run the workflow to output the cropped result.
- To put an edited crop back later, wire the `crop_info` output into Image Uncrop Pixaroma.

## Outputs

**image** — The cropped image.

**mask** — The cropped mask, cut with the same box as the image. Wire a MASK in (such as Load Image's MASK) to carry transparency through the crop; otherwise it is a fully-opaque mask sized to the crop.

**crop_info** — Feed this into Image Uncrop Pixaroma to paste an edited version of the crop back onto the original image at the exact same spot.

**width** — Width of the cropped area in pixels.

**height** — Height of the cropped area in pixels.
