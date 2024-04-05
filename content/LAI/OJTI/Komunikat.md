---
type:
  - "[[Pojęcie niepierwotne]]"
  - "[[21. Definicja]]"
theory: "[[Ogólna jakościowa teoria informacji|OJTI]]"
---
- Komunikaty są to [[1. Obiekt elementarny|elementy]] [[3. Zbiór|zbioru]], między którymi występują [[Informacja|informacje]].
- Przykładowymi komunikatami są: 
	* [[Obrazy|Obrazy]]
	* [[Oryginał|Oryginały]]
- Przykłady komunikatów na poniższym rysunku to obiekty $(x_1, x_2, x_n)$ zbioru oryginałów oraz obiekty $(y_1, y_2, y_n)$ należące do zbioru obrazów:
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
