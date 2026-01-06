---
depends:
  - guide/syntax#code-block
tags: [codeblock]
description: |
  分组多个代码块，并根据标题名称自动匹配图标。
---

# 代码组

> [!NOTE]
> 此功能需要 [MDC 语法](/features/mdc#mdc-syntax)。启用 `mdc: true` 来使用它。

你可以像这样分组多个代码块：

````md
::code-group

```sh [npm]
npm i @slidev/cli
```

```sh [yarn]
yarn add @slidev/cli
```

```sh [pnpm]
pnpm add @slidev/cli
```

::
````

## 标题图标匹配 {#title-icon-matching}

`code groups`、`code block` 和 [`Shiki Magic Move`](/features/shiki-magic-move) 也支持根据标题名称自动匹配图标。

![code-groups-demo](/assets/code-groups-demo.png)

::: info

默认情况下，我们提供了一些内置图标，你可以通过安装 [@iconify-json/vscode-icons](https://www.npmjs.com/package/@iconify-json/vscode-icons) 来使用它们。

:::

::: details 所有内置图标

```js
const builtinIcons = {
  // 包管理器
  'pnpm': 'i-vscode-icons:file-type-light-pnpm',
  'npm': 'i-vscode-icons:file-type-npm',
  'yarn': 'i-vscode-icons:file-type-yarn',
  'bun': 'i-vscode-icons:file-type-bun',
  'deno': 'i-vscode-icons:file-type-deno',
  // 框架
  'vue': 'i-vscode-icons:file-type-vue',
  'svelte': 'i-vscode-icons:file-type-svelte',
  'angular': 'i-vscode-icons:file-type-angular',
  'react': 'i-vscode-icons:file-type-reactjs',
  'next': 'i-vscode-icons:file-type-light-next',
  'nuxt': 'i-vscode-icons:file-type-nuxt',
  'solid': 'logos:solidjs-icon',
  'astro': 'i-vscode-icons:file-type-light-astro',
  // 打包工具
  'rollup': 'i-vscode-icons:file-type-rollup',
  'webpack': 'i-vscode-icons:file-type-webpack',
  'vite': 'i-vscode-icons:file-type-vite',
  'esbuild': 'i-vscode-icons:file-type-esbuild',
  // 配置文件
  'package.json': 'i-vscode-icons:file-type-node',
  'tsconfig.json': 'i-vscode-icons:file-type-tsconfig',
  '.npmrc': 'i-vscode-icons:file-type-npm',
  '.editorconfig': 'i-vscode-icons:file-type-editorconfig',
  '.eslintrc': 'i-vscode-icons:file-type-eslint',
  '.eslintignore': 'i-vscode-icons:file-type-eslint',
  'eslint.config': 'i-vscode-icons:file-type-eslint',
  '.gitignore': 'i-vscode-icons:file-type-git',
  '.gitattributes': 'i-vscode-icons:file-type-git',
  '.env': 'i-vscode-icons:file-type-dotenv',
  '.env.example': 'i-vscode-icons:file-type-dotenv',
  '.vscode': 'i-vscode-icons:file-type-vscode',
  'tailwind.config': 'vscode-icons:file-type-tailwind',
  'uno.config': 'i-vscode-icons:file-type-unocss',
  'unocss.config': 'i-vscode-icons:file-type-unocss',
  '.oxlintrc': 'i-vscode-icons:file-type-oxlint',
  'vue.config': 'i-vscode-icons:file-type-vueconfig',
  // 文件扩展名
  '.mts': 'i-vscode-icons:file-type-typescript',
  '.cts': 'i-vscode-icons:file-type-typescript',
  '.ts': 'i-vscode-icons:file-type-typescript',
  '.tsx': 'i-vscode-icons:file-type-typescript',
  '.mjs': 'i-vscode-icons:file-type-js',
  '.cjs': 'i-vscode-icons:file-type-js',
  '.json': 'i-vscode-icons:file-type-json',
  '.js': 'i-vscode-icons:file-type-js',
  '.jsx': 'i-vscode-icons:file-type-js',
  '.md': 'i-vscode-icons:file-type-markdown',
  '.py': 'i-vscode-icons:file-type-python',
  '.ico': 'i-vscode-icons:file-type-favicon',
  '.html': 'i-vscode-icons:file-type-html',
  '.css': 'i-vscode-icons:file-type-css',
  '.scss': 'i-vscode-icons:file-type-scss',
  '.yml': 'i-vscode-icons:file-type-light-yaml',
  '.yaml': 'i-vscode-icons:file-type-light-yaml',
  '.php': 'i-vscode-icons:file-type-php',
}
```

:::

## 自定义图标 {#custom-icons}

你可以使用 `~icon~` 语法使用 [iconify](https://icones.js.org) 集合中的任何名称，例如：

````md
```js [npm ~i-uil:github~]
console.log('Hello, GitHub!')
```
````

要使其工作，你需要：

1. 安装图标集合。

:::code-group

```sh [npm]
npm add @iconify-json/uil
```

```sh [yarn]
yarn add @iconify-json/uil
```

```sh [pnpm]
pnpm add @iconify-json/uil
```

```sh [bun]
bun add @iconify-json/uil
```

:::

2. 将图标添加到 `uno.config.ts` 文件中。

```ts [uno.config.ts] {4-6}
import { defineConfig } from 'unocss'

export default defineConfig({
  safelist: [
    'i-uil:github',
  ],
})
```
