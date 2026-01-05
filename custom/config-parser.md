# 配置预解析器

::: info
自定义预解析器不应过于频繁使用。通常你可以使用 [Transformers](./config-transformers) 来实现自定义语法。
:::

Slidev 通过三个步骤解析你的演示文件（例如 `slides.md`）：

1. 执行"预解析"步骤：使用 `---` 分隔符将文件拆分为幻灯片，并考虑可能的 frontmatter 块。
2. 使用外部库解析每张幻灯片。
3. Slidev 解析特殊的 frontmatter 属性 `src: ....`，它允许包含其他 md 文件。

## Markdown 解析器

配置步骤 2 中使用的 markdown 解析器可以通过[配置 Vite 内部插件](/custom/config-vite#configure-internal-plugins)完成。

## 预解析器扩展

> 自 v0.37.0 起可用。

::: warning
重要提示：修改预解析器配置时，你需要停止并重新启动 Slidev（重启可能不够）。
:::

预解析器（上述步骤 1）是高度可扩展的，允许你为 md 文件实现自定义语法。扩展预解析器被视为**高级功能**，由于语法的隐式更改，可能会导致[编辑器集成](../features/side-editor)出现问题。

要自定义它，请创建 `./setup/preparser.ts` 文件，内容如下：

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

此示例系统地将任何 `@@@` 行替换为包含 `hello` 的行。它说明了预解析器配置文件的结构以及预解析器涉及的一些主要概念：

- `definePreparserSetup` 必须以函数作为参数调用。
- 该函数接收文件路径（根演示文件的路径）、headmatter（来自 md 文件）以及自 v0.48.0 起的 mode（dev、build 或 export）。它可以使用此信息（例如，根据演示文件或是否正在导出 PDF 来启用扩展）。
- 该函数必须返回预解析器扩展的列表。
- 扩展可以包含：
  - `transformRawLines(lines)` 函数，在解析 md 文件的 headmatter 后立即运行，并接收所有行的列表（来自 md 文件）。该函数可以任意修改列表。
  - `transformSlide(content, frontmatter)` 函数，在拆分文件后为每张幻灯片调用，并接收幻灯片内容作为字符串和幻灯片的 frontmatter 作为对象。该函数可以修改 frontmatter 并必须返回内容字符串（可能已修改，如果没有修改则可能为 `undefined`）。
  - `transformNote(note, frontmatter)` 函数，在拆分文件后为每张幻灯片调用，并接收幻灯片备注作为字符串或 undefined 以及幻灯片的 frontmatter 作为对象。该函数可以修改 frontmatter 并必须返回备注字符串（可能已修改，如果没有修改则可能为 `undefined`）。
  - `name`

## 预解析器扩展示例

### 用例 1：顶层演示的紧凑语法

想象一种情况，你的演示（部分）主要是展示封面图片和包含其他 md 文件。你可能想要一种紧凑的表示法，例如（部分）`slides.md` 如下：

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://cover.sli.dev
# Questions?
see you next time
```

要允许这些 `@src:` 和 `@cover:` 语法，请创建 `./setup/preparser.ts` 文件，内容如下：

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

就这样。

### 用例 2：使用自定义 frontmatter 包装幻灯片

想象一种情况，你经常想要缩放某些幻灯片，但仍然想使用各种现有布局，因此创建新布局不太合适。
例如，你可能想要这样编写 `slides.md`：

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Welcome

> great!

---
_scale: 4
---
# Break

---

# Ok

---
layout: center
_scale: 2.5
---
# Questions?
see you next time
```

这里我们在 `_scale` 中使用下划线来避免与现有 frontmatter 属性的可能冲突（事实上，不带下划线的 `scale` 可能会导致潜在问题）。

要处理 frontmatter 中的 `_scale: ...` 语法，请创建 `./setup/preparser.ts` 文件，内容如下：

```ts twoslash [./setup/preparser.ts]
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      async transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

就这样。

### 用例 3：使用自定义 frontmatter 转换备注

想象一种情况，你想用自定义备注替换幻灯片的默认备注。
例如，你可能想要这样编写 `slides.md`：

<!-- eslint-skip -->

```md
---
layout: quote
_note: notes/note.md
---

# Welcome

> great!

<!--
Default slide notes
-->
```

这里我们在 `_note` 中使用下划线来避免与现有 frontmatter 属性的可能冲突。

要处理 frontmatter 中的 `_note: ...` 语法，请创建 `./setup/preparser.ts` 文件，内容如下：

```ts twoslash [./setup/preparser.ts]
import fs, { promises as fsp } from 'node:fs'
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      async transformNote(note, frontmatter) {
        if ('_note' in frontmatter && fs.existsSync(frontmatter._note)) {
          try {
            const newNote = await fsp.readFile(frontmatter._note, 'utf8')
            return newNote
          }
          catch (err) {
          }
        }

        return note
      },
    },
  ]
})
```
