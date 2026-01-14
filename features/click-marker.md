---
depends:
  - guide/syntax#notes
  - guide/animations
since: v0.48.0
tags: [演示模式, 动画]
description: |
  高亮备注并自动滚动到备注的活动部分。
---

# 点击标记

对于某些幻灯片，你可能有较长的备注，难以找到当前位置。Slidev 支持点击标记，允许高亮并自动滚动到与相应内容对应的备注部分。在备注的任何行开头放置 `[click]` 标记，以便在需要跳转到另一个[点击](/guide/animations#click-animation)时使用。你可以使用 `[click:{n+1}]` 跳过 `n` 次点击。例如：

```md
<!--
第一次点击之前的内容

[click] 这将在第一次点击后高亮

第一次点击后也会高亮

- [click] 这个列表元素将在第二次点击后高亮

[click:3] 最后一次点击（跳过两次点击）
-->
```

Slidev 会分割点击标记之间的内容，并在演讲者备注中高亮显示，与你的幻灯片进度同步。

<video src="https://github.com/slidevjs/slidev/assets/11247099/40014e34-67cd-4830-8c8d-8431754a3672" controls rounded shadow w-full></video>
