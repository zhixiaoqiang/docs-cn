---
depends:
  - guide/global-context
tags: [客户端 API]
description: |
  用于侦听幻灯片生命周期的 hooks。
---

# 幻灯片 Hooks

Slidev 提供了一组 hooks 来帮助你管理幻灯片生命周期：

```ts twoslash
import { onSlideEnter, onSlideLeave, useIsSlideActive } from '@slidev/client'

const isActive = useIsSlideActive()

onSlideEnter(() => {
  /* 每当幻灯片变为活动状态时调用 */
})

onSlideLeave(() => {
  /* 每当幻灯片变为非活动状态时调用 */
})
```

你也可以使用 <LinkInline link="guide/global-context" /> 来访问其他有用的上下文信息。

::: warning

在幻灯片组件中，`onMounted` 和 `onUnmounted` hooks 不可用，因为即使幻灯片不活动，组件实例也会被保留。请改用 `onSlideEnter` 和 `onSlideLeave`。

:::
