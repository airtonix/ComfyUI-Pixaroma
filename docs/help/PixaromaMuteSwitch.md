---
id: "node:PixaromaMuteSwitch"
title: "Mute Switch Pixaroma"
kind: node
category: "Logic & Flow"
order: 41
icon: ""
tags: "bypass disable enable branch off skip"
comfyClass: "PixaromaMuteSwitch"
---

> Toggle whole workflow branches on and off with per-scene pills.

## What it does

Wire the last node of each branch (usually a KSampler) into a row. Clicking a row's pill skips or enables that entire upstream branch on the next Run. Useful for workflows with several scenes or style variants where you only want to render a subset at a time.

## Mode pills

**Single / Multi** — Single is like a radio button - exactly one scene runs. Multi lets any combination run together.

**Mute / Bypass** — Mute means an off scene does not run at all. Bypass means each node passes its input through unchanged.

## How to use

- Wire the last node of each branch into a row (`input_1`, `input_2`, ...).
- Click a row's pill to toggle it on (orange) or off (grey).
- Rename a row by clicking its label.
- Right-click the node for `Enable all rows` / `Disable all rows` shortcuts in Multi mode.

## Outputs

**out** — A phantom pass-through used only to chain Mute Switches together. Carries no real data - do not wire it into regular nodes.
