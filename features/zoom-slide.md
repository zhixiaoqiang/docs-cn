---
relates:
  - guide/faq#adjust-size
  - features/canvas-size
  - features/transform-component
tags: [layout]
description: |
  将幻灯片内容缩放到特定比例。
---

# 缩放幻灯片

你可能会发现演示中的某些幻灯片太空旷或太拥挤。Slidev 为每张幻灯片提供了 `zoom` 选项，允许你缩放幻灯片的内容：

```md
---
zoom: 0.8
---

# 内容很多的幻灯片

---

# 其他幻灯片不受影响
```

要缩放演示中的所有幻灯片，可以设置幻灯片画布大小：

<LinkCard link="features/canvas-size" />

要调整幻灯片上某些元素的大小，可以使用 `Transform` 组件：

<LinkCard link="features/transform-component" />
