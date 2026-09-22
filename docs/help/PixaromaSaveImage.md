---
id: "node:PixaromaSaveImage"
title: "Save Image Pixaroma"
kind: node
category: "Image"
order: 24
icon: ""
tags: "export write disk output filename png jpg jpeg webp lossless quality compression file size smaller folder subfolders tree mirror civitai metadata parameters resources share lora hash embed settings gear hide buttons"
comfyClass: "PixaromaSaveImage"
---

> Save images to any folder on your computer, with a live preview of the exact filename.

## What it does

Saves every image it receives to the folder you choose: type or paste any path, click `Browse` to pick one with the normal system dialog, or leave the field empty to use ComfyUI's output folder. The `Will save as` line shows the file the next run will create, so complex naming patterns are never a surprise. One case it cannot show ahead of time: with no `%counter%` in the name, a run whose file already exists quietly adds a `_001` style ending, so the second save of `myimage` lands as `myimage_001.png` while the line still reads `myimage.png`. Nothing is ever overwritten either way.

Batches are handled automatically: every frame is saved with the counter increasing, and files never overwrite existing ones. Type `/` in the name to create subfolders, so `%date:yyyy-MM-dd%/image_%counter%` makes a folder per day.

The saved images show in a big preview on the node, so you do not need a separate preview node: one image fills the area, a batch shows as a grid. Click a picture in the grid to view it big, click it (or hover for the `◀ ▶` arrows) to flip through, and `✕` returns to the grid. Very large batches preview the first 16 images (every frame still saves). Resize the node to make the preview bigger.

## Examples: what to type, and what you get

Every one of these was run and the result copied from the node's own `Will save as` line, with a Text Pixaroma holding `bunny` wired into `name`, starting each time from a Filename box holding `image_%counter%`.

That starting point matters for the two chip rows: `+ Input folder` and `+ Date folder` put a folder in FRONT of whatever is already in the box, they do not replace it. So clicking `+ Date folder` on a node still holding its shipped default (which already contains the date) gives you `2026-08-10/image_2026-08-10_001.png`, with the date twice. Clear the box or trim the name first if that is not what you want.

| What you want | Filename box | What lands on disk |
| --- | --- | --- |
| Just a numbered file | image_%counter% | image_001.png |
| Keep the original picture's name | %input% | bunny.png |
| Original name, numbered so nothing clashes | %input%_%counter% | bunny_001.png |
| A folder for each picture you feed in | click + Input folder | bunny\image_001.png |
| A folder for each day | click + Date folder | 2026-08-10\image_001.png |
| The date in the name instead | %date:yyyy-MM-dd%_%counter% | 2026-08-10_001.png |
| Group by size | %width%x%height%_%counter% | 1024x1024_001.png |
| A folder per picture, then per day | %input%/%date:yyyy-MM-dd%/shot_%counter% | bunny\2026-08-10\shot_001.png |

## The name input, in plain English

The `name` dot is optional. Wire any text into it and `%input%` in the Filename box becomes that text: wire the `filename` output of Load Image Pixaroma and your results keep the original picture's name, or wire a Text Pixaroma and they all get the word you typed.

The part that trips everyone up is that `%input%` on its own is just TEXT. What decides whether you get a folder is the slash, exactly like typing one yourself:

**%input%_%counter%** — bunny_001.png - the wired text is part of the FILE NAME.

**%input%/image_%counter%** — bunny\image_001.png - the slash after it makes it a FOLDER. This is all the `+ Input folder` chip does: it puts `%input%/` at the front for you.

## When the wired text already contains folders

Only relevant if what you wire in looks like `portraits/cat` rather than `cat` - which happens with Load Images from Folder when `Include subfolders` is on.

By default those folders are squashed into the name, so two pictures called cat.png from different folders cannot overwrite each other:

**default** — portraits/cat becomes portraits_cat_001.png - one flat folder, safe.

**Keep folders from the wired name (settings)** — portraits\cat_001.png - your source folders are rebuilt in the save folder. Switch on `Keep folder structure in the name` in Load Images from Folder too, or it never sends the folders in the first place.

**Nothing wired at all** — `%input%` simply vanishes, and the leftovers are tidied up: `%input%_%counter%` gives 001.png (the stray underscore is trimmed) and `%input%` on its own falls back to image_001.png rather than a file with no name. Nothing breaks, so it is safe to leave the token in a pattern you sometimes wire up and sometimes do not.

## Filename tokens (click the chips to insert them)

**%input%** — The wired name input, e.g. the filename from Load Image Pixaroma, so results keep the original name. To put every picture in a folder named after that text, click the `+ Input folder` chip: it puts `%input%/` in front, and the slash is what makes the folder. Separately, if the wired text ALREADY contains folders (portraits/cat), those are normally squashed to portraits_cat, and `Keep folders from the wired name` in the settings keeps them instead.

**%date:yyyy-MM-dd%** — The save date and time. Codes: yyyy year, MM month, dd day, hh hours, mm minutes, ss seconds. Careful: capital MM is the MONTH, lowercase mm is MINUTES (same rule as ComfyUI's built-in Save Image), so a date is yyyy-MM-dd and a time is hh-mm-ss.

**%counter%** — An auto-increasing number that continues from the highest one already in the folder. Without %counter% in the name, the node still never overwrites: a taken name gets a _001 style ending added automatically (batches too, following your counter digits setting).

**%year% %month% %day% %hour% %minute% %second%** — Native ComfyUI tokens, same values as the built-in Save Image node. %date:...% does the same thing in a shorter form.

**%width% / %height%** — The image size in pixels.

**%batch_num%** — The frame's position inside a batch (0, 1, 2 ...).

**%Seed Pixaroma.seed%** — A node reference: prints another node's value into the name, like the seed that made the image. The `+ Model` chip builds one automatically for your model loader, so the model's name lands in the filename.

## Format and settings

- `PNG` is lossless, keeps transparency, and embeds the workflow: drag a saved PNG back into ComfyUI to reload everything with the exact seed that made it.
- `WebP` is the middle road and usually the best pick: far smaller than PNG, still keeps transparency, and it still reloads the workflow when you drag it back into ComfyUI. See the size table below for what it costs.
- `JPG` makes small, universally accepted files with a quality setting, but it has no transparency and ComfyUI cannot reload a workflow from a JPG. Pick PNG or WebP when reloading matters.
- The `Save` / `Preview` pair of pills switches between writing files on every run and only showing the images on the node, with nothing written to your folder (those frames go to ComfyUI's temporary folder, cleared on restart). So the node can also replace a preview node while you iterate.
- `Copy`, `Open`, and `Folder` sit in the button row: Copy puts the shown image on your clipboard, Open shows it in a new browser tab, Folder opens the save location in your file explorer (the window can appear on the taskbar instead of in front; that is a Windows limitation). Right-clicking the preview image gives the same `Open image`, `Copy image`, and `Save image` (download) options.
- The `gear` next to the fold triangle opens the settings (right-clicking the node still works too): date style (the order the + Date chip inserts, e.g. dd-MM-yyyy), counter digits (how many zeros %counter% uses), JPG / WebP quality, WebP lossless, workflow embedding, Civitai generation info, and whether folders in a wired name are kept. `Reset node size` in the right-click menu returns the node to its default size.
- `Buttons on the node`, in the settings, hides the ones you never use. Handy if `Folder` does nothing helpful on your system, or if you only ever save in one or two formats and want the others out of the way. The last remaining format cannot be switched off, and when only one is left the format pills disappear entirely, since there is nothing left to choose.
- If ComfyUI itself was started with `--disable-metadata`, nothing is written into your images: no workflow, no prompt, no Civitai info, whatever the settings above say. That is a ComfyUI-wide switch you would have added yourself, and it is off unless you did.

## Which format, and what WebP lossless is for

The three buttons on the node pick the FORMAT. `WebP lossless`, in the settings, is a separate thing: WebP can be written two different ways, and that switch chooses which. It does nothing at all unless WebP is the format you picked.

Real numbers from one 1024 x 1024 render, so the trade-off is concrete:

- Leave `WebP lossless` OFF for pictures you post, share or just keep: a fifth of the size and you cannot see the difference.
- Turn it ON when the file has to be exact: a master you will edit, upscale or re-run later, or flat colour and line art, where lossy compression shows around hard edges. You still save about a quarter over PNG.
- The quality slider is the thing lossless replaces, so it is ignored while that switch is on. With it off, a lower number means a smaller file.

| Setting | File size | Next to the PNG | Quality |
| --- | --- | --- | --- |
| PNG | 1,103 KB | - | perfect, keeps transparency |
| WebP, lossless ON | 784 KB | 71% | perfect, pixel for pixel identical |
| WebP, lossless OFF, quality 100 | 188 KB | 17% | no visible change |
| WebP, lossless OFF, quality 90 | 74 KB | 7% | no visible change on a photo |

## Sharing on Civitai

Turn on `Add Civitai generation info` in the right-click settings and the saved image also carries its settings in the format Civitai reads. Post that image there and it fills in the model and every LoRA you used with its strength, plus the steps, seed, sampler and size, so anyone can see how you made it.

You do not wire anything into this node for it: the values are read from your workflow, including when they come from Control Panel Pixaroma or Seed Pixaroma rather than typed on the sampler.

The very first save after you add a new model takes a moment while it fingerprints the file, which is what lets Civitai recognise it. That happens once per model and is remembered afterwards. Leave the switch off and nothing changes: the file is written exactly as before.

> **Tip:** The preview and the line under it show exactly what landed on disk in the last run.
