---
id: "node:PixaromaSwitchSource"
title: "Switch Source Pixaroma"
kind: node
category: "Logic & Flow"
order: 40
icon: ""
tags: "ab bank preset swap variant"
comfyClass: "PixaromaSwitchSource"
---

> Flip a whole set of wires between two setups (A and B) with one toggle.

## What it does

Each row has an A input and a B input and one output. A single A/B toggle picks which side feeds every row at once. Designed for swapping an entire pipeline in one click - for example switching between local models and API nodes without touching individual wires. Only the chosen side runs.

## How to use

- Set the number of rows you need using the `Rows` field.
- Wire your first setup into the A inputs (`a_1`, `a_2`, ...) and your second into the B inputs.
- Click `A` or `B` to choose which bank runs.
- Click an output label to rename it for the row.
- `Allow empty` leaves a row blank when its active side has no wire; `Show error` raises a clear error instead.

## Outputs

**output_1 ... output_N** — Each row's output carries its A or B input, depending on the active toggle.

## The controls on the node

**Rows** — How many A and B pairs the node shows, from 1 to 16.

**A** — Sends every row through its A input. Use it to swap the whole node to one setup.

**B** — Sends every row through its B input, the other setup.

**Allow empty** — Leaves an output blank instead of erroring when the active side of a row has no wire.

**Show error** — Warns when the active side is empty but the other side is wired, which usually means the wrong bank.

**The output names** — Click one to give that row a name of your own instead of the type name.
