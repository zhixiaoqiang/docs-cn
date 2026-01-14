---
depends:
  - guide/exporting
  - guide/hosting
relates:
  - CLI export 命令: /builtin/cli#export
  - Headmatter: /custom/#headmatter
tags: [导出, 构建]
description: |
  在构建幻灯片时生成可下载的 PDF。
---

# 构建时生成 PDF

你可以在 headmatter 中使用以下配置，在构建的幻灯片中提供可下载的 PDF：

```md
---
download: true
---
```

Slidev 将在构建时生成 PDF 文件，并在构建产物中显示下载按钮。

你也可以提供 PDF 的自定义 URL。在这种情况下，将跳过渲染过程。

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

这也可以通过 CLI 选项 `--download`（仅支持 `boolean`）完成。

```bash
$ slidev build --download
```

使用下载选项时，你还可以通过以下方式提供导出选项：

- [CLI 导出选项](/builtin/cli#export)
- [Headmatter 导出选项](/custom/#frontmatter-configures)
