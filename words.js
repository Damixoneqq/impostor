/**
 * Baza słów dla gry "Impostor" (kalkulator ról / master screen pass-and-play).
 * Zawiera 1026 unikalnych polskich słów z jedno-słownymi, subtelnymi podpowiedziami.
 */
(function(root) {
  const IMPOSTOR_WORDS = [
  {
    "word": "Pies",
    "category": "Zwierzęta",
    "hint": "Smycz"
  },
  {
    "word": "Kot",
    "category": "Zwierzęta",
    "hint": "Mruczenie"
  },
  {
    "word": "Koń",
    "category": "Zwierzęta",
    "hint": "Kopyta"
  },
  {
    "word": "Krowa",
    "category": "Zwierzęta",
    "hint": "Łąka"
  },
  {
    "word": "Owca",
    "category": "Zwierzęta",
    "hint": "Wełna"
  },
  {
    "word": "Świnia",
    "category": "Zwierzęta",
    "hint": "Koryto"
  },
  {
    "word": "Koza",
    "category": "Zwierzęta",
    "hint": "Skały"
  },
  {
    "word": "Kura",
    "category": "Zwierzęta",
    "hint": "Ziarno"
  },
  {
    "word": "Kogut",
    "category": "Zwierzęta",
    "hint": "Piejący"
  },
  {
    "word": "Kaczka",
    "category": "Zwierzęta",
    "hint": "Staw"
  },
  {
    "word": "Gęś",
    "category": "Zwierzęta",
    "hint": "Pióra"
  },
  {
    "word": "Indyk",
    "category": "Zwierzęta",
    "hint": "Drobiarstwo"
  },
  {
    "word": "Gołąb",
    "category": "Zwierzęta",
    "hint": "Rynek"
  },
  {
    "word": "Wróbel",
    "category": "Zwierzęta",
    "hint": "Dach"
  },
  {
    "word": "Dzięcioł",
    "category": "Zwierzęta",
    "hint": "Kora"
  },
  {
    "word": "Sowa",
    "category": "Zwierzęta",
    "hint": "Noc"
  },
  {
    "word": "Orzeł",
    "category": "Zwierzęta",
    "hint": "Szczyty"
  },
  {
    "word": "Jastrząb",
    "category": "Zwierzęta",
    "hint": "Drapieżnik"
  },
  {
    "word": "Sokół",
    "category": "Zwierzęta",
    "hint": "Polowanie"
  },
  {
    "word": "Bocian",
    "category": "Zwierzęta",
    "hint": "Gniazdo"
  },
  {
    "word": "Czapla",
    "category": "Zwierzęta",
    "hint": "Trzcina"
  },
  {
    "word": "Łabędź",
    "category": "Zwierzęta",
    "hint": "Jezioro"
  },
  {
    "word": "Pingwin",
    "category": "Zwierzęta",
    "hint": "Lód"
  },
  {
    "word": "Flaming",
    "category": "Zwierzęta",
    "hint": "Róż"
  },
  {
    "word": "Struś",
    "category": "Zwierzęta",
    "hint": "Bieg"
  },
  {
    "word": "Koliber",
    "category": "Zwierzęta",
    "hint": "Nektar"
  },
  {
    "word": "Papuga",
    "category": "Zwierzęta",
    "hint": "Dżungla"
  },
  {
    "word": "Tukan",
    "category": "Zwierzęta",
    "hint": "Dziób"
  },
  {
    "word": "Mewa",
    "category": "Zwierzęta",
    "hint": "Wybrzeże"
  },
  {
    "word": "Nietoperz",
    "category": "Zwierzęta",
    "hint": "Jaskinia"
  },
  {
    "word": "Lew",
    "category": "Zwierzęta",
    "hint": "Sawanna"
  },
  {
    "word": "Tygrys",
    "category": "Zwierzęta",
    "hint": "Drapieżnik"
  },
  {
    "word": "Lampart",
    "category": "Zwierzęta",
    "hint": "Plamy"
  },
  {
    "word": "Gepard",
    "category": "Zwierzęta",
    "hint": "Prędkość"
  },
  {
    "word": "Pantera",
    "category": "Zwierzęta",
    "hint": "Tropiki"
  },
  {
    "word": "Wilk",
    "category": "Zwierzęta",
    "hint": "Wataha"
  },
  {
    "word": "Lis",
    "category": "Zwierzęta",
    "hint": "Rudy"
  },
  {
    "word": "Niedźwiedź",
    "category": "Zwierzęta",
    "hint": "Gawra"
  },
  {
    "word": "Niedźwiedź polarny",
    "category": "Zwierzęta",
    "hint": "Arktyka"
  },
  {
    "word": "Panda",
    "category": "Zwierzęta",
    "hint": "Pędy"
  },
  {
    "word": "Koala",
    "category": "Zwierzęta",
    "hint": "Drzewo"
  },
  {
    "word": "Żyrafa",
    "category": "Zwierzęta",
    "hint": "Wysokość"
  },
  {
    "word": "Słoń",
    "category": "Zwierzęta",
    "hint": "Afryka"
  },
  {
    "word": "Nosorożec",
    "category": "Zwierzęta",
    "hint": "Róg"
  },
  {
    "word": "Hipopotam",
    "category": "Zwierzęta",
    "hint": "Błoto"
  },
  {
    "word": "Zebra",
    "category": "Zwierzęta",
    "hint": "Paski"
  },
  {
    "word": "Wielbłąd",
    "category": "Zwierzęta",
    "hint": "Pustynia"
  },
  {
    "word": "Kangur",
    "category": "Zwierzęta",
    "hint": "Torba"
  },
  {
    "word": "Szop pracz",
    "category": "Zwierzęta",
    "hint": "Maskowanie"
  },
  {
    "word": "Bóbr",
    "category": "Zwierzęta",
    "hint": "Rzeka"
  },
  {
    "word": "Wiewiórka",
    "category": "Zwierzęta",
    "hint": "Dziupla"
  },
  {
    "word": "Jeż",
    "category": "Zwierzęta",
    "hint": "Igły"
  },
  {
    "word": "Borsuk",
    "category": "Zwierzęta",
    "hint": "Nora"
  },
  {
    "word": "Kret",
    "category": "Zwierzęta",
    "hint": "Kopiec"
  },
  {
    "word": "Zając",
    "category": "Zwierzęta",
    "hint": "Miedza"
  },
  {
    "word": "Królik",
    "category": "Zwierzęta",
    "hint": "Uszy"
  },
  {
    "word": "Sarna",
    "category": "Zwierzęta",
    "hint": "Płochliwość"
  },
  {
    "word": "Jeleń",
    "category": "Zwierzęta",
    "hint": "Poroże"
  },
  {
    "word": "Łoś",
    "category": "Zwierzęta",
    "hint": "Bagno"
  },
  {
    "word": "Żubr",
    "category": "Zwierzęta",
    "hint": "Puszcza"
  },
  {
    "word": "Delfin",
    "category": "Zwierzęta",
    "hint": "Pływanie"
  },
  {
    "word": "Wieloryb",
    "category": "Zwierzęta",
    "hint": "Głębia"
  },
  {
    "word": "Orka",
    "category": "Zwierzęta",
    "hint": "Ocean"
  },
  {
    "word": "Rekin",
    "category": "Zwierzęta",
    "hint": "Płetwa"
  },
  {
    "word": "Manta",
    "category": "Zwierzęta",
    "hint": "Woda"
  },
  {
    "word": "Konik morski",
    "category": "Zwierzęta",
    "hint": "Rafy"
  },
  {
    "word": "Ośmiornica",
    "category": "Zwierzęta",
    "hint": "Głowonóg"
  },
  {
    "word": "Kałamarnica",
    "category": "Zwierzęta",
    "hint": "Macki"
  },
  {
    "word": "Meduza",
    "category": "Zwierzęta",
    "hint": "Parzydełko"
  },
  {
    "word": "Rozgwiazda",
    "category": "Zwierzęta",
    "hint": "Dno"
  },
  {
    "word": "Krab",
    "category": "Zwierzęta",
    "hint": "Szczypce"
  },
  {
    "word": "Homar",
    "category": "Zwierzęta",
    "hint": "Skorupiak"
  },
  {
    "word": "Krewetka",
    "category": "Zwierzęta",
    "hint": "Plankton"
  },
  {
    "word": "Żółw",
    "category": "Zwierzęta",
    "hint": "Pancerz"
  },
  {
    "word": "Krokodyl",
    "category": "Zwierzęta",
    "hint": "Bagna"
  },
  {
    "word": "Aligator",
    "category": "Zwierzęta",
    "hint": "Gady"
  },
  {
    "word": "Kameleon",
    "category": "Zwierzęta",
    "hint": "Kamuflaż"
  },
  {
    "word": "Iguana",
    "category": "Zwierzęta",
    "hint": "Łuski"
  },
  {
    "word": "Wąż",
    "category": "Zwierzęta",
    "hint": "Pełzanie"
  },
  {
    "word": "Kobra",
    "category": "Zwierzęta",
    "hint": "Kaptur"
  },
  {
    "word": "Żmija",
    "category": "Zwierzęta",
    "hint": "Zygzak"
  },
  {
    "word": "Żaba",
    "category": "Zwierzęta",
    "hint": "Kumkanie"
  },
  {
    "word": "Ropucha",
    "category": "Zwierzęta",
    "hint": "Ogród"
  },
  {
    "word": "Salamandra",
    "category": "Zwierzęta",
    "hint": "Ogień"
  },
  {
    "word": "Ślimak",
    "category": "Zwierzęta",
    "hint": "Skorupka"
  },
  {
    "word": "Motyl",
    "category": "Zwierzęta",
    "hint": "Skrzydła"
  },
  {
    "word": "Ćma",
    "category": "Zwierzęta",
    "hint": "Światło"
  },
  {
    "word": "Pszczoła",
    "category": "Zwierzęta",
    "hint": "Pasieka"
  },
  {
    "word": "Osa",
    "category": "Zwierzęta",
    "hint": "Żądło"
  },
  {
    "word": "Szerszeń",
    "category": "Zwierzęta",
    "hint": "Owady"
  },
  {
    "word": "Trzmiel",
    "category": "Zwierzęta",
    "hint": "Łąka"
  },
  {
    "word": "Mrówka",
    "category": "Zwierzęta",
    "hint": "Mrowisko"
  },
  {
    "word": "Biedronka",
    "category": "Zwierzęta",
    "hint": "Kropki"
  },
  {
    "word": "Świerszcz",
    "category": "Zwierzęta",
    "hint": "Dźwięk"
  },
  {
    "word": "Pasikonik",
    "category": "Zwierzęta",
    "hint": "Trawa"
  },
  {
    "word": "Ważka",
    "category": "Zwierzęta",
    "hint": "Skrzydła"
  },
  {
    "word": "Mucha",
    "category": "Zwierzęta",
    "hint": "Kołnierzyk"
  },
  {
    "word": "Komar",
    "category": "Zwierzęta",
    "hint": "Upał"
  },
  {
    "word": "Pająk",
    "category": "Zwierzęta",
    "hint": "Sieć"
  },
  {
    "word": "Skorpion",
    "category": "Zwierzęta",
    "hint": "Pustynia"
  },
  {
    "word": "Leniwiec",
    "category": "Zwierzęta",
    "hint": "Powolność"
  },
  {
    "word": "Kapibara",
    "category": "Zwierzęta",
    "hint": "Gryzoń"
  },
  {
    "word": "Alpaka",
    "category": "Zwierzęta",
    "hint": "Wełna"
  },
  {
    "word": "Lama",
    "category": "Zwierzęta",
    "hint": "Andy"
  },
  {
    "word": "Dromader",
    "category": "Zwierzęta",
    "hint": "Garb"
  },
  {
    "word": "Wydra",
    "category": "Zwierzęta",
    "hint": "Nurt"
  },
  {
    "word": "Hiena",
    "category": "Zwierzęta",
    "hint": "Padlina"
  },
  {
    "word": "Szakal",
    "category": "Zwierzęta",
    "hint": "Noc"
  },
  {
    "word": "Dingo",
    "category": "Zwierzęta",
    "hint": "Australia"
  },
  {
    "word": "Suseł",
    "category": "Zwierzęta",
    "hint": "Norka"
  },
  {
    "word": "Chomik",
    "category": "Zwierzęta",
    "hint": "Klatka"
  },
  {
    "word": "Świnka morska",
    "category": "Zwierzęta",
    "hint": "Gryzoń"
  },
  {
    "word": "Szczur",
    "category": "Zwierzęta",
    "hint": "Spryt"
  },
  {
    "word": "Mysz",
    "category": "Zwierzęta",
    "hint": "Nora"
  },
  {
    "word": "Fretka",
    "category": "Zwierzęta",
    "hint": "Zwinność"
  },
  {
    "word": "Pancernik",
    "category": "Zwierzęta",
    "hint": "Pancerz"
  },
  {
    "word": "Mrównojad",
    "category": "Zwierzęta",
    "hint": "Język"
  },
  {
    "word": "Dziobak",
    "category": "Zwierzęta",
    "hint": "Osobliwość"
  },
  {
    "word": "Kolczatka",
    "category": "Zwierzęta",
    "hint": "Ssaki"
  },
  {
    "word": "Paw",
    "category": "Zwierzęta",
    "hint": "Pióra"
  },
  {
    "word": "Pelikan",
    "category": "Zwierzęta",
    "hint": "Dziób"
  },
  {
    "word": "Sęp",
    "category": "Zwierzęta",
    "hint": "Wysokość"
  },
  {
    "word": "Kukawka",
    "category": "Zwierzęta",
    "hint": "Gniazdo"
  },
  {
    "word": "Sroka",
    "category": "Zwierzęta",
    "hint": "Błyskotki"
  },
  {
    "word": "Wrona",
    "category": "Zwierzęta",
    "hint": "Ptak"
  },
  {
    "word": "Kruk",
    "category": "Zwierzęta",
    "hint": "Mądrość"
  },
  {
    "word": "Dudek",
    "category": "Zwierzęta",
    "hint": "Czubek"
  },
  {
    "word": "Zimorodek",
    "category": "Zwierzęta",
    "hint": "Potok"
  },
  {
    "word": "Pizza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Piec"
  },
  {
    "word": "Burger",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kotlet"
  },
  {
    "word": "Kebab",
    "category": "Jedzenie i Kulinaria",
    "hint": "Sos"
  },
  {
    "word": "Hot dog",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bułka"
  },
  {
    "word": "Frytki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Olej"
  },
  {
    "word": "Pierogi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciasto"
  },
  {
    "word": "Naleśniki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Patelnia"
  },
  {
    "word": "Gołąbki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kapusta"
  },
  {
    "word": "Kotlet schabowy",
    "category": "Jedzenie i Kulinaria",
    "hint": "Obiad"
  },
  {
    "word": "Bigos",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kociołek"
  },
  {
    "word": "Rosół",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bulion"
  },
  {
    "word": "Żurek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zakwas"
  },
  {
    "word": "Barszcz czerwony",
    "category": "Jedzenie i Kulinaria",
    "hint": "Buraki"
  },
  {
    "word": "Zupa pomidorowa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Przecier"
  },
  {
    "word": "Chłodnik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zimno"
  },
  {
    "word": "Gulasz",
    "category": "Jedzenie i Kulinaria",
    "hint": "Sos"
  },
  {
    "word": "Lasagne",
    "category": "Jedzenie i Kulinaria",
    "hint": "Płaty"
  },
  {
    "word": "Spaghetti",
    "category": "Jedzenie i Kulinaria",
    "hint": "Makaron"
  },
  {
    "word": "Tortilla",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zawijanie"
  },
  {
    "word": "Tacos",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupkość"
  },
  {
    "word": "Burrito",
    "category": "Jedzenie i Kulinaria",
    "hint": "Farsz"
  },
  {
    "word": "Sushi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ryż"
  },
  {
    "word": "Ramen",
    "category": "Jedzenie i Kulinaria",
    "hint": "Miska"
  },
  {
    "word": "Pad Thai",
    "category": "Jedzenie i Kulinaria",
    "hint": "Orzeszki"
  },
  {
    "word": "Sajgonki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Papier"
  },
  {
    "word": "Curry",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kurkuma"
  },
  {
    "word": "Hummus",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciecierzyca"
  },
  {
    "word": "Falafel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kulki"
  },
  {
    "word": "Sałatka jarzynowa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Majonez"
  },
  {
    "word": "Zapiekanka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Grzanka"
  },
  {
    "word": "Chleb",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zakwas"
  },
  {
    "word": "Bułka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Śniadanie"
  },
  {
    "word": "Rogal",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kształt"
  },
  {
    "word": "Bagietka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Piekarnia"
  },
  {
    "word": "Tost",
    "category": "Jedzenie i Kulinaria",
    "hint": "Złocistość"
  },
  {
    "word": "Masło",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tłuszcz"
  },
  {
    "word": "Ser żółty",
    "category": "Jedzenie i Kulinaria",
    "hint": "Dziury"
  },
  {
    "word": "Twaróg",
    "category": "Jedzenie i Kulinaria",
    "hint": "Biel"
  },
  {
    "word": "Jajecznica",
    "category": "Jedzenie i Kulinaria",
    "hint": "Patelnia"
  },
  {
    "word": "Omlet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Puszystość"
  },
  {
    "word": "Parówki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Śniadanie"
  },
  {
    "word": "Szynka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Plastry"
  },
  {
    "word": "Boczek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Smażenie"
  },
  {
    "word": "Kiełbasa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wędzarnia"
  },
  {
    "word": "Pasztet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Smarowidło"
  },
  {
    "word": "Śledź",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zalewa"
  },
  {
    "word": "Łosoś",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ryba"
  },
  {
    "word": "Tuńczyk",
    "category": "Jedzenie i Kulinaria",
    "hint": "Puszka"
  },
  {
    "word": "Karp",
    "category": "Jedzenie i Kulinaria",
    "hint": "Święta"
  },
  {
    "word": "Krewetki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Owoce"
  },
  {
    "word": "Czekolada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodycz"
  },
  {
    "word": "Lody",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chłód"
  },
  {
    "word": "Szarlotka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cynamon"
  },
  {
    "word": "Sernik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wypiek"
  },
  {
    "word": "Makowiec",
    "category": "Jedzenie i Kulinaria",
    "hint": "Mak"
  },
  {
    "word": "Pączek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Nadzienie"
  },
  {
    "word": "Faworki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kruchość"
  },
  {
    "word": "Gofr",
    "category": "Jedzenie i Kulinaria",
    "hint": "Krata"
  },
  {
    "word": "Tiramisu",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kawa"
  },
  {
    "word": "Beza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Piana"
  },
  {
    "word": "Muffin",
    "category": "Jedzenie i Kulinaria",
    "hint": "Foremka"
  },
  {
    "word": "Piernik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Korzenny"
  },
  {
    "word": "Karmel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Palenie"
  },
  {
    "word": "Lizak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Patyk"
  },
  {
    "word": "Żelki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Żelatyna"
  },
  {
    "word": "Chałwa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Sezam"
  },
  {
    "word": "Kisiel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gęstość"
  },
  {
    "word": "Budyń",
    "category": "Jedzenie i Kulinaria",
    "hint": "Mleko"
  },
  {
    "word": "Galaretka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Krzepnięcie"
  },
  {
    "word": "Truskawka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Sezon"
  },
  {
    "word": "Malina",
    "category": "Jedzenie i Kulinaria",
    "hint": "Krzak"
  },
  {
    "word": "Borówka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Fiolet"
  },
  {
    "word": "Jabłko",
    "category": "Jedzenie i Kulinaria",
    "hint": "Sad"
  },
  {
    "word": "Gruszka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ogród"
  },
  {
    "word": "Banan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Skórka"
  },
  {
    "word": "Pomarańcza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cytrus"
  },
  {
    "word": "Cytryna",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kwas"
  },
  {
    "word": "Mandarynka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cząstki"
  },
  {
    "word": "Arbuz",
    "category": "Jedzenie i Kulinaria",
    "hint": "Pestki"
  },
  {
    "word": "Melon",
    "category": "Jedzenie i Kulinaria",
    "hint": "Miąższ"
  },
  {
    "word": "Winogrono",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kiść"
  },
  {
    "word": "Ananas",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tropiki"
  },
  {
    "word": "Mango",
    "category": "Jedzenie i Kulinaria",
    "hint": "Pestka"
  },
  {
    "word": "Brzoskwinia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Meszek"
  },
  {
    "word": "Morela",
    "category": "Jedzenie i Kulinaria",
    "hint": "Owoce"
  },
  {
    "word": "Śliwka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Powidła"
  },
  {
    "word": "Czereśnia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ogonek"
  },
  {
    "word": "Kiwi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Włochate"
  },
  {
    "word": "Granat",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ziarna"
  },
  {
    "word": "Awokado",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zielony"
  },
  {
    "word": "Pomidor",
    "category": "Jedzenie i Kulinaria",
    "hint": "Krzew"
  },
  {
    "word": "Ogórek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Grunt"
  },
  {
    "word": "Marchewka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Korzeń"
  },
  {
    "word": "Ziemniak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bulwa"
  },
  {
    "word": "Cebula",
    "category": "Jedzenie i Kulinaria",
    "hint": "Warstwy"
  },
  {
    "word": "Czosnek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ząbki"
  },
  {
    "word": "Papryka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Strąk"
  },
  {
    "word": "Kukurydza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kolba"
  },
  {
    "word": "Dynia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Jesień"
  },
  {
    "word": "Brokuł",
    "category": "Jedzenie i Kulinaria",
    "hint": "Różyczki"
  },
  {
    "word": "Kalafior",
    "category": "Jedzenie i Kulinaria",
    "hint": "Główka"
  },
  {
    "word": "Cukinia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Warzywo"
  },
  {
    "word": "Bakłażan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Fiolet"
  },
  {
    "word": "Szpinak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Liście"
  },
  {
    "word": "Kawa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kofeina"
  },
  {
    "word": "Herbata",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zaparzanie"
  },
  {
    "word": "Gorąca czekolada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kubek"
  },
  {
    "word": "Sok pomarańczowy",
    "category": "Jedzenie i Kulinaria",
    "hint": "Szklanka"
  },
  {
    "word": "Lemoniada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cytrusy"
  },
  {
    "word": "Kompot",
    "category": "Jedzenie i Kulinaria",
    "hint": "Owoce"
  },
  {
    "word": "Mleko",
    "category": "Jedzenie i Kulinaria",
    "hint": "Biel"
  },
  {
    "word": "Koktajl",
    "category": "Jedzenie i Kulinaria",
    "hint": "Blender"
  },
  {
    "word": "Kakao",
    "category": "Jedzenie i Kulinaria",
    "hint": "Proszek"
  },
  {
    "word": "Musztarda",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gorczyca"
  },
  {
    "word": "Ketchup",
    "category": "Jedzenie i Kulinaria",
    "hint": "Sos"
  },
  {
    "word": "Majonez",
    "category": "Jedzenie i Kulinaria",
    "hint": "Emulsja"
  },
  {
    "word": "Chrzan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ostrość"
  },
  {
    "word": "Ocet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kwas"
  },
  {
    "word": "Oliwa z oliwek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tłoczenie"
  },
  {
    "word": "Miód",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodycz"
  },
  {
    "word": "Dżem",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słoik"
  },
  {
    "word": "Powidła",
    "category": "Jedzenie i Kulinaria",
    "hint": "Smażenie"
  },
  {
    "word": "Plaża",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wybrzeże"
  },
  {
    "word": "Pustynia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wydma"
  },
  {
    "word": "Góry",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wspinaczka"
  },
  {
    "word": "Jaskinia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Skała"
  },
  {
    "word": "Wyspa",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ląd"
  },
  {
    "word": "Dżungla",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gęstwina"
  },
  {
    "word": "Las",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Drzewa"
  },
  {
    "word": "Polana",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Trawa"
  },
  {
    "word": "Wulkan",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Krater"
  },
  {
    "word": "Wodospad",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kaskada"
  },
  {
    "word": "Jezioro",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Akwen"
  },
  {
    "word": "Rzeka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Koryto"
  },
  {
    "word": "Lodowiec",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Masa"
  },
  {
    "word": "Kanion",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Rozpadlina"
  },
  {
    "word": "Oaza",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pustynia"
  },
  {
    "word": "Bagno",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Mokradła"
  },
  {
    "word": "Szpital",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Dyżur"
  },
  {
    "word": "Szkoła",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Lekcje"
  },
  {
    "word": "Uniwersytet",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Katedra"
  },
  {
    "word": "Biblioteka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Półki"
  },
  {
    "word": "Muzeum",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Eksponaty"
  },
  {
    "word": "Teatr",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Scena"
  },
  {
    "word": "Kino",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ekran"
  },
  {
    "word": "Filharmonia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Orkiestra"
  },
  {
    "word": "Opera",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Aria"
  },
  {
    "word": "Cyrk",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Arena"
  },
  {
    "word": "Stadion",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Trybuna"
  },
  {
    "word": "Basen",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kafelki"
  },
  {
    "word": "Siłownia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ciężary"
  },
  {
    "word": "Lotnisko",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pas"
  },
  {
    "word": "Dworzec kolejowy",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Peron"
  },
  {
    "word": "Port morski",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Doki"
  },
  {
    "word": "Stacja benzynowa",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Dystrybutor"
  },
  {
    "word": "Hotel",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Recepcja"
  },
  {
    "word": "Restauracja",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Karta"
  },
  {
    "word": "Kawiarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Aromat"
  },
  {
    "word": "Piekarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Chleb"
  },
  {
    "word": "Apteka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Leki"
  },
  {
    "word": "Bank",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Konta"
  },
  {
    "word": "Poczta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Listy"
  },
  {
    "word": "Supermarket",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wózek"
  },
  {
    "word": "Centrum handlowe",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pasaż"
  },
  {
    "word": "Targowisko",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Stragan"
  },
  {
    "word": "Kościół",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Nawa"
  },
  {
    "word": "Katedra",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Witraż"
  },
  {
    "word": "Zamek",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Mury"
  },
  {
    "word": "Pałac",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Rezydencja"
  },
  {
    "word": "Twierdza",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Bastion"
  },
  {
    "word": "Bunkier",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Beton"
  },
  {
    "word": "Latarnia morska",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Światło"
  },
  {
    "word": "Wiatrak",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Skrzydła"
  },
  {
    "word": "Młyn wodny",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Koło"
  },
  {
    "word": "Remiza strażacka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Syrena"
  },
  {
    "word": "Komisariat policji",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Posterunek"
  },
  {
    "word": "Sąd",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Rozprawa"
  },
  {
    "word": "Więzienie",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Krata"
  },
  {
    "word": "Ratusz",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Rynek"
  },
  {
    "word": "Wieżowiec",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Piętra"
  },
  {
    "word": "Most",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Przeprawa"
  },
  {
    "word": "Tunel",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Przejazd"
  },
  {
    "word": "Tama",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zapora"
  },
  {
    "word": "Hangar",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wrota"
  },
  {
    "word": "Szklarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Szkło"
  },
  {
    "word": "Obserwatorium",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kopuła"
  },
  {
    "word": "Planetarium",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Niebo"
  },
  {
    "word": "ZOO",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wybiegi"
  },
  {
    "word": "Park rozrywki",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Karuzela"
  },
  {
    "word": "Plac zabaw",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Piasek"
  },
  {
    "word": "Cmentarz",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Alejka"
  },
  {
    "word": "Kopalnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Szyb"
  },
  {
    "word": "Huta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Piec"
  },
  {
    "word": "Fabryka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Taśma"
  },
  {
    "word": "Stacja kosmiczna",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Orbita"
  },
  {
    "word": "Igloo",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Lód"
  },
  {
    "word": "Wigwam",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Skóry"
  },
  {
    "word": "Jurta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Filc"
  },
  {
    "word": "Schronisko górskie",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Szlak"
  },
  {
    "word": "Pralnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Bęben"
  },
  {
    "word": "Salon fryzjerski",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Fotel"
  },
  {
    "word": "Garaż",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Brama"
  },
  {
    "word": "Piwnica",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Mrok"
  },
  {
    "word": "Strych",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Krokwie"
  },
  {
    "word": "Balkon",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Barierka"
  },
  {
    "word": "Taras",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ogród"
  },
  {
    "word": "Altana",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Działka"
  },
  {
    "word": "Stajnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Boks"
  },
  {
    "word": "Obora",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Słoma"
  },
  {
    "word": "Kurnik",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Grzęda"
  },
  {
    "word": "Pasieka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ule"
  },
  {
    "word": "Winnica",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Krzewy"
  },
  {
    "word": "Molo",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Deski"
  },
  {
    "word": "Port jachtowy",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Keja"
  },
  {
    "word": "Amfiteatr",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Półkole"
  },
  {
    "word": "Fontanna",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wodotrysk"
  },
  {
    "word": "Pomnik",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Cokół"
  },
  {
    "word": "Zegarek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czas"
  },
  {
    "word": "Portfel",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kieszeń"
  },
  {
    "word": "Parasol",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Deszcz"
  },
  {
    "word": "Okulary",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Oprawki"
  },
  {
    "word": "Plecak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szelki"
  },
  {
    "word": "Klucz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zamek"
  },
  {
    "word": "Kłódka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pałąk"
  },
  {
    "word": "Nożyczki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostrza"
  },
  {
    "word": "Latarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Bateria"
  },
  {
    "word": "Świeczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wosk"
  },
  {
    "word": "Zapałki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Siarka"
  },
  {
    "word": "Zapalniczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Płomień"
  },
  {
    "word": "Lustro",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Odbicie"
  },
  {
    "word": "Szczoteczka do zębów",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Włosie"
  },
  {
    "word": "Pasta do zębów",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Mięta"
  },
  {
    "word": "Mydło",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kostka"
  },
  {
    "word": "Szampon",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Piana"
  },
  {
    "word": "Ręcznik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Materiał"
  },
  {
    "word": "Grzebień",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ząbki"
  },
  {
    "word": "Suszarka do włosów",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ciepło"
  },
  {
    "word": "Maszynka do golenia",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Żyletka"
  },
  {
    "word": "Żelazko",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Stopa"
  },
  {
    "word": "Deska do prasowania",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pokrowiec"
  },
  {
    "word": "Odkurzacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Worek"
  },
  {
    "word": "Mop",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wiadro"
  },
  {
    "word": "Miotła",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zamiatanie"
  },
  {
    "word": "Kosz na śmieci",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Odpadki"
  },
  {
    "word": "Młotek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Obuch"
  },
  {
    "word": "Śrubokręt",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Uchwyt"
  },
  {
    "word": "Klucz francuski",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Hydraulika"
  },
  {
    "word": "Kombinerki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szczypce"
  },
  {
    "word": "Piła ręczna",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zęby"
  },
  {
    "word": "Wiertarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Obroty"
  },
  {
    "word": "Miarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Centymetry"
  },
  {
    "word": "Poziomica",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pęcherzyk"
  },
  {
    "word": "Taśma klejąca",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Rolka"
  },
  {
    "word": "Klej",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Spoina"
  },
  {
    "word": "Gwoździe",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trzpień"
  },
  {
    "word": "Śruba",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Gwint"
  },
  {
    "word": "Drabina",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szczeble"
  },
  {
    "word": "Taczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Koło"
  },
  {
    "word": "Łopata",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Sztych"
  },
  {
    "word": "Grabie",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zęby"
  },
  {
    "word": "Konewka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Sitko"
  },
  {
    "word": "Sekator",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Cięcie"
  },
  {
    "word": "Kosiarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trawnik"
  },
  {
    "word": "Wąż ogrodowy",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Podlewanie"
  },
  {
    "word": "Garnek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pokrywka"
  },
  {
    "word": "Patelnia",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Uchwyt"
  },
  {
    "word": "Czajnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wrzątek"
  },
  {
    "word": "Nóż kuchenny",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Klinga"
  },
  {
    "word": "Widelec",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zęby"
  },
  {
    "word": "Łyżka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czerpak"
  },
  {
    "word": "Talerz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ceramika"
  },
  {
    "word": "Miska",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Naczynie"
  },
  {
    "word": "Kubek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ucho"
  },
  {
    "word": "Szklanka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Przezroczystość"
  },
  {
    "word": "Kieliszek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Nóżka"
  },
  {
    "word": "Korkociąg",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Spirala"
  },
  {
    "word": "Otwieracz do puszek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Metal"
  },
  {
    "word": "Tarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Oczka"
  },
  {
    "word": "Durszlak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Otwory"
  },
  {
    "word": "Wałek do ciasta",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Drewno"
  },
  {
    "word": "Deska do krojenia",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Podkładka"
  },
  {
    "word": "Termos",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Izolacja"
  },
  {
    "word": "Bidon",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ustnik"
  },
  {
    "word": "Poduszka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Poszewka"
  },
  {
    "word": "Kołdra",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wypełnienie"
  },
  {
    "word": "Koc",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Przykrycie"
  },
  {
    "word": "Prześcieradło",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Tkanina"
  },
  {
    "word": "Wieszak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Drążek"
  },
  {
    "word": "Długopis",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wkład"
  },
  {
    "word": "Ołówek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Grafit"
  },
  {
    "word": "Gumka do ścierania",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kauczuk"
  },
  {
    "word": "Temperówka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostrzałka"
  },
  {
    "word": "Linijka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Podziałka"
  },
  {
    "word": "Zeszyt",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kartki"
  },
  {
    "word": "Notatnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Notes"
  },
  {
    "word": "Koperta",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Znaczek"
  },
  {
    "word": "Znaczek pocztowy",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ząbki"
  },
  {
    "word": "Spinacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Drut"
  },
  {
    "word": "Zszywacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Biurowy"
  },
  {
    "word": "Dziurkacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Otwory"
  },
  {
    "word": "Segregator",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dźwignia"
  },
  {
    "word": "Globus",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kula"
  },
  {
    "word": "Mapa",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Skala"
  },
  {
    "word": "Lupa",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Powiększenie"
  },
  {
    "word": "Pędzel",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Włosie"
  },
  {
    "word": "Paleta malarska",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Farby"
  },
  {
    "word": "Sztaluga",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Stojak"
  },
  {
    "word": "Termometr",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Słupek"
  },
  {
    "word": "Kłębka wełny",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Włóczka"
  },
  {
    "word": "Igła z nitką",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szycie"
  },
  {
    "word": "Naparstek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ochrona"
  },
  {
    "word": "Szpilka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Główka"
  },
  {
    "word": "Waga kuchenna",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Gramy"
  },
  {
    "word": "Minutnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czas"
  },
  {
    "word": "Detektyw",
    "category": "Zawody, Role i Postacie",
    "hint": "Tajemnica"
  },
  {
    "word": "Policjant",
    "category": "Zawody, Role i Postacie",
    "hint": "Mundur"
  },
  {
    "word": "Strażak",
    "category": "Zawody, Role i Postacie",
    "hint": "Wąż"
  },
  {
    "word": "Lekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Fartuch"
  },
  {
    "word": "Pielęgniarka",
    "category": "Zawody, Role i Postacie",
    "hint": "Zabieg"
  },
  {
    "word": "Ratownik medyczny",
    "category": "Zawody, Role i Postacie",
    "hint": "Karetka"
  },
  {
    "word": "Chirurg",
    "category": "Zawody, Role i Postacie",
    "hint": "Skalpel"
  },
  {
    "word": "Dentysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Fotel"
  },
  {
    "word": "Weterynarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Lecznica"
  },
  {
    "word": "Nauczyciel",
    "category": "Zawody, Role i Postacie",
    "hint": "Klasa"
  },
  {
    "word": "Profesor",
    "category": "Zawody, Role i Postacie",
    "hint": "Uczelnia"
  },
  {
    "word": "Naukowiec",
    "category": "Zawody, Role i Postacie",
    "hint": "Badania"
  },
  {
    "word": "Astronauta",
    "category": "Zawody, Role i Postacie",
    "hint": "Kombinezon"
  },
  {
    "word": "Pilot",
    "category": "Zawody, Role i Postacie",
    "hint": "Kokpit"
  },
  {
    "word": "Stewardesa",
    "category": "Zawody, Role i Postacie",
    "hint": "Pokład"
  },
  {
    "word": "Kapitan statku",
    "category": "Zawody, Role i Postacie",
    "hint": "Mostek"
  },
  {
    "word": "Marynarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Lina"
  },
  {
    "word": "Kierowca autobusu",
    "category": "Zawody, Role i Postacie",
    "hint": "Kurs"
  },
  {
    "word": "Maszynista",
    "category": "Zawody, Role i Postacie",
    "hint": "Szyny"
  },
  {
    "word": "Taksówkarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Licznik"
  },
  {
    "word": "Kurier",
    "category": "Zawody, Role i Postacie",
    "hint": "Paczka"
  },
  {
    "word": "Listonosz",
    "category": "Zawody, Role i Postacie",
    "hint": "Torba"
  },
  {
    "word": "Kucharz",
    "category": "Zawody, Role i Postacie",
    "hint": "Fartuch"
  },
  {
    "word": "Kelner",
    "category": "Zawody, Role i Postacie",
    "hint": "Taca"
  },
  {
    "word": "Barman",
    "category": "Zawody, Role i Postacie",
    "hint": "Lada"
  },
  {
    "word": "Piekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Mąka"
  },
  {
    "word": "Cukiernik",
    "category": "Zawody, Role i Postacie",
    "hint": "Wypieki"
  },
  {
    "word": "Rzeźnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Tasak"
  },
  {
    "word": "Rolnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Pole"
  },
  {
    "word": "Ogrodnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Grządka"
  },
  {
    "word": "Leśnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Bór"
  },
  {
    "word": "Rybak",
    "category": "Zawody, Role i Postacie",
    "hint": "Kuter"
  },
  {
    "word": "Górnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Kask"
  },
  {
    "word": "Budowlaniec",
    "category": "Zawody, Role i Postacie",
    "hint": "Budowa"
  },
  {
    "word": "Architekt",
    "category": "Zawody, Role i Postacie",
    "hint": "Projekt"
  },
  {
    "word": "Hydraulik",
    "category": "Zawody, Role i Postacie",
    "hint": "Rura"
  },
  {
    "word": "Elektryk",
    "category": "Zawody, Role i Postacie",
    "hint": "Napięcie"
  },
  {
    "word": "Stolarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wióry"
  },
  {
    "word": "Kowal",
    "category": "Zawody, Role i Postacie",
    "hint": "Kowadło"
  },
  {
    "word": "Ślusarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Zamek"
  },
  {
    "word": "Mechanik",
    "category": "Zawody, Role i Postacie",
    "hint": "Warsztat"
  },
  {
    "word": "Malarz pokojowy",
    "category": "Zawody, Role i Postacie",
    "hint": "Wałek"
  },
  {
    "word": "Szklarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Szyba"
  },
  {
    "word": "Krawiec",
    "category": "Zawody, Role i Postacie",
    "hint": "Nożyce"
  },
  {
    "word": "Szewc",
    "category": "Zawody, Role i Postacie",
    "hint": "Kopyto"
  },
  {
    "word": "Zegarmistrz",
    "category": "Zawody, Role i Postacie",
    "hint": "Mechanizm"
  },
  {
    "word": "Jubiler",
    "category": "Zawody, Role i Postacie",
    "hint": "Kamienie"
  },
  {
    "word": "Pisarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Pióro"
  },
  {
    "word": "Poeta",
    "category": "Zawody, Role i Postacie",
    "hint": "Wiersz"
  },
  {
    "word": "Dziennikarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Artykuł"
  },
  {
    "word": "Fotograf",
    "category": "Zawody, Role i Postacie",
    "hint": "Kadr"
  },
  {
    "word": "Kamerzysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Obiektyw"
  },
  {
    "word": "Reżyser",
    "category": "Zawody, Role i Postacie",
    "hint": "Plan"
  },
  {
    "word": "Aktor",
    "category": "Zawody, Role i Postacie",
    "hint": "Rola"
  },
  {
    "word": "Muzyk",
    "category": "Zawody, Role i Postacie",
    "hint": "Instrument"
  },
  {
    "word": "Piosenkarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Głos"
  },
  {
    "word": "Dyrygent",
    "category": "Zawody, Role i Postacie",
    "hint": "Orkiestra"
  },
  {
    "word": "Tancerz",
    "category": "Zawody, Role i Postacie",
    "hint": "Ruch"
  },
  {
    "word": "Rzeźbiarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Dłuto"
  },
  {
    "word": "Prezydent",
    "category": "Zawody, Role i Postacie",
    "hint": "Urząd"
  },
  {
    "word": "Sędzia",
    "category": "Zawody, Role i Postacie",
    "hint": "Toga"
  },
  {
    "word": "Adwokat",
    "category": "Zawody, Role i Postacie",
    "hint": "Obrona"
  },
  {
    "word": "Żołnierz",
    "category": "Zawody, Role i Postacie",
    "hint": "Służba"
  },
  {
    "word": "Generał",
    "category": "Zawody, Role i Postacie",
    "hint": "Sztab"
  },
  {
    "word": "Szpieg",
    "category": "Zawody, Role i Postacie",
    "hint": "Sekret"
  },
  {
    "word": "Kominiarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Sadza"
  },
  {
    "word": "Bibliotekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Regały"
  },
  {
    "word": "Przewodnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Trasa"
  },
  {
    "word": "Tłumacz",
    "category": "Zawody, Role i Postacie",
    "hint": "Język"
  },
  {
    "word": "Księgowy",
    "category": "Zawody, Role i Postacie",
    "hint": "Rachunki"
  },
  {
    "word": "Bankier",
    "category": "Zawody, Role i Postacie",
    "hint": "Finanse"
  },
  {
    "word": "Programista",
    "category": "Zawody, Role i Postacie",
    "hint": "Kod"
  },
  {
    "word": "Archeolog",
    "category": "Zawody, Role i Postacie",
    "hint": "Wykopaliska"
  },
  {
    "word": "Historyk",
    "category": "Zawody, Role i Postacie",
    "hint": "Źródła"
  },
  {
    "word": "Astronom",
    "category": "Zawody, Role i Postacie",
    "hint": "Teleskop"
  },
  {
    "word": "Klaun",
    "category": "Zawody, Role i Postacie",
    "hint": "Peruka"
  },
  {
    "word": "Iluzjonista",
    "category": "Zawody, Role i Postacie",
    "hint": "Sztuczka"
  },
  {
    "word": "Trener",
    "category": "Zawody, Role i Postacie",
    "hint": "Gwizdek"
  },
  {
    "word": "Sędzia sportowy",
    "category": "Zawody, Role i Postacie",
    "hint": "Kartka"
  },
  {
    "word": "Ochroniarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Dozór"
  },
  {
    "word": "Ratownik wodny",
    "category": "Zawody, Role i Postacie",
    "hint": "Plaża"
  },
  {
    "word": "Nurek",
    "category": "Zawody, Role i Postacie",
    "hint": "Aparat"
  },
  {
    "word": "Alpinista",
    "category": "Zawody, Role i Postacie",
    "hint": "Czekan"
  },
  {
    "word": "Florysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Wiązanka"
  },
  {
    "word": "Smartfon",
    "category": "Technologia i Gadżety",
    "hint": "Aplikacje"
  },
  {
    "word": "Laptop",
    "category": "Technologia i Gadżety",
    "hint": "Zawias"
  },
  {
    "word": "Tablet",
    "category": "Technologia i Gadżety",
    "hint": "Dotyk"
  },
  {
    "word": "Telewizor",
    "category": "Technologia i Gadżety",
    "hint": "Pilot"
  },
  {
    "word": "Radio",
    "category": "Technologia i Gadżety",
    "hint": "Fale"
  },
  {
    "word": "Słuchawki",
    "category": "Technologia i Gadżety",
    "hint": "Dźwięk"
  },
  {
    "word": "Głośnik Bluetooth",
    "category": "Technologia i Gadżety",
    "hint": "Dźwięk"
  },
  {
    "word": "Mikrofon",
    "category": "Technologia i Gadżety",
    "hint": "Sygnał"
  },
  {
    "word": "Kamera wideo",
    "category": "Technologia i Gadżety",
    "hint": "Matryca"
  },
  {
    "word": "Aparat fotograficzny",
    "category": "Technologia i Gadżety",
    "hint": "Migawka"
  },
  {
    "word": "Dron",
    "category": "Technologia i Gadżety",
    "hint": "Śmigła"
  },
  {
    "word": "Robot",
    "category": "Technologia i Gadżety",
    "hint": "Automat"
  },
  {
    "word": "Satelita",
    "category": "Technologia i Gadżety",
    "hint": "Próżnia"
  },
  {
    "word": "Konsola do gier",
    "category": "Technologia i Gadżety",
    "hint": "Gry"
  },
  {
    "word": "Pad do gier",
    "category": "Technologia i Gadżety",
    "hint": "Przyciski"
  },
  {
    "word": "Klawiatura",
    "category": "Technologia i Gadżety",
    "hint": "Klawisze"
  },
  {
    "word": "Mysz komputerowa",
    "category": "Technologia i Gadżety",
    "hint": "Kursor"
  },
  {
    "word": "Monitor",
    "category": "Technologia i Gadżety",
    "hint": "Piksele"
  },
  {
    "word": "Drukarka",
    "category": "Technologia i Gadżety",
    "hint": "Tusz"
  },
  {
    "word": "Skaner",
    "category": "Technologia i Gadżety",
    "hint": "Optyka"
  },
  {
    "word": "Ruter Wi-Fi",
    "category": "Technologia i Gadżety",
    "hint": "Sygnał"
  },
  {
    "word": "Pendrive",
    "category": "Technologia i Gadżety",
    "hint": "Złącze"
  },
  {
    "word": "Dysk twardy",
    "category": "Technologia i Gadżety",
    "hint": "Nośnik"
  },
  {
    "word": "Karta pamięci",
    "category": "Technologia i Gadżety",
    "hint": "Chip"
  },
  {
    "word": "Powerbank",
    "category": "Technologia i Gadżety",
    "hint": "Ogniwo"
  },
  {
    "word": "Ładowarka",
    "category": "Technologia i Gadżety",
    "hint": "Przewód"
  },
  {
    "word": "Bateria",
    "category": "Technologia i Gadżety",
    "hint": "Bieguny"
  },
  {
    "word": "Pralka",
    "category": "Technologia i Gadżety",
    "hint": "Wirowanie"
  },
  {
    "word": "Zmywarka",
    "category": "Technologia i Gadżety",
    "hint": "Tabletka"
  },
  {
    "word": "Lodówka",
    "category": "Technologia i Gadżety",
    "hint": "Agregat"
  },
  {
    "word": "Kuchenka mikrofalowa",
    "category": "Technologia i Gadżety",
    "hint": "Mikrofale"
  },
  {
    "word": "Piekarnik",
    "category": "Technologia i Gadżety",
    "hint": "Grzałka"
  },
  {
    "word": "Toster",
    "category": "Technologia i Gadżety",
    "hint": "Grzałka"
  },
  {
    "word": "Opiekacz",
    "category": "Technologia i Gadżety",
    "hint": "Tosty"
  },
  {
    "word": "Blender",
    "category": "Technologia i Gadżety",
    "hint": "Ostrze"
  },
  {
    "word": "Mikser",
    "category": "Technologia i Gadżety",
    "hint": "Mieszadła"
  },
  {
    "word": "Ekspres do kawy",
    "category": "Technologia i Gadżety",
    "hint": "Ciśnienie"
  },
  {
    "word": "Klimatyzator",
    "category": "Technologia i Gadżety",
    "hint": "Nawiew"
  },
  {
    "word": "Wentylator",
    "category": "Technologia i Gadżety",
    "hint": "Łopatki"
  },
  {
    "word": "Smartwatch",
    "category": "Technologia i Gadżety",
    "hint": "Tarcza"
  },
  {
    "word": "Opaska fitness",
    "category": "Technologia i Gadżety",
    "hint": "Kroki"
  },
  {
    "word": "Czytnik e-booków",
    "category": "Technologia i Gadżety",
    "hint": "Matryca"
  },
  {
    "word": "Gogle VR",
    "category": "Technologia i Gadżety",
    "hint": "Soczewki"
  },
  {
    "word": "Projektor",
    "category": "Technologia i Gadżety",
    "hint": "Lampa"
  },
  {
    "word": "Gramofon",
    "category": "Technologia i Gadżety",
    "hint": "Ramię"
  },
  {
    "word": "Kalkulator",
    "category": "Technologia i Gadżety",
    "hint": "Cyfry"
  },
  {
    "word": "Drukarka 3D",
    "category": "Technologia i Gadżety",
    "hint": "Filament"
  },
  {
    "word": "Światłowód",
    "category": "Technologia i Gadżety",
    "hint": "Rdzeń"
  },
  {
    "word": "Lampa błyskowa",
    "category": "Technologia i Gadżety",
    "hint": "Błysk"
  },
  {
    "word": "Walkie-talkie",
    "category": "Technologia i Gadżety",
    "hint": "Kanał"
  },
  {
    "word": "Rower",
    "category": "Pojazdy i Maszyny",
    "hint": "Pedały"
  },
  {
    "word": "Hulajnoga",
    "category": "Pojazdy i Maszyny",
    "hint": "Podest"
  },
  {
    "word": "Hulajnoga elektryczna",
    "category": "Pojazdy i Maszyny",
    "hint": "Akumulator"
  },
  {
    "word": "Deskorolka",
    "category": "Pojazdy i Maszyny",
    "hint": "Kółka"
  },
  {
    "word": "Rolki",
    "category": "Pojazdy i Maszyny",
    "hint": "Szyna"
  },
  {
    "word": "Motocykl",
    "category": "Pojazdy i Maszyny",
    "hint": "Silnik"
  },
  {
    "word": "Skuter",
    "category": "Pojazdy i Maszyny",
    "hint": "Jednoślad"
  },
  {
    "word": "Quad",
    "category": "Pojazdy i Maszyny",
    "hint": "Teren"
  },
  {
    "word": "Samochód osobowy",
    "category": "Pojazdy i Maszyny",
    "hint": "Karoseria"
  },
  {
    "word": "Kabriolet",
    "category": "Pojazdy i Maszyny",
    "hint": "Dach"
  },
  {
    "word": "Limuzyna",
    "category": "Pojazdy i Maszyny",
    "hint": "Szyby"
  },
  {
    "word": "Taksówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Kogut"
  },
  {
    "word": "Karetka",
    "category": "Pojazdy i Maszyny",
    "hint": "Koguty"
  },
  {
    "word": "Wóz strażacki",
    "category": "Pojazdy i Maszyny",
    "hint": "Pompa"
  },
  {
    "word": "Radiowóz",
    "category": "Pojazdy i Maszyny",
    "hint": "Patrol"
  },
  {
    "word": "Śmieciarka",
    "category": "Pojazdy i Maszyny",
    "hint": "Prasa"
  },
  {
    "word": "Autobus miejski",
    "category": "Pojazdy i Maszyny",
    "hint": "Przystanek"
  },
  {
    "word": "Autokar",
    "category": "Pojazdy i Maszyny",
    "hint": "Podróż"
  },
  {
    "word": "Tramwaj",
    "category": "Pojazdy i Maszyny",
    "hint": "Pantograf"
  },
  {
    "word": "Pociąg",
    "category": "Pojazdy i Maszyny",
    "hint": "Wagony"
  },
  {
    "word": "Metro",
    "category": "Pojazdy i Maszyny",
    "hint": "Podziemie"
  },
  {
    "word": "Lokomotywa",
    "category": "Pojazdy i Maszyny",
    "hint": "Trakcja"
  },
  {
    "word": "Ciężarówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Naczepa"
  },
  {
    "word": "Traktor",
    "category": "Pojazdy i Maszyny",
    "hint": "Bieżnik"
  },
  {
    "word": "Kombajn",
    "category": "Pojazdy i Maszyny",
    "hint": "Żniwa"
  },
  {
    "word": "Koparka",
    "category": "Pojazdy i Maszyny",
    "hint": "Łyżka"
  },
  {
    "word": "Spychacz",
    "category": "Pojazdy i Maszyny",
    "hint": "Gąsienice"
  },
  {
    "word": "Dźwig",
    "category": "Pojazdy i Maszyny",
    "hint": "Wysięgnik"
  },
  {
    "word": "Walec",
    "category": "Pojazdy i Maszyny",
    "hint": "Bęben"
  },
  {
    "word": "Wózek widłowy",
    "category": "Pojazdy i Maszyny",
    "hint": "Widły"
  },
  {
    "word": "Kajak",
    "category": "Pojazdy i Maszyny",
    "hint": "Wiosło"
  },
  {
    "word": "Ponton",
    "category": "Pojazdy i Maszyny",
    "hint": "Komory"
  },
  {
    "word": "Żaglówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Żagiel"
  },
  {
    "word": "Jacht",
    "category": "Pojazdy i Maszyny",
    "hint": "Pokład"
  },
  {
    "word": "Statek wycieczkowy",
    "category": "Pojazdy i Maszyny",
    "hint": "Kajuta"
  },
  {
    "word": "Prom",
    "category": "Pojazdy i Maszyny",
    "hint": "Przeprawa"
  },
  {
    "word": "Barka",
    "category": "Pojazdy i Maszyny",
    "hint": "Kadłub"
  },
  {
    "word": "Holownik",
    "category": "Pojazdy i Maszyny",
    "hint": "Moc"
  },
  {
    "word": "Kuter rybacki",
    "category": "Pojazdy i Maszyny",
    "hint": "Sieci"
  },
  {
    "word": "Motorówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Śruba"
  },
  {
    "word": "Skuter wodny",
    "category": "Pojazdy i Maszyny",
    "hint": "Fala"
  },
  {
    "word": "Lodołamacz",
    "category": "Pojazdy i Maszyny",
    "hint": "Dziób"
  },
  {
    "word": "Okręt podwodny",
    "category": "Pojazdy i Maszyny",
    "hint": "Peryskop"
  },
  {
    "word": "Samolot pasażerski",
    "category": "Pojazdy i Maszyny",
    "hint": "Skrzydła"
  },
  {
    "word": "Awionetka",
    "category": "Pojazdy i Maszyny",
    "hint": "Śmigło"
  },
  {
    "word": "Szybowiec",
    "category": "Pojazdy i Maszyny",
    "hint": "Prądy"
  },
  {
    "word": "Helikopter",
    "category": "Pojazdy i Maszyny",
    "hint": "Wirnik"
  },
  {
    "word": "Balon na gorące powietrze",
    "category": "Pojazdy i Maszyny",
    "hint": "Kosz"
  },
  {
    "word": "Sterowiec",
    "category": "Pojazdy i Maszyny",
    "hint": "Powłoka"
  },
  {
    "word": "Rakieta kosmiczna",
    "category": "Pojazdy i Maszyny",
    "hint": "Paliwo"
  },
  {
    "word": "Łazik marsjański",
    "category": "Pojazdy i Maszyny",
    "hint": "Kamery"
  },
  {
    "word": "Tęcza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kolory"
  },
  {
    "word": "Błyskawica",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wyładowanie"
  },
  {
    "word": "Grzmot",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Huk"
  },
  {
    "word": "Burza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Nawałnica"
  },
  {
    "word": "Tornado",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Lej"
  },
  {
    "word": "Huragan",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wiatr"
  },
  {
    "word": "Zorza polarna",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zieleń"
  },
  {
    "word": "Trzęsienie ziemi",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Drgania"
  },
  {
    "word": "Tsunami",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Fala"
  },
  {
    "word": "Lawina",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Osuwisko"
  },
  {
    "word": "Mgła",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Para"
  },
  {
    "word": "Rosa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Krople"
  },
  {
    "word": "Szron",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kryształki"
  },
  {
    "word": "Grad",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Bryłki"
  },
  {
    "word": "Śnieżyca",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zawieja"
  },
  {
    "word": "Ulewa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Deszcz"
  },
  {
    "word": "Sopel lodu",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zwis"
  },
  {
    "word": "Słońce",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Promienie"
  },
  {
    "word": "Księżyc",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Fazy"
  },
  {
    "word": "Gwiazda",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Punkt"
  },
  {
    "word": "Kometa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Warkocz"
  },
  {
    "word": "Meteor",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Błysk"
  },
  {
    "word": "Asteroida",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Skała"
  },
  {
    "word": "Czarna dziura",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Grawitacja"
  },
  {
    "word": "Droga Mleczna",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Spirala"
  },
  {
    "word": "Zaćmienie słońca",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Cień"
  },
  {
    "word": "Gejzer",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wytrysk"
  },
  {
    "word": "Rafa koralowa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Polipy"
  },
  {
    "word": "Szczyt górski",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Grań"
  },
  {
    "word": "Wąwóz",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Stromość"
  },
  {
    "word": "Półwysep",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Cypel"
  },
  {
    "word": "Zatoka",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Brzeg"
  },
  {
    "word": "Dąb",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Żołędzie"
  },
  {
    "word": "Sosna",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Szyszki"
  },
  {
    "word": "Świerk",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Igły"
  },
  {
    "word": "Brzoza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kora"
  },
  {
    "word": "Wierzba płacząca",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Gałązki"
  },
  {
    "word": "Kaktus",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kolce"
  },
  {
    "word": "Lotos",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Woda"
  },
  {
    "word": "Borowik",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kapelusz"
  },
  {
    "word": "Muchomor",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kropki"
  },
  {
    "word": "Róża",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Płatki"
  },
  {
    "word": "Tulipan",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Cebulka"
  },
  {
    "word": "Słonecznik",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Pestki"
  },
  {
    "word": "Stokrotka",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Łąka"
  },
  {
    "word": "Mlecz",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Dmuchawiec"
  },
  {
    "word": "Bambus",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Łodyga"
  },
  {
    "word": "Baobab",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Pień"
  },
  {
    "word": "Sekwoja",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wysokość"
  },
  {
    "word": "Piłka nożna",
    "category": "Sport, Hobby i Gry",
    "hint": "Bramka"
  },
  {
    "word": "Koszykówka",
    "category": "Sport, Hobby i Gry",
    "hint": "Obręcz"
  },
  {
    "word": "Siatkówka",
    "category": "Sport, Hobby i Gry",
    "hint": "Siatka"
  },
  {
    "word": "Piłka ręczna",
    "category": "Sport, Hobby i Gry",
    "hint": "Parkiet"
  },
  {
    "word": "Tenis ziemny",
    "category": "Sport, Hobby i Gry",
    "hint": "Rakieta"
  },
  {
    "word": "Tenis stołowy",
    "category": "Sport, Hobby i Gry",
    "hint": "Stół"
  },
  {
    "word": "Badminton",
    "category": "Sport, Hobby i Gry",
    "hint": "Lotka"
  },
  {
    "word": "Hokej na lodzie",
    "category": "Sport, Hobby i Gry",
    "hint": "Krążek"
  },
  {
    "word": "Łyżwiarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Płozy"
  },
  {
    "word": "Narciarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Stok"
  },
  {
    "word": "Snowboard",
    "category": "Sport, Hobby i Gry",
    "hint": "Wiązania"
  },
  {
    "word": "Bieganie",
    "category": "Sport, Hobby i Gry",
    "hint": "Kroki"
  },
  {
    "word": "Maraton",
    "category": "Sport, Hobby i Gry",
    "hint": "Dystans"
  },
  {
    "word": "Pływanie",
    "category": "Sport, Hobby i Gry",
    "hint": "Tor"
  },
  {
    "word": "Szachy",
    "category": "Sport, Hobby i Gry",
    "hint": "Pola"
  },
  {
    "word": "Warcaby",
    "category": "Sport, Hobby i Gry",
    "hint": "Pionki"
  },
  {
    "word": "Poker",
    "category": "Sport, Hobby i Gry",
    "hint": "Stawka"
  },
  {
    "word": "Kostka do gry",
    "category": "Sport, Hobby i Gry",
    "hint": "Oczka"
  },
  {
    "word": "Kostka Rubika",
    "category": "Sport, Hobby i Gry",
    "hint": "Ścianki"
  },
  {
    "word": "Puzzle",
    "category": "Sport, Hobby i Gry",
    "hint": "Elementy"
  },
  {
    "word": "Lego",
    "category": "Sport, Hobby i Gry",
    "hint": "Wypustki"
  },
  {
    "word": "Bilard",
    "category": "Sport, Hobby i Gry",
    "hint": "Kije"
  },
  {
    "word": "Kręgle",
    "category": "Sport, Hobby i Gry",
    "hint": "Kula"
  },
  {
    "word": "Rzutki",
    "category": "Sport, Hobby i Gry",
    "hint": "Tarcza"
  },
  {
    "word": "Łucznictwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Cięciwa"
  },
  {
    "word": "Szermierka",
    "category": "Sport, Hobby i Gry",
    "hint": "Maska"
  },
  {
    "word": "Boks",
    "category": "Sport, Hobby i Gry",
    "hint": "Rękawice"
  },
  {
    "word": "Judo",
    "category": "Sport, Hobby i Gry",
    "hint": "Mata"
  },
  {
    "word": "Karate",
    "category": "Sport, Hobby i Gry",
    "hint": "Kimono"
  },
  {
    "word": "Wspinaczka",
    "category": "Sport, Hobby i Gry",
    "hint": "Uprząż"
  },
  {
    "word": "Skoki narciarskie",
    "category": "Sport, Hobby i Gry",
    "hint": "Rozbieg"
  },
  {
    "word": "Kolarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Peleton"
  },
  {
    "word": "Wioślarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Osada"
  },
  {
    "word": "Windsurfing",
    "category": "Sport, Hobby i Gry",
    "hint": "Pędnik"
  },
  {
    "word": "Kitesurfing",
    "category": "Sport, Hobby i Gry",
    "hint": "Latawiec"
  },
  {
    "word": "Spadochroniarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Skok"
  },
  {
    "word": "Wędkarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Żyłka"
  },
  {
    "word": "Gitara",
    "category": "Sport, Hobby i Gry",
    "hint": "Struny"
  },
  {
    "word": "Pianino",
    "category": "Sport, Hobby i Gry",
    "hint": "Klawisze"
  },
  {
    "word": "Perkusja",
    "category": "Sport, Hobby i Gry",
    "hint": "Talerze"
  },
  {
    "word": "Skrzypce",
    "category": "Sport, Hobby i Gry",
    "hint": "Smyczek"
  },
  {
    "word": "Trąbka",
    "category": "Sport, Hobby i Gry",
    "hint": "Wentyle"
  },
  {
    "word": "Saksofon",
    "category": "Sport, Hobby i Gry",
    "hint": "Stroik"
  },
  {
    "word": "Harmonijka ustna",
    "category": "Sport, Hobby i Gry",
    "hint": "Kanały"
  },
  {
    "word": "Flet",
    "category": "Sport, Hobby i Gry",
    "hint": "Otwory"
  },
  {
    "word": "Akordeon",
    "category": "Sport, Hobby i Gry",
    "hint": "Miech"
  },
  {
    "word": "Karaoke",
    "category": "Sport, Hobby i Gry",
    "hint": "Podkład"
  },
  {
    "word": "Origami",
    "category": "Sport, Hobby i Gry",
    "hint": "Zagięcia"
  },
  {
    "word": "Garncarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Glina"
  },
  {
    "word": "Szydełkowanie",
    "category": "Sport, Hobby i Gry",
    "hint": "Haczyk"
  },
  {
    "word": "Koszula",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Guziki"
  },
  {
    "word": "Krawat",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Węzeł"
  },
  {
    "word": "Garnitur",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Elegancja"
  },
  {
    "word": "Sukienka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Krój"
  },
  {
    "word": "Spódnica",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Talia"
  },
  {
    "word": "Jeansy",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Nity"
  },
  {
    "word": "Sweter",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Dzianina"
  },
  {
    "word": "Bluza",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Kaptur"
  },
  {
    "word": "Kurtka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Zamek"
  },
  {
    "word": "Płaszcz",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Klapy"
  },
  {
    "word": "Czapka z pomponem",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Głowa"
  },
  {
    "word": "Kapelusz",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Rondo"
  },
  {
    "word": "Cylinder",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wysokość"
  },
  {
    "word": "Szalik",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Szyja"
  },
  {
    "word": "Rękawiczki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Palce"
  },
  {
    "word": "Skarpetki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Pięta"
  },
  {
    "word": "Trampki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Podeszwa"
  },
  {
    "word": "Szpilki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Obcas"
  },
  {
    "word": "Kozaki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Cholewka"
  },
  {
    "word": "Kalosze",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Guma"
  },
  {
    "word": "Sandały",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Paski"
  },
  {
    "word": "Klapki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Pianka"
  },
  {
    "word": "Pasek do spodni",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Klamra"
  },
  {
    "word": "Torebka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Pasek"
  },
  {
    "word": "Walizka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Rączka"
  },
  {
    "word": "Pierścionek",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Oczko"
  },
  {
    "word": "Naszyjnik",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Zawieszka"
  },
  {
    "word": "Kolczyki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Zapięcie"
  },
  {
    "word": "Bransoletka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Nadgarstek"
  },
  {
    "word": "Spinki do mankietów",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Mankiety"
  },
  {
    "word": "Łóżko",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Materac"
  },
  {
    "word": "Sofa",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Oparcie"
  },
  {
    "word": "Fotel",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Siedzisko"
  },
  {
    "word": "Stół",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Nogi"
  },
  {
    "word": "Krzesło",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Oparcie"
  },
  {
    "word": "Szafa",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Drzwi"
  },
  {
    "word": "Komoda",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Szuflady"
  },
  {
    "word": "Regał na książki",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Półki"
  },
  {
    "word": "Biurko",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Blat"
  },
  {
    "word": "Wanna",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Odpływ"
  },
  {
    "word": "Prysznic",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Deszczownica"
  },
  {
    "word": "Umywalka",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Kran"
  },
  {
    "word": "Zlew",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Bateria"
  },
  {
    "word": "Dywan",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Runo"
  },
  {
    "word": "Firanka",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Karnisz"
  },
  {
    "word": "Zasłona",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Tkanina"
  },
  {
    "word": "Żyrandol",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Sufit"
  },
  {
    "word": "Lampa nocna",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Abażur"
  },
  {
    "word": "Wazon",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Kwiaty"
  },
  {
    "word": "Ramka na zdjęcia",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Szkło"
  },
  {
    "word": "Zegar ścienny",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Tarcza"
  },
  {
    "word": "Kominek",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Płomień"
  },
  {
    "word": "Rycerz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zbroja"
  },
  {
    "word": "Pirat",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Bandera"
  },
  {
    "word": "Wiking",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Topór"
  },
  {
    "word": "Samuraj",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Katana"
  },
  {
    "word": "Ninja",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Cień"
  },
  {
    "word": "Kowboj",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Ostrogi"
  },
  {
    "word": "Król",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Korona"
  },
  {
    "word": "Królowa",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Tron"
  },
  {
    "word": "Książę",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Dwór"
  },
  {
    "word": "Księżniczka",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Wieża"
  },
  {
    "word": "Czarodziej",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Księga"
  },
  {
    "word": "Czarownica",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Kocioł"
  },
  {
    "word": "Smok",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Ogień"
  },
  {
    "word": "Jednorożec",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Róg"
  },
  {
    "word": "Pegaz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Skrzydła"
  },
  {
    "word": "Elf",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Uszy"
  },
  {
    "word": "Krasnolud",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Broda"
  },
  {
    "word": "Wampir",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Kły"
  },
  {
    "word": "Wilkołak",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Pełnia"
  },
  {
    "word": "Zombie",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Cmentarz"
  },
  {
    "word": "Duch",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zjawa"
  },
  {
    "word": "Mumia",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Bandaże"
  },
  {
    "word": "Faraon",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Grobowiec"
  },
  {
    "word": "Piramida",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Kamień"
  },
  {
    "word": "Sfinks",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zagadka"
  },
  {
    "word": "Skarb",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Kufer"
  },
  {
    "word": "Syrena",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Ogon"
  },
  {
    "word": "Kosmita",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Orbita"
  },
  {
    "word": "UFO",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Talerz"
  },
  {
    "word": "Wehikuł czasu",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Epoka"
  },
  {
    "word": "Magiczna różdżka",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Różdżka"
  },
  {
    "word": "Lampa Alladyna",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Imbryk"
  },
  {
    "word": "Miecz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Rękojeść"
  },
  {
    "word": "Tarcza",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Obrona"
  },
  {
    "word": "Katapulta",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Ramię"
  },
  {
    "word": "Armata",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Lufa"
  },
  {
    "word": "Święty Graal",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Kielich"
  },
  {
    "word": "Złote runo",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Skóra"
  },
  {
    "word": "Kraken",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Głębiny"
  },
  {
    "word": "Cerber",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Pies"
  },
  {
    "word": "Serce",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Puls"
  },
  {
    "word": "Mózg",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Myśli"
  },
  {
    "word": "Oko",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Źrenica"
  },
  {
    "word": "Ucho",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Słuch"
  },
  {
    "word": "Nos",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Węch"
  },
  {
    "word": "Usta",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Wargi"
  },
  {
    "word": "Dłoń",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Chwyt"
  },
  {
    "word": "Stopa",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Kroki"
  },
  {
    "word": "Uśmiech",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Radość"
  },
  {
    "word": "Łza",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Smutek"
  },
  {
    "word": "Odcisk palca",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Linie"
  },
  {
    "word": "Cień",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Sylwetka"
  },
  {
    "word": "Tablica",
    "category": "Szkoła i Edukacja",
    "hint": "Kreda"
  },
  {
    "word": "Kreda",
    "category": "Szkoła i Edukacja",
    "hint": "Biel"
  },
  {
    "word": "Gąbka",
    "category": "Szkoła i Edukacja",
    "hint": "Ścieranie"
  },
  {
    "word": "Piórnik",
    "category": "Szkoła i Edukacja",
    "hint": "Zamek"
  },
  {
    "word": "Dziennik",
    "category": "Szkoła i Edukacja",
    "hint": "Oceny"
  },
  {
    "word": "Dzwonek szkolny",
    "category": "Szkoła i Edukacja",
    "hint": "Korytarz"
  },
  {
    "word": "Plecak szkolny",
    "category": "Szkoła i Edukacja",
    "hint": "Tornister"
  },
  {
    "word": "Cyrkiel",
    "category": "Szkoła i Edukacja",
    "hint": "Okrąg"
  },
  {
    "word": "Kątomierz",
    "category": "Szkoła i Edukacja",
    "hint": "Kąty"
  },
  {
    "word": "Ekierka",
    "category": "Szkoła i Edukacja",
    "hint": "Trójkąt"
  },
  {
    "word": "Świadectwo",
    "category": "Szkoła i Edukacja",
    "hint": "Pasek"
  },
  {
    "word": "Dyplom",
    "category": "Szkoła i Edukacja",
    "hint": "Papier"
  },
  {
    "word": "Teczka",
    "category": "Szkoła i Edukacja",
    "hint": "Dokumenty"
  },
  {
    "word": "Flamaster",
    "category": "Szkoła i Edukacja",
    "hint": "Barwnik"
  },
  {
    "word": "Korektor",
    "category": "Szkoła i Edukacja",
    "hint": "Biel"
  },
  {
    "word": "Klej biurowy",
    "category": "Szkoła i Edukacja",
    "hint": "Sztyft"
  },
  {
    "word": "Plastelina",
    "category": "Szkoła i Edukacja",
    "hint": "Lepienie"
  },
  {
    "word": "Modelina",
    "category": "Szkoła i Edukacja",
    "hint": "Masa"
  },
  {
    "word": "Blok rysunkowy",
    "category": "Szkoła i Edukacja",
    "hint": "Arkusze"
  },
  {
    "word": "Farby plakatowe",
    "category": "Szkoła i Edukacja",
    "hint": "Słoiczek"
  },
  {
    "word": "Kredki ołówkowe",
    "category": "Szkoła i Edukacja",
    "hint": "Kolor"
  },
  {
    "word": "Kredki świecowe",
    "category": "Szkoła i Edukacja",
    "hint": "Wosk"
  },
  {
    "word": "Pióro wieczne",
    "category": "Szkoła i Edukacja",
    "hint": "Stalówka"
  },
  {
    "word": "Atrament",
    "category": "Szkoła i Edukacja",
    "hint": "Plama"
  },
  {
    "word": "Atlas geograficzny",
    "category": "Szkoła i Edukacja",
    "hint": "Kontynenty"
  },
  {
    "word": "Słownik",
    "category": "Szkoła i Edukacja",
    "hint": "Hasła"
  },
  {
    "word": "Encyklopedia",
    "category": "Szkoła i Edukacja",
    "hint": "Wiedza"
  },
  {
    "word": "Puzon",
    "category": "Muzyka i Dźwięk",
    "hint": "Suwak"
  },
  {
    "word": "Tuba",
    "category": "Muzyka i Dźwięk",
    "hint": "Blacha"
  },
  {
    "word": "Waltornia",
    "category": "Muzyka i Dźwięk",
    "hint": "Róg"
  },
  {
    "word": "Klarnet",
    "category": "Muzyka i Dźwięk",
    "hint": "Drewno"
  },
  {
    "word": "Oboj",
    "category": "Muzyka i Dźwięk",
    "hint": "Stroik"
  },
  {
    "word": "Fagot",
    "category": "Muzyka i Dźwięk",
    "hint": "Barwa"
  },
  {
    "word": "Harfa",
    "category": "Muzyka i Dźwięk",
    "hint": "Struny"
  },
  {
    "word": "Wiolonczela",
    "category": "Muzyka i Dźwięk",
    "hint": "Podparcie"
  },
  {
    "word": "Kontrabas",
    "category": "Muzyka i Dźwięk",
    "hint": "Bas"
  },
  {
    "word": "Ksylofon",
    "category": "Muzyka i Dźwięk",
    "hint": "Sztabki"
  },
  {
    "word": "Trójkąt",
    "category": "Muzyka i Dźwięk",
    "hint": "Stal"
  },
  {
    "word": "Tamburyn",
    "category": "Muzyka i Dźwięk",
    "hint": "Blaszki"
  },
  {
    "word": "Kastaniety",
    "category": "Muzyka i Dźwięk",
    "hint": "Rytm"
  },
  {
    "word": "Kongi",
    "category": "Muzyka i Dźwięk",
    "hint": "Membrana"
  },
  {
    "word": "Syntezator",
    "category": "Muzyka i Dźwięk",
    "hint": "Elektronika"
  },
  {
    "word": "Wzmacniacz",
    "category": "Muzyka i Dźwięk",
    "hint": "Kolumna"
  },
  {
    "word": "Struna",
    "category": "Muzyka i Dźwięk",
    "hint": "Drganie"
  },
  {
    "word": "Kostka gitarowa",
    "category": "Muzyka i Dźwięk",
    "hint": "Szarpanie"
  },
  {
    "word": "Batuta",
    "category": "Muzyka i Dźwięk",
    "hint": "Dyrygowanie"
  },
  {
    "word": "Pulpit na nuty",
    "category": "Muzyka i Dźwięk",
    "hint": "Stojak"
  },
  {
    "word": "Nuty",
    "category": "Muzyka i Dźwięk",
    "hint": "Pięciolinia"
  },
  {
    "word": "Metronom",
    "category": "Muzyka i Dźwięk",
    "hint": "Tempo"
  },
  {
    "word": "Chodnik",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Kostka"
  },
  {
    "word": "Krawężnik",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Krawędź"
  },
  {
    "word": "Przejście dla pieszych",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Pasy"
  },
  {
    "word": "Sygnalizacja świetlna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Światła"
  },
  {
    "word": "Latarnia uliczna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Słup"
  },
  {
    "word": "Ławka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Odpoczynek"
  },
  {
    "word": "Skrzynka pocztowa",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Otwór"
  },
  {
    "word": "Biletomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Bilety"
  },
  {
    "word": "Bankomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Gotówka"
  },
  {
    "word": "Wpłatomierz",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Depozyt"
  },
  {
    "word": "Parkomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Bilet"
  },
  {
    "word": "Barierka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Ogrodzenie"
  },
  {
    "word": "Wiata przystankowa",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Zadaszenie"
  },
  {
    "word": "Koszyk sklepowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Rączka"
  },
  {
    "word": "Wózek sklepowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Moneta"
  },
  {
    "word": "Kasa fiskalna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Paragon"
  },
  {
    "word": "Skaner kodów",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Laser"
  },
  {
    "word": "Budka telefoniczna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Automat"
  },
  {
    "word": "Fontanna miejska",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Plac"
  },
  {
    "word": "Zegar wieżowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Tarcza"
  },
  {
    "word": "Plac targowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Handel"
  },
  {
    "word": "Rondo",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Wyspa"
  },
  {
    "word": "Autostrada",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Węzeł"
  },
  {
    "word": "Ścieżka rowerowa",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Asfalt"
  },
  {
    "word": "Koniczyna",
    "category": "Rośliny, Ogród i Las",
    "hint": "Liście"
  },
  {
    "word": "Paproć",
    "category": "Rośliny, Ogród i Las",
    "hint": "Pióropusz"
  },
  {
    "word": "Mech",
    "category": "Rośliny, Ogród i Las",
    "hint": "Runo"
  },
  {
    "word": "Porost",
    "category": "Rośliny, Ogród i Las",
    "hint": "Skała"
  },
  {
    "word": "Jodła",
    "category": "Rośliny, Ogród i Las",
    "hint": "Szyszki"
  },
  {
    "word": "Modrzew",
    "category": "Rośliny, Ogród i Las",
    "hint": "Igły"
  },
  {
    "word": "Lipa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Kwiaty"
  },
  {
    "word": "Kasztanowiec",
    "category": "Rośliny, Ogród i Las",
    "hint": "Łupiny"
  },
  {
    "word": "Jarzębina",
    "category": "Rośliny, Ogród i Las",
    "hint": "Korale"
  },
  {
    "word": "Głóg",
    "category": "Rośliny, Ogród i Las",
    "hint": "Krzew"
  },
  {
    "word": "Dzika róża",
    "category": "Rośliny, Ogród i Las",
    "hint": "Kolce"
  },
  {
    "word": "Pokrzywa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Parzenie"
  },
  {
    "word": "Rumianek",
    "category": "Rośliny, Ogród i Las",
    "hint": "Koszyczek"
  },
  {
    "word": "Mięta",
    "category": "Rośliny, Ogród i Las",
    "hint": "Orzeźwienie"
  },
  {
    "word": "Melisa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Ukojenie"
  },
  {
    "word": "Lawenda",
    "category": "Rośliny, Ogród i Las",
    "hint": "Fiolet"
  },
  {
    "word": "Krokus",
    "category": "Rośliny, Ogród i Las",
    "hint": "Tatry"
  },
  {
    "word": "Przebiśnieg",
    "category": "Rośliny, Ogród i Las",
    "hint": "Wiosna"
  },
  {
    "word": "Konwalia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Dzwoneczki"
  },
  {
    "word": "Storczyk",
    "category": "Rośliny, Ogród i Las",
    "hint": "Doniczka"
  },
  {
    "word": "Begonia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Płatki"
  },
  {
    "word": "Pelargonia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Balkon"
  },
  {
    "word": "Papirus",
    "category": "Rośliny, Ogród i Las",
    "hint": "Trzcina"
  },
  {
    "word": "Krokiet",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Panierka"
  },
  {
    "word": "Kluski śląskie",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Dziurka"
  },
  {
    "word": "Kopytka",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Krojenie"
  },
  {
    "word": "Knypek",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Ostrze"
  },
  {
    "word": "Oscypek",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Dym"
  },
  {
    "word": "Bryndza",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Słoność"
  },
  {
    "word": "Karpacz",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Góry"
  },
  {
    "word": "Babka piaskowa",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Forma"
  },
  {
    "word": "Rogal świętomarciński",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Nadzienie"
  },
  {
    "word": "Cynamon",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Kora"
  },
  {
    "word": "Wanilia",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Laska"
  },
  {
    "word": "Imbir",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Kłącze"
  },
  {
    "word": "Kurkuma",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Żółć"
  },
  {
    "word": "Goździki",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Pąki"
  },
  {
    "word": "Pieprz",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Ziarna"
  },
  {
    "word": "Sól morska",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Kryształki"
  },
  {
    "word": "Cukier puder",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Mielenie"
  },
  {
    "word": "Rodzynki",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Suszenie"
  },
  {
    "word": "Orzech włoski",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Skorupa"
  },
  {
    "word": "Orzech laskowy",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Leszczyna"
  },
  {
    "word": "Migdał",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Jądro"
  },
  {
    "word": "Pistacje",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Łupina"
  },
  {
    "word": "Pestki dyni",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Nasiona"
  },
  {
    "word": "Pestki słonecznika",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Łuskanie"
  },
  {
    "word": "Pochodnia",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Ogień"
  },
  {
    "word": "Kandelabr",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Świecznik"
  },
  {
    "word": "Amulet",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Wisiorek"
  },
  {
    "word": "Talizman",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Szczęście"
  },
  {
    "word": "Kompas",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Igła"
  },
  {
    "word": "Sekstans",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Nawigacja"
  },
  {
    "word": "Klepsydra",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Piasek"
  },
  {
    "word": "Pozytywka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Melodia"
  },
  {
    "word": "Monokl",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Oko"
  },
  {
    "word": "Laska spacerowa",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Gałka"
  },
  {
    "word": "Wachlarz",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Powiew"
  },
  {
    "word": "Papier ścierny",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Ziarno"
  },
  {
    "word": "Szpachelka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Gładź"
  },
  {
    "word": "Paca tynkarska",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Tynk"
  },
  {
    "word": "Kielnia",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Zaprawa"
  },
  {
    "word": "Imadło",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Śruba"
  },
  {
    "word": "Kowadło",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Młot"
  },
  {
    "word": "Miech kowalski",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Dmuchanie"
  },
  {
    "word": "Dłuto",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Krawędź"
  },
  {
    "word": "Heblarka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Wióry"
  },
  {
    "word": "Bierki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wiązka"
  },
  {
    "word": "Pchełki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Krążek"
  },
  {
    "word": "Domino",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Kropki"
  },
  {
    "word": "Jojo",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Sznurek"
  },
  {
    "word": "Bączek",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wirowanie"
  },
  {
    "word": "Klocki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Budowanie"
  },
  {
    "word": "Miś pluszowy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Maskotka"
  },
  {
    "word": "Lalka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zabawka"
  },
  {
    "word": "Proca",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Guma"
  },
  {
    "word": "Latawiec",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wiatr"
  },
  {
    "word": "Hula-hop",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Obręcz"
  },
  {
    "word": "Skakanka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Rączki"
  },
  {
    "word": "Guma do skakania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Skoki"
  },
  {
    "word": "Bańki mydlane",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Piana"
  },
  {
    "word": "Balonik wodny",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Woda"
  },
  {
    "word": "Cymbergaj",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Stół"
  },
  {
    "word": "Piłkarzyki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pręty"
  },
  {
    "word": "Gra planszowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pionki"
  },
  {
    "word": "Monopoly",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Nieruchomości"
  },
  {
    "word": "Kalambury",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Gesty"
  },
  {
    "word": "Flawerpot",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Osłonka"
  },
  {
    "word": "Karmnik dla ptaków",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Daszek"
  },
  {
    "word": "Budka lęgowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Otwór"
  },
  {
    "word": "Huśtawka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Liny"
  },
  {
    "word": "Zjeżdżalnia",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ślizg"
  },
  {
    "word": "Piaskownica",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Piasek"
  },
  {
    "word": "Karuzela podwórkowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Obrót"
  },
  {
    "word": "Hamak",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Siatka"
  },
  {
    "word": "Leżak",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Płótno"
  },
  {
    "word": "Parawan",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Plaża"
  },
  {
    "word": "Koło ratunkowe",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pływak"
  },
  {
    "word": "Rękawki do pływania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wyporność"
  },
  {
    "word": "Maska do nurkowania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Szyba"
  },
  {
    "word": "Fajka do nurkowania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Rurka"
  },
  {
    "word": "Płetwy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Woda"
  },
  {
    "word": "Ponton ratunkowy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Tratwa"
  },
  {
    "word": "Kotwica",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Łapy"
  },
  {
    "word": "Koło sterowe",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Sternik"
  },
  {
    "word": "Peryskop",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Lustra"
  },
  {
    "word": "Skafander kosmiczny",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Próżnia"
  },
  {
    "word": "Hełm",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Skorupa"
  },
  {
    "word": "Maska gazowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pochłaniacz"
  },
  {
    "word": "Lornetka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Szkła"
  },
  {
    "word": "Peruka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Włosy"
  },
  {
    "word": "Wąsy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zarost"
  },
  {
    "word": "Broda",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zarost"
  },
  {
    "word": "Tatuaż z henny",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wzór"
  },
  {
    "word": "Piercing",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Przekłucie"
  },
  {
    "word": "Kufel",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ucho"
  },
  {
    "word": "Kielich",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Czara"
  },
  {
    "word": "Puchar",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Trofeum"
  },
  {
    "word": "Medal",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wstążka"
  },
  {
    "word": "Wieniec laurowy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Liście"
  },
  {
    "word": "Znicz olimpijski",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Płomień"
  },
  {
    "word": "Pochodnia olimpijska",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Sztafeta"
  },
  {
    "word": "Gwizdek",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Dźwięk"
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = IMPOSTOR_WORDS;
  } else {
    root.IMPOSTOR_WORDS = IMPOSTOR_WORDS;
  }
})(typeof window !== 'undefined' ? window : this);
