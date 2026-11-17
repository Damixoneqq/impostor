/**
 * Baza słów dla gry "Impostor" (kalkulator ról / master screen pass-and-play).
 * Zawiera 1026 unikalnych, różnorodnych polskich słów (rzeczowników) z kategoriami i podpowiedziami.
 */
(function(root) {
  const IMPOSTOR_WORDS = [
  {
    "word": "Pies",
    "category": "Zwierzęta",
    "hint": "Czworonożny przyjaciel człowieka"
  },
  {
    "word": "Kot",
    "category": "Zwierzęta",
    "hint": "Chodzi własnymi ścieżkami"
  },
  {
    "word": "Koń",
    "category": "Zwierzęta",
    "hint": "Zwierzę pociągowe z grzywą"
  },
  {
    "word": "Krowa",
    "category": "Zwierzęta",
    "hint": "Daje mleko na łące"
  },
  {
    "word": "Owca",
    "category": "Zwierzęta",
    "hint": "Daje wełnę"
  },
  {
    "word": "Świnia",
    "category": "Zwierzęta",
    "hint": "Różowe zwierzę hodowlane"
  },
  {
    "word": "Koza",
    "category": "Zwierzęta",
    "hint": "Ma rogi i wspina się po skałach"
  },
  {
    "word": "Kura",
    "category": "Zwierzęta",
    "hint": "Znosi jajka w kurniku"
  },
  {
    "word": "Kogut",
    "category": "Zwierzęta",
    "hint": "Pieje o poranku"
  },
  {
    "word": "Kaczka",
    "category": "Zwierzęta",
    "hint": "Pływa w stawie i kwacze"
  },
  {
    "word": "Gęś",
    "category": "Zwierzęta",
    "hint": "Ptak z długą szyją, syczy"
  },
  {
    "word": "Indyk",
    "category": "Zwierzęta",
    "hint": "Duży ptak z koralami"
  },
  {
    "word": "Gołąb",
    "category": "Zwierzęta",
    "hint": "Ptak miejski symbolizujący pokój"
  },
  {
    "word": "Wróbel",
    "category": "Zwierzęta",
    "hint": "Mały szary ptaszek miejski"
  },
  {
    "word": "Dzięcioł",
    "category": "Zwierzęta",
    "hint": "Stuka dziobem w drzewo"
  },
  {
    "word": "Sowa",
    "category": "Zwierzęta",
    "hint": "Nocny ptak o bystrym wzroku"
  },
  {
    "word": "Orzeł",
    "category": "Zwierzęta",
    "hint": "Królewski drapieżnik z nieba"
  },
  {
    "word": "Jastrząb",
    "category": "Zwierzęta",
    "hint": "Szybki ptak drapieżny"
  },
  {
    "word": "Sokół",
    "category": "Zwierzęta",
    "hint": "Najszybszy łowca w powietrzu"
  },
  {
    "word": "Bocian",
    "category": "Zwierzęta",
    "hint": "Przylatuje wiosną, zakłada gniazda na dachach"
  },
  {
    "word": "Czapla",
    "category": "Zwierzęta",
    "hint": "Stoi w trzcinach na jednej nodze"
  },
  {
    "word": "Łabędź",
    "category": "Zwierzęta",
    "hint": "Dostojny biały ptak wodny"
  },
  {
    "word": "Pingwin",
    "category": "Zwierzęta",
    "hint": "Nielot we fraku z mroźnej krainy"
  },
  {
    "word": "Flaming",
    "category": "Zwierzęta",
    "hint": "Różowy ptak brodzący"
  },
  {
    "word": "Struś",
    "category": "Zwierzęta",
    "hint": "Największy nielot na świecie"
  },
  {
    "word": "Koliber",
    "category": "Zwierzęta",
    "hint": "Najmniejszy ptak, spija nektar"
  },
  {
    "word": "Papuga",
    "category": "Zwierzęta",
    "hint": "Kolorowy ptak potrafiący naśladować mowę"
  },
  {
    "word": "Tukan",
    "category": "Zwierzęta",
    "hint": "Ptak z olbrzymim kolorowym dziobem"
  },
  {
    "word": "Mewa",
    "category": "Zwierzęta",
    "hint": "Krzykliwy ptak nadmorski"
  },
  {
    "word": "Nietoperz",
    "category": "Zwierzęta",
    "hint": "Latający ssak nocny"
  },
  {
    "word": "Lew",
    "category": "Zwierzęta",
    "hint": "Król zwierząt z afrykańskiej sawanny"
  },
  {
    "word": "Tygrys",
    "category": "Zwierzęta",
    "hint": "Pasiasty drapieżnik z dżungli"
  },
  {
    "word": "Lampart",
    "category": "Zwierzęta",
    "hint": "Cętkowany zwinny drapieżnik na drzewie"
  },
  {
    "word": "Gepard",
    "category": "Zwierzęta",
    "hint": "Najszybszy ssak lądowy"
  },
  {
    "word": "Pantera",
    "category": "Zwierzęta",
    "hint": "Czarny tajemniczy kot z dżungli"
  },
  {
    "word": "Wilk",
    "category": "Zwierzęta",
    "hint": "Wyje do księżyca w leśnej watasze"
  },
  {
    "word": "Lis",
    "category": "Zwierzęta",
    "hint": "Chytry rudy drapieżnik z puszystą kitą"
  },
  {
    "word": "Niedźwiedź",
    "category": "Zwierzęta",
    "hint": "Wielki brunatny król lasu lubiący miód"
  },
  {
    "word": "Niedźwiedź polarny",
    "category": "Zwierzęta",
    "hint": "Biały potężny drapieżnik arktyczny"
  },
  {
    "word": "Panda",
    "category": "Zwierzęta",
    "hint": "Czarno-biały miś jedzący pędy bambusa"
  },
  {
    "word": "Koala",
    "category": "Zwierzęta",
    "hint": "Śpi na drzewie eukaliptusowym w Australii"
  },
  {
    "word": "Żyrafa",
    "category": "Zwierzęta",
    "hint": "Ma najdłuższą szyję na świecie"
  },
  {
    "word": "Słoń",
    "category": "Zwierzęta",
    "hint": "Największy ssak lądowy z trąbą i ciosami"
  },
  {
    "word": "Nosorożec",
    "category": "Zwierzęta",
    "hint": "Potężny ssak z rogiem na nosie"
  },
  {
    "word": "Hipopotam",
    "category": "Zwierzęta",
    "hint": "Wielkie zwierzę spędzające czas w rzece"
  },
  {
    "word": "Zebra",
    "category": "Zwierzęta",
    "hint": "Afrykański roślinożerca w czarno-białe paski"
  },
  {
    "word": "Wielbłąd",
    "category": "Zwierzęta",
    "hint": "Ma garby i wytrzymuje bez wody na pustyni"
  },
  {
    "word": "Kangur",
    "category": "Zwierzęta",
    "hint": "Skacze na tylnych łapach i nosi młode w torbie"
  },
  {
    "word": "Szop pracz",
    "category": "Zwierzęta",
    "hint": "Zwierzę w czarnej masce, które myje jedzenie"
  },
  {
    "word": "Bóbr",
    "category": "Zwierzęta",
    "hint": "Buduje tamy z pni drzew na rzekach"
  },
  {
    "word": "Wiewiórka",
    "category": "Zwierzęta",
    "hint": "Ruda zbieraczka orzechów i szyszek"
  },
  {
    "word": "Jeż",
    "category": "Zwierzęta",
    "hint": "Ma kolce na grzbiecie i zwija się w kulkę"
  },
  {
    "word": "Borsuk",
    "category": "Zwierzęta",
    "hint": "Zwierzę w biało-czarne pasy, mieszka w norze"
  },
  {
    "word": "Kret",
    "category": "Zwierzęta",
    "hint": "Ślepy kopacz robiący kopce w ziemi"
  },
  {
    "word": "Zając",
    "category": "Zwierzęta",
    "hint": "Długouchy szybki uciekinier z miedz"
  },
  {
    "word": "Królik",
    "category": "Zwierzęta",
    "hint": "Lubi marchewki i kica po trawie"
  },
  {
    "word": "Sarna",
    "category": "Zwierzęta",
    "hint": "Płochliwy mieszkaniec leśnych polan"
  },
  {
    "word": "Jeleń",
    "category": "Zwierzęta",
    "hint": "Dostojny samiec z rozłożystym porożem"
  },
  {
    "word": "Łoś",
    "category": "Zwierzęta",
    "hint": "Wielki leśny ssak z szerokim porożem w kształcie łopat"
  },
  {
    "word": "Żubr",
    "category": "Zwierzęta",
    "hint": "Władca Puszczy Białowieskiej"
  },
  {
    "word": "Delfin",
    "category": "Zwierzęta",
    "hint": "Inteligentny morski ssak wyskakujący z wody"
  },
  {
    "word": "Wieloryb",
    "category": "Zwierzęta",
    "hint": "Morski olbrzym wypuszczający fontannę wody"
  },
  {
    "word": "Orka",
    "category": "Zwierzęta",
    "hint": "Czarno-biały drapieżny ssak oceaniczny"
  },
  {
    "word": "Rekin",
    "category": "Zwierzęta",
    "hint": "Groźny drapieżnik z trójkątną płetwą grzbietową"
  },
  {
    "word": "Manta",
    "category": "Zwierzęta",
    "hint": "Olbrzymia płaszczka szybująca w oceanie"
  },
  {
    "word": "Konik morski",
    "category": "Zwierzęta",
    "hint": "Mała rybka o niezwykłym kształcie pionowym"
  },
  {
    "word": "Ośmiornica",
    "category": "Zwierzęta",
    "hint": "Ma osiem macek z przyssawkami i zmienia barwy"
  },
  {
    "word": "Kałamarnica",
    "category": "Zwierzęta",
    "hint": "Głębinowy głowonóg z mackami wypuszczający atrament"
  },
  {
    "word": "Meduza",
    "category": "Zwierzęta",
    "hint": "Parzydełkowiec z galaretowatym ciałem w morzu"
  },
  {
    "word": "Rozgwiazda",
    "category": "Zwierzęta",
    "hint": "Morskie stworzenie w kształcie pięcioramiennej gwiazdy"
  },
  {
    "word": "Krab",
    "category": "Zwierzęta",
    "hint": "Chodzi bokiem po plaży i ma twardy pancerz"
  },
  {
    "word": "Homar",
    "category": "Zwierzęta",
    "hint": "Skorupiak z wielkimi szczypcami z dna oceanu"
  },
  {
    "word": "Krewetka",
    "category": "Zwierzęta",
    "hint": "Mały różowy przysmak morski z pancerzykiem"
  },
  {
    "word": "Żółw",
    "category": "Zwierzęta",
    "hint": "Dźwiga ciężką skorupę i porusza się bardzo powoli"
  },
  {
    "word": "Krokodyl",
    "category": "Zwierzęta",
    "hint": "Pancerny gad z Nilu o wielkich szczękach"
  },
  {
    "word": "Aligator",
    "category": "Zwierzęta",
    "hint": "Amerykański drapieżny gad z mokradeł"
  },
  {
    "word": "Kameleon",
    "category": "Zwierzęta",
    "hint": "Zmienia barwę skóry i ma obrotowe oczy"
  },
  {
    "word": "Iguana",
    "category": "Zwierzęta",
    "hint": "Duża nadrzewna jaszczurka z grzebieniem"
  },
  {
    "word": "Wąż",
    "category": "Zwierzęta",
    "hint": "Beznogi gad pełzający w trawie"
  },
  {
    "word": "Kobra",
    "category": "Zwierzęta",
    "hint": "Jadowity wąż z rozszerzanym kapturem"
  },
  {
    "word": "Żmija",
    "category": "Zwierzęta",
    "hint": "Jedyny jadowity wąż w polskich lasach"
  },
  {
    "word": "Żaba",
    "category": "Zwierzęta",
    "hint": "Zielony płaz kumkający w stawie i łapiący muchy"
  },
  {
    "word": "Ropucha",
    "category": "Zwierzęta",
    "hint": "Duży pożyteczny płaz o chropowatej skórze"
  },
  {
    "word": "Salamandra",
    "category": "Zwierzęta",
    "hint": "Czarny płaz w jaskrawożółte plamy"
  },
  {
    "word": "Ślimak",
    "category": "Zwierzęta",
    "hint": "Zostawia ślad śluzu i nosi spiralny domek"
  },
  {
    "word": "Motyl",
    "category": "Zwierzęta",
    "hint": "Ma barwne skrzydła, powstał z gąsienicy"
  },
  {
    "word": "Ćma",
    "category": "Zwierzęta",
    "hint": "Nocny owad lecący prosto do żarówki"
  },
  {
    "word": "Pszczoła",
    "category": "Zwierzęta",
    "hint": "Pracowity owad zbierający nektar i robiący miód"
  },
  {
    "word": "Osa",
    "category": "Zwierzęta",
    "hint": "Żądli bez utraty żądła i ma żółto-czarne pasy"
  },
  {
    "word": "Szerszeń",
    "category": "Zwierzęta",
    "hint": "Wielka, groźna pasiasta osa leśna"
  },
  {
    "word": "Trzmiel",
    "category": "Zwierzęta",
    "hint": "Gruby, puszysty i bzyczący zapylacz kwiatów"
  },
  {
    "word": "Mrówka",
    "category": "Zwierzęta",
    "hint": "Niezwykle silny owad budujący leśne kopce"
  },
  {
    "word": "Biedronka",
    "category": "Zwierzęta",
    "hint": "Czerwony owad w czarne kropki przynoszący szczęście"
  },
  {
    "word": "Świerszcz",
    "category": "Zwierzęta",
    "hint": "Owad grający wieczorami na łące"
  },
  {
    "word": "Pasikonik",
    "category": "Zwierzęta",
    "hint": "Zielony skoczek ukryty w gęstej trawie"
  },
  {
    "word": "Ważka",
    "category": "Zwierzęta",
    "hint": "Szybki owad z przezroczystymi skrzydłami nad wodą"
  },
  {
    "word": "Mucha",
    "category": "Zwierzęta",
    "hint": "Uciążliwy latający owad z wielkimi oczami"
  },
  {
    "word": "Komar",
    "category": "Zwierzęta",
    "hint": "Pije krew w letnie wieczory i brzęczy nad uchem"
  },
  {
    "word": "Pająk",
    "category": "Zwierzęta",
    "hint": "Ośmionożny tkacz sieci w kącie pokoju"
  },
  {
    "word": "Skorpion",
    "category": "Zwierzęta",
    "hint": "Pustynny pajęczak z jadowitym kolcem na ogonie"
  },
  {
    "word": "Leniwiec",
    "category": "Zwierzęta",
    "hint": "Niezwykle powolny ssak wiszący głową w dół na drzewie"
  },
  {
    "word": "Kapibara",
    "category": "Zwierzęta",
    "hint": "Największy na świecie i najbardziej wyluzowany gryzoń"
  },
  {
    "word": "Alpaka",
    "category": "Zwierzęta",
    "hint": "Puszyste zwierzę hodowlane z wełną z Ameryki Płd."
  },
  {
    "word": "Lama",
    "category": "Zwierzęta",
    "hint": "Zwierzę juczne z Andów, które pluje ze złości"
  },
  {
    "word": "Dromader",
    "category": "Zwierzęta",
    "hint": "Jednogarbny wędrowiec pustynnych karawan"
  },
  {
    "word": "Wydra",
    "category": "Zwierzęta",
    "hint": "Wodny drapieżnik pływający na plecach w rzece"
  },
  {
    "word": "Hiena",
    "category": "Zwierzęta",
    "hint": "Sawannowy drapieżnik o charakterystycznym śmiechu"
  },
  {
    "word": "Szakal",
    "category": "Zwierzęta",
    "hint": "Mniejszy kuzyn wilka z pustyń i stepów"
  },
  {
    "word": "Dingo",
    "category": "Zwierzęta",
    "hint": "Dziki australijski pies stepowy"
  },
  {
    "word": "Suseł",
    "category": "Zwierzęta",
    "hint": "Gryzoń stojący na baczność przy swojej norce"
  },
  {
    "word": "Chomik",
    "category": "Zwierzęta",
    "hint": "Domowy gryzoń wypychający policzki ziarnem"
  },
  {
    "word": "Świnka morska",
    "category": "Zwierzęta",
    "hint": "Piszczący gryzoń domowy z gładką sierścią"
  },
  {
    "word": "Szczur",
    "category": "Zwierzęta",
    "hint": "Bardzo inteligentny gryzoń o długim ogonie"
  },
  {
    "word": "Mysz",
    "category": "Zwierzęta",
    "hint": "Mały gryzoń uciekający przed kotem do norki"
  },
  {
    "word": "Fretka",
    "category": "Zwierzęta",
    "hint": "Długie, zwinne i ciekawskie zwierzątko domowe"
  },
  {
    "word": "Pancernik",
    "category": "Zwierzęta",
    "hint": "Zwierzę ze zbroją kostną zwijające się w kulkę"
  },
  {
    "word": "Mrównojad",
    "category": "Zwierzęta",
    "hint": "Ma długi ryjek i lepki język do wyjadania mrówek"
  },
  {
    "word": "Dziobak",
    "category": "Zwierzęta",
    "hint": "Niezwykły ssak z dziobem kaczki i ogonem bobra"
  },
  {
    "word": "Kolczatka",
    "category": "Zwierzęta",
    "hint": "Najeżony ssak z Australii składający jaja"
  },
  {
    "word": "Paw",
    "category": "Zwierzęta",
    "hint": "Ptak rozkładający wspaniały wachlarz kolorowych piór"
  },
  {
    "word": "Pelikan",
    "category": "Zwierzęta",
    "hint": "Ptak wodny z wielką torbą pod dziobem na ryby"
  },
  {
    "word": "Sęp",
    "category": "Zwierzęta",
    "hint": "Wielki ptak padlinożerny krążący wysoko na niebie"
  },
  {
    "word": "Kukawka",
    "category": "Zwierzęta",
    "hint": "Ptak podrzucający swoje jajka do cudzych gniazd"
  },
  {
    "word": "Sroka",
    "category": "Zwierzęta",
    "hint": "Czarno-biały ptak mający słabość do błyskotek"
  },
  {
    "word": "Wrona",
    "category": "Zwierzęta",
    "hint": "Inteligentny czarny ptak miejski"
  },
  {
    "word": "Kruk",
    "category": "Zwierzęta",
    "hint": "Wielki czarny mądry ptak z baśni i legend"
  },
  {
    "word": "Dudek",
    "category": "Zwierzęta",
    "hint": "Ptak z pięknym pasiastym czubem na głowie"
  },
  {
    "word": "Zimorodek",
    "category": "Zwierzęta",
    "hint": "Niewielki turkusowo-pomarańczowy ptak nurkujący za rybkami"
  },
  {
    "word": "Pizza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Włoski okrągły placek z sosem pomidorowym i serem"
  },
  {
    "word": "Burger",
    "category": "Jedzenie i Kulinaria",
    "hint": "Grillowany kotlet wołowy w bułce z sezamem"
  },
  {
    "word": "Kebab",
    "category": "Jedzenie i Kulinaria",
    "hint": "Opiekane mięso z warzywami w cienkim cieście pita"
  },
  {
    "word": "Hot dog",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciepła parówka w podłużnej bułce z musztardą"
  },
  {
    "word": "Frytki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupiące złociste słupki ziemniaczane z solą"
  },
  {
    "word": "Pierogi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tradycyjne polskie ciasto z farszem ruskim lub mięsnym"
  },
  {
    "word": "Naleśniki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cienkie ciasto smażone na patelni zwijane z dżemem"
  },
  {
    "word": "Gołąbki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Farsz z ryżu i mięsa owinięty w liście białej kapusty"
  },
  {
    "word": "Kotlet schabowy",
    "category": "Jedzenie i Kulinaria",
    "hint": "Panierowany plaster schabu smażony na złoto"
  },
  {
    "word": "Bigos",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tradycyjne danie z kapusty kiszonej, mięsa i leśnych grzybów"
  },
  {
    "word": "Rosół",
    "category": "Jedzenie i Kulinaria",
    "hint": "Przejrzysta złocista zupa drobiowo-wołowa z makaronem"
  },
  {
    "word": "Żurek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kwaszona zupa na zakwasie żytnim z jajkiem i białą kiełbasą"
  },
  {
    "word": "Barszcz czerwony",
    "category": "Jedzenie i Kulinaria",
    "hint": "Czysta rubinowa zupa buraczana z uszkami"
  },
  {
    "word": "Zupa pomidorowa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Klasyczna zupa obiadowa z przecieru ze śmietaną"
  },
  {
    "word": "Chłodnik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Różowa zimna zupa z botwinki, ogórka i koperku"
  },
  {
    "word": "Gulasz",
    "category": "Jedzenie i Kulinaria",
    "hint": "Aromatyczne duszone mięso w gęstym sosie paprykowym"
  },
  {
    "word": "Lasagne",
    "category": "Jedzenie i Kulinaria",
    "hint": "Włoska zapiekanka z płatów makaronu, beszamelu i mięsa"
  },
  {
    "word": "Spaghetti",
    "category": "Jedzenie i Kulinaria",
    "hint": "Długie nitki makaronu z sosem bolońskim i parmezanem"
  },
  {
    "word": "Tortilla",
    "category": "Jedzenie i Kulinaria",
    "hint": "Okrągły płaski placek kukurydziany lub pszenny"
  },
  {
    "word": "Tacos",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupiące kukurydziane muszle z pikantnym farszem"
  },
  {
    "word": "Burrito",
    "category": "Jedzenie i Kulinaria",
    "hint": "Meksykańska sycąca rolada z ryżem, fasolą i mięsem"
  },
  {
    "word": "Sushi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Japońskie kawałki ryżu z surowym łososiem i wodorostami"
  },
  {
    "word": "Ramen",
    "category": "Jedzenie i Kulinaria",
    "hint": "Głęboka miska japońskiego bulionu z makaronem i dodatkami"
  },
  {
    "word": "Pad Thai",
    "category": "Jedzenie i Kulinaria",
    "hint": "Smażony tajski makaron ryżowy z krewetkami i orzechami"
  },
  {
    "word": "Sajgonki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wietnamskie chrupiące ruloniki z papieru ryżowego"
  },
  {
    "word": "Curry",
    "category": "Jedzenie i Kulinaria",
    "hint": "Indyjskie danie w aromatycznym sosie z kurkumą"
  },
  {
    "word": "Hummus",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kremowa bliskowschodnia pasta z ciecierzycy i tahini"
  },
  {
    "word": "Falafel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupiące smażone kotleciki ze zmielonej ciecierzycy"
  },
  {
    "word": "Sałatka jarzynowa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Polski świąteczny klasyk z gotowanych warzyw i majonezu"
  },
  {
    "word": "Zapiekanka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Połówka bagietki z pieczarkami i stopionym serem z pieca"
  },
  {
    "word": "Chleb",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bochenek pieczywa na zakwasie z chrupiącą skórką"
  },
  {
    "word": "Bułka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Małe okrągłe pieczywo pszenne na kanapki"
  },
  {
    "word": "Rogal",
    "category": "Jedzenie i Kulinaria",
    "hint": "Pieczywo o kształcie półksiężyca"
  },
  {
    "word": "Bagietka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bardzo długa chrupiąca bułka rodem z Francji"
  },
  {
    "word": "Tost",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kromka chleba przypieczona w tosterze"
  },
  {
    "word": "Masło",
    "category": "Jedzenie i Kulinaria",
    "hint": "Nabiałowy tłuszcz ze śmietany do smarowania pieczywa"
  },
  {
    "word": "Ser żółty",
    "category": "Jedzenie i Kulinaria",
    "hint": "Dojrzewający ser z krowiego mleka z dziurami"
  },
  {
    "word": "Twaróg",
    "category": "Jedzenie i Kulinaria",
    "hint": "Biały grudkowaty ser z ukwaszonego mleka"
  },
  {
    "word": "Jajecznica",
    "category": "Jedzenie i Kulinaria",
    "hint": "Śniadanie ze ściętych na maśle jajek ze szczypiorkiem"
  },
  {
    "word": "Omlet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Puszyste roztrzepane jajka smażone na patelni"
  },
  {
    "word": "Parówki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Drobno mielone cienkie kiełbaski na gorąco"
  },
  {
    "word": "Szynka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wędlina wieprzowa z najlepszej części mięsa"
  },
  {
    "word": "Boczek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Paski wędzonego lub podsmażanego tłustego mięsa"
  },
  {
    "word": "Kiełbasa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tradycyjne pęto mięsa w naturalnym jelicie"
  },
  {
    "word": "Pasztet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gładka pieczona masa mięsna ze słoika lub foremki"
  },
  {
    "word": "Śledź",
    "category": "Jedzenie i Kulinaria",
    "hint": "Popularna ryba z beczki w oleju lub occie"
  },
  {
    "word": "Łosoś",
    "category": "Jedzenie i Kulinaria",
    "hint": "Szlachetna różowa ryba pieczona lub wędzona"
  },
  {
    "word": "Tuńczyk",
    "category": "Jedzenie i Kulinaria",
    "hint": "Duża drapieżna ryba w puszce do sałatek"
  },
  {
    "word": "Karp",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodkowodna ryba królująca na wigilijnym stole"
  },
  {
    "word": "Krewetki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Owoce morza podawane z masłem czosnkowym"
  },
  {
    "word": "Czekolada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodka tabliczka z miazgi kakaowej i cukru"
  },
  {
    "word": "Lody",
    "category": "Jedzenie i Kulinaria",
    "hint": "Mrożony krem śmietankowy w wafelku"
  },
  {
    "word": "Szarlotka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kruche ciasto wypełnione prażonymi jabłkami z cynamonem"
  },
  {
    "word": "Sernik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Pyszne ciasto upieczone ze zmielonego białego sera"
  },
  {
    "word": "Makowiec",
    "category": "Jedzenie i Kulinaria",
    "hint": "Drożdżowa rolada szczelnie wypełniona masą makową"
  },
  {
    "word": "Pączek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Smażone pulchne ciasto drożdżowe nadziane różą"
  },
  {
    "word": "Faworki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Cieniutkie chrupiące ciastka obsypane cukrem pudrem"
  },
  {
    "word": "Gofr",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciepły prostokątny wafel z bitą śmietaną i owocami"
  },
  {
    "word": "Tiramisu",
    "category": "Jedzenie i Kulinaria",
    "hint": "Deser z biszkoptów nasączonych kawą i serka mascarpone"
  },
  {
    "word": "Beza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Lekkie i chrupiące ciastko z ubitych białek i cukru"
  },
  {
    "word": "Muffin",
    "category": "Jedzenie i Kulinaria",
    "hint": "Pojedyncza puszysta babeczka z kawałkami czekolady"
  },
  {
    "word": "Piernik",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciemne korzenne ciastko pachnące miodem i goździkami"
  },
  {
    "word": "Karmel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Złocisty roztopiony i przypalony cukier"
  },
  {
    "word": "Lizak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kolorowy twardy cukierek na plastikowym patyczku"
  },
  {
    "word": "Żelki",
    "category": "Jedzenie i Kulinaria",
    "hint": "Miękkie elastyczne słodycze z żelatyny owocowej"
  },
  {
    "word": "Chałwa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tłusty słodki blok ze sprasowanych ziaren sezamu"
  },
  {
    "word": "Kisiel",
    "category": "Jedzenie i Kulinaria",
    "hint": "Owocowy lepki deser gotowany z mąki ziemniaczanej"
  },
  {
    "word": "Budyń",
    "category": "Jedzenie i Kulinaria",
    "hint": "Aksamitny gęsty krem mleczny waniliowy"
  },
  {
    "word": "Galaretka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Przezroczysty drżący deser owocowy na zimno"
  },
  {
    "word": "Truskawka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodki czerwony owoc z zieloną szypułką"
  },
  {
    "word": "Malina",
    "category": "Jedzenie i Kulinaria",
    "hint": "Drobny leśny czerwony owoc pełen witamin"
  },
  {
    "word": "Borówka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Mała ciemnoniebieska kulka z krzaczka w lesie"
  },
  {
    "word": "Jabłko",
    "category": "Jedzenie i Kulinaria",
    "hint": "Najpopularniejszy polski owoc rosnący w sadach"
  },
  {
    "word": "Gruszka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodki owoc o kształcie dzwonka z miękkim miąższem"
  },
  {
    "word": "Banan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Tropikalny podłużny owoc w żółtej skórce"
  },
  {
    "word": "Pomarańcza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Okrągły soczysty owoc cytrusowy pełen witaminy C"
  },
  {
    "word": "Cytryna",
    "category": "Jedzenie i Kulinaria",
    "hint": "Mocno kwaśny żółty cytrus wyciskany do herbaty"
  },
  {
    "word": "Mandarynka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Niewielki słodki cytrus łatwy do obierania rękami"
  },
  {
    "word": "Arbuz",
    "category": "Jedzenie i Kulinaria",
    "hint": "Potężny pasiasty owoc z orzeźwiającym czerwonym miąższem"
  },
  {
    "word": "Melon",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodki pachnący owoc dyniowaty o żółtym środku"
  },
  {
    "word": "Winogrono",
    "category": "Jedzenie i Kulinaria",
    "hint": "Drobne kuliste owoce zebrane w gęste kiście"
  },
  {
    "word": "Ananas",
    "category": "Jedzenie i Kulinaria",
    "hint": "Egzotyczny owoc z kolczastą skórą i koroną liści"
  },
  {
    "word": "Mango",
    "category": "Jedzenie i Kulinaria",
    "hint": "Aromatyczny owoc tropikalny o pomarańczowym miąższu"
  },
  {
    "word": "Brzoskwinia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Aksamitny owoc z meszkiem i dużą pomarszczoną pestką"
  },
  {
    "word": "Morela",
    "category": "Jedzenie i Kulinaria",
    "hint": "Mały pomarańczowy owoc o delikatnym smaku"
  },
  {
    "word": "Śliwka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Fioletowy owoc idealny na powidła i ciasta"
  },
  {
    "word": "Czereśnia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Soczyste słodkie owoce rosnące parami na gałązkach"
  },
  {
    "word": "Kiwi",
    "category": "Jedzenie i Kulinaria",
    "hint": "Włochaty zielony owoc z drobnymi czarnymi pestkami"
  },
  {
    "word": "Granat",
    "category": "Jedzenie i Kulinaria",
    "hint": "Twardy owoc skrywający setki rubinowych ziarenek"
  },
  {
    "word": "Awokado",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zielony owoc o maślanym miąższu do pasty guacamole"
  },
  {
    "word": "Pomidor",
    "category": "Jedzenie i Kulinaria",
    "hint": "Czerwony owoc warzywny na kanapkę i do zup"
  },
  {
    "word": "Ogórek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Podłużne zielone orzeźwiające warzywo gruntowe"
  },
  {
    "word": "Marchewka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupiący pomarańczowy korzeń lubiany przez zające"
  },
  {
    "word": "Ziemniak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Podstawowe polskie warzywo obiadowe z mundurek"
  },
  {
    "word": "Cebula",
    "category": "Jedzenie i Kulinaria",
    "hint": "Warzywo o wielu warstwach szczypiące w oczy przy krojeniu"
  },
  {
    "word": "Czosnek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Główka pełna ostrych aromatycznych ząbków"
  },
  {
    "word": "Papryka",
    "category": "Jedzenie i Kulinaria",
    "hint": "Chrupiące warzywo w kolorze czerwonym, żółtym lub zielonym"
  },
  {
    "word": "Kukurydza",
    "category": "Jedzenie i Kulinaria",
    "hint": "Złocista kolba pełna słodkich ziaren"
  },
  {
    "word": "Dynia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Wielkie pomarańczowe warzywo na zupę krem"
  },
  {
    "word": "Brokuł",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zielone warzywo przypominające małe drzewko"
  },
  {
    "word": "Kalafior",
    "category": "Jedzenie i Kulinaria",
    "hint": "Jasna gęsta główka gotowana z bułką tartą"
  },
  {
    "word": "Cukinia",
    "category": "Jedzenie i Kulinaria",
    "hint": "Podłużne warzywo z rodziny dyniowatych z miękką skórką"
  },
  {
    "word": "Bakłażan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Błyszczące ciemnofioletowe warzywo śródziemnomorskie"
  },
  {
    "word": "Szpinak",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ciemnozielone liście bogate w żelazo"
  },
  {
    "word": "Kawa",
    "category": "Jedzenie i Kulinaria",
    "hint": "Czarny gorący napój z mielonych ziaren na pobudzenie"
  },
  {
    "word": "Herbata",
    "category": "Jedzenie i Kulinaria",
    "hint": "Napar z suszonych liści pita w kubku z cytryną"
  },
  {
    "word": "Gorąca czekolada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gęsty słodki rozgrzewający napój kakaowy"
  },
  {
    "word": "Sok pomarańczowy",
    "category": "Jedzenie i Kulinaria",
    "hint": "Napój wyciśnięty ze świeżych cytrusów"
  },
  {
    "word": "Lemoniada",
    "category": "Jedzenie i Kulinaria",
    "hint": "Letni chłodny napój z wody, cytryn, miodu i mięty"
  },
  {
    "word": "Kompot",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodki napar z gotowanych owoców z babcinego garnka"
  },
  {
    "word": "Mleko",
    "category": "Jedzenie i Kulinaria",
    "hint": "Biały płyn od krowy do płatków śniadaniowych"
  },
  {
    "word": "Koktajl",
    "category": "Jedzenie i Kulinaria",
    "hint": "Zblendowany napój z owoców, mleka lub jogurtu"
  },
  {
    "word": "Kakao",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodki napój dla dzieci z brązowego proszku"
  },
  {
    "word": "Musztarda",
    "category": "Jedzenie i Kulinaria",
    "hint": "Ostry sos ze zmielonych ziaren gorczycy"
  },
  {
    "word": "Ketchup",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gęsty czerwony sos z przetartych pomidorów z octem"
  },
  {
    "word": "Majonez",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kremowy gęsty sos z żółtek jaj i oleju"
  },
  {
    "word": "Chrzan",
    "category": "Jedzenie i Kulinaria",
    "hint": "Bardzo ostry tarty korzeń do wędlin i żurku"
  },
  {
    "word": "Ocet",
    "category": "Jedzenie i Kulinaria",
    "hint": "Kwaśny płyn stosowany do marynat i przetworów"
  },
  {
    "word": "Oliwa z oliwek",
    "category": "Jedzenie i Kulinaria",
    "hint": "Złocisty tłuszcz roślinny wyciskany z oliwek"
  },
  {
    "word": "Miód",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodki złocisty nektar produkowany przez pszczoły"
  },
  {
    "word": "Dżem",
    "category": "Jedzenie i Kulinaria",
    "hint": "Słodkie przetwory owocowe z kawałkami owoców do chleba"
  },
  {
    "word": "Powidła",
    "category": "Jedzenie i Kulinaria",
    "hint": "Gęsta ciemna masa z długo smażonych śliwek"
  },
  {
    "word": "Plaża",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Piaszczysty brzeg morza pełen muszelek"
  },
  {
    "word": "Pustynia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Bezkresne morze żółtego piasku i wydm"
  },
  {
    "word": "Góry",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wysokie skaliste szczyty wznoszące się pod chmury"
  },
  {
    "word": "Jaskinia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Mroczna grota wykuta w skale"
  },
  {
    "word": "Wyspa",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kawałek lądu otoczony ze wszystkich stron wodą"
  },
  {
    "word": "Dżungla",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Nieprzebyty gęsty tropikalny las deszczowy"
  },
  {
    "word": "Las",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Teren gęsto porośnięty wysokimi drzewami"
  },
  {
    "word": "Polana",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Otwarta zielona przestrzeń w środku lasu"
  },
  {
    "word": "Wulkan",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Góra ze stożkiem plująca rozżarzoną lawą"
  },
  {
    "word": "Wodospad",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Potężny strumień wody spadający z wysokiego urwiska"
  },
  {
    "word": "Jezioro",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Duży naturalny zbiornik wody słodkiej"
  },
  {
    "word": "Rzeka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Szeroki strumień wody płynący do morza"
  },
  {
    "word": "Lodowiec",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wieczna zmarzlina lodu spływająca powoli doliną"
  },
  {
    "word": "Kanion",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Głęboki wąwóz o stromych skalnych ścianach"
  },
  {
    "word": "Oaza",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Miejsce z palmami i wodą pośrodku pustyni"
  },
  {
    "word": "Bagno",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Teren podmokły, grząski i pełen mchów"
  },
  {
    "word": "Szpital",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Budynek gdzie lekarze ratują ludzkie życie"
  },
  {
    "word": "Szkoła",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Miejsce z klasami, ławkami i tablicą do nauki"
  },
  {
    "word": "Uniwersytet",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gmach uczelni wyższej z salami wykładowymi"
  },
  {
    "word": "Biblioteka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ciche miejsce pełne regałów z książkami"
  },
  {
    "word": "Muzeum",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Budynek chroniący zabytkowe dzieła sztuki i eksponaty"
  },
  {
    "word": "Teatr",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Miejsce odgrywania sztuk przed widownią na scenie"
  },
  {
    "word": "Kino",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ciemna sala z projektorem i rzędami foteli"
  },
  {
    "word": "Filharmonia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Sala koncertowa dla orkiestry symfonicznej"
  },
  {
    "word": "Opera",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Monumentalny teatr muzyczny z lożami"
  },
  {
    "word": "Cyrk",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wielki pasiasty namiot z areną pośrodku"
  },
  {
    "word": "Stadion",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wielka arena sportowa z trybunami i murawą"
  },
  {
    "word": "Basen",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kryty obiekt z torami do pływania i trampoliną"
  },
  {
    "word": "Siłownia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Klub fitness ze sztangami, hantlami i bieżniami"
  },
  {
    "word": "Lotnisko",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kompleks z terminalem i pasami startowymi dla samolotów"
  },
  {
    "word": "Dworzec kolejowy",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Stacja z peronami gdzie zatrzymują się pociągi"
  },
  {
    "word": "Port morski",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Miejsce przeładunku kontenerów i cumowania statków"
  },
  {
    "word": "Stacja benzynowa",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Punkt tankowania paliwa z dystrybutorami przy drodze"
  },
  {
    "word": "Hotel",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Budynek z pokojami na wynajem dla podróżnych"
  },
  {
    "word": "Restauracja",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Lokal gastronomiczny ze stolikami i obsługą kelnerską"
  },
  {
    "word": "Kawiarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Lokal serwujący małą czarną i świeże ciasta"
  },
  {
    "word": "Piekarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Lokalny sklep pachnący chrupiącym pieczywem"
  },
  {
    "word": "Apteka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Miejsce zakupu lekarstw i witamin z zielonym krzyżem"
  },
  {
    "word": "Bank",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gmach z kasami i pancernym skarbcem na pieniądze"
  },
  {
    "word": "Poczta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Placówka do wysyłania paczek i listów"
  },
  {
    "word": "Supermarket",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wielki sklep samoobsługowy z koszykami na kółkach"
  },
  {
    "word": "Centrum handlowe",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ogromny pasaż z dziesiątkami butików i sklepów"
  },
  {
    "word": "Targowisko",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Otwarte stragany ze świeżymi owocami i warzywami"
  },
  {
    "word": "Kościół",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Świątynia z wieżą zegarową i dzwonami"
  },
  {
    "word": "Katedra",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wielka zabytkowa świątynia gotycka z witrażami"
  },
  {
    "word": "Zamek",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Średniowieczna kamienna twierdza z basztami i fosą"
  },
  {
    "word": "Pałac",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wspaniała magnacka rezydencja z ogrodami francuskimi"
  },
  {
    "word": "Twierdza",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Mocno obwarowany punkt oporu wojskowego"
  },
  {
    "word": "Bunkier",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Żelbetowe podziemne schronienie bojowe"
  },
  {
    "word": "Latarnia morska",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wysoka wieża wysyłająca błyski światła na morze"
  },
  {
    "word": "Wiatrak",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zabytkowa budowla ze skrzydłami mieląca ziarno"
  },
  {
    "word": "Młyn wodny",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Budynek nad bystrym potokiem z obracającym się kołem"
  },
  {
    "word": "Remiza strażacka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Garaż na czerwone wozy strażackie z rurą zjazdową"
  },
  {
    "word": "Komisariat policji",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Posterunek z dyspozytornią i celami aresztu"
  },
  {
    "word": "Sąd",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gmach sprawiedliwości z salami rozpraw"
  },
  {
    "word": "Więzienie",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Strzeżony zakład karny z kratami w oknach"
  },
  {
    "word": "Ratusz",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Reprezentacyjny budynek władz miasta na rynku"
  },
  {
    "word": "Wieżowiec",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Strasznie wysoki drapacz chmur ze szkła i stali"
  },
  {
    "word": "Most",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Konstrukcja umożliwiająca przeprawę nad rzeką"
  },
  {
    "word": "Tunel",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Korytarz komunikacyjny wydrążony pod ziemią lub pod wodą"
  },
  {
    "word": "Tama",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Betonowa zapora powstrzymująca napór wód rzeki"
  },
  {
    "word": "Hangar",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wielka hala do postoju i naprawy samolotów"
  },
  {
    "word": "Szklarnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ciepły budynek ze szklanymi ścianami na pomidory"
  },
  {
    "word": "Obserwatorium",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kopuła na wzgórzu z teleskopem wycelowanym w gwiazdy"
  },
  {
    "word": "Planetarium",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kopuła wyświetlająca ruch konstelacji gwiezdnych"
  },
  {
    "word": "ZOO",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ogród zoologiczny z wybiegami dla dzikich zwierząt"
  },
  {
    "word": "Park rozrywki",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wesołe miasteczko z karuzelami i watą cukrową"
  },
  {
    "word": "Plac zabaw",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wygrodzone miejsce z huśtawkami i zjeżdżalnią"
  },
  {
    "word": "Cmentarz",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Miejsce wiecznego spoczynku z nagrobkami i alejkami"
  },
  {
    "word": "Kopalnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Podziemne korytarze gdzie górnicy fedrują węgiel"
  },
  {
    "word": "Huta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zakład z piecami do wytopu surówki i stali"
  },
  {
    "word": "Fabryka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Zakład przemysłowy z halami produkcyjnymi i kominami"
  },
  {
    "word": "Stacja kosmiczna",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Badawcza baza unosząca się w próżni na orbicie"
  },
  {
    "word": "Igloo",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Kopułowaty domek ze sprasowanych bloków śniegu"
  },
  {
    "word": "Wigwam",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Tradycyjne obozowisko ze skór rozpiętych na tyczkach"
  },
  {
    "word": "Jurta",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Okrągły namiot pasterski z wojłoku ze stepów Azji"
  },
  {
    "word": "Schronisko górskie",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Drewniana chata na szlaku dająca ciepłą herbatę i nocleg"
  },
  {
    "word": "Pralnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Punkt usługowy ze szpalerem pralek bębnowych"
  },
  {
    "word": "Salon fryzjerski",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Lokal ze stanowiskami, lustrami i suszarkami"
  },
  {
    "word": "Garaż",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pomieszczenie do parkowania i majsterkowania przy aucie"
  },
  {
    "word": "Piwnica",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Chłodne pomieszczenie pod domem na słoiki i wino"
  },
  {
    "word": "Strych",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Przestrzeń pod spadzistym dachem pełna starych kufrów"
  },
  {
    "word": "Balkon",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wisząca platforma z barierką przy oknie mieszkania"
  },
  {
    "word": "Taras",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Pozioma przestrzeń wypoczynkowa wyłożona kafelkami w ogrodzie"
  },
  {
    "word": "Altana",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Otwarta drewniana wiata ogrodowa do grillowania"
  },
  {
    "word": "Stajnia",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Budynek z boksami dla koni wyścielony słomą"
  },
  {
    "word": "Obora",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Gospodarczy budynek dla bydła mlecznego"
  },
  {
    "word": "Kurnik",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Drewniana chatka z grzędami i gniazdami dla drobiu"
  },
  {
    "word": "Pasieka",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Rząd kolorowych uli stojących na skraju łąki"
  },
  {
    "word": "Winnica",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Wzgórze gęsto obsadzone krzewami winogron"
  },
  {
    "word": "Molo",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Drewniany pomost spacerowy wychodzący w głąb morza"
  },
  {
    "word": "Port jachtowy",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Marina z pomostami i keją dla żaglówek"
  },
  {
    "word": "Amfiteatr",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Okrągła budowla z kamiennymi rzędami siedzeń na powietrzu"
  },
  {
    "word": "Fontanna",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Ozdobny wodotrysk tryskający wodą na miejskim placu"
  },
  {
    "word": "Pomnik",
    "category": "Miejsca, Budynki i Architektura",
    "hint": "Rzeźba z brązu lub kamienia upamiętniająca bohatera"
  },
  {
    "word": "Zegarek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Czasomierz noszony na nadgarstku z paskiem"
  },
  {
    "word": "Portfel",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kieszonkowy organizer na banknoty, monety i dowód"
  },
  {
    "word": "Parasol",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Składana czasza chroniąca przed deszczem"
  },
  {
    "word": "Okulary",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dwie soczewki w oprawkach korygujące wzrok"
  },
  {
    "word": "Plecak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Worek ze sztywnym tyłem i szelkami na ramiona"
  },
  {
    "word": "Klucz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Wyprofilowany kawałek metalu pasujący do zamka"
  },
  {
    "word": "Kłódka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Przenośne zamknięcie ze stalowym pałąkiem"
  },
  {
    "word": "Nożyczki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dwa skrzyżowane ostrza do wycinania"
  },
  {
    "word": "Latarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Podręczne źródło światła z diodą LED"
  },
  {
    "word": "Świeczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Walec z wosku z bawełnianym knotem dający płomień"
  },
  {
    "word": "Zapałki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pudełko z siarkowymi patyczkami do krzesania ognia"
  },
  {
    "word": "Zapalniczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kieszonkowy gadżet na gaz z kółkiem krzesiwowym"
  },
  {
    "word": "Lustro",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Srebrzona tafla szkła ukazująca nasze odbicie"
  },
  {
    "word": "Szczoteczka do zębów",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Przybór higieniczny z włosiem do mycia zębów"
  },
  {
    "word": "Pasta do zębów",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Tubka z miętową pastą pieniącą się w ustach"
  },
  {
    "word": "Mydło",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kostka pieniąca się pod bieżącą wodą"
  },
  {
    "word": "Szampon",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pachnący płyn w butelce do mycia skóry głowy"
  },
  {
    "word": "Ręcznik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Chłonny frotowy materiał do suszenia ciała po kąpieli"
  },
  {
    "word": "Grzebień",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Płaski przybór z ząbkami do układania fryzury"
  },
  {
    "word": "Suszarka do włosów",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Elektryczna dmuchawa ciepłego strumienia powietrza"
  },
  {
    "word": "Maszynka do golenia",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostrze na rączce usuwające zarost z twarzy"
  },
  {
    "word": "Żelazko",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ciężki przyrząd z gorącą stopą wygładzający zagniecenia"
  },
  {
    "word": "Deska do prasowania",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Składany wąski stół pokryty materiałem"
  },
  {
    "word": "Odkurzacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Urządzenie z rurą wciągające paprochy z dywanów"
  },
  {
    "word": "Mop",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kij ze sznurkową końcówką do mycia kafelków na mokro"
  },
  {
    "word": "Miotła",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trzonek ze szczeciną do zamiatania podłogi"
  },
  {
    "word": "Kosz na śmieci",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pojemnik z klapą na zużyte odpadki"
  },
  {
    "word": "Młotek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Narzędzie ze stalowym obuchem do wbijania gwoździ"
  },
  {
    "word": "Śrubokręt",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trzonek z płaską lub krzyżakową końcówką do śrub"
  },
  {
    "word": "Klucz francuski",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Nastawne ciężkie narzędzie dla hydraulika"
  },
  {
    "word": "Kombinerki",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szczypce z ząbkowanymi szczękami do gięcia drutu"
  },
  {
    "word": "Piła ręczna",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Brzeszczot ze stalowymi zębami do cięcia drewna"
  },
  {
    "word": "Wiertarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szybkoobrotowe narzędzie robiące dziury w murze"
  },
  {
    "word": "Miarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Elastyczna taśma z podziałką milimetrową zwijana do kasetki"
  },
  {
    "word": "Poziomica",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Listwa ze szklaną ampułką do sprawdzania poziomu ścian"
  },
  {
    "word": "Taśma klejąca",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Rolka przezroczystego lepkiego paska foliowego"
  },
  {
    "word": "Klej",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Klej w sztyfcie lub tubce trwale łączący papier"
  },
  {
    "word": "Gwoździe",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostre stalowe trzpienie wbijane w deski młotkiem"
  },
  {
    "word": "Śruba",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Metalowy łącznik ze spiralnym gwintem"
  },
  {
    "word": "Drabina",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dwa pionowe słupki połączone poziomymi szczeblami"
  },
  {
    "word": "Taczka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Głębokie koryto z jednym kołem i dwoma rączkami"
  },
  {
    "word": "Łopata",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szeroka stalowa szufla na trzonku do kopania"
  },
  {
    "word": "Grabie",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Poprzeczka z metalowymi zębami do zagrabiania siana"
  },
  {
    "word": "Konewka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Plastikowe naczynie z rączką i sitkiem do kwiatów"
  },
  {
    "word": "Sekator",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Mocne krótkie nożyce ogrodnicze do gałązek"
  },
  {
    "word": "Kosiarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Maszyna na czterech kołach do ścinania trawnika"
  },
  {
    "word": "Wąż ogrodowy",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Długa gumowa rura tryskająca wodą po podłączeniu do kranu"
  },
  {
    "word": "Garnek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Głębokie naczynie emaliowane z pokrywką do zup"
  },
  {
    "word": "Patelnia",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Okrągłe płaskie naczynie z teflonem do smażenia jaj"
  },
  {
    "word": "Czajnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Naczynie gwiżdżące gdy woda osiągnie wrzenie"
  },
  {
    "word": "Nóż kuchenny",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ostre stalowe narzędzie do szatkowania cebuli"
  },
  {
    "word": "Widelec",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Metalowy sztuciec do nabijania kęsów jedzenia"
  },
  {
    "word": "Łyżka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Głęboki zaokrąglony sztuciec do jedzenia zupy"
  },
  {
    "word": "Talerz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Płaskie ceramiczne naczynie podawane do obiadu"
  },
  {
    "word": "Miska",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Głęboka misa do wyrabiania sałatek lub ciasta"
  },
  {
    "word": "Kubek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ceramiczne naczynie z dużym uchem na herbatę"
  },
  {
    "word": "Szklanka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Proste naczynie z przezroczystego szkła na wodę"
  },
  {
    "word": "Kieliszek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Delikatne szkło na wysokiej nóżce do wina"
  },
  {
    "word": "Korkociąg",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Narzędzie ze świdrem wyciągające korek z butelki"
  },
  {
    "word": "Otwieracz do puszek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Narzędzie z kółkiem tnącym metalowe wieczka"
  },
  {
    "word": "Tarka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Metalowy ostrosłup z tarkami do marchwi i sera"
  },
  {
    "word": "Durszlak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Dziurkowane naczynie do odlewania ugotowanego makaronu"
  },
  {
    "word": "Wałek do ciasta",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Gładki drewniany walec z rączkami do ciasta na pierogi"
  },
  {
    "word": "Deska do krojenia",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Bambusowa podkładka chroniąca blat przed nożem"
  },
  {
    "word": "Termos",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Srebrna butelka próżniowa trzymająca ciepło kawy"
  },
  {
    "word": "Bidon",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Plastikowa butelka sportowa z ustnikiem rowerowym"
  },
  {
    "word": "Poduszka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Jasiek wypełniony puchem podkładany pod głowę"
  },
  {
    "word": "Kołdra",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ciepłe puchowe okrycie w poszewce na noc"
  },
  {
    "word": "Koc",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Gruba wełniana płachta do otulenia na kanapie"
  },
  {
    "word": "Prześcieradło",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Tkanina z gumką zabezpieczająca materac łóżka"
  },
  {
    "word": "Wieszak",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trójkątny przedmiot z haczykiem na marynarki"
  },
  {
    "word": "Długopis",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Plastikowa obudowa z kulkowym wkładem tuszowym"
  },
  {
    "word": "Ołówek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Drewniany patyczek z ciemnym grafitem do szkicowania"
  },
  {
    "word": "Gumka do ścierania",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kawałek miękkiego kauczuku ścierający ołówek"
  },
  {
    "word": "Temperówka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Małe ostrze w obudowie strugające czubek ołówka"
  },
  {
    "word": "Linijka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Sztywny prosty przyrząd kreślarski z podziałką cm"
  },
  {
    "word": "Zeszyt",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kilkadziesiąt zszytych kartek w kratkę do zadań"
  },
  {
    "word": "Notatnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Kieszonkowy notesik na szybkie złote myśli"
  },
  {
    "word": "Koperta",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Papierowa kieszonka ze skrzydełkiem zaklejana śliną"
  },
  {
    "word": "Znaczek pocztowy",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Ząbkowany miniaturowy obrazek przyklejany na list"
  },
  {
    "word": "Spinacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zgięty drucik utrzymujący plik kartek razem"
  },
  {
    "word": "Zszywacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Biurowy aparat wbijający miniaturowe klamerki"
  },
  {
    "word": "Dziurkacz",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Narzędzie wycinające dwa równe kółka w kartkach"
  },
  {
    "word": "Segregator",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Twardy skoroszyt z metalowymi pierścieniami"
  },
  {
    "word": "Globus",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Pomniejszony kulisty model Ziemi na podstawce"
  },
  {
    "word": "Mapa",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Papierowy arkusz z siatką dróg i granic państw"
  },
  {
    "word": "Lupa",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Szkło powiększające w mosiężnej oprawie"
  },
  {
    "word": "Pędzel",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Włosie osadzone w skuwce do nakładania farb"
  },
  {
    "word": "Paleta malarska",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Drewniana deska z otworem na kciuk do farb"
  },
  {
    "word": "Sztaluga",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Trójnożny drewniany stojak na podobrazie malarskie"
  },
  {
    "word": "Termometr",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Rurka ze słupkiem rtęci lub ekranik mierzący temperaturę"
  },
  {
    "word": "Kłębka wełny",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Zwinięta puszysta kula nici do robienia na drutach"
  },
  {
    "word": "Igła z nitką",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Cienki stalowy szpikulec z uszkiem do cerowania"
  },
  {
    "word": "Naparstek",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Metalowy kapturek chroniący opuszek palca krawca"
  },
  {
    "word": "Szpilka",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Cienki drucik z kolorową plastikową główką"
  },
  {
    "word": "Waga kuchenna",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Elektroniczna płytka ważąca mąkę do grama"
  },
  {
    "word": "Minutnik",
    "category": "Przedmioty Codzienne i Narzędzia",
    "hint": "Mechaniczne jajko tykające i dzwoniące po kwadransie"
  },
  {
    "word": "Detektyw",
    "category": "Zawody, Role i Postacie",
    "hint": "Bada odciski palców i rozwiązuje tajemnice w prochowcu"
  },
  {
    "word": "Policjant",
    "category": "Zawody, Role i Postacie",
    "hint": "Patroluje ulice, nosi pistolet, kajdanki i odznakę"
  },
  {
    "word": "Strażak",
    "category": "Zawody, Role i Postacie",
    "hint": "Wjeżdża drabiną na piętro gasząc płomienie prądem wody"
  },
  {
    "word": "Lekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Bada bicie serca stetoskopem i wypisuje recepty"
  },
  {
    "word": "Pielęgniarka",
    "category": "Zawody, Role i Postacie",
    "hint": "Zmienia opatrunki i pobiera krew do badań"
  },
  {
    "word": "Ratownik medyczny",
    "category": "Zawody, Role i Postacie",
    "hint": "Pędzi na sygnale karetką i reanimuje poszkodowanych"
  },
  {
    "word": "Chirurg",
    "category": "Zawody, Role i Postacie",
    "hint": "Operuje narządy skalpelem na sterylnej sali operacyjnej"
  },
  {
    "word": "Dentysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Usuwa próchnicę wiertełkiem na rozkładanym fotelu"
  },
  {
    "word": "Weterynarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Bada i leczy chore psy, koty oraz gryzonie"
  },
  {
    "word": "Nauczyciel",
    "category": "Zawody, Role i Postacie",
    "hint": "Tłumaczy lekcję przy zielonej tablicy kredą"
  },
  {
    "word": "Profesor",
    "category": "Zawody, Role i Postacie",
    "hint": "Prowadzi zaawansowane wykłady i badania na uniwersytecie"
  },
  {
    "word": "Naukowiec",
    "category": "Zawody, Role i Postacie",
    "hint": "Przeprowadza doświadczenia w probówkach w laboratorium"
  },
  {
    "word": "Astronauta",
    "category": "Zawody, Role i Postacie",
    "hint": "Podróżuje statkiem kosmicznym i spaceruje w skafandrze"
  },
  {
    "word": "Pilot",
    "category": "Zawody, Role i Postacie",
    "hint": "Siedzi za wolantem pasażerskiego Boeinga na wysokości przelotowej"
  },
  {
    "word": "Stewardesa",
    "category": "Zawody, Role i Postacie",
    "hint": "Wita pasażerów uśmiechem i serwuje posiłki na pokładzie"
  },
  {
    "word": "Kapitan statku",
    "category": "Zawody, Role i Postacie",
    "hint": "Wydaje rozkazy przy kole sterowym na mostku kapitańskim"
  },
  {
    "word": "Marynarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Szoruje pokład i cumuje liny na falującym morzu"
  },
  {
    "word": "Kierowca autobusu",
    "category": "Zawody, Role i Postacie",
    "hint": "Zatrzymuje się na przystankach i sprzedaje bilety"
  },
  {
    "word": "Maszynista",
    "category": "Zawody, Role i Postacie",
    "hint": "Prowadzi wielotonowy pociąg towarowy lub pasażerski"
  },
  {
    "word": "Taksówkarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Przewozi klientów po mieście z włączoną nawigacją"
  },
  {
    "word": "Kurier",
    "category": "Zawody, Role i Postacie",
    "hint": "Dźwiga kartonowe paczki pod drzwi mieszkań"
  },
  {
    "word": "Listonosz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wrzuca koperty i gazety do skrzynek na listy"
  },
  {
    "word": "Kucharz",
    "category": "Zawody, Role i Postacie",
    "hint": "Rządzi w restauracyjnej kuchni przyprawiając potrawy"
  },
  {
    "word": "Kelner",
    "category": "Zawody, Role i Postacie",
    "hint": "Roznosi talerze na tacach i przyjmuje zamówienia od gości"
  },
  {
    "word": "Barman",
    "category": "Zawody, Role i Postacie",
    "hint": "Żongluje butelkami i przygotowuje wymyślne koktajle"
  },
  {
    "word": "Piekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wstaje o trzeciej rano by upiec chrupiący chleb"
  },
  {
    "word": "Cukiernik",
    "category": "Zawody, Role i Postacie",
    "hint": "Modeluje marcepan i dekoruje weselne torty"
  },
  {
    "word": "Rzeźnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Dzieli tusze mięsne tasakiem za ladą mięsną"
  },
  {
    "word": "Rolnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Zbiera plony kombajnem i dba o zasiewy na polu"
  },
  {
    "word": "Ogrodnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Przycina żywopłoty sekatorem i sadzi cebulki kwiatów"
  },
  {
    "word": "Leśnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Opiekuje się leśną zwierzyną i dogląda drzewostanu"
  },
  {
    "word": "Rybak",
    "category": "Zawody, Role i Postacie",
    "hint": "Wyciąga sieci pełne ryb na kutrze podczas sztormu"
  },
  {
    "word": "Górnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Zjeżdża windą kilometr pod ziemię fedrować węgiel"
  },
  {
    "word": "Budowlaniec",
    "category": "Zawody, Role i Postacie",
    "hint": "Muruje pustaki i wylewa beton w kasku ochronnym"
  },
  {
    "word": "Architekt",
    "category": "Zawody, Role i Postacie",
    "hint": "Projektuje bryły budynków i rysuje plany architektoniczne"
  },
  {
    "word": "Hydraulik",
    "category": "Zawody, Role i Postacie",
    "hint": "Wymienia uszczelki i udrażnia zapchany odpływ zlewu"
  },
  {
    "word": "Elektryk",
    "category": "Zawody, Role i Postacie",
    "hint": "Montuje gniazdka i łączy przewody pod napięciem"
  },
  {
    "word": "Stolarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wystruguje z desek dębowe stoły i szafy"
  },
  {
    "word": "Kowal",
    "category": "Zawody, Role i Postacie",
    "hint": "Uderza ciężkim młotem w rozgrzaną stal na kowadle"
  },
  {
    "word": "Ślusarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Dorabia zapasowe klucze i rozbraja zacięte zamki"
  },
  {
    "word": "Mechanik",
    "category": "Zawody, Role i Postacie",
    "hint": "Wymienia klocki hamulcowe i olej pod maską auta"
  },
  {
    "word": "Malarz pokojowy",
    "category": "Zawody, Role i Postacie",
    "hint": "Zabezpiecza podłogi folią i pokrywa ściany farbą"
  },
  {
    "word": "Szklarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Docina wielkie tafle szkła diamentowym nożem"
  },
  {
    "word": "Krawiec",
    "category": "Zawody, Role i Postacie",
    "hint": "Zdejmuje miarę centymetrem i szyje garnitury na miarę"
  },
  {
    "word": "Szewc",
    "category": "Zawody, Role i Postacie",
    "hint": "Przybija nowe fleki i klei podeszwy butów"
  },
  {
    "word": "Zegarmistrz",
    "category": "Zawody, Role i Postacie",
    "hint": "Pęsetą wymienia mikroskopijne trybiki w zegarku"
  },
  {
    "word": "Jubiler",
    "category": "Zawody, Role i Postacie",
    "hint": "Wyszlifowuje szlachetne kamienie i graweruje obrączki"
  },
  {
    "word": "Pisarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Spędza wieczory pisząc wielotomową sagę na maszynie"
  },
  {
    "word": "Poeta",
    "category": "Zawody, Role i Postacie",
    "hint": "Tworzy rymy pełne emocji i czyta swoje wiersze"
  },
  {
    "word": "Dziennikarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Docieka prawdy i zadaje niewygodne pytania z dyktafonem"
  },
  {
    "word": "Fotograf",
    "category": "Zawody, Role i Postacie",
    "hint": "Ustawia oświetlenie w studio i naciska spust migawki"
  },
  {
    "word": "Kamerzysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Śledzi akcję z ciężką kamerą na ramieniu"
  },
  {
    "word": "Reżyser",
    "category": "Zawody, Role i Postacie",
    "hint": "Krzyczy 'Kamera, akcja, cięcie!' na planie filmowym"
  },
  {
    "word": "Aktor",
    "category": "Zawody, Role i Postacie",
    "hint": "Wciela się w tragiczne i komediowe role teatralne"
  },
  {
    "word": "Muzyk",
    "category": "Zawody, Role i Postacie",
    "hint": "Tworzy ścieżki dźwiękowe i ćwiczy gamy na instrumencie"
  },
  {
    "word": "Piosenkarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wokalista śpiewający przeboje do mikrofonu na trasie"
  },
  {
    "word": "Dyrygent",
    "category": "Zawody, Role i Postacie",
    "hint": "Wznosi batutę skupiając wzrok stu muzyków orkiestry"
  },
  {
    "word": "Tancerz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wykonuje skomplikowane piruety w baletkach na deskach sceny"
  },
  {
    "word": "Rzeźbiarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wydobywa kształt postaci dłutem z bloku piaskowca"
  },
  {
    "word": "Prezydent",
    "category": "Zawody, Role i Postacie",
    "hint": "Wygłasza orędzie do narodu i podpisuje ustawy"
  },
  {
    "word": "Sędzia",
    "category": "Zawody, Role i Postacie",
    "hint": "Wysłuchuje zeznań świadków i uderza drewnianym młotkiem"
  },
  {
    "word": "Adwokat",
    "category": "Zawody, Role i Postacie",
    "hint": "Powołuje się na kodeks karny broniąc swojego klienta"
  },
  {
    "word": "Żołnierz",
    "category": "Zawody, Role i Postacie",
    "hint": "Wykonuje rozkazy dowódcy w kamuflażu na poligonie"
  },
  {
    "word": "Generał",
    "category": "Zawody, Role i Postacie",
    "hint": "Wielogwiazdkowy oficer planujący manewry na mapie"
  },
  {
    "word": "Szpieg",
    "category": "Zawody, Role i Postacie",
    "hint": "Tajemniczy agent przekradający się po mikrofilmy"
  },
  {
    "word": "Kominiarz",
    "category": "Zawody, Role i Postacie",
    "hint": "W czarnym uniformie przynosi szczęście czyszcząc sadze"
  },
  {
    "word": "Bibliotekarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Przybija pieczątki na kartach książek w czytelni"
  },
  {
    "word": "Przewodnik",
    "category": "Zawody, Role i Postacie",
    "hint": "Wskazuje parasolką zabytek opowiadając legendy miejskie"
  },
  {
    "word": "Tłumacz",
    "category": "Zawody, Role i Postacie",
    "hint": "Słucha w słuchawkach i przekłada wypowiedź w kabinie"
  },
  {
    "word": "Księgowy",
    "category": "Zawody, Role i Postacie",
    "hint": "Weryfikuje faktury i bilansuje rachunki firmy w Excelu"
  },
  {
    "word": "Bankier",
    "category": "Zawody, Role i Postacie",
    "hint": "Ocenia zdolność kredytową i zarządza portfelem aktywów"
  },
  {
    "word": "Programista",
    "category": "Zawody, Role i Postacie",
    "hint": "Rozwiązuje błędy w kodzie popijając kolejną kawę"
  },
  {
    "word": "Archeolog",
    "category": "Zawody, Role i Postacie",
    "hint": "Oczyszcza pędzelkiem starożytne naczynia gliniane"
  },
  {
    "word": "Historyk",
    "category": "Zawody, Role i Postacie",
    "hint": "Przegląda pożółkłe kroniki w archiwum narodowym"
  },
  {
    "word": "Astronom",
    "category": "Zawody, Role i Postacie",
    "hint": "Kieruje zwierciadło teleskopu na odległe mgławice"
  },
  {
    "word": "Klaun",
    "category": "Zawody, Role i Postacie",
    "hint": "W wielkich butach i peruce przewraca się na cyrkowej arenie"
  },
  {
    "word": "Iluzjonista",
    "category": "Zawody, Role i Postacie",
    "hint": "Przecina skrzynię z asystentką na oczach osłupiałych widzów"
  },
  {
    "word": "Trener",
    "category": "Zawody, Role i Postacie",
    "hint": "Krzyczy ze strefy bocznej i rysuje taktykę na tablicy"
  },
  {
    "word": "Sędzia sportowy",
    "category": "Zawody, Role i Postacie",
    "hint": "Biega za zawodnikami dmuchając w gwizdek"
  },
  {
    "word": "Ochroniarz",
    "category": "Zawody, Role i Postacie",
    "hint": "Sprawdza identyfikatory i obserwuje monitory monitoringu"
  },
  {
    "word": "Ratownik wodny",
    "category": "Zawody, Role i Postacie",
    "hint": "Siedzi na wysokiej wieżyczce z lornetką nad plażą"
  },
  {
    "word": "Nurek",
    "category": "Zawody, Role i Postacie",
    "hint": "Pływa wśród raf koralowych z aparatem oddechowym"
  },
  {
    "word": "Alpinista",
    "category": "Zawody, Role i Postacie",
    "hint": "Czeka na okno pogodowe w obozie pod szczytem K2"
  },
  {
    "word": "Florysta",
    "category": "Zawody, Role i Postacie",
    "hint": "Dobiera wstążki i układa artystyczne wiązanki ślubne"
  },
  {
    "word": "Smartfon",
    "category": "Technologia i Gadżety",
    "hint": "Dotykowy aparat telefoniczny z dostępem do aplikacji"
  },
  {
    "word": "Laptop",
    "category": "Technologia i Gadżety",
    "hint": "Składany komputer osobisty z wbudowaną klawiaturą"
  },
  {
    "word": "Tablet",
    "category": "Technologia i Gadżety",
    "hint": "Dotykowa tafla ekranu do przeglądania internetu"
  },
  {
    "word": "Telewizor",
    "category": "Technologia i Gadżety",
    "hint": "Płaski ekran w salonie do seansów kinowych"
  },
  {
    "word": "Radio",
    "category": "Technologia i Gadżety",
    "hint": "Odbiornik fal UKF nadający audycje i muzykę"
  },
  {
    "word": "Słuchawki",
    "category": "Technologia i Gadżety",
    "hint": "Nauszniki wygłuszające hałas i grające ulubione utwory"
  },
  {
    "word": "Głośnik Bluetooth",
    "category": "Technologia i Gadżety",
    "hint": "Bezprzewodowa tuba grająca muzykę na pikniku"
  },
  {
    "word": "Mikrofon",
    "category": "Technologia i Gadżety",
    "hint": "Konwerter fal dźwiękowych na sygnał audio"
  },
  {
    "word": "Kamera wideo",
    "category": "Technologia i Gadżety",
    "hint": "Sprzęt rejestrujący ruchome ujęcia w 4K"
  },
  {
    "word": "Aparat fotograficzny",
    "category": "Technologia i Gadżety",
    "hint": "Klasyczna lustrzanka z wymiennymi obiektywami"
  },
  {
    "word": "Dron",
    "category": "Technologia i Gadżety",
    "hint": "Zdalnie sterowany statek powietrzny nagrywający z góry"
  },
  {
    "word": "Robot",
    "category": "Technologia i Gadżety",
    "hint": "Maszyna wyposażona w siłowniki i algorytmy"
  },
  {
    "word": "Satelita",
    "category": "Technologia i Gadżety",
    "hint": "Urządzenie telekomunikacyjne krążące w próżni kosmicznej"
  },
  {
    "word": "Konsola do gier",
    "category": "Technologia i Gadżety",
    "hint": "Pudełko podłączane kablem HDMI do telewizora"
  },
  {
    "word": "Pad do gier",
    "category": "Technologia i Gadżety",
    "hint": "Kontroler z analogowymi gałkami i wibracjami"
  },
  {
    "word": "Klawiatura",
    "category": "Technologia i Gadżety",
    "hint": "Zestaw stu mechanicznych klawiszy z podświetleniem RGB"
  },
  {
    "word": "Mysz komputerowa",
    "category": "Technologia i Gadżety",
    "hint": "Optyczny gryzoń ślizgający się po podkładce"
  },
  {
    "word": "Monitor",
    "category": "Technologia i Gadżety",
    "hint": "Matryca IPS wyświetlająca ostry obraz z komputera"
  },
  {
    "word": "Drukarka",
    "category": "Technologia i Gadżety",
    "hint": "Głowica nanosząca tusz lub proszek laserowy na papier"
  },
  {
    "word": "Skaner",
    "category": "Technologia i Gadżety",
    "hint": "Ruchoma listwa świetlna digitalizująca dokumenty"
  },
  {
    "word": "Ruter Wi-Fi",
    "category": "Technologia i Gadżety",
    "hint": "Skrzyneczka z antenkami rozsyłająca domowy internet"
  },
  {
    "word": "Pendrive",
    "category": "Technologia i Gadżety",
    "hint": "Kieszonkowa pamięć flash wtykana w port USB"
  },
  {
    "word": "Dysk twardy",
    "category": "Technologia i Gadżety",
    "hint": "Talerz magnetyczny lub kość SSD przechowująca pliki"
  },
  {
    "word": "Karta pamięci",
    "category": "Technologia i Gadżety",
    "hint": "Miniaturowa płytka pamięci wkładana do aparatu"
  },
  {
    "word": "Powerbank",
    "category": "Technologia i Gadżety",
    "hint": "Ciężka dodatkowa bateria ratująca rozładowany telefon"
  },
  {
    "word": "Ładowarka",
    "category": "Technologia i Gadżety",
    "hint": "Kostka do gniazdka z kablem zasilającym"
  },
  {
    "word": "Bateria",
    "category": "Technologia i Gadżety",
    "hint": "Ogniwo chemiczne w rozmiarze AA lub AAA"
  },
  {
    "word": "Pralka",
    "category": "Technologia i Gadżety",
    "hint": "Bęben piorący z programem wirowania na 1200 obrotów"
  },
  {
    "word": "Zmywarka",
    "category": "Technologia i Gadżety",
    "hint": "Kuchenna maszyna myjąca garnki gorącą wodą z tabletką"
  },
  {
    "word": "Lodówka",
    "category": "Technologia i Gadżety",
    "hint": "Agregat chłodzący wnętrze szafy na nabiał i mięso"
  },
  {
    "word": "Kuchenka mikrofalowa",
    "category": "Technologia i Gadżety",
    "hint": "Podgrzewa wczorajszą zupę promieniowaniem w minutę"
  },
  {
    "word": "Piekarnik",
    "category": "Technologia i Gadżety",
    "hint": "Gorąca komora z termoobiegiem na ciasta i pieczenie"
  },
  {
    "word": "Toster",
    "category": "Technologia i Gadżety",
    "hint": "Wyrzuca w górę dwie chrupiące kromki tostowe"
  },
  {
    "word": "Opiekacz",
    "category": "Technologia i Gadżety",
    "hint": "Zgniata chleb tostowy w chrupiące trójkąty"
  },
  {
    "word": "Blender",
    "category": "Technologia i Gadżety",
    "hint": "Wirujące stalowe ostrza kruszące lód i owoce na smoothie"
  },
  {
    "word": "Mikser",
    "category": "Technologia i Gadżety",
    "hint": "Kuchenne mieszadła ubijające pianę ze śmietany"
  },
  {
    "word": "Ekspres do kawy",
    "category": "Technologia i Gadżety",
    "hint": "Mieli ziarna i tłoczy wodę pod ciśnieniem 15 barów"
  },
  {
    "word": "Klimatyzator",
    "category": "Technologia i Gadżety",
    "hint": "Urządzenie schładzające pokój w trakcie upalnego lata"
  },
  {
    "word": "Wentylator",
    "category": "Technologia i Gadżety",
    "hint": "Śmigło elektryczne wprawiające powietrze w ruch"
  },
  {
    "word": "Smartwatch",
    "category": "Technologia i Gadżety",
    "hint": "Cyfrowy zegarek mierzący puls i wyświetlający powiadomienia"
  },
  {
    "word": "Opaska fitness",
    "category": "Technologia i Gadżety",
    "hint": "Dyskretna gumowa bransoletka licząca dzienne kroki"
  },
  {
    "word": "Czytnik e-booków",
    "category": "Technologia i Gadżety",
    "hint": "Ekran z bezpiecznym dla oczu elektronicznym tuszem"
  },
  {
    "word": "Gogle VR",
    "category": "Technologia i Gadżety",
    "hint": "Zestaw nagłowny przenoszący gracza do wirtualnego świata"
  },
  {
    "word": "Projektor",
    "category": "Technologia i Gadżety",
    "hint": "Lampa rzucająca obraz o przekątnej stu cali na ścianę"
  },
  {
    "word": "Gramofon",
    "category": "Technologia i Gadżety",
    "hint": "Ramię z igłą odczytujące rowki na czarnej płycie winylowej"
  },
  {
    "word": "Kalkulator",
    "category": "Technologia i Gadżety",
    "hint": "Urządzenie z klawiszami cyfr i małym wyświetlaczem LCD"
  },
  {
    "word": "Drukarka 3D",
    "category": "Technologia i Gadżety",
    "hint": "Rozgrzana dysza nakładająca warstwy stopionego plastiku"
  },
  {
    "word": "Światłowód",
    "category": "Technologia i Gadżety",
    "hint": "Szklany przewód przesyłający pakiety danych z prędkością światła"
  },
  {
    "word": "Lampa błyskowa",
    "category": "Technologia i Gadżety",
    "hint": "Gwałtowny rozbłysk światła doświetlający kadr zdjęcia"
  },
  {
    "word": "Walkie-talkie",
    "category": "Technologia i Gadżety",
    "hint": "Krótkofalówka do bezpośredniej łączności radiowej"
  },
  {
    "word": "Rower",
    "category": "Pojazdy i Maszyny",
    "hint": "Dwa koła, łańcuch, pedały i kierownica"
  },
  {
    "word": "Hulajnoga",
    "category": "Pojazdy i Maszyny",
    "hint": "Podest z kierownicą odpychany stopą"
  },
  {
    "word": "Hulajnoga elektryczna",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd z baterią mknący po ścieżce rowerowej"
  },
  {
    "word": "Deskorolka",
    "category": "Pojazdy i Maszyny",
    "hint": "Klonowa deska na trakach do jazdy po skateparku"
  },
  {
    "word": "Rolki",
    "category": "Pojazdy i Maszyny",
    "hint": "Buty z kółkami w jednej linii do jazdy rekreacyjnej"
  },
  {
    "word": "Motocykl",
    "category": "Pojazdy i Maszyny",
    "hint": "Rycząca dwukołowa maszyna z mocnym silnikiem"
  },
  {
    "word": "Skuter",
    "category": "Pojazdy i Maszyny",
    "hint": "Lekki jednoślad miejski ze schowkiem pod siedzeniem"
  },
  {
    "word": "Quad",
    "category": "Pojazdy i Maszyny",
    "hint": "Czterokołowy pojazd z grubymi oponami w błoto"
  },
  {
    "word": "Samochód osobowy",
    "category": "Pojazdy i Maszyny",
    "hint": "Czterokołowy pojazd rodzinny ze spalinowym lub elektrycznym silnikiem"
  },
  {
    "word": "Kabriolet",
    "category": "Pojazdy i Maszyny",
    "hint": "Eleganckie auto z otwieranym dachem na słoneczne dni"
  },
  {
    "word": "Limuzyna",
    "category": "Pojazdy i Maszyny",
    "hint": "Niezwykle długi luksusowy pojazd dla gwiazd"
  },
  {
    "word": "Taksówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Samochód miejski z kogutem Taxi na dachu"
  },
  {
    "word": "Karetka",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd ratunkowy pędzący z niebieskimi kogutami"
  },
  {
    "word": "Wóz strażacki",
    "category": "Pojazdy i Maszyny",
    "hint": "Ciężki czerwony samochód bojowy z armatką wodną"
  },
  {
    "word": "Radiowóz",
    "category": "Pojazdy i Maszyny",
    "hint": "Służbowe oznakowane auto policji"
  },
  {
    "word": "Śmieciarka",
    "category": "Pojazdy i Maszyny",
    "hint": "Ciężarówka z prasą hydrauliczną opróżniająca kontenery"
  },
  {
    "word": "Autobus miejski",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd przegubowy wożący tłumy w godzinach szczytu"
  },
  {
    "word": "Autokar",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd turystyczny z klimatyzacją na dalekie trasy"
  },
  {
    "word": "Tramwaj",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd szynowy zasilany z trakcji elektrycznej na ulicach"
  },
  {
    "word": "Pociąg",
    "category": "Pojazdy i Maszyny",
    "hint": "Długi skład wagonów ciągniętych po torach przez lokomotywę"
  },
  {
    "word": "Metro",
    "category": "Pojazdy i Maszyny",
    "hint": "Kolej podziemna omijająca wszelkie korki wielkiego miasta"
  },
  {
    "word": "Lokomotywa",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd trakcyjny ciągnący wagony towarowe"
  },
  {
    "word": "Ciężarówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd z wielką naczepą wożący towary po autostradzie"
  },
  {
    "word": "Traktor",
    "category": "Pojazdy i Maszyny",
    "hint": "Ciągnik rolniczy z bieżnikowanymi olbrzymimi kołami"
  },
  {
    "word": "Kombajn",
    "category": "Pojazdy i Maszyny",
    "hint": "Kombajn zbożowy zbierający ziarno z hederem"
  },
  {
    "word": "Koparka",
    "category": "Pojazdy i Maszyny",
    "hint": "Maszyna z obrotową kabiną i wielką łyżką do wykopów"
  },
  {
    "word": "Spychacz",
    "category": "Pojazdy i Maszyny",
    "hint": "Gąsienicowa maszyna z lemieszem równająca teren"
  },
  {
    "word": "Dźwig",
    "category": "Pojazdy i Maszyny",
    "hint": "Wysoki żuraw budowlany wznoszący prefabrykaty"
  },
  {
    "word": "Walec",
    "category": "Pojazdy i Maszyny",
    "hint": "Ciężki bęben ubijający świeżą nawierzchnię asfaltu"
  },
  {
    "word": "Wózek widłowy",
    "category": "Pojazdy i Maszyny",
    "hint": "Magazynowy pojazd z podnoszonymi widłami do palet"
  },
  {
    "word": "Kajak",
    "category": "Pojazdy i Maszyny",
    "hint": "Wąska łódka z podwójnym wiosłem na spływy rzeczne"
  },
  {
    "word": "Ponton",
    "category": "Pojazdy i Maszyny",
    "hint": "Pompowana komora gumowa z wiosłami lub silniczkiem"
  },
  {
    "word": "Żaglówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Kadłub z białym trójkątnym żaglem łapiącym wiatr"
  },
  {
    "word": "Jacht",
    "category": "Pojazdy i Maszyny",
    "hint": "Ekskluzywna łódź motorowa lub żaglowa z salonem"
  },
  {
    "word": "Statek wycieczkowy",
    "category": "Pojazdy i Maszyny",
    "hint": "Pływający gigant z teatrem, basenami i kajutami"
  },
  {
    "word": "Prom",
    "category": "Pojazdy i Maszyny",
    "hint": "Jednostka transportująca auta z jednego brzegu na drugi"
  },
  {
    "word": "Barka",
    "category": "Pojazdy i Maszyny",
    "hint": "Płaskodenny statek towarowy holowany po kanałach"
  },
  {
    "word": "Holownik",
    "category": "Pojazdy i Maszyny",
    "hint": "Mocarz z potężnym silnikiem naprowadzający tankowce"
  },
  {
    "word": "Kuter rybacki",
    "category": "Pojazdy i Maszyny",
    "hint": "Niewielki statek z wyciągarką sieci na Bałtyku"
  },
  {
    "word": "Motorówka",
    "category": "Pojazdy i Maszyny",
    "hint": "Ślizgacz z rykiem silnika przecinający taflę jeziora"
  },
  {
    "word": "Skuter wodny",
    "category": "Pojazdy i Maszyny",
    "hint": "Szybki jednoosobowy bolid pływający po falach"
  },
  {
    "word": "Lodołamacz",
    "category": "Pojazdy i Maszyny",
    "hint": "Okręt o wzmocnionym dziobie kruszący arktyczną krę"
  },
  {
    "word": "Okręt podwodny",
    "category": "Pojazdy i Maszyny",
    "hint": "Stalowe cygaro schodzące setki metrów pod wodę"
  },
  {
    "word": "Samolot pasażerski",
    "category": "Pojazdy i Maszyny",
    "hint": "Podniebny liniowiec przewożący trzystu podróżnych"
  },
  {
    "word": "Awionetka",
    "category": "Pojazdy i Maszyny",
    "hint": "Lekki jednosilnikowy samolot turystyczny"
  },
  {
    "word": "Szybowiec",
    "category": "Pojazdy i Maszyny",
    "hint": "Statek powietrzny bez silnika krążący w kominach termicznych"
  },
  {
    "word": "Helikopter",
    "category": "Pojazdy i Maszyny",
    "hint": "Pojazd latający ze śmigłem nośnym na dachu"
  },
  {
    "word": "Balon na gorące powietrze",
    "category": "Pojazdy i Maszyny",
    "hint": "Kolorowa powłoka z koszem unosząca się dzięki palnikowi"
  },
  {
    "word": "Sterowiec",
    "category": "Pojazdy i Maszyny",
    "hint": "Potężny statek powietrzny lżejszy od powietrza"
  },
  {
    "word": "Rakieta kosmiczna",
    "category": "Pojazdy i Maszyny",
    "hint": "Wielki pocisk z silnikami na paliwo ciekłe lecący w kosmos"
  },
  {
    "word": "Łazik marsjański",
    "category": "Pojazdy i Maszyny",
    "hint": "Zrobotyzowany sześciokołowy pojazd badający czerwoną planetę"
  },
  {
    "word": "Tęcza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wielobarwny pas światła załamany na kropelkach deszczu"
  },
  {
    "word": "Błyskawica",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Świetlisty zygzak prądu przecinający burzowe niebo"
  },
  {
    "word": "Grzmot",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Dźwięk fali uderzeniowej rozdzierający ciszę po piorunie"
  },
  {
    "word": "Burza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Nawałnica z ulewnym deszczem i wyładowaniami atmosferycznymi"
  },
  {
    "word": "Tornado",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Lej powietrzny o potwornej sile zasysający wszystko do góry"
  },
  {
    "word": "Huragan",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Tropikalny cyklon niosący ulewne deszcze i wicher"
  },
  {
    "word": "Zorza polarna",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Świetlne pasma tańczące w ziemskiej magnetosferze"
  },
  {
    "word": "Trzęsienie ziemi",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Podziemne wstrząsy płyt tektonicznych"
  },
  {
    "word": "Tsunami",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Gigantyczna fala pędząca przez ocean ku wybrzeżu"
  },
  {
    "word": "Lawina",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Tysiące ton śniegu osuwające się ze stoku górskiego"
  },
  {
    "word": "Mgła",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kondensacja pary wodnej utrudniająca widzenie kierowcom"
  },
  {
    "word": "Rosa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Poranne kropelki wody błyszczące na źdźbłach trawy"
  },
  {
    "word": "Szron",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Delikatny biały osad lodu na gałęziach o poranku"
  },
  {
    "word": "Grad",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Lodowe kulki bombardujące dachy podczas burzy"
  },
  {
    "word": "Śnieżyca",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Biała zawieja ograniczająca widoczność do zera"
  },
  {
    "word": "Ulewa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Ściana deszczu zalewająca studzienki kanalizacyjne"
  },
  {
    "word": "Sopel lodu",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Zwisający z okapu zaostrzony lodowy stożek"
  },
  {
    "word": "Słońce",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Centralna gwiazda naszego układu dająca życie"
  },
  {
    "word": "Księżyc",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Srebrny glob widoczny w nowiu lub pełni na nocnym niebie"
  },
  {
    "word": "Gwiazda",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Płonąca kula plazmy oddalona o lata świetlne"
  },
  {
    "word": "Kometa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kula lodu i skał ciągnąca za sobą świecący warkocz"
  },
  {
    "word": "Meteor",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kawałek kosmicznego gruzu spalający się w atmosferze"
  },
  {
    "word": "Asteroida",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wielki głaz kosmiczny orbitujący wokół słońca"
  },
  {
    "word": "Czarna dziura",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kosmiczna osobliwość pochłaniająca nawet światło"
  },
  {
    "word": "Droga Mleczna",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Spiralna galaktyka w której znajduje się Ziemia"
  },
  {
    "word": "Zaćmienie słońca",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Niezwykłe zjawisko gdy księżyc rzuca cień na Ziemię"
  },
  {
    "word": "Gejzer",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wytrysk wrzątku i pary wodnej prosto z wnętrza ziemi"
  },
  {
    "word": "Rafa koralowa",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Tętniący życiem podwodny ekosystem zbudowany z wapnia"
  },
  {
    "word": "Szczyt górski",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Najwyższy skalisty wierzchołek pasma górskiego"
  },
  {
    "word": "Wąwóz",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Głębokie wcięcie erozyjne o stromych ścianach"
  },
  {
    "word": "Półwysep",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Część lądu głęboko otoczona przez wody morskie"
  },
  {
    "word": "Zatoka",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Spokojne wody wcinające się w linię brzegową lądu"
  },
  {
    "word": "Dąb",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Długowieczne drzewo liściaste z żołędziami"
  },
  {
    "word": "Sosna",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Pachnące żywicą drzewo iglaste rosnące w borach"
  },
  {
    "word": "Świerk",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Iglaste drzewo o stożkowatej koronie na choinkę"
  },
  {
    "word": "Brzoza",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Drzewo o charakterystycznej białej korze"
  },
  {
    "word": "Wierzba płacząca",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Drzewo o wiotkich zwisających gałęziach nad stawem"
  },
  {
    "word": "Kaktus",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Pustynna roślina gromadząca wodę w mięsistej łodydze"
  },
  {
    "word": "Lotos",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kwiat czystości wyrastający z mętnej wody"
  },
  {
    "word": "Borowik",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Król grzybów leśnych o brązowym kapeluszu i grubym trzonie"
  },
  {
    "word": "Muchomor",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Trujący grzyb z czerwonym kapeluszem w białe plamki"
  },
  {
    "word": "Róża",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Kwiat o pięknych wonnych płatkach i ostrych kolcach"
  },
  {
    "word": "Tulipan",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wiosenny kwiat o kielichowatym kształcie płatków"
  },
  {
    "word": "Słonecznik",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Wielki żółty kwiat podążający za tarczą słońca"
  },
  {
    "word": "Stokrotka",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Drobny kwiatek łąkowy o żółtym środku i białych płatkach"
  },
  {
    "word": "Mlecz",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Żółty kwiat wiosenny przekształcający się w dmuchawiec"
  },
  {
    "word": "Bambus",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Szybko rosnąca zdrewniała trawa tropikalna"
  },
  {
    "word": "Baobab",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Grube afrykańskie drzewo o potężnym pniu"
  },
  {
    "word": "Sekwoja",
    "category": "Przyroda, Geografia i Kosmos",
    "hint": "Najwyższe iglaste drzewo świata rosnące w Kalifornii"
  },
  {
    "word": "Piłka nożna",
    "category": "Sport, Hobby i Gry",
    "hint": "Mecz jedenastu na jedenastu z kopaniem do bramki"
  },
  {
    "word": "Koszykówka",
    "category": "Sport, Hobby i Gry",
    "hint": "Drybling i celne rzuty do zawieszonego kosza z siatką"
  },
  {
    "word": "Siatkówka",
    "category": "Sport, Hobby i Gry",
    "hint": "Trzy odbicia i dynamiczny atak ponad siatką"
  },
  {
    "word": "Piłka ręczna",
    "category": "Sport, Hobby i Gry",
    "hint": "Dynamiczne rzuty piłką do bramki z wyskoku"
  },
  {
    "word": "Tenis ziemny",
    "category": "Sport, Hobby i Gry",
    "hint": "Serwis rakietą na korcie trawiastym lub ceglastym"
  },
  {
    "word": "Tenis stołowy",
    "category": "Sport, Hobby i Gry",
    "hint": "Szybka gra rakietkami z okładziną kauczukową"
  },
  {
    "word": "Badminton",
    "category": "Sport, Hobby i Gry",
    "hint": "Wymiana lekkiej piórkowej lotki nad wysoką siatką"
  },
  {
    "word": "Hokej na lodzie",
    "category": "Sport, Hobby i Gry",
    "hint": "Mecz na łyżwach z krążkiem i twardymi bandami"
  },
  {
    "word": "Łyżwiarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Piruety i skoki na lodzie w rytm melodii"
  },
  {
    "word": "Narciarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Szusowanie po ośnieżonym stoku z kijkami"
  },
  {
    "word": "Snowboard",
    "category": "Sport, Hobby i Gry",
    "hint": "Jazda bokiem na jednej szerokiej desce śnieżnej"
  },
  {
    "word": "Bieganie",
    "category": "Sport, Hobby i Gry",
    "hint": "Pokonywanie kilometrów w butach z amortyzacją"
  },
  {
    "word": "Maraton",
    "category": "Sport, Hobby i Gry",
    "hint": "Królewski dystans biegowy wynoszący 42 kilometry"
  },
  {
    "word": "Pływanie",
    "category": "Sport, Hobby i Gry",
    "hint": "Przepływanie basenu kraulem lub stylem grzbietowym"
  },
  {
    "word": "Szachy",
    "category": "Sport, Hobby i Gry",
    "hint": "Strategiczna bitwa z matem na 64 polach szachownicy"
  },
  {
    "word": "Warcaby",
    "category": "Sport, Hobby i Gry",
    "hint": "Zbieranie pionków przeciwnika po przekątnych"
  },
  {
    "word": "Poker",
    "category": "Sport, Hobby i Gry",
    "hint": "Karciana licytacja z pokerową twarzą i karetą"
  },
  {
    "word": "Kostka do gry",
    "category": "Sport, Hobby i Gry",
    "hint": "Sześcian z oczkami rzucany na planszę"
  },
  {
    "word": "Kostka Rubika",
    "category": "Sport, Hobby i Gry",
    "hint": "Układanie jednakowych kolorów na ściankach sześcianu"
  },
  {
    "word": "Puzzle",
    "category": "Sport, Hobby i Gry",
    "hint": "Dopasowywanie wykrojników w jeden duży obraz"
  },
  {
    "word": "Lego",
    "category": "Sport, Hobby i Gry",
    "hint": "Łączenie klocków z wypustkami w budowle"
  },
  {
    "word": "Bilard",
    "category": "Sport, Hobby i Gry",
    "hint": "Celne uderzenie białą bilą w kolorowe kule do łuz"
  },
  {
    "word": "Kręgle",
    "category": "Sport, Hobby i Gry",
    "hint": "Kula tocząca się po torze by strącić wszystkie pin"
  },
  {
    "word": "Rzutki",
    "category": "Sport, Hobby i Gry",
    "hint": "Rzucanie trzema lotkami w potrójną dwudziestkę na tarczy"
  },
  {
    "word": "Łucznictwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Naciąganie cięciwy łuku i celowanie w żółty środek"
  },
  {
    "word": "Szermierka",
    "category": "Sport, Hobby i Gry",
    "hint": "Błyskawiczne pchnięcia białą bronią na planszy"
  },
  {
    "word": "Boks",
    "category": "Sport, Hobby i Gry",
    "hint": "Pojedynek w ringu z nokautem w rękawicach bokserskich"
  },
  {
    "word": "Judo",
    "category": "Sport, Hobby i Gry",
    "hint": "Chwyty za judogi i rzuty przez plecy na tatami"
  },
  {
    "word": "Karate",
    "category": "Sport, Hobby i Gry",
    "hint": "Ciosy rękami i okrzyk kiai w tradycyjnym dojo"
  },
  {
    "word": "Wspinaczka",
    "category": "Sport, Hobby i Gry",
    "hint": "Szukanie chwytów i stopni na ściance wspinaczkowej"
  },
  {
    "word": "Skoki narciarskie",
    "category": "Sport, Hobby i Gry",
    "hint": "Lot z mamuciego progu zakończony telemarkiem"
  },
  {
    "word": "Kolarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Jazda w peletonie szosowym na aerodynamicznym rowerze"
  },
  {
    "word": "Wioślarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Zsynchronizowana praca wioseł osady na torze regatowym"
  },
  {
    "word": "Windsurfing",
    "category": "Sport, Hobby i Gry",
    "hint": "Utrzymywanie równowagi na desce z żaglem na falach"
  },
  {
    "word": "Kitesurfing",
    "category": "Sport, Hobby i Gry",
    "hint": "Skoki nad falami z latawcem przypiętym do trapezu"
  },
  {
    "word": "Spadochroniarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Swobodne spadanie z samolotu przed otwarciem czaszy"
  },
  {
    "word": "Wędkarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Zarzucanie przynęty i obserwacja spławika na jeziorze"
  },
  {
    "word": "Gitara",
    "category": "Sport, Hobby i Gry",
    "hint": "Pudło rezonansowe ze strunami do grania akordów"
  },
  {
    "word": "Pianino",
    "category": "Sport, Hobby i Gry",
    "hint": "Czarne i białe klawisze uderzające w młoteczki"
  },
  {
    "word": "Perkusja",
    "category": "Sport, Hobby i Gry",
    "hint": "Talerze, werbel i stopa wybijające rockowy rytm"
  },
  {
    "word": "Skrzypce",
    "category": "Sport, Hobby i Gry",
    "hint": "Pociąganie smyczkiem po czterech strunach przy uchu"
  },
  {
    "word": "Trąbka",
    "category": "Sport, Hobby i Gry",
    "hint": "Złoty instrument dęty blaszany z donośnym głosem"
  },
  {
    "word": "Saksofon",
    "category": "Sport, Hobby i Gry",
    "hint": "Jazzowy instrument z wygiętą czarą i ustnikiem"
  },
  {
    "word": "Harmonijka ustna",
    "category": "Sport, Hobby i Gry",
    "hint": "Wdmuchiwanie i wciąganie powietrza przez małe szczeliny"
  },
  {
    "word": "Flet",
    "category": "Sport, Hobby i Gry",
    "hint": "Drewniany lub metalowy instrument dęty o łagodnym brzmieniu"
  },
  {
    "word": "Akordeon",
    "category": "Sport, Hobby i Gry",
    "hint": "Rozciąganie miecha z guzikami basowymi i klawiaturą"
  },
  {
    "word": "Karaoke",
    "category": "Sport, Hobby i Gry",
    "hint": "Śpiewanie do mikrofonu ze skaczącą kulką po tekście"
  },
  {
    "word": "Origami",
    "category": "Sport, Hobby i Gry",
    "hint": "Precyzyjne zaginanie rogów papieru bez nożyczek"
  },
  {
    "word": "Garncarstwo",
    "category": "Sport, Hobby i Gry",
    "hint": "Toczenie wilgotnego dzbana z gliny na obracającym się kole"
  },
  {
    "word": "Szydełkowanie",
    "category": "Sport, Hobby i Gry",
    "hint": "Przeplatanie włóczki ząbkowanym haczykiem w serwetki"
  },
  {
    "word": "Koszula",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Eleganckie ubranie z kołnierzykiem, mankietami i guzikami"
  },
  {
    "word": "Krawat",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Jedwabny pasek wiązany w węzeł pod szyją do garnituru"
  },
  {
    "word": "Garnitur",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Dopasowana marynarka i spodnie w kant na oficjalne gale"
  },
  {
    "word": "Sukienka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Kobiecy strój z tkaniny na bal lub letni spacer"
  },
  {
    "word": "Spódnica",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Dół garderoby rozkloszowany lub ołówkowy"
  },
  {
    "word": "Jeansy",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Spodnie z grubego denimu z pięcioma kieszeniami"
  },
  {
    "word": "Sweter",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Ciepły wełniany splot chroniący przed mrozem"
  },
  {
    "word": "Bluza",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Bawełniane okrycie z kapturem i ściągaczami"
  },
  {
    "word": "Kurtka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Przeciwwiatrowe ocieplane okrycie z zamkiem błyskawicznym"
  },
  {
    "word": "Płaszcz",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Długie eleganckie okrycie z paskiem i klapami"
  },
  {
    "word": "Czapka z pomponem",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Dzianinowe nakrycie głowy na zimowe mrozy"
  },
  {
    "word": "Kapelusz",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Nakrycie głowy z rondem chroniące przed słońcem"
  },
  {
    "word": "Cylinder",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wysoki czarny kapelusz noszony przez arystokratów"
  },
  {
    "word": "Szalik",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Długi dziergany pas wełny grzejący szyję"
  },
  {
    "word": "Rękawiczki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Osłona dłoni z wydzielonymi pięcioma palcami"
  },
  {
    "word": "Skarpetki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Bawełniana bielizna zakładana bezpośrednio na stopę"
  },
  {
    "word": "Trampki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Sportowe buty z białym gumowym noskiem i sznurówkami"
  },
  {
    "word": "Szpilki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Damskie pantofle na cienkim kilkucentymetrowym obcasie"
  },
  {
    "word": "Kozaki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wysokie ocieplane obuwie zimowe ze skóry"
  },
  {
    "word": "Kalosze",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wodoodporne gumowe buty do chodzenia po kałużach"
  },
  {
    "word": "Sandały",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Lekkie buty z paskami odsłaniające stopę latem"
  },
  {
    "word": "Klapki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Wsuwane obuwie piankowe na plażę lub basen"
  },
  {
    "word": "Pasek do spodni",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Skórzany pasek ze stalową klamrą"
  },
  {
    "word": "Torebka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Damska kopertówka lub listonoszka na ramię"
  },
  {
    "word": "Walizka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Sztywny bagaż na kółkach z zamkiem szyfrowym"
  },
  {
    "word": "Pierścionek",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Złota obrączka z brylantem noszona na palcu"
  },
  {
    "word": "Naszyjnik",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Sznur pereł lub łańcuszek z zawieszką na dekolcie"
  },
  {
    "word": "Kolczyki",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Błyskotki wkręcane w przekłute uszy"
  },
  {
    "word": "Bransoletka",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Srebrna zawieszka owinięta wokół nadgarstka"
  },
  {
    "word": "Spinki do mankietów",
    "category": "Ubiór, Akcesoria i Biżuteria",
    "hint": "Ozdobne zapięcia rękawów męskiej koszuli"
  },
  {
    "word": "Łóżko",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Rama z materacem sprężynowym do regenerującego snu"
  },
  {
    "word": "Sofa",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Wygodny kanapowy mebel wypoczynkowy do salonu"
  },
  {
    "word": "Fotel",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Pojedynczy miękki mebel z oparciem pod ramiona"
  },
  {
    "word": "Stół",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Solidny drewniany blat na czterech nogach do posiłków"
  },
  {
    "word": "Krzesło",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Siedzisko z oparciem dosunięte do stołu"
  },
  {
    "word": "Szafa",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Wysoki mebel z drążkiem na wieszaki i lustrem"
  },
  {
    "word": "Komoda",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Skrzynia z szufladami na bieliznę i dokumenty"
  },
  {
    "word": "Regał na książki",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Półki zastawione tomami powieści i encyklopedii"
  },
  {
    "word": "Biurko",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Blat roboczy pod monitor z miejscem na klawiaturę"
  },
  {
    "word": "Wanna",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Biała emaliowana misa do długich kąpieli z pianą"
  },
  {
    "word": "Prysznic",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Przeszklona kabina z deszczownicą"
  },
  {
    "word": "Umywalka",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Ceramiczna misa z baterią w łazience"
  },
  {
    "word": "Zlew",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Komora ze stali nierdzewnej w blacie kuchennym"
  },
  {
    "word": "Dywan",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Miękkie puszyste runo wyciszające kroki na parkiecie"
  },
  {
    "word": "Firanka",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Ażurowa biała tkanina wisząca w świetle okna"
  },
  {
    "word": "Zasłona",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Gruby materiał zasłaniany wieczorem na karniszu"
  },
  {
    "word": "Żyrandol",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Kryształowa lampa rozpraszająca światło z sufitu"
  },
  {
    "word": "Lampa nocna",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Abażur stojący na szafce nocnej przy łóżku"
  },
  {
    "word": "Wazon",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Szklany flakon na świeży bukiet tulipanów"
  },
  {
    "word": "Ramka na zdjęcia",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Oprawka ze szkłem upamiętniająca chwile z wakacji"
  },
  {
    "word": "Zegar ścienny",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Tarcza z tykającymi wskazówkami wisząca na ścianie"
  },
  {
    "word": "Kominek",
    "category": "Wyposażenie Domu i Meble",
    "hint": "Domowe palenisko z szybą grzejące polanami drewna"
  },
  {
    "word": "Rycerz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zbrojny wojownik na koniu walczący z kopią w turnieju"
  },
  {
    "word": "Pirat",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Awanturnik pod czarną banderą poszukujący skrzyń złota"
  },
  {
    "word": "Wiking",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Wojownik z północy płynący drakkarem z toporem"
  },
  {
    "word": "Samuraj",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Japoński rycerz wierny kodeksowi buszido z kataną"
  },
  {
    "word": "Ninja",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zamaskowany skrytobójca z gwiazdkami shuriken"
  },
  {
    "word": "Kowboj",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Rewolwerowiec galopujący przez prerię w ostrogach"
  },
  {
    "word": "Król",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Władca w koronie panujący nad poddanymi ze złotego tronu"
  },
  {
    "word": "Królowa",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Monarchini nosząca diamentowy diadem na dworze"
  },
  {
    "word": "Książę",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Następca tronu walczący o rękę księżniczki"
  },
  {
    "word": "Księżniczka",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Córka królewska uwięziona w wysokiej wieży"
  },
  {
    "word": "Czarodziej",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Mędrzec z długą siwą brodą rzucający potężne czary"
  },
  {
    "word": "Czarownica",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Wiedźma z haczykowatym nosem warząca eliksir w kotle"
  },
  {
    "word": "Smok",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Skrzydlaty gad ziejący ogniem i strzegący komnaty ze złotem"
  },
  {
    "word": "Jednorożec",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Mistyczny biały koń ze spiralnym rogiem na czole"
  },
  {
    "word": "Pegaz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Mitologiczny skrzydlaty rumak ze starożytnej Grecji"
  },
  {
    "word": "Elf",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Istota o spiczastych uszach żyjąca w harmonii z lasem"
  },
  {
    "word": "Krasnolud",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Brodaty górnik z toporem wykuwający zbroje pod górą"
  },
  {
    "word": "Wampir",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Arystokrata nocy unikający światła słonecznego"
  },
  {
    "word": "Wilkołak",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Człowiek przeistaczający się w bestię w czasie pełni"
  },
  {
    "word": "Zombie",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Powstający z grobu nieumarły szukający pożywienia"
  },
  {
    "word": "Duch",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Tajemnicza zjawa przenikająca przez zamkowe mury"
  },
  {
    "word": "Mumia",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Egipski król owinięty bandażami w sarkofagu"
  },
  {
    "word": "Faraon",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Władca starożytnego Egiptu czczony niczym bóg"
  },
  {
    "word": "Piramida",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Kamienny cud świata wznoszący się pośród piasków Gizy"
  },
  {
    "word": "Sfinks",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Monolityczny posąg z ciałem lwa i głową człowieka"
  },
  {
    "word": "Skarb",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Okute żelazem pudło pełne dukatów i rubinów"
  },
  {
    "word": "Syrena",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Pół-kobieta pół-ryba czarująca marynarzy swym głosem"
  },
  {
    "word": "Kosmita",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Przybysz z odległej galaktyki w srebrnym kombinezonie"
  },
  {
    "word": "UFO",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Spodek z pulsującymi światłami zawieszony w bezruchu"
  },
  {
    "word": "Wehikuł czasu",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Zegarowa machina przenosząca pasażera do innych epok"
  },
  {
    "word": "Magiczna różdżka",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Cienka laseczka skupiająca zaklęcia maga"
  },
  {
    "word": "Lampa Alladyna",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Oliwna lampka z której po potarciu wylatuje dżin"
  },
  {
    "word": "Miecz",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Długie ostre ostrze ze stali z jelcem i głowicą"
  },
  {
    "word": "Tarcza",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Okrągły lub trójkątny puklerz parujący ciosy wroga"
  },
  {
    "word": "Katapulta",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Machina oblężnicza wyrzucająca płonące głazy w mury"
  },
  {
    "word": "Armata",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Lufa odlana z brązu miotająca ołowiane kule"
  },
  {
    "word": "Święty Graal",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Mityczny kielich dający wieczną młodość"
  },
  {
    "word": "Złote runo",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Mityczna skóra barana poszukiwana przez Argonautów"
  },
  {
    "word": "Kraken",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Gigantyczny potwór głębinowy wciągający statki pod wodę"
  },
  {
    "word": "Cerber",
    "category": "Mitologia, Baśnie i Historia",
    "hint": "Trójgłowy pies strzegący bram krainy cieni"
  },
  {
    "word": "Serce",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Bijący mięsień pompujący krew w żyłach"
  },
  {
    "word": "Mózg",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Centrum dowodzenia myślami i pamięcią w czaszce"
  },
  {
    "word": "Oko",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Narząd wzroku z tęczówką i źrenicą"
  },
  {
    "word": "Ucho",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Narząd słuchu wyłapujący dźwięki i fale"
  },
  {
    "word": "Nos",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Narząd węchu pozwalający czuć zapachy"
  },
  {
    "word": "Usta",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Wargi i zęby służące do uśmiechu i mowy"
  },
  {
    "word": "Dłoń",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Pięć palców z kciukiem zdolnych do chwytania"
  },
  {
    "word": "Stopa",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Część kończyny opierająca się o podłoże przy chodzie"
  },
  {
    "word": "Uśmiech",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Radosny wyraz twarzy ukazujący zęby"
  },
  {
    "word": "Łza",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Kropla słonej wody wypływająca z oka ze wzruszenia"
  },
  {
    "word": "Odcisk palca",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Niepowtarzalny układ linii papilarnych na opuszce"
  },
  {
    "word": "Cień",
    "category": "Ciało, Zmysły i Uczucia",
    "hint": "Ciemna sylwetka rzucana na ziemię pod wpływem światła"
  },
  {
    "word": "Tablica",
    "category": "Szkoła i Edukacja",
    "hint": "Płyta do pisania białą lub kolorową kredą"
  },
  {
    "word": "Kreda",
    "category": "Szkoła i Edukacja",
    "hint": "Biały lub kolorowy sztyft wapienny do tablicy"
  },
  {
    "word": "Gąbka",
    "category": "Szkoła i Edukacja",
    "hint": "Porowaty materiał do ścierania zapisków z tablicy"
  },
  {
    "word": "Piórnik",
    "category": "Szkoła i Edukacja",
    "hint": "Etui na długopisy, gumkę i linijkę"
  },
  {
    "word": "Dziennik",
    "category": "Szkoła i Edukacja",
    "hint": "Księga ocen i obecności uczniów"
  },
  {
    "word": "Dzwonek szkolny",
    "category": "Szkoła i Edukacja",
    "hint": "Sygnalizuje początek i koniec lekcji"
  },
  {
    "word": "Plecak szkolny",
    "category": "Szkoła i Edukacja",
    "hint": "Tornister noszony na plecach z książkami"
  },
  {
    "word": "Cyrkiel",
    "category": "Szkoła i Edukacja",
    "hint": "Przyrząd z igłą do rysowania idealnych okręgów"
  },
  {
    "word": "Kątomierz",
    "category": "Szkoła i Edukacja",
    "hint": "Półkolista linijka do mierzenia kątów w stopniach"
  },
  {
    "word": "Ekierka",
    "category": "Szkoła i Edukacja",
    "hint": "Trójkątna linijka z kątem prostym"
  },
  {
    "word": "Świadectwo",
    "category": "Szkoła i Edukacja",
    "hint": "Urzędowy dokument z ocenami na koniec roku"
  },
  {
    "word": "Dyplom",
    "category": "Szkoła i Edukacja",
    "hint": "Ozdobny arkusz potwierdzający ukończenie szkoły lub kursu"
  },
  {
    "word": "Teczka",
    "category": "Szkoła i Edukacja",
    "hint": "Sztywna oprawa na luźne dokumenty i rysunki"
  },
  {
    "word": "Flamaster",
    "category": "Szkoła i Edukacja",
    "hint": "Mazak z nasyconym barwnikiem do kolorowania"
  },
  {
    "word": "Korektor",
    "category": "Szkoła i Edukacja",
    "hint": "Biały płyn lub taśma zamalowująca błędy w zeszycie"
  },
  {
    "word": "Klej biurowy",
    "category": "Szkoła i Edukacja",
    "hint": "Sztyft do sklejania wycinanek i papieru"
  },
  {
    "word": "Plastelina",
    "category": "Szkoła i Edukacja",
    "hint": "Miękka masa plastyczna do lepienia figurek"
  },
  {
    "word": "Modelina",
    "category": "Szkoła i Edukacja",
    "hint": "Masa do lepienia utwardzana w piekarniku"
  },
  {
    "word": "Blok rysunkowy",
    "category": "Szkoła i Edukacja",
    "hint": "Zestaw czystych białych kartek formatu A4"
  },
  {
    "word": "Farby plakatowe",
    "category": "Szkoła i Edukacja",
    "hint": "Gęste kryjące farby w małych słoiczkach"
  },
  {
    "word": "Kredki ołówkowe",
    "category": "Szkoła i Edukacja",
    "hint": "Kolorowe grafity w drewnianej oprawce"
  },
  {
    "word": "Kredki świecowe",
    "category": "Szkoła i Edukacja",
    "hint": "Tłuste sztyfty woskowe do rysowania"
  },
  {
    "word": "Pióro wieczne",
    "category": "Szkoła i Edukacja",
    "hint": "Elegancki przybór do pisania ze stalówką i atramentem"
  },
  {
    "word": "Atrament",
    "category": "Szkoła i Edukacja",
    "hint": "Ciemnoniebieski barwnik w kałamarzu lub naboju"
  },
  {
    "word": "Atlas geograficzny",
    "category": "Szkoła i Edukacja",
    "hint": "Księga pełna map fizycznych i politycznych"
  },
  {
    "word": "Słownik",
    "category": "Szkoła i Edukacja",
    "hint": "Gruba księga z alfabetycznym spisem słów i definicji"
  },
  {
    "word": "Encyklopedia",
    "category": "Szkoła i Edukacja",
    "hint": "Wielotomowe dzieło zawierające wiedzę o świecie"
  },
  {
    "word": "Puzon",
    "category": "Muzyka i Dźwięk",
    "hint": "Dęty instrument blaszany z przesuwanym suwakiem"
  },
  {
    "word": "Tuba",
    "category": "Muzyka i Dźwięk",
    "hint": "Największy i najniżej brzmiący instrument dęty"
  },
  {
    "word": "Waltornia",
    "category": "Muzyka i Dźwięk",
    "hint": "Zwinięty spiralnie róg w orkiestrze symfonicznej"
  },
  {
    "word": "Klarnet",
    "category": "Muzyka i Dźwięk",
    "hint": "Jednostroikowy drewniany instrument dęty w czarnym kolorze"
  },
  {
    "word": "Oboj",
    "category": "Muzyka i Dźwięk",
    "hint": "Dwustroikowy instrument o przejmującym nosowym brzmieniu"
  },
  {
    "word": "Fagot",
    "category": "Muzyka i Dźwięk",
    "hint": "Długi drewniany instrument dęty o niskim dźwięku"
  },
  {
    "word": "Harfa",
    "category": "Muzyka i Dźwięk",
    "hint": "Wielki instrument trójkątny z dziesiątkami strun szarpanych palcami"
  },
  {
    "word": "Wiolonczela",
    "category": "Muzyka i Dźwięk",
    "hint": "Duży instrument smyczkowy oparty nóżką o podłogę"
  },
  {
    "word": "Kontrabas",
    "category": "Muzyka i Dźwięk",
    "hint": "Największy ze skrzypcowej rodziny grany na stojąco"
  },
  {
    "word": "Ksylofon",
    "category": "Muzyka i Dźwięk",
    "hint": "Instrument perkusyjny z drewnianymi sztabkami uderzanymi pałeczkami"
  },
  {
    "word": "Trójkąt",
    "category": "Muzyka i Dźwięk",
    "hint": "Stalowy pręt wygięty w trójkąt wydający czysty dźwięk"
  },
  {
    "word": "Tamburyn",
    "category": "Muzyka i Dźwięk",
    "hint": "Obręcz z napiętą membraną i dzwoniącymi blaszkami"
  },
  {
    "word": "Kastaniety",
    "category": "Muzyka i Dźwięk",
    "hint": "Drewniane muszelki wybijające rytm flamenco w dłoni"
  },
  {
    "word": "Kongi",
    "category": "Muzyka i Dźwięk",
    "hint": "Wysokie bębny afrokubańskie uderzane dłońmi"
  },
  {
    "word": "Syntezator",
    "category": "Muzyka i Dźwięk",
    "hint": "Elektroniczny instrument klawiszowy generujący brzmienia"
  },
  {
    "word": "Wzmacniacz",
    "category": "Muzyka i Dźwięk",
    "hint": "Pudło z głośnikiem nadające moc gitarze elektrycznej"
  },
  {
    "word": "Struna",
    "category": "Muzyka i Dźwięk",
    "hint": "Cienki stalowy lub nylonowy drut wprawiany w wibracje"
  },
  {
    "word": "Kostka gitarowa",
    "category": "Muzyka i Dźwięk",
    "hint": "Mały plastikowy trójkącik do szarpania strun"
  },
  {
    "word": "Batuta",
    "category": "Muzyka i Dźwięk",
    "hint": "Lekka biała laseczka w dłoni dyrygenta"
  },
  {
    "word": "Pulpit na nuty",
    "category": "Muzyka i Dźwięk",
    "hint": "Metalowy składany stojak podtrzymujący partytury"
  },
  {
    "word": "Nuty",
    "category": "Muzyka i Dźwięk",
    "hint": "Graficzne znaki zapisu wysokości i długości dźwięku na pięciolinii"
  },
  {
    "word": "Metronom",
    "category": "Muzyka i Dźwięk",
    "hint": "Wahadełko tykające w równym tempie do ćwiczeń gry"
  },
  {
    "word": "Chodnik",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Pas dla pieszych wyłożony betonową kostką"
  },
  {
    "word": "Krawężnik",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Kamienna listwa oddzielająca jezdnię od chodnika"
  },
  {
    "word": "Przejście dla pieszych",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Białe pasy namalowane na asfalcie dla pieszych"
  },
  {
    "word": "Sygnalizacja świetlna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Słup z czerwonym, żółtym i zielonym światłem"
  },
  {
    "word": "Latarnia uliczna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Wysoki słup oświetlający drogę po zmroku"
  },
  {
    "word": "Ławka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Drewniane siedzisko w parku pod drzewami"
  },
  {
    "word": "Skrzynka pocztowa",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Czerwona lub żółta skrzynka na wysyłane listy"
  },
  {
    "word": "Biletomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Automat wydający bilety komunikacji miejskiej za monety"
  },
  {
    "word": "Bankomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Ścienna maszyna wypłacająca banknoty po wpisaniu PINu"
  },
  {
    "word": "Wpłatomierz",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Automat przyjmujący gotówkę na konto bankowe"
  },
  {
    "word": "Parkomat",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Słupek pobierający opłatę za postój samochodu"
  },
  {
    "word": "Barierka",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Metalowe ogrodzenie zabezpieczające brzeg peronu"
  },
  {
    "word": "Wiata przystankowa",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Zadaszona konstrukcja chroniąca pasażerów przed deszczem"
  },
  {
    "word": "Koszyk sklepowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Plastikowy pojemnik z rączkami do zakupów"
  },
  {
    "word": "Wózek sklepowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Głęboki metalowy wózek na kółkach w markecie"
  },
  {
    "word": "Kasa fiskalna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Urządzenie drukujące papierowe paragony za zakupy"
  },
  {
    "word": "Skaner kodów",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Laserowy czytnik piszczący przy kodzie kreskowym"
  },
  {
    "word": "Budka telefoniczna",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Dawna przeszklona kabina z aparatem na żetony"
  },
  {
    "word": "Fontanna miejska",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Kamienna misa z rzeźbą tryskająca wodą w upał"
  },
  {
    "word": "Zegar wieżowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Wielka tarcza z rzymskimi cyframi na wieży ratusza"
  },
  {
    "word": "Plac targowy",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Przestrzeń z rzędami straganów owocowych i warzywnych"
  },
  {
    "word": "Rondo",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Skrzyżowanie o ruchu okrężnym z wyspą na środku"
  },
  {
    "word": "Autostrada",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Szeroka wielopasmowa droga szybkiego ruchu"
  },
  {
    "word": "Ścieżka rowerowa",
    "category": "Miasto, Infrastruktura i Społeczeństwo",
    "hint": "Asfaltowy wydzielony pas oznaczony piktogramem roweru"
  },
  {
    "word": "Koniczyna",
    "category": "Rośliny, Ogród i Las",
    "hint": "Trójlistna roślina polna szukana w wersji czterolistnej"
  },
  {
    "word": "Paproć",
    "category": "Rośliny, Ogród i Las",
    "hint": "Leśna roślina o pierzastych liściach rozwijająca się z pastorału"
  },
  {
    "word": "Mech",
    "category": "Rośliny, Ogród i Las",
    "hint": "Miękki zielony kobierzec pokrywający pnie i kamienie"
  },
  {
    "word": "Porost",
    "category": "Rośliny, Ogród i Las",
    "hint": "Organizm pionierski rosnący na suchych skałach"
  },
  {
    "word": "Jodła",
    "category": "Rośliny, Ogród i Las",
    "hint": "Wysokie drzewo iglaste o szyszkach sterczących do góry"
  },
  {
    "word": "Modrzew",
    "category": "Rośliny, Ogród i Las",
    "hint": "Jedyne polskie iglaste drzewo gubiące igły na zimę"
  },
  {
    "word": "Lipa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Pachnące miodem drzewo o sercowatych liściach na herbatę"
  },
  {
    "word": "Kasztanowiec",
    "category": "Rośliny, Ogród i Las",
    "hint": "Drzewo rodzące kolczaste kulki z brązowymi kasztanami"
  },
  {
    "word": "Jarzębina",
    "category": "Rośliny, Ogród i Las",
    "hint": "Drzewo z kiściami czerwonych cierpkich korali dla ptaków"
  },
  {
    "word": "Głóg",
    "category": "Rośliny, Ogród i Las",
    "hint": "Kolczasty krzew o leczniczych owocach na serce"
  },
  {
    "word": "Dzika róża",
    "category": "Rośliny, Ogród i Las",
    "hint": "Krzew z różowymi kwiatami i bogatymi w witaminę owocami"
  },
  {
    "word": "Pokrzywa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Zielna roślina parząca skórę przy dotknięciu"
  },
  {
    "word": "Rumianek",
    "category": "Rośliny, Ogród i Las",
    "hint": "Biało-żółty pachnący kwiatek o właściwościach uspokajających"
  },
  {
    "word": "Mięta",
    "category": "Rośliny, Ogród i Las",
    "hint": "Aromatyczne liście dające przyjemne uczucie chłodu"
  },
  {
    "word": "Melisa",
    "category": "Rośliny, Ogród i Las",
    "hint": "Zioło o cytrynowym aromacie parzone na spokojny sen"
  },
  {
    "word": "Lawenda",
    "category": "Rośliny, Ogród i Las",
    "hint": "Fioletowy pachnący krzew odstraszający mole"
  },
  {
    "word": "Krokus",
    "category": "Rośliny, Ogród i Las",
    "hint": "Fioletowy kwiatek wyrastający spod topniejącego śniegu w Tatrach"
  },
  {
    "word": "Przebiśnieg",
    "category": "Rośliny, Ogród i Las",
    "hint": "Biały drobny kwiatek zwiastujący nadejście wiosny"
  },
  {
    "word": "Konwalia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Dzwoneczkowate białe pachnące kwiatki w leśnym cieniu"
  },
  {
    "word": "Storczyk",
    "category": "Rośliny, Ogród i Las",
    "hint": "Egzotyczny kwiat doniczkowy o wyrafinowanych pąkach"
  },
  {
    "word": "Begonia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Popularna roślina balkonowa kwitnąca na czerwono i różowo"
  },
  {
    "word": "Pelargonia",
    "category": "Rośliny, Ogród i Las",
    "hint": "Klasyczny kwiat zdobiący wiejskie okna i parapety"
  },
  {
    "word": "Papirus",
    "category": "Rośliny, Ogród i Las",
    "hint": "Wodna roślina z delty Nilu dawniej służąca jako papier"
  },
  {
    "word": "Krokiet",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Naleśnik z farszem mięsnym lub kapuścianym panierowany w bułce"
  },
  {
    "word": "Kluski śląskie",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Okrągłe kluski z gotowanych ziemniaków z dziurką na sos"
  },
  {
    "word": "Kopytka",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Krojone na ukos kluski z mąki i ziemniaków"
  },
  {
    "word": "Knypek",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Krótki ostry nożyk kuchenny do obierania warzyw"
  },
  {
    "word": "Oscypek",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Wędzony słony ser z mleka owczego z Tatr"
  },
  {
    "word": "Bryndza",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Miękki pikantny ser podhalański z owczego mleka"
  },
  {
    "word": "Karpacz",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Polskie górskie miasteczko pod Śnieżką"
  },
  {
    "word": "Babka piaskowa",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Wysokie puszyste ciasto pieczone w formie z kominkiem"
  },
  {
    "word": "Rogal świętomarciński",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Poznański przysmak z białym makiem i bakaliami"
  },
  {
    "word": "Cynamon",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Aromatyczna brązowa kora mielona do szarlotki"
  },
  {
    "word": "Wanilia",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Długa czarna laska dająca cudowny słodki aromat lodom"
  },
  {
    "word": "Imbir",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Ostry kłączowaty korzeń rozgrzewający w herbacie"
  },
  {
    "word": "Kurkuma",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Żółta intensywna przyprawa korzenna barwiąca ryż"
  },
  {
    "word": "Goździki",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Aromatyczne suszone pąki kwiatowe do grzańca"
  },
  {
    "word": "Pieprz",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Czarne pikantne ziarenka w młynku przyprawowym"
  },
  {
    "word": "Sól morska",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Białe kryształki wydobywane z odparowanej wody morskiej"
  },
  {
    "word": "Cukier puder",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Drobniutko zmielony cukier do posypywania faworków"
  },
  {
    "word": "Rodzynki",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Słodkie suszone owoce winogron dodawane do sernika"
  },
  {
    "word": "Orzech włoski",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Twarda skorupka kryjąca pofałdowane jądro niczym mózg"
  },
  {
    "word": "Orzech laskowy",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Okrągły twardy orzeszek zbierany z krzewu leszczyny"
  },
  {
    "word": "Migdał",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Białe podłużne nasiono o marcepanowym posmaku"
  },
  {
    "word": "Pistacje",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Zielone orzeszki w uchylonych solonych skorupkach"
  },
  {
    "word": "Pestki dyni",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Płaskie ciemnozielone nasiona bogate w cynk"
  },
  {
    "word": "Pestki słonecznika",
    "category": "Kuchnia i Przysmaki Świata",
    "hint": "Drobne szare nasionka łuskane z czarnej łupinki"
  },
  {
    "word": "Pochodnia",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Kij owinięty nasączoną smołą szmatą dający ogień"
  },
  {
    "word": "Kandelabr",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Wieloramienny ozdobny świecznik dworski"
  },
  {
    "word": "Amulet",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Przedmiot noszony na szyi chroniący przed złymi mocami"
  },
  {
    "word": "Talizman",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Magiczny przedmiot przynoszący szczęście i pomyślność"
  },
  {
    "word": "Kompas",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Pudełko z igłą magnetyczną wskazującą północ"
  },
  {
    "word": "Sekstans",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Nawigacyjny przyrząd żeglarzy do mierzenia kąta gwiazd"
  },
  {
    "word": "Klepsydra",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Szklane naczynie przesypujące piasek w określonym czasie"
  },
  {
    "word": "Pozytywka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Nakręcane pudełeczko grające cichą melodię"
  },
  {
    "word": "Monokl",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Pojedyncze okrągłe szkło trzymane mięśniem oka"
  },
  {
    "word": "Laska spacerowa",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Elegancki kij ze zdobioną gałką pomagający w chodzie"
  },
  {
    "word": "Wachlarz",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Rozkładany harmonijkowy przybór dający powiew chłodnego powietrza"
  },
  {
    "word": "Papier ścierny",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Szorstki arkusz z ziarnem do wygładzania drewna"
  },
  {
    "word": "Szpachelka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Elastyczna metalowa blaszka do nakładania gipsu na ściany"
  },
  {
    "word": "Paca tynkarska",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Prostokątne narzędzie murarskie do zacierania tynków"
  },
  {
    "word": "Kielnia",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Trójkątna stalowa łopatka murarska do nakładania zaprawy"
  },
  {
    "word": "Imadło",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Ciężkie śrubowe narzędzie na stole warsztatowym do zaciskania"
  },
  {
    "word": "Kowadło",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Masywny stalowy blok na którym kowal wykuwa podkowy"
  },
  {
    "word": "Miech kowalski",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Skórzany wór tłoczący powietrze do ogniska kowalskiego"
  },
  {
    "word": "Dłuto",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Zaostrzona stalowa klinga do rzeźbienia rowków w drewnie"
  },
  {
    "word": "Heblarka",
    "category": "Cuda Świata, Rzeczywistość i Przedmioty Różne",
    "hint": "Narzędzie stolarskie ścinające wióry i równające deski"
  },
  {
    "word": "Bierki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Plastikowe patyczki o różnych kształtach podnoszone bez poruszenia innych"
  },
  {
    "word": "Pchełki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Plastikowe krążki pstrykane większym krążkiem do miseczki"
  },
  {
    "word": "Domino",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Podłużne kostki z dwoma polami z oczkami"
  },
  {
    "word": "Jojo",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Szpulka na sznurku opadająca i powracająca do ręki"
  },
  {
    "word": "Bączek",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wirująca blaszana zabawka wprawiana w ruch tłokiem"
  },
  {
    "word": "Klocki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Drewniane lub plastikowe bryły do budowania wież"
  },
  {
    "word": "Miś pluszowy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ulubiona miękka maskotka dzieci do przytulania"
  },
  {
    "word": "Lalka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zabawkowa postać z ubrankami i wózeczkiem"
  },
  {
    "word": "Proca",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Rozwidlony patyk z gumką do strzelania kamykami"
  },
  {
    "word": "Latawiec",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Lekka konstrukcja z papieru unosząca się na wietrze na sznurku"
  },
  {
    "word": "Hula-hop",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Plastikowa obręcz kręcona na biodrach i talii"
  },
  {
    "word": "Skakanka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Sznur z rączkami do skakania przez obracającą się pętlę"
  },
  {
    "word": "Guma do skakania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Elastyczna taśma naciągana na nogi dwóch osób"
  },
  {
    "word": "Bańki mydlane",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Tęczowe kule z wody i mydła puszczane przez kółeczko"
  },
  {
    "word": "Balonik wodny",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Mały balon napełniony wodą do letnich bitew"
  },
  {
    "word": "Cymbergaj",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Gra stołowa polegająca na wbijaniu krążka do bramki rywala"
  },
  {
    "word": "Piłkarzyki",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Stół z figurkami piłkarzy zamontowanymi na metalowych prętach"
  },
  {
    "word": "Gra planszowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pudełko z planszą, pionkami, kartami i instrukcją"
  },
  {
    "word": "Monopoly",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Gra w kupowanie ulic, domków i hoteli"
  },
  {
    "word": "Kalambury",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zgadywanie haseł pokazywanych gestami lub rysowanych"
  },
  {
    "word": "Flawerpot",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ozdobna osłonka na doniczkę ceramiczną"
  },
  {
    "word": "Karmnik dla ptaków",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Drewniany domek z daszkiem ze słonecznikiem zimą"
  },
  {
    "word": "Budka lęgowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Drewniana skrzynka z małym otworkiem dla sikorek na drzewie"
  },
  {
    "word": "Huśtawka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Deska zawieszona na linach do bujania się w przód i w tył"
  },
  {
    "word": "Zjeżdżalnia",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pochylnia z drabinką na placu zabaw"
  },
  {
    "word": "Piaskownica",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Drewniana rama wypełniona piaskiem do robienia babek"
  },
  {
    "word": "Karuzela podwórkowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Obracająca się tarcza z poręczami na osiedlu"
  },
  {
    "word": "Hamak",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Siatka lub płótno rozpięte między dwoma drzewami do wypoczynku"
  },
  {
    "word": "Leżak",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Składany fotel płócienny do opalania na plaży"
  },
  {
    "word": "Parawan",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Płócienna zapora wbijana młotkiem w piasek na bałtyckiej plaży"
  },
  {
    "word": "Koło ratunkowe",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pomarańczowy pływak w kształcie torusa z liną"
  },
  {
    "word": "Rękawki do pływania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Dmuchane poduszki zakładane dziecku na ramiona do wody"
  },
  {
    "word": "Maska do nurkowania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Szczelne okulary z szybą i osłoną na nos do podglądania dna"
  },
  {
    "word": "Fajka do nurkowania",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Rurka z ustnikiem pozwalająca oddychać z twarzą w wodzie"
  },
  {
    "word": "Płetwy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Gumowe wydłużenia stóp ułatwiające szybkie pływanie"
  },
  {
    "word": "Ponton ratunkowy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Pomarańczowa tratwa ze sprzętem przetrwania na morzu"
  },
  {
    "word": "Kotwica",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ciężki żelazny hak z łapami unieruchamiający statek na dnie"
  },
  {
    "word": "Koło sterowe",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Drewniane koło z rączkami do zmiany kursu żaglowca"
  },
  {
    "word": "Peryskop",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Układ luster i pryzmatów do patrzenia ponad taflą wody"
  },
  {
    "word": "Skafander kosmiczny",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Hermetyczny kombinezon z hełmem na spacer w próżni"
  },
  {
    "word": "Hełm",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Twarda skorupa chroniąca głowę żołnierza lub motocyklisty"
  },
  {
    "word": "Maska gazowa",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Gumowa osłona twarzy z pochłaniaczem filtrującym powietrze"
  },
  {
    "word": "Lornetka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Dwa połączone małe teleskopy do obserwacji odległych obiektów"
  },
  {
    "word": "Peruka",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Sztuczne włosy zakładane na głowę dla zmiany wyglądu"
  },
  {
    "word": "Wąsy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zarost rosnący pod nosem u mężczyzny"
  },
  {
    "word": "Broda",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Męski zarost pokrywający podbródek i policzki"
  },
  {
    "word": "Tatuaż z henny",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Tymczasowy brązowy wzór malowany na dłoni"
  },
  {
    "word": "Piercing",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ozdobny kolczyk przekłuty w brwi, nosie lub pępku"
  },
  {
    "word": "Kufel",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ciężkie szklane lub kamionkowe naczynie z uchem na piwo"
  },
  {
    "word": "Kielich",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Ozdobny metalowy puchar do toastów na uczcie"
  },
  {
    "word": "Puchar",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Złote trofeum wręczane zwycięzcy turnieju sportowego"
  },
  {
    "word": "Medal",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Okrągły krążek z brązu, srebra lub złota na wstędze"
  },
  {
    "word": "Wieniec laurowy",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Zielona korona z liści laurowych dla rzymskiego triumfatora"
  },
  {
    "word": "Znicz olimpijski",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Wielka czara ze świętym ogniem płonącym przez czas igrzysk"
  },
  {
    "word": "Pochodnia olimpijska",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Specjalny znicz niesiony w sztafecie przez sportowców"
  },
  {
    "word": "Gwizdek",
    "category": "Gry, Zabawy i Rozrywka",
    "hint": "Mały metalowy przyrząd wydający przenikliwy pisk"
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = IMPOSTOR_WORDS;
  } else {
    root.IMPOSTOR_WORDS = IMPOSTOR_WORDS;
  }
})(typeof window !== 'undefined' ? window : this);
