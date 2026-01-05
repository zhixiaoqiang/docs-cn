---
outline: deep
---

# 导出

通常幻灯片会在 Web 浏览器中显示，但你也可以将它们导出为 PDF、PPTX、PNG 或 Markdown 文件以便分享或打印。此功能可通过 CLI 命令 [`slidev export`](../builtin/cli#export) 使用。

但是，幻灯片中的交互功能可能在导出的文件中不可用。你可以将幻灯片构建并托管为 Web 应用以保留交互性。有关更多信息，请参阅[构建和托管](./hosting)。

## 浏览器导出器 <Badge> 推荐 </Badge> {#browser}

> 自 v0.50.0-beta.11 起可用

Slidev 在浏览器中提供了一个用于导出幻灯片的 UI。你可以通过点击[导航栏](./ui#navigation-bar)中"更多选项"菜单中的"导出"按钮来访问它，或者直接访问 `http://localhost:<port>/export`。

在 UI 中，你可以将幻灯片导出为 PDF，或将幻灯片捕获为图片并下载为 PPTX 或 zip 文件。

请注意，除**现代基于 Chromium 的浏览器**外的其他浏览器可能无法很好地与导出 UI 配合使用。如果你遇到任何问题，请尝试使用 CLI。

> 本页面以下内容仅适用于 CLI。

## CLI {#cli}

导出为 PDF、PPTX 或 PNG 依赖 [Playwright](https://playwright.dev) 来渲染幻灯片。因此需要在你的项目中安装 [`playwright-chromium`](https://npmjs.com/package/playwright-chromium)：

::: code-group

```bash [pnpm]
$ pnpm add -D playwright-chromium
```

```bash [npm]
$ npm i -D playwright-chromium
```

```bash [yarn]
$ yarn add -D playwright-chromium
```

```bash [bun]
$ bun add -D playwright-chromium
```

```bash [deno]
$ deno add -D npm:playwright-chromium
```

:::

## 格式

### PDF

如上所述安装 `playwright-chromium` 后，你可以使用以下命令将幻灯片导出为 PDF：

```bash
$ slidev export
```

默认情况下，PDF 将保存在 `./slides-export.pdf`。

### PPTX

Slidev 也可以将幻灯片导出为 PPTX 文件：

```bash
$ slidev export --format pptx
```

请注意，PPTX 文件中的所有幻灯片将导出为图片，因此文本将不可选择。演讲者备注将按每张幻灯片传递到 PPTX 文件中。

在此模式下，`--with-clicks` 选项默认启用。要禁用它，请传递 `--with-clicks false`。

### PNG 和 Markdown

当传入 `--format png` 选项时，Slidev 将为每张幻灯片导出 PNG 图片而不是 PDF：

```bash
$ slidev export --format png
```

你也可以使用 `--format md` 编译一个由编译后的 png 组成的 markdown 文件：

```bash
$ slidev export --format md
```

## 选项

以下是一些可以与 `slidev export` 命令一起使用的常用选项。有关完整的选项列表，请参阅 [CLI 文档](../builtin/cli#export)。

### 导出点击步骤

默认情况下，Slidev 为每张幻灯片导出一页，禁用点击动画。如果你想将带有多个步骤的幻灯片导出为多页，请传递 `--with-clicks` 选项：

```bash
$ slidev export --with-clicks
```

### 输出文件名

你可以使用 `--output` 选项指定输出文件名：

```bash
$ slidev export --output my-pdf-export
```

或在 headmatter 配置中：

```yaml
---
exportFilename: my-pdf-export
---
```

### 按范围导出

默认情况下，演示文稿中的所有幻灯片都会被导出。如果你想导出特定幻灯片或幻灯片范围，可以设置 `--range` 选项并指定要导出的幻灯片：

```bash
$ slidev export --range 1,6-8,10
```

此选项接受特定的幻灯片编号和范围。上面的示例将导出幻灯片 1、6、7、8 和 10。

### 多文件导出

你也可以一次导出多个幻灯片：

```bash
$ slidev export slides1.md slides2.md
```

或（仅在某些 shell 中可用）：

```bash
$ slidev export *.md
```

在这种情况下，每个输入文件将生成自己的 PDF 文件。

### 深色模式

如果你想使用主题的深色版本导出幻灯片，请使用 `--dark` 选项：

```bash
$ slidev export --dark
```

### 超时

对于大型演示文稿，你可能需要使用 `--timeout` 增加 Playwright 超时时间：

```bash
$ slidev export --timeout 60000
```

### 等待

幻灯片的某些部分可能需要更长的渲染时间。你可以使用 `--wait` 选项在导出前添加额外的延迟：

```bash
$ slidev export --wait 10000
```

还有一个 `--wait-until` 选项可用于在导出每张幻灯片之前等待某个状态。如果你持续遇到超时问题，可以尝试设置此选项：

```bash
$ slidev export --wait-until none
```

可能的值：

- `'networkidle'` - （_默认_）当至少 `500` 毫秒没有网络连接时，认为操作已完成。这是最安全的，但可能导致超时。
- `'domcontentloaded'` - 当 `DOMContentLoaded` 事件触发时，认为操作已完成。
- `'load'` - 当 `load` 事件触发时，认为操作已完成。
- `'none'` - 不等待任何事件。

::: warning
当指定 `'networkidle'` 以外的值时，请确保打印的幻灯片完整且正确。如果某些内容缺失，你可能需要使用 `--wait` 选项。
:::

### 可执行文件路径

Chromium 可能缺少解码某些视频所需的编解码器等功能。你可以使用 `--executable-path` 将 Playwright 的浏览器可执行文件路径设置为你的 Chrome 或 Edge：

```bash
$ slidev export --executable-path [path_to_chromium]
```

### PDF 大纲

> 自 v0.36.10 起可用

你可以通过传递 `--with-toc` 选项来生成 PDF 大纲：

```bash
$ slidev export --with-toc
```

### 省略背景

导出为 PNG 时，你可以通过传递 `--omit-background` 来移除默认的浏览器背景：

```bash
$ slidev export --omit-background
```

默认的浏览器背景是所有浏览器窗口可见的白色背景，与使用 CSS 样式在应用程序中应用的其他背景不同。[参见 Playwright 文档](https://playwright.dev/docs/api/class-page#page-screenshot-option-omit-background)。然后你需要对应用程序应用额外的 CSS 样式来显示透明度。

以下是覆盖应用程序中所有背景的基本示例：

```css
* {
  background: transparent !important;
}
```

## 故障排除

### 内容缺失或动画未完成

如果你发现导出的 PDF 中某些内容缺失或动画未完成，可以尝试在导出每张幻灯片之前添加等待时间：

```bash
$ slidev export --wait 1000
```

### Emoji 显示异常

如果 PDF 或 PNG 中缺少 Emoji，你可能缺少所需的字体（例如 [Google 的 _Noto Emoji_](https://fonts.google.com/noto/specimen/Noto+Emoji)）。

这可能会影响例如 CI/CD 类似的容器内 Linux 环境。可以这样修复：

```bash
$ curl -L --output NotoColorEmoji.ttf https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf
$ sudo mv NotoColorEmoji.ttf /usr/local/share/fonts/
$ fc-cache -fv
```

### 全局图层中的上下文错误

请参见 https://sli.dev/features/global-layers 中的提示。
