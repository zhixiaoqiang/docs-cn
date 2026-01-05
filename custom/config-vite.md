# 配置 Vite 和插件

<Environment type="node" />

Slidev 底层由 [Vite](https://vitejs.dev/) 驱动。这意味着你可以利用 Vite 强大的插件系统来进一步自定义你的幻灯片。

如果你有 `vite.config.ts`，它将被识别并与 Slidev、主题和插件提供的 Vite 配置合并。

## 配置内部插件

Slidev 内部向 Vite 添加了以下插件：

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/unplugin/unplugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

要配置上面列出的内置插件，请创建包含以下内容的 `vite.config.ts`。请注意，Slidev 对这些插件有一些[默认配置](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/vite/index.ts)，此用法将覆盖其中一些配置，这可能会导致应用程序崩溃。请将此视为**高级功能**，并确保在继续之前了解你在做什么。

<!-- eslint-disable import/first -->

```ts twoslash [vite.config.ts]
/// <reference types="@slidev/types" />
import type MarkdownIt from 'markdown-it'

declare const MyPlugin: (md: any) => void
// ---cut---
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue 选项 */
    },
    markdown: {
      /* markdown-it 选项 */
      markdownItSetup(md) {
        /* 自定义 markdown-it 插件 */
        md.use(MyPlugin)
      },
    },
    /* 其他插件的选项 */
  },
})
```

查看[类型声明](https://github.com/slidevjs/slidev/blob/main/packages/types/src/vite.ts#L11)了解更多选项。

::: warning
不允许重新添加 Slidev 内部已使用的插件。例如，不要这样做：

```ts twoslash
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue({
      /* vue 选项 */
    })
  ],
})
```

请按照上述描述将 Vue 选项传递给 `slidev.vue` 字段
:::

## 基于幻灯片数据添加自定义插件

通常你可以在 `vite.config.ts` 中添加 Vite 插件（见上文）。
但是，如果你想根据幻灯片数据添加插件，需要添加 `./setup/vite-plugins.ts` 文件，内容如下：

```ts twoslash
import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup((options) => {
  return [
    // 你的插件在这里
    // 幻灯片数据可通过 options.data.slides 访问
  ]
})
```
