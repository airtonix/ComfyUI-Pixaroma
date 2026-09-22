---
id: "node:PixaromaAudioStudio"
title: "AudioReact Pixaroma"
kind: node
category: "Editors"
order: 15
icon: ""
tags: "music sound video beat visualizer audio reactive"
comfyClass: "PixaromaAudioStudio"
---

> Turn a still image into an audio-reactive video - motion and effects that move with the beat.

## What it does

Opens a fullscreen editor with a live WebGL preview that reacts to audio in real time as you drag sliders. Choose one of 15 motion modes (Pulse Zoom, Camera Shake, Glitch, Pinch, Wave, Tilt, Pixelate, RGB Split, and more) and layer up to 8 overlay effects (chroma shift, bloom, vignette, hue shift, cinematic grade, letterbox, scanlines, film grain).

Both the image and audio inputs are optional - you can wire upstream sources or load them inline inside the editor by drag-drop or file pick. No extra models are needed. It needs a browser with 3D graphics support, which almost every current browser has.

## How to use

- Wire an upstream IMAGE and AUDIO, or click `Open AudioReact` and load them inside the editor.
- Pick a motion mode and adjust its intensity and other settings in the sidebar.
- Add overlay effects from the effects panel.
- Use the transport bar to scrub and preview the animation in real time.
- Click `Save` to store the settings; run the workflow to render all frames.

## Outputs

**video_frames** — All rendered animation frames as a batch of images.

**audio** — The audio track, passed through so it can be combined into a video later.

**fps** — Frames per second of the render.

> **Tip:** Pair with `Save Mp4 Pixaroma` to mux the audio and frames into a single MP4 file.
