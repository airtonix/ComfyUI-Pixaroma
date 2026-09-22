---
id: "node:PixaromaInpaintStitch"
title: "Inpaint Stitch Pixaroma"
kind: node
category: "Utility"
order: 14
icon: ""
tags: "seam blend feather merge join invisible edge"
comfyClass: "PixaromaInpaintStitch"
---

> Paste your inpainted crop back onto the original, blended so the seam disappears.

## What it does

The other half of the inpaint workflow. After Inpaint Crop Pixaroma cropped a region and you ran your model on it, this node resizes the result back and blends it into the original at the exact spot. By default only the painted area changes, so everything else stays pixel-perfect.

The seam softness and blend mode start from the Inpaint Crop Pixaroma node and ride the `crop_info` wire, but you can OVERRIDE them right here (`softness` -1 = use the crop's) along with `color match`. The big win: this node is AFTER the sampler, so changing any of them re-runs only this node - the sampler stays cached on a fixed seed - meaning you can fine-tune the blend instantly without re-generating the image. `color match` corrects a color or tone shift the model introduced by matching the unchanged surroundings around your mask (keep it Off when you deliberately changed colors). It also hands back the untouched `original` so you can compare before and after.

## How to use

- Wire the `crop_info` output of Inpaint Crop Pixaroma into `crop_info`.
- Wire your inpainted crop (after the model) into `image`. It is resized back automatically.
- Run the workflow to get the finished full image.
- To fine-tune the blend WITHOUT re-generating: change `softness`, `blend mode` or `color match` HERE and run again - only this node re-runs, the sampler is cached (fixed seed), so it's instant.
- Wire `image` and `original` into Image Compare Pixaroma for an instant before / after.

## Settings

**softness** — Seam feather, overriding the Crop node's. -1 = use the Crop node's value; 0-150 tunes the blend here, instantly (no re-sample). Bigger than the room the crop left may show a slightly harder edge - raise the Crop node's softness for more room.

**blend mode** — from crop = use what the Crop node set. mask = replace only the painted area. whole crop = replace the entire cropped box. Changing it here re-runs only this node.

**color match** — Correct a color/tone shift the model introduced, matching the unchanged surroundings around your mask. Off for deliberate color changes (it would pull them back). No live preview - set it and re-run.

## Outputs

**image** — The original image with the inpainted crop blended back in place.

**original** — The full original uncropped image, for a before / after compare.
