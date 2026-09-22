---
id: "node:PixaromaLoadImagesFolder"
title: "Load Images from Folder Pixaroma"
kind: node
category: "Image"
order: 25
icon: ""
tags: "batch folder directory many bulk each one by one subfolders recursive keep structure tree mirror flatten"
comfyClass: "PixaromaLoadImagesFolder"
---

> Load many images from any folder and run your workflow on each one, one at a time.

## What it does

Point it at a folder of images and pick which ones to process. When you Run, it feeds the selected images through your workflow one at a time and gives you a finished result for each. It is a drop-in for Load Image when you want to batch a whole folder: swap it in, wire it the same way, and one Run handles every image. Images can be different sizes.

It has the same resize options as Load Image Pixaroma (`Max megapixels`, `Longest side`, `Scale by`, `Fit inside`, `Crop to fill`, `Match aspect ratio`), applied to each image as it loads. Resize is `Off` by default.

## How to use

- Set the folder: type or paste a path into the folder box, or click `Browse` to navigate your drives and folders and pick one.
- Click `Pick images` to open the gallery. Use `Select all`, type a number in the `First` box to grab the first few (it selects as you type), or click individual thumbnails to choose exactly what you want.
- Wire `image` into your workflow (upscale, restyle, etc.) and `filename` into a Save node so each result keeps its original name.
- `Include subfolders` in the gallery also loads images from folders inside your folder. Their names then come out flattened, so an image at portraits/ana.png is called portraits_ana and cannot clash with a same-named file elsewhere.
- `Keep folder structure in the name`, next to it, hands over the real path (portraits/ana) instead. Switch on `Keep folders from the wired name` in Save Image Pixaroma's settings as well and your whole folder tree is rebuilt in the save folder, so processing a folder of folders gives you back the same arrangement.
- Click Run once and leave the batch count at 1. The node processes every selected image by itself.

## Outputs

**image** — Each selected image, one per item, after any resize.

**mask** — Each image's mask from its alpha channel (blank if it has none).

**width** — Each image's width in pixels (after any resize). Wire into an empty latent so it matches the image's size.

**height** — Each image's height in pixels (after any resize).

**filename** — Each image's filename without the extension, for naming saved results. With subfolders included this is flattened (portraits/ana becomes portraits_ana) unless `Keep folder structure in the name` is on.

**index** — The 1-based position of each image in this batch (1, 2, 3 ...).

**total** — How many images are in this batch (how many loaded; same for every item).

> **Tip:** Pick 5 images and you get 5 results from one Run. No need to match any batch number.
