---
depends:
  - features/monaco-editor
  - guide/animations
relates:
  - 自定义代码运行器: /custom/config-code-runners
since: v0.48.0
tags: [代码块, 编辑器]
description: |
  直接在编辑器中运行代码并查看结果。
---

# Monaco 运行器

Slidev 还提供了 Monaco 运行器编辑器，允许你直接在编辑器中运行代码并查看结果。使用 `{monaco-run}` 将代码块转换为 Monaco 运行器编辑器。

````md
```ts {monaco-run}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```
````

它在编辑器中提供一个"运行"按钮，并在代码块下方显示代码执行的结果。你也可以修改代码，结果会即时重新计算。

默认情况下，当幻灯片加载时会自动运行代码；如果你想手动触发运行，可以设置 `{autorun:false}`。

````md
```ts {monaco-run} {autorun:false}
console.log('点击播放按钮运行我')
```
````

如果你只想在某些点击时显示输出，可以使用 `showOutputAt` 属性。值与 `v-click` 相同。

````md
```ts {monaco-run} {showOutputAt:'+1'}
console.log('1次点击后显示')
```
````

目前，Slidev 开箱即用支持运行 JavaScript 和 TypeScript 代码。有关自定义语言支持，请参阅[配置代码运行器](/custom/config-code-runners)。
