---
id: "node:PixaromaSeed"
title: "Seed Pixaroma"
kind: node
category: "Values"
order: 4
icon: ""
tags: "random fixed number sampler noise"
comfyClass: "PixaromaSeed"
---

> A seed source with one-click random and fixed control - wire it into any sampler's seed input.

## What it does

Holds a seed number and sends it out as `seed`. Drag the output into the seed input of KSampler (or any node that takes a seed). One Seed node can feed several samplers at once so they all stay on the same seed.

## Modes

**Random** — Rolls a fresh seed every time you Run, and the big number updates to show the seed that actually made the latest image (so it changes each Run).

**Fixed** — Keeps the same seed every Run, so the result is repeatable.

## Buttons

**New fixed random** — Rolls a brand-new random seed and locks it (switches to Fixed). Use it when a random result is great and you want to keep that exact seed.

**Use last seed** — Loads the seed from the previous run and locks it. Perfect for making variations off the image you just liked. It works within the current session only, so after you reload or reopen the workflow it stays greyed out until you Run once.

**Copy** — Copies the current seed to your clipboard.

**Up / down arrows** — The small ▲ / ▼ arrows next to the seed nudge it by one and lock it (Fixed). Hold an arrow to keep counting. Great for trying the seeds right next to one you like.

## Size and settings

Right-click the node for a few things: a one-click Compact size / Full size flip, a Seed settings panel, and a Seed history list. Compact shrinks the node to a single row (the seed with small up/down arrows, a Random/Fixed toggle, and an N button that rolls a new fixed random seed) so it takes less room; Full brings all the buttons back. To copy the seed in compact mode, hover over the number: a small popup shows the full seed with a copy button (handy since a long seed can get trimmed in the small field). Your choice of size is saved with the workflow.

The Seed settings panel also sets the size every NEW Seed node starts at (the same as ComfyUI Settings, under Pixaroma then Seed), so you can have them all come in compact if you like.

## Random seed digits

In the Seed settings panel you can cap how big a Random seed is, from 3 up to 16 digits. Lower it if you want short, easy-to-remember seeds or another tool expects a smaller number (3 digits gives seeds from 0 to 999; 8 digits gives 0 to 99999999). It only changes the Random roll; typing an exact seed always works, whatever the setting.

## Seed history

Open it from the H button (in Full size, top row next to New fixed random) or by right-clicking the node and choosing Seed history. It shows the last 10 seeds you have run. From the list you can Use a seed (it loads onto this node and locks to Fixed), Copy it, or Export the whole list as a text file. The history is shared across all your Seed nodes and is kept even after you reload, so a seed you liked earlier is still there.

## Put the seed in your file names

You can print the seed into a saved file name. In a Save Image, Save Mp4 Pixaroma, or Preview Image Pixaroma node's filename field, type `%Seed Pixaroma.seed%` where you want the number, for example `portrait_%Seed Pixaroma.seed%`. On save it becomes `portrait_2137`.

Always point at THIS node, not the sampler: `%Seed Pixaroma.seed%`, not `%KSampler.seed%` (once wired, the sampler no longer holds the number, this node does). If you rename this node on the canvas, use the new name in the token. With more than one Seed node, rename them so each token points at the right one.

## Tips

- Type a number in the big field to set an exact seed (it switches to Fixed).
- In Fixed mode the same seed runs every time; in Random mode a new one rolls each Run.
- When you wire this into KSampler it takes over the seed, so KSampler's own seed control greys out. Use the Random and Fixed buttons here instead.
- The seed is picked in your browser. If you run a workflow through the API with no browser open, use Fixed with a set number (Random falls back to 0 there).

## Outputs

**seed** — The chosen seed as a whole number.

> **Tip:** Found a seed you love in Random mode? Hit Use last seed (or New fixed random) to lock it, then tweak the rest of your workflow with confidence.
