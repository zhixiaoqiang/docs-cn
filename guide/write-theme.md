# 编写主题

> 请先阅读 <LinkInline link="guide/theme-addon" />。

每个幻灯片项目只能有一个主题。主题应专注于提供幻灯片的外观。如果功能与外观无关且可以单独使用，应作为[插件](./write-addon)实现。

我们建议您使用我们的生成器来搭建您的第一个主题：

::: code-group

```bash [pnpm]
$ pnpm create slidev-theme
```

```bash [npm]
$ npm init slidev-theme@latest
```

```bash [yarn]
$ yarn create slidev-theme
```

```bash [bun]
$ bun create slidev-theme
```

```bash [deno]
$ deno init --npm slidev-theme
```

:::

然后你可以修改并使用它。你也可以参考[官方主题](../resources/theme-gallery#official-themes)作为示例。

## 主题能力 {#capability}

主题可以贡献以下功能点：

- 全局样式
- 提供默认配置
- 提供自定义布局或覆盖现有布局
- 提供自定义组件
- 配置工具，如 UnoCSS、Shiki 等

但是，以下功能点**不建议**在主题中实现，可能更适合作为[插件](./write-addon)实现：

- 新的代码片段
- 新的代码运行器
- 其他可以单独使用的内容

基本上，提供全局样式、布局、组件和配置工具的方式与在幻灯片项目中操作相同。例如，要配置 Shiki，你可以按照[配置代码高亮器](../custom/config-highlighter)中描述的创建 `./setup/shiki.ts`。你可以参考[自定义指南](/custom/)了解更多信息。

要提供默认 Slidev 配置，你可以在 `package.json` 文件中添加 `slidev.defaults` 字段，它将与用户的配置合并：

```json [package.json]
{
  "slidev": {
    "defaults": {
      "transition": "slide-left",
      "aspectRatio": "4/3"
    }
  }
}
```

### 限制 Slidev 版本 {#restrict-version}

如果主题依赖于 Slidev 新引入的特定功能，你可以设置使主题正常工作所需的最低 Slidev 版本：

```json
{
  "engines": {
    "slidev": ">=0.48.0"
  }
}
```

当使用不兼容的版本时，将显示错误消息。

### 主题元数据 {#theme-metadata}

默认情况下，Slidev 假设主题同时支持浅色模式和深色模式。如果你只希望主题以特定的颜色模式呈现，需要在 `package.json` 中明确指定：

```json [package.json]
{
  "slidev": {
    "colorSchema": "light" // 或 "dark" 或 "both"
  }
}
```

## 预览主题 {#previewing}

在开发时，你可以使用演示幻灯片预览你的主题。为此，创建一个 `./slides.md` 文件，包含以下 headmatter：

```md [slides.md]
---
theme: ./  # 使用当前目录中的主题
---
```

然后你可以像往常一样启动演示幻灯片。

## 发布主题 {#publishing}

发布主题时，`.vue` 和 `.ts` 等非 JS 文件可以直接发布，无需编译。Slidev 在使用主题时会自动编译它们。

主题应遵循以下约定：

- 包名应以 `slidev-theme-` 开头。例如 `slidev-theme-name` 或 `@scope/slidev-theme-name`
- 在 `package.json` 的 `keywords` 字段中添加 `"slidev-theme"` 和 `"slidev"`

主题可以在本地使用而无需发布到 NPM。如果你的主题仅供个人使用，可以简单地将其作为本地主题使用，或发布为私有作用域包。但是，如果你想与他人分享，建议将其发布到 NPM 注册表。
