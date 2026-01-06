---
relates:
  - Demo: /demo/starter/11
  - KaTeX: https://katex.org/
tags: [codeblock, syntax]
description: |
  Slidev 内置了由 KaTeX 驱动的 LaTeX 支持。
---

# LaTeX

Slidev 内置了由 [KaTeX](https://katex.org/) 驱动的 LaTeX 支持。

## 行内公式

用单个 `$` 包围你的 LaTeX 以进行行内渲染。

```md
$\sqrt{3x-1}+(1+x)^2$
```

## 块级公式

使用两个 `$$` 进行块级渲染。此模式使用更大的符号并将结果居中显示。

```latex
$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

## 行高亮

要高亮特定的行，只需在括号 `{}` 内添加行号。行号默认从 1 开始计数。

```latex
$$ {1|3|all}
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial\vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial\vec{E}}{\partial t}
\end{aligned}
$$
```

[代码块](#line-highlighting)的 `at` 和 `finally` 选项也适用于 LaTeX 块。

## 化学方程式

要启用化学方程式的渲染，需要加载 [mhchem](https://github.com/KaTeX/KaTeX/tree/main/contrib/mhchem) KaTeX 扩展。

创建包含以下内容的 `vite.config.ts`：

```ts
import 'katex/contrib/mhchem'

export default {}
```

现在化学方程式可以正确渲染了。

```latex
$$
\displaystyle{\ce{B(OH)3 + H2O <--> B(OH)4^- + H+}}
$$
```

了解更多：[语法](https://mhchem.github.io/MathJax-mhchem)

---

<TheTweet id="1392246507793915904" />
