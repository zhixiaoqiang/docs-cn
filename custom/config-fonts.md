# 配置字体

虽然你可以使用 HTML 和 CSS 来自定义幻灯片的字体和样式，Slidev 也提供了一种便捷的方式来轻松使用它们。

在你的 frontmatter 中，按如下方式配置：

```yaml
---
fonts:
  # 基本文本字体
  sans: Robot
  # 配合 UnoCSS 的 `font-serif` css 类使用
  serif: Robot Slab
  # 用于代码块、内联代码等
  mono: Fira Code
---
```

就这样。

字体将**通过 CDN 从提供商自动导入，默认是 [Google Fonts](https://fonts.google.com/)**。这意味着你可以直接使用 Google Fonts 上可用的任何字体。

## 本地字体

默认情况下，Slidev 假设通过 `fonts` 配置指定的所有字体都来自 Google Fonts。如果你想使用本地字体，请指定 `fonts.local` 来禁用自动导入。

```yaml
---
fonts:
  # 像 css 中的 font-family 一样，你可以使用 `,` 分隔多个字体作为备选
  sans: 'Helvetica Neue,Robot'
  # 将 'Helvetica Neue' 标记为本地字体
  local: Helvetica Neue
---
```

## 字重和斜体

默认情况下，Slidev 为每种字体导入三种字重 `200`、`400`、`600`。你可以通过以下方式配置：

```yaml
---
fonts:
  sans: Robot
  # 默认
  weights: '200,400,600'
  # 导入斜体字体，默认 `false`
  italic: false
---
```

此配置适用于所有网络字体。要更精细地控制每种字体的字重，你需要手动通过 [HTML](/custom/directory-structure.html#index-html) 和 CSS 导入它们。

## 备选字体

对于大多数场景，你只需要指定"特殊字体"，Slidev 会为你追加备选字体，例如：

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

将产生

<!-- eslint-skip -->

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

如果你想禁用备选字体，请按以下方式配置：

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## 提供商

- 选项：`google` | `coollabs` | `none`
- 默认：`google`

目前只支持 [Google Fonts](https://fonts.google.com/) 和 [coolLabs](https://fonts.coollabs.io/)，我们计划在未来添加更多提供商。指定为 `none` 将完全禁用自动导入功能并将所有字体视为本地字体。

```yaml
---
fonts:
  provider: none
---
```
