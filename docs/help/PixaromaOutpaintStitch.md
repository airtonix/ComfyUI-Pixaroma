---
id: "node:PixaromaOutpaintStitch"
title: "Outpaint Stitch Pixaroma"
kind: node
category: "Image"
order: 3
icon: ""
tags: "restore original seam blend outpaint"
comfyClass: "PixaromaOutpaintStitch"
---

> Put your pristine original back onto an outpaint result, keeping only the newly generated area.

## What it does

When you outpaint a large image, you usually have to scale it down first so the model can handle it. That sends the whole picture - including the part you wanted to keep - through the model, which softens it. This node fixes that: it scales the finished result back up to full size and drops your original image back over its own area, pixel-for-pixel. Only the new area the model painted is kept from the generated image.

## How to wire it

- Wire the `outpaint_info` output of Outpaint Pixaroma into `outpaint_info` here.
- Wire the finished image (after VAE Decode) into `image`.
- That is it - the node knows where the original goes from the info.

## Feather

`feather` softens the join between your original and the new area, fading the original edge into the generated part over that many pixels. A little usually looks best, because the new area was blended to a re-encoded copy of your original, not the exact one, so there can be a faint step at the seam. Set it to 0 for a hard edge. Only the edges next to the new area are softened - the real picture edges stay sharp.

## Color match

On a plain background (a flat wall, sky, floor, or studio backdrop) you can sometimes see a tone step where the new area meets your original, because the model matched a slightly shifted copy of your image. `color match` fixes it by continuing your original's colour along the seam out into the new area, so the join disappears. It follows the background per region, so it evens out a scene with a light wall over a darker floor, not just a single flat colour. It only shifts overall tone, never texture or detail, so it cannot add artefacts.

Starts at 100, which is a full match and usually the sweet spot. Turn it down toward 0 to leave the model's colours as they are (handy if the new area has genuinely different content you do not want shifted). You can push above 100 for the rare case a faint step still shows, but that starts to over-match.

## About the seam

This will not always be as invisible as Image Uncrop, and that is expected. The whole picture went through the model, so the generated area is a slightly shifted version of your original. Color match evens out the tone (per region) and feather blends the edge, and for extending scenery (sky, ground, walls, water) the join is usually not noticeable. If a background is very smooth and a step still shows, raise feather and nudge color match up.

## Sliders and the dots

Feather and Color Match are sliders: drag across one to set it, or double-click to type an exact number (hold Shift while dragging for fine control). Each has a small dot on the left of its row, so you can wire a number node straight into it. When you do, that slider greys out and locks - the connected number is in charge, and the dimmed value shown is just the slider's own fallback. Unplug the wire to use the slider again. Right-click the node and choose Slider colour to recolour the sliders, and you can save that colour as the default for every new Outpaint Stitch node.

## Outputs

**image** — The full-size image: the model's new area with your pristine original pasted back over its region.

**mask** — White marks the new area, black the untouched original. Feed it into a refine or inpaint pass if you want to sharpen just the new part.

> **Tip:** Optional companion to Outpaint Pixaroma. Skip it and the plain Outpaint result works fine; add it when you scaled a big image down and want the original half back at full quality.
