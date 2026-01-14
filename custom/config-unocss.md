# 配置 UnoCSS

<Environment type="node" />

自 v0.42.0 起，[UnoCSS](https://unocss.dev) 现在是 Slidev 的默认 CSS 框架。UnoCSS 是一个快速的原子化 CSS 引擎，具有完全的灵活性和可扩展性。大多数 Tailwind CSS 类**开箱即用**，你还可以使用自己的配置进行扩展。

默认情况下，Slidev 开箱即用启用以下预设：

- [@unocss/preset-wind3](https://unocss.dev/presets/wind3) - Tailwind / Windi CSS 兼容的实用工具
- [@unocss/preset-attributify](https://unocss.dev/presets/attributify) - Attributify 模式
- [@unocss/preset-icons](https://unocss.dev/presets/icons) - 将任何图标用作类
- [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts) - 轻松使用网络字体
- [@unocss/transformer-directives](https://unocss.dev/transformers/directives) - 在 CSS 中使用 `@apply`

Slidev 还添加了一些快捷方式，可以在其[源代码](https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts)中查看。

因此，你可以按自己想要的方式为内容添加样式。例如：

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### 名称

- 项目 1
- 项目 2

</div>
```

## 配置 {#configurations}

你可以在项目根目录下创建 `uno.config.ts` 来扩展内置配置

```ts twoslash [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // 自定义默认背景
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})
```

了解更多关于 [UnoCSS 配置](https://unocss.dev/guide/config-file)
