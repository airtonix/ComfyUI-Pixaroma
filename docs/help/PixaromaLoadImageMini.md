---
id: "node:PixaromaLoadImageMini"
title: "Load Image Mini Pixaroma"
kind: node
category: "Image"
order: 0
icon: ""
tags: "small compact loader tidy"
comfyClass: "PixaromaLoadImageMini"
---

> A compact Load Image: upload, pick, preview, and just two outputs. All the resize controls tuck into the gear.

## What it does

This is the small version of Load Image Pixaroma. It loads a picture from ComfyUI's input folder and gives you a clean, minimal node - a toolbar, the file picker, and a preview - with only two outputs so it does not clutter the canvas.

Everything the full Load Image can do is still here. The upload, paste and drag-drop all work, and Open in MaskEditor and Copy/Paste (Clipspace) behave exactly as they do on the full node.

## The toolbar

**Upload** — Choose an image file from your computer.

**Paste** — Paste an image from the clipboard (or press Ctrl+V while the node is selected).

**Gear** — Open the settings panel: the resize modes, snap, resample, upscaling, and this node's accent colour.

## Picking a file

Use the arrows to flip through the images in your input folder one at a time (PageUp / PageDown also work), or click the filename to open the picker and choose from thumbnails. You can also drag an image straight onto the node.

## Resize lives in the gear

To keep the face small, all the resizing lives in the gear settings panel: Max megapixels, Longest side, Scale by, Fit inside, Crop to fill, and Match ratio, plus snap and the resample filter. It is the same resize engine as the full Load Image. Padding is not here on purpose - use Outpaint Pixaroma for that.

The two small cards on the face show the input size and the resulting output size so you can see the resize at a glance.

## Outputs

**image** — The loaded picture, after any resize you set in the gear.

**image_info** — A small bundle carrying the mask, width, height and filename. Wire it into Image Info Pixaroma only when you need those extras - that is what keeps this loader small.

> **Tip:** Need the mask, width, height or filename? Add an Image Info Pixaroma node and wire image_info into it.
