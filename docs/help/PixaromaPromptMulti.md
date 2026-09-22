---
id: "node:PixaromaPromptMulti"
title: "Prompt Multi Pixaroma"
kind: node
category: "Prompt & Text"
order: 17
icon: ""
tags: "batch queue many list prompts"
comfyClass: "PixaromaPromptMulti"
---

> A prompt library with two run modes - queue one image per prompt, or send all prompts as a list.

## What it does

Holds a list of prompts you can toggle on/off, label, and reorder. A pill at the top switches between two behaviors:

`Queue Text` mode: clicking Run queues the workflow once per enabled prompt in sequence, one prompt per run. Wire the `text` output to CLIP Text Encode to generate one image per prompt.

`List Prompts` mode: clicking Run fires the workflow once and makes the full list available as a bundle. Wire the `prompts` output into Prompt From List Pixaroma nodes downstream so different parts of the workflow can each pull a different prompt.

## How to use

- Click `+ Add prompt` to add a row, then type a prompt into each.
- Toggle the orange pill on each row to include or exclude it from runs.
- Drag the handle on the left edge of a row to reorder.
- Pick `Queue Text` or `List Prompts` mode using the pills at the top.
- Wire `text` to CLIP Text Encode (Queue mode) or wire `prompts` to Prompt From List nodes (List mode).

## Outputs

**text** — The active row's prompt for the current queue run. Use this in Queue mode.

**prompts** — All enabled prompts as a list. Use this in List mode with Prompt From List Pixaroma nodes.

> **Tip:** Both outputs are always visible - the mode pill only controls whether the queue loops.
