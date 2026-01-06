---
relates:
  - vite-plugin-remote-assets: https://github.com/antfu/vite-plugin-remote-assets
tags: [build]
description: |
  在构建幻灯片时下载并打包远程资源。
---

# 打包远程资源

就像在 markdown 中一样，你可以使用指向远程或本地 URL 的图片。

对于远程资源，内置的 [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) 会在首次运行时将它们缓存到磁盘，确保即使是大图片也能在之后即时加载。

```md
![Remote Image](https://sli.dev/favicon.png)
```

对于本地资源，将它们放在 [`public` 文件夹](/custom/directory-structure.html#public)中，并使用**前导斜杠**引用它们（即 `/pic.png`，而不是 `./pic.png`，后者是相对于工作文件的路径）。

```md
![Local Image](/pic.png)
```

如果你想应用自定义大小或样式，可以将它们转换为 `<img>` 标签：

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```
