---
id: "node:PixaromaPortraitLandscape"
title: "Portrait Landscape Pixaroma"
kind: node
category: "Utility"
order: 34
icon: ""
tags: "rotate orientation flip tall wide multiple of 8 16 32 64 round size snap size divisible by step size must be multiple resolution not accepted size error round to nearest"
comfyClass: "PixaromaPortraitLandscape"
---

> Flip a width and height between portrait (tall) and landscape (wide) with one click.

## What it does

Takes two dimensions and outputs them in the orientation you choose. Click Portrait and the smaller number becomes the width (a tall image); click Landscape and the larger number becomes the width (a wide image). One node replaces keeping two WH nodes and a switch just to flip orientation.

## How to use

- Enter your two sizes in the width and height fields, or wire them in from another node (e.g. WH Pixaroma or Resolution Pixaroma).
- Click Portrait or Landscape - the active one lights up orange.
- Wire the width and height outputs into your Empty Latent (or anywhere a size is needed).
- The order you type the two numbers does not matter: Portrait always gives the tall arrangement, Landscape the wide one.

## Rounding sizes to a step

Models are usually fussy about sizes, wanting them in steps of 8, 16, 32 or 64. The small button at the top left of the node sets that. Click it to step through Off, 8, 16, 32 and 64, and back to Off.

When a step is set, both numbers are rounded to the NEAREST one before they go out, so at 64 a width of 900 leaves as 896. It never rounds down to nothing: the smallest you can get is one step. Off sends your numbers exactly as typed.

Each node keeps its own step, so one workflow can hold several set up differently. The gear beside the button opens the same choice as a row of buttons, along with the node's colour.

Beside the gear the node shows the size it will actually send, like `896x1312`, and it updates as you change the step, flip the orientation or edit the numbers, so you can see the result before you run. If a size is coming in from a wire it says 'from input' instead, because the value is only known once the workflow runs.

## Outputs

**width** — The output width. Portrait = the smaller of your two numbers, Landscape = the larger.

**height** — The output height. Portrait = the larger of your two numbers, Landscape = the smaller.

> **Tip:** Need two genuinely different sizes (not just the same numbers swapped)? Use Switch WH Pixaroma instead, which picks between two separate width/height pairs.
