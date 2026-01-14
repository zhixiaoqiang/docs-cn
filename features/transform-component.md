---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/zoom-slide
tags: [布局]
description: |
  用于缩放某些元素的组件。
---

# `Transform` 组件

`Transform` 组件允许你缩放幻灯片上元素的大小：

```md
<Transform :scale="0.5" origin="top center">
  <YourElements />
</Transform>
```

当你想调整幻灯片上某些元素的大小而不影响整个幻灯片的布局时，这很有用。

要缩放演示中的所有幻灯片，可以设置幻灯片画布大小：

<LinkCard link="features/canvas-size" />

要缩放演示中的部分幻灯片，可以使用 `zoom` 选项：

<LinkCard link="features/zoom-slide" />
