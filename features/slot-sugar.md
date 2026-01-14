---
relates:
  - Vue's 具名插槽: https://cn.vuejs.org/guide/components/slots#named-slots
tags: [布局, 语法]
description: |
  布局中具名插槽的语法糖。
---

# 布局的插槽语法糖

某些布局可以使用 [Vue 的具名插槽](https://vuejs.org/guide/components/slots.html)提供多个内容插入点。

例如，在 [`two-cols` 布局](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue)中，你可以并排显示左侧（`default` 插槽）和右侧（`right` 插槽）两列。

```md
---
layout: two-cols
---

<template v-slot:default>

# 左侧

这显示在左侧

</template>
<template v-slot:right>

# 右侧

这显示在右侧

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>左侧</h3>
<p>这显示在左侧</p>
</div>
<div>
<h3>右侧</h3>
<p>这显示在右侧</p>
</div>
</div>

我们还提供了插槽名称的简写语法糖 `::name::`。以下与前面的示例完全相同。

```md
---
layout: two-cols
---

# 左侧

这显示在左侧

::right::

# 右侧

这显示在右侧
```

你也可以明确指定默认插槽并以自定义顺序提供。

```md
---
layout: two-cols
---

::right::

# 右侧

这显示在右侧

::default::

# 左侧

这显示在左侧
```
