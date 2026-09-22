---
id: "node:PixaromaPromptStack"
title: "Prompt Stack Pixaroma"
kind: node
category: "Prompt & Text"
order: 19
icon: ""
tags: "assemble parts toggle build pieces chunks"
comfyClass: "PixaromaPromptStack"
---

> Build one combined prompt from a list of toggleable chunks.

## What it does

Holds an ordered list of prompt pieces. All enabled pieces are joined into a single string using your chosen separator (a comma and a space to start with, changed in this node's own settings, opened with the gear button on the node toolbar, or by right-clicking the node).

Useful for building prompts modularly: you can mute a style chunk, a color description, or a quality suffix without deleting it.

## How to use

- Click `+ Add row` to add a chunk, then type a piece of your prompt into each.
- Click the orange pill on a row to toggle it on or off.
- Drag the handle on the left edge of a row to reorder.
- Wire the `text` output to CLIP Text Encode or a downstream text node.

## Outputs

**text** — All enabled chunks joined into one string, in top-to-bottom order.

## The buttons on the node

**The drag handle** — Drag it to move a row up or down and change the order the pieces are joined in.

**ON / OFF** — Leaves a row out of the combined prompt without deleting it, so you can try a version quickly.

**The label field** — An optional name to remind you what a row is for. It is never sent as part of the prompt.

**The delete cross** — Removes that row. It is greyed out on the last row, since one always has to remain.

**Add row** — Adds a new empty row at the bottom.

**Clear all** — Empties the text in every row but keeps the rows, their names and their on/off state.

**Reset** — Puts the node back to a single empty row, as if it were new.

> **Tip:** Trailing commas on each chunk are stripped automatically, so you can be loose with punctuation.
