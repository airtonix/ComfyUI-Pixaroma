---
id: "node:PixaromaShowText"
title: "Show Text Pixaroma"
kind: node
category: "Prompt & Text"
order: 21
icon: ""
tags: "debug display print inspect see value preview text"
comfyClass: "PixaromaShowText"
---

> Inspect anything flowing through your workflow - images, prompts, numbers - in a readable text box.

## What it does

Displays a compact, human-readable description of whatever you wire in. Strings and numbers print as-is. Images show their size, colour format, and their darkest and brightest values. Latents, the compressed form a sampler works in, show their internal size.

The text box is read-only and scrollable, so long output never forces the node to grow. Hover over the node to reveal a `Copy` button in the corner.

## How to use

- Wire any output - prompt text, an IMAGE, a latent, a number - into `source`.
- The box updates on every Run.
- Hover the node and click `Copy` to copy the displayed text.
- The same text is also on the `text` output, so you can chain it forward.

## Outputs

**text** — The text shown in the box, passed through unchanged so you can keep wiring it downstream.

## The buttons on the node

**Copy** — Appears when you hover the box, and copies the text currently shown to your clipboard.

> **Tip:** Useful for checking what a text node produces, or confirming an image's size before a sampler.
