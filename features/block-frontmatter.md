---
depends:
  - guide/syntax
relates:
  - features/prettier-plugin
tags: [语法]
description: |
  使用 YAML 代码块作为 frontmatter。
---

# 块级 Frontmatter

定义幻灯片 frontmatter 的常规方式很简洁，但可能缺乏高亮和格式化支持。为了解决这个问题，你可以在幻灯片内容的最开始使用 YAML 代码块作为幻灯片的 frontmatter：

````md
---
theme: default
---

# 幻灯片 1

---

```yaml
layout: quote
```

# 幻灯片 2

---

# 幻灯片 3
````

::: warning 关于 headmatter

Slidev 中的 headmatter 就是 Markdown 文件通常所说的 "frontmatter"，大多数 Markdown 编辑器和格式化工具都支持它。因此你不能使用 YAML 代码块作为整个幻灯片的 headmatter。

:::
