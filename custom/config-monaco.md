# 配置 Monaco

<Environment type="client" />

创建 `./setup/monaco.ts`，内容如下：

```ts twoslash [./setup/monaco.ts]
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // 使用 `monaco` 进行配置
})
```

了解更多关于[配置 Monaco](https://github.com/Microsoft/monaco-editor)。

## TypeScript 类型

在 Monaco 中使用 TypeScript 时，依赖项的类型会自动安装到客户端。

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

在上面的示例中，确保 `vue` 和 `@vueuse/core` 已作为 dependencies / devDependencies 安装在本地，Slidev 会自动处理其余部分以使编辑器的类型正常工作。当部署为 SPA 时，这些类型也会被打包用于静态托管。

### 额外类型

Slidev 会扫描幻灯片中的所有 Monaco 代码块，并为你使用的库自动导入类型。如果遗漏了一些，你可以明确指定要导入类型的额外包：

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### 自动类型获取

你可以选择通过设置以下 headmatter 从 CDN 加载类型：

```md
---
monacoTypesSource: ata
---
```

此功能由 [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) 提供支持，完全在客户端运行。

## 配置主题

自 v0.48.0 起，Monaco 将复用你在 [Shiki 的 setup 文件](/custom/config-highlighter#configure-shiki)中配置的 Shiki 主题，由 [`@shikijs/monaco`](https://shiki.style/packages/monaco) 提供支持。你无需再担心这个问题，它将与其他代码块保持一致的样式。

## 配置编辑器

> 自 v0.43.0 起可用

如果你想自定义 Monaco 编辑器，可以传递一个与 [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) 定义匹配的 `editorOptions` 对象。

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

或者，如果你希望这些选项应用于每个 Monaco 实例，可以在 `defineMonacoSetup` 函数中返回它们

```ts twoslash [./setup/monaco.ts]
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

## 禁用

自 v0.48.0 起，Monaco 编辑器默认启用，只在你使用时才会被打包。如果你想禁用它，可以在幻灯片的 frontmatter 中将 `monaco` 设置为 `false`：

```yaml
---
monaco: false # 也可以是 `dev` 或 `build` 来有条件地启用
---
```

## 配置代码运行器

要配置 Monaco Runner 如何运行代码，或添加对自定义语言的支持，请参考[配置代码运行器](/custom/config-code-runners)。
