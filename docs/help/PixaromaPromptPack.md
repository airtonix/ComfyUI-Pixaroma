---
id: "node:PixaromaPromptPack"
title: "Prompt Pack Pixaroma"
kind: node
category: "Prompt & Text"
order: 18
icon: ""
tags: "batch paste queue block many prompts separator split blank line new line dashes --- paragraph reuse rerun run again txt file import load collected save text"
comfyClass: "PixaromaPromptPack"
---

> Paste a block of prompts and queue one workflow run per prompt automatically.

## What it does

You paste multiple prompts into one big textarea. When you click Run the node queues the workflow once per non-empty prompt, looping automatically. The counter pill in the textarea's corner shows the total count at idle, then counts down during a run.

The pills at the top say how your prompts are separated: `Blank line`, `New line`, or `--- line`. If the counter is not the number of prompts you expect, you have picked the wrong pill. The reverse is not a guarantee: now and then a wrong pill lands on the right number by chance, so if a run comes out strange, look at the first prompt as well as the count.

## Reusing a Save Text collection

Save Text Pixaroma keeps every prompt you tried in a .txt file. Those same three names are its Separator setting, so the two nodes fit together with nothing to convert.

Open the .txt, copy everything, press `Replace` here, then press the pill with the same name you chose in Save Text. The counter should show the number of prompts you collected. Click Run and it works through all of them.

One thing to watch: if you collected with Save Text's `Timestamp each entry` turned on, the date line is stored inside each entry and comes along with the prompt. On `New line` it even counts as a prompt of its own, doubling the number. Collect with timestamps off if you mean to reuse the file.

## How to use

- Paste or type your prompts into the textarea.
- Press the pill that matches how they are separated.
- Check the counter reads the number of prompts you expect.
- Wire the `text` output to CLIP Text Encode.
- Click Run - the node queues one workflow per prompt automatically.
- Empty or whitespace-only entries are silently skipped.

## Outputs

**text** — The current prompt for this queue run - one entry from the block.

## The buttons on the node

**Blank line** — Prompts are separated by an empty line. Best for long prompts that run over several lines.

**New line** — Every single line is its own prompt. Best for a long list of short ones.

**--- line** — Prompts are separated by a line of dashes. Use this when the prompts themselves contain blank lines, which would otherwise split one prompt into several.

**Copy all** — Copies everything in the box to your clipboard.

**Replace** — Overwrites the box with whatever text is on your clipboard.

**Clear** — Empties the box straight away, with no confirmation.

**The counter** — Shows how many prompts are in the box, and counts down while a run works through them. A number you did not expect means the wrong pill is selected.

> **Tip:** If the textarea is empty when you click Run, nothing queues and a message appears.
