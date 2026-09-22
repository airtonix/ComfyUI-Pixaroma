---
id: "node:PixaromaPauseImage"
title: "Pause Image Pixaroma"
kind: node
category: "Image"
order: 36
icon: ""
tags: "stop check gate review approve interrupt"
comfyClass: "PixaromaPauseImage"
---

> Pause your workflow mid-run to review an image before the expensive part runs.

## What it does

Acts as an inline gate on any IMAGE wire. Drop it between an image source (e.g. a KSampler) and expensive downstream work (an upscale, a second pass). In Pause mode only the upstream runs and the image is shown; you then decide whether to continue.

## The three modes

**Pause** — Run stops here. The image is shown and a snapshot is saved. The downstream does not run yet.

**Continue** — The upstream is skipped and the saved snapshot is fed downstream. Use this after reviewing, so only the cheaper downstream work runs.

**Pass** — The whole workflow runs end to end, as if this node were not there.

## How to use

- Wire your image source into `image` and wire the output onward.
- Set the toggle to `Pause` and click Run. Review the image.
- Switch to `Continue` and click Run again - only the downstream runs, fed from the image you saw.
- Use `Regenerate` to roll a fresh image at the same point.

## Outputs

**image** — The image continuing downstream: the live input in Pause/Pass, or the saved snapshot in Continue.
