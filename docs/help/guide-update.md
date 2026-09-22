---
id: "guide:update"
title: "Update the nodes"
kind: guide
category: "Start here"
order: 49
icon: "⬆️"
tags: "update upgrade newer version manager easy install git pull latest"
---

> Three ways to get the newest version, in the order to try them.

## The easy ways

**ComfyUI Manager** — Open the Manager, find Pixaroma in the installed list, press Update, then restart ComfyUI.

**ComfyUI Easy-Install** — Run the updater that came with it. It fetches the newest version for you.

## When neither works

Open a terminal in the plugin folder and pull the newest version by hand:

- Go to `ComfyUI/custom_nodes/ComfyUI-Pixaroma`
- Run `git pull`
- Restart ComfyUI

## Updated, but nothing changed?

That is almost always the browser holding on to the old files rather than the update failing. The fix takes about five seconds and is on the Buttons or nodes missing? page.

## Which version am I on?

The footer of this window shows it on every page, and clicking it copies the full details. The Version Check Pixaroma node shows it too. Either is worth putting in any question you ask, because it is the first thing anyone will need to know.

> **Tip:** Installing for the very first time is covered on the Pixaroma website. This page is for people who already have the nodes, which is everyone who can read it.
