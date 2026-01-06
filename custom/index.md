# 自定义

Slidev 完全可自定义，从样式到工具配置。它允许你配置底层工具（[Vite](/custom/config-vite)、[UnoCSS](/custom/config-unocss)、[Monaco](/custom/config-monaco) 等）。

## 幻灯片项目配置 {#headmatter}

你可以在**第一张**幻灯片的 frontmatter（即 headmatter）中配置整个幻灯片项目。以下显示每个选项的默认值：

```yaml
---
# 主题 id、包名或本地路径
# 了解更多：https://sli.dev/guide/theme-addon.html#use-theme
theme: default
# 插件，可以是包名或本地路径的列表
# 了解更多：https://sli.dev/guide/theme-addon.html#use-addon
addons: []
# 幻灯片标题，如果未指定将从第一个标题推断
title: Slidev
# 网页的标题模板，`%s` 将被幻灯片的标题替换
titleTemplate: '%s - Slidev'
# 幻灯片信息，可以是 Markdown 字符串
info: false
# 导出 PDF 或 PPTX 的作者字段
author: Your Name Here
# 导出 PDF 的关键词字段，逗号分隔
keywords: keyword1,keyword2

# 启用演讲者模式，可以是布尔值、'dev' 或 'build'
presenter: true
# 启用浏览器导出器，可以是布尔值、'dev' 或 'build'
browserExporter: dev
# 启用 SPA 构建中的 PDF 下载，也可以是自定义 URL
download: false
# 导出文件的文件名
exportFilename: slidev-exported
# 导出选项
# 使用驼峰命名格式的 export CLI 选项
# 了解更多：https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# 启用 twoslash，可以是布尔值、'dev' 或 'build'
twoslash: true
# 在代码块中显示行号
lineNumbers: false
# 启用 Monaco 编辑器，可以是布尔值、'dev' 或 'build'
monaco: true
# Monaco 类型的加载位置，可以是 'cdn'、'local' 或 'none'
monacoTypesSource: local
# 明确指定要导入类型的额外本地包
monacoTypesAdditionalPackages: []
# 明确指定作为 Monaco 可运行代码依赖项的额外本地模块
monacoRunAdditionalDeps: []
# 使用 vite-plugin-remote-assets 将远程资源下载到本地，可以是布尔值、'dev' 或 'build'
remoteAssets: false
# 控制幻灯片中的文字是否可选择
selectable: true
# 启用幻灯片录制，可以是布尔值、'dev' 或 'build'
record: dev
# 启用 Slidev 的上下文菜单，可以是布尔值、'dev' 或 'build'
contextMenu: true
# 启用唤醒锁，可以是布尔值、'dev' 或 'build'
wakeLock: true
# 在概览中为每张幻灯片拍摄快照
overviewSnapshots: false

# 强制幻灯片的颜色模式，可以是 'auto'、'light' 或 'dark'
colorSchema: auto
# vue-router 的路由模式，可以是 "history" 或 "hash"
routerMode: history
# 幻灯片的宽高比
aspectRatio: 16/9
# 画布的实际宽度，单位为 px
canvasWidth: 980
# 用于主题自定义，将为属性 `x` 注入根样式 `--slidev-theme-x`
themeConfig:
  primary: '#5d8392'

# favicon，可以是本地文件路径或 URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# 用于渲染图表的 PlantUML 服务器 URL
# 了解更多：https://sli.dev/features/plantuml.html
plantUmlServer: https://www.plantuml.com/plantuml
# 字体将从 Google fonts 自动导入
# 了解更多：https://sli.dev/custom/config-fonts.html
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# 应用于所有幻灯片的默认 frontmatter
defaults:
  layout: default
  # ...

# 绘图选项
# 了解更多：https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML 标签属性
htmlAttrs:
  dir: ltr
  lang: en

# SEO meta 标签
seoMeta:
  ogTitle: Slidev Starter Template
  ogDescription: Presentation slides for developers
  ogImage: https://cover.sli.dev
  ogUrl: https://example.com
  twitterCard: summary_large_image
  twitterTitle: Slidev Starter Template
  twitterDescription: Presentation slides for developers
  twitterImage: https://cover.sli.dev
  twitterSite: username
  twitterUrl: https://example.com
---
```

查看[类型定义](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts)了解更多详情。

## 单张幻灯片配置 {#frontmatter}

每张幻灯片也可以在其 frontmatter 块中接受以下配置。以下显示每个选项的默认值：

```yaml
---
# 自定义点击次数
# 了解更多：https://sli.dev/guide/animations#total
clicks: 0
# 自定义起始点击次数
clicksStart: 0
# 完全禁用并隐藏幻灯片
disabled: false
# 与 `disabled` 相同
hide: false
# 在 <Toc> 组件中隐藏幻灯片
hideInToc: false
# 定义应用于幻灯片的布局组件
layout: <如果是第一张幻灯片则为 "cover"，否则为 "default">
# 覆盖 <TitleRenderer> 和 <Toc> 组件的标题级别
# 仅当 `title` 也已声明时有效
level: 1
# 在进入前挂载此幻灯片
preload: true
# 创建可在 URL 或 <Link> 组件中使用的路由别名
routeAlias: undefined # 或 string
# 包含一个 markdown 文件
# 了解更多：https://sli.dev/guide/syntax.html#importing-slides
src: undefined # 或 string
# 覆盖 <TitleRenderer> 和 <Toc> 组件的标题
# 仅当 `title` 也已声明时有效
title: undefined # 或 string
# 定义幻灯片与下一张之间的过渡
# 了解更多：https://sli.dev/guide/animations.html#slide-transitions
transition: undefined # 或 BuiltinSlideTransition | string | TransitionGroupProps | null
# 自定义缩放比例
# 对于内容较多的幻灯片很有用
zoom: 1
# 用作可拖动元素的位置
# 了解更多：https://sli.dev/features/draggable.html
dragPos: {} # type: Record<string, string>
---
```

查看[类型定义](https://github.com/slidevjs/slidev/blob/main/packages/types/src/frontmatter.ts#L260)了解更多详情。

## 目录结构 {#directory-structure}

Slidev 使用目录结构约定来最小化配置并使功能扩展灵活直观。

请参阅[目录结构](/custom/directory-structure)章节。

## 配置工具 {#config-tools}

<script setup>
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import customizations from '../.vitepress/customizations'
</script>

<li v-for="c of customizations.slice(2)" :key="c.text">
  <VPLink :href="c.link">
    {{ c.text }}
  </VPLink>
</li>
