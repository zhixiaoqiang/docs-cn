---
relates:
  - Vue 的 Scoped CSS: https://vue-loader.vuejs.org/guide/scoped-css.html
  - UnoCSS directives: https://unocss.dev/transformers/directives
tags: [样式, 语法]
description: |
  为当前幻灯片定义样式。
---

# 幻灯片作用域样式

你可以在 Markdown 中使用 `<style>` 标签来为**仅当前幻灯片**定义样式。

```md
# 这是红色的

<style>
h1 {
  color: red;
}
</style>

---

# 其他幻灯片不受影响
```

Markdown 中的 `<style>` 标签始终是 [scoped](https://vuejs.org/api/sfc-css-features.html#scoped-css) 的。因此，带有子组合器的选择器（`.a > .b`）无法直接使用；详见前面的链接。要使用全局样式，请查看[自定义章节](/custom/directory-structure#style)。

由 [UnoCSS](/custom/config-unocss) 驱动，你可以直接使用嵌套 css 和[指令](https://unocss.dev/transformers/directives)：

```md
# Slidev

> Hello **world**

<style>
blockquote {
  strong {
    --uno: 'text-teal-500 dark:text-teal-400';
  }
}
</style>
```
