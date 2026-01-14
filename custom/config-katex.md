# 配置 KaTeX

<Environment type="node" />

创建 `./setup/katex.ts`，内容如下：

```ts twoslash [setup/katex.ts]
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    maxExpand: 2000,
    /* ... */
  }
})
```

返回值应该是 KaTeX 的自定义选项。有关完整选项列表，请参阅 [KaTeX 的文档](https://katex.org/docs/options.html)或类型定义。
