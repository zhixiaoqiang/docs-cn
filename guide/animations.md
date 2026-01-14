---
outline: deep
---

# 动画指南

动画是幻灯片演示的重要组成部分。Slidev 提供了从简单到高级的各种幻灯片动画制作方法。本指南将告诉你如何有效地使用它们。

## 点击动画 {#click-animation}

此处我们用 “**点击**” 一词来代表幻灯片中的一步动画。一张幻灯片可以有一个或多个点击，每个点击可以触发一个或多个动画 - 例如，显示或隐藏元素。可以通过按下 <kbd>space</kbd> 键或 <kbd>→</kbd> 键来触发一步点击动画。

> [!NOTE]
> 自 v0.48.0 起，我们重写了点击动画系统，使其行为更加一致。在一些情况下，它可能会改变你现有幻灯片的行为本页面展示的是新的点击系统，你可以在 [#1279](https://github.com/slidevjs/slidev/pull/1279) 中找到有关重构的更多详情。

### `v-click` {#v-click}

要对元素应用显示/隐藏"点击动画"，你可以使用 `<v-click>` 组件或 `v-click` 指令。

<!-- eslint-skip -->

```md
<!-- 组件用法：
     在你按下"下一步"之前，这将是不可见的 -->
<v-click> Hello World! </v-click>

<!-- 指令用法：
     在你第二次按下"下一步"之后，这将变为可见 -->
<div v-click class="text-xl"> Hey! </div>
```

### `v-after` {#v-after}

`v-after` 会在前一个 `v-click` 触发时使元素变为可见。

```md
<div v-click> Hello </div>
<div v-after> World </div>  <!-- 或 <v-after> World </v-after> -->
```

当你按下"下一步"时，`Hello` 和 `World` 会同时显示。

### 点击后隐藏 {#hide-after-clicking}

指令用法下，可以使用 `.hide` 修饰符来隐藏元素：

```md
<div v-click> 1 次点击后可见 </div>
<div v-click.hide> 2 次点击后隐藏 </div>
<div v-after.hide> 2 次点击后隐藏 </div>
```

组件用法下，可以使用 `hide` prop 来隐藏元素：

```md
<v-click> 1 次点击后可见 </v-click>
<v-click hide> 2 次点击后隐藏 </v-click>
<v-after hide> 同样在 2 次点击后隐藏 </v-after>
```

### `v-clicks` {#v-clicks}

`v-clicks` 仅作为组件提供。它是将 `v-click` 指令应用到所有子元素的快捷方式。在处理列表和表格时特别有用。

```md
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

每次点击"下一步"时，一个项目将变为可见。
它接受 `depth` 属性用于嵌套列表：

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

此外，你可以使用 `every` 属性来指定每次点击后显示的项目数量：

```md
<v-clicks every="2">

- Item 1.1
- Item 1.2
- Item 2.1
- Item 2.2

</v-clicks>
```

### 动画时机 {#positioning}

默认情况下，点击动画按顺序逐个触发。你可以通过使用 `at` 属性或带值的 `v-click` 指令来自定义元素的动画发生时机。

就像 CSS 布局系统一样，点击动画发生时机可以是 “相对的” (relative) 或 “绝对的” (absolute)：

#### 相对的时机 {#relative-position}

动画发生时机基于相对于前一个也是相对的时机的动画计算。若该动画是第一个相对时机的动画，则从 0 开始计算：

````md
<div v-click> 1 次点击后可见 </div>
<v-click at="+2"><div> 3 次点击后可见 </div></v-click>
<div v-click.hide="'-1'"> 2 次点击后隐藏 </div>

```js {none|1|2}{at:'+5'}
1  // 7 次点击后高亮
2  // 8 次点击后高亮
```
````

> [!NOTE]
> 当没有给 `v-click` 传入参数时，将使用默认值 `'+1'`，即动画发生在上一个动画的后一步。

事实上，`v-after` 只是带有 `at="+0"` 的 `v-click` 的简写：

```md
<!-- 以下两种写法等价 -->
<img v-after />
<img v-click="'+0'" />

<!-- 以下三种写法等价 -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

::: tip `at` 属性值格式
只有以 `'+'` 或 `'-'` 开头的字符串值如 `'+1'` 才被视为相对时机：

| 值             | 类型     |
| -------------- | -------- |
| `'-1'`, `'+1'` | 相对时机 |
| `+1` === `1`   | 绝对时机 |
| `'1'`          | 绝对时机 |

所以不要忘记相对值的单引号。
:::

#### 绝对时机 {#absolute-position}

给定的值是触发此动画的确切点击次数：

````md
<div v-click="3"> 3 次点击后可见 </div>
<v-click at="2"><div> 2 次点击后可见 </div></v-click>
<div v-click.hide="1"> 1 次点击后隐藏 </div>

```js {none|1|2}{at:3}
1  // 3 次点击后高亮
2  // 4 次点击后高亮
```
````

#### 混合情况 {#mixed-case}

你可以混合地使用绝对和相对时机：

```md
<div v-click> 1 次点击后可见 </div>
<div v-click="3"> 3 次点击后可见 </div>
<div v-click> 2 次点击后可见 </div>
<div v-click="'-1'"> 1 次点击后可见 </div>
<div v-click="4"> 4 次点击后可见 </div>
```

以下示例同步两个代码块的高亮：

````md {1,6}
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
= 2
= 'ab'
```
````

### 显示后隐藏 {#enter-leave}

你还可以通过传递一个数组来为 `v-click` 指令指定显示的时机和隐藏的时机：

```md
<div v-click.hide="[2, 4]">
  这将在点击 2 和 3 时隐藏（其他时候显示）。
</div>
<div v-click />
<div v-click="['+1', '+1']">
  这将仅在点击 2 时显示（其他时候隐藏）。
</div>
```

你也可以使用 `v-switch` 组件来实现相同的效果：

```md
<v-switch>
  <template #1> 点击 1 时显示，点击 2 时隐藏。 </template>
  <template #2> 点击 2 时显示，点击 5 时隐藏。 </template>
  <template #5-7> 点击 5 时显示，点击 7 时隐藏。 </template>
</v-switch>
```

有关更多详情，请参阅 [`VSwitch` 组件](/builtin/components#vswitch)。

### 自定义总点击次数 {#total}

默认情况下，Slidev 会自动计算进入下一张幻灯片前需要多少次点击。你可以通过 `clicks` frontmatter 选项覆盖此设置：

```yaml
---
# 这张幻灯片有 10 次点击，之后进入下一张幻灯片
clicks: 10
---
```

### 元素过渡 {#element-transitions}

当你将 `v-click` 指令应用到元素时，它会附加类名 `slidev-vclick-target`。当元素隐藏时，还会附加类名 `slidev-vclick-hidden`。例如：

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

点击后，它可能变成：

```html
<div class="slidev-vclick-target">Text</div>
```

默认情况下，这些类应用了微妙的透明度过渡：

```css
/* 以下是默认样式 */

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

你可以在自定义样式表中覆盖它们以自定义过渡效果。例如，你可以通过以下方式实现放大过渡：

```css
/* styles.css */

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

要为特定幻灯片或布局指定动画：

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

了解更多关于[自定义样式](/custom/directory-structure#style)。

## Motion 动画 {#motion}

Slidev 内置了 [@vueuse/motion](https://motion.vueuse.org/)。你可以使用 `v-motion` 指令来赋予元素 Motion 动画：

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  :leave="{ x: 80 }"
>
  Slidev
</div>
```

上例中，当切换至这张幻灯片时，`Slidev` 几个字将从 `-80px` 移动到原始位置。当离开该幻灯片时，它将移动到 `80px`。

> 在 v0.48.9 之前，你需要在幻灯片的 frontmatter 中添加 `preload: false` 来启用 motion。

### 基于点击动画的 Motion {#motion-with-clicks}

> 自 v0.48.9 起可用

你还可以通过点击触发 motion：

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0, y: 0 }"
  :click-1="{ x: 0, y: 30 }"
  :click-2="{ y: 60 }"
  :click-2-4="{ x: 40 }"
  :leave="{ y: 0, x: 80 }"
>
  Slidev
</div>
```

或者将 `v-click` 与 `v-motion` 结合使用：

```html
<div v-click="[2, 4]" v-motion
  :initial="{ x: -50 }"
  :enter="{ x: 0 }"
  :leave="{ x: 50 }"
>
  在点击 2 时显示，点击 4 时隐藏。
</div>
```

变体的含义：

- `initial`：当 `currentPage < thisPage` 时，或者 `v-click` 因为 `$clicks` 太小而隐藏当前元素时。
- `enter`：当 `currentPage === thisPage` 时，且 `v-click` 显示元素。_优先级：最低_
- `click-x`：`x` 是表示**绝对**点击次数的数字。当 `$clicks >= x` 时，变体生效。_优先级：`x`_
- `click-x-y`：当 `x <= $clicks < y` 时，变体生效。_优先级：`x`_
- `leave`：`currentPage > thisPage` 时，或者 `v-click` 因为 `$clicks` 太大而隐藏当前元素时。

变体将根据上述定义的优先级进行组合。

::: warning
由于 Vue 内部的一个 [bug](https://github.com/vuejs/core/issues/10295)，目前**只有**应用在与 `v-motion` 相同元素上的 `v-click` 才能控制 motion 动画。作为变通方案，你可以使用类似 `v-if="3 < $clicks"` 的方式来实现相同效果。
:::

了解更多：[Demo](https://sli.dev/demo/starter/10) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)

## 幻灯片过渡 {#slide-transitions}

<div id="pages-transitions" />

Slidev 内置了幻灯片过渡效果。你可以通过设置 `transition` frontmatter 选项来启用它：

```md
---
transition: slide-left
---
```

这将在幻灯片切换时产生漂亮的滑动效果。在 headmatter 中设置它将应用到所有幻灯片。你也可以在 frontmatters 中为每张幻灯片设置不同的过渡。

### 内置过渡 {#builtin-transitions}

- `fade` - 淡入/淡出
- `fade-out` - 淡出然后淡入
- `slide-left` - 向左滑动（向后时向右滑动）
- `slide-right` - 向右滑动（向后时向左滑动）
- `slide-up` - 向上滑动（向后时向下滑动）
- `slide-down` - 向下滑动（向后时向上滑动）
- `view-transition` - 通过 View Transitions API

### View Transition API {#view-transitions}

View Transitions API 提供了一种在不同 DOM 状态之间轻松创建动画过渡的机制。在 [View Transitions API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) 中了解更多信息。

:::warning
实验性功能：并非所有浏览器都支持此功能。在使用之前，请仔细查看[浏览器兼容性表](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility)。
:::

你可以使用 `view-transition-name` CSS 属性来命名视图过渡，这会在不同页面元素之间创建连接，并在切换幻灯片时实现平滑过渡。

你可以启用 [MDC（Markdown Component）语法](/guide/syntax#mdc-syntax)支持来方便地命名 view-transitions：

```md
---
transition: view-transition
mdc: true
---

# View Transition {.inline-block.view-transition-title}

---

# View Transition {.inline-block.view-transition-title}
```

### 自定义过渡效果 {#custom-transitions}

Slidev 的幻灯片过渡由 [Vue Transition](https://vuejs.org/guide/built-ins/transition.html) 驱动。你可以通过以下方式提供自定义过渡：

```md
---
transition: my-transition
---
```

并在你的自定义样式表中添加以下内容：

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

参阅 [Vue Transition](https://vuejs.org/guide/built-ins/transition.html) 以了解更多。

### 前进和后退过渡 {#forward-backward-transitions}

你可以使用 `|` 作为过渡名称的分隔符来为前进和后退导航指定不同的过渡：

```md
---
transition: go-forward | go-backward
---
```

在上例中，当你从幻灯片 1 切换到幻灯片 2 时，将应用 `go-forward` 过渡效果。当你从幻灯片 2 切换到幻灯片 1 时，将应用 `go-backward` 过渡效果。

### 高级过渡选项 {#advanced-usage}

`transition` 字段接受一个选项对象，该选项对象将传递给 [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) 组件。例如：

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
