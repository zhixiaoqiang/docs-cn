---
outline: deep
---

# 用户界面

## 导航栏 {#navigation-bar}

在播放模式下，将鼠标移到页面左下角，你可以看到导航栏。
![](/screenshots/navbar.png)

> 你可以通过 <LinkInline link="features/global-layers" /> 扩展导航栏。

## 导航操作 {#navigation-actions}

| 键盘快捷键                           | 导航栏按钮                                                                             | 描述                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <kbd>f</kbd>                        | <carbon-maximize class="inline-icon-btn"/> <carbon-minimize class="inline-icon-btn"/> | 切换全屏                                                         |
| <kbd>right</kbd> / <kbd>space</kbd> | <carbon-arrow-right class="inline-icon-btn"/>                                         | 下一个动画或幻灯片                                                |
| <kbd>left</kbd>                     | <carbon-arrow-left class="inline-icon-btn"/>                                          | 上一个动画或幻灯片                                                |
| <kbd>up</kbd>                       | -                                                                                     | 上一张幻灯片                                                     |
| <kbd>down</kbd>                     | -                                                                                     | 下一张幻灯片                                                     |
| <kbd>o</kbd>                        | <carbon-apps class="inline-icon-btn"/>                                                | 切换[快速概览](#quick-overview)                                   |
| <kbd>d</kbd>                        | <carbon-sun class="inline-icon-btn"/> <carbon-moon class="inline-icon-btn"/>          | 切换深色模式                                                     |
| -                                   | <carbon-user-avatar class="inline-icon-btn"/>                                         | 切换[摄像头视图](../features/recording#camera-view)               |
| -                                   | <carbon-video class="inline-icon-btn"/>                                               | 开始 <LinkInline link="features/recording" />                    |
| -                                   | <carbon-user-speaker class="inline-icon-btn"/>                                        | 进入[演讲者模式](#presenter-mode)                                 |
| -                                   | <carbon-text-annotation-toggle class="inline-icon-btn"/>                              | 切换 <LinkInline link="features/side-editor" />                  |
| -                                   | <carbon-document-pdf class="inline-icon-btn"/>                                        | 进入[浏览器导出器](#exporter)                                     |
| -                                   | <carbon-download class="inline-icon-btn"/>                                            | 下载 PDF。参见 <LinkInline link="features/build-with-pdf" />      |
| -                                   | <carbon-information class="inline-icon-btn"/>                                         | 显示幻灯片信息                                                    |
| -                                   | <carbon-settings-adjust class="inline-icon-btn"/>                                     | 更多选项                                                         |
| <kbd>g</kbd>                        | -                                                                                     | 显示跳转...                                                      |

> 你可以[配置快捷键](../custom/config-shortcuts)。

## 快速概览 {#quick-overview}

按下 <kbd>o</kbd> 或点击导航栏中的 <carbon-apps class="inline-icon-btn"/> 按钮，你可以获得幻灯片的概览，方便在它们之间快速跳转。

![](/screenshots/slides-overview.png)

## 演讲者模式 {#presenter-mode}

要进入演讲者模式，你可以点击导航面板中的 <carbon-user-speaker class="inline-icon-btn"/> 按钮，或访问 `http://localhost:<port>/presenter`。

在进行演讲时，建议打开两个浏览器窗口 - 一个用播放模式展示给观众，另一个用演讲者模式留给自己。然后你可以将第一个屏幕分享给观众，并将第二个屏幕留给自己。

每当你在演讲者模式中导航幻灯片时，所有其他打开的页面都会自动跟随此导航，与演讲者保持同步。

![](/screenshots/presenter-mode.png)

## 幻灯片概览 {#slides-overview}

> 自 v0.48.0 起可用

<video src="https://github.com/slidevjs/slidev/assets/11247099/01bbf5b3-f916-4646-9ea4-cf269c0567cb"
controls rounded shadow></video>

你可以通过先打开[快速概览面板](#quick-overview)然后点击右上角的 <carbon-list-boxes class="inline-icon-btn"/> 来访问所有幻灯片的概览，或者直接访问 `http://localhost:<port>/overview`。

概览页面会给你一个所有幻灯片的线性列表，所有备注显示在侧边。你可以双击备注直接编辑，并拖动点击滑块来预览幻灯片中的步骤。

## 绘图界面 {#drawing}

参见：

<LinkCard link="features/drawing" />

## 录制界面 {#recording}

参见：

<LinkCard link="features/recording"/>

## 浏览器导出器 {#exporter}

参见：

<LinkCard link="guide/exporting#browser"/>

## 全局图层 {#global-layers}

你可以在整个演示文稿或单张幻灯片的幻灯片下方或上方添加任何自定义 UI：

<LinkCard link="features/global-layers" />
