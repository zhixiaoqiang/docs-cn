---
tags: [演示模式]
description: 演讲者模式的计时器。
---

# 演讲者计时器

Slidev 为演讲者模式提供计时器。你可以启动、暂停和重置计时器。

它会在演讲者模式下显示一个计时器（秒表或倒计时模式）和进度条。

## 配置 {#configuration}

你可以在 headmatter 中设置演示的时长。默认为 `30min`。

```yaml
---
# 演示时长，默认为 '30min'
duration: 30min
# 计时器模式，可以是 'countdown' 或 'stopwatch'，默认为 'stopwatch'
timer: stopwatch
---
```
