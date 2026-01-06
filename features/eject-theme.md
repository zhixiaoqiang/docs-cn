---
depends:
  - guide/theme-addon
tags: [theme, cli]
description: |
  将已安装的主题弹出到本地以进行自定义。
---

# 弹出主题

如果你想完全控制当前主题，可以将其**弹出**到本地文件系统并按需修改。运行以下命令

```bash
$ slidev theme eject
```

它会将你当前使用的主题弹出到 `./theme`，并将你的 frontmatter 更改为

```yaml
---
theme: ./theme
---
```

如果你想基于现有主题创建一个新主题，这也很有帮助。如果你这样做，记得注明原始主题和作者 :)

有关 `theme` 命令的更多选项，请参阅 [Theme 命令](../builtin/cli#theme)章节。
