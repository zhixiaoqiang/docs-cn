---
depends:
  - guide/ui#navigation-bar
relates:
  - drauu: https://github.com/antfu/drauu
tags: [drawing]
description: |
  轻松绘制和标注你的幻灯片。
---

# 绘图与标注

Slidev 内置了由 [drauu](https://github.com/antfu/drauu) 驱动的绘图和标注功能。它让你可以轻松地在幻灯片上绘制和标注。

要开始使用，点击[导航栏](../guide/ui#navigation-bar)中的 <carbon-pen class="inline-icon-btn"/> 图标打开绘图工具栏。它在[演讲者模式](/guide/ui#presenter-mode)中也可用。你创建的绘图和标注将自动**实时同步**到所有实例。

<TheTweet id="1424027510342250499" />

## 使用触控笔

在平板电脑上使用触控笔时（例如，iPad 配合 Apple Pencil），Slidev 会智能检测输入类型。你可以直接用笔在幻灯片上绘制，无需开启绘图模式，同时用手指或鼠标控制导航。

## 持久化绘图

以下 frontmatter 配置允许你将绘图作为 SVG 文件保存在 `.slidev/drawings` 目录下，并将它们包含在导出的 PDF 或托管的站点中。

```md
---
drawings:
  persist: true
---
```

## 禁用绘图

完全禁用：

```md
---
drawings:
  enabled: false
---
```

仅在开发模式下启用：

```md
---
drawings:
  enabled: dev
---
```

仅在演讲者模式下启用：

```md
---
drawings:
  presenterOnly: true
---
```

## 绘图同步

默认情况下，Slidev 会在所有实例之间同步你的绘图。如果你与他人共享幻灯片，你可能想要通过以下配置禁用同步：

```md
---
drawings:
  syncAll: false
---
```

使用此配置，只有演讲者实例的绘图能够与其他人同步。
