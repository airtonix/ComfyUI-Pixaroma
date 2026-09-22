---
id: "node:PixaromaLoopEnd"
title: "Loop End Pixaroma"
kind: node
category: "Logic & Flow"
order: 6
icon: ""
tags: "repeat iterate finish end loop"
comfyClass: "PixaromaLoopEnd"
---

> The closing bracket of a loop - sends each round back around, then outputs the final result.

## What it does

Marks the end of the repeating section. Wire `loop` from `Loop Start`. Into the `value` slots, feed whatever you want carried to the next round (often a `Combine` node that gathers each round's frames). After the last round finishes, the value slots output the final carried values.

## How to use

- Wire `loop` from Loop Start's loop output.
- Put your generation nodes between Loop Start and Loop End.
- Feed the result you want to keep building into a `value` slot here - it loops back to Loop Start for the next round.
- Wire the matching output (value1, value2 ...) onward to use the final result after all rounds are done.

## Outputs

**value1...value5** — The final carried values after the last round. Match them to the value slots you fed in.

> **Tip:** Think of Loop Start and Loop End as brackets around the part you want to repeat. Everything between them runs each round.
