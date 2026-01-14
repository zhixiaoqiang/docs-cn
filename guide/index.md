---
outline: deep
---

# 快速开始

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> 是一个为开发者设计的基于 Web 的幻灯片制作工具。它帮助您以 Markdown 的形式专注于编写幻灯片的内容，并制作出具有交互式演示功能的、高度可自定义的幻灯片。

::: tip

你可以在 <LinkInline link="guide/why" /> 中了解更多关于本项目的设计理念。

:::

<!--
- 📝 [**Markdown-based**](/guide/syntax) - focus on content and use your favorite editor
- 🧑‍💻 [**Developer Friendly**](/guide/syntax#code-blocks) - built-in code highlighting, live coding, etc.
- 🎨 [**Themable**](/resources/theme-gallery) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax#embedded-styles) - on-demand utilities via [UnoCSS](https://github.com/unocss/unocss).
- 🤹 [**Interactive**](/custom/directory-structure#components) - embedding Vue components seamlessly
- 🎙 [**Presenter Mode**](/guide/ui#presenter-mode) - use another window, or even your phone to control your slides
- 🎨 [**Drawing**](/features/drawing) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax#latex) - built-in LaTeX math equations support
- 📰 [**Diagrams**](/guide/syntax#diagrams) - creates diagrams using textual descriptions with [Mermaid.js](https://mermaid.js.org/)
- 🌟 [**Icons**](/guide/syntax#icons) - access to icons from any icon set directly
- 💻 [**Editor**](/guide/index#editor) - integrated editor, or the [VSCode extension](/features/vscode-extension)
- 🎥 [**Recording**](/features/recording) - built-in recording and camera view
- 📤 [**Portable**](/guide/exporting) - export into PDF, PNGs, or PPTX
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/) - using Vite plugins, Vue components, or any npm packages
-->

<!-- <FeaturesAnimation /> -->

## 创建幻灯片 {#create-slides}

### 在浏览器中创建 {#try-it-online}

通过 StackBlitz 在浏览器中创建幻灯片: [sli.dev/new](https://sli.dev/new)

### 在本地创建 {#create-locally}

> 需要先安装 [Node.js](https://nodejs.org) >= 22.0

在终端运行以下命令来创建一个新的 Slidev 项目：

::: code-group

```bash [pnpm]
# 如果你还没有安装 pnpm
npm i -g pnpm

pnpm create slidev
```

```bash [npm]
# 不推荐 -
# NPM 每次创建新项目时都会重新下载包，
# 速度较慢且占用大量空间

npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [bun]
bun create slidev
```

```bash [deno]
deno init --npm slidev
```

:::

根据指引，输入项目名称并按照提示完成项目创建。幻灯片内容在 `slides.md` 文件中，初始内容包含了 Slidev 的大部分功能的演示。关于幻灯片 Markdown 语法的更多信息，请查看 <LinkInline link="guide/syntax" />。

:::: details 单文件模式 (不推荐)

如果你希望使用单个 Markdown 文件作为幻灯片，可以全局安装 Slidev CLI：

::: code-group

```bash [pnpm]
pnpm i -g @slidev/cli
```

```bash [npm]
npm i -g @slidev/cli
```

```bash [yarn]
yarn global add @slidev/cli
```

```bash [bun]
bun i -g @slidev/cli
```

```bash [deno]
deno i -g npm:@slidev/cli
```

:::

然后，你可以通过以下命令创建并启动幻灯片:

```bash
slidev slides.md
```

::::

## 基本命令 {#basic-commands}

以下是 Slidev CLI 的一些常用命令：

- `slidev` - 启动开发服务器。细节请参见 [dev 命令](../builtin/cli#dev)
- `slidev export` - 将幻灯片导出为 PDF、PPTX 或 PNG 文件。细节请参见 <LinkInline link="guide/exporting" />
- `slidev build` - 将幻灯片构建为静态网页。细节请参见 <LinkInline link="guide/hosting" />
- `slidev format` - 将幻灯片格式化。细节请参见 [format 命令](../builtin/cli#format)
- `slidev --help` - 显示帮助信息

你可以将这些命令添加到你的 `package.json` 的 `scripts` 字段中，来更方便地运行它们（如果幻灯片项目是通过 `npm init slidev` 创建的，则可以跳过这一步）：

```json [package.json]
{
  "scripts": {
    "dev": "slidev --open",
    "build": "slidev build",
    "export": "slidev export"
  }
}
```

这样，你就可以通过 `npm run dev`、`npm run build` 和 `npm run export` 来运行这些命令了。

关于 CLI 的更多信息，请查看 [CLI 指南](../builtin/cli)。

## 设置编辑器 {#editor}

由于 Slidev 使用 Markdown 作为源文件，你可以使用任何你喜欢的编辑器来创建幻灯片。我们还提供了一些工具来帮助你更方便地编辑幻灯片：

<LinkCard link="features/vscode-extension" />
<LinkCard link="features/side-editor" />
<LinkCard link="features/prettier-plugin" />

## 加入社区 {#join-the-community}

推荐加入我们的官方 [Discord 服务器](https://chat.sli.dev/) 获取帮助、分享你的幻灯片，或讨论任何关于 Slidev 的话题。

如果你遇到了疑似 bug 的问题，欢迎在 [GitHub](https://github.com/slidevjs/slidev/issues/new/choose) 上开一个 issue。

也欢迎中文社区的朋友们加入我们的（半官方）QQ 群 978643067，讨论 Slidev 相关话题。

## 技术栈 {#tech-stack}

Slidev 由以下工具和技术驱动：

- [Vite](https://vitejs.dev) - 一款极速响应的下一代的前端工具链
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - 用于编写幻灯片内容
- [UnoCSS](https://github.com/unocss/unocss) - 帮助快速构建幻灯片样式
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - 为在幻灯片中嵌入代码提供一流支持
- [RecordRTC](https://recordrtc.org) - 内置的录制工具和摄像头视图
- [VueUse](https://vueuse.org) 系列 - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), 等等
- [Iconify](https://iconify.design/) - 用图标集丰富你的幻灯片
- [Drauu](https://github.com/antfu/drauu) - 用于在幻灯片上绘图和批注
- [KaTeX](https://katex.org/) - 用于渲染 LaTeX 数学公式
- [Mermaid](https://mermaid-js.github.io/mermaid) - 基于文本的图表绘制工具
