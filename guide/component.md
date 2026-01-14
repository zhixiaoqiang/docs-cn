# 幻灯片中的组件

Slidev 最强大的功能之一是能够直接在幻灯片中使用 Vue 组件。这让你可以轻松创建交互式和动态内容。

## 使用组件 {#use}

借助 [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components)，Slidev 允许你直接在幻灯片中使用 Vue 组件，无需手动导入：

```md
# My Slide

<MyComponent :count="4"/>
```

这些组件来自：

- 内置组件。参见[内置组件](../builtin/components)了解详情。
- 主题和插件提供的组件。参见 <LinkInline link="guide/theme-addon" />。
- `components` 目录中的自定义组件。参见下一节。

## 编写组件 {#write}

要创建自定义组件，只需在 `components` 目录中创建一个新的 Vue 文件：

```bash
your-slidev/
  ├── ...
  ├── slides.md
  └── components/
      ├── ...
      └── MyComponent.vue
```

有关如何编写 Vue 组件，请参阅 [Vue 文档](https://vuejs.org/guide/essentials/component-basics.html)。

你还可以 <LinkInline link="guide/write-addon" /> 来复用和与他人分享你的组件。
