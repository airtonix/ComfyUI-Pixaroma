---
id: "node:PixaromaResizeCrop"
title: "Resize Crop Pixaroma"
kind: node
category: "Image"
order: 33
icon: ""
tags: "exact size cover fill stretch squash aspect force size"
comfyClass: "PixaromaResizeCrop"
---

> Force an image to an exact width and height by crop-to-fill - no stretching, no letterboxing.

## What it does

Scales the image so it completely fills the target box, then crops the overflow from the center. The result is always exactly the width and height you set. Smaller images are scaled up to fill. Great for forcing image or video frames to a fixed size like 512x896 or 704x1280.

## How to use

- Wire an image into `image`.
- Type the size into the `width` and `height` fields, or wire a number into them from another node (e.g. Resolution Pixaroma or a Number node).
- The fields default to 1024 x 1024. The up/down arrows step by 8 since AI/video sizes are usually multiples of 8, but you can type any exact value.
- Optionally wire a `mask` - it gets cropped to the same size.

## Outputs

**image** — The cropped image, exactly width x height pixels.

**mask** — The cropped mask, matching the output size (blank when no mask is wired in).

**width** — The output width in pixels.

**height** — The output height in pixels.

> **Tip:** Need to scale without cropping, fit inside a box, or pad instead? Use Image Resize Pixaroma, which has all eight resize modes.
