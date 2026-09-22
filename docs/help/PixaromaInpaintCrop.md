---
id: "node:PixaromaInpaintCrop"
title: "Inpaint Crop Pixaroma"
kind: node
category: "Image"
order: 13
icon: ""
tags: "inpaint mask repair fix retouch face hands blemish"
comfyClass: "PixaromaInpaintCrop"
---

> The easy way to set up an inpaint - paint a mask, get a model-ready crop automatically.

## What it does

Open the fullscreen editor and paint a mask over the part of the image you want to fix. The node finds the box around your mask, adds a context margin so the model can see the surroundings, and crops a clean, model-friendly piece (sized to a multiple of 8 and scaled toward your target, so even a small masked area gets enough resolution to look sharp).

Wire the cropped `image` and `mask` into your inpaint model (KSampler, Flux, edit models), then send `crop_info` into Inpaint Stitch Pixaroma to drop the result back in place. The orange box in the editor shows exactly what will be cropped as you paint. You also set how the seam blends here, with the `Softness` slider, and watch it preview live in a tint color you can switch (red, green, blue, yellow, orange) so it stays visible on any subject.

## How to use

- Wire an image in, or drag-drop / paste one onto the node body.
- Click `Open mask editor` and paint over the area to change. Use Brush / Erase (B / E), the size slider or `[` `]`, Clear and Invert. Scroll the wheel to zoom in for fine detail; hold Space and drag (or middle-drag) to pan.
- In the editor, drag `Softness` to set how soft the seam blends - the preview shows it live. Softness, blend mode, mask grow, crop size and context are on the node AND mirrored in the editor, so set them wherever is handier.
- Click `Save` to keep the mask on the node, then wire `image` and `mask` into your inpaint model. Saving is what stores your painting: if you close the editor with unsaved strokes it asks first, so you cannot lose them by accident.
- Send `crop_info` to Inpaint Stitch Pixaroma.

## Settings

**softness** — How far the seam feathers when the crop is pasted back. Higher values grow the crop a little so the soft blend has room (you'll see the crop box expand). The editor previews it live; it travels to Inpaint Stitch automatically.

**blend mode** — How the result is pasted back. Mask: only the area you painted is replaced, the rest of the crop keeps the original (the normal inpaint). Whole crop: the ENTIRE cropped box is replaced with the model's version - use when the model also relit or changed the surroundings, or for an img2img-style pass.

**size mode** — Keep shape scales the long side to the target with no stretching (best quality). Force size outputs a square. Free keeps the natural size.

**context px** — How much surrounding area to include around your mask.

**mask grow / blur** — Expand the mask before cropping, and soften the mask the model sees.

**invert mask** — Flip the mask so the inpaint hits the OPPOSITE area (swap subject and background). Works on a wired or painted mask - no separate Invert Mask node needed.

## Outputs

**image** — The cropped region, sized for the model.

**mask** — The matching cropped mask. Wire it into SetLatentNoiseMask or your inpaint conditioning.

**crop_info** — Carries the original and where the crop came from. Wire it into Inpaint Stitch Pixaroma.

**width / height** — The crop size in pixels, handy for an empty latent or edit models.

> **Tip:** The `crop_info` wire is the same type Image Crop uses, so the two are interchangeable.
