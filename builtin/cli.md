# Slidev CLI

`@slidev/cli` 提供了一个名为 `slidev` 的二进制文件，你可以用它来开发、构建和导出你的幻灯片。

## 前置条件

要使用 CLI，你可以全局安装 `@slidev/cli`，或者在你的 Node.js 项目中本地安装。如果你是使用 `npm init slidev` 创建的项目，CLI 已经本地安装好了。

::: warning
通常不支持 `npx slidev`，因为包名实际上是 `@slidev/cli`。
:::

CLI 命令的选项遵循以下约定：

- 选项的值可以在空格或 `=` 字符后传递：

  示例：`slidev --port 8080` 等同于 `slidev --port=8080`

- 布尔选项可以省略 `true`：

  示例：`slidev --open` 等同于 `slidev --open true`

::: info

如果你使用 npm，请不要忘记在选项前添加 `--` 以将它们传递给 Slidev：

```bash
npm run slidev -- --remote --port 8080 --open
```

:::

## `slidev [entry]` {#dev}

启动 Slidev 的本地服务器。

- `[entry]`（`string`，默认：`slides.md`）：包含幻灯片的 markdown 文件路径。

选项：

- `--port`, `-p`（`number`，默认：`3030`）：端口号。
- `--base`（`string`，默认：`/`）：基础 URL（参见 https://vitejs.dev/config/shared-options.html#base）。
- `--open`, `-o`（`boolean`，默认：`false`）：在浏览器中打开。
- `--remote [password]`（`string`）：监听公共主机并启用远程控制，如果传递了值，则演讲者模式是私有的，只能通过在 URL 查询参数 `password` 中传递给定密码来访问。
- `--bind`（`string`，默认：`0.0.0.0`）：指定在远程模式下服务器应监听的 IP 地址。
- `--log`（`'error', 'warn', 'info', 'silent'`，默认：`'warn'`）：日志级别。
- `--force`, `-f`（`boolean`，默认：`false`）：强制优化器忽略缓存并重新打包。
- `--theme`, `-t`（`string`）：覆盖主题。

## `slidev build [entry]` {#build}

构建可托管的 SPA。有关更多详情，请参阅 <LinkInline link="guide/hosting" />。

- `[entry]`（`string`，默认：`slides.md`）：幻灯片 markdown 文件路径。

选项：

- `--out`, `-o`（`string`，默认：`dist`）：输出目录
- `--base`（`string`，默认：`/`）：基础 URL（参见 https://vitejs.dev/config/shared-options.html#base）
- `--download`（`boolean`，默认：`false`）：允许在 SPA 中下载幻灯片的 PDF
- `--theme`, `-t`（`string`）：覆盖主题
- `--without-notes`（`boolean`，默认：`false`）：从 SPA 中排除演讲者备注

## `slidev export [...entry]` {#export}

将幻灯片导出为 PDF（或其他格式）。有关更多详情，请参阅 <LinkInline link="guide/exporting" />。

- `[entry]`（`string`，默认：`slides.md`）：幻灯片 markdown 入口路径。

选项：

- `--output`（`string`，默认：使用 `exportFilename`（参见 https://sli.dev/custom/#frontmatter-configures）或使用 `[entry]-export`）：输出路径。
- `--format`（`'pdf', 'png', 'pptx', 'md'`，默认：`'pdf'`）：输出格式。
- `--timeout`（`number`，默认：`30000`）：渲染打印页面的超时时间（参见 https://playwright.dev/docs/api/class-page#page-goto）。
- `--range`（`string`）：要导出的页面范围（示例：`'1,4-5,6'`）。
- `--dark`（`boolean`，默认：`false`）：以深色主题导出。
- `--with-clicks`, `-c`（`boolean`，默认：`false`）：为每个点击动画导出页面（参见 https://sli.dev/guide/animations.html#click-animation）。
- `--theme`, `-t`（`string`）：覆盖主题。
- `--omit-background`（`boolean`，默认：`false`）：移除默认浏览器背景

## `slidev format [entry]` {#format}

格式化 markdown 文件。请注意，这不会格式化幻灯片的内容，只会格式化 markdown 文件的组织结构。

- `[entry]`（`string`，默认：`slides.md`）：幻灯片 markdown 入口路径。

## `slidev theme [subcommand]` {#theme}

主题相关操作。

子命令：

- `eject [entry]`：将当前主题弹出到本地文件系统。参见 <LinkInline link="features/eject-theme" />。
  - `[entry]`（`string`，默认：`slides.md`）：幻灯片 markdown 入口路径。
  - 选项：
    - `--dir`（`string`，默认：`theme`）：输出目录。
    - `--theme`, `-t`（`string`）：覆盖主题。
