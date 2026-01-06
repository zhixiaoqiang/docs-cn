---
relates:
  - guide/faq#adjust-size
  - features/zoom-slide
  - features/transform-component
tags: [layout]
description: |
  设置所有幻灯片的大小。
---

# 幻灯片画布大小

Slidev 允许你通过 headmatter 中的 `canvasWidth` 和 `aspectRatio` 选项设置幻灯片画布的大小：

```md
---
# 幻灯片的宽高比
aspectRatio: 16/9
# 画布的实际宽度，单位为 px
canvasWidth: 980
---

# 你的幻灯片内容
```

要缩放演示中的部分幻灯片，可以使用 `zoom` 选项：

<LinkCard link="features/zoom-slide" />

要调整幻灯片上某些元素的大小，可以使用 `Transform` 组件：

<LinkCard link="features/transform-component" />
