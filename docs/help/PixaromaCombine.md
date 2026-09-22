---
id: "node:PixaromaCombine"
title: "Combine Pixaroma"
kind: node
category: "Logic & Flow"
order: 7
icon: ""
tags: "merge batch accumulate gather join"
comfyClass: "PixaromaCombine"
---

> Join two inputs into one batch - images, video frames, latents, numbers, or text.

## What it does

Takes any two inputs and merges them into one. Images and video frames are stacked into a single bigger batch; latents are batched the same way; numbers and text are gathered into a list. If different-sized images come in, the second is resized to match the first.

## What you can join

Both inputs must be the SAME kind of thing:

- image + image -> one bigger image batch (for example 3 frames stacked together)
- video frames + video frames -> a longer clip
- latent + latent -> a batched latent
- number + number -> a list, like 0 then 1 then 2
- text + text -> a list of words

## Good to know

- You can't mix kinds. An image plus text, or a latent plus a number, stops with a clear message - wire two of the same kind instead.
- An empty input is fine - Combine just passes the other side through. That is why it works as a loop accumulator from round 1.
- Different-sized images: the second one is resized to match the first (whatever you wire into `any1` sets the size).

## Using it in a loop

Combine shines as the 'pile-up' node inside a loop. Wire the running total into `any1` and the new round's result into `any2`, then carry the output back through `Loop End`. Each round adds onto the pile. On the very first round one side is empty - Combine just passes the other side through, so it works from round 1 with no special setup.

## Outputs

**batch** — The two inputs joined together. For images and frames this is one larger batch; for numbers and text it is a list.

> **Tip:** Empty input? Combine passes the other side through, so it is safe to use as an accumulator from the very first round.
