---
depends:
  - guide/syntax#code-block
relates:
  - TwoSlash: https://twoslash.netlify.app/
since: v0.46.0
tags: [代码块]
description: |
  渲染带有悬停或内联类型信息的 TypeScript 代码块的强大工具。
---

# TwoSlash 集成

[TwoSlash](https://twoslash.netlify.app/) 是一个强大的工具，用于渲染带有悬停或内联类型信息的 TypeScript 代码块。它对于准备 JavaScript/TypeScript 相关主题的幻灯片非常有用。

要使用它，你可以在代码块的语言标识符中添加 `twoslash`：

````md
```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```
````

它将被渲染为：

```ts twoslash
import { ref } from 'vue'

const count = ref(0)
//            ^?
```

<!-- For the popup to not overlap the content below -->
<div class="py-20" />
