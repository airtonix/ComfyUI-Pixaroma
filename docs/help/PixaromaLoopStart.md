---
id: "node:PixaromaLoopStart"
title: "Loop Start Pixaroma"
kind: node
category: "Logic & Flow"
order: 5
icon: ""
tags: "repeat iterate for each again loop"
comfyClass: "PixaromaLoopStart"
---

> The opening bracket of a loop - repeat a section of your workflow a set number of times.

## What it does

Put your nodes BETWEEN Loop Start and Loop End and that whole section runs again and again. Set `total` to the number of rounds. Use it to build a long video in chunks, grow a batch of images, or run the same step over and over.

It always comes as a pair with `Loop End` - wire Loop Start's `loop` output into Loop End's `loop` input so the two brackets know they belong together.

## Carrying values between rounds

The `value` slots are for things you want to hand from one round to the next - the frames built so far, a running total, the last image, and so on. Whatever a round produces, feed it back into the matching slot on `Loop End`, and `Loop Start` hands it to the next round. Leave the value slots empty if your loop does not need to carry anything.

## Outputs

**value1...value5** — The carried values for this round. Only use as many as you need.

**loop** — Wire this into Loop End's loop input to pair the two brackets.

**index** — Which round you are on, counting from 0 (0, 1, 2 ...). Handy for picking a different frame or value each round.

## Tips

- Pair it with `Combine Pixaroma` inside the loop to pile up each round's result (round 1 + round 2 + ...).
- `total` is how many rounds run. The loop body runs exactly that many times.
- If a value slot is empty it just carries nothing - that is fine.

> **Tip:** Loop Start and Loop End always work together: put your work between them, and feed Loop End's values back to carry them forward.
