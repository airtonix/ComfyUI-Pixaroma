---
id: "guide:fonts"
title: "Add your own fonts"
kind: guide
category: "Start here"
order: 50
icon: "🔤"
tags: "font fonts ttf otf typeface family typography custom own install add where folder missing google fonts download handwriting bold italic"
---

> Drop a font file into one folder and it appears in the font list.

## Where fonts go

Pixaroma reads your fonts from ComfyUI's own models folder, so they sit with the rest of your files rather than inside the plugin (an update can never wipe them):

- Put your `.ttf` or `.otf` files in `ComfyUI/models/fonts`
- Open a font list on any node and click the `↻` button next to the filter box
- Your font is now in the list, under `Custom`

## No restart needed

The `↻` button rescans the folder while ComfyUI keeps running, so you can add a font and use it straight away. The folder is created for you the first time ComfyUI starts with Pixaroma installed, so if it looks empty you are in the right place.

## Which nodes use them

**Text Overlay Pixaroma** — The font list on the node panel and in the fullscreen editor.

**Text Watermark Pixaroma** — The same font list on the node panel.

**Image Composer Pixaroma** — Text layers inside the compositor.

## Add the whole family, not just one file

Pixaroma reads the weight and the slant out of each file and groups the whole family under one name, so copy in every file you have (Regular, Bold, Light, Italic, and so on). That is what makes the `B` and `I` buttons use the real thing.

With only one file it still works, but the two buttons behave differently: italic gets faked by slanting the letters, while bold falls back to the nearest weight you actually have, so it can look no different from normal.

## Keeping fonts somewhere else

If your models live on another drive, point ComfyUI's `extra_model_paths.yaml` at your folder with a `fonts:` entry, exactly like `checkpoints:` or `loras:`. Pixaroma reads every folder ComfyUI registers, so fonts there are picked up too.

## What is supported

`.ttf` and `.otf` files. Font collections (`.ttc`) and web font formats (`.woff`, `.woff2`) are not read. A variable font works, but it renders at its normal setting rather than exposing its sliders.

> **Tip:** Pixaroma also ships a set of fonts built in, so the list is never empty. Your own fonts sit alongside them and are never touched by an update.
