---
id: "canvas:workflows"
title: "Workflows panel"
kind: canvas
category: "Canvas tools"
order: 60
icon: ""
tags: "workflow browser panel organise organize folder subfolder sub-folder rename move delete duplicate cover thumbnail picture favourite favorite star search find open manage tidy tidying duplicates copies junk clean up sort list grid missing nodes red boxes unsaved keyboard shortcut arrow keys pixaroma workflows website site download example text too small tiny bigger larger size zoom font readable collapse expand fold unfold hide show arrow twisty tree nested new folder inside"
---

> A panel for finding, opening and organising the workflow files on your own computer, with a picture of each one.

## What it does

Opens from the button shown beside the heading above, in the top toolbar next to the Help question mark. Alt+W does the same, and so does right-clicking empty canvas.

If you would rather keep the toolbar clear, you can hide that button in Settings under Pixaroma. Alt+W and the right-click entry still open the panel, so nothing is lost.

It reads the same folder ComfyUI already keeps your workflows in, so everything you have is there the first time you open it. Nothing is imported and nothing is moved.

## Finding one

- The cursor starts in the search box, so you can just type.
- Search looks INSIDE the files as well as at their names: type a model or LoRA filename, a phrase from a prompt, or your own note, and it finds the workflows that use it.
- Arrow keys move the selection: left and right by one card, up and down by a whole row. Enter opens the highlighted one.
- Double click a card to open it. A small coloured dot in the corner of a card means it is open right now.

## The pictures on the cards

Every workflow gets one straight away: a small map of the graph itself, drawn from where the nodes sit and what colour you gave them. Once a workflow has been run, its own last output picture becomes the cover instead. A workflow that makes a video rather than a picture keeps the drawn map, because there is no image to show.

You can also choose any picture yourself with Set cover. A cover you chose by hand is never replaced by a later run: it stays until you use Remove cover, which puts the workflow back to its own last output or the drawn map.

Covers you choose by hand are saved as ordinary jpg files in a pixaroma_covers folder inside ComfyUI's user folder, next to your workflows. You can open, back up or delete them like any other file, and a cover you delete simply goes back to the drawn map.

## The buttons along the top

**Grid / List** — Picture cards, or a dense sortable list once you have hundreds.

**A A A** — How big everything in the panel is drawn: text, cards, covers and the folder list together. The small A is how the panel first shipped, the middle one is the normal size, and the large one is for a big screen or tired eyes. It is remembered.

**Sort** — Recent, Name, or number of Nodes. It greys out in Recent and while searching, because those two already have an order of their own.

**Open folder** — Opens the selected folder on your computer. On Windows it opens BEHIND the browser, so look in your taskbar for it.

**Save open workflow here** — Saves whatever is on the canvas into the folder you have selected, so new work stops landing loose in the root. A workflow you have never saved becomes that file, so the tab you are working in follows it. One that is already saved somewhere gets a copy in the folder and the tab stays on the original.

## Organising

- Rename a workflow with F2, or right click it and choose Rename. Enter saves, Escape cancels.
- Rename a FOLDER by double clicking its name, or from its right-click menu.
- Drag a card onto a folder to move it. Select several first with Ctrl+click to move them together.
- Drag a folder up or down to reorder it. A line shows where it will land. Folders can be reordered within their level, not dragged inside each other.
- A folder with folders inside it has a small arrow. Click the arrow to show or hide what is in it, and the panel remembers. They start closed, so a lot of folders no longer fills the whole column. Whichever folder you are looking at is always shown, whether or not you opened its parent yourself.
- To make a folder INSIDE another one, right click the outer folder and choose New folder inside. The plain + New folder at the bottom of the list always makes one at the top level.
- Right click a workflow for everything at once: Open, favourite, Rename, Duplicate, Move to folder, Set or Remove cover, Reveal, Delete.
- Right click a folder for New folder inside, Rename, Move up, Move down, Reveal and Delete. A folder is only deleted once it is EMPTY: move or delete what is in it first, sub-folders included. That refusal is the safety net, because there is no undo.

## Favourites, Recent and the collections

The star adds a workflow to Favourites, on a picture card and on a list row alike. These are ComfyUI's own bookmarks, so the same stars show in ComfyUI's built-in Workflows sidebar.

Under your real folders there are collections that fill themselves, worked out by reading each file: what it makes (Text to Image, Video, Upscale, Inpaint) and which model family it uses. Your folders are untouched, and a workflow filed in the wrong place still turns up in the right collection.

## Needs tidying

A shortcut on the left that opens a review screen, grouped by what is actually wrong. Nothing is ever changed for you: every row is a suggestion with its own fix next to it, and anything that deletes still asks first.

**Still called "Unsaved Workflow"** — Files saved before you named them. Rename edits the name right there in the row: type over it and press Enter.

**The same workflow saved more than once** — Sets of files with the same nodes and the same models under different names. "Keep this one" deletes the others in its set, and tells you which before it does.

**Needs nodes you do not have** — These open with red boxes where the missing nodes should be. Copy list puts the missing node names on your clipboard, ready to search for in ComfyUI Manager.

## What it tells you before you open one

Select a workflow and the panel on the right shows when it changed, how many nodes it has, whether any of its nodes are missing on this machine, and every model and LoRA file it needs, with a Copy button for the whole list. There is also a note field in your own words, which search can find.

## Keyboard

**Alt+W** — Open or close the panel

**type** — Search, from the moment it opens

**arrow keys** — Move the selection

**Enter** — Open the highlighted workflow

**F2** — Rename it

**Escape** — Clear the search, then close the panel

## Worth knowing

- Deleting a workflow cannot be undone yet, so it always asks first. If the one you are deleting is open with unsaved changes, it says so.
- The panel stays open while you work, and while you switch between workflows.
- Your notes, chosen covers and folder order are kept beside your workflows, not inside them, so sharing a workflow never carries them along.

## Looking for workflows to download?

This panel organises the workflows already on your computer. If you came here wanting NEW ones, the Pixaroma website has ready-made workflows to download, and anything you save from there lands in the same folder this panel reads.

[Pixaroma workflows website](https://example.invalid)

> **Tip:** There is deliberately no Workflows node. A node would be saved into the workflow file and would follow it to anyone you shared it with.
