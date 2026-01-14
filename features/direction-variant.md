---
relates:
  - UnoCSS Variants: https://unocss.dev/config/variants#variants
since: v0.48.0
tags: [导航, 样式]
description: |
  根据导航方向应用不同的样式和动画。
---

# 导航方向变体

你可能想根据前进或后退的导航方向应用不同的类。在导航时，`.slidev-nav-go-forward` 或 `.slidev-nav-go-backward` 类会应用到幻灯片容器上，你可以使用它们应用不同的样式或动画：

```css
/* 示例：仅在前进时延迟，后退时不延迟 */
.slidev-nav-go-forward .slidev-vclick-target {
  transition-delay: 500ms;
}
.slidev-nav-go-backward .slidev-vclick-target {
  transition-delay: 0;
}
```

为了更方便，我们还为此提供了一些 [UnoCSS 变体](https://github.com/slidevjs/slidev/blob/6adcf2016b8fb0cab65cf150221f1f67a76a2dd8/packages/client/uno.config.ts#L32-L38)。你可以使用 `forward:` 或 `backward:` 前缀到任何 UnoCSS 类，使它们仅在特定的导航方向上启用：

```html
<div v-click class="transition delay-300">Element</div> // [!code --]
<div v-click class="transition forward:delay-300">Element</div> // [!code ++]
```

在上面的示例中，动画仅在前进导航时延迟。
