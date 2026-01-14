---
depends:
  - guide/syntax#code-block
  - guide/animations
relates:
  - Shiki Magic Move: https://github.com/shikijs/shiki-magic-move
since: v0.48.0
tags: [代码块, 动画]
description: |
  启用代码变化之间的精细过渡效果，类似于 Keynote 的 Magic Move。
---

# Shiki Magic Move

[Shiki Magic Move](https://github.com/shikijs/shiki-magic-move) 让你能够在代码变化之间实现精细的过渡效果，类似于 Keynote 的 Magic Move。你可以查看 [演示网站](https://shiki-magic-move.netlify.app/) 了解它是如何工作的。

<video src="https://github.com/slidevjs/slidev/assets/11247099/79927794-27ba-4342-9911-9996cec889d6" controls rounded shadow w-full></video>

在 Slidev 中，我们将 magic-move 绑定到[点击系统](/guide/animations#click-animation)。语法是用 <code>````md magic-move</code> 包裹代表每个步骤的多个代码块（注意是 **4** 个反引号），这将被转换为一个代码块，随着你的点击变形到每个步骤。

`````md
````md magic-move
```js
console.log(`Step ${1}`)
```
```js
console.log(`Step ${1 + 1}`)
```
```ts
console.log(`Step ${3}` as string)
```
````
`````

也可以将 Magic Move 与 <LinkInline link="features/line-highlighting" /> 和 <LinkInline link="features/code-block-line-numbers" /> 混合使用，例如：

`````md
````md magic-move {at:4, lines: true} // [!code hl]
```js {*|1|2-5} // [!code hl]
let count = 1
function add() {
  count++
}
```

中间的非代码块会被忽略，你可以在这里放一些注释。

```js {*}{lines: false} // [!code hl]
let count = 1
const add = () => count += 1
```
````
`````
