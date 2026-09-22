---
id: "node:PixaromaResolution"
title: "Resolution Pixaroma"
kind: node
category: "Values"
order: 42
icon: ""
tags: "size width height ratio dimensions aspect"
comfyClass: "PixaromaResolution"
---

> One-click resolution picker for AI image sizes, with ratio chips, snap, custom ratios, and math.

## What it does

Shows a grid of aspect-ratio chips (1:1, 16:9, 9:16, 2:1, 3:2, 2:3, 4:3, 3:4, 4:5). Click a ratio to see its most popular sizes, then click a size to set it. Outputs `width` and `height` as integers ready to wire into an Empty Latent Image or any size input.

## Modes

**Preset** — Pick a ratio chip, then a preset size for that ratio. Covers SDXL, AI video, and social media sizes.

**Custom Ratio** — Type any W:H (such as 21:9) and get auto-computed AI-friendly sizes.

**Custom Resolution** — Type exact pixel dimensions. Math expressions like `1024+128` or `512*2` work in the W and H fields.

## Snap

The `16`, `32`, and `64` snap chips round the output to that multiple (VAE-friendly). Use `none` to turn it off.

## Outputs

**width** — Chosen width in pixels.

**height** — Chosen height in pixels.
