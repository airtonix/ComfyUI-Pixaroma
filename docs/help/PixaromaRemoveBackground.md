---
id: "node:PixaromaRemoveBackground"
title: "Remove Background Pixaroma"
kind: node
category: "Image"
order: 35
icon: ""
tags: "cutout transparent alpha matte birefnet rembg erase background"
comfyClass: "PixaromaRemoveBackground"
---

> Cut out the foreground from an image using a BiRefNet AI model.

## What it does

Runs a BiRefNet model over the image and returns a cutout with a transparent background (RGBA), plus a foreground mask and an inverted mask - all three in one pass.

## How to use

- Wire an image into `image` and pick a model from the `model` dropdown.
- Models live in `ComfyUI/models/background_removal/`. If the dropdown is empty, download one from HuggingFace first.
- Filenames containing `matt` or `hr` preprocess at 2048px - better for hair and fine edges. Others use 1024px.
- Connect the cutout `image` for compositing, `mask` for inpainting (white = kept foreground), or `inverted_mask`.

## Outputs

**image** — The cutout in RGBA - the background is fully transparent.

**mask** — Foreground mask: white where the subject was kept.

**inverted_mask** — Background mask: the foreground mask flipped.

> **Tip:** Common models: `birefnet.safetensors` (standard), `birefnet-hr.safetensors` (high-res), `birefnet-matting.safetensors` (best for hair / fur).
