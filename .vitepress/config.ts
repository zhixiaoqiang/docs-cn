import type { DefaultTheme } from 'vitepress'
import { fileURLToPath } from 'node:url'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../package.json'
import Customizations from './customizations'
import { Advanced, BuiltIn, Guides, Resources } from './pages'
import { getSidebarObject } from './sidebar-gen'

export const slidebars: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: Guides,
  },
  {
    text: '高级',
    items: Advanced,
  },
  {
    text: '自定义',
    items: Customizations,
  },
  {
    text: '内置',
    items: BuiltIn,
  },
  {
    text: '资源',
    items: Resources,
  },
]

export default defineConfig({
  title: 'Slidev',
  description: '面向开发者的演示幻灯片',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: '面向开发者的演示幻灯片' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
        'mermaid',
        'latex',
      )
    },
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          // The @slidev/* installed in docs package are very old and should only be used in the homepage demo
          vfsRoot: fileURLToPath(import.meta.url),
          compilerOptions: {
            resolveJsonModule: true,
            moduleResolution: /* Bundler */ 100,
          },
        },
      }),
    ],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/slidev/edit/main/docs-cn/:path',
      text: '为此页面提出修改建议',
    },

    search: {
      provider: 'local',
    },

    nav: [
      {
        text: '📖 指南',
        items: [
          ...Guides,
          {
            text: '高级',
            items: Advanced,
          },
        ],
      },
      {
        text: '✨ 功能',
        link: '/features/',
      },
      {
        text: '参考',
        items: [
          {
            text: '内置',
            items: BuiltIn,
          },
          {
            text: '自定义',
            items: Customizations,
          },
        ],
      },
      {
        text: '资源',
        items: Resources,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      // eslint-disable-next-line antfu/no-top-level-await
      ...await getSidebarObject(),
      '/features/': [],
      '/': slidebars,
    },

    footer: {
      message: '基于 MIT 许可证发布。',
      copyright: '版权所有 © 2020-2025 Anthony Fu。',
    },

    outline: {
      label: '本页目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
  },

  locales: {
    root: {
      label: `简体中文 (v${version})`,
    },
    en: {
      label: 'English',
      link: 'https://sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
