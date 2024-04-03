---
type: "[[Aksjomaty]]"
theory: "[[LAI/ATP/Aksjomatyczna teoria poznania|ATP]]"
---
$o_a \in O$ - dowolny [obiekt](LAI/ATP/Pojęcia%20pierwotne/Obiekt%20elementarny.md) $o_a$ [należy](Przynależność.md) do [zbioru](Zbiór.md) [obiektów](LAI/ATP/Pojęcia%20pierwotne/Obiekt%20elementarny.md) $O$.
```tikz
\usepackage{tikz-cd}

\begin{document}

\begin{tikzcd}
o_{a} \arrow[r, "\in", no head] & O
\end{tikzcd}

\begin{tikzpicture}
\draw (0,0) circle (1.5cm);
\node at (0,1.8) {$O$};
\node[fill=black, circle, inner sep=1.5pt,label=right:$o_{a}$] at (-0.5,0) {};
\end{tikzpicture}

\end{document}
```
```tikz
```
```tikz
\usepackage{tikz-cd}

\begin{document}

\begin{tikzcd}
o_a \arrow[r, "\in", no head] & O
\end{tikzcd}

\begin{tikzpicture} % Rysuje zbiór O 
\draw (0,0) circle (1.5cm);
\node at (0,1.8) {$O$}; % Rysuje element o_a
\node[fill=black, circle, inner sep=1.5pt,label=right:$o_a$] at (-0.5,0) {};
\end{tikzpicture}

\end{document}
```

