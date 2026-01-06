# 编写插件

> 请先阅读 <LinkInline link="guide/theme-addon" /> 和 <LinkInline link="guide/write-theme" />。

每个幻灯片项目只能有一个主题，但可以有多个插件。

## 能力范围 {#capability}

理论上，主题的所有能力都可以在插件中实现。但是，插件更像是一个扩展 Slidev 功能的插件。

建议在插件中实现以下一个或多个功能点：

- 提供自定义组件
- 提供 _新的_ 布局
- 提供新的代码片段
- 提供新的代码运行器
- 配置工具，如 UnoCSS、Vite 等

但是，以下功能点**不建议**在插件中实现，可能更适合[作为主题实现](./write-theme)：

- 通配符全局样式
- 覆盖现有布局
- 覆盖配置
- 其他可能与主题和其他插件不兼容的内容

插件也可以像主题一样指定所需的 Slidev 版本。

## 预览 {#previewing}

与主题相同，你可以通过 `./slides.md` 预览你的插件，如下所示：

```md [slides.md]
---
addons:
  - ./
---
```

## 发布 {#publishing}

发布插件时，`.vue` 和 `.ts` 等非 JS 文件可以直接发布，无需编译。Slidev 在使用插件时会自动编译它们。

插件应遵循以下约定：

- 包名应以 `slidev-addon-` 开头。例如 `slidev-addon-name` 或 `@scope/slidev-addon-name`
- 在 `package.json` 的 `keywords` 字段中添加 `"slidev-addon"` 和 `"slidev"`

插件可以在本地使用而无需发布到 NPM。如果你的插件仅供个人使用，可以简单地将其作为本地插件使用，或发布为私有作用域包。但是，如果你想与他人分享，建议将其发布到 NPM 注册表。
