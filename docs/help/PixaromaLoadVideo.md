---
id: "node:PixaromaLoadVideo"
title: "Load Video Pixaroma"
kind: node
category: "Image"
order: 29
icon: ""
tags: "mp4 movie frames clip import video"
comfyClass: "PixaromaLoadVideo"
---

> Upload or pick a video, decode it to frames plus audio and info, and preview it right on the node.

## What it does

Loads a video from ComfyUI's input folder and turns it into a batch of image frames you can feed into any image or video workflow. A video preview plays on the node body so you can check the clip without leaving ComfyUI.

The details you usually need are built in as separate outputs, so you do not need a second 'video info' node.

## How to use

- Click `choose video to upload` to add a file from your computer, or pick one from the dropdown (use the arrows to flip through).
- Wire `video_frames` into an image or video node. To rebuild a video later, send `video_frames` and `audio` straight into Save Mp4 Pixaroma.
- The clip plays in the preview as soon as it is selected, no need to run first.

## Loading controls

**Max frames** — How many frames to load from the start of the video. 0 = all. The safety valve for long clips: it never reads more than this many. Works with Skip first frames, which trims frames off the front of that window (Max 100 with Skip 5 gives 95).

**Force FPS** — Force a steady frames-per-second by dropping or duplicating frames (a 60fps clip forced to 24). 0 = keep the original rate. AI video models usually expect a fixed rate.

**Skip first frames** — Skip this many frames from the start, like trimming an intro. Trims the front of the loaded frames.

**Custom width / height** — Resize each frame as it loads. 0 = keep original. Set one to scale proportionally; set both to crop-to-fill that exact size (keeps proportions and trims overflow, like Resize Crop). It never stretches.

## Outputs

**video_frames** — The video as a batch of image frames.

**audio** — The soundtrack (empty if the file has none). Wire into Save Mp4 to keep the sound.

**frame_count** — How many frames were loaded.

**fps** — Frames per second of the loaded clip.

**width / height** — Frame size in pixels, after any resize.

**duration** — Length of the loaded clip in seconds.

## Requirements

Load Video reads frames with PyAV (or imageio as a fallback) and gets audio with ffmpeg. Most ComfyUI setups already have these, so usually there is nothing to install. If you ever see a 'video reader' message, install PyAV: in ComfyUI Manager use its pip install option and enter `av` (portable Windows: run `python_embeded\python.exe -m pip install av` in your ComfyUI folder).

> **Tip:** Pairs with Save Mp4 Pixaroma; video_frames and audio wire straight across.
