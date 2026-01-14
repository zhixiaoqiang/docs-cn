---
relates:
  - features/monaco-write
  - features/monaco-editor
since: v0.47.0
tags: [代码块, 语法]
description: |
  从现有文件导入代码片段到你的幻灯片中。
---

# 导入代码片段

你可以通过以下语法从现有文件导入代码片段：

```md
<<< @/snippets/snippet.js
```

::: tip
`@` 的值对应于你的包的根目录。建议将代码片段放在 `@/snippets` 中以便与 Monaco 编辑器兼容。或者，你也可以从相对路径导入。
:::

你还可以使用 [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) 仅包含代码文件的相应部分：

```md
<<< @/snippets/snippet.js#region-name
```

要明确指定导入代码的语言，可以在后面添加语言标识符：

```md
<<< @/snippets/snippet.js ts
```

任何代码块功能如[行高亮](#line-highlighting)和 [Monaco 编辑器](#monaco-editor)也都支持：

```md
<<< @/snippets/snippet.js {2,3|5}{lines:true}
<<< @/snippets/snippet.js ts {monaco}{height:200px}
```

注意你可以使用 `{*}` 作为 <LinkInline link="features/line-highlighting" /> 的占位符：

<!-- eslint-skip -->

```md
<<< @/snippets/snippet.js {*}{lines:true}
```
