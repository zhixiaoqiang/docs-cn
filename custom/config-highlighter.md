# 配置代码高亮器

Slidev 使用 [Shiki](https://github.com/shikijs/shiki) 作为代码高亮器。它是一个由 TextMate Grammar 驱动的语法高亮器，与 VS Code 一样精确。它生成彩色标记，因此不需要额外的 CSS。Shiki 还自带[大量内置主题](https://shiki.style/themes)。在 Slidev 中，我们还提供了 [TwoSlash](#twoslash-integration) 支持。

## 配置 Shiki

<Environment type="both" />

创建 `./setup/shiki.ts` 文件，内容如下：

```ts twoslash [setup/shiki.ts]
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

如果你想添加自定义主题或语言（JSON 格式的 TextMate grammar/themes），可以在 setup 文件中导入它们：

<!-- eslint-disable import/first-->

```ts twoslash [setup/shiki.ts]
import { defineShikiSetup } from '@slidev/types'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customLanguage from './customLanguage.tmLanguage.json'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import customTheme from './customTheme.tmTheme.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

查看[内置语言](https://shiki.style/languages)和[内置主题](https://shiki.style/themes)，并参考 [Shiki 的文档](https://shiki.style)了解更多详情。

:::info
目前，Shiki Magic Move 不支持 transformers。
:::

## 配置 Prism

:::warning
自 v0.50 起，Prism 支持已被移除。请改用 Shiki。
:::
