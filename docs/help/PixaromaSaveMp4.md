---
id: "node:PixaromaSaveMp4"
title: "Save Mp4 Pixaroma"
kind: node
category: "Utility"
order: 27
icon: ""
tags: "export video render encode movie mp4 h264 audio fade click tick pop start onset"
comfyClass: "PixaromaSaveMp4"
---

> Encode a frame batch to an H.264 mp4 with optional audio, and watch it play right on the node.

## What it does

Takes an IMAGE batch and an optional AUDIO track and encodes them to a single mp4 using ffmpeg. A video preview plays on the node body so you can check the result without leaving ComfyUI. Audio is combined in the same pass.

The ffmpeg binary is auto-located: if imageio-ffmpeg is installed its bundled exe is used; otherwise ffmpeg on your system PATH is tried.

## How to use

- Wire an IMAGE batch into `video_frames` and the frame rate into `fps` (from AudioReact, connect its `video_frames` and `fps`).
- Optionally connect an `audio` output to add a soundtrack.
- Set `save_mode` to `preview` (temp, auto-cleared on restart) or `save` (kept in output).
- The preview remembers the last clip, so it comes back when you switch workflows. If that file has since been deleted, moved, or cleared from temp by a restart, the node tells you instead of showing a black player: just run again.
- Set `filename_prefix` to name the file; a 5-digit counter is added automatically. You can print another node's value into the name with a token like `%Seed Pixaroma.seed%`.
- Enable `trim_to_audio` to end the video at the audio length.
- Set `audio_fade_ms` to fade the sound in at the very start. AI video models often begin their audio at full level in a single step, which is heard as a click; about `120` removes it and is too short to notice as a fade. Leave it at `0` when you are re-saving a video whose sound you do not want changed.

## Requirements

Save Mp4 needs a free tool called ffmpeg to turn the frames into a video. Most ComfyUI setups already have it, because anything else that works with video brings it along, so usually there is nothing to install. One rule: the frame width and height must both be even numbers, and the node shows a clear message instead of crashing if they are odd.

Only if you see an "ffmpeg not found" message, add it one of these ways:

- Easiest: in ComfyUI Manager, open its pip install option and enter `imageio-ffmpeg`.
- Portable ComfyUI (Windows): open a command window in your ComfyUI folder (the one that holds the `python_embeded` folder) and run `python_embeded\python.exe -m pip install imageio-ffmpeg`.
- Installed with your own Python (venv or conda): activate that environment and run `pip install imageio-ffmpeg`.

## Workflow inside the video

The full workflow is saved inside the mp4, the same way it is saved inside a PNG, so you can drag a saved mp4 back onto the canvas later and rebuild the whole graph. It is stored the same way ComfyUI's own video saving stores it, so ComfyUI reads it back on its own. The frame width and height must be even numbers.

## The buttons on the node

**Play and Pause** — Starts or stops the preview. Clicking the picture itself does the same.

**The scrub bar** — Click or drag anywhere along it to jump to that point in the clip.

**Download** — Saves the finished mp4 to your computer.

**Fullscreen** — Expands the video preview to fill your screen.

## If you want folders and filenames

Save Mp4 is the quick one: drop it in and press Run. If you want to save into your own folder, build the filename from tokens, or see the exact file before it is written, use Save Video Pixaroma instead. It has the same encoder plus Save Image's folder and filename tools, and it can also write H.265 at 10-bit.

> **Tip:** This is a terminal save node, it has no outputs.
