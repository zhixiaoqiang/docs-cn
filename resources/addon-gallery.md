---
aside: false
---

<script setup>
import AddonGallery from '../.vitepress/theme/components/AddonGallery.vue'
</script>

# 插件库

在此浏览 Slidev 可用的精彩插件。

阅读更多关于 <LinkInline link="guide/theme-addon#use-addon" /> 来使用它们，以及 <LinkInline link="guide/write-addon" /> 来创建你自己的插件。

## 官方插件

<ClientOnly>
  <AddonGallery collection="official"/>
</ClientOnly>

## 社区插件

以下是社区制作的精选插件。

<!-- Edit in ./docs/.vitepress/addons.ts -->
<ClientOnly>
  <AddonGallery collection="community"/>
</ClientOnly>

## 更多插件

查找所有 [NPM 上可用的插件](https://www.npmjs.com/search?q=keywords%3Aslidev-addon)。
