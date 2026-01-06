# 配置路由

<Environment type="client" />

向 Slidev 应用添加自定义页面。

## 使用方法 {#usage}

创建 `./setup/routes.ts`，内容如下：

```ts twoslash [./setup/routes.ts]
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      // ---cut-start---
      // @ts-expect-error missing types
      // ---cut-end---
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

在 [Vue Router 文档](https://router.vuejs.org/)中了解更多关于路由的信息。
