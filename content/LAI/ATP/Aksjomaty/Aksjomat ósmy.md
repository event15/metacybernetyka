---
type: "[[Aksjomaty]]"
theory: "[[LAI/ATP/Aksjomatyczna teoria poznania|ATP]]"
---
$r_{ab} \notin O$ - dowolna [relacja](Relacja.md) $r_{ab}$ [nie należy](Brak%20przynależności.md) do [zbioru](Zbiór.md) [obiektów elementarnych](LAI/ATP/Pojęcia%20pierwotne/Obiekt%20elementarny.md) $O$.
```tikz
\usepackage{tikz-cd}
\usetikzlibrary{shapes.geometric}

\begin{document}

\begin{tikzcd}
r_{ab} \arrow[r, "\notin", no head] & O
\end{tikzcd}

\quad \quad

\begin{tikzcd}[cells={nodes={draw=black}}]
|[draw,circle]| O & 
|[draw,circle]| R \\ & 
|[draw=none]| r_{ab} 
	\arrow[ul, "\notin" description, no head] 
	\arrow[u, "\in" description, no head]
\end{tikzcd}

\begin{tikzpicture}
	\tikzset{set/.style={circle,draw,minimum size=2cm}}
	\node[set,label=135:O] (O) at (0,0) {};
	\node[set,label=45:R] (R) at (4,0) {}; 
	\node[fill=black, circle, inner sep=1.5pt,label=right:$r_{ab}$] (rab) at (R.center) {};
	\draw[-] (rab) -- (O) node[midway,above] {$\notin$};
\end{tikzpicture}

\end{document}
```
