---
type: "[[Aksjomat]]"
theory: "[[LAI/ATP/Aksjomatyczna teoria poznania|ATP]]"
---
$o_a \notin R$ - dowolny [[LAI/ATP/Pojęcia pierwotne/Obiekt elementarny|obiekt]] $o_a$ [[Brak przynależności|nie należy]] do [[Zbiór|zbioru]] [[Relacja|relacji]] $R$.
```tikz
\usepackage{tikz-cd}
\usetikzlibrary{shapes.geometric}

\begin{document}

\begin{tikzcd}
o_a \arrow[r, "\notin", no head] & R
\end{tikzcd}

\quad \quad

\begin{tikzcd}[cells={nodes={draw=black}}]
|[draw,circle]| O & 
|[draw,circle]| R \\ & 
|[draw=none]| o_a 
	\arrow[ul, "\in" description, no head] 
	\arrow[u, "\notin" description, no head]
\end{tikzcd}

\begin{tikzpicture}
	\tikzset{set/.style={circle,draw,minimum size=2cm}}
	\node[set,label=135:O] (O) at (0,0) {};
	\node[set,label=45:R] (R) at (4,0) {}; 
	\node[fill=black, circle, inner sep=1.5pt,label=left:$o_a$] (oa) at (O.center) {};
	\draw[-] (oa) -- (R) node[midway,above] {$\notin$};
\end{tikzpicture}

\end{document}
```
