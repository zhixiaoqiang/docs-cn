export interface ThemeInfo {
  id: string
  name: string
  description: string
  previews: string[]
  repo?: string
  author: {
    name: string
    link?: string
  }
  link?: string
  tags?: string[]
}

export const official: ThemeInfo[] = [
  {
    id: '@slidev/theme-default',
    name: 'Default',
    description: 'Slidev 的极简默认主题',
    author: {
      name: 'Anthony Fu',
      link: 'https://github.com/antfu',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-default',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/02.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/06.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-default/08.png',
    ],
    tags: [
      '官方',
      '极简',
      '深色',
      '浅色',
    ],
  },
  {
    id: '@slidev/theme-seriph',
    name: 'Seriph',
    description: '使用衬线字体的更正式主题',
    author: {
      name: 'Anthony Fu',
      link: 'https://github.com/antfu',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-seriph',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/02.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/03.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-seriph/08.png',
    ],
    tags: [
      '官方',
      '极简',
      '深色',
      '浅色',
    ],
  },
  {
    id: '@slidev/theme-apple-basic',
    name: 'Apple Basic',
    description: '灵感来自 Apple Keynote 的 Basic Black/White 主题',
    author: {
      name: 'Jeremy Meissner',
      link: 'https://github.com/JeremyMeissner',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-apple-basic',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/02.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/03.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/09.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-apple-basic/11.png',
    ],
    tags: [
      '极简',
      '深色',
      '浅色',
    ],
  },
  {
    id: '@slidev/theme-bricks',
    name: 'Bricks',
    description: '积木风格主题',
    author: {
      name: 'iiiiiiinès',
      link: 'https://github.com/iiiiiiines',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-bricks',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/04.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/06.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-bricks/05.png',
    ],
    tags: [
      '浅色',
    ],
  },
  {
    id: '@slidev/theme-shibainu',
    name: 'Shibainu',
    description: '喵！',
    author: {
      name: 'iiiiiiinès',
      link: 'https://github.com/iiiiiiines',
    },
    repo: 'https://github.com/slidevjs/themes/tree/main/packages/theme-shibainu',
    previews: [
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/01.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/03.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/04.png',
      'https://cdn.jsdelivr.net/gh/slidevjs/themes@main/screenshots/theme-shibainu/09.png',
    ],
    tags: [
      '深色',
    ],
  },
]

export const community: ThemeInfo[] = [
  {
    id: 'slidev-theme-geist',
    name: 'Vercel',
    description: '基于 Vercel 设计系统的主题',
    author: {
      name: 'Nico Bachner',
      link: 'https://github.com/nico-bachner',
    },
    repo: 'https://github.com/nico-bachner/slidev-theme-geist',
    previews: [
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/01.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/02.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/03.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/04.png',
      'https://cdn.jsdelivr.net/gh/nico-bachner/slidev-theme-geist@main/example-export/05.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-light-icons',
    name: 'Light Icons',
    description: '一个简洁、明亮、优雅的 Slidev 主题，结合创意布局、自定义组件和字体',
    author: {
      name: 'Pulkit Aggarwal',
      link: 'https://github.com/BashCloud',
    },
    repo: 'https://github.com/lightvue/slidev-theme-light-icons',
    previews: [
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/1-layout-intro.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/2-layout-image-header-intro-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/3-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/5-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/7-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/8-layout-center-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/9-layout-dynamic-image-light.png',
      'https://cdn.jsdelivr.net/gh/lightvue/slidev-theme-light-icons@master/screenshot/10-layout-left-image-light.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-eloc',
    name: 'Eloc',
    description: '专注于写作，以简洁风格呈现',
    author: {
      name: 'Amio',
      link: 'https://github.com/amio',
    },
    repo: 'https://github.com/zthxxx/slides/tree/master/packages/slidev-theme-eloc',
    previews: [
      'https://cdn.jsdelivr.net/gh/zthxxx/slides@master/packages/slidev-theme-eloc/screenshot/01.png',
      'https://cdn.jsdelivr.net/gh/zthxxx/slides@master/packages/slidev-theme-eloc/screenshot/02.png',
      'https://cdn.jsdelivr.net/gh/zthxxx/slides@master/packages/slidev-theme-eloc/screenshot/03.png',
      'https://cdn.jsdelivr.net/gh/zthxxx/slides@master/packages/slidev-theme-eloc/screenshot/04.png',
      'https://cdn.jsdelivr.net/gh/zthxxx/slides@master/packages/slidev-theme-eloc/screenshot/05.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-purplin',
    name: 'Purplin',
    description: '带有底部栏组件的主题，基于紫色设计',
    author: {
      name: 'Mauricio Martínez',
      link: 'https://github.com/moudev',
    },
    repo: 'https://github.com/moudev/slidev-theme-purplin',
    previews: [
      'https://i.imgur.com/BX3TpEc.png',
      'https://i.imgur.com/mqqRi1F.png',
      'https://i.imgur.com/fwm2785.png',
      'https://i.imgur.com/m8eemKt.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-unicorn',
    name: 'Unicorn',
    description: '基于 Dawntraoz 网站设计',
    author: {
      name: 'Alba Silvente',
      link: 'https://github.com/dawntraoz',
    },
    repo: 'https://github.com/dawntraoz/slidev-theme-unicorn',
    previews: [
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/dark-theme-intro.png',
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/light-theme-cover.png',
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/dark-theme-image-centered.png',
      'https://cdn.jsdelivr.net/gh/Dawntraoz/slidev-theme-unicorn@master/screenshots/dark-theme-center-without-header-footer.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-zhozhoba',
    name: 'Zhozhoba',
    description: 'Slidev 的 Zhozhoba 主题',
    author: {
      name: 'Bogenbai Bayzharassov',
      link: 'https://github.com/thatoranzhevyy',
    },
    repo: 'https://github.com/thatoranzhevyy/slidev-theme-zhozhoba',
    previews: [
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/01.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/.github/dark.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/02.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/03.png',
      'https://cdn.jsdelivr.net/gh/thatoranzhevyy/slidev-theme-zhozhoba@master/slides-export/04.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-penguin',
    name: 'Penguin',
    description: 'Slidev 的企鹅主题',
    author: {
      name: 'Alvaro Saburido',
      link: 'https://github.com/alvarosaburido',
    },
    repo: 'https://github.com/alvarosaburido/slidev-theme-penguin',
    previews: [
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/dark/01.png',
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/light/02.png',
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/light/06.png',
      'https://cdn.jsdelivr.net/gh/alvarosaburido/slidev-theme-penguin@master/screenshots/light/05.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-vuetiful',
    name: 'Vuetiful',
    description: 'Vue 风格的 Slidev 主题',
    author: {
      name: 'Thorsten Lünborg',
      link: 'https://github.com/LinusBorg',
    },
    repo: 'https://github.com/LinusBorg/slidev-theme-vuetiful',
    previews: [
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/cover-alt.png',
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/section.png',
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/big-points.png',
      'https://cdn.jsdelivr.net/gh/LinusBorg/slidev-theme-vuetiful@main/screenshots/quote.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-takahashi',
    name: 'Takahashi',
    description: '一个简单的 Slidev 主题',
    author: {
      name: 'Percy M.',
      link: 'https://github.com/kecrily',
    },
    repo: 'https://github.com/kecrily/slidev-theme-takahashi',
    previews: [
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/01.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/02.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/03.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/04.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/05.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/06.png',
      'https://cdn.jsdelivr.net/gh/kecrily/slidev-theme-takahashi@master/screenshots/07.png',
    ],
    tags: [
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-academic',
    name: 'Academic',
    description: '使用 Slidev 轻松创建学术演示',
    author: {
      name: 'Alexander Eble',
      link: 'https://github.com/alexanderdavide',
    },
    repo: 'https://github.com/alexanderdavide/slidev-theme-academic',
    previews: [
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/01.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/02.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/08.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/04.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/05.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/06.png',
      'https://cdn.jsdelivr.net/gh/alexanderdavide/slidev-theme-academic@assets/example-export/07.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-mokkapps',
    name: 'Mokkapps',
    description: '个人品牌 "Mokkapps" 的主题',
    author: {
      name: 'Michael Hoffmann',
      link: 'https://github.com/mokkapps',
    },
    repo: 'https://github.com/mokkapps/slidev-theme-mokkapps',
    previews: [
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/001.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/002.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/003.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/004.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/005.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/006.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/007.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/008.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/009.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/010.png',
      'https://cdn.jsdelivr.net/gh/mokkapps/slidev-theme-mokkapps@master/screenshots/dark/011.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-the-unnamed',
    name: 'The unnamed',
    description: '基于 The unnamed VS Code 主题',
    author: {
      name: 'Elio Struyf',
      link: 'https://elio.dev',
    },
    repo: 'https://github.com/estruyf/slidev-theme-the-unnamed',
    previews: [
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/cover.png',
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/about-me.png',
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/default.png',
      'https://cdn.jsdelivr.net/gh/estruyf/slidev-theme-the-unnamed@main/assets/section.png',
    ],
    tags: [
      '深色',
    ],
  },
  {
    id: 'slidev-theme-dracula',
    name: 'Dracula',
    description: '最佳深色主题之一与 Slidev 的结合',
    author: {
      name: 'JD Solanki',
      link: 'https://github.com/jd-solanki',
    },
    repo: 'https://github.com/jd-solanki/slidev-theme-dracula',
    previews: [
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-1.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-2.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-3.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-4.png',
      'https://cdn.jsdelivr.net/gh/jd-solanki/slidev-theme-dracula/screenshots/screenshot-5.png',
    ],
    tags: [
      '深色',
      '极简',
    ],
  },
  {
    id: 'slidev-theme-frankfurt',
    name: 'Frankfurt',
    description: '灵感来自 Beamer 的 Frankfurt 主题',
    author: {
      name: 'Mu-Tsun Tsai',
      link: 'https://github.com/MuTsunTsai',
    },
    repo: 'https://github.com/MuTsunTsai/slidev-theme-frankfurt',
    previews: [
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/01.png',
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/04.png',
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/06.png',
      'https://cdn.jsdelivr.net/gh/MuTsunTsai/slidev-theme-frankfurt/screenshots/07.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-hep',
    name: 'HEP',
    description: '高能物理学的学术风格',
    author: {
      name: 'Yulei ZHANG',
      link: 'https://github.com/AvencastF',
    },
    repo: 'https://github.com/AvencastF/slidev-theme-hep',
    previews: [
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/001.png',
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/004.png',
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/006.png',
      'https://cdn.jsdelivr.net/gh/avencastf/slidev-theme-hep/screenshot/008.png',
    ],
    tags: [
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-excali-slide',
    name: 'Excali-slide',
    description: '基于 Excalidraw 的主题，带有动态高亮器效果',
    author: {
      name: 'Filip Hric',
      link: 'https://github.com/filiphric',
    },
    repo: 'https://github.com/filiphric/slidev-theme-excali-slide',
    previews: [
      'https://raw.githubusercontent.com/filiphric/excali-slide/main/images/default_slide.png',
      'https://raw.githubusercontent.com/filiphric/excali-slide/main/images/intro_slide.png',
    ],
    tags: [
      '深色',
      '浅色',
    ],
  },
  {
    id: 'slidev-theme-mint',
    name: 'mint',
    description: 'Slidev 薄荷主题',
    author: {
      name: 'Alfatta Rezqa',
      link: 'https://github.com/alfatta',
    },
    repo: 'https://github.com/alfatta/slidev-theme-mint',
    previews: [
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/1.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/2.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/3.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/4.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/5.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/6.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/7.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/8.png',
      'https://cdn.jsdelivr.net/gh/alfatta/slidev-theme-mint/screenshot/9.png',
    ],
    tags: [
      '浅色',
      '薄荷',
      '绿色',
      '清爽',
    ],
  },
  {
    id: 'slidev-theme-neversink',
    name: 'neversink',
    description: 'Slidev Neversink 主题',
    author: {
      name: 'Todd M. Gureckis',
      link: 'https://github.com/gureckis',
    },
    repo: 'https://github.com/gureckis/slidev-theme-neversink',
    previews: [
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/2.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/6.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/8.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/15.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/18.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/22.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/26.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/34.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/36.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/38.png',
      'https://gureckis.github.io/slidev-theme-neversink/screenshots/35.png',
    ],
    tags: [
      '浅色',
      '学术',
      '教育',
    ],
  },
  {
    id: 'slidev-theme-ktym4a',
    name: 'ktym4a',
    description: '基于 ktym4a 网站设计',
    author: {
      name: 'ktym4a',
      link: 'https://github.com/ktym4a',
    },
    repo: 'https://github.com/ktym4a/slidev-theme-ktym4a',
    previews: [
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/0.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/1.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/6.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/7.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/rotation/8.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/0.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/1.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/3.png',
      'https://cdn.jsdelivr.net/gh/ktym4a/slidev-theme-ktym4a@main/example-export/single/4.png',
    ],
    tags: [
      '深色',
      'catppuccin',
    ],
  },
  {
    id: 'slidev-theme-nord',
    name: 'Nord',
    description: '基于 Nord 主题',
    author: {
      name: 'David Ollerhead',
      link: 'https://github.com/oller',
    },
    repo: 'https://github.com/oller/slidev-theme-nord',
    previews: [
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/1.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/2.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/3.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/4.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/5.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/6.png',
      'https://raw.githubusercontent.com/oller/slidev-theme-nord/HEAD/example-export/7.png',
    ],
    tags: [
      '深色',
      '浅色',
      'nord',
    ],
  },
  // 在此添加你的主题！
  {
    id: '',
    link: 'https://github.com/slidevjs/slidev/edit/main/docs/.vitepress/themes.ts',
    name: '你的主题？',
    description: '点击此处提交你的主题 :)',
    author: {
      name: '',
    },
    previews: [
      '/theme-placeholder.png',
    ],
  },
]
