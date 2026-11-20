# Socialinio kapitalo rodikliai

Socialinio kapitalo rodikliai kiekybiškai įvertina tinklus, pasitikėjimą ir pilietinį dalyvavimą, leidžiančius bendruomenėms ir institucijoms veikti veiksmingai – „jungiamąjį audinį“, kuris neturi eilutės jokioje balanso ataskaitoje, bet kai jo yra, akivaizdžiai mažina kaštus ir trintį, o kai jo trūksta, akivaizdžiai juos didina. Šiuolaikinė samprata kilo iš Roberto Putnamo knygos „Bowling Alone“ (2000), kurioje atskirti jungiamasis (angl. bonding) kapitalas (ryšiai panašios grupės viduje) ir tiltų tiesimo (angl. bridging) kapitalas (ryšiai tarp skirtingų grupių); Jungtinės Karalystės Nacionalinė statistikos tarnyba (ONS) vėliau sukūrė nuolatinį rodiklių rinkinį jam sekti nacionaliniu mastu.

## Kodėl tai svarbu

Pagrindinis Putnamo empirinis teiginys, pagrįstas mažėjančia JAV pilietinių asociacijų narystės, lankymosi bažnyčiose ir profsąjungų veiklos statistika XX amžiaus pabaigoje, buvo toks: socialinis kapitalas leidžia prognozuoti rezultatus, kuriuos įprastinei ekonomikai sunku paaiškinti, – mažesnį nusikalstamumą, geresnę vaikų gerovę, veiksmingesnę vietos valdžią, greitesnį ekonomikos atsigavimą po sukrėtimų. Jungiamasis kapitalas (stiprūs ryšiai glaudžioje grupėje) naudingas tarpusavio paramai, bet gali sukietėti į užsisklendimą; tiltų tiesimo kapitalas (silpnesni ryšiai tarp skirtingų grupių) paprastai susijęs su galimybėmis, informacijos sklaida ir pasitikėjimu institucijomis. ONS į tai žiūrėjo pakankamai rimtai, kad sukurtų nacionalinę rodiklių sistemą – jos serija „Social Capital in the UK“
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
seka keturis ramsčius: asmeninius santykius, socialinių tinklų paramą, pilietinį aktyvumą ir pasitikėjimą bei bendradarbiavimo normas; kiekvienas jų sudarytas iš nusistovėjusių apklausų klausimų (Community Life Survey, Understanding Society). Viešojo sektoriaus skaitmeninėms paslaugoms socialinis kapitalas svarbus dvigubai: tai ir rezultatas, kurį kai kurios programos siekia sukurti (bendruomenės atsparumo finansavimas, socialinis paskyrimas), ir įvestis, lemianti, kaip gerai paslauga bus priimta – paslauga, įdiegta didelio pasitikėjimo, gerai susijungusioje bendruomenėje, plis žodžiu iš lūpų taip, kaip identiška paslauga mažo pasitikėjimo vietovėje nepasklis.

## Matematika

```
ONS keturių ramsčių sistema (rodikliai, iliustraciniai):

Asmeniniai santykiai:        % turinčių žmogų, kuriuo galima pasikliauti krizės metu
Socialinių tinklų parama:    % galinčių prireikus pasiskolinti pinigų iš draugų / šeimos
Pilietinis aktyvumas:        % per pastaruosius 12 mėnesių savanoriavusių ar dalyvavusių pilietinėje veikloje
Pasitikėjimas ir bendradarbiavimo normos: % sutinkančių, kad „daugeliu žmonių galima pasitikėti“

ONS neskelbia vieno suvestinio rodiklio – ramsčiai pateikiami atskirai,
tyčia, nes sujungus juos į vieną indeksą būtų paslėpta, kuris konkretus
ramstis yra silpnas.

Putnamo jungiamojo ir tiltų tiesimo kapitalo skirstymas (sistema, ne formulė):
  jungiamasis kapitalas ≈ ryšių tankis vienalytėje grupėje
  tiltų tiesimo kapitalas ≈ ryšių tarp skirtingų grupių dažnumas / stiprumas
```

## Pavyzdys su skaičiavimais

**Vietovės socialinio kapitalo vaizdas**: Community Life Survey tipo apklausa vietovėje parodo, kad 78 % turi žmogų, kuriuo galima pasikliauti krizės metu (asmeniniai santykiai), 61 % prireikus galėtų pasiskolinti pinigų (tinklų parama), 24 % per praėjusius metus savanoriavo (pilietinis aktyvumas), o 41 % sutinka, kad „daugeliu žmonių galima pasitikėti“ (pasitikėjimas ir normos) – palyginti su nacionaliniais vidurkiais, atitinkamai maždaug 85 %, 70 %, 30 % ir 45 % (iliustraciniai duomenys; palyginkite su dabartiniu ONS biuleteniu). Vietovė atsilieka pagal kiekvieną ramstį, bet labiausiai pagal pasitikėjimą (41 % palyginti su 45 % šalyje, 4 punktų skirtumas) ir pilietinį aktyvumą (24 % palyginti su 30 %, 6 punktų skirtumas) – taigi didžiausias santykinis trūkumas, kuriam verta skirti tikslinių investicijų (pavyzdžiui, bendruomenės dotacijų programą), yra pilietinis aktyvumas, o ne pasitikėjimas, užuot vykdžius bendrą „stiprinti pasitikėjimą“ iniciatyvą.

**Jungiamasis ir tiltų tiesimo kapitalas paslaugų projektavime**: glaudžioje bendruomenėje vykdoma įdarbinimo programa nustato, kad rekomendacijos bendruomenėje sklinda greitai (didelis jungiamasis kapitalas: žinia pasklinda per kelias dienas), bet programai sunku pasiekti gyventojus už to tinklo ribų (mažas tiltų tiesimo kapitalas: po kelių mėnesių už pagrindinės bendruomenės ribų dalyvavimo beveik nėra). Išvada – ne „daugiau rinkodaros“, o sąmoningas tiltų tiesimo ryšių kūrimas, bendradarbiaujant su organizacijomis, esančiomis *už* esamo tinklo ribų, nes vien jungiamasis kapitalas negali išspręsti tiltų tiesimo kapitalo problemos.

## Ryšys su programine inžinerija

- Skaitmeninės platformos, nukreipiančios tarpusavio pagalbą, savanorystę ar bendruomenės dotacijas (pavyzdžiui, „vietos jungiklio“ paslauga), tiesiogine prasme kuria tiltų tiesimo kapitalo infrastruktūrą; jų sėkmės rodiklis turėtų būti sukurtų ryšių tinklo įvairovė, o ne vien sandorių skaičius – plačiau apie infrastruktūros, ant kurios kiti kuria vertę, modelį žr. [vyriausybė kaip platforma](../vyriausybė-kaip-platforma/).
- Kai programos pokyčio teorija socialinį kapitalą aiškiai nurodo kaip rezultatą (bendruomenės atsparumo fondas, socialinio paskyrimo paslauga), jos [pokyčio teorijoje](../pokyčio-teorija/) ir [loginiame modelyje](../loginis-modelis/) turėtų būti įvardytas konkretus ramstis (pasitikėjimas, pilietinis aktyvumas, tinklų parama), kurį tikimasi pakeisti, o ne neapibrėžtas „kurti bendruomenę“ rezultatas, kurio negalima išmatuoti pagal ONS bazinį lygį.
- Socialinio kapitalo rodikliai yra naudingas lygybės matymo kampas šalia [Daugialypio nepritekliaus indekso](../daugialypio-nepritekliaus-indeksas/): vietovė gali būti pajamų požiūriu skurdi, bet socialiai turtinga, ar atvirkščiai, ir šie atvejai reikalauja labai skirtingų intervencijų.

## Dažniausios klaidos

- **Keturių ONS ramsčių suliejimas į vieną suvestinį rodiklį** – ONS tyčia to nedaro; vienas skaičius paslepia, kuris konkretus ramstis lemia žemą rodmenį, o vidurkinimas užmaskuoja skirtumą tarp bendruomenės, kuri pasitiki, bet pilietiškai pasyvi, ir priešingos.
- **Prielaida, kad socialinis kapitalas visada yra gerai** – tankus jungiamasis kapitalas užsisklendusioje grupėje gali aktyviai priešintis išorės institucijoms (įskaitant valdžios paslaugas); pati Putnamo analizė jungiamąjį ir tiltų tiesimo kapitalą traktuoja kaip skirtingus gėrius su skirtingais, kartais prieštaringais poveikiais.
- **Apklausomis pagrįstų socialinio kapitalo matų naudojimas kaip realaus laiko veiklos rodiklio** – pagrindinės apklausos (Community Life Survey, Understanding Society) vykdomos kasmet arba rečiau; socialinio kapitalo duomenis vertinkite kaip lėtai kintantį kontekstinį rodiklį, o ne tai, ką paslaugos skydelis gali atnaujinti kas savaitę.

## Šaltiniai

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
