---
relates:
  - guide/ui
  - CLI: builtin/cli
  - Cloudflare Quick Tunnels: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/
tags: [remote, tool]
description: |
  使用 Slidev 的远程访问功能远程访问你的演示文稿。
---

# 远程访问

你可以使用 `--remote` 标志来运行支持远程访问的演示：

::: code-group

```bash [pnpm]
pnpm dev --remote
# 即 slidev --remote
```

```bash [npm]
npm run dev -- --remote
# 即 slidev --remote
```

```bash [yarn]
yarn dev --remote
# 即 slidev --remote
```

```bash [bun]
bun dev --remote
# 即 slidev --remote
```

```bash [deno]
deno run dev --remote
# 即 slidev --remote
```

:::

## 密码保护

如果你想分享幻灯片但不希望其他人访问演讲者模式，你可以为选项传递一个密码，即 `--remote=your_password`。然后访问演讲者模式时需要输入密码。

## 远程隧道

你可以打开一个 [Cloudflare Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/) 将你的本地服务器暴露到互联网上。这样，你可以与他人分享你的幻灯片而无需设置服务器。

::: code-group

```bash [pnpm]
pnpm dev --remote --tunnel
# 即 slidev --remote --tunnel
```

```bash [npm]
npm run dev -- --remote --tunnel
# 即 slidev --remote --tunnel
```

```bash [yarn]
yarn dev --remote --tunnel
# 即 slidev --remote --tunnel
```

```bash [bun]
bun dev --remote --tunnel
# 即 slidev --remote --tunnel
```

```bash [deno]
deno run dev --remote --tunnel
# 即 slidev --remote --tunnel
```

:::
