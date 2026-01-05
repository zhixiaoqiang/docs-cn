# 组件

本页列出了 Slidev 提供的所有内置组件。这些组件可以**直接**在你的幻灯片中使用。

注意 <LinkInline link="guide/theme-addon" /> 可以提供额外的组件。要添加你自己的组件，请参阅 <LinkInline link="guide/component#write" />。

## `Arrow`

绘制箭头。

### 使用方法

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

或：

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

属性：

- `x1` (`string | number`，必需)：起点 x 位置
- `y1` (`string | number`，必需)：起点 y 位置
- `x2` (`string | number`，必需)：终点 x 位置
- `y2` (`string | number`，必需)：终点 y 位置
- `width` (`string | number`，默认：`2`)：线条宽度
- `color` (`string`，默认：`'currentColor'`)：线条颜色
- `two-way` (`boolean`，默认：`false`)：绘制双向箭头

## `VDragArrow`

可拖动的 `Arrow` 组件。

### 使用方法

<LinkCard link="features/draggable#draggable-arrow" />

与位置无关的属性与 [Arrow 组件](#arrow)相同。

## `AutoFitText`

> 实验性

自动调整字体大小以适应内容的盒子。类似于 PowerPoint 或 Keynote 的文本框。

### 使用方法

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

属性：

- `max` (`string | number`，默认 `100`)：最大字体大小
- `min` (`string | number`，默认 `30`)：最小字体大小
- `modelValue` (`string`，默认 `''`)：文本内容

## `LightOrDark`

根据当前浅色或深色主题显示不同内容。

### 使用方法

使用 `#dark` 和 `#light` 两个具名插槽：

```md
<LightOrDark>
  <template #dark>深色模式已开启</template>
  <template #light>浅色模式已开启</template>
</LightOrDark>
```

`LightOrDark` 组件上提供的属性可以通过作用域插槽获取：

```md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
```

你可以在插槽中提供 markdown，但需要用空行包围内容：

```md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
```

## `Link`

插入可用于导航到指定幻灯片的链接。

### 使用方法

```md
<Link to="42">跳转到幻灯片 42</Link>
<Link to="42" title="跳转到幻灯片 42"/>
<Link to="solutions" title="跳转到解决方案"/>
```

属性：

- `to` (`string | number`)：要导航到的幻灯片路径（幻灯片路径从 `1` 开始）
- `title` (`string`)：要显示的标题

可以使用字符串作为 `to`，前提是对应的路由存在，例如：

```md
---
routeAlias: solutions
---

# 现在来看一些解决方案！
```

## `PoweredBySlidev`

渲染 "Powered by Slidev" 并带有 Slidev 网站链接。

## `RenderWhen`

根据上下文是否匹配来渲染插槽（例如是否在演讲者视图中）。

### 使用方法

```md
<RenderWhen context="presenter">这只在演讲者视图中渲染。</RenderWhen>
```

上下文类型：`'main' | 'visible' | 'print' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

属性：

- `context` (`Context | Context[]`)：要检查的上下文或上下文数组
  - `'main'`：在幻灯片和演讲者视图中渲染（等同于 ['slide', 'presenter']）
  - `'visible'`：如果可见则渲染内容
  - `'print'`：在打印模式下渲染
  - `'slide'`：在幻灯片中渲染
  - `'overview'`：在概览中渲染
  - `'presenter'`：在演讲者视图中渲染
  - `'previewNext'`：在演讲者的下一张幻灯片预览中渲染

插槽：

- `#default`：当上下文匹配时渲染
- `#fallback`：当上下文不匹配时渲染

## `SlideCurrentNo`

当前幻灯片编号。

### 使用方法

```md
<SlideCurrentNo />
```

## `SlidesTotal`

幻灯片总数。

### 使用方法

```md
<SlidesTotal />
```

## `TitleRenderer`

插入从幻灯片解析的主标题（HTML 格式）。

标题和标题级别会自动从每张幻灯片的第一个标题元素中提取。

你可以使用 front matter 语法覆盖幻灯片的这种自动行为：

```yml
---
title: 精彩的幻灯片标题
level: 2
---
```

### 使用方法

`<TitleRenderer>` 组件是一个虚拟组件，你可以这样导入：

```js
import TitleRenderer from '#slidev/title-renderer'
```

然后这样使用：

```md
<TitleRenderer no="42" />
```

属性：

- `no` (`string | number`)：要显示标题的幻灯片编号（从 `1` 开始）

## `Toc`

插入目录。

如果你希望某张幻灯片不出现在 `<Toc>` 组件中，可以在幻灯片的 frontmatter 中使用 `hideInToc` 选项：

```yml
---
hideInToc: true
---
```

标题使用 [`<Titles>` 组件](#titles)显示

### 使用方法

```md
<Toc />
```

属性：

- `columns` (`string | number`，默认：`1`)：显示的列数
- `listClass` (`string | string[]`，默认：`''`)：应用于目录列表的类
- `maxDepth` (`string | number`，默认：`Infinity`)：要显示的最大标题深度级别
- `minDepth` (`string | number`，默认：`1`)：要显示的最小标题深度级别
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`，默认：`'all'`)：
  - `'all'`：显示所有项目
  - `'onlyCurrentTree'`：只显示当前树中的项目（活动项目、活动项目的父级和子级）
  - `'onlySiblings'`：只显示当前树中的项目及其直接兄弟项目

## `Transform`

对元素应用缩放或变换。

### 使用方法

```md
<Transform :scale="0.5" origin="top center">
  <YourElements />
</Transform>
```

属性：

- `scale` (`number | string`，默认 `1`)：变换缩放值
- `origin` (`string`，默认 `'top left'`)：变换原点值

## `Tweet`

嵌入推文。

### 使用方法

```md
<Tweet id="20" />
```

属性：

- `id` (`number | string`，必需)：推文 id
- `scale` (`number | string`，默认 `1`)：变换缩放值
- `conversation` (`string`，默认 `'none'`)：[推文嵌入参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`，默认 `'visible'`)：[推文嵌入参数](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

## `VAfter`、`VClick` 和 `VClicks`

<LinkCard link="guide/animations#click-animation" />

## `VSwitch`

根据点击在多个插槽之间切换。

<LinkCard link="guide/animations#enter-leave" />

- 如果 `unmount` 属性设置为 `true`，切换到下一个插槽时会卸载前一个插槽。默认为 `false`。
- 使用 `tag` 和 `childTag` 属性来更改组件及其子元素的默认标签。默认为 `div`。
- 使用 `transition` 属性来更改过渡效果。默认为 `false`（禁用）。

## `VDrag`

<LinkCard link="features/draggable" />

## `SlidevVideo`

嵌入视频。

### 使用方法

```md
<SlidevVideo v-click autoplay controls>
  <!-- HTML video 元素中可以包含的任何内容。 -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    你的浏览器不支持视频。你可以在
    <a href="/myMovie.mp4">这里</a>下载。
  </p>
</SlidevVideo>
```

查看 [HTML video 元素的文档](https://developer.mozilla.org/docs/Web/HTML/Element/Video)了解此组件插槽中可以包含的内容。

属性：

- `controls` (`boolean`，默认：`false`)：显示视频控件
- `autoplay` (`boolean | 'once'`，默认：`false`)：
  - `true` 或 `'once'`：仅启动视频一次，结束或暂停后不重新开始
  - `false`：从不自动启动视频（依赖 `controls` 代替）
- `autoreset` (`'slide' | 'click'`，默认：`undefined`)：
  - `'slide'`：返回幻灯片时回到视频开头
  - `'click'`：返回组件的点击轮次时回到视频开头
- `poster` (`string | undefined`，默认：`undefined`)：
  - 视频未播放时打印的图片来源。
- `printPoster` (`string | undefined`，默认：`undefined`)：
  - 打印时 `poster` 的覆盖值。
- `timestamp` (`string | number`，默认：`0`)：
  - 视频的开始时间（秒）。
- `printTimestamp` (`string | number | 'last' | undefined`，默认：`undefined`)：
  - 打印时 `timestamp` 的覆盖值。

::: warning
导出时，视频可能无法加载，因为 Chromium 不支持某些视频格式。在这种情况下，你可以指定浏览器的可执行文件路径。有关更多信息，请参阅 [Chromium 可执行文件路径](/guide/exporting.html#executable-path)。
:::

## `Youtube`

嵌入 YouTube 视频。

### 使用方法

```md
<Youtube id="luoMHjh-XcQ" />
```

属性：

- `id` (`string`，必需)：YouTube 视频 id
- `width` (`number`)：视频宽度
- `height` (`number`)：视频高度

你也可以在 id 值中添加 `?start=1234` 使视频从特定时间开始（其中 `1234` 是秒数），
