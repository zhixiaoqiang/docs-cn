---
depends:
  - guide/animations
relates:
  - Rough Notation: https://github.com/slidevjs/rough-notation
since: v0.48.0
tags: [drawing, animation]
description: |
  集成 Rough Notation，允许在幻灯片中标记或高亮元素。
---

# Rough 标记

Slidev 集成了 [Rough Notation](https://github.com/slidevjs/rough-notation)，允许在幻灯片中标记或高亮元素。

---

### `v-mark` 指令

Rough Notation 集成附带了 `v-mark` 指令。

#### 类型

使用 `v-mark.underline` 表示下划线标记，`v-mark.circle` 表示圆圈标记等。（默认为 `underline`）。

#### 颜色

`v-mark.red` 使标记变成 `red`。支持 UnoCSS 的内置颜色主题。对于自定义颜色，使用对象语法 `v-mark="{ color: '#234' }"`。

#### 点击

`v-mark` 的工作方式与 `v-click` 相同，会在点击后触发。与 `v-click` 相同，它允许你传递自定义点击值，如 `v-mark="5"` 或 `v-mark="'+1'"`。

#### 选项

可选地，你可以向 `v-mark` 传递一个对象来指定选项，例如：

```vue
<span v-mark="{ at: 5, color: '#234', type: 'circle' }">
重要文本
</span>
```

#### 预览

<video src="https://github.com/slidevjs/slidev/assets/11247099/c840340c-0aa1-4cde-b228-e6c67e5f6879" rounded-lg shadow controls></video>
