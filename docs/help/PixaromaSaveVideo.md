---
id: "node:PixaromaSaveVideo"
title: "Save Video Pixaroma"
kind: node
category: "Image"
order: 28
icon: ""
tags: "export video render encode movie mp4 h264 h265 hevc 10 bit 10bit ten bit colour color depth banding gradient smooth quality crf bitrate folder subfolders filename tokens counter name fps duration frames seconds length trim audio soundtrack player preview scrub settings gear hide buttons master grade edit audio fade click tick pop start onset"
comfyClass: "PixaromaSaveVideo"
---

> Save an mp4 to any folder on your computer, name it however you like, and watch it play on the node.

## What it does

Save Image Pixaroma's folder and filename tools with a video encoder behind them. Type or paste a folder, or click Browse to pick one with your own system dialog; leave it empty for ComfyUI's output folder. Build the name from tokens and the line underneath shows the exact file that will be written, before you run anything. Videos never overwrite: the counter carries on from the highest number already in the folder.

Save Mp4 Pixaroma is still there and is unchanged. That one is the quick one; this is the one with folders, naming and settings.

## The two formats

The pill on the node picks both the format and the colour depth together, because whether a video plays depends on the format, not on the number of bits.

**MP4** — H.264 at 8-bit. Plays on everything, everywhere. This is the default and the safe choice for anything you are sending to someone else.

**MP4 HQ** — H.265 at 10-bit. Smooth gradients where MP4 would band (skies, fades to black, soft lighting), and roughly half the file size for the same picture. It needs a reasonably recent player, so keep it for your own masters and for footage you will edit or grade.

## Why there is no 100 percent

Video is always compressed. An mp4 stores what your eye will accept, not the frames themselves, which is why a few seconds of video is under a megabyte instead of the fifty or so the raw frames would take. So there is no setting here, or in any video tool, that saves your frames untouched.

That is why the Quality slider shows a word rather than a percentage. High is the setting where the difference stops being visible, and it is the standard choice for delivering video: Save Mp4 Pixaroma uses the same one, and it is a little sharper than what ComfyUI's own video saving defaults to. Going above High is not wrong, it just makes a bigger file for something you are unlikely to see.

If you want the picture to hold up to editing and grading afterwards, the setting that genuinely helps is MP4 HQ, because 10-bit keeps gradients smooth. That does more for you than pushing the quality slider up.

## About 10-bit

ComfyUI works in far more than 8 bits internally, so saving to 8-bit throws real information away. Where you notice it is banding: a sky or a fade that should be smooth comes out in visible steps. 10-bit keeps that smoothness, and it helps again if you are going to grade the footage afterwards. It does NOT make the picture sharper, which is what people usually expect.

Colour depth lives in the settings and only applies to MP4 HQ. MP4 stays 8-bit on purpose: 10-bit H.264 exists but almost nothing can play it, so offering it would just hand you a file that will not open.

## Examples: what to type, and what you get

A fresh node starts with `Video_%date:yyyy-MM-dd%_%counter%` in the Filename box, which writes `Video_2026-08-10_001.mp4`. The examples below assume you have CLEARED that and typed the pattern shown, because the chips add to whatever is already there rather than replacing it. The crux, in one line: the SLASH is what makes a folder.

| What you want | Filename box | What lands on disk |
| --- | --- | --- |
| Just a numbered file | Video_%counter% | Video_001.mp4 |
| Inside a subfolder | clips/Video_%counter% | clips\Video_001.mp4 |
| A folder per day | %date:yyyy-MM-dd%/Video_%counter% | 2026-08-10\Video_001.mp4 |
| The frame rate in the name | Video_%fps%fps_%counter% | Video_24fps_001.mp4 |
| The length in the name | Video_%duration%s_%counter% | Video_3-4s_001.mp4 |
| The frame count in the name | Video_%frames%f_%counter% | Video_81f_001.mp4 |
| Keep the wired name | %input%_%counter% | bunny_001.mp4 |
| A folder named after the wired name | %input%/Video_%counter% | bunny\Video_001.mp4 |

## Why some tokens stay as words until you run

The preview line can only show what it already knows. The frame rate is on the node, so `%fps%` fills in straight away. But `%frames%`, `%duration%`, `%width%` and `%height%` come from the video itself, so they stay written out as `%frames%` and so on until the first run, then fill in from then on. `%Seed Pixaroma.seed%` is the same: it fills in once there is a Seed Pixaroma node in the workflow. Nothing is wrong when you see them spelled out, and the saved file always gets the real values.

## The buttons on the node

**The orange triangle** — Folds the node down to just the video. There is a setting to tuck the buttons away too.

**The gear** — Opens the settings. Right-clicking the node does the same.

**Browse** — Picks a folder with your own system dialog. Doing that once approves the folder for good, so afterwards you can type or paste it.

**The chips** — Add a token at the cursor. The two folder chips add to the FRONT instead, because a folder has to come first.

**Open** — Opens the video in a new browser tab.

**Download** — Saves a copy through your browser. Handy in Preview mode, where the only copy is in ComfyUI's temp folder.

**Folder** — Opens the save folder in your file explorer. The window can appear on the taskbar rather than in front.

**Save and Preview** — Save writes to your folder on every run. Preview plays the video on the node but writes to ComfyUI's temp folder instead, which is cleared on restart, so you can try things without filling your folder.

**Play, the scrub bar, and fullscreen** — Under the video. Clicking the picture plays and pauses too, and you can drag anywhere along the bar to move through the clip.

## In the settings

**Quality** — Shows a word beside the number: Small file, Medium, High or Maximum. It is NOT a percentage. High is the default and the point where you cannot see the difference; it is also exactly what Save Mp4 Pixaroma uses, so moving a workflow between the two changes nothing. Winding it to Maximum mostly just grows the file.

**Colour depth** — 8 or 10 bit, for MP4 HQ only.

**Trim to audio** — Ends the video exactly where the sound ends, for when the audio is the master. Off keeps every frame and the sound simply stops when it stops.

**Audio fade-in** — Fades the sound in at the very start. AI video clips often begin with a click because the model starts the audio at full level in one step; about 120 ms removes it and is too short to hear as a fade. Leave it off when re-saving audio you do not want altered.

**Save workflow inside the video** — Writes the whole workflow into the mp4, so you can drag the video back onto the canvas later and get the graph back, exactly like dragging a PNG. It is stored the same way ComfyUI's own video saving stores it, so ComfyUI reads it back on its own. Turn it off if you would rather the file carried nothing about how it was made.

**Date style, counter digits** — What the + Date chip inserts, and how many digits the counter uses.

**Buttons on the node** — Hide the ones you never use. The format you are currently saving as always stays visible.

## Requirements

This node needs a free tool called ffmpeg to turn the frames into a video. Most ComfyUI setups already have it, because anything else that works with video brings it along, so usually there is nothing to install. Both formats need the frame width and height to be even numbers, and the node says so clearly instead of crashing if they are odd.

Only if you see an "ffmpeg not found" message, add it one of these ways:

- Easiest: in ComfyUI Manager, open its pip install option and enter `imageio-ffmpeg`.
- Portable ComfyUI (Windows): open a command window in your ComfyUI folder (the one that holds the `python_embeded` folder) and run `python_embeded\python.exe -m pip install imageio-ffmpeg`.
- Installed with your own Python (venv or conda): activate that environment and run `pip install imageio-ffmpeg`.

> **Tip:** This is a terminal save node, it has no outputs.
