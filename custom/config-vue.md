# 配置 Vue 应用

<Environment type="client" />

Slidev 使用 [Vue 3](https://v3.vuejs.org/) 在客户端渲染应用。你可以扩展应用以添加自定义插件或配置。

创建 `./setup/main.ts`，内容如下：

<!-- eslint-disable import/first -->

```ts twoslash [setup/main.ts]
import type { Plugin } from 'vue'

declare const YourPlugin: Plugin
// ---cut---
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

这也可以用作 Slidev 应用的主入口，在应用启动前进行一些初始化操作。

了解更多：[Vue 应用 API](https://v3.vuejs.org/api/application-api.html#component)。
