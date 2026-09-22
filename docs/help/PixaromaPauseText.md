---
id: "node:PixaromaPauseText"
title: "Pause Text Pixaroma"
kind: node
category: "Prompt & Text"
order: 37
icon: ""
tags: "llm edit review gate check interrupt cache cached runs again re-runs ksampler restarts fixed seed slow"
comfyClass: "PixaromaPauseText"
---

> Pause your workflow to read and fix a piece of text before the rest runs.

## What it does

Acts as an inline gate on any text wire. Made for text that comes from a language model, where you have no control over the exact words. Drop it between your text source and the rest of the workflow. In Pause mode the run stops here and shows the model's text; you edit it, then only the downstream runs, fed the words you approved.

## The three modes (the toggle)

**Pause** — Run stops here and shows the model's text so you can edit it. Press Continue to make one image from it. The downstream does not run until you continue.

**Pass** — The whole workflow runs end to end with the model's text untouched, as if this node were not there. Each Run writes a fresh prompt. Any edit you made is replaced.

**Keep** — The model is skipped and your current text is reused. Click Run again and again for more images of the same prompt, each with a new seed. Fast, and your text is never lost. You can still tweak the text and it stays kept.

## The buttons

**Continue / Run** — The main button. In Pause mode it reads Continue: skip the model and send your edited text downstream to make one image. In Keep mode it reads Run: make a new image with the current text (same as the top Run button).

**Regenerate** — Get fresh text: it finds the node making the text upstream and rolls its seed, so you get a different prompt. Works in Pause mode; it's greyed out in Keep (where the text is being reused - switch to Pause to get a new prompt).

**Revert** — The arrow in the box header - put the model's original text back.

## How to use

- Wire your text source (an LLM / prompt node) into `text` and wire the output onward.
- Set the toggle to `Pause` and click Run. Read the text, fix it in the box, press `Continue`.
- To make many images of the same prompt: flip the toggle to `Keep`, then click Run as often as you like. The prompt stays; only the image changes.

## Good to know

- A fresh Run in Pause replaces the box with the model's new text; your edit is kept across Continue and across save and reload.
- In Keep mode, each new image needs your image sampler's seed set to randomize - that is what makes each Run different.

## Outputs

**text** — The text continuing downstream: the model's text in Pause/Pass, or your edited text in Continue.
