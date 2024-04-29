Aby zdefiniować pojęcie "kompozycji", zacznijmy od podstawowych pojęć: 
1. obiekt elementarny, 
2. relacja
3. zbiór. 

Chcemy stworzyć definicję kompozycji  $r_{ac}$ dwóch relacji  $r_{ab}$ i  $r_{bc}$, które są elementami zbioru $R$.
### Komentarz
W kontekście LAI, kompozycja powinna być rozumiana jako operacja łącząca dwie relacje w nową relację, nie jako dodanie czy złożenie funkcji, lecz jako pewna pierwotna relacja wewnątrz teorii. Na etapie LAI nie posługujemy się zatem jeszcze pojęciami matematycznymi. Biorąc pod uwagę aksjomaty LAI i to, że nie dzielimy obiektów elementarnych na mniejsze części, możemy uważać, że:
1. jeśli relacja $r_{ab}$ systematyzuje obiekt $o_a$ z obiektem $o_b$,
2. relacja $r_{bc}$ systematyzuje obiekt $o_b$ z obiektem $o_c$,

To możemy definiować kompozycję $r_{ab}$ i $r_{bc}$ jako stosunek $r_{ac}$, która będzie systematyzować obiekt $o_a$ bezpośrednio z obiektem $o_c$.
### Definicja Kompozycji w ATP
Niech $R$ będzie zbiorem relacji. 
Definiujemy kompozycję $r_{ac}$ relacji $r_{ab}$ i $r_{bc}$, które są elementami $R$, jako operację tworzącą nowy stosunek $r_{ac}$ w następujący sposób:
1. Jeżeli $r_{ab} \in R$ systematyzuje $o_a$ z $o_b$ i $r_{bc} \in R$ systematyzuje $o_b$ z $o_c$, to kompozycja jest stosunkiem $r_{ac}$ systematyzującym $o_a$ z $o_c$ takim, że $r_{ac} \in R$.
2. Stosunek $r_{ac}$ jest określany jednoznacznie przez relacje $r_{ab}$ i $r_{bc}$ i nie zależy od żadnych innych elementów lub relacji z $R$.

Oznacza to, że dla dowolnych relacji $r_{ab}, r_{bc}$, istnieje unikalny stosunek $r_{ac}$, który jest wynikiem tej kompozycji. 

Dla oznaczenia stosunku kompozycji w ramach Logiki aksjomatyczno-informacyjnej wprowadzam nowy symbol tej relacji niepierwotnej: $\circ$. Jest to propozycja rozszerzenia języka o nowy symbol, który jest tylko konwencją.  
### Warunki dla Kompozycji
1. Jeśli $r_{ab}, r_{bc} \in R$, to również $r_{ac} \in R$.
2. Jeżeli $r_{ab}, r_{bc}, r_{ac} \in R$, to kompozycja $(r_{ab} \circ r_{bc}) \circ r_{ac}$ jest równa kompozycji $r_{ab} \circ (r_{bc} \circ r_{ac})$, co oznaczamy jako $r_{ac} \in R$.
3. Dla każdego $o_a \in O$, istnieje relacja $r_{aa} \in R$, taka że dla każdego $r_{ab} \in R$, kompozycja $r_{aa} \circ r_{ab}$ jest równa $r_{ab}$.

To formalne podejście pozwala na użycie kompozycji jako operacji w LAI bez konieczności dodawania nowych aksjomatów - zamiast tego, definiujemy nową operację w oparciu o już istniejące pojęcia pierwotne.

> [!info] Twierdzenie 1
> Jeśli istnieją relacje $r_{ab}$ i $r_{bc}$, to istnieje stosunek $r_{ac}$, który jest równy kompozycji $r_{ab}$ i $r_{bc}$.

*Dowód*:
1. Z aksjomatu 7. ATP wiemy, że $r_{ab}, r_{bc} \in R$
2. Z definicji kompozycji wynika, że istnieje relacja $r_{ac}$, która jest wynikiem kompozycji $r_{ab}$ i $r_{bc}$ oraz $r_{ac} \in R$
3. Z warunku 1. dla kompozycji skoro $r_{ab}, r_{bc} \in R$, to $r_{ac}$ również należy do $R$, co jest zgodne z aksjomatem 7. ATP.
4. Z warunku 2. dla kompozycji, mamy $(r_{ab} \circ r_{bc}) \circ r_{ac} = r_{ab} \circ (r_{bc} \circ r_{ac})$
5. Z warunku 3. dla kompozycji, relacja identyczności $r_{aa}$ sprawia, że $r_{aa} \circ r_{ab} = r_{ab}$, co jest zgodne z aksjomatem 1. ATP. 

Drobnego wytłumaczenia wymaga stosowanie tu zapisu $r_{aa}$ - formalnie zgodnie z konwencją zaproponowaną przez doc. Kosseckiego relację oznacza się przy pomocy $r_{ks}$, gdzie $k$ i $s$ oznaczają identyfikatory obiektów elementarnych między którymi relacja występuje. Aksjomat 3. ATP mówi o dowolnej relacji $r_{ab}$, że jest tożsama sama z sobą, co można zapisać $r_{ab} \equiv r_{ab}$. W tym przypadku użyłem identyfikatorów $r_{aa}$ by podkreślić, że relacja występuje w obiekcie $o_a$. 