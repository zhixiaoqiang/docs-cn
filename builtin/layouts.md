# 布局

本页列出了 Slidev 提供的所有内置布局。这些布局可以通过幻灯片 frontmatter 中的 `layout` 选项使用。

注意 <LinkInline link="guide/theme-addon" /> 可能会提供额外的布局或覆盖现有布局。要添加你自己的布局，请参阅 <LinkInline link="guide/write-layout" />。

## `center`

在屏幕中间显示内容。

## `cover`

用于显示演示的封面页，可以包含演示标题、背景说明等。

## `default`

最基本的布局，用于显示任何类型的内容。

## `end`

演示的最后一页。

## `fact`

在屏幕上突出显示某些事实或数据。

## `full`

使用屏幕的所有空间来显示内容。

## `image-left`

在屏幕左侧显示图片，内容放置在右侧。

### 使用方法

```yaml
---
layout: image-left

# 图片来源
image: /path/to/the/image

# 右侧内容的自定义类名
class: my-cool-content-on-the-right
---
```

## `image-right`

在屏幕右侧显示图片，内容放置在左侧。

### 使用方法

```yaml
---
layout: image-right

# 图片来源
image: /path/to/the/image

# 左侧内容的自定义类名
class: my-cool-content-on-the-left
---
```

## `image`

将图片作为页面的主要内容显示。

### 使用方法

```yaml
---
layout: image

# 图片来源
image: /path/to/the/image
---
```

你可以通过添加 `backgroundSize` 属性来更改默认的背景大小（`cover`）：

```yaml
---
layout: image
image: /path/to/the/image
backgroundSize: contain
---
```

```yaml
---
layout: image-left
image: /path/to/the/image
backgroundSize: 20em 70%
---
```

## `iframe-left`

在屏幕左侧显示网页，内容放置在右侧。

### 使用方法

```yaml
---
layout: iframe-left

# 网页来源
url: https://github.com/slidevjs/slidev

# 右侧内容的自定义类名
class: my-cool-content-on-the-right
---
```

## `iframe-right`

在屏幕右侧显示网页，内容放置在左侧。

### 使用方法

```yaml
---
layout: iframe-right

# 网页来源
url: https://github.com/slidevjs/slidev

# 左侧内容的自定义类名
class: my-cool-content-on-the-left
---
```

## `iframe`

将网页作为页面的主要内容显示。

### 使用方法

```yaml
---
layout: iframe

# 网页来源
url: https://github.com/slidevjs/slidev
---
```

## `intro`

用于介绍演示，通常包含演示标题、简短描述、作者等。

## `none`

没有任何现有样式的布局。

## `quote`

突出显示引用。

## `section`

用于标记新演示章节的开始。

## `statement`

将声明/陈述作为页面的主要内容。

## `two-cols`

将页面内容分成两列。

### 使用方法

```md
---
layout: two-cols
---

# 左侧

这显示在左侧

::right::

# 右侧

这显示在右侧
```

## `two-cols-header`

将页面内容分成上下两行，第二行分成左右两列。

### 使用方法

```md
---
layout: two-cols-header
---

这横跨两列

::left::

# 左侧

这显示在左侧

::right::

# 右侧

这显示在右侧

<style>
.two-cols-header {
  column-gap: 20px; /* 根据需要调整间隙大小 */
}
</style>
```
