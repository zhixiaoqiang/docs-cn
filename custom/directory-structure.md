# 目录结构

Slidev 采用目录结构约定来最小化配置并使功能扩展灵活直观。

常规目录结构如下：

```bash
your-slidev/
  ├── components/       # 自定义组件
  ├── layouts/          # 自定义布局
  ├── public/           # 静态资源
  ├── setup/            # 自定义 setup / hooks
  ├── snippets/         # 代码片段
  ├── styles/           # 自定义样式
  ├── index.html        # 注入到 index.html
  ├── slides.md         # 主幻灯片入口
  └── vite.config.ts    # 扩展 vite 配置
```

以上都是可选的。

## 组件

模式：`./components/*.{vue,js,ts,jsx,tsx,md}`

<LinkCard link="guide/component" />

## 布局

模式：`./layouts/*.{vue,js,ts,jsx,tsx}`

<LinkCard link="guide/layout" />

## Public

模式：`./public/*`

此目录中的资源将在开发时以根路径 `/` 提供服务，并原样复制到 dist 目录的根目录。了解更多关于[资源处理](../guide/faq#assets-handling)。

## 样式

模式：`./style.css` | `./styles/index.{css,js,ts}`

遵循此约定的文件将被注入到 App 根部。如果你需要导入多个 CSS 入口，可以创建以下结构并自行管理导入顺序。

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

样式将由 [UnoCSS](https://unocss.dev/) 和 [PostCSS](https://postcss.org/) 处理，因此你可以开箱即用地使用 CSS 嵌套和 [at-directives](https://unocss.dev/transformers/directives#apply) 以及嵌套 CSS。例如：

<!-- eslint-skip -->

```css
.slidev-layout {
  --uno: px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    --uno: select-none;
  }

  pre, code {
    --uno: select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

在[这里](https://unocss.dev/transformers/directives#apply)了解更多关于语法的信息。

## `index.html`

模式：`index.html`

`index.html` 提供了向主 `index.html` 注入 meta 标签和/或脚本的能力。

例如，对于以下自定义 `index.html`：

```html [index.html]
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

最终托管的 `index.html` 将是：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## 全局图层

模式：`global-top.vue` | `global-bottom.vue` | `custom-nav-controls.vue` | `slide-top.vue` | `slide-bottom.vue`

<LinkCard link="features/global-layers" />
