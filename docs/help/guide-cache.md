---
id: "guide:cache"
title: "Buttons or nodes missing?"
kind: guide
category: "Start here"
order: 52
icon: "🧹"
tags: "cache refresh blank broken missing stale empty buttons gone disappeared not showing hide hidden toolbar align workflows help bring back restore"
---

> Almost always the browser cache. Here is the five second fix.

## Is it only the Align, Workflows or Help button?

If everything else is fine and one of those three toolbar buttons is the only thing gone, it is probably switched off rather than broken. Open Settings, find the Pixaroma section, and look for the three "Show the ... button in the top toolbar" boxes. Tick the one you want back.

Worth knowing either way: hiding a button never turns the feature off. Alt+W still opens Workflows and Alt+H still opens Help, and both are also on the right-click menu on empty canvas.

## Try this first

Hold Ctrl and Shift and press R. On a Mac, hold Command and Shift and press R. That forces the browser to fetch the newest files instead of reusing what it saved earlier.

## If it is still wrong

- Press F12 to open the developer tools
- Go to the Network tab
- Tick Disable cache
- Leave the tools open and reload the page

## Why this happens

Browsers keep a copy of files so pages load faster. After an update, the browser can keep serving yesterday's copy, so new buttons never appear and a node can look half broken. The plugin now stamps its files so this should fix itself, but a very old saved copy may need one last manual refresh.

## Still not right?

Add a Version Check Pixaroma node. If it warns that the browser is running older files than the plugin, the cache is still the problem. If the versions match, it is something else, so ask in #pixaroma-nodes on Discord and say which node.

[💬 Ask in #pixaroma-nodes](https://example.invalid)

> **Tip:** This one fix solves most reports that start with "it looks broken", so it is always worth trying before anything else.
