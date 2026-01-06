---
depends:
  - guide/syntax#importing-slides
  - features/importing-slides
tags: [syntax]
description: |
  从多个 markdown 文件合并 frontmatter。
---

# Frontmatter 合并

你可以从主入口和外部 markdown 页面提供 frontmatter 指令。如果其中有重复的键，**主入口的优先级更高**。例如：

::: code-group

```md [./slides.md]
---
src: ./cover.md
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---
```

```md [./cover.md]
---
layout: cover
background: https://sli.dev/foo.png // [!code highlight]
---

# 封面

封面页
```

:::

它们最终等同于以下页面：

```md
---
layout: cover
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---

# 封面

封面页
```
