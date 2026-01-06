---
relates:
  - features/frontmatter-merging
tags: [syntax]
description: |
  将 `slides.md` 拆分为多个文件以提高复用性和组织性。
---

# 导入幻灯片

你可以将 `slides.md` 拆分为多个文件以提高复用性和组织性。为此，你可以使用 `src` frontmatter 选项来指定外部 markdown 文件的路径。例如：

::: code-group

<!-- eslint-skip -->

```md [./slides.md]
# 标题

这是一个普通页面

---
src: ./pages/toc.md // [!code highlight]
---

<!-- 这个页面将从 './pages/toc.md' 加载 -->

这里的内容会被忽略

---

# 第 4 页

另一个普通页面

---
src: ./pages/toc.md   # 复用同一个文件 // [!code highlight]
---
```

```md [./pages/toc.md]
# 目录

第 1 部分

---

# 目录

第 2 部分
```

:::

## 导入特定幻灯片

要复用另一个 Markdown 文件中的部分幻灯片，你可以使用导入路径的 hash 部分：

```md
---
src: ./another-presentation.md#2,5-7
---
```

这将从 `./another-presentation.md` 导入第 2、5、6 和 7 张幻灯片。

## Frontmatter 合并

<LinkCard link="features/frontmatter-merging" />
