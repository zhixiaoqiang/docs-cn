---
tags: [layout]
description: |
  通过鼠标拖动来移动、调整大小和旋转元素。
---

# 可拖动元素

可拖动元素让你能够通过鼠标拖动来移动、调整大小和旋转元素。这对于在幻灯片中创建浮动元素非常有用。

## 指令用法 {#directive-usage}

### 从 frontmatter 获取数据 {#get-data-from-frontmatter}

```md
---
dragPos:
  square: Left,Top,Width,Height,Rotate
---

<img v-drag="'square'" src="https://sli.dev/logo.png">
```

### 从指令值获取数据 {#get-data-from-directive-value}

::: warning
Slidev 使用正则表达式来更新幻灯片内容中的位置值。如果遇到问题，请改用 frontmatter 来定义值。
:::

```md
<img v-drag="[Left,Top,Width,Height,Rotate]" src="https://sli.dev/logo.png">
```

## 组件用法 {#component-usage}

### 从 frontmatter 获取数据 {#get-data-from-frontmatter}

```md
---
dragPos:
  foo: Left,Top,Width,Height,Rotate
---

<v-drag pos="foo" text-3xl>
  <div class="i-carbon:arrow-up" />
  使用 `v-drag` 组件创建一个可拖动容器！
</v-drag>
```

### 从 props 获取数据 {#get-data-from-props}

```md
<v-drag pos="Left,Top,Width,Height,Rotate" text-3xl>
  <div class="i-carbon:arrow-up" />
  使用 `v-drag` 组件创建一个可拖动容器！
</v-drag>
```

## 创建可拖动元素 {#create-draggable-elements}

当你创建一个新的可拖动元素时，不需要指定位置值（但如果你想使用 frontmatter，需要指定位置名称）。Slidev 会自动为你生成初始位置值。

## 自动高度 {#auto-height}

你可以将 `Height` 设置为 `NaN`（在指令中）或 `_`（如果使用组件）来使可拖动元素的高度自动适应其内容。

## 控制方式 {#controls}

- 双击可拖动元素开始拖动。
- 你也可以使用方向键移动元素。
- 拖动时按住 `Shift` 键可保持宽高比。
- 点击可拖动元素外部停止拖动。

## 可拖动箭头 {#draggable-arrow}

`<v-drag-arrow>` 组件创建一个可拖动的箭头元素。简单地像这样使用：

```md
<v-drag-arrow />
```

你会得到一个可拖动的箭头元素。其他属性与 [Arrow 组件](/builtin/components#arrow)相同。
