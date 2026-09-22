---
id: "node:PixaromaSwitchWH"
title: "Switch WH Pixaroma"
kind: node
category: "Values"
order: 39
icon: ""
tags: "ab toggle size swap"
comfyClass: "PixaromaSwitchWH"
---

> Toggle between two width/height pairs with one click.

## What it does

Takes two pairs of width and height values (A and B) and passes one pair to the output. Click `A` or `B` on the node to choose. Useful for flipping between a source image's native size and a chosen resolution without rewiring.

## How to use

- Wire a width/height pair (e.g. from Load Image Pixaroma) into `width_a` and `height_a`.
- Wire a second pair (e.g. from Resolution Pixaroma) into `width_b` and `height_b`.
- Click `A` or `B` to pick which pair flows out.
- Always wire both width and height for a side.

## Outputs

**width** — The width from the active source.

**height** — The height from the active source.
