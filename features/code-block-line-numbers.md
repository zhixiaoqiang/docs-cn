---
depends:
  - guide/syntax#code-block
tags: [代码块]
description: |
  为所有幻灯片的代码块启用行号，或单独启用。
---

# 行号

你可以通过在 headmatter 中设置 `lineNumbers: true` 为所有幻灯片的代码块启用行号，或通过设置 `lines: true` 单独启用每个代码块。

你还可以通过 `{startLine: number}` 为每个代码块设置起始行号并相应地高亮行，默认值为 1。

````md
```ts {6,7}{lines:true,startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```
````

注意你可以使用 `{*}` 作为 <LinkInline link="features/line-highlighting" /> 的占位符：

````md
```ts {*}{lines:true,startLine:5}
// ...
```
````
