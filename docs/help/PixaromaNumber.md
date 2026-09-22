---
id: "node:PixaromaNumber"
title: "Number Pixaroma"
kind: node
category: "Values"
order: 43
icon: ""
tags: "int float value amount"
comfyClass: "PixaromaNumber"
---

> One number field that outputs the same value as both INT and FLOAT.

## What it does

Type a number once and get two outputs: `int` (rounded to the nearest whole number) and `float` (kept with decimals). Handy when one downstream node needs an integer and another needs a decimal from the same value. The field accepts whole numbers, decimals, and math like `1024+64` or `512*2`.

## Outputs

**int** — The value rounded to the nearest whole number.

**float** — The value as-is, with decimals preserved.
