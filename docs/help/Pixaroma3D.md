---
id: "node:Pixaroma3D"
title: "3D Builder Pixaroma"
kind: node
category: "Editors"
order: 8
icon: ""
tags: "mesh glb obj camera light render scene 3d"
comfyClass: "Pixaroma3D"
---

> A full 3D scene editor inside ComfyUI - build, light, and render scenes without leaving your workflow.

## What it does

Opens a fullscreen 3D editor where you can place primitives (cubes, spheres, cylinders, torus, blob, terrain, rock, teapot, hollow vessels), composite assets (trees, houses, furniture, flowers), or import your own `.glb` / `.obj` models.

The editor includes orbit / pan / zoom camera controls, realistic lighting, and live preview. Keyboard shortcuts follow the Blender layout: `G` to grab, `S` to scale, `R` to rotate, `Shift+D` to duplicate, and `Numpad 1/3/7` for view presets. Full undo / redo is built in.

## How to use

- Click `Open 3D Builder` on the node to open the fullscreen editor.
- Add shapes from the toolbar or import a `.glb` / `.obj` file.
- Position, scale, and rotate objects using the handles or keyboard shortcuts.
- Adjust the background image, lighting, and canvas size in the settings panel.
- Click `Save` to write the render back to the node.
- Run the workflow to get the rendered image as output.

## Outputs

**image** — The rendered 3D scene as a flat RGB image.

**width** — Width of the render in pixels.

**height** — Height of the render in pixels.

> **Tip:** Wire `image` into a ControlNet preprocessor for instant depth maps, line art, or normal maps.
