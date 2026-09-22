---
id: "node:PixaromaSwitch"
title: "Switch Pixaroma"
kind: node
category: "Logic & Flow"
order: 38
icon: ""
tags: "route select choose pick multiplexer"
comfyClass: "PixaromaSwitch"
---

> Route one of many wired inputs to a single output by clicking a row.

## What it does

Accepts up to 32 wired inputs of any type (MODEL, CLIP, IMAGE, STRING, AUDIO, and so on) and passes exactly one of them through to the output unchanged. You choose which row is active by clicking it on the node. Only the active row's upstream branch runs - the others are skipped.

## How to use

- Wire upstream nodes into the rows. A new empty row appears as you fill each one.
- Click anywhere on a row to make it active (the orange highlight marks it).
- Double-click a row's name to rename it, so you remember what each input is. A single click only activates the row, so you will not change a label by accident. (In the new node interface, click into the name field to rename.)
- Disconnect a wire to remove its row.

## Outputs

**output** — The value from the active row, passed through unchanged. The output type adapts to whatever is connected.

## The controls on the node

**The toggle** — Click the oval beside a wired row to send that one through. Only one row can be on at a time.

**The row name** — Click a row to make it the active one. Double-click its name to call it something of your own.
