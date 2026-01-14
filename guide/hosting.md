---
outline: deep
---

# 构建和部署

Slidev 设计为在你编辑或演示幻灯片时作为 Web 服务器运行。但是，在演示结束后，你可能仍想与他人分享你的**交互式**幻灯片。本指南将向你展示如何构建和托管你的幻灯片。

## 构建为静态网页 {#spa}

你可以通过以下命令将幻灯片构建为静态的[单页应用 (SPA)](https://developer.mozilla.org/en-US/docs/Glossary/SPA)：

```bash
$ slidev build
```

默认情况下，生成的文件放在 `dist` 文件夹中。你可以运行 `npx vite preview` 或任何其他静态服务器来测试构建后的幻灯片。

### 基础路径 {#base}

要将幻灯片部署在子路由下，你需要传递 `--base` 选项。`--base` 路径**必须以斜杠 `/` 开头和结尾**。例如：

```bash
$ slidev build --base /talks/my-cool-talk/
```

有关更多详情，请参阅 [Vite 的文档](https://vitejs.dev/guide/build.html#public-base-path)。

### 输出目录 {#output-directory}

你可以使用 `--out` 更改输出目录。

```bash
$ slidev build --out my-build-folder
```

### 移除演讲者备注 {#without-notes}

如果你要公开分享构建后的幻灯片并且不想包含你的演讲者备注，请使用 `--without-notes` 运行构建：

```bash
$ slidev build --without-notes
```

### 多个幻灯片 {#multiple-builds}

你可以通过传递多个 markdown 文件作为参数一次性构建多个幻灯片：

```bash
$ slidev build slides1.md slides2.md
```

或者如果你的 shell 支持，你可以使用 glob 模式：

```bash
$ slidev build *.md
```

在上例中，每个输入文件将在输出目录中生成一个包含构建的文件夹。

### 示例 {#examples}

以下是一些导出的 SPA 示例：

- [Demo Slides](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)
- 更多请查阅 [案例展示](../resources/showcases)

### 选项 {#options}

<LinkCard link="features/build-with-pdf" />
<LinkCard link="features/bundle-remote-assets" />

## 静态部署 {#hosting}

我们建议使用 `npm init slidev@latest` 来搭建你的项目，它包含开箱即用的托管服务配置文件。

### GitHub Pages {#github-pages}

要通过 GitHub Actions 将幻灯片部署到 [GitHub Pages](https://pages.github.com/)，请按以下步骤操作：

1. 在你的仓库中，进入 `Settings` > `Pages`。在 `Build and deployment` 下，选择 `GitHub Actions`。（不要选择 `Deploy from a branch` 并上传 `dist` 目录，这不推荐。）
2. 创建 `.github/workflows/deploy.yml`，内容如下，通过 GitHub Actions 将幻灯片部署到 GitHub Pages。

::: details deploy.yml

```yaml
name: Deploy pages

on:
  workflow_dispatch:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Setup @antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: nci

      - name: Build
        run: nr build --base /${{github.event.repository.name}}/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

:::

3. 提交并推送更改到你的仓库。每次你推送到 `main` 分支时，GitHub Actions 工作流将自动将幻灯片部署到 GitHub Pages。
4. 你可以在 `https://<username>.github.io/<repository-name>/` 访问你的幻灯片。

### Netlify {#netlify}

在项目根目录创建 `netlify.toml`，内容如下：

::: details netlify.toml

```toml
[build]
publish = 'dist'
command = 'npm run build'

[build.environment]
NODE_VERSION = '20'

[[redirects]]
from = '/*'
to = '/index.html'
status = 200
```

:::

然后进入你的 [Netlify dashboard](https://netlify.com/) 并使用该仓库创建一个新站点。

### Vercel {#vercel}

在项目根目录创建 `vercel.json`，内容如下：

::: details vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

:::

然后进入你的 [Vercel dashboard](https://vercel.com/) 并使用该仓库创建一个新站点。

### 在 Docker 上部署 {#docker}

如果你需要一种快速的方式在容器中运行演示，你可以使用由 [tangramor](https://github.com/tangramor) 维护的预构建 [docker 镜像](https://hub.docker.com/r/tangramor/slidev)，或者构建你自己的。

::: details 使用 Docker 镜像

只需在你的工作文件夹中运行以下命令：

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_注意_**：你可以使用 `NPM_MIRROR` 指定 npm 镜像以加速安装过程。

如果你的工作文件夹为空，它将在工作文件夹下生成模板 `slides.md` 和其他相关文件，并在端口 `3030` 启动服务器。

你可以通过 `http://localhost:3030/` 访问你的幻灯片

要为你的幻灯片创建 Docker 镜像，你可以使用以下 Dockerfile：

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

创建 docker 镜像：`docker build -t myslides .`

然后运行容器：`docker run --name myslides --rm --user node -p 3030:3030 myslides`

你可以在 `http://localhost:3030/` 访问你的幻灯片

:::
