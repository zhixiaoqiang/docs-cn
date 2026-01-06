---
tags: [notes, presenter]
description: 自动为你的备注添加 `<ruby>` 标签。
---

# 备注自动注音

> 自 v52.4.0 起可用

当你在幻灯片中写备注时，你可能想添加一些注音文字来帮助发音某些单词。你始终可以手动向备注添加 `<ruby>` 标签，但 Slidev 也提供了一种便捷的方式，通过全局自动替换来自动完成此操作。

在 headmatter 中，你可以将 `notesAutoRuby` 选项设置为单词到其注音文字的映射：

```md
---
notesAutoRuby:
  日本語: ni hon go
  勉強: べんきょう
---

# 你的幻灯片内容

<!--
私は日本語を勉強しています。
-->
```

备注将被渲染为：

<p>私は<ruby>日本語<rt>ni hon go</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。</p>
