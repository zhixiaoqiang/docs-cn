---
depends:
  - guide/syntax#code-block
relates:
  - Monaco Editor: https://microsoft.github.io/monaco-editor/
  - Configure Monaco Editor: /custom/config-monaco
tags: [codeblock, editor]
description: |
  将代码块转换为功能完备的编辑器，或生成两个代码块之间的差异对比。
---

# Monaco 编辑器

<video src="https://github.com/slidevjs/slidev/assets/11247099/0c6ce681-80d3-4555-93bf-9288ee533462" controls rounded shadow w-full></video>

当你想在演示中进行一些修改时，只需在语言标识符后添加 `{monaco}` — 它会将代码块转换为功能完备的 Monaco 编辑器！

````md
```ts {monaco}
console.log('HelloWorld')
```
````

了解更多关于[配置 Monaco](/custom/config-monaco)。

## 差异编辑器

Monaco 还可以生成两个代码块之间的差异对比。使用 `{monaco-diff}` 将代码块转换为 [Monaco 差异编辑器](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example)，并使用 `~~~` 分隔原始代码和修改后的代码！

````md
```ts {monaco-diff}
console.log('Original text')
~~~
console.log('Modified text')
```
````

## 编辑器高度

默认情况下，Monaco 编辑器的高度是基于初始内容固定的。如果你从空的或较小的代码块开始，并希望编辑器随着输入更多代码自动增长，可以设置 `{height:'auto'}`。

````md
```ts {monaco} {height:'auto'}
// 编辑器会随着你输入更多代码自动增长
console.log('Hello, World!')
```
````

你也可以使用 CSS 单位设置特定高度，如 `{height:'300px'}` 或 `{height:'100%'}`。
