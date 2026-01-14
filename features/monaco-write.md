---
depends:
  - features/monaco-editor
  - features/import-snippet
relates:
  - features/import-snippet
  - 自定义代码运行器: /custom/config-code-runners
since: v0.49.5
tags: [代码块, 编辑器]
description: |
  一个 Monaco 编辑器，允许你直接在幻灯片中编写代码并将更改保存回文件。
---

# 可写 Monaco 编辑器

你还可以使用[导入代码片段](#import-code-snippets)语法结合 `{monaco-write}` 指令，将你的 Monaco 编辑器与文件系统上的文件链接起来。这允许你直接在编辑器中编辑代码并将更改保存回文件。

```md
<<< ./some-file.ts {monaco-write}
```

使用此功能时，请确保事先备份你的文件，因为更改将直接保存到文件中。
