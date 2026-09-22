---
id: "node:PixaromaOutpaint"
title: "Outpaint Pixaroma"
kind: node
category: "Image"
order: 2
icon: ""
tags: "extend expand wider taller border pad zoom out uncrop background"
comfyClass: "PixaromaOutpaint"
---

> Add a solid-colour border around your image so an outpainting model can paint new scenery into it.

## What it does

Outpainting means extending a picture beyond its edges. This node makes the room for that: it pads your image with a plain fill colour, and an outpainting model then replaces that fill by continuing the scene into it.

The fill is neutral grey by default. Grey is used because a strongly coloured fill can tint the whole result - a model trained to replace green tends to leave a green cast everywhere. You can change the fill by clicking the colour swatch, but grey is the safe choice.

## The two modes

**To ratio** — Grow the image to a target shape, like 16:9 or 3:2. The node works out how much fill to add. Pick which ratios appear in the settings (the gear).

**By side** — Add an exact number of pixels to a chosen edge. Drag a fill edge in the preview to set it by hand; this also switches you to By side automatically. Or type the numbers straight into the `L` `T` `R` `B` boxes.

## Setting the four edges by hand

By side mode shows a box per edge: `L` left, `T` top, `R` right, `B` bottom, each in pixels of fill to add.

- Type a number and press Enter, or click away, to apply it. The preview and the size cards update as you go.
- Sums work too, so `512*2` or `1024+128` are fine.
- Arrow keys nudge by 1, and Shift with an arrow nudges by 10.
- Dragging an edge in the preview fills the matching box in live, so the two ways always agree.
- The `↺` button at the end of the row puts all four edges back to 0 in one click. It is also on the node's right-click menu.

## Add space: which side gets the fill

In To ratio mode, only one direction ever grows. The Add space row picks the side the new fill goes on:

- `Left` / `Right` (or `Top` / `Bottom`) put all the new fill on that one side, so the original image sits against the opposite edge.
- `Both` splits the new space evenly across both sides, keeping the image centered.
- If the ratio already matches your image, nothing grows and the row is greyed out.

## Limit and the size cards

The limit chips optionally shrink the padded result to a megapixel target so it stays a sane size to generate. `Off` means no scaling at all - the output is exactly the padded size.

The INPUT and OUTPUT cards show the real sizes, and the OUTPUT card turns orange when the size changes. The badge on the preview always shows the true final numbers.

## Preview: picture vs badge

The preview draws the composition - your image with the fill bands around it, at the same proportions the output will have. After a megapixel limit the real output is smaller than the picture looks, so trust the badge for the true size. The picture shows the shape; the badge shows the numbers.

Behind a Load Image the preview is live right away. Behind a generated image (a VAE Decode), it appears after one Run.

## Keeping the original at full quality

When you scale a large image down with the limit so the model can handle it, the whole picture goes through the model and the original half comes back a little softer and smaller. If you want the original part back at full quality, wire the `outpaint_info` output into an Outpaint Stitch Pixaroma node along with the finished image. It puts your original back exactly and keeps only the new area the model made. This is optional - if you do not wire it, nothing changes.

## Outputs

**image** — Your image with the fill border added (and scaled to the limit, if one is set).

**width** — The final width in pixels - the badge number.

**height** — The final height in pixels.

**outpaint_info** — Optional. Carries your original image and where it sits, for Outpaint Stitch Pixaroma. Leave it unused if you do not need the original restored.

> **Tip:** This node only adds the fill area. The actual outpainting is done by your model or LoRA, which usually needs its own trigger words in the prompt to know it should fill the solid area - set those up with your prompt and loader nodes as that model requires.
