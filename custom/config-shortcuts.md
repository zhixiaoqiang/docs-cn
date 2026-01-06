# 配置快捷键

<Environment type="client" />

## 开始使用 {#getting-started}

创建 `./setup/shortcuts.ts`，内容如下：

```ts twoslash [./setup/shortcuts.ts]
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // 保留现有快捷键
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

在 setup 函数中，你可以通过返回一个新的快捷键数组来自定义键盘快捷键。上面的示例将 `next` 操作绑定到 <kbd>enter</kbd>，将 `prev` 操作绑定到 <kbd>backspace</kbd>。

请参阅[导航操作](../guide/ui#navigation-actions)章节了解默认快捷键和导航操作。

## 按键绑定格式 {#key-binding}

每个快捷键的 `key` 可以是字符串（例如 `'Shift+Ctrl+A'`）或计算布尔值。请参阅 [VueUse 的 `useMagicKeys`](https://vueuse.org/core/useMagicKeys/) 了解更多信息。
