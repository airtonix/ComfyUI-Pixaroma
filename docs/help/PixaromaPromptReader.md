---
id: "node:PixaromaPromptReader"
title: "Prompt Reader Pixaroma"
kind: node
category: "Prompt & Text"
order: 22
icon: ""
tags: "metadata png extract read recover steal prompt from image exif"
comfyClass: "PixaromaPromptReader"
---

> Pull the positive prompt saved inside any ComfyUI or Automatic1111 PNG back out as usable text.

## What it does

Reads the metadata embedded in a PNG and extracts the positive prompt that generated it. Works with ComfyUI workflows (including chained text nodes, SDXL dual encoders, and switch/combine graphs) and with Automatic1111 / Forge images.

The readout updates the moment you pick a file, so you can read the prompt before running. If the image has no embedded prompt (a JPEG, a screenshot, or a PNG that lost its metadata), the readout explains why.

## How to use

- Click `Upload Image` to pick a PNG, or drag one onto the node.
- Or use the file dropdown to choose from images already in ComfyUI's input folder.
- The prompt appears in the text area immediately.
- Wire the `text` output into a CLIP Text Encode or any other text input to reuse the prompt.

## Follow a connected image

Wire an image's filename into the optional `filename` input (for example from Load Image Pixaroma's `filename` output) and the node reads that image's prompt automatically. While the wire is connected it ignores its own picker, and the readout follows the connected node live as you switch images.

To go back to picking manually, just upload, drop, or pick a file on the node - that takes over and disconnects the wire.

Only images that actually have a prompt baked in (a PNG made by ComfyUI / A1111 / Forge) can be read. A JPEG or plain photo carries no prompt.

Note: the connected filename does not include the subfolder, so if you keep two images with the exact same name in different input subfolders, the run may read the wrong one. Give them distinct names to be safe (the live readout in the node always shows the correct one).

## Inputs

**filename (optional)** — A filename to read from, usually wired from Load Image Pixaroma's `filename` output. When connected it drives the read and overrides the picker.

## Outputs

**text** — The recovered prompt, or an explanatory message when none was found.

## The buttons on the node

**Upload Image** — Opens a file picker so you can choose a PNG and read the prompt saved inside it.

**The arrows** — Step to the previous or next uploaded image and read its prompt automatically.

**The file name** — Click it to pick a different uploaded image from a list.

**Copy** — Copies the prompt it found to your clipboard.

> **Tip:** Use the Previous / Next arrow buttons to step through images in the input folder quickly.
