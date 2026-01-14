# 配置上下文菜单

<Environment type="client" />

自定义 Slidev 中的上下文菜单项。

创建 `./setup/context-menu.ts`，内容如下：

<!-- eslint-disable import/first -->

```ts twoslash [./setup/context-menu.ts]
// ---cut---
import { useNav } from '@slidev/client'
import { defineContextMenuSetup } from '@slidev/types'
import { computed } from 'vue'
// ---cut-start---
// @ts-expect-error missing types
// ---cut-end---
import Icon3DCursor from '~icons/carbon/3d-cursor'

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // 如果 `small` 为 `true`，只显示图标
      label: 'Custom Menu Item', // 或一个 Vue 组件
      action() {
        alert('Custom Menu Item Clicked!')
      },
      disabled: isPresenter.value,
    },
  ])
})
```

这将向上下文菜单追加一个新的菜单项。

要全局禁用上下文菜单，请在 frontmatter 中将 `contextMenu` 设置为 `false`。`contextMenu` 也可以设置为 `dev` 或 `build` 以仅在开发模式或构建模式下启用上下文菜单。
