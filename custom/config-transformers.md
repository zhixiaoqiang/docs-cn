# 配置 Transformers

<Environment type="node" />

此 setup 函数允许你为**每张幻灯片**的 markdown 内容定义自定义转换器。当你想添加自定义 Markdown 语法和渲染自定义代码块时，这非常有用。首先，创建 `./setup/transformers.ts` 文件，内容如下：

````ts twoslash [setup/transformers.ts]
import type { MarkdownTransformContext } from '@slidev/types'
import { defineTransformersSetup } from '@slidev/types'

function myCodeblock(ctx: MarkdownTransformContext) {
  console.log('index in presentation', ctx.slide.index)
  ctx.s.replace(
    /^```myblock *(\{[^\n]*\})?\n([\s\S]+?)\n```/gm,
    (full: string, options = '', code = '') => {
      return `...`
    },
  )
}

export default defineTransformersSetup(() => {
  return {
    pre: [],
    preCodeblock: [myCodeblock],
    postCodeblock: [],
    post: [],
  }
})
````

返回值应该是转换器的自定义选项。`pre`、`preCodeblock`、`postCodeblock` 和 `post` 是函数数组，将按顺序调用以转换 markdown 内容。转换器的顺序是：

1. 来自你项目的 `pre`
2. 来自插件和主题的 `pre`
3. 导入代码片段语法和 Shiki magic move
4. 来自你项目的 `preCodeblock`
5. 来自插件和主题的 `preCodeblock`
6. 内置的特殊代码块，如 Mermaid、Monaco 和 PlantUML
7. 来自插件和主题的 `postCodeblock`
8. 来自你项目的 `postCodeblock`
9. 其他内置转换器，如代码块包装
10. 来自插件和主题的 `post`
11. 来自你项目的 `post`
