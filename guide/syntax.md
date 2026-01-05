---
outline: deep
---

# 语法指南

Slidev 的幻灯片以 Markdown 文件编写，称为 **Slidev Markdown**。一个演示文稿以 Slidev Markdown 作为入口，默认是 `./slides.md`，但你可以通过向 [CLI 命令](../builtin/cli) 传递文件路径参数来更改它。

在 Slidev Markdown 中，不仅可以像往常一样使用 [基本 Markdown 功能](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)，Slidev 还提供了额外的功能来增强你的幻灯片。本节介绍 Slidev 引入的语法。请确保在阅读本指南之前了解基本的 Markdown 语法。

## 幻灯片分隔符 {#slide-separators}

使用 `---` 并在前后加上空行来分隔幻灯片。

````md {5,15}
# 标题

你好，**Slidev**！

---

# 幻灯片 2

使用代码块进行高亮：

```ts
console.log('Hello, World!')
```

---

# 幻灯片 3

使用 UnoCSS 类和 Vue 组件来为幻灯片添加样式和丰富内容：

<div class="p-3">
  <Tweet id="..." />
</div>
````

## Frontmatter 与 Headmatter {#frontmatter}

在每张幻灯片的开头，你可以添加一个可选的 [frontmatter](https://jekyllrb.com/docs/front-matter/) 来配置幻灯片。第一个 frontmatter 块称为 **headmatter**，可以配置整个幻灯片项目。其余的是单张幻灯片的 **frontmatters**。headmatter 或 frontmatter 中的文本应该是 [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) 格式的对象。例如：

<!-- eslint-skip -->

```md {1-4,10-14,26-28}
---
theme: seriph
title: Welcome to Slidev
---

# 幻灯片 1

这张幻灯片的 frontmatter 也是 headmatter

---
layout: center
background: /background-1.png
class: text-white
---

# 幻灯片 2

一个使用 `center` 布局和背景图片的页面

---

# 幻灯片 3

一个没有 frontmatter 的页面

---
src: ./pages/4.md  # 这张幻灯片只包含一个 frontmatter
---

---

# 幻灯片 5
```

你可以设置的配置项在 [幻灯片项目配置](/custom/#headmatter) 和 [单张幻灯片配置](/custom/#frontmatter) 章节中描述。

为了使 headmatter 更易读，你可以安装 VSCode 扩展：

<LinkCard link="features/vscode-extension" />

此外，还有另一种可能的 frontmatter 格式：

<LinkCard link="features/block-frontmatter" />

## 演讲者备注 {#notes}

你还可以为每张幻灯片创建演讲者备注。它们会在 <LinkInline link="guide/ui#presenter-mode" /> 中显示，供你在演讲时参考。

每张幻灯片末尾的注释块被视为该幻灯片的备注：

```md {9,19-21}
---
layout: cover
---

# 幻灯片 1

这是封面页。

<!-- 这是一条 **备注** -->

---

# 幻灯片 2

<!-- 这不是备注，因为它不在幻灯片的末尾 -->

第二页

<!--
这是 _另一条_ 备注
-->
```

备注中也支持基本的 Markdown 和 HTML，并会被渲染。

<SeeAlso :links="[
  'features/click-marker',
]" />

## 代码块 {#code-block}

创建 Slidev 的一个重要原因是需要在幻灯片中完美地显示代码。因此，你可以使用 Markdown 风格的代码块来高亮你的代码。

````md
```ts
console.log('Hello, World!')
```
````

Slidev 内置了 [Shiki](https://github.com/shikijs/shiki) 作为语法高亮器。有关更多详情，请参阅 [配置 Shiki](/custom/config-highlighter)。

更多关于代码块的内容：

<LinkCard link="features/code-block-line-numbers" />
<LinkCard link="features/code-block-max-height" />
<LinkCard link="features/line-highlighting" />
<LinkCard link="features/monaco-editor" />
<LinkCard link="features/monaco-run" />
<LinkCard link="features/monaco-write" />
<LinkCard link="features/shiki-magic-move" />
<LinkCard link="features/twoslash" />
<LinkCard link="features/import-snippet" />
<LinkCard link="features/code-groups" />

## LaTeX 块 {#latex-block}

Slidev 支持 LaTeX 块来编写数学和化学公式：

<LinkCard link="features/latex" />

## 图表 {#diagrams}

Slidev 支持使用 [Mermaid](https://mermaid.js.org/) 和 [PlantUML](https://plantuml.com/) 从文本创建图表：

<LinkCard link="features/mermaid" />
<LinkCard link="features/plantuml" />

## MDC 语法 {#mdc-syntax}

MDC 语法是为元素应用样式和类的最简单方式：

<LinkCard link="features/mdc" />

## 作用域 CSS {#scoped-css}

你可以使用作用域 CSS 来为幻灯片添加样式：

<LinkCard link="features/slide-scope-style" />

## 导入幻灯片 {#importing-slides}

<LinkCard link="features/importing-slides" />
