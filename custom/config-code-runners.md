# 配置代码运行器

<Environment type="client" />

在你的 Monaco 编辑器中为自定义语言定义代码运行器。

默认情况下，内置支持 JavaScript、TypeScript 运行器。它们在浏览器中运行，**没有**沙箱环境。如果你想要更高级的集成，可以提供自己的代码运行器，将代码发送到远程服务器、在 Web Worker 中运行，或任何你想要的方式。

创建 `./setup/code-runners.ts`，内容如下：

<!-- eslint-disable import/first -->

```ts twoslash [setup/code-runners.ts]
declare const executePythonCodeRemotely: (code: string) => Promise<string>
declare const sanitizeHtml: (html: string) => string
// ---cut---
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    async python(code, ctx) {
      // 以某种方式执行代码并返回结果
      const result = await executePythonCodeRemotely(code)
      return {
        text: result
      }
    },
    html(code, ctx) {
      return {
        html: sanitizeHtml(code)
      }
    },
    // 或其他语言，key 是语言 id
  }
})
```

## 运行器上下文

第二个参数 `ctx` 是运行器上下文，包含以下属性：

```ts twoslash
import type { CodeRunnerOutputs } from '@slidev/types'
import type { CodeToHastOptions } from 'shiki'
// ---cut---
export interface CodeRunnerContext {
  /**
   * 通过 `runnerOptions` prop 传递给运行器的选项。
   */
  options: Record<string, unknown>
  /**
   * 使用 shiki 高亮代码。
   */
  highlight: (code: string, lang: string, options?: Partial<CodeToHastOptions>) => string
  /**
   * 使用（其他）代码运行器运行代码。
   */
  run: (code: string, lang: string) => Promise<CodeRunnerOutputs>
}
```

## 运行器输出

运行器可以返回文本或 HTML 输出，或者返回一个要挂载的元素。有关更多详情，请参阅 https://github.com/slidevjs/slidev/blob/main/packages/types/src/code-runner.ts。

## 额外的运行器依赖

默认情况下，Slidev 会扫描 Markdown 源代码并自动导入代码运行器所需的依赖项。如果你想手动导入依赖项，可以在幻灯片 frontmatter 中使用 `monacoRunAdditionalDeps` 选项：

```yaml
monacoRunAdditionalDeps:
  - ./path/to/dependency
  - lodash-es
```

::: tip
路径相对于 `snippets` 目录解析。依赖项的名称应与代码中导入的名称完全相同。
:::
