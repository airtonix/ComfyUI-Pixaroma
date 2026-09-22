---
id: "node:PixaromaPromptFromList"
title: "Prompt From List Pixaroma"
kind: node
category: "Prompt & Text"
order: 20
icon: ""
tags: "index pick number choose"
comfyClass: "PixaromaPromptFromList"
---

> Picks one prompt by number from a Prompt Multi list.

## What it does

A tiny single-purpose node. Connect the `prompts` output of a Prompt Multi Pixaroma node (set to List Prompts mode) and set the `index` to choose which prompt you want. Index 1 returns the first enabled prompt, index 2 the second, and so on.

Drop several of these in a workflow - all wired to the same Prompt Multi - so each section uses a different prompt from the same library.

## How to use

- Set your Prompt Multi node to `List Prompts` mode.
- Wire its `prompts` output to this node's `prompts` input.
- Set `index` to the position of the prompt you want (1-based).
- Wire `text` to CLIP Text Encode or any downstream text input.

## Outputs

**text** — The prompt at the chosen index. Returns an empty string if the index is out of range.
