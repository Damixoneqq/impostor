# 🕵️ IMPOSTOR - Gra Imprezowa (Pass & Play)

Nowoczesna, w pełni responsywna aplikacja webowa do gry towarzyskiej **"Impostor"** (kalkulator ról / master screen pass-and-play). Zoptymalizowana pod kątem smartfonów, tabletów oraz laptopów, działająca w 100% offline bez żadnych zewnętrznych zależności i bez rejestracji.

---

## 🚀 Jak uruchomić grę?

Wystarczy otworzyć plik `index.html` w dowolnej przeglądarce internetowej:
- **Na komputerze/laptopie:** Kliknij dwukrotnie plik `index.html` lub przeciągnij go do okna przeglądarki (Chrome, Edge, Firefox, Safari, Opera).
- **Na telefonie:** Możesz przesłać plik na telefon, otworzyć go lokalnie lub uruchomić lokalny serwer w sieci domowej / wdrożyć na darmowy hosting (np. GitHub Pages, Netlify, Vercel).

---

## ✨ Główne Funkcje Aplikacji

### 1. Ekran Początkowy (Konfiguracja Gry)
- **Wprowadzanie graczy:**
  - Obsługa od 3 do 16 graczy.
  - Dynamiczne dodawanie (`+ Dodaj Gracza` lub klawisz `Enter`) i usuwanie graczy (ikona kosza).
  - Automatyczne zapisywanie imion w pamięci przeglądarki (`localStorage`) – po odświeżeniu lub przy kolejnej grze nie trzeba ponownie wpisywać składu ekipy.
  - Szybki przycisk przywracania domyślnych imion.
- **Elastyczne losowanie impostorów (od 0 do liczby graczy):**
  - Wybór zakresu: **Min impostorów** oraz **Max impostorów** (np. od 0 do 2, od 1 do 3 itd.).
  - Możliwość wylosowania **0 impostorów** – wspaniały element psychologiczny, gdy wszyscy są niewinni i nikt o tym nie wie!
  - Gra losuje liczbę zdrajców z wybranego przedziału bez ujawniania jej graczom.
- **Jednosłowne, nieoczywiste podpowiedzi i hasła:**
  - Wszystkie hasła w bazie to **dokładnie pojedyncze słowa** (bez fraz wieloczłonowych).
  - Każde hasło posiada **jedno-słowne, subtelne skojarzenie** (luźniejsze, bardziej abstrakcyjne, dające przestrzeń do blefowania i dedukcji, a nie bezpośrednią definicję).
- **Swobodna dyskusja (bez presji czasu):**
  - Usunięto odliczanie stoperem – ekran informuje o trwającej rundzie, a gracze sami decydują kiedy zakończyć rozmowę i przejść do głosowania.
- **Kategorie słów:**
  - Filtrowanie według wybranej kategorii lub pula ze wszystkich dostępnych.

### 2. Tryb Przekazywania Urządzenia (Pass & Play)
- **Pełnoekranowy widok prywatności:**
  - Duży, czytelny komunikat na środku ekranu: *"Przekaż urządzenie dla: [Imię Gracza]"*.
  - Pasek postępu (*Gracz X z Y*).
  - Ostrzeżenie o prywatności, aby nikt z boku nie podglądał.
- **Blokada podglądu (Anti-peeking):**
  - Rola i słowo są ukryte do momentu kliknięcia przycisku *"Odkryj Swoją Rolę"*.
  - Widok roli:
    - **Niewinny:** Błękitno-turkusowa karta agenta z wielkim sekretnym słowem i kategorią.
    - **Impostor:** Karminowo-czerwona karta alarmu informująca, czy impostor ma podpowiedź, czy musi improwizować od zera.
  - Przycisk *"Ukryj i Przekaż Dalej"* natychmiast czyści ekran z poufnych danych przed podaniem telefonu kolejnej osobie.

### 3. Ekran Dyskusji i Głosowania (Finał Rundy)
- **Kto zaczyna:** Aplikacja automatycznie losuje gracza, który zadaje pierwsze pytanie w rundzie.
- **Cyfrowy Stoper (Timer):**
  - Minutnik (3:00) z opcją Start / Pauza / Reset oraz dodawania czasu (`+1 Minuta`).
  - Ostrzeżenie dźwiękowe i wizualne w ostatnich 10 sekundach oraz sygnał zakończenia czasu.
- **Ściągawka z zasadami:** Krótkie przypomnienie jak zadawać pytania i jak głosować.
- **Odkrycie wyników:**
  - Bezpieczny przycisk *"Zakończ dyskusję i sprawdź wyniki"* (z potwierdzeniem).
  - Ujawnia sekretne hasło, tożsamość wszystkich impostorów oraz informacje, kto miał podpowiedź.
- **Błyskawiczny restart:**
  - *"Nowa Runda (Ten sam skład)"* – natychmiast losuje nowe hasło i role bez ponownego wpisywania graczy!

### 4. Baza Słów (1026 unikalnych haseł)
- Wbudowana baza `words.js` zawiera **1026 starannie wyselekcjonowanych, polskich rzeczowników** podzielonych na kategorie:
  - Zwierzęta
  - Jedzenie i Kulinaria
  - Miejsca, Budynki i Architektura
  - Przedmioty Codzienne i Narzędzia
  - Zawody, Role i Postacie
  - Technologia i Gadżety
  - Pojazdy i Maszyny
  - Przyroda, Geografia i Kosmos
  - Sport, Hobby i Gry
  - Gry, Zabawy i Rozrywka
  - Ubiór, Akcesoria i Biżuteria
  - Szkoła i Edukacja
  - Muzyka i Dźwięk
  - Mitologia, Baśnie i Historia
  - i inne!
- Każde słowo posiada przypisaną kategorię oraz powiązane słowo pomocnicze/podpowiedź.

### 5. Nowoczesny UI/UX & Dźwięki
- Ciemny, elegancki motyw **Cyberpunk / Neon Dark Mode** (fiolet, cyjan, neonowy róż, głęboka czerń, glassmorphism).
- Pełna responsywność (doskonałe dopasowanie do ekranów smartfonów, obsługa wcięć ekranu / notch `safe-area-inset`).
- Efekty dźwiękowe oparte na **Web Audio API** (syntezowane w locie – brak potrzeby pobierania plików audio, działają w trybie offline).
- Przełącznik wyciszenia dźwięków (`Mute`) oraz tryb pełnoekranowy (`Fullscreen`).
- Obsługa wibracji haptycznych (`navigator.vibrate`) na urządzeniach mobilnych.
