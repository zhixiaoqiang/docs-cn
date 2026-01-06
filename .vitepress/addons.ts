import type { ThemeInfo } from './themes'

export type AddonInfo = Omit<ThemeInfo, 'previews'>

export const official: AddonInfo[] = [
  {
    id: '',
    link: '#',
    name: '正在开发中',
    description: '',
    tags: [],
    author: {
      name: '',
    },
  },
]

export const community: AddonInfo[] = [
  {
    id: 'slidev-addon-python-runner',
    name: 'Python Runner',
    description: '在幻灯片中运行真实的 Python 代码',
    tags: ['代码运行器'],
    author: {
      name: '_Kerman',
      link: 'https://github.com/KermanX',
    },
    repo: 'https://github.com/KermanX/slidev-addon-python-runner',
  },
  {
    id: 'slidev-addon-tldraw',
    name: 'tldraw',
    description: '在 Slidev 中直接嵌入 tldraw 图表，支持幻灯片内编辑',
    tags: ['集成', '图表'],
    author: {
      name: 'Albert Brand',
      link: 'https://github.com/AlbertBrand',
    },
    repo: 'https://github.com/AlbertBrand/slidev-addon-tldraw',
  },
  {
    id: 'slidev-addon-typst',
    name: 'Typst',
    description: 'Slidev 的 Typst 插件',
    tags: ['集成', '图表'],
    author: {
      name: 'Shigma',
      link: 'https://github.com/shigma',
    },
    repo: 'https://github.com/shigma/slidev-addon-typst',
  },
  {
    id: 'slidev-addon-fancy-arrow',
    name: 'Fancy Arrow',
    description: '手绘风格箭头，提供多种样式和定位选项',
    tags: ['组件'],
    author: {
      name: 'whitphx',
      link: 'https://github.com/whitphx',
    },
    repo: 'https://github.com/whitphx/slidev-addon-fancy-arrow',
  },
  {
    id: 'slidev-addon-sync',
    name: 'Remote Sync',
    description: '使用 SSE 或 WS 服务器为 Slidev 静态构建提供同步组件',
    tags: ['远程控制', '导航'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-addon-sync',
  },
  {
    id: 'slidev-addon-tikzjax',
    name: 'tikzjax',
    description: '将 TikZ/Chemfig/... 编译为 SVG 并在 Slidev 中显示',
    tags: ['集成', '图表'],
    author: {
      name: 'Ethan Goh',
      link: 'https://github.com/7086cmd',
    },
    repo: 'https://github.com/7086cmd/slidev-addon-tikzjax',
  },
  {
    id: 'slidev-component-pager',
    name: 'Pager',
    description: '显示当前页码和总页数',
    tags: ['组件', '导航'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-pager',
  },
  {
    id: 'slidev-component-poll',
    name: 'Poll and Quiz',
    description: 'Slidev 的投票和问答组件',
    tags: ['组件'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-poll',
  },
  {
    id: 'slidev-component-progress',
    name: 'Progress',
    description: '为 Slidev 显示交互式进度条',
    tags: ['工具', '导航'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-progress',
  },
  {
    id: 'slidev-component-scroll',
    name: 'Mouse Scroll',
    description: '使用鼠标滚轮进行导航',
    tags: ['导航'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-scroll',
  },
  {
    id: 'slidev-component-spotlight',
    name: 'Spotlight',
    description: '按住快捷键激活聚光灯以高亮特定区域',
    tags: ['工具'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-spotlight',
  },
  {
    id: 'slidev-component-zoom',
    name: 'Zooming',
    description: '允许在幻灯片内缩放',
    tags: ['工具'],
    author: {
      name: 'Tony Cabaye',
      link: 'https://github.com/tonai',
    },
    repo: 'https://github.com/Smile-SA/slidev-component-zoom',
  },
  {
    id: 'slidev-addon-rabbit',
    name: 'Rabbit',
    description: '受 Rabbit 启发的 Slidev 演示时间管理工具',
    tags: ['工具', '导航'],
    author: {
      name: 'kaakaa',
      link: 'https://github.com/kaakaa',
    },
    repo: 'https://github.com/kaakaa/slidev-addon-rabbit',
  },
  {
    id: 'slidev-addon-stem',
    name: 'STEM',
    description: '科学演示用的 Slidev 插件',
    tags: ['组件', '布局'],
    author: {
      name: 'yutaka-shoji',
      link: 'https://github.com/yutaka-shoji',
    },
    repo: 'https://github.com/yutaka-shoji/slidev-addon-stem',
  },
  {
    id: 'slidev-addon-naive',
    name: 'Naive UI',
    description: '将 Naive UI 组件引入 Slidev',
    tags: ['组件'],
    author: {
      name: 'Samuel Huang',
      link: 'https://sghuang.com',
    },
    repo: 'https://github.com/sghuang19/slidev-addon-naive',
  },
  {
    id: 'slidev-addon-hls-player',
    name: 'HLS player',
    description: '在幻灯片中添加基于 hls.js 的视频播放器，用于播放 HTTP Live Streaming 视频',
    tags: ['hls', '视频'],
    author: {
      name: 'Albert Brand',
      link: 'https://github.com/AlbertBrand',
    },
    repo: 'https://github.com/AlbertBrand/slidev-addon-hls-player',
  },
  {
    id: 'slidev-addon-window-mockup',
    name: 'Window Mockup',
    description: '样式化的窗口框架',
    tags: ['组件'],
    author: {
      name: 'whitphx',
      link: 'https://github.com/whitphx',
    },
    repo: 'https://github.com/whitphx/slidev-addon-window-mockup',
  },
  // 在此添加你的插件！
  {
    id: '',
    link: 'https://github.com/slidevjs/slidev/edit/main/docs/.vitepress/addons.ts',
    name: '你的插件？',
    description: '点击此处提交你的插件 :)',
    tags: [],
    author: {
      name: '',
    },
  },
]
