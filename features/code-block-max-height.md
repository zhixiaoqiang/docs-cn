---
depends:
  - guide/syntax#code-block
tags: [codeblock, layout]
description: |
  为代码块设置最大高度并启用滚动。
---

# 最大高度

如果代码无法放入一张幻灯片中，你可以使用 `maxHeight` 设置固定高度并启用滚动：

````md
```ts {2|3|7|12}{maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...任意多行
const c = add(1, 2)
```
````

注意你可以使用 `{*}` 作为 <LinkInline link="features/line-highlighting" /> 的占位符：

````md
```ts {*}{maxHeight:'100px'}
// ...
```
````
