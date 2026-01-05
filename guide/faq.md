---
outline: deep
---

# 常见问题

## 资源处理 {#assets-handling}

你可以在幻灯片中使用图片和视频等静态资源。由于 Slidev 基于 Vite，你可以直接在 markdown 文件中导入它们。

可以被静态分析为资源的 URL 可以使用相对路径：

```md
![alt](./image.png)
<img src="./image.png" />
```

在上述情况下，URL 在构建后将被解析为 `/BASE_URL/assets/image.png`。

但是，frontmatter 和其他组件中的相对路径在构建后会失效：

```md
---
background: ./image.png  # 构建后失效
---

<Comp src="./image.png" />
```

在上述情况下，URL 无法被静态分析，将保持原样，这将导致构建后出现 404 错误。

要解决这个问题，你可以将这些资源放在 [public 文件夹](../custom/directory-structure#public)中，并使用绝对路径导入它们：

```md
---
background: /image.png
---

<Comp src="/image.png" />
```

有关更多详情，请参阅 [Vite 的文档](https://vitejs.dev/guide/assets.html)。

## 定位 {#positioning}

由于 Slidev 是基于 Web 的，CSS 是定位元素的主要方式。以下是一些定位元素的有用技巧：

### 网格和 Flexbox

你可以使用 CSS Grid 创建复杂布局：

::: code-group

```md [两列]
<div class="grid grid-cols-2 gap-4">
  <div>
    第一列
  </div>
  <div>
    第二列
  </div>
</div>
```

```md [复杂情况]
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
  <div>
    第一列 (200px)
  </div>
  <div>
    第二列 (自动适应)
  </div>
  <div>
    第三列 (父容器宽度的 10%)
  </div>
</div>
```

:::

使用 Flexbox 创建更响应式的布局：

::: code-group

```md [水平]
<div class="flex items-center">
  <div>
    第一个块
  </div>
  <div>
    第二个块
  </div>
</div>
```

```md [垂直]
<div class="flex flex-col items-center">
  <div>
    居中内容
  </div>
</div>
```

:::

了解更多：[CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)、[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)，甚至 [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/)。

### 绝对定位

你可以使用 UnoCSS 绝对定位元素：

```md
<div class="absolute left-30px bottom-30px">
  这是一个左下角对齐的页脚
</div>
```

或者使用可拖动元素功能：

<LinkCard link="features/draggable" />

## 调整大小 {#adjust-size}

- 调整所有幻灯片的大小：

<LinkCard link="features/canvas-size" />

- 调整部分幻灯片的大小：

<LinkCard link="features/zoom-slide" />

- 调整某些元素的大小：

<LinkCard link="features/transform-component" />
