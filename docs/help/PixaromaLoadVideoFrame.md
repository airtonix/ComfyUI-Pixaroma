---
id: "node:PixaromaLoadVideoFrame"
title: "Load Video Frame Pixaroma"
kind: node
category: "Image"
order: 30
icon: ""
tags: "still grab frame single picture screenshot"
comfyClass: "PixaromaLoadVideoFrame"
---

> Load a video and pick one exact frame to use as an image. Like a Load Image node, but for video.

## What it does

Loads a video and pulls out a single frame you choose, then sends it on as an image. Use it when you want one still picture from a clip without exporting the frame in another program first.

The frame you pick shows in a preview right on the node, and it reads the video's frame count for you so the slider knows how far it can go.

## How to pick a frame

- Click `choose video to upload` to add a file, or pick one from the dropdown.
- Drag the slider under the preview to scrub to any spot. The preview updates as you drag.
- Use the `◀` and `▶` buttons to step exactly one frame back or forward for a pinpoint choice.
- Or type the exact frame number in the `frame` box above the preview.

## Good to know

- The frame number is 0-based, so `frame 0` is the very first frame.
- If you enter a number past the end of the video, the last frame is used.
- The preview is a quick guide; the frame the node sends out is always exact. On heavy phone videos (HEVC) the preview can lag a little, same as the Load Video node.

## Outputs

**image** — The frame you picked, as an image.

**mask** — A blank mask that matches the frame, so it fits the same slots as Load Image.

**frame_count** — How many frames the whole video has.

**fps** — Frames per second of the video.

**width / height** — Frame size in pixels.

## Requirements

Reads frames with PyAV (or imageio as a fallback). Most ComfyUI setups already have these. If you ever see a 'video reader' message, install PyAV: in ComfyUI Manager use its pip install option and enter `av` (portable Windows: run `python_embeded\python.exe -m pip install av` in your ComfyUI folder).

> **Tip:** For loading a whole clip as a batch of frames instead, use Load Video Pixaroma.
