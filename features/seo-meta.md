---
depends:
  - custom/index#headmatter
relates:
  - features/og-image
tags: [SEO, head]
description: |
  配置 SEO meta 标签以改善社交媒体分享和搜索引擎优化。
---

# SEO Meta 标签

Slidev 允许你在 headmatter 中配置 SEO meta 标签以改善社交媒体分享和搜索引擎优化。你可以设置 Open Graph 和 Twitter Card meta 标签来控制幻灯片在社交平台上分享时的显示方式。

## 配置 {#configuration}

将 `seoMeta` 配置添加到你的幻灯片 frontmatter：

```yaml
---
# SEO meta 标签
seoMeta:
  ogTitle: Slidev 入门模板
  ogDescription: 面向开发者的演示幻灯片
  ogImage: https://cover.sli.dev
  ogUrl: https://example.com
  twitterCard: summary_large_image
  twitterTitle: Slidev 入门模板
  twitterDescription: 面向开发者的演示幻灯片
  twitterImage: https://cover.sli.dev
  twitterSite: username
  twitterUrl: https://example.com
---
```

此功能由 [unhead](https://unhead.unjs.io/) 的 `useHead` hook 驱动，请参阅[文档](https://unhead.unjs.io/docs/head/api/composables/use-seo-meta)了解更多详情。
