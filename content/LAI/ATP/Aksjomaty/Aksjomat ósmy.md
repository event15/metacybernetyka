---
type: "[[Aksjomat]]"
theory: "[[LAI/ATP/Aksjomatyczna teoria poznania|ATP]]"
---
$r_{ab} \notin O$ - dowolna [[Relacja|relacja]] $r_{ab}$ [[Brak przynależności|nie należy]] do [[Zbiór|zbioru]] [[LAI/ATP/Pojęcia pierwotne/Obiekt elementarny|obiektów elementarnych]] $O$[^1].
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

[^1]: J. Kossecki, *Metacybernetyka*, Warszawa 2018, s. 23