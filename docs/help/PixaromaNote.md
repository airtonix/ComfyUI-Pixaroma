---
id: "node:PixaromaNote"
title: "Note Pixaroma"
kind: node
category: "Prompt & Text"
order: 16
icon: ""
tags: "comment sticky documentation annotate"
comfyClass: "PixaromaNote"
---

> A rich-text annotation that lives on your canvas - no wires, no outputs.

## What it does

Lets you write styled, multi-paragraph notes directly on the canvas. Double-click (or use the pencil button) to open a fullscreen editor.

Supported formatting: bold, italic, underline, strikethrough, headings, bulleted and numbered lists, code blocks with a copy button, tables, horizontal rules, and inline icons (CLIP, LORA, GGUF, model badges and 30+ more). You can also insert custom-colored buttons (Download, View Page, Read More, or plain links) and pre-styled YouTube and Discord pills.

## How to use

- Drop the node anywhere on the canvas.
- Double-click the node body (or click the pencil icon) to open the editor.
- Write and format your content using the toolbar buttons.
- Click `Save` to close and persist your note.
- Right-click the node to change its background and title color via the standard Colors menu.

## The buttons on the node

**Edit** — Opens the full note editor, where you can format text and add links, images, icons and code blocks.

**Copy** — Appears on any code block in the note and copies just that code to your clipboard.

> **Tip:** This node never runs during a workflow - it is pure decoration and shows no timing badge.
