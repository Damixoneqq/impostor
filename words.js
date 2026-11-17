/**
 * Baza słów dla gry "Impostor" (kalkulator ról / master screen pass-and-play).
 * Zawiera 1055 unikalnych, wyłącznie jedno-słownych polskich haseł z jedno-słownymi, subtelnymi podpowiedziami.
 */
(function(root) {
  const IMPOSTOR_WORDS = [
  {
    "word": "Pies",
    "category": "Zwierzęta",
    "hint": "Wierność"
  },
  {
    "word": "Kot",
    "category": "Zwierzęta",
    "hint": "Niezależność"
  },
  {
    "word": "Koń",
    "category": "Zwierzęta",
    "hint": "Przestrzeń"
  },
  {
    "word": "Krowa",
    "category": "Zwierzęta",
    "hint": "Spokój"
  },
  {
    "word": "Owca",
    "category": "Zwierzęta",
    "hint": "Stado"
  },
  {
    "word": "Świnia",
    "category": "Zwierzęta",
    "hint": "Róż"
  },
  {
    "word": "Koza",
    "category": "Zwierzęta",
    "hint": "Upartość"
  },
  {
    "word": "Kura",
    "category": "Zwierzęta",
    "hint": "Podwórko"
  },
  {
    "word": "Kogut",
    "category": "Zwierzęta",
    "hint": "Budzik"
  },
  {
    "word": "Kaczka",
    "category": "Zwierzęta",
    "hint": "Nawyk"
  },
  {
    "word": "Gęś",
    "category": "Zwierzęta",
    "hint": "Klucz"
  },
  {
    "word": "Indyk",
    "category": "Zwierzęta",
    "hint": "Duma"
  },
  {
    "word": "Gołąb",
    "category": "Zwierzęta",
    "hint": "Wiadomość"
  },
  {
    "word": "Wróbel",
    "category": "Zwierzęta",
    "hint": "Szarość"
  },
  {
    "word": "Dzięcioł",
    "category": "Zwierzęta",
    "hint": "Rytm"
  },
  {
    "word": "Sowa",
    "category": "Zwierzęta",
    "hint": "Ciemność"
  },
  {
    "word": "Orzeł",
    "category": "Zwierzęta",
    "hint": "Wysokość"
  },
  {
    "word": "Jastrząb",
    "category": "Zwierzęta",
    "hint": "Wzrok"
  },
  {
    "word": "Sokół",
    "category": "Zwierzęta",
    "hint": "Czystość"
  },
  {
    "word": "Bocian",
    "category": "Zwierzęta",
    "hint": "Powrót"
  },
  {
    "word": "Czapla",
    "category": "Zwierzęta",
    "hint": "Cierpliwość"
  },
  {
    "word": "Łabędź",
    "category": "Zwierzęta",
    "hint": "Gracja"
  },
  {
    "word": "Pingwin",
    "category": "Zwierzęta",
    "hint": "Chłód"
  },
  {
    "word": "Flaming",
    "category": "Zwierzęta",
    "hint": "Równowaga"
  },
  {
    "word": "Struś",
    "category": "Zwierzęta",
    "hint": "Ucieczka"
  },
  {
    "word": "Koliber",
    "category": "Zwierzęta",
    "hint": "Lekkość"
  },
  {
    "word": "Papuga",
    "category": "Zwierzęta",
    "hint": "Echo"
  },
  {
    "word": "Tukan",
    "category": "Zwierzęta",
    "hint": "Egzotyka"
  },
  {
    "word": "Mewa",
    "category": "Zwierzęta",
    "hint": "Szum"
  },
  {
    "word": "Nietoperz",
    "category": "Zwierzęta",
    "hint": "Dźwięk"
  },
  {
    "word": "Lew",
    "category": "Zwierzęta",
    "hint": "Władza"
  },
  {
    "word": "Tygrys",
    "category": "Zwierzęta",
    "hint": "Siła"
  },
  {
    "word": "Lampart",
    "category": "Zwierzęta",
    "hint": "Zwinność"
  },
  {
    "word": "Gepard",
    "category": "Zwierzęta",
    "hint": "Pośpiech"
  },
  {
    "word": "Pantera",
    "category": "Zwierzęta",
    "hint": "Tajemnica"
  },
  {
    "word": "Wilk",
    "category": "Zwierzęta",
    "hint": "Więź"
  },
  {
    "word": "Lis",
    "category": "Zwierzęta",
    "hint": "Spryt"
  },
  {
    "word": "Niedźwiedź",
    "category": "Zwierzęta",
    "hint": "Ciężar"
  },
  {
    "word": "Panda",
    "category": "Zwierzęta",
    "hint": "Spokój"
  },
  {
    "word": "Koala",
    "category": "Zwierzęta",
    "hint": "Drzemka"
  },
  {
    "word": "Żyrafa",
    "category": "Zwierzęta",
    "hint": "Perspektywa"
  },
  {
    "word": "Słoń",
    "category": "Zwierzęta",
    "hint": "Pamięć"
  },
  {
    "word": "Nosorożec",
    "category": "Zwierzęta",
    "hint": "Twardość"
  },
  {
    "word": "Hipopotam",
    "category": "Zwierzęta",
    "hint": "Waga"
  },
  {
    "word": "Zebra",
    "category": "Zwierzęta",
    "hint": "Kontrast"
  },
  {
    "word": "Wielbłąd",
    "category": "Zwierzęta",
    "hint": "Wytrwałość"
  },
  {
    "word": "Kangur",
    "category": "Zwierzęta",
    "hint": "Energia"
  },
  {
    "word": "Szop",
    "category": "Zwierzęta",
    "hint": "Czystość"
  },
  {
    "word": "Bóbr",
    "category": "Zwierzęta",
    "hint": "Praca"
  },
  {
    "word": "Wiewiórka",
    "category": "Zwierzęta",
    "hint": "Zapasy"
  },
  {
    "word": "Jeż",
    "category": "Zwierzęta",
    "hint": "Dystans"
  },
  {
    "word": "Borsuk",
    "category": "Zwierzęta",
    "hint": "Odosobnienie"
  },
  {
    "word": "Kret",
    "category": "Zwierzęta",
    "hint": "Mrok"
  },
  {
    "word": "Zając",
    "category": "Zwierzęta",
    "hint": "Płochliwość"
  },
  {
    "word": "Królik",
    "category": "Zwierzęta",
    "hint": "Szybkość"
  },
  {
    "word": "Sarna",
    "category": "Zwierzęta",
    "hint": "Delikatność"
  },
  {
    "word": "Jeleń",
    "category": "Zwierzęta",
    "hint": "Majestat"
  },
  {
    "word": "Łoś",
    "category": "Zwierzęta",
    "hint": "Spokój"
  },
  {
    "word": "Żubr",
    "category": "Zwierzęta",
    "hint": "Ostoja"
  },
  {
    "word": "Delfin",
    "category": "Zwierzęta",
    "hint": "Radość"
  },
  {
    "word": "Wieloryb",
    "category": "Zwierzęta",
    "hint": "Bezmiar"
  },
  {
    "word": "Orka",
    "category": "Zwierzęta",
    "hint": "Spryt"
  },
  {
    "word": "Rekin",
    "category": "Zwierzęta",
    "hint": "Instynkt"
  },
  {
    "word": "Manta",
    "category": "Zwierzęta",
    "hint": "Szybowanie"
  },
  {
    "word": "Pławikonik",
    "category": "Zwierzęta",
    "hint": "Miniatura"
  },
  {
    "word": "Ośmiornica",
    "category": "Zwierzęta",
    "hint": "Zagadka"
  },
  {
    "word": "Kałamarnica",
    "category": "Zwierzęta",
    "hint": "Głębia"
  },
  {
    "word": "Meduza",
    "category": "Zwierzęta",
    "hint": "Niewidoczność"
  },
  {
    "word": "Rozgwiazda",
    "category": "Zwierzęta",
    "hint": "Kształt"
  },
  {
    "word": "Krab",
    "category": "Zwierzęta",
    "hint": "Kierunek"
  },
  {
    "word": "Homar",
    "category": "Zwierzęta",
    "hint": "Luksus"
  },
  {
    "word": "Krewetka",
    "category": "Zwierzęta",
    "hint": "Drobiazg"
  },
  {
    "word": "Żółw",
    "category": "Zwierzęta",
    "hint": "Powolność"
  },
  {
    "word": "Krokodyl",
    "category": "Zwierzęta",
    "hint": "Czatowanie"
  },
  {
    "word": "Aligator",
    "category": "Zwierzęta",
    "hint": "Cierpliwość"
  },
  {
    "word": "Kameleon",
    "category": "Zwierzęta",
    "hint": "Dopasowanie"
  },
  {
    "word": "Iguana",
    "category": "Zwierzęta",
    "hint": "Ciepło"
  },
  {
    "word": "Wąż",
    "category": "Zwierzęta",
    "hint": "Pokusa"
  },
  {
    "word": "Kobra",
    "category": "Zwierzęta",
    "hint": "Ostrzeżenie"
  },
  {
    "word": "Żmija",
    "category": "Zwierzęta",
    "hint": "Uwaga"
  },
  {
    "word": "Żaba",
    "category": "Zwierzęta",
    "hint": "Wilgoć"
  },
  {
    "word": "Ropucha",
    "category": "Zwierzęta",
    "hint": "Ochrona"
  },
  {
    "word": "Salamandra",
    "category": "Zwierzęta",
    "hint": "Żywioł"
  },
  {
    "word": "Ślimak",
    "category": "Zwierzęta",
    "hint": "Spokój"
  },
  {
    "word": "Motyl",
    "category": "Zwierzęta",
    "hint": "Przemiana"
  },
  {
    "word": "Ćma",
    "category": "Zwierzęta",
    "hint": "Przyciąganie"
  },
  {
    "word": "Pszczoła",
    "category": "Zwierzęta",
    "hint": "Zorganizowanie"
  },
  {
    "word": "Osa",
    "category": "Zwierzęta",
    "hint": "Natarczywość"
  },
  {
    "word": "Szerszeń",
    "category": "Zwierzęta",
    "hint": "Groza"
  },
  {
    "word": "Trzmiel",
    "category": "Zwierzęta",
    "hint": "Ciężar"
  },
  {
    "word": "Mrówka",
    "category": "Zwierzęta",
    "hint": "Współpraca"
  },
  {
    "word": "Biedronka",
    "category": "Zwierzęta",
    "hint": "Szczęście"
  },
  {
    "word": "Świerszcz",
    "category": "Zwierzęta",
    "hint": "Wieczór"
  },
  {
    "word": "Pasikonik",
    "category": "Zwierzęta",
    "hint": "Skok"
  },
  {
    "word": "Ważka",
    "category": "Zwierzęta",
    "hint": "Zwrotność"
  },
  {
    "word": "Mucha",
    "category": "Zwierzęta",
    "hint": "Uporczywość"
  },
  {
    "word": "Komar",
    "category": "Zwierzęta",
    "hint": "Irytacja"
  },
  {
    "word": "Pająk",
    "category": "Zwierzęta",
    "hint": "Cierpliwość"
  },
  {
    "word": "Skorpion",
    "category": "Zwierzęta",
    "hint": "Surowość"
  },
  {
    "word": "Leniwiec",
    "category": "Zwierzęta",
    "hint": "Czas"
  },
  {
    "word": "Kapibara",
    "category": "Zwierzęta",
    "hint": "Zgoda"
  },
  {
    "word": "Alpaka",
    "category": "Zwierzęta",
    "hint": "Miękkość"
  },
  {
    "word": "Lama",
    "category": "Zwierzęta",
    "hint": "Duma"
  },
  {
    "word": "Dromader",
    "category": "Zwierzęta",
    "hint": "Karawana"
  },
  {
    "word": "Wydra",
    "category": "Zwierzęta",
    "hint": "Zabawa"
  },
  {
    "word": "Hiena",
    "category": "Zwierzęta",
    "hint": "Śmiech"
  },
  {
    "word": "Szakal",
    "category": "Zwierzęta",
    "hint": "Cień"
  },
  {
    "word": "Dingo",
    "category": "Zwierzęta",
    "hint": "Dzikość"
  },
  {
    "word": "Suseł",
    "category": "Zwierzęta",
    "hint": "Czuwanie"
  },
  {
    "word": "Chomik",
    "category": "Zwierzęta",
    "hint": "Oszczędność"
  },
  {
    "word": "Szczur",
    "category": "Zwierzęta",
    "hint": "Przetrwanie"
  },
  {
    "word": "Mysz",
    "category": "Zwierzęta",
    "hint": "Drobność"
  },
  {
    "word": "Fretka",
    "category": "Zwierzęta",
    "hint": "Ciekawość"
  },
  {
    "word": "Pancernik",
    "category": "Zwierzęta",
    "hint": "Obrona"
  },
  {
    "word": "Mrównojad",
    "category": "Zwierzęta",
    "hint": "Nietypowość"
  },
  {
    "word": "Dziobak",
    "category": "Zwierzęta",
    "hint": "Paradoks"
  },
  {
    "word": "Kolczatka",
    "category": "Zwierzęta",
    "hint": "Najeżenie"
  },
  {
    "word": "Paw",
    "category": "Zwierzęta",
    "hint": "Próżność"
  },
  {
    "word": "Pelikan",
    "category": "Zwierzęta",
    "hint": "Pojemność"
  },
  {
    "word": "Sęp",
    "category": "Zwierzęta",
    "hint": "Koniec"
  },
  {
    "word": "Kukawka",
    "category": "Zwierzęta",
    "hint": "Podstęp"
  },
  {
    "word": "Sroka",
    "category": "Zwierzęta",
    "hint": "Kradzież"
  },
  {
    "word": "Wrona",
    "category": "Zwierzęta",
    "hint": "Inteligencja"
  },
  {
    "word": "Kruk",
    "category": "Zwierzęta",
    "hint": "Mądrość"
  },
  {
    "word": "Dudek",
    "category": "Zwierzęta",
    "hint": "Ozdoba"
  },
  {
    "word": "Zimorodek",
    "category": "Zwierzęta",
    "hint": "Błysk"
  },
  {
    "word": "Pizza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wieczór"
  },
  {
    "word": "Burger",
    "category": "Jedzenie i Kulinaria",
    "hint": "Pośpiech"
  },
  {
    "word": "Kebab",
    "category": "Jedzenie i Kulinaria",
    "hint": "Noc"
  },
  {
    "word": "Frytki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupkość"
  },
  {
    "word": "Pierogi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tradycja"
  },
  {
    "word": "Naleśniki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Weekend"
  },
  {
    "word": "Gołąbki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Niedziela"
  },
  {
    "word": "Schabowy",
    "category": "Jedzenie i Kulinaria",
    "hint": "Klasyka"
  },
  {
    "word": "Bigos",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cierpliwość"
  },
  {
    "word": "Rosół",
    "category": "Jedzenie i Kulinaria",
    "hint": "Niedziela"
  },
  {
    "word": "Żurek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Święta"
  },
  {
    "word": "Barszcz",
    "category": "Jedzenie i Kulinaria",
    "hint": "Czerwień"
  },
  {
    "word": "Pomidorowa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Dzieciństwo"
  },
  {
    "word": "Chłodnik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Lato"
  },
  {
    "word": "Gulasz",
    "category": "Jedzenie i Kulinaria",
    "hint": "Sycenie"
  },
  {
    "word": "Lasagne",
    "category": "Jedzenie i Kulinaria",
    "hint": "Warstwy"
  },
  {
    "word": "Spaghetti",
    "category": "Jedzenie i Kulinaria",
    "hint": "Długość"
  },
  {
    "word": "Tortilla",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wygoda"
  },
  {
    "word": "Tacos",
    "category": "Jedzenie i Kulinaria",
    "hint": "Impreza"
  },
  {
    "word": "Burrito",
    "category": "Jedzenie i Kulinaria",
    "hint": "Meksyk"
  },
  {
    "word": "Sushi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Precyzja"
  },
  {
    "word": "Ramen",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bulion"
  },
  {
    "word": "Curry",
    "category": "Jedzenie i Kulinaria",
    "hint": "Aromat"
  },
  {
    "word": "Hummus",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zdrowie"
  },
  {
    "word": "Falafel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ulica"
  },
  {
    "word": "Zapiekanka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wspomnienie"
  },
  {
    "word": "Chleb",
    "category": "Jedzenie i Kulinaria",
    "hint": "Podstawa"
  },
  {
    "word": "Bułka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Poranek"
  },
  {
    "word": "Rogal",
    "category": "Jedzenie i Kulinaria",
    "hint": "Paryż"
  },
  {
    "word": "Bagietka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Francja"
  },
  {
    "word": "Tost",
    "category": "Jedzenie i Kulinaria",
    "hint": "Krótko"
  },
  {
    "word": "Masło",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gładkość"
  },
  {
    "word": "Ser",
    "category": "Jedzenie i Kulinaria",
    "hint": "Dojrzewanie"
  },
  {
    "word": "Twaróg",
    "category": "Jedzenie i Kulinaria",
    "hint": "Nabiał"
  },
  {
    "word": "Jajecznica",
    "category": "Jedzenie i Kulinaria",
    "hint": "Śniadanie"
  },
  {
    "word": "Omlet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Lekkość"
  },
  {
    "word": "Parówki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Szybkość"
  },
  {
    "word": "Szynka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kanapka"
  },
  {
    "word": "Boczek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zapach"
  },
  {
    "word": "Kiełbasa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ognisko"
  },
  {
    "word": "Pasztet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Smarowanie"
  },
  {
    "word": "Śledź",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zakąska"
  },
  {
    "word": "Łosoś",
    "category": "Jedzenie i Kulinaria",
    "hint": "Szlachetność"
  },
  {
    "word": "Tuńczyk",
    "category": "Jedzenie i Kulinaria",
    "hint": "Głębia"
  },
  {
    "word": "Karp",
    "category": "Jedzenie i Kulinaria",
    "hint": "Grudzień"
  },
  {
    "word": "Czekolada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Przyjemność"
  },
  {
    "word": "Lody",
    "category": "Jedzenie i Kulinaria",
    "hint": "Upał"
  },
  {
    "word": "Szarlotka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Jesień"
  },
  {
    "word": "Sernik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Uroczystość"
  },
  {
    "word": "Makowiec",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zwinięcie"
  },
  {
    "word": "Pączek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Karnawał"
  },
  {
    "word": "Faworki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kruchość"
  },
  {
    "word": "Gofr",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wakacje"
  },
  {
    "word": "Tiramisu",
    "category": "Jedzenie i Kulinaria",
    "hint": "Deser"
  },
  {
    "word": "Beza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodycz"
  },
  {
    "word": "Muffin",
    "category": "Jedzenie i Kulinaria",
    "hint": "Przekąska"
  },
  {
    "word": "Piernik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kory"
  },
  {
    "word": "Karmel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Lepkość"
  },
  {
    "word": "Lizak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cierpliwość"
  },
  {
    "word": "Żelki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Radość"
  },
  {
    "word": "Chałwa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wschód"
  },
  {
    "word": "Kisiel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gęstość"
  },
  {
    "word": "Budyń",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciepło"
  },
  {
    "word": "Galaretka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ruch"
  },
  {
    "word": "Truskawka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Czerwiec"
  },
  {
    "word": "Malina",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodycz"
  },
  {
    "word": "Borówka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Świeżość"
  },
  {
    "word": "Jabłko",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zdrowie"
  },
  {
    "word": "Gruszka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kształt"
  },
  {
    "word": "Banan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tropiki"
  },
  {
    "word": "Pomarańcza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zima"
  },
  {
    "word": "Cytryna",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kwas"
  },
  {
    "word": "Mandarynka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zapach"
  },
  {
    "word": "Arbuz",
    "category": "Jedzenie i Kulinaria",
    "hint": "Orzeźwienie"
  },
  {
    "word": "Melon",
    "category": "Jedzenie i Kulinaria",
    "hint": "Soczystość"
  },
  {
    "word": "Winogrono",
    "category": "Jedzenie i Kulinaria",
    "hint": "Uczta"
  },
  {
    "word": "Ananas",
    "category": "Jedzenie i Kulinaria",
    "hint": "Korona"
  },
  {
    "word": "Mango",
    "category": "Jedzenie i Kulinaria",
    "hint": "Egzotyka"
  },
  {
    "word": "Brzoskwinia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Aksamit"
  },
  {
    "word": "Morela",
    "category": "Jedzenie i Kulinaria",
    "hint": "Pomarańcz"
  },
  {
    "word": "Śliwka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ogród"
  },
  {
    "word": "Czereśnia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Para"
  },
  {
    "word": "Kiwi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cierpkość"
  },
  {
    "word": "Granat",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bogactwo"
  },
  {
    "word": "Awokado",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gładkość"
  },
  {
    "word": "Pomidor",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ogród"
  },
  {
    "word": "Ogórek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Orzeźwienie"
  },
  {
    "word": "Marchewka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupkość"
  },
  {
    "word": "Ziemniak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Prostota"
  },
  {
    "word": "Cebula",
    "category": "Jedzenie i Kulinaria",
    "hint": "Emocje"
  },
  {
    "word": "Czosnek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ochrona"
  },
  {
    "word": "Papryka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Barwa"
  },
  {
    "word": "Kukurydza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Złoto"
  },
  {
    "word": "Dynia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Październik"
  },
  {
    "word": "Brokuł",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zieleń"
  },
  {
    "word": "Kalafior",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bukiet"
  },
  {
    "word": "Cukinia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Łagodność"
  },
  {
    "word": "Bakłażan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Śródziemnomorze"
  },
  {
    "word": "Szpinak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Witalność"
  },
  {
    "word": "Kawa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Poranek"
  },
  {
    "word": "Herbata",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chwila"
  },
  {
    "word": "Kakao",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciepło"
  },
  {
    "word": "Lemoniada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Orzeźwienie"
  },
  {
    "word": "Kompot",
    "category": "Jedzenie i Kulinaria",
    "hint": "Obiad"
  },
  {
    "word": "Mleko",
    "category": "Jedzenie i Kulinaria",
    "hint": "Biel"
  },
  {
    "word": "Musztarda",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ostrość"
  },
  {
    "word": "Ketchup",
    "category": "Jedzenie i Kulinaria",
    "hint": "Dodatek"
  },
  {
    "word": "Majonez",
    "category": "Jedzenie i Kulinaria",
    "hint": "Święta"
  },
  {
    "word": "Chrzan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Moc"
  },
  {
    "word": "Ocet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kwas"
  },
  {
    "word": "Oliwa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Grecja"
  },
  {
    "word": "Miód",
    "category": "Jedzenie i Kulinaria",
    "hint": "Praca"
  },
  {
    "word": "Dżem",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słoik"
  },
  {
    "word": "Powidła",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tradycja"
  },
  {
    "word": "Plaża",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Beztroska"
  },
  {
    "word": "Pustynia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Samotność"
  },
  {
    "word": "Góry",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wyzwanie"
  },
  {
    "word": "Jaskinia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ukrycie"
  },
  {
    "word": "Wyspa",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Izolacja"
  },
  {
    "word": "Dżungla",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gęstwina"
  },
  {
    "word": "Las",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Cisza"
  },
  {
    "word": "Polana",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Odpoczynek"
  },
  {
    "word": "Wulkan",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Żywioł"
  },
  {
    "word": "Wodospad",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Siła"
  },
  {
    "word": "Jezioro",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Tafla"
  },
  {
    "word": "Rzeka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Prąd"
  },
  {
    "word": "Lodowiec",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Chłód"
  },
  {
    "word": "Kanion",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Przepaść"
  },
  {
    "word": "Oaza",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ukojenie"
  },
  {
    "word": "Bagno",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Tajemnica"
  },
  {
    "word": "Szpital",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Nadzieja"
  },
  {
    "word": "Szkoła",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Dzwonek"
  },
  {
    "word": "Uniwersytet",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wiedza"
  },
  {
    "word": "Biblioteka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Spokój"
  },
  {
    "word": "Muzeum",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Czas"
  },
  {
    "word": "Teatr",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Iluzja"
  },
  {
    "word": "Kino",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Emocje"
  },
  {
    "word": "Filharmonia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Dźwięk"
  },
  {
    "word": "Opera",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Głos"
  },
  {
    "word": "Cyrk",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zabawa"
  },
  {
    "word": "Stadion",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Doping"
  },
  {
    "word": "Basen",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Trening"
  },
  {
    "word": "Siłownia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wysiłek"
  },
  {
    "word": "Lotnisko",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Podróż"
  },
  {
    "word": "Dworzec",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Czekanie"
  },
  {
    "word": "Port",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Horyzont"
  },
  {
    "word": "Hotel",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gościnność"
  },
  {
    "word": "Restauracja",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wieczór"
  },
  {
    "word": "Kawiarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Rozmowa"
  },
  {
    "word": "Piekarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zapach"
  },
  {
    "word": "Apteka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pomoc"
  },
  {
    "word": "Bank",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zaufanie"
  },
  {
    "word": "Poczta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wiadomość"
  },
  {
    "word": "Supermarket",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wybór"
  },
  {
    "word": "Targowisko",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gwar"
  },
  {
    "word": "Kościół",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zaduma"
  },
  {
    "word": "Katedra",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Majestat"
  },
  {
    "word": "Zamek",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Historia"
  },
  {
    "word": "Pałac",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Bogactwo"
  },
  {
    "word": "Twierdza",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Obrona"
  },
  {
    "word": "Bunkier",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Schronienie"
  },
  {
    "word": "Latarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Drogowskaz"
  },
  {
    "word": "Wiatrak",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Powiew"
  },
  {
    "word": "Młyn",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Praca"
  },
  {
    "word": "Remiza",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gotowość"
  },
  {
    "word": "Komisariat",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Porządek"
  },
  {
    "word": "Sąd",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Sprawiedliwość"
  },
  {
    "word": "Więzienie",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kara"
  },
  {
    "word": "Ratusz",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Decyzje"
  },
  {
    "word": "Wieżowiec",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Nowoczesność"
  },
  {
    "word": "Most",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Połączenie"
  },
  {
    "word": "Tunel",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ciemność"
  },
  {
    "word": "Tama",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Opór"
  },
  {
    "word": "Hangar",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Przestrzeń"
  },
  {
    "word": "Szklarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Klimat"
  },
  {
    "word": "Obserwatorium",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kosmos"
  },
  {
    "word": "Planetarium",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gwiazdy"
  },
  {
    "word": "Cmentarz",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pamięć"
  },
  {
    "word": "Kopalnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Trud"
  },
  {
    "word": "Huta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Żar"
  },
  {
    "word": "Fabryka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Produkcja"
  },
  {
    "word": "Igloo",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Śnieg"
  },
  {
    "word": "Wigwam",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Tradycja"
  },
  {
    "word": "Jurta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Step"
  },
  {
    "word": "Schronisko",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ciepło"
  },
  {
    "word": "Pralnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Czystość"
  },
  {
    "word": "Garaż",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Schowek"
  },
  {
    "word": "Piwnica",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Mrok"
  },
  {
    "word": "Strych",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pamiątki"
  },
  {
    "word": "Balkon",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Widok"
  },
  {
    "word": "Taras",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wypoczynek"
  },
  {
    "word": "Altana",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Cień"
  },
  {
    "word": "Stajnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zapach"
  },
  {
    "word": "Obora",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wieś"
  },
  {
    "word": "Kurnik",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zgiełk"
  },
  {
    "word": "Pasieka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Słodycz"
  },
  {
    "word": "Winnica",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Słońce"
  },
  {
    "word": "Molo",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Spacer"
  },
  {
    "word": "Fontanna",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Orzeźwienie"
  },
  {
    "word": "Pomnik",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wspomnienie"
  },
  {
    "word": "Zegarek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Punktualność"
  },
  {
    "word": "Portfel",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wartość"
  },
  {
    "word": "Parasol",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ochrona"
  },
  {
    "word": "Okulary",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostrość"
  },
  {
    "word": "Plecak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Droga"
  },
  {
    "word": "Klucz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dostęp"
  },
  {
    "word": "Kłódka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Sekret"
  },
  {
    "word": "Nożyczki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Podział"
  },
  {
    "word": "Latarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Światło"
  },
  {
    "word": "Świeczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Nastrój"
  },
  {
    "word": "Zapałki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Iskra"
  },
  {
    "word": "Zapalniczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Płomień"
  },
  {
    "word": "Lustro",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Prawda"
  },
  {
    "word": "Szczoteczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czystość"
  },
  {
    "word": "Mydło",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Piana"
  },
  {
    "word": "Szampon",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zapach"
  },
  {
    "word": "Ręcznik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Suchość"
  },
  {
    "word": "Grzebień",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Porządek"
  },
  {
    "word": "Suszarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pośpiech"
  },
  {
    "word": "Maszynka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Rano"
  },
  {
    "word": "Żelazko",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Gładkość"
  },
  {
    "word": "Odkurzacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dźwięk"
  },
  {
    "word": "Mop",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Błysk"
  },
  {
    "word": "Miotła",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Porządek"
  },
  {
    "word": "Kosz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pozbycie"
  },
  {
    "word": "Młotek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Uderzenie"
  },
  {
    "word": "Śrubokręt",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Montaż"
  },
  {
    "word": "Kombinerki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Uścisk"
  },
  {
    "word": "Piła",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Cięcie"
  },
  {
    "word": "Wiertarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Hałas"
  },
  {
    "word": "Miarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Precyzja"
  },
  {
    "word": "Poziomica",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Równość"
  },
  {
    "word": "Klej",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Połączenie"
  },
  {
    "word": "Gwoździe",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Mocowanie"
  },
  {
    "word": "Śruba",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trwałość"
  },
  {
    "word": "Drabina",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Awans"
  },
  {
    "word": "Taczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Praca"
  },
  {
    "word": "Łopata",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wysiłek"
  },
  {
    "word": "Grabie",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Jesień"
  },
  {
    "word": "Konewka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Troska"
  },
  {
    "word": "Sekator",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ogród"
  },
  {
    "word": "Kosiarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Sobota"
  },
  {
    "word": "Garnek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ciepło"
  },
  {
    "word": "Patelnia",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Smażenie"
  },
  {
    "word": "Czajnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Gwizd"
  },
  {
    "word": "Nóż",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostrość"
  },
  {
    "word": "Widelec",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kultura"
  },
  {
    "word": "Łyżka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ciepło"
  },
  {
    "word": "Talerz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dzielenie"
  },
  {
    "word": "Miska",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pojemność"
  },
  {
    "word": "Kubek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Napar"
  },
  {
    "word": "Szklanka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Przejrzystość"
  },
  {
    "word": "Kieliszek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Toast"
  },
  {
    "word": "Korkociąg",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Świętowanie"
  },
  {
    "word": "Tarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Drobiazg"
  },
  {
    "word": "Durszlak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Odpływ"
  },
  {
    "word": "Wałek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Cierpliwość"
  },
  {
    "word": "Termos",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wędrówka"
  },
  {
    "word": "Bidon",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Sport"
  },
  {
    "word": "Poduszka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Odpoczynek"
  },
  {
    "word": "Kołdra",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Bezpieczeństwo"
  },
  {
    "word": "Koc",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Przytulność"
  },
  {
    "word": "Prześcieradło",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Świeżość"
  },
  {
    "word": "Wieszak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szafa"
  },
  {
    "word": "Długopis",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Podpis"
  },
  {
    "word": "Ołówek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szkic"
  },
  {
    "word": "Gumka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Poprawka"
  },
  {
    "word": "Temperówka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostrość"
  },
  {
    "word": "Linijka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Porządek"
  },
  {
    "word": "Zeszyt",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zapiski"
  },
  {
    "word": "Notatnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pamięć"
  },
  {
    "word": "Koperta",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dyskrecja"
  },
  {
    "word": "Znaczek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wartość"
  },
  {
    "word": "Spinacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Związek"
  },
  {
    "word": "Zszywacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trwałość"
  },
  {
    "word": "Dziurkacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Biurowość"
  },
  {
    "word": "Segregator",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Archiwum"
  },
  {
    "word": "Globus",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Świat"
  },
  {
    "word": "Mapa",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Droga"
  },
  {
    "word": "Lupa",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szczegół"
  },
  {
    "word": "Pędzel",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wyobraźnia"
  },
  {
    "word": "Paleta",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Mieszanie"
  },
  {
    "word": "Sztaluga",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Sztuka"
  },
  {
    "word": "Termometr",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Stan"
  },
  {
    "word": "Włóczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Cierpliwość"
  },
  {
    "word": "Igła",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Precyzja"
  },
  {
    "word": "Naparstek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Bezpieczeństwo"
  },
  {
    "word": "Szpilka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Chwila"
  },
  {
    "word": "Waga",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Miarodajność"
  },
  {
    "word": "Minutnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czas"
  },
  {
    "word": "Detektyw",
    "category": "Zawody, Role i Postacie",
    "hint": "Zagadka"
  },
  {
    "word": "Policjant",
    "category": "Zawody, Role i Postacie",
    "hint": "Zasady"
  },
  {
    "word": "Strażak",
    "category": "Zawody, Role i Postacie",
    "hint": "Odwaga"
  },
  {
    "word": "Lekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Zdrowie"
  },
  {
    "word": "Pielęgniarka",
    "category": "Zawody, Role i Postacie",
    "hint": "Opieka"
  },
  {
    "word": "Ratownik",
    "category": "Zawody, Role i Postacie",
    "hint": "Pomoc"
  },
  {
    "word": "Chirurg",
    "category": "Zawody, Role i Postacie",
    "hint": "Skupienie"
  },
  {
    "word": "Dentysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Ulga"
  },
  {
    "word": "Weterynarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wdzięczność"
  },
  {
    "word": "Nauczyciel",
    "category": "Zawody, Role i Postacie",
    "hint": "Wiedza"
  },
  {
    "word": "Profesor",
    "category": "Zawody, Role i Postacie",
    "hint": "Doświadczenie"
  },
  {
    "word": "Naukowiec",
    "category": "Zawody, Role i Postacie",
    "hint": "Odkrycie"
  },
  {
    "word": "Astronauta",
    "category": "Zawody, Role i Postacie",
    "hint": "Nieważkość"
  },
  {
    "word": "Pilot",
    "category": "Zawody, Role i Postacie",
    "hint": "Odpowiedzialność"
  },
  {
    "word": "Stewardesa",
    "category": "Zawody, Role i Postacie",
    "hint": "Uśmiech"
  },
  {
    "word": "Kapitan",
    "category": "Zawody, Role i Postacie",
    "hint": "Dowodzenie"
  },
  {
    "word": "Marynarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Tęsknota"
  },
  {
    "word": "Kierowca",
    "category": "Zawody, Role i Postacie",
    "hint": "Trasa"
  },
  {
    "word": "Maszynista",
    "category": "Zawody, Role i Postacie",
    "hint": "Punktualność"
  },
  {
    "word": "Taksówkarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Opowieści"
  },
  {
    "word": "Kurier",
    "category": "Zawody, Role i Postacie",
    "hint": "Oczekiwanie"
  },
  {
    "word": "Listonosz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wiadomości"
  },
  {
    "word": "Kucharz",
    "category": "Zawody, Role i Postacie",
    "hint": "Smak"
  },
  {
    "word": "Kelner",
    "category": "Zawody, Role i Postacie",
    "hint": "Uprzejmość"
  },
  {
    "word": "Barman",
    "category": "Zawody, Role i Postacie",
    "hint": "Słuchanie"
  },
  {
    "word": "Piekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Świt"
  },
  {
    "word": "Cukiernik",
    "category": "Zawody, Role i Postacie",
    "hint": "Słodycz"
  },
  {
    "word": "Rzeźnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Siła"
  },
  {
    "word": "Rolnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Natura"
  },
  {
    "word": "Ogrodnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Cierpliwość"
  },
  {
    "word": "Leśnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Cisza"
  },
  {
    "word": "Rybak",
    "category": "Zawody, Role i Postacie",
    "hint": "Świt"
  },
  {
    "word": "Górnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Ziemia"
  },
  {
    "word": "Budowlaniec",
    "category": "Zawody, Role i Postacie",
    "hint": "Rozwój"
  },
  {
    "word": "Architekt",
    "category": "Zawody, Role i Postacie",
    "hint": "Wizja"
  },
  {
    "word": "Hydraulik",
    "category": "Zawody, Role i Postacie",
    "hint": "Czystość"
  },
  {
    "word": "Elektryk",
    "category": "Zawody, Role i Postacie",
    "hint": "Przepływ"
  },
  {
    "word": "Stolarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Natura"
  },
  {
    "word": "Kowal",
    "category": "Zawody, Role i Postacie",
    "hint": "Tradycja"
  },
  {
    "word": "Ślusarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Bezpieczeństwo"
  },
  {
    "word": "Mechanik",
    "category": "Zawody, Role i Postacie",
    "hint": "Sprawność"
  },
  {
    "word": "Malarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Świeżość"
  },
  {
    "word": "Szklarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Kruchość"
  },
  {
    "word": "Krawiec",
    "category": "Zawody, Role i Postacie",
    "hint": "Dopasowanie"
  },
  {
    "word": "Szewc",
    "category": "Zawody, Role i Postacie",
    "hint": "Trwałość"
  },
  {
    "word": "Zegarmistrz",
    "category": "Zawody, Role i Postacie",
    "hint": "Cierpliwość"
  },
  {
    "word": "Jubiler",
    "category": "Zawody, Role i Postacie",
    "hint": "Prestiż"
  },
  {
    "word": "Pisarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wyobraźnia"
  },
  {
    "word": "Poeta",
    "category": "Zawody, Role i Postacie",
    "hint": "Emocje"
  },
  {
    "word": "Dziennikarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Prawda"
  },
  {
    "word": "Fotograf",
    "category": "Zawody, Role i Postacie",
    "hint": "Chwila"
  },
  {
    "word": "Kamerzysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Ruch"
  },
  {
    "word": "Reżyser",
    "category": "Zawody, Role i Postacie",
    "hint": "Wizja"
  },
  {
    "word": "Aktor",
    "category": "Zawody, Role i Postacie",
    "hint": "Wcielenie"
  },
  {
    "word": "Muzyk",
    "category": "Zawody, Role i Postacie",
    "hint": "Harmonia"
  },
  {
    "word": "Piosenkarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Oklaski"
  },
  {
    "word": "Dyrygent",
    "category": "Zawody, Role i Postacie",
    "hint": "Całość"
  },
  {
    "word": "Tancerz",
    "category": "Zawody, Role i Postacie",
    "hint": "Lekkość"
  },
  {
    "word": "Rzeźbiarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Bryła"
  },
  {
    "word": "Prezydent",
    "category": "Zawody, Role i Postacie",
    "hint": "Reprezentacja"
  },
  {
    "word": "Sędzia",
    "category": "Zawody, Role i Postacie",
    "hint": "Bezstronność"
  },
  {
    "word": "Adwokat",
    "category": "Zawody, Role i Postacie",
    "hint": "Słowa"
  },
  {
    "word": "Żołnierz",
    "category": "Zawody, Role i Postacie",
    "hint": "Dyscyplina"
  },
  {
    "word": "Generał",
    "category": "Zawody, Role i Postacie",
    "hint": "Strategia"
  },
  {
    "word": "Szpieg",
    "category": "Zawody, Role i Postacie",
    "hint": "Sekret"
  },
  {
    "word": "Kominiarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Szczęście"
  },
  {
    "word": "Bibliotekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Porządek"
  },
  {
    "word": "Przewodnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Kierunek"
  },
  {
    "word": "Tłumacz",
    "category": "Zawody, Role i Postacie",
    "hint": "Zrozumienie"
  },
  {
    "word": "Księgowy",
    "category": "Zawody, Role i Postacie",
    "hint": "Dokładność"
  },
  {
    "word": "Bankier",
    "category": "Zawody, Role i Postacie",
    "hint": "Liczby"
  },
  {
    "word": "Programista",
    "category": "Zawody, Role i Postacie",
    "hint": "Logika"
  },
  {
    "word": "Archeolog",
    "category": "Zawody, Role i Postacie",
    "hint": "Przeszłość"
  },
  {
    "word": "Historyk",
    "category": "Zawody, Role i Postacie",
    "hint": "Pamięć"
  },
  {
    "word": "Astronom",
    "category": "Zawody, Role i Postacie",
    "hint": "Nieskończoność"
  },
  {
    "word": "Klaun",
    "category": "Zawody, Role i Postacie",
    "hint": "Uśmiech"
  },
  {
    "word": "Iluzjonista",
    "category": "Zawody, Role i Postacie",
    "hint": "Zdziwienie"
  },
  {
    "word": "Trener",
    "category": "Zawody, Role i Postacie",
    "hint": "Motywacja"
  },
  {
    "word": "Ochroniarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Spokój"
  },
  {
    "word": "Nurek",
    "category": "Zawody, Role i Postacie",
    "hint": "Głębokość"
  },
  {
    "word": "Alpinista",
    "category": "Zawody, Role i Postacie",
    "hint": "Szczyt"
  },
  {
    "word": "Florysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Piękno"
  },
  {
    "word": "Smartfon",
    "category": "Technologia i Gadżety",
    "hint": "Kontakt"
  },
  {
    "word": "Laptop",
    "category": "Technologia i Gadżety",
    "hint": "Mobilność"
  },
  {
    "word": "Tablet",
    "category": "Technologia i Gadżety",
    "hint": "Wygoda"
  },
  {
    "word": "Telewizor",
    "category": "Technologia i Gadżety",
    "hint": "Obraz"
  },
  {
    "word": "Radio",
    "category": "Technologia i Gadżety",
    "hint": "Tło"
  },
  {
    "word": "Słuchawki",
    "category": "Technologia i Gadżety",
    "hint": "Izolacja"
  },
  {
    "word": "Głośnik",
    "category": "Technologia i Gadżety",
    "hint": "Przestrzeń"
  },
  {
    "word": "Mikrofon",
    "category": "Technologia i Gadżety",
    "hint": "Głos"
  },
  {
    "word": "Kamera",
    "category": "Technologia i Gadżety",
    "hint": "Obserwacja"
  },
  {
    "word": "Aparat",
    "category": "Technologia i Gadżety",
    "hint": "Wspomnienie"
  },
  {
    "word": "Dron",
    "category": "Technologia i Gadżety",
    "hint": "Spojrzenie"
  },
  {
    "word": "Robot",
    "category": "Technologia i Gadżety",
    "hint": "Przyszłość"
  },
  {
    "word": "Satelita",
    "category": "Technologia i Gadżety",
    "hint": "Orbita"
  },
  {
    "word": "Konsola",
    "category": "Technologia i Gadżety",
    "hint": "Rozrywka"
  },
  {
    "word": "Pad",
    "category": "Technologia i Gadżety",
    "hint": "Kontrola"
  },
  {
    "word": "Klawiatura",
    "category": "Technologia i Gadżety",
    "hint": "Myśli"
  },
  {
    "word": "Myszka",
    "category": "Technologia i Gadżety",
    "hint": "Wybór"
  },
  {
    "word": "Monitor",
    "category": "Technologia i Gadżety",
    "hint": "Okno"
  },
  {
    "word": "Drukarka",
    "category": "Technologia i Gadżety",
    "hint": "Papier"
  },
  {
    "word": "Skaner",
    "category": "Technologia i Gadżety",
    "hint": "Kopia"
  },
  {
    "word": "Ruter",
    "category": "Technologia i Gadżety",
    "hint": "Łączność"
  },
  {
    "word": "Pendrive",
    "category": "Technologia i Gadżety",
    "hint": "Kieszeń"
  },
  {
    "word": "Dysk",
    "category": "Technologia i Gadżety",
    "hint": "Pamięć"
  },
  {
    "word": "Powerbank",
    "category": "Technologia i Gadżety",
    "hint": "Zapas"
  },
  {
    "word": "Ładowarka",
    "category": "Technologia i Gadżety",
    "hint": "Życie"
  },
  {
    "word": "Bateria",
    "category": "Technologia i Gadżety",
    "hint": "Energia"
  },
  {
    "word": "Pralka",
    "category": "Technologia i Gadżety",
    "hint": "Świeżość"
  },
  {
    "word": "Zmywarka",
    "category": "Technologia i Gadżety",
    "hint": "Ułatwienie"
  },
  {
    "word": "Lodówka",
    "category": "Technologia i Gadżety",
    "hint": "Trwałość"
  },
  {
    "word": "Mikrofalówka",
    "category": "Technologia i Gadżety",
    "hint": "Chwila"
  },
  {
    "word": "Piekarnik",
    "category": "Technologia i Gadżety",
    "hint": "Ciepło"
  },
  {
    "word": "Toster",
    "category": "Technologia i Gadżety",
    "hint": "Chrupkość"
  },
  {
    "word": "Opiekacz",
    "category": "Technologia i Gadżety",
    "hint": "Ser"
  },
  {
    "word": "Blender",
    "category": "Technologia i Gadżety",
    "hint": "Zdrowie"
  },
  {
    "word": "Mikser",
    "category": "Technologia i Gadżety",
    "hint": "Puszystość"
  },
  {
    "word": "Ekspres",
    "category": "Technologia i Gadżety",
    "hint": "Rytuał"
  },
  {
    "word": "Klimatyzator",
    "category": "Technologia i Gadżety",
    "hint": "Ulga"
  },
  {
    "word": "Wentylator",
    "category": "Technologia i Gadżety",
    "hint": "Ruch"
  },
  {
    "word": "Smartwatch",
    "category": "Technologia i Gadżety",
    "hint": "Kroki"
  },
  {
    "word": "Projektor",
    "category": "Technologia i Gadżety",
    "hint": "Klimat"
  },
  {
    "word": "Gramofon",
    "category": "Technologia i Gadżety",
    "hint": "Nostalgia"
  },
  {
    "word": "Kalkulator",
    "category": "Technologia i Gadżety",
    "hint": "Pewność"
  },
  {
    "word": "Światłowód",
    "category": "Technologia i Gadżety",
    "hint": "Prędkość"
  },
  {
    "word": "Rower",
    "category": "Pojazdy i Maszyny",
    "hint": "Zdrowie"
  },
  {
    "word": "Hulajnoga",
    "category": "Pojazdy i Maszyny",
    "hint": "Lekkość"
  },
  {
    "word": "Deskorolka",
    "category": "Pojazdy i Maszyny",
    "hint": "Młodość"
  },
  {
    "word": "Rolki",
    "category": "Pojazdy i Maszyny",
    "hint": "Płynność"
  },
  {
    "word": "Motocykl",
    "category": "Pojazdy i Maszyny",
    "hint": "Wolność"
  },
  {
    "word": "Skuter",
    "category": "Pojazdy i Maszyny",
    "hint": "Miasto"
  },
  {
    "word": "Quad",
    "category": "Pojazdy i Maszyny",
    "hint": "Bezdroża"
  },
  {
    "word": "Samochód",
    "category": "Pojazdy i Maszyny",
    "hint": "Niezależność"
  },
  {
    "word": "Kabriolet",
    "category": "Pojazdy i Maszyny",
    "hint": "Wiatr"
  },
  {
    "word": "Limuzyna",
    "category": "Pojazdy i Maszyny",
    "hint": "Prestiż"
  },
  {
    "word": "Taksówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Pośpiech"
  },
  {
    "word": "Karetka",
    "category": "Pojazdy i Maszyny",
    "hint": "Ratunek"
  },
  {
    "word": "Radiowóz",
    "category": "Pojazdy i Maszyny",
    "hint": "Sygnał"
  },
  {
    "word": "Śmieciarka",
    "category": "Pojazdy i Maszyny",
    "hint": "Porządek"
  },
  {
    "word": "Autobus",
    "category": "Pojazdy i Maszyny",
    "hint": "Wspólnota"
  },
  {
    "word": "Autokar",
    "category": "Pojazdy i Maszyny",
    "hint": "Wycieczka"
  },
  {
    "word": "Tramwaj",
    "category": "Pojazdy i Maszyny",
    "hint": "Miasto"
  },
  {
    "word": "Pociąg",
    "category": "Pojazdy i Maszyny",
    "hint": "Krajobraz"
  },
  {
    "word": "Metro",
    "category": "Pojazdy i Maszyny",
    "hint": "Ciemność"
  },
  {
    "word": "Lokomotywa",
    "category": "Pojazdy i Maszyny",
    "hint": "Siła"
  },
  {
    "word": "Ciężarówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Dostawa"
  },
  {
    "word": "Traktor",
    "category": "Pojazdy i Maszyny",
    "hint": "Gospodarstwo"
  },
  {
    "word": "Kombajn",
    "category": "Pojazdy i Maszyny",
    "hint": "Lato"
  },
  {
    "word": "Koparka",
    "category": "Pojazdy i Maszyny",
    "hint": "Zmiana"
  },
  {
    "word": "Spychacz",
    "category": "Pojazdy i Maszyny",
    "hint": "Teren"
  },
  {
    "word": "Dźwig",
    "category": "Pojazdy i Maszyny",
    "hint": "Wysokość"
  },
  {
    "word": "Walec",
    "category": "Pojazdy i Maszyny",
    "hint": "Nawierzchnia"
  },
  {
    "word": "Kajak",
    "category": "Pojazdy i Maszyny",
    "hint": "Przygoda"
  },
  {
    "word": "Ponton",
    "category": "Pojazdy i Maszyny",
    "hint": "Wypoczynek"
  },
  {
    "word": "Żaglówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Cisza"
  },
  {
    "word": "Jacht",
    "category": "Pojazdy i Maszyny",
    "hint": "Luksus"
  },
  {
    "word": "Statek",
    "category": "Pojazdy i Maszyny",
    "hint": "Rejs"
  },
  {
    "word": "Prom",
    "category": "Pojazdy i Maszyny",
    "hint": "Brzeg"
  },
  {
    "word": "Barka",
    "category": "Pojazdy i Maszyny",
    "hint": "Nurt"
  },
  {
    "word": "Holownik",
    "category": "Pojazdy i Maszyny",
    "hint": "Asysta"
  },
  {
    "word": "Kuter",
    "category": "Pojazdy i Maszyny",
    "hint": "Fale"
  },
  {
    "word": "Motorówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Adrenalina"
  },
  {
    "word": "Lodołamacz",
    "category": "Pojazdy i Maszyny",
    "hint": "Wytrwałość"
  },
  {
    "word": "Samolot",
    "category": "Pojazdy i Maszyny",
    "hint": "Odległość"
  },
  {
    "word": "Awionetka",
    "category": "Pojazdy i Maszyny",
    "hint": "Krajobraz"
  },
  {
    "word": "Szybowiec",
    "category": "Pojazdy i Maszyny",
    "hint": "Prądy"
  },
  {
    "word": "Helikopter",
    "category": "Pojazdy i Maszyny",
    "hint": "Zasięg"
  },
  {
    "word": "Balon",
    "category": "Pojazdy i Maszyny",
    "hint": "Spokój"
  },
  {
    "word": "Sterowiec",
    "category": "Pojazdy i Maszyny",
    "hint": "Historia"
  },
  {
    "word": "Rakieta",
    "category": "Pojazdy i Maszyny",
    "hint": "Odzysk"
  },
  {
    "word": "Łazik",
    "category": "Pojazdy i Maszyny",
    "hint": "Samotność"
  },
  {
    "word": "Tęcza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Optymizm"
  },
  {
    "word": "Błyskawica",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Moment"
  },
  {
    "word": "Grzmot",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Dźwięk"
  },
  {
    "word": "Burza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Niepokój"
  },
  {
    "word": "Tornado",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zniszczenie"
  },
  {
    "word": "Huragan",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Potęga"
  },
  {
    "word": "Zorza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Cud"
  },
  {
    "word": "Tsunami",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Ściana"
  },
  {
    "word": "Lawina",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zaskoczenie"
  },
  {
    "word": "Mgła",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Niepewność"
  },
  {
    "word": "Rosa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Świt"
  },
  {
    "word": "Szron",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Chłód"
  },
  {
    "word": "Grad",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Niespodzianka"
  },
  {
    "word": "Śnieżyca",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zamieć"
  },
  {
    "word": "Ulewa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Obfitość"
  },
  {
    "word": "Sopel",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zima"
  },
  {
    "word": "Słońce",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Życie"
  },
  {
    "word": "Księżyc",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Sny"
  },
  {
    "word": "Gwiazda",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Życzenie"
  },
  {
    "word": "Kometa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zjawisko"
  },
  {
    "word": "Meteor",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Sekunda"
  },
  {
    "word": "Asteroida",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Pustka"
  },
  {
    "word": "Gejzer",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Natura"
  },
  {
    "word": "Rafa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Bogactwo"
  },
  {
    "word": "Szczyt",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Cel"
  },
  {
    "word": "Wąwóz",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Głębokość"
  },
  {
    "word": "Półwysep",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Cypel"
  },
  {
    "word": "Zatoka",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Spokój"
  },
  {
    "word": "Dąb",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wiek"
  },
  {
    "word": "Sosna",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Żywica"
  },
  {
    "word": "Świerk",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zieleń"
  },
  {
    "word": "Brzoza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Biel"
  },
  {
    "word": "Wierzba",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Smutek"
  },
  {
    "word": "Kaktus",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Odporność"
  },
  {
    "word": "Lotos",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Czystość"
  },
  {
    "word": "Borowik",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Nagroda"
  },
  {
    "word": "Muchomor",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Pozór"
  },
  {
    "word": "Róża",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Uczucie"
  },
  {
    "word": "Tulipan",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wiosna"
  },
  {
    "word": "Słonecznik",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Ciepło"
  },
  {
    "word": "Stokrotka",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Niewinność"
  },
  {
    "word": "Mlecz",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Złoto"
  },
  {
    "word": "Bambus",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Elastyczność"
  },
  {
    "word": "Baobab",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Potęga"
  },
  {
    "word": "Sekwoja",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wieczność"
  },
  {
    "word": "Koszykówka",
    "category": "Sport, Hobby i Gry",
    "hint": "Wzrost"
  },
  {
    "word": "Siatkówka",
    "category": "Sport, Hobby i Gry",
    "hint": "Zgranie"
  },
  {
    "word": "Badminton",
    "category": "Sport, Hobby i Gry",
    "hint": "Lekkość"
  },
  {
    "word": "Hokej",
    "category": "Sport, Hobby i Gry",
    "hint": "Dynamika"
  },
  {
    "word": "Łyżwiarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Płynność"
  },
  {
    "word": "Narciarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Prędkość"
  },
  {
    "word": "Snowboard",
    "category": "Sport, Hobby i Gry",
    "hint": "Styl"
  },
  {
    "word": "Bieganie",
    "category": "Sport, Hobby i Gry",
    "hint": "Endorfiny"
  },
  {
    "word": "Maraton",
    "category": "Sport, Hobby i Gry",
    "hint": "Wytrwałość"
  },
  {
    "word": "Pływanie",
    "category": "Sport, Hobby i Gry",
    "hint": "Oddech"
  },
  {
    "word": "Szachy",
    "category": "Sport, Hobby i Gry",
    "hint": "Strategia"
  },
  {
    "word": "Warcaby",
    "category": "Sport, Hobby i Gry",
    "hint": "Przekątna"
  },
  {
    "word": "Poker",
    "category": "Sport, Hobby i Gry",
    "hint": "Twarz"
  },
  {
    "word": "Kostka",
    "category": "Sport, Hobby i Gry",
    "hint": "Los"
  },
  {
    "word": "Puzzle",
    "category": "Sport, Hobby i Gry",
    "hint": "Układanka"
  },
  {
    "word": "Klocki",
    "category": "Sport, Hobby i Gry",
    "hint": "Kreacja"
  },
  {
    "word": "Bilard",
    "category": "Sport, Hobby i Gry",
    "hint": "Geometria"
  },
  {
    "word": "Kręgle",
    "category": "Sport, Hobby i Gry",
    "hint": "Czystość"
  },
  {
    "word": "Rzutki",
    "category": "Sport, Hobby i Gry",
    "hint": "Oko"
  },
  {
    "word": "Łucznictwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Skupienie"
  },
  {
    "word": "Szermierka",
    "category": "Sport, Hobby i Gry",
    "hint": "Refleks"
  },
  {
    "word": "Boks",
    "category": "Sport, Hobby i Gry",
    "hint": "Dystans"
  },
  {
    "word": "Judo",
    "category": "Sport, Hobby i Gry",
    "hint": "Szacunek"
  },
  {
    "word": "Karate",
    "category": "Sport, Hobby i Gry",
    "hint": "Dyscyplina"
  },
  {
    "word": "Wspinaczka",
    "category": "Sport, Hobby i Gry",
    "hint": "Zaufanie"
  },
  {
    "word": "Kolarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Wysiłek"
  },
  {
    "word": "Wioślarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Rytm"
  },
  {
    "word": "Windsurfing",
    "category": "Sport, Hobby i Gry",
    "hint": "Balans"
  },
  {
    "word": "Kitesurfing",
    "category": "Sport, Hobby i Gry",
    "hint": "Powietrze"
  },
  {
    "word": "Wędkarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Cierpliwość"
  },
  {
    "word": "Gitara",
    "category": "Sport, Hobby i Gry",
    "hint": "Nastroje"
  },
  {
    "word": "Pianino",
    "category": "Sport, Hobby i Gry",
    "hint": "Klasyka"
  },
  {
    "word": "Perkusja",
    "category": "Sport, Hobby i Gry",
    "hint": "Serce"
  },
  {
    "word": "Skrzypce",
    "category": "Sport, Hobby i Gry",
    "hint": "Emocje"
  },
  {
    "word": "Trąbka",
    "category": "Sport, Hobby i Gry",
    "hint": "Blask"
  },
  {
    "word": "Saksofon",
    "category": "Sport, Hobby i Gry",
    "hint": "Klimat"
  },
  {
    "word": "Harmonijka",
    "category": "Sport, Hobby i Gry",
    "hint": "Kieszeń"
  },
  {
    "word": "Flet",
    "category": "Sport, Hobby i Gry",
    "hint": "Powiew"
  },
  {
    "word": "Akordeon",
    "category": "Sport, Hobby i Gry",
    "hint": "Biesiada"
  },
  {
    "word": "Karaoke",
    "category": "Sport, Hobby i Gry",
    "hint": "Odwaga"
  },
  {
    "word": "Origami",
    "category": "Sport, Hobby i Gry",
    "hint": "Delikatność"
  },
  {
    "word": "Garncarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Kształt"
  },
  {
    "word": "Szydełkowanie",
    "category": "Sport, Hobby i Gry",
    "hint": "Spokój"
  },
  {
    "word": "Koszula",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Szyk"
  },
  {
    "word": "Krawat",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Oficjalność"
  },
  {
    "word": "Garnitur",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Uroczystość"
  },
  {
    "word": "Sukienka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Urok"
  },
  {
    "word": "Spódnica",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Swoboda"
  },
  {
    "word": "Jeansy",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Codzienność"
  },
  {
    "word": "Sweter",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Zimno"
  },
  {
    "word": "Bluza",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Komfort"
  },
  {
    "word": "Kurtka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Ochrona"
  },
  {
    "word": "Płaszcz",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Spacer"
  },
  {
    "word": "Czapka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Mrozik"
  },
  {
    "word": "Kapelusz",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Klasa"
  },
  {
    "word": "Cylinder",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Magia"
  },
  {
    "word": "Szalik",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Otulenie"
  },
  {
    "word": "Rękawiczki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Dotyk"
  },
  {
    "word": "Skarpetki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Miękkość"
  },
  {
    "word": "Trampki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Krok"
  },
  {
    "word": "Szpilki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wysokość"
  },
  {
    "word": "Kozaki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Zima"
  },
  {
    "word": "Kalosze",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Kałuża"
  },
  {
    "word": "Sandały",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wakacje"
  },
  {
    "word": "Klapki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Luz"
  },
  {
    "word": "Pasek",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Dopasowanie"
  },
  {
    "word": "Torebka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Drobiazgi"
  },
  {
    "word": "Walizka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wyjazd"
  },
  {
    "word": "Pierścionek",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Obietnica"
  },
  {
    "word": "Naszyjnik",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Ozdoba"
  },
  {
    "word": "Kolczyki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Blask"
  },
  {
    "word": "Bransoletka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Pamiątka"
  },
  {
    "word": "Łóżko",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Sny"
  },
  {
    "word": "Sofa",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Popołudnie"
  },
  {
    "word": "Fotel",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Samotność"
  },
  {
    "word": "Stół",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Wspólnota"
  },
  {
    "word": "Krzesło",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Miejsce"
  },
  {
    "word": "Szafa",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Wnętrze"
  },
  {
    "word": "Komoda",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Przechowanie"
  },
  {
    "word": "Regał",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Zbiór"
  },
  {
    "word": "Biurko",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Skupienie"
  },
  {
    "word": "Wanna",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Relaks"
  },
  {
    "word": "Prysznic",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Pobudka"
  },
  {
    "word": "Umywalka",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Świeżość"
  },
  {
    "word": "Zlew",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Kuchnia"
  },
  {
    "word": "Dywan",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Wygłuszenie"
  },
  {
    "word": "Firanka",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Światło"
  },
  {
    "word": "Zasłona",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Intymność"
  },
  {
    "word": "Żyrandol",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Jasność"
  },
  {
    "word": "Lampa",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Wieczór"
  },
  {
    "word": "Wazon",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Życie"
  },
  {
    "word": "Ramka",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Wspomnienie"
  },
  {
    "word": "Zegar",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Rytm"
  },
  {
    "word": "Kominek",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Ciepło"
  },
  {
    "word": "Rycerz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Honor"
  },
  {
    "word": "Pirat",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Skarb"
  },
  {
    "word": "Wiking",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Wyprawa"
  },
  {
    "word": "Samuraj",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Wierność"
  },
  {
    "word": "Ninja",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Cisza"
  },
  {
    "word": "Kowboj",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Horyzont"
  },
  {
    "word": "Król",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Odpowiedzialność"
  },
  {
    "word": "Królowa",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Dyplomacja"
  },
  {
    "word": "Książę",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Młodość"
  },
  {
    "word": "Księżniczka",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Los"
  },
  {
    "word": "Czarodziej",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Wiedza"
  },
  {
    "word": "Czarownica",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zioła"
  },
  {
    "word": "Smok",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Strażnik"
  },
  {
    "word": "Jednorożec",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Czystość"
  },
  {
    "word": "Pegaz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Natchnienie"
  },
  {
    "word": "Elf",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Długowieczność"
  },
  {
    "word": "Krasnolud",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Rzemiosło"
  },
  {
    "word": "Wampir",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Nieśmiertelność"
  },
  {
    "word": "Wilkołak",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Natura"
  },
  {
    "word": "Zombie",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Koniec"
  },
  {
    "word": "Duch",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Pamięć"
  },
  {
    "word": "Mumia",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Bandaż"
  },
  {
    "word": "Faraon",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Wieczność"
  },
  {
    "word": "Piramida",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Trwałość"
  },
  {
    "word": "Sfinks",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Milczenie"
  },
  {
    "word": "Skarb",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Pożądanie"
  },
  {
    "word": "Syrena",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Pokusa"
  },
  {
    "word": "Kosmita",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Obcość"
  },
  {
    "word": "UFO",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zagadka"
  },
  {
    "word": "Różdżka",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Kierunek"
  },
  {
    "word": "Miecz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Rozstrzygnięcie"
  },
  {
    "word": "Tarcza",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Ochrona"
  },
  {
    "word": "Katapulta",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Oblężenie"
  },
  {
    "word": "Armata",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Donośność"
  },
  {
    "word": "Graal",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Poszukiwanie"
  },
  {
    "word": "Kraken",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Niezmierzoność"
  },
  {
    "word": "Cerber",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Granica"
  },
  {
    "word": "Serce",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Emocje"
  },
  {
    "word": "Mózg",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Rozsądek"
  },
  {
    "word": "Oko",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Świat"
  },
  {
    "word": "Ucho",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Odbiór"
  },
  {
    "word": "Nos",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Intuicja"
  },
  {
    "word": "Usta",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Wyraz"
  },
  {
    "word": "Dłoń",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Pomoc"
  },
  {
    "word": "Stopa",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Kierunek"
  },
  {
    "word": "Uśmiech",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Otwartość"
  },
  {
    "word": "Łza",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Uczucie"
  },
  {
    "word": "Odcisk",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Tożsamość"
  },
  {
    "word": "Cień",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Wierność"
  },
  {
    "word": "Tablica",
    "category": "Szkoła i Edukacja",
    "hint": "Wyjaśnienie"
  },
  {
    "word": "Kreda",
    "category": "Szkoła i Edukacja",
    "hint": "Ślad"
  },
  {
    "word": "Gąbka",
    "category": "Szkoła i Edukacja",
    "hint": "Czystość"
  },
  {
    "word": "Piórnik",
    "category": "Szkoła i Edukacja",
    "hint": "Porządek"
  },
  {
    "word": "Dziennik",
    "category": "Szkoła i Edukacja",
    "hint": "Obecność"
  },
  {
    "word": "Dzwonek",
    "category": "Szkoła i Edukacja",
    "hint": "Ukojenie"
  },
  {
    "word": "Tornister",
    "category": "Szkoła i Edukacja",
    "hint": "Ciężar"
  },
  {
    "word": "Cyrkiel",
    "category": "Szkoła i Edukacja",
    "hint": "Doskonałość"
  },
  {
    "word": "Kątomierz",
    "category": "Szkoła i Edukacja",
    "hint": "Pomiar"
  },
  {
    "word": "Ekierka",
    "category": "Szkoła i Edukacja",
    "hint": "Prostota"
  },
  {
    "word": "Świadectwo",
    "category": "Szkoła i Edukacja",
    "hint": "Podsumowanie"
  },
  {
    "word": "Dyplom",
    "category": "Szkoła i Edukacja",
    "hint": "Duma"
  },
  {
    "word": "Teczka",
    "category": "Szkoła i Edukacja",
    "hint": "Dyskrecja"
  },
  {
    "word": "Flamaster",
    "category": "Szkoła i Edukacja",
    "hint": "Intensywność"
  },
  {
    "word": "Korektor",
    "category": "Szkoła i Edukacja",
    "hint": "Zamazanie"
  },
  {
    "word": "Plastelina",
    "category": "Szkoła i Edukacja",
    "hint": "Forma"
  },
  {
    "word": "Modelina",
    "category": "Szkoła i Edukacja",
    "hint": "Trwałość"
  },
  {
    "word": "Farby",
    "category": "Szkoła i Edukacja",
    "hint": "Barwy"
  },
  {
    "word": "Kredki",
    "category": "Szkoła i Edukacja",
    "hint": "Rysunek"
  },
  {
    "word": "Pióro",
    "category": "Szkoła i Edukacja",
    "hint": "Elegancja"
  },
  {
    "word": "Atrament",
    "category": "Szkoła i Edukacja",
    "hint": "Trwałość"
  },
  {
    "word": "Atlas",
    "category": "Szkoła i Edukacja",
    "hint": "Wyprawa"
  },
  {
    "word": "Słownik",
    "category": "Szkoła i Edukacja",
    "hint": "Słownictwo"
  },
  {
    "word": "Encyklopedia",
    "category": "Szkoła i Edukacja",
    "hint": "Zakres"
  },
  {
    "word": "Puzon",
    "category": "Muzyka i Dźwięk",
    "hint": "Donośność"
  },
  {
    "word": "Tuba",
    "category": "Muzyka i Dźwięk",
    "hint": "Głębia"
  },
  {
    "word": "Waltornia",
    "category": "Muzyka i Dźwięk",
    "hint": "Las"
  },
  {
    "word": "Klarnet",
    "category": "Muzyka i Dźwięk",
    "hint": "Ciepło"
  },
  {
    "word": "Oboj",
    "category": "Muzyka i Dźwięk",
    "hint": "Tęsknota"
  },
  {
    "word": "Fagot",
    "category": "Muzyka i Dźwięk",
    "hint": "Niski"
  },
  {
    "word": "Harfa",
    "category": "Muzyka i Dźwięk",
    "hint": "Anioł"
  },
  {
    "word": "Wiolonczela",
    "category": "Muzyka i Dźwięk",
    "hint": "Ciepło"
  },
  {
    "word": "Kontrabas",
    "category": "Muzyka i Dźwięk",
    "hint": "Podstawa"
  },
  {
    "word": "Ksylofon",
    "category": "Muzyka i Dźwięk",
    "hint": "Radość"
  },
  {
    "word": "Trójkąt",
    "category": "Muzyka i Dźwięk",
    "hint": "Czystość"
  },
  {
    "word": "Tamburyn",
    "category": "Muzyka i Dźwięk",
    "hint": "Błysk"
  },
  {
    "word": "Kastaniety",
    "category": "Muzyka i Dźwięk",
    "hint": "Taniec"
  },
  {
    "word": "Kongi",
    "category": "Muzyka i Dźwięk",
    "hint": "Rytm"
  },
  {
    "word": "Syntezator",
    "category": "Muzyka i Dźwięk",
    "hint": "Eksperyment"
  },
  {
    "word": "Wzmacniacz",
    "category": "Muzyka i Dźwięk",
    "hint": "Głośność"
  },
  {
    "word": "Struna",
    "category": "Muzyka i Dźwięk",
    "hint": "Napięcie"
  },
  {
    "word": "Batuta",
    "category": "Muzyka i Dźwięk",
    "hint": "Skupienie"
  },
  {
    "word": "Pulpit",
    "category": "Muzyka i Dźwięk",
    "hint": "Oparcie"
  },
  {
    "word": "Nuty",
    "category": "Muzyka i Dźwięk",
    "hint": "Zapis"
  },
  {
    "word": "Metronom",
    "category": "Muzyka i Dźwięk",
    "hint": "Równość"
  },
  {
    "word": "Chodnik",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Krok"
  },
  {
    "word": "Krawężnik",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Granica"
  },
  {
    "word": "Pasy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Bezpieczeństwo"
  },
  {
    "word": "Światła",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Ruch"
  },
  {
    "word": "Ławka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Chwila"
  },
  {
    "word": "Skrzynka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "List"
  },
  {
    "word": "Biletomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Podróż"
  },
  {
    "word": "Bankomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Potrzeba"
  },
  {
    "word": "Wpłatomierz",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Zasilenie"
  },
  {
    "word": "Parkomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Czas"
  },
  {
    "word": "Barierka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Ochrona"
  },
  {
    "word": "Wiata",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Schronienie"
  },
  {
    "word": "Wózek",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Zapasy"
  },
  {
    "word": "Kasa",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Rachunek"
  },
  {
    "word": "Budka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Przeszłość"
  },
  {
    "word": "Rondo",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Płynność"
  },
  {
    "word": "Autostrada",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Przestrzeń"
  },
  {
    "word": "Koniczyna",
    "category": "Rośliny, Ogród i Las",
    "hint": "Nadzieja"
  },
  {
    "word": "Paproć",
    "category": "Rośliny, Ogród i Las",
    "hint": "Cień"
  },
  {
    "word": "Mech",
    "category": "Rośliny, Ogród i Las",
    "hint": "Miękkość"
  },
  {
    "word": "Porost",
    "category": "Rośliny, Ogród i Las",
    "hint": "Czystość"
  },
  {
    "word": "Jodła",
    "category": "Rośliny, Ogród i Las",
    "hint": "Zima"
  },
  {
    "word": "Modrzew",
    "category": "Rośliny, Ogród i Las",
    "hint": "Jesień"
  },
  {
    "word": "Lipa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Spokój"
  },
  {
    "word": "Kasztanowiec",
    "category": "Rośliny, Ogród i Las",
    "hint": "Jesień"
  },
  {
    "word": "Jarzębina",
    "category": "Rośliny, Ogród i Las",
    "hint": "Korale"
  },
  {
    "word": "Głóg",
    "category": "Rośliny, Ogród i Las",
    "hint": "Zdrowie"
  },
  {
    "word": "Pokrzywa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Uwaga"
  },
  {
    "word": "Rumianek",
    "category": "Rośliny, Ogród i Las",
    "hint": "Ukojenie"
  },
  {
    "word": "Mięta",
    "category": "Rośliny, Ogród i Las",
    "hint": "Świeżość"
  },
  {
    "word": "Melisa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Sen"
  },
  {
    "word": "Lawenda",
    "category": "Rośliny, Ogród i Las",
    "hint": "Aromat"
  },
  {
    "word": "Krokus",
    "category": "Rośliny, Ogród i Las",
    "hint": "Budzenie"
  },
  {
    "word": "Przebiśnieg",
    "category": "Rośliny, Ogród i Las",
    "hint": "Nadzieja"
  },
  {
    "word": "Konwalia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Maj"
  },
  {
    "word": "Storczyk",
    "category": "Rośliny, Ogród i Las",
    "hint": "Ozdoba"
  },
  {
    "word": "Begonia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Ogród"
  },
  {
    "word": "Pelargonia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Dom"
  },
  {
    "word": "Papirus",
    "category": "Rośliny, Ogród i Las",
    "hint": "Historia"
  },
  {
    "word": "Krokiet",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Uczta"
  },
  {
    "word": "Kopytka",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Dom"
  },
  {
    "word": "Oscypek",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Góry"
  },
  {
    "word": "Bryndza",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Pasterz"
  },
  {
    "word": "Babka",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Niedziela"
  },
  {
    "word": "Cynamon",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Ciepło"
  },
  {
    "word": "Wanilia",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Delikatność"
  },
  {
    "word": "Imbir",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Rozgrzanie"
  },
  {
    "word": "Kurkuma",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Kolor"
  },
  {
    "word": "Goździki",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Święta"
  },
  {
    "word": "Pieprz",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Wyrazistość"
  },
  {
    "word": "Sól",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Sens"
  },
  {
    "word": "Rodzynki",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Niespodzianka"
  },
  {
    "word": "Migdał",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Aromat"
  },
  {
    "word": "Pistacje",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Zielony"
  },
  {
    "word": "Pochodnia",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Odwaga"
  },
  {
    "word": "Świecznik",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Uroczystość"
  },
  {
    "word": "Amulet",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Wiara"
  },
  {
    "word": "Talizman",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Przeznaczenie"
  },
  {
    "word": "Kompas",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Północ"
  },
  {
    "word": "Sekstans",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Gwiazdy"
  },
  {
    "word": "Klepsydra",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Przemijanie"
  },
  {
    "word": "Pozytywka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Melodia"
  },
  {
    "word": "Monokl",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Elegancja"
  },
  {
    "word": "Laska",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Dojrzałość"
  },
  {
    "word": "Wachlarz",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Tajemnica"
  },
  {
    "word": "Szpachelka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Wyrównanie"
  },
  {
    "word": "Kielnia",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Budowa"
  },
  {
    "word": "Imadło",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Uścisk"
  },
  {
    "word": "Kowadło",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Moc"
  },
  {
    "word": "Dłuto",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Cierpliwość"
  },
  {
    "word": "Heblarka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Wiór"
  },
  {
    "word": "Bierki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Drżenie"
  },
  {
    "word": "Pchełki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zręczność"
  },
  {
    "word": "Domino",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ciąg"
  },
  {
    "word": "Jojo",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Powrót"
  },
  {
    "word": "Bączek",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Obrót"
  },
  {
    "word": "Lalka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Troska"
  },
  {
    "word": "Proca",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Czelność"
  },
  {
    "word": "Latawiec",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Marzenie"
  },
  {
    "word": "Skakanka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Kondycja"
  },
  {
    "word": "Cymbergaj",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Refleks"
  },
  {
    "word": "Piłkarzyki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Emocje"
  },
  {
    "word": "Planszówka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wieczór"
  },
  {
    "word": "Kalambury",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Śmiech"
  },
  {
    "word": "Huśtawka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Lot"
  },
  {
    "word": "Zjeżdżalnia",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Śmiałość"
  },
  {
    "word": "Piaskownica",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Budowa"
  },
  {
    "word": "Karuzela",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zawrót"
  },
  {
    "word": "Hamak",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Spokój"
  },
  {
    "word": "Leżak",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Słońce"
  },
  {
    "word": "Parawan",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Granica"
  },
  {
    "word": "Kotwica",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Stałość"
  },
  {
    "word": "Peryskop",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Głębia"
  },
  {
    "word": "Skafander",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Izolacja"
  },
  {
    "word": "Hełm",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Bezpieczeństwo"
  },
  {
    "word": "Maska",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ukrycie"
  },
  {
    "word": "Lornetka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Dystans"
  },
  {
    "word": "Peruka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zmiana"
  },
  {
    "word": "Wąsy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wygląd"
  },
  {
    "word": "Broda",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Dojrzałość"
  },
  {
    "word": "Tatuaż",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Znak"
  },
  {
    "word": "Kufel",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Spotkanie"
  },
  {
    "word": "Kielich",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Uczta"
  },
  {
    "word": "Puchar",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Triumf"
  },
  {
    "word": "Medal",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wyróżnienie"
  },
  {
    "word": "Wieniec",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zwycięstwo"
  },
  {
    "word": "Znicz",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Tradycja"
  },
  {
    "word": "Gwizdek",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Uwaga"
  },
  {
    "word": "Ryś",
    "category": "Zwierzęta",
    "hint": "Pędzelek"
  },
  {
    "word": "Żbik",
    "category": "Zwierzęta",
    "hint": "Tajemnica"
  },
  {
    "word": "Kuna",
    "category": "Zwierzęta",
    "hint": "Zwrotność"
  },
  {
    "word": "Gronostaj",
    "category": "Zwierzęta",
    "hint": "Szlachetność"
  },
  {
    "word": "Łasica",
    "category": "Zwierzęta",
    "hint": "Szybkość"
  },
  {
    "word": "Daniel",
    "category": "Zwierzęta",
    "hint": "Ogród"
  },
  {
    "word": "Muflon",
    "category": "Zwierzęta",
    "hint": "Zakręt"
  },
  {
    "word": "Kozica",
    "category": "Zwierzęta",
    "hint": "Turnia"
  },
  {
    "word": "Świstak",
    "category": "Zwierzęta",
    "hint": "Gwizd"
  },
  {
    "word": "Jenot",
    "category": "Zwierzęta",
    "hint": "Spryt"
  },
  {
    "word": "Bielik",
    "category": "Zwierzęta",
    "hint": "Godło"
  },
  {
    "word": "Drozd",
    "category": "Zwierzęta",
    "hint": "Śpiew"
  },
  {
    "word": "Kos",
    "category": "Zwierzęta",
    "hint": "Poranek"
  },
  {
    "word": "Sikorka",
    "category": "Zwierzęta",
    "hint": "Zima"
  },
  {
    "word": "Wilga",
    "category": "Zwierzęta",
    "hint": "Żółć"
  },
  {
    "word": "Słowik",
    "category": "Zwierzęta",
    "hint": "Noc"
  },
  {
    "word": "Jaskółka",
    "category": "Zwierzęta",
    "hint": "Wiosna"
  },
  {
    "word": "Jerzyk",
    "category": "Zwierzęta",
    "hint": "Wiatr"
  },
  {
    "word": "Skowronek",
    "category": "Zwierzęta",
    "hint": "Świt"
  },
  {
    "word": "Cietrzew",
    "category": "Zwierzęta",
    "hint": "Taniec"
  },
  {
    "word": "Głuszec",
    "category": "Zwierzęta",
    "hint": "Mrok"
  },
  {
    "word": "Krogulec",
    "category": "Zwierzęta",
    "hint": "Polowanie"
  },
  {
    "word": "Pustułka",
    "category": "Zwierzęta",
    "hint": "Trzepot"
  },
  {
    "word": "Kaniuk",
    "category": "Zwierzęta",
    "hint": "Czatowanie"
  },
  {
    "word": "Błotniak",
    "category": "Zwierzęta",
    "hint": "Nisko"
  },
  {
    "word": "Bąk",
    "category": "Zwierzęta",
    "hint": "Bas"
  },
  {
    "word": "Perkoz",
    "category": "Zwierzęta",
    "hint": "Nurek"
  },
  {
    "word": "Kormoran",
    "category": "Zwierzęta",
    "hint": "Skrzydła"
  },
  {
    "word": "Brodziec",
    "category": "Zwierzęta",
    "hint": "Piasek"
  },
  {
    "word": "Kulik",
    "category": "Zwierzęta",
    "hint": "Wygięcie"
  },
  {
    "word": "Czajka",
    "category": "Zwierzęta",
    "hint": "Łąka"
  },
  {
    "word": "Agrest",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kolce"
  },
  {
    "word": "Porzeczka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kwas"
  },
  {
    "word": "Jagoda",
    "category": "Jedzenie i Kulinaria",
    "hint": "Las"
  },
  {
    "word": "Poziomka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Polana"
  },
  {
    "word": "Żurawina",
    "category": "Jedzenie i Kulinaria",
    "hint": "Moczary"
  },
  {
    "word": "Daktyl",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słońce"
  },
  {
    "word": "Figa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Śródziemnomorze"
  },
  {
    "word": "Oliwka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Grecja"
  },
  {
    "word": "Kapar",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ostrość"
  },
  {
    "word": "Kokos",
    "category": "Jedzenie i Kulinaria",
    "hint": "Palma"
  },
  {
    "word": "Papaja",
    "category": "Jedzenie i Kulinaria",
    "hint": "Miąższ"
  },
  {
    "word": "Limonka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zieloność"
  },
  {
    "word": "Grejpfrut",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gorycz"
  },
  {
    "word": "Klementynka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodycz"
  },
  {
    "word": "Kumkwat",
    "category": "Jedzenie i Kulinaria",
    "hint": "Miniatura"
  },
  {
    "word": "Koper",
    "category": "Jedzenie i Kulinaria",
    "hint": "Aromat"
  },
  {
    "word": "Pietruszka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Korzeń"
  },
  {
    "word": "Szczypiorek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Świeżość"
  },
  {
    "word": "Rzeżucha",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wielkanoc"
  },
  {
    "word": "Bazylia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Włochy"
  },
  {
    "word": "Oregano",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zioła"
  },
  {
    "word": "Tymianek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zapach"
  },
  {
    "word": "Rozmaryn",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gałązka"
  },
  {
    "word": "Szałwia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zdrowie"
  },
  {
    "word": "Majeranek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tradycja"
  },
  {
    "word": "Lubczyk",
    "category": "Jedzenie i Kulinaria",
    "hint": "Uczucie"
  },
  {
    "word": "Diament",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Twardość"
  },
  {
    "word": "Brylant",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Blask"
  },
  {
    "word": "Bursztyn",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Żywica"
  },
  {
    "word": "Kryształ",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czystość"
  },
  {
    "word": "Rubin",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czerwień"
  },
  {
    "word": "Szmaragd",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zieleń"
  },
  {
    "word": "Szafir",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Błękit"
  },
  {
    "word": "Perła",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Małż"
  },
  {
    "word": "Złoto",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wartość"
  },
  {
    "word": "Srebro",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Połysk"
  },
  {
    "word": "Miedź",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ruda"
  },
  {
    "word": "Mosiądz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Stop"
  },
  {
    "word": "Brąz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Statuetka"
  },
  {
    "word": "Moneta",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Rzut"
  },
  {
    "word": "Banknot",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Papier"
  },
  {
    "word": "Sejf",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szyfr"
  },
  {
    "word": "Skarbonka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Oszczędność"
  },
  {
    "word": "Kufer",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Podróż"
  },
  {
    "word": "Brelok",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pamiątka"
  },
  {
    "word": "Magnes",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Przyciąganie"
  },
  {
    "word": "Flakon",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Aromat"
  },
  {
    "word": "Puzderko",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Schowek"
  },
  {
    "word": "Szkatułka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Biżuteria"
  },
  {
    "word": "Pustkowie",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Cisza"
  },
  {
    "word": "Urwisko",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Krawędź"
  },
  {
    "word": "Przełęcz",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Przejście"
  },
  {
    "word": "Dolina",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Spokój"
  },
  {
    "word": "Potok",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Szmer"
  },
  {
    "word": "Strumień",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Bystrość"
  },
  {
    "word": "Zmierzch",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Koniec"
  },
  {
    "word": "Świt",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Początek"
  },
  {
    "word": "Odwilż",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Krople"
  },
  {
    "word": "Skwar",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Żar"
  },
  {
    "word": "Zawieja",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wicher"
  },
  {
    "word": "Mżawka",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Krople"
  },
  {
    "word": "Chmura",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kształt"
  },
  {
    "word": "Obłok",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Lekkość"
  },
  {
    "word": "Kropla",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Drobiazg"
  },
  {
    "word": "Fala",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Rytm"
  },
  {
    "word": "Odpływ",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Piasek"
  },
  {
    "word": "Przypływ",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Żywioł"
  },
  {
    "word": "Głębia",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Tajemnica"
  },
  {
    "word": "Otchłań",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Ciemność"
  },
  {
    "word": "Melodia",
    "category": "Muzyka i Dźwięk",
    "hint": "Wspomnienie"
  },
  {
    "word": "Rytm",
    "category": "Muzyka i Dźwięk",
    "hint": "Puls"
  },
  {
    "word": "Akord",
    "category": "Muzyka i Dźwięk",
    "hint": "Zgodność"
  },
  {
    "word": "Barwa",
    "category": "Muzyka i Dźwięk",
    "hint": "Ciepło"
  },
  {
    "word": "Gama",
    "category": "Muzyka i Dźwięk",
    "hint": "Skala"
  },
  {
    "word": "Solo",
    "category": "Muzyka i Dźwięk",
    "hint": "Samotność"
  },
  {
    "word": "Duet",
    "category": "Muzyka i Dźwięk",
    "hint": "Dialog"
  },
  {
    "word": "Chór",
    "category": "Muzyka i Dźwięk",
    "hint": "Moc"
  },
  {
    "word": "Refren",
    "category": "Muzyka i Dźwięk",
    "hint": "Powrót"
  },
  {
    "word": "Zwrotka",
    "category": "Muzyka i Dźwięk",
    "hint": "Opowieść"
  },
  {
    "word": "Ballada",
    "category": "Muzyka i Dźwięk",
    "hint": "Nastrój"
  },
  {
    "word": "Płótno",
    "category": "Muzyka i Dźwięk",
    "hint": "Biel"
  },
  {
    "word": "Rzeźba",
    "category": "Muzyka i Dźwięk",
    "hint": "Kształt"
  },
  {
    "word": "Szkic",
    "category": "Muzyka i Dźwięk",
    "hint": "Początek"
  },
  {
    "word": "Witraż",
    "category": "Muzyka i Dźwięk",
    "hint": "Światło"
  },
  {
    "word": "Mozaika",
    "category": "Muzyka i Dźwięk",
    "hint": "Układ"
  },
  {
    "word": "Śmigłowiec",
    "category": "Pojazdy i Maszyny",
    "hint": "Start"
  },
  {
    "word": "Parowóz",
    "category": "Pojazdy i Maszyny",
    "hint": "Para"
  },
  {
    "word": "Drezyna",
    "category": "Pojazdy i Maszyny",
    "hint": "Wysiłek"
  },
  {
    "word": "Tandem",
    "category": "Pojazdy i Maszyny",
    "hint": "Dwoje"
  },
  {
    "word": "Monocykl",
    "category": "Pojazdy i Maszyny",
    "hint": "Balans"
  },
  {
    "word": "Ścigacz",
    "category": "Pojazdy i Maszyny",
    "hint": "Ryk"
  },
  {
    "word": "Tratwa",
    "category": "Pojazdy i Maszyny",
    "hint": "Prąd"
  },
  {
    "word": "Fregata",
    "category": "Pojazdy i Maszyny",
    "hint": "Żagle"
  },
  {
    "word": "Gondola",
    "category": "Pojazdy i Maszyny",
    "hint": "Wenecja"
  },
  {
    "word": "Karawela",
    "category": "Pojazdy i Maszyny",
    "hint": "Odkrycie"
  },
  {
    "word": "Szalupa",
    "category": "Pojazdy i Maszyny",
    "hint": "Ratunek"
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = IMPOSTOR_WORDS;
  } else {
    root.IMPOSTOR_WORDS = IMPOSTOR_WORDS;
  }
})(typeof window !== 'undefined' ? window : this);
