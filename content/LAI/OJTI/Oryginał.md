---
type:
  - "[[21. Definicja]]"
  - "[[Pojęcie niepierwotne]]"
theory: "[[Ogólna jakościowa teoria informacji|OJTI]]"
relates:
  - "[[Komunikat]]"
  - "[[Substancja systemu]]"
---

Jeśli mamy różne [[System|systemy]], na przykład $X$ oraz $Y$, w których mamy [[2. Relacja|relacje]] ([[Informacja|informacje]]) wewnątrz tych [[3. Zbiór|zbiorów]] pomiędzy [[Komunikat|komunikatami]], to w przypadku aktualnego rozważania do znalezienia poszukiwanych przez nas [[Informacja|informacji]] możemy wykorzystać [[3. Zbiór|zbiór]] $X$, wówczas te [[Komunikat|komunikaty]] nazywamy **oryginałami**.

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