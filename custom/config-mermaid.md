# 配置 Mermaid

<Environment type="client" />

创建 `./setup/mermaid.ts`，内容如下：

```ts twoslash [setup/mermaid.ts]
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

返回值应该是 [Mermaid](https://mermaid.js.org/) 的自定义配置。有关完整配置列表，请参阅 [Mermaid 文档](https://mermaid.js.org/config/schema-docs/config.html)或类型定义。

## 自定义主题/样式

如果你想创建自定义 Mermaid 主题或样式，可以通过定义 `themeVariables` 来实现，如下例所示：

```ts twoslash
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // 通用主题变量
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // 时序图变量
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    }
  }
})
```

你可以在 [Mermaid 主题配置](https://mermaid.js.org/config/theming.html)页面找到所有主题变量。
