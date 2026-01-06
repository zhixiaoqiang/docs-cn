---
depends:
  - guide/syntax#code-block
  - guide/animations
tags: [codeblock, animation]
description: |
  根据点击高亮代码块中的特定行。
---

# 行高亮

要高亮特定的行，只需在括号 `{}` 内添加行号。行号默认从 1 开始计数。

````md
```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

## 动态行高亮

要通过多次点击来更改高亮内容，你可以使用 `|` 分隔每个阶段：

````md
```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

这将首先高亮 `a: Ref<number> | number` 和 `b: Ref<number> | number`，然后在一次点击后高亮 `return computed(() => unref(a) + unref(b))`，最后高亮整个代码块。

你可以将行号设置为 `hide` 来隐藏代码块，或设置为 `none` 来不高亮任何行：

````md
```ts {hide|none}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

::: tip
在[点击动画指南](/guide/animations#positioning)中了解更多。
:::
