---
relates:
  - features/seo-meta
tags: ['SEO', head]
description: |
  为你的幻灯片设置 Open Graph 图片。
---

# Open Graph 图片

Slidev 允许你通过 headmatter 中的 `seoMeta.ogImage` 选项设置 Open Graph 图片：

```md
---
seoMeta:
  ogImage: https://url.to.your.image.png
---

# 你的幻灯片内容
```

了解更多关于 [SEO Meta 标签](./seo-meta)。

## 本地图片

如果你的项目根目录中有 `./og-image.png`，Slidev 会自动将其作为 Open Graph 图片，无需任何配置。

## 自动生成

自 v52.1.0 起，Slidev 支持从第一张幻灯片自动生成 Open Graph 图片。

你可以将 `seoMeta.ogImage` 设置为 `auto` 来启用此功能。

```md
---
seoMeta:
  ogImage: auto
---
```

它会使用 [playwright](https://playwright.dev/) 捕获第一张幻灯片并保存为 `./og-image.png`（与 `slidev export` 相同）。你也可以将生成的图片提交到仓库以避免自动生成。或者如果你在 CI 上生成，你可能还需要设置 playwright 环境。
