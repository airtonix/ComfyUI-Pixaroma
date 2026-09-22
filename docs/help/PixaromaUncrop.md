---
id: "node:PixaromaUncrop"
title: "Image Uncrop Pixaroma"
kind: node
category: "Utility"
order: 12
icon: ""
tags: "paste back restore put back region"
comfyClass: "PixaromaUncrop"
---

> Paste an edited crop back onto the original image at the exact spot it came from.

## What it does

The other half of the crop, fix, then put it back workflow. After you crop a region with Image Crop Pixaroma and edit it (upscale, inpaint, face-fix, color work, anything), this node drops the edited piece back onto the full original image at the exact same place, leaving everything else untouched.

It knows where to paste from the `crop_info` wire, and it automatically resizes the edited crop to fit the original region (so upscaling the crop first is fine). Transparency travels through too: the `mask` output is the whole image's mask, not just the cropped rectangle.

## How to use

- Wire the `crop_info` output of Image Crop Pixaroma into this node's `crop_info`.
- Wire your edited crop into `image`.
- To keep transparency, wire Image Crop's `mask` straight across into `mask` (it lines up under image). The mask comes back out full-frame.
- Optionally raise `feather` for a soft, seamless edge where the crop meets the original.
- Run the workflow to get the recombined full image.

## Outputs

**image** — The original image with the edited crop pasted back in place.

**mask** — The full-frame mask: the original mask with the crop region updated. Use it to keep transparency (e.g. into Join Image with Alpha).

**crop_info** — The same crop_info passed straight through, so you can forward it on without re-routing the wire from Image Crop.
