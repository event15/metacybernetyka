---
type:
  - "[[Definicje]]"
  - "[[Pojęcie niepierwotne]]"
theory: "[[Ogólna jakościowa teoria informacji|OJTI]]"
relates:
  - "[[Relacja]]"
tags:
  - "#zweryfikuj"
---
Jeśli mamy różne [systemy](System.md), na przykład $X$ oraz $Y$, w których mamy [relacje](Relacja.md) ([informacje](Informacja.md)) wewnątrz tych [zbiorów](Zbiór.md) pomiędzy [komunikatami](Komunikat.md), to w przypadku aktualnego rozważania do znalezienia poszukiwanych przez nas [informacji](Informacja.md) możemy wykorzystywać [zbiór](Zbiór.md) $Y$, wówczas te [komunikaty](Komunikat.md)) nazywamy **obrazami**.

```tikz
\usepackage{amsmath}
\usepackage{tikz-cd}
\usetikzlibrary{shapes.geometric}

\begin{document}

\begin{tikzcd}
\text{Oryginały}                                 & \text{Kody} & \text{Obrazy}            \\
|[draw,circle, black]| x_1 \arrow[rr, "_{xy}K_{11}", no head] \arrow[d, "_{x}I_{12}"', no head] &             & |[draw,circle, red]| y_1 \arrow[d, "_{y}I_{12}", no head] \\
|[draw,circle, black]| x_2 \arrow[rr, "_{xy}K_{22}"', no head]                      &             & |[draw,circle, red]| y_2                      \\
\vdots                                           &             & \vdots                   \\
|[draw,circle, black]| x_n \arrow[rr, "_{xy}K_{nn}"', no head]                      &             & |[draw,circle, red]| y_n                     
\end{tikzcd}

\end{document}
```


