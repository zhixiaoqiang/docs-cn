---
outline: deep
---

# 快速开始

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> 是一个基于 Web 的幻灯片制作和演示工具。它专为开发者设计，让你专注于用 Markdown 编写内容。借助 Vue 等 Web 技术的强大能力，你可以在演示文稿中实现像素级精确的设计和交互式演示。

::: tip

你可以在 <LinkInline link="guide/why" /> 中了解更多关于这个项目的设计理念。

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

## 创建幻灯片

### 在线体验

在浏览器中通过 StackBlitz 直接启动 Slidev：[sli.dev/new](https://sli.dev/new)

### 本地创建

> 需要安装 [Node.js](https://nodejs.org) >= 18.0。

运行以下命令在本地创建一个新的 Slidev 项目：

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

按照提示操作即可启动你的幻灯片项目。幻灯片内容位于 `slides.md` 文件中，初始内容包含了大多数 Slidev 功能的演示。有关 Markdown 语法的更多信息，请查看 <LinkInline link="guide/syntax" />。

:::: details 单文件使用（不推荐）

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

然后，你可以通过以下命令创建并启动单文件幻灯片：

```bash
slidev slides.md
```

::::

## 基本命令

Slidev 在其 CLI 中提供了一组命令。以下是一些常用命令：

- `slidev` - 启动开发服务器。参见 [dev 命令](../builtin/cli#dev)。
- `slidev export` - 将幻灯片导出为 PDF、PPTX 或 PNG。参见 <LinkInline link="guide/exporting" />。
- `slidev build` - 将幻灯片构建为静态 Web 应用。参见 <LinkInline link="guide/hosting" />。
- `slidev format` - 格式化幻灯片。参见 [format 命令](../builtin/cli#format)。
- `slidev --help` - 显示帮助信息

要运行这些命令，你可以将它们添加到 `package.json` 的 scripts 中（如果项目是通过 `npm init slidev` 创建的，这已经为你配置好了）：

```json [package.json]
{
  "scripts": {
    "dev": "slidev --open",
    "build": "slidev build",
    "export": "slidev export"
  }
}
```

然后，你可以简单地运行 `npm run dev`、`npm run build` 和 `npm run export`。

有关 CLI 的更多信息，请查看 [CLI 指南](../builtin/cli)。

## 设置编辑器 {#editor}

由于 Slidev 使用 Markdown 作为源文件，你可以使用任何你喜欢的编辑器来创建幻灯片。我们还提供了一些工具来帮助你更方便地编辑幻灯片：

<LinkCard link="features/vscode-extension" />
<LinkCard link="features/side-editor" />
<LinkCard link="features/prettier-plugin" />

## 加入社区

推荐加入我们的官方 [Discord 服务器](https://chat.sli.dev/) 获取帮助、分享你的幻灯片，或讨论任何关于 Slidev 的话题。

如果你遇到了 bug，欢迎在 [GitHub](https://github.com/slidevjs/slidev/issues/new/choose) 上提交 issue。

## 技术栈

Slidev 由以下工具和技术驱动：

- [Vite](https://vitejs.dev) - 极速的前端构建工具
- [Vue 3](https://v3.vuejs.org/) 驱动的 [Markdown](https://daringfireball.net/projects/markdown/syntax) - 专注于内容，同时在需要时可以使用 HTML 和 Vue 组件
- [UnoCSS](https://github.com/unocss/unocss) - 按需加载的原子化 CSS 框架，轻松为幻灯片添加样式
- [Shiki](https://github.com/shikijs/shiki)、[Monaco Editor](https://github.com/Microsoft/monaco-editor) - 一流的代码片段支持，具备实时编码能力
- [RecordRTC](https://recordrtc.org) - 内置录制和摄像头视图
- [VueUse](https://vueuse.org) 系列 - [`@vueuse/core`](https://github.com/vueuse/vueuse)、[`@vueuse/head`](https://github.com/vueuse/head)、[`@vueuse/motion`](https://github.com/vueuse/motion) 等
- [Iconify](https://iconify.design/) - 图标集合
- [Drauu](https://github.com/antfu/drauu) - 绘图和标注支持
- [KaTeX](https://katex.org/) - LaTeX 数学公式渲染
- [Mermaid](https://mermaid-js.github.io/mermaid) - 文本图表
