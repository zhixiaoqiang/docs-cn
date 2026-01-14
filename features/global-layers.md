---
tags: [导航, 布局]
description: |
  创建跨幻灯片持久存在的自定义组件。
---

# 全局图层

全局图层允许你创建跨幻灯片**持久存在**的自定义组件。这对于添加页脚、跨幻灯片动画、全局效果等非常有用。

Slidev 为此提供了三个图层，在你的项目根目录下创建 `global-top.vue`、`global-bottom.vue` 或 `custom-nav-controls.vue`，它会自动被识别。

还有针对**每张**幻灯片的图层：`slide-top.vue` 和 `slide-bottom.vue`。用法与全局图层类似，但它们会应用到每张幻灯片，因此可能有多个实例。

::: tip
如果你使用的 `global-top.vue` 或 `global-bottom.vue` 依赖于当前的导航状态，在导出时应该使用 `--per-slide` 选项来确保正确的状态应用到每张幻灯片。或者你可以改用 `slide-top.vue` 和 `slide-bottom.vue`。
:::

## 图层关系 {#layers-relationship}

在 z 轴上，从上到下：

- NavControls
  - 自定义导航控件 (`custom-nav-controls.vue`)
- 全局顶层 (`global-top.vue`) - 单实例
- 幻灯片顶层 (`slide-top.vue`) - 每张幻灯片一个实例
- 幻灯片内容
- 幻灯片底层 (`slide-bottom.vue`) - 每张幻灯片一个实例
- 全局底层 (`global-bottom.vue`) - 单实例

## 示例 {#example}

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

文本 `Your Name` 将出现在所有幻灯片上。

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$nav.next">
    <div class="i-carbon:arrow-right" />
  </button>
</template>
```

`Next` 按钮将出现在 NavControls 中。

要有条件地启用它，你可以使用 <LinkInline link="guide/global-context" />

```html
<!-- 从第 4 页隐藏页脚 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- 从 "cover" 布局隐藏页脚 -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- 页面页脚示例 -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- 在演讲者模式下隐藏按钮 -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <div class="i-carbon:arrow-right" />
  </button>
</template>
```
