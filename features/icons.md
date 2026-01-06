---
relates:
  - Iconify: https://iconify.design/
  - Icones: https://icones.js.org/
  - unplugin-icons: https://github.com/antfu/unplugin-icons
tags: [components]
description: |
  在 markdown 中直接使用几乎所有开源图标集的图标。
---

# 图标

安装相应的包后，Slidev 允许你在 markdown 中**直接**访问几乎所有开源图标集。由 [`unplugin-icons`](https://github.com/antfu/unplugin-icons) 和 [Iconify](https://iconify.design/) 提供支持。

命名遵循 [Iconify](https://iconify.design/) 的 `{collection-name}-{icon-name}` 约定。例如：

- `<mdi-account-circle />` - <mdi-account-circle /> 来自 [Material Design Icons](https://github.com/Templarian/MaterialDesign) - [`@iconify-json/mdi`](https://npmjs.com/package/@iconify-json/mdi)
- `<carbon-badge />` - <carbon-badge /> 来自 [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons) - [`@iconify-json/carbon`](https://npmjs.com/package/@iconify-json/carbon)
- `<uim-rocket />` - <uim-rocket /> 来自 [Unicons Monochrome](https://github.com/Iconscout/unicons) - [`@iconify-json/uim`](https://npmjs.com/package/@iconify-json/uim)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> 来自 [Twemoji](https://github.com/twitter/twemoji) - [`@iconify-json/twemoji`](https://npmjs.com/package/@iconify-json/twemoji)
- `<logos-vue />` - <logos-vue /> 来自 [SVG Logos](https://github.com/gilbarbara/logos) - [`@iconify-json/logos`](https://npmjs.com/package/@iconify-json/logos)
- 还有更多...

::: code-group

```bash [pnpm]
pnpm add @iconify-json/[the-collection-you-want]
```

```bash [npm]
npm install @iconify-json/[the-collection-you-want]
```

```bash [yarn]
yarn add @iconify-json/[the-collection-you-want]
```

```bash [bun]
bun add @iconify-json/[the-collection-you-want]
```

```bash [deno]
deno add jsr:@iconify-json/[the-collection-you-want]
```

:::

我们使用 [Iconify](https://iconify.design) 作为图标的数据源。你需要按照 `@iconify-json/*` 的模式在 `dependencies` 中安装相应的图标集。例如，`@iconify-json/mdi` 用于 [Material Design Icons](https://materialdesignicons.com/)，`@iconify-json/tabler` 用于 [Tabler](https://tabler-icons.io/)。你可以参考 [Icônes](https://icones.js.org/) 或 [Iconify](https://icon-sets.iconify.design/) 查看所有可用的图标集。

### 图标样式 {#styling-icons}

你可以像其他 HTML 元素一样为图标添加样式。例如：

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />
