---
outline: deep
---

# 为什么选择 Slidev

市面上已经有很多功能丰富的所见即所得幻灯片制作工具，如 [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 和 [Apple Keynote](https://www.apple.com/keynote/)（参见[对比](#comparisons)）。它们直观且易于上手。那么，为什么还要使用 Slidev 呢？

Slidev 旨在为**开发者**提供灵活性和交互性，让他们能够使用熟悉的技术使演示文稿更加有趣、富有表现力和吸引力。Slidev 也是开源的，拥有强大的社区支持。

Slidev 基于 Markdown，帮助你**专注于内容**。Slidev 也是基于 Web 的，这意味着**一切皆有可能** - 你在 Web 应用中能做的一切都可以应用到幻灯片中。

Slidev 同样是**渐进式**的。你可以从一个超级简单的 Markdown 文件开始，然后在需要时使用[内置功能](../features/)，无需任何配置。还有[主题和插件](./theme-addon)可供选择安装，以增强你的幻灯片。

![demo slide](/screenshots/cover.png) {#welcome}

## 功能特性 {#features}

### 📝 基于 Markdown {#markdown-based}

Slidev 使用扩展的 Markdown 格式在单个纯文本文件中组织你的幻灯片。这帮助你专注于内容，同时允许你使用 Git 和任何你喜欢的编辑器。

> 了解更多：<LinkInline link="guide/syntax"/>。

### 🧑‍💻 开发者友好 {#developer-friendly}

Slidev 为开发者提供一流的代码片段支持。它使用 [Shiki](https://github.com/shikijs/shiki) 来获取最精确的语法高亮。Slidev 还支持 <LinkInline link="features/shiki-magic-move"/> 和 <LinkInline link="features/twoslash"/>。这些使 Slidev 成为技术演讲的最佳选择。

### 🎨 主题化 {#themable}

Slidev 的主题可以通过 npm 包分享。只需一行代码即可应用主题。

查看[主题库](../resources/theme-gallery)，浏览由官方团队和社区制作的精美主题。

### ⚡ 极速 {#fast}

得益于 [Vite 的 HMR 功能](https://vitejs.dev/guide/features.html#hot-module-replacement)，你在编辑器中所做的每一个更改都会**即时**更新到浏览器中的幻灯片，无需重新加载。

### 🤹 交互性与表现力 {#interactive-expressive}

你可以编写 Vue 组件并在幻灯片中使用它们，然后在演示过程中与之互动，以更有趣、更直观的方式表达你的想法。

Slidev 还内置支持 <LinkInline link="features/monaco-editor"/>，让你能够在演示中进行实时编码，具备自动补全和悬停提示功能。

### 🎥 录制支持 {#recording-support}

Slidev 提供内置的录制和摄像头视图功能。你可以分享带有摄像头画面的演示文稿，或者分别录制和保存屏幕与摄像头内容。

> 了解更多：<LinkInline link="features/recording"/>。

### 📤 便携性 {#portable}

你可以通过一条命令将幻灯片导出为 PDF、PPTX、PNG，甚至是单页应用 (SPA)。然后你可以在任何地方分享或托管它。

> 了解更多：<LinkInline link="guide/exporting"/> 和 <LinkInline link="guide/hosting"/>。

### 🛠 可扩展 {#hackable}

因为 Slidev 是基于 Web 的，所以普通 Web 应用能做的一切都可以应用到你的幻灯片中。例如，WebGL、API 请求、iframe，甚至实时共享。一切取决于你的想象力！

> 了解更多：[自定义](../custom/)。

## 对比 {#comparisons}

::: details Slidev vs. Microsoft PowerPoint / Apple Keynote

[Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 和 [Apple Keynote](https://www.apple.com/keynote/) 是功能丰富的所见即所得幻灯片制作工具。它们直观且易于上手，是非开发者的最佳选择之一。

相比之下，Slidev 具有以下优势：

- 开发者友好：代码片段是 Slidev 中的一等公民。
- 基于 Markdown：专注于内容，使用 Git 进行版本控制。
- 基于 Web：Web 应用能做的一切都可以应用到幻灯片中。
- 可扩展：使用 Web 技术自定义任何你想要的内容。
- 开源：Slidev 完全开源，拥有强大的社区。

:::

::: details Slidev vs. Reveal.js

[Reveal.js](https://revealjs.com/) 是一个流行的 HTML 演示框架。它也是开源的，支持 Markdown。

相比 Reveal.js，Slidev 具有以下优势：

- 更简洁：Slidev 使用扩展的 Markdown 格式，而 Reveal.js 鼓励你编写 HTML 来组织幻灯片。
- Vue 支持：你可以在 Slidev 中使用 Vue 组件使幻灯片具有交互性。
- 基于 Vite：Slidev 构建于 Vite 之上，提供即时 HMR 和灵活的插件 API。
- 原子化 CSS：开箱即用的 [UnoCSS](https://unocss.dev/) 来为幻灯片添加样式。

:::

::: details Slidev vs. Marp

[Marp](https://marp.app/) 是一个专注于简洁性和便携性的 Markdown 演示工具。它也是开源的，支持 Markdown。

相比 Marp，Slidev 具有以下优势：

- 同样简洁：Slidev 的幻灯片可以像 Marp 一样简单开始。
- 更多功能：Slidev 支持许多 Marp 不具备的功能。
- Vue 支持：你可以在 Slidev 中使用 Vue 组件使幻灯片具有交互性。
- 基于 Vite：Slidev 构建于 Vite 之上，提供即时 HMR 和灵活的插件 API。
- 原子化 CSS：开箱即用的 [UnoCSS](https://unocss.dev/) 来为幻灯片添加样式。

:::

## 立即体验 {#give-it-a-try}

亲自尝试 Slidev 比千言万语更有说服力。查看 <LinkInline link="guide/"/> 指南，一键或一条命令创建你的第一个 Slidev 项目。

或者你可以快速预览一下：

<iframe class="aspect-16/9 rounded-xl w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
