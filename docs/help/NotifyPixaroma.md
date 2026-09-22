---
id: "node:NotifyPixaroma"
title: "Notify Pixaroma"
kind: node
category: "Utility"
order: 47
icon: ""
tags: "sound alert ding beep finished done chime"
comfyClass: "NotifyPixaroma"
---

> Plays a sound when the workflow reaches this node, and times how long the run took to get there.

## What it does

Drop one at the end of a workflow to hear when rendering is done, or branch one off any node to get an audio alert at a checkpoint. Useful when you are in another tab or app while ComfyUI runs. Every Run it also measures how long the workflow took to REACH this node and shows that time on the node face. The sound fires every Run even when upstream is cached.

## The checkpoint timer

The clock starts the moment you click Run and stops when this node is reached, so it answers 'how long did it take to get this far'. One node at the end gives you the whole run; branch several through the graph and the gaps between their times are the per-segment times.

Timing does not depend on the sound. The time is still recorded when this node's `enabled` toggle is off and when the master mute is on, so you can time a workflow in complete silence.

## Reading the node face

The clock row shows the last time as minutes : seconds . milliseconds (for example `02:47.318`), switching to hours : minutes : seconds . milliseconds if a run goes past an hour. It reads `--:--.---` until the first Run, and `timer off` when Record time is unticked for this node. A mute marker appears in the row whenever the ding will not play, whether that is this node's own toggle or the master mute - so a silent node never looks like a working one. The small arrow on the RIGHT of the clock row folds the node down to just the clock; click it again to bring the sound controls back.

## Notify time history

Right-click the node and pick `Notify time history` to see the last 10 times THIS node was reached, newest first. Each line shows the label (or the sound name if you left the label blank) and the time of day it ran, next to how long the workflow took to reach here, and the fastest one is marked with a lightning bolt. You can copy a single line, export the whole list as a text file, or clear it.

Every Notify node keeps its own separate list, so a workflow with several checkpoints gives you one history per checkpoint rather than one shared pile.

## Settings (right-click the node)

**Collapse / Expand** — Folds the node down to just the clock, or brings the sound controls back. The same thing the arrow on the clock row does.

**Record time** — Turns the checkpoint timer on or off for this one node. While it is off the clock reads `timer off` and nothing is added to this node's history. The sound is unaffected.

**Notify time history** — Opens this node's list of the last 10 times, with Copy, Export .txt, and Clear.

**Mute all Notify sounds** — The master mute: no Notify node plays a sound, in any workflow. It is the same switch as the one in this node's own settings, so flipping either one flips both. Checkpoint timers keep recording while it is on.

## Where the times are kept

The recorded times are stored on THIS machine, not inside the workflow. Sharing or exporting a workflow never carries your times along with it, and whoever opens it starts with an empty list. Duplicating a Notify node also starts a fresh list rather than inheriting the original's. The times are remembered between sessions, so they are still there after you reload the page or restart ComfyUI.

## Good to know

- A Notify node inside a SUBGRAPH does not record a checkpoint time - the sound still plays, but nothing lands on the clock or in the history. Put it in the main graph to time it.
- A cached re-run shows a near-zero time. Nothing upstream had to be recomputed, so there was genuinely nothing to wait for.
- The time is measured in your browser, from the start of the Run to the moment this node reports back.

## Inputs

**any** — Wire any node output here. The data passes through untouched - this node only listens for when it is reached.

**enabled** — Per-node mute switch. Turn it off to silence just this node. The checkpoint timer keeps recording.

**sound** — Which sound to play. Lists every `.mp3`, `.wav`, and `.ogg` in the `assets/sounds/` folder. Add your own there (then restart ComfyUI).

**volume** — Playback volume from 0 (silent) to 100 (full).

**label** — Optional name shown in the browser console when the node fires, and used to name this node's rows in the time history. Helpful with several Notify nodes in one workflow.

> **Tip:** The `Preview` button plays the sound now, ignoring the toggles. The on and off switch for every Notify node lives in this node's own settings, opened with the gear button on the node toolbar, or by right-clicking the node.
