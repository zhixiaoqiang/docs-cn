# 与 AI 协作

由于 Slidev 基于 Markdown，它能够与 AI 编程智能体（AI Coding Agents）完美配合。

## 技能（Skills）

Slidev 为 AI 编程智能体提供了官方的[技能（Skills）](https://code.claude.com/docs/en/skills)，使它们在帮助你创建演示文稿时，能够理解 Slidev 的语法、特性和最佳实践。

### 安装

将 Slidev 技能添加到你的 AI 编程智能体中：

```bash
npx skills add slidevjs/slidev
```

该技能的源代码可以在 [这里](https://github.com/slidevjs/slidev/tree/main/skills/slidev) 找到。

### 提示词示例

安装完成后，你可以要求智能体帮助完成各种 Slidev 任务：

```
Create a Slidev presentation about TypeScript generics with code examples
```

```
Add a two-column slide with code on the left and explanation on the right
```

```
Set up click animations to reveal bullet points one by one
```

```
Configure the presentation for PDF export with speaker notes
```

### 包含内容

Slidev 技能提供了以下方面的知识：

- Markdown 语法、幻灯片分隔符和 Frontmatter
- 点击动画与过渡效果
- 代码高亮、Monaco 编辑器和 Magic Move
- 图表（Mermaid, PlantUML）与 LaTeX 数学公式
- 内置布局与组件
- 导出与托管选项

## VS Code 扩展

<LinkInline link="features/vscode-extension" /> 提供了语言模型工具，允许 VS Code 的 Copilot 及其他 AI 智能体直接与你的 Slidev 项目交互。这些工具使 AI 能够：

- 获取活动幻灯片和项目的信息
- 检索特定幻灯片的内容
- 按标题列出或搜索幻灯片
- 在幻灯片间进行导航

有关更多详情，请参阅 <LinkInline link="features/vscode-extension#ai-integration" />。