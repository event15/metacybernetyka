> [!warning] Definicja (prawdopodobnie błędna) 
> Przetwarzanie [[Oryginał|oryginałów]] w [[Obrazy|obrazy]] i [[Obrazy|obrazów]] w [[Oryginał|oryginały]] jest przetwarzaniem komunikatów. 

> [!tip] Możliwa poprawiona definicja
> **Przetwarzanie komunikatów** jest to zastosowanie kodu do komunikatu dowolnego zbioru w komunikat dowolnego innego zbioru. Kody określają sposób tego przetwarzania.

Zauważam tu problem definicyjny pojęcia "przetwarzanie komunikatów". W oryginalnej definicji doc. Kosseckiego. 

Aby to wykazać weźmy na tapet definicję oryginalną:
1. Definiendum: przetwarzanie komunikatów
2. Definiens: Przetwarzanie oryginałów w obrazy i obrazów w oryginały

Powstaje więc definicja klasyczna:
**Przetwarzanie komunikatów** jest to *przetwarzanie oryginałów w obrazy i obrazów w oryginały*.

Aby móc zweryfikować poprawność definicji musimy przejść się po słowach użytych w ramach OJTI oraz ATP i sprawdzić czy wszystkie terminy/pojęcia mają swoją definicję wcześniej. 
Zacznę od prostszego:

![[Oryginał]]
![[Obrazy]]

Jest to dowód na to, że pojęcia **obrazu** i **oryginału** istnieją w zbiorze pojęć języka tej teorii.
Spójniki **w**, **i** możemy pominąć.
Problemem w tej definicji jest termin "przetwarzanie". 
Można tu zwrócić uwagę, że definicja wyrażenia "przetwarzania komunikatów" zawiera w sobie wyrażenie "przetwarzanie", które nie jest wyjaśnione w języku tej teorii ani nie jest zdefiniowane. W ramach tej teorii jest to termin nieznany, niezrozumiały. Czy jest tu zastosowany termin literacki, zapożyczony z definicji w słowniku języka polskiego?

> [!cite] Słownik języka polskiego PWN
> 1. «przekształcić coś twórczo»
> 2. «zmienić coś, nadając inny kształt, wygląd»
> 3. «opracować zebrane dane, informacje itp., wykorzystując technikę komputerową»

Więcej problemu dostarcza analiza logiczna w logice pierwszego rzędu zakresu wyrażenia "przetwarzanie komunikatów" oraz definiensu "przetwarzanie oryginałów w obrazy i obrazów w oryginały" w ramach znanych w ATP i OJTI zdefiniowanych pojęć.
### Definicje
1. **Komunikaty (K)**: Elementy zbioru, w którym występują relacje-informacje, czyli relacje między elementami tego samego zbioru.
2. **Oryginały (O)**: Elementy zbioru $X$, zdefiniowane jako oryginały, gdy poszukujemy w nich informacji.
3. **Obrazy (B)**: Elementy zbioru $Y$, które służą jako reprezentacja elementów z $X$ po wykonaniu przekształcenia oryginału za pomocą kodu.
4. **Kod**: Określa sposób przetwarzania między zbiorami, tj. relacja między elementami różnych zbiorów.
5. **Informacje**: Relacje między elementami tego samego zbioru.
6. **Przetwarzanie komunikatów (P(K))**: Proces, w którym komunikaty są przetwarzane. Jest to wyrażenie definicyjne.
7. **Przetwarzanie oryginałów w obrazy i obrazów w oryginały (P(O, B))**: Proces, w którym oryginały są konwertowane na obrazy i vice versa za pomocą kodów. Jest to definiens. 

Słowo proces jest użyte tu w znaczeniu literackim. Ma to cel jedynie zilustrować intuicję stojącą za rozumieniem zakresu wyrażeń/zdań 4. oraz 5. 
### Formalny Zapis Logiczny
#### Definicje w logice pierwszego rzędu:
1. ∀x (P(K)(x) ↔ x ∈ K) - Przetwarzanie komunikatów dotyczy każdego x, który jest komunikatem.
2. ∀x ∀y (P(O, B)(x, y) ↔ (x ∈ O ∧ y ∈ B) ∨ (x ∈ B ∧ y ∈ O)) - Przetwarzanie oryginałów w obrazy i obrazów w oryginały dotyczy par x i y, gdzie x jest oryginałem i y jest obrazem lub odwrotnie.
### Analiza Zakresów i Implikacji
#### Zakresy:
- **Zakres P(K)**: Obejmuje wszystkie komunikaty.
- **Zakres P(O, B)**: Obejmuje pary elementów z X i Y zaangażowane w przetwarzanie według określonego kodu.
#### Implikacje:
1. **Implikacja 1: Przetwarzanie Komunikatów vs. Przetwarzanie Oryginałów i Obrazów**
   - **Formalny zapis**: ∀x (P(K)(x) → ∃y (P(O, B)(x, y) ∨ P(O, B)(y, x)))
   - **Analiza**: Nie każdy komunikat musi być częścią pary przetwarzanej między zbiorami, zatem implikacja może nie być prawdziwa.
2. **Implikacja 2: Każda Para Oryginału i Obrazu jako Komunikaty**
   - **Formalny zapis**: ∀x ∀y ((x ∈ O ∧ y ∈ B) ∨ (x ∈ B ∧ y ∈ O) → (x ∈ K ∧ y ∈ K))
   - **Analiza**: Ta implikacja jest prawdziwa, ponieważ zgodnie z nowymi definicjami, przetwarzanie oryginałów i obrazów zawsze obejmuje komunikaty.
### Wnioski
Z powyższej analizy wynika, że procesy przetwarzania komunikatów i przetwarzania oryginałów w obrazy i obrazów w oryginały są blisko powiązane, ale nie są identyczne:
1. **Nieadekwatność zakresów**: Pierwsza implikacja ujawniła, że zakres działania definicji "przetwarzania komunikatów" i "przetwarzania oryginałów na obrazy oraz odwrotnie" **nie pokrywa się w pełni**. Przetwarzanie komunikatów (P(K)) może obejmować **więcej niż** tylko przetwarzanie oryginałów i obrazów, ponieważ komunikaty mogą występować w pojedynczych zbiorach bez bezpośredniej relacji z innym zbiorem.
2. Przetwarzanie oryginałów i obrazów (P(O, B)), zgodnie z definicją, zawsze obejmuje komunikaty, ale jest specyficzne dla par elementów między zbiorami X i Y w określony sposób przez kod.

Z tego wynikła potrzeba redefiniowania wyrażenia "przetwarzanie komunikatów".
Oto moje przeanalizowanie nowej definicji.
### Nowa Definicja
**Przetwarzanie komunikatów** jest to zastosowanie relacji-kodu do komunikatu dowolnego zbioru w komunikat dowolnego innego zbioru. Kody określają sposób tego przetwarzania.
### Krok 1: Formalizacja Nowej Definicji
#### Definicje Pojęć
- **Komunikat (K)**: Jak wcześniej, elementy zbioru, w którym występują relacje-informacje.
- **Kod (C)**: Relacja między elementami różnych zbiorów, która określa sposób przekształcenia komunikatu jednego zbioru na komunikat drugiego zbioru.
- **Przetwarzanie komunikatów (P'(K))**: Proces, w którym kod C jest stosowany do przekształcenia komunikatu z jednego zbioru w komunikat innego zbioru.
#### Formalny Zapis Logiki Pierwszego Rzędu
1. ∀x ∀y (P'(K)(x, y) ↔ (x ∈ K ∧ y ∈ K ∧ C(x, y))) - "Przetwarzanie komunikatów dotyczy par x i y, gdzie x jest komunikatem w jednym zbiorze, y jest komunikatem w innym zbiorze, a C(x, y) określa stosowany kod."
### Krok 2: Analiza Zakresów i Implikacji
#### Zakresy
- **Zakres P'(K)**: Obejmuje pary komunikatów między różnymi zbiorami, gdzie stosowana jest konkretna relacja kodu.

### Wnioski
Nowa definicja „przetwarzania komunikatów” jest bardziej precyzyjna i skupiona na mechanizmach przekształcania, co eliminuje wcześniejsze błędy zakresowe i kategorialne. Poprzez wyraźne wskazanie na stosowanie kodu między zbiorami, zapewnia lepsze zrozumienie i formalne ograniczenia procesu, co jest korzystne zarówno z teoretycznego, jak i praktycznego punktu widzenia.


Problematyka na którą wskazuję, jest taki, że nazwa "przetwarzanie komunikatów" jest nazwą złożoną, a zakres jej w formalnym rozumieniu jest różny od wyrażenia definicyjnego. Samo przetwarzanie komunikatów, gdyby nie było terminem definicyjnym, to mogłoby być rozumiane inaczej niż wyrażenie które definiuje to pojęcie. Zgodnie z powyższym uznałem za błędną definicję docenta Kosseckiego i zaproponowałem taką, którą odwzorowuje intuicję docenta oraz nie zawiera błędu.



