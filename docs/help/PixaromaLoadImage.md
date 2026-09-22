---
id: "node:PixaromaLoadImage"
title: "Load Image Pixaroma"
kind: node
category: "Image"
order: 23
icon: ""
tags: "open file input picker photo import"
comfyClass: "PixaromaLoadImage"
---

> Load an image with built-in resize - max megapixels, longest side, fit inside, crop to fill, and more - in one node.

## What it does

A drop-in replacement for the native Load Image node with an inline resize panel, so you rarely need a separate resize node downstream. Supports all native features: upload, drag-drop, paste, animated images, and alpha-to-mask extraction.

Resize modes: `Off`, `Max megapixels`, `Longest side`, `Scale by`, `Fit inside`, `Crop to fill`, `Match aspect ratio`, and `Pad`. Snap chips, a resample picker, and an upscale toggle round out the controls.

## How to use

- Click `Upload`, drag a file onto the node, or paste from the clipboard to load an image.
- Use the thumbnail dropdown (with subfolder groups) or the `◀ ▶` arrows to switch between images.
- Pick a resize mode chip in the panel. Its controls appear below.
- The node shows a live INPUT to OUTPUT size card so you can confirm the final dimensions before running.

## Outputs

**image** — The loaded image, after any resize.

**mask** — Alpha channel as a mask (blank if the image has no alpha).

**width** — Output width in pixels, after any resize.

**height** — Output height in pixels, after any resize.

**filename** — The image filename (without extension).

**original_width** — Width of the original image before any resize.

**original_height** — Height of the original image before any resize.

> **Tip:** Replaces Get Image Size + Image Scale chains in most workflows.
