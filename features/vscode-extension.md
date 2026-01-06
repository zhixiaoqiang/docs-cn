---
relates:
  - VS Code: https://code.visualstudio.com/
  - View in Marketplace: https://marketplace.visualstudio.com/items?itemName=antfu.slidev
  - View in OVSX: https://open-vsx.org/extension/antfu/slidev
tags: [editor]
description: |
  帮助你更好地组织幻灯片并快速预览。
---

# VS Code 扩展

<p align="center">
    <a href="https://github.com/slidevjs/slidev" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/logo-for-vscode.png" alt="Slidev" width="300" />
    </a>
</p>

<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/v/antfu.slidev.svg?color=4EC5D4&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
</a> &nbsp;
<a href="https://marketplace.visualstudio.com/items?itemName=antfu.slidev" target="__blank">
  <img inline src="https://img.shields.io/visual-studio-marketplace/d/antfu.slidev.svg?color=2B90B6" alt="Visual Studio Marketplace Downloads" />
</a>

VS Code 扩展提供了一些功能，帮助你更好地组织幻灯片并快速预览。

### 功能特性

- 在侧边面板中预览幻灯片
- 幻灯片树形视图
- 重新排序幻灯片
- 幻灯片块折叠
- 多幻灯片项目支持
- 一键启动开发服务器

![](https://github.com/slidevjs/slidev/assets/63178754/2c9ba01a-d21f-4b33-b6b6-4e249873f865)

<TheTweet id="1395333405345148930" />

<TheTweet id="1789684139152810151" />

### 安装

你可以从 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.slidev) 或 [Open VSX Registry](https://open-vsx.org/extension/antfu/slidev) 安装扩展。

### 使用方法

点击活动栏中的 `Slidev` 图标打开 **Slidev 面板**。在 Slidev 面板中，你可以看到项目树形视图、幻灯片树形视图和预览 webview。

在**项目树形视图**中，你可以看到工作区中的所有 Slidev 项目。你可以点击项目打开相应的文件，点击上方的 <codicon-eye /> 图标切换活动项目。<codicon-add /> 图标允许你加载未被自动扫描到的幻灯片项目。

在**幻灯片树形视图**中，你可以看到活动项目中的所有幻灯片。你可以点击项目将光标移动到编辑器中的该幻灯片，并拖放来重新排序幻灯片。

在**预览 webview** 中，你可以点击 <codicon-run-all /> 图标启动开发服务器，点击 <codicon-globe /> 图标在浏览器中打开幻灯片。切换 <codicon-lock /> 图标来同步/取消同步预览导航与编辑器光标。

还有一些**命令**可以使用。在命令面板中输入 `Slidev` 来查看它们。

你可以在 `slidev.include` 配置中添加 glob 模式来将文件包含为 Slidev 入口。默认值是 `["**/*.md"]`。示例：

```json
{
  "slidev.include": ["**/presentation.md"]
}
```

#### 开发命令 {#dev-command}

你可以通过设置 `slidev.dev-command` 配置来自定义启动开发服务器的命令。默认值是 `npm exec -c 'slidev ${args}'`。

配置的命令可以包含占位符：

- `${args}`：所有 CLI 参数。例如：`slides.md --port 3000 --remote`
- `${port}`：端口号。例如：`3000`

示例：

- 全局安装：`slidev ${args}`
- 对于 PNPM 用户，可以设置为 `pnpm slidev ${args}`。
- 对于 [code-server](https://coder.com/docs/code-server/) 用户，可以设置为 `pnpm slidev ${args} --base /proxy/${port}/`。这将使开发服务器可以通过 `http://localhost:8080/proxy/3000/` 访问。
