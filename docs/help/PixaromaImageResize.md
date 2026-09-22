---
id: "node:PixaromaImageResize"
title: "Image Resize Pixaroma"
kind: node
category: "Image"
order: 32
icon: ""
tags: "alpha transparency transparent background removed rmbg cutout png black background lost preserve keep join image with alpha mask channel rgba"
comfyClass: "PixaromaImageResize"
---

> Resize an image (and its mask) mid-workflow using a set of smart resize modes.

## What it does

Applies one of eight resize modes to the wired image and its optional mask, then outputs the result with its final pixel dimensions. You can also wire a width, height, or longest-side value from another node to drive the size automatically.

## Resize modes

**Off** — Passes the image through unchanged.

**Max megapixels** — Scales down so the image does not exceed a total pixel count. Uses 1 MP = 1024x1024 to stay aligned with standard AI sizes.

**Longest side** — Scales so the longer edge hits the number you set. Works for portrait or landscape without picking an axis.

**Scale by** — Multiplies both dimensions by a factor (2.0 doubles, 0.5 halves).

**Fit inside** — Fits the image inside a W x H box while keeping the whole image visible and the aspect ratio intact.

**Crop to fill** — Scales and center-crops so the image completely fills a W x H box. Edges may be trimmed.

**Match aspect ratio** — Resizes to a chosen preset ratio, either cropping or padding.

**Pad** — Adds a colored border to reach the target size. The padded area becomes white in the mask (the inpaint region).

## Wiring a target size

Connect a value to `width`, `height`, or `longest_side` from another node (e.g. Resolution Pixaroma) to drive the size. Wire only width or only height for an aspect-preserving scale. Wire both for an exact box. `longest_side` takes priority when connected.

## Outputs

**image** — The resized image.

**mask** — The resized mask. In Pad mode the added border is white. If you leave the mask input empty and the picture already has a see-through background, that transparency comes out here instead of being lost.

**width** — Final output width in pixels.

**height** — Final output height in pixels.

**longest_side** — The longer of the output width and height.

## Pictures with a see-through background

If you feed in a picture whose background has been removed, wire the mask output along with the image into Join Image with Alpha, and you get the cut-out back at the new size, ready to save as a transparent PNG.

You do not need to wire anything into the mask input for this: when that input is empty, the picture's own transparency is used, and it is cropped and resized exactly the same way the picture is. If you do wire a mask in, yours is used instead.

The image output itself always stays a normal picture, on purpose. Transparency travels in the mask in ComfyUI, and a picture carrying a see-through channel cannot be fed to a sampler: it stops the run with an error. Keeping the two apart means this node fits anywhere.

## The buttons on the node

**The mode chips** — Off, Max MP, Longest side, Scale by, Fit inside, Crop to fill, Match ratio and Pad. Pick how the image is resized.

**Snap** — Rounds the final width and height to a multiple of 8, 16, 32 or 64, which most models prefer.

**Resample** — How the pixels are recalculated when scaling. Auto suits almost everything.

**Upscaling** — Whether the image is allowed to grow beyond its original size.

**Fill and Crop** — In Crop to fill: Fill scales to cover then trims, Crop takes a piece at original size with no scaling.

**The anchor grid** — Which part of the picture to keep when something has to be trimmed.
