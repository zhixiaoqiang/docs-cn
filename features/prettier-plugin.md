---
relates:
  - features/block-frontmatter
  - GitHub Repo: https://github.com/slidevjs/prettier-plugin
  - Prettier: https://prettier.io/
tags: [editor]
description: |
  使用 Prettier 插件格式化你的幻灯片。
---

# Prettier 插件

Slidev 的语法可能与 [Prettier](https://prettier.io/) 的默认 Markdown 解析器不兼容。为了解决这个问题，Slidev 提供了一个 Prettier 插件来格式化你的幻灯片。你可以在支持 Prettier 的任何编辑器中使用它。

## 1. 安装

::: code-group

```bash [npm]
npm i -D prettier prettier-plugin-slidev
```

```bash [pnpm]
pnpm i -D prettier prettier-plugin-slidev
```

```bash [yarn]
yarn add -D prettier prettier-plugin-slidev
```

```bash [bun]
bun add -D prettier prettier-plugin-slidev
```

```bash [deno]
deno add -D npm:prettier npm:prettier-plugin-slidev
```

:::

## 2. 激活插件

创建或修改你的 [prettier 配置文件](https://prettier.io/docs/en/configuration)来激活插件：

```json
{
  "overrides": [
    {
      "files": ["slides.md", "pages/*.md"],
      "options": {
        "parser": "slidev",
        "plugins": ["prettier-plugin-slidev"]
      }
    }
  ]
}
```

注意，仅指定 `plugins` 是不够的，因为 Slidev 和普通 Markdown 文件共享相同的文件扩展名 `.md`。
