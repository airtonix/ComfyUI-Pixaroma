---
id: "node:PixaromaFirstLastFrame"
title: "First Last Frame Pixaroma"
kind: node
category: "Utility"
order: 31
icon: ""
tags: "first last frame start end continue continuation extend chain join carry on next video ending beginning still grab last frame from video"
comfyClass: "PixaromaFirstLastFrame"
---

> Takes the very first and the very last frame out of a video, as two images.

## What it does

Give it a video and it hands you back two pictures: the frame the video starts on and the frame it ends on. Wire either one into Save Image to keep it.

The reason most people want this is to carry on from where a clip ended. Render a video, take its last frame, use that as the starting picture for the next video, and the two clips join up. Repeat that and you can build a long scene out of short ones.

## Which input to use

There are two inputs because ComfyUI has two different kinds of video travelling on wires, and they do not fit the same slot. Connect whichever one you have. You never need both.

**video_frames** — For a batch of frames. This is what Load Video Pixaroma gives you from its `video_frames` output. Any image batch works here, including the frames coming out of a video model before they are saved.

**video** — For ComfyUI's own video type, the purple `VIDEO` wire. This is what its Load Video node gives you.

## Good to know

- If you connect both inputs, `video_frames` is the one that gets used.
- Reading a video file only costs the two frames it needs, so pointing this at a long clip does not fill your memory with the whole thing.
- If you wire in a single picture instead of a batch, both outputs give you that same picture. Nothing breaks.
- The frames come out exactly as they are in the video. Nothing is resized, cropped or recoloured.

## Outputs

**first_frame** — The frame the video opens on.

**last_frame** — The frame the video ends on. This is the one to feed into your next video when you want the clips to join up.

> **Tip:** To pick any frame in the middle rather than the two ends, use Load Video Frame Pixaroma.
