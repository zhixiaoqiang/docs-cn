# 主题和插件

一个幻灯片项目可以有一个主题和多个插件。它们都可以为你的幻灯片项目提供样式、组件、布局和其他配置。

## 使用主题 {#use-theme}

在 Slidev 中更换主题非常简单。你只需要在 [headmatter](../custom/index#headmatter) 中添加 `theme` 选项：

```md
---
theme: seriph
---

# The first slide
```

你可以在[主题库](../resources/theme-gallery)中找到官方主题和社区主题列表。

::: info 主题名称约定

- 你也可以传递本地主题文件夹的相对或绝对路径，如 `../my-theme`
- 你始终可以使用完整包名作为主题名
- 如果主题是[官方的](../resources/theme-gallery#official-themes)或命名为 `slidev-theme-name`，你可以省略 `slidev-theme-` 前缀
- 对于作用域包如 `@org/slidev-theme-name`，需要使用完整包名

:::

你可以启动服务器，确认后将提示安装主题。

<div class="language-md text-xs pl-6">
<pre style="overflow: hidden; text-wrap: pretty;">
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

或通过以下方式手动安装主题：

```bash
$ npm install @slidev/theme-seriph
```

就这样，享受新主题吧！有关使用的更多详情，你可以参考主题的 README。

<SeeAlso :links="[
  'features/eject-theme',
]" />

## 使用插件 {#use-addon}

插件类似于主题，但更加灵活，可用于为你的幻灯片项目添加额外功能。你可以向项目添加多个插件，它们可以用来为幻灯片项目添加额外功能。

要使用插件，你可以在 [headmatter](../custom/index#headmatter) 中添加 `addons` 选项：

```md
---
addons:
  - excalidraw
  - '@slidev/plugin-notes'
---
```

你可以在[插件库](../resources/addon-gallery)中找到官方插件和社区插件列表。
