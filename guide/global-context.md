# 全局上下文

Slidev 注入了几个全局上下文值用于高级导航控制。

## 直接使用 {#direct-usage}

你可以在幻灯片或组件中直接访问它们：

```md [slides.md]
# Page 1

Current page is: {{ $nav.currentPage }}
```

```vue [Foo.vue]
<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$nav.next">
    Next Click
  </button>
  <button @click="$nav.nextSlide">
    Next Slide
  </button>
</template>
```

## 组合式使用 {#composable-usage}

> 自 v0.48.0 起可用

如果你想以编程方式（同时类型安全地）获取上下文，可以从 `@slidev/client` 导入组合式函数：

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter(() => { /* ... */ })
onSlideLeave(() => { /* ... */ })
// ...
</script>
```

> [!NOTE]
> 以前，你可能看到过从嵌套模块导入的用法，如 `import { isDark } from '@slidev/client/logic/dark.ts'`，这**不推荐**，因为它们是内部实现细节，可能在未来更改。请尽可能使用 `@slidev/client` 的公共 API。

::: warning

当使用 `useSlideContext` 组合式函数时，`$slidev` 的自动注入将被禁用。你需要手动从 `useSlideContext` 函数获取 `$slidev` 对象。

:::

<SeeAlso :links="['features/slide-hook']" />

## 属性 {#properties}

### `$slidev` {#slidev}

全局上下文对象。

### `$frontmatter` {#frontmatter}

当前幻灯片的 frontmatter 对象。请注意，对于幻灯片之外的组件（如 <LinkInline link="features/global-layers" />），这是空的。

### `$clicks` {#clicks}

`$clicks` 保存当前幻灯片的点击次数。可用于根据点击有条件地显示不同内容。

```html
<div v-if="$clicks > 3">Content</div>
```

有关更多信息，请参阅 <LinkInline link="guide/animations" /> 指南。

### `$nav` {#nav}

一个响应式对象，包含幻灯片导航的属性和控制。例如：

```js
$nav.next() // 下一步
$nav.nextSlide() // 下一张幻灯片（跳过点击）
$nav.go(10) // 跳转到第 10 张幻灯片

$nav.currentPage // 当前幻灯片编号
$nav.currentLayout // 当前布局名称
```

有关更多可用属性，请参阅 [`SlidevContextNav` 接口](https://github.com/slidevjs/slidev/blob/main/packages/client/composables/useNav.ts)。

### `$page` {#page}

`$page` 保存当前页面编号，从 1 开始。

```md
Page: {{ $page }}

Is current page active: {{ $page === $nav.currentPage }}
```

> [!Note] > `$nav.clicks` 是全局状态，而 `$clicks` 是每张幻灯片的本地点击次数。

### `$renderContext` {#render-context}

`$renderContext` 保存当前的渲染上下文，可以是 `slide`、`overview`、`presenter` 或 `previewNext`

```md
<div v-if="['slide', 'presenter'].includes($renderContext)">
  此内容仅在主幻灯片视图中渲染
</div>
```

你也可以使用 [`<RenderWhen>` 组件](../builtin/components#renderwhen)。

### `$slidev.configs` {#configs}

一个响应式对象，包含幻灯片项目的配置。例如：

```md
---
title: My First Slidev!
---

# Page 1

---

# Any Page

{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs` {#theme-configs}

一个响应式对象，包含解析后的主题配置：

```yaml
---
title: My First Slidev!
themeConfig:
  primary: '#213435'
---
```

然后主题可以这样访问主色：

```md
{{ $slidev.themeConfigs.primary }} // '#213435'
```

## 类型 {#types}

如果你想以编程方式获取类型，可以从 `@slidev/types` 导入类型，如 `TocItem`：

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```
