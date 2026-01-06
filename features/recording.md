---
depends:
  - guide/ui#navigation-bar
relates:
  - RecordRTC: https://github.com/muaz-khan/RecordRTC
  - WebRTC API: https://webrtc.org/
tags: [presenter, tool]
description: |
  使用内置摄像头视图和录制功能录制你的演示。
---

# 录制

Slidev 内置了摄像头视图和录制功能。它们让你可以轻松录制你的演示，无需在演示过程中切换到其他录制工具。

## 摄像头视图 {#camera-view}

点击[导航栏](../guide/ui#navigation-bar)中的 <carbon-user-avatar class="inline-icon-btn"/> 按钮可以在演示中显示你的摄像头视图。你可以拖动它来移动位置，使用右下角的手柄来调整大小。大小和位置会在页面刷新后保持不变。

<TheTweet id="1395006771027120133" />

## 开始录制 {#start-recording}

点击[导航栏](../guide/ui#navigation-bar)中的 <carbon-video class="inline-icon-btn"/> 按钮会弹出一个对话框。在这里你可以选择将摄像头输出嵌入到幻灯片中录制，或者将它们分成两个视频文件。

此功能由 [RecordRTC](https://github.com/muaz-khan/RecordRTC) 驱动，使用 [WebRTC API](https://webrtc.org/)。

![](/screenshots/recording.png)
