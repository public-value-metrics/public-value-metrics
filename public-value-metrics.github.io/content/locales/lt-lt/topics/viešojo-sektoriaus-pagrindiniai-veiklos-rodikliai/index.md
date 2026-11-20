# Viešojo sektoriaus pagrindiniai veiklos rodikliai (KPI)

Pagrindinis veiklos rodiklis (KPI) yra pasirinktas, stebimas matas, atstojantis tai, ar viešoji paslauga gerai atlieka savo darbą. Vyriausybėje KPI pasirinkimas niekada nėra neutralus: kadangi KPI susiejami su biudžetais, reitingų lentelėmis ir karjeromis, jo parinkimas formuoja visų, esančių toliau grandinėje, elgesį, dažnai labiau nei politika, sukūrusi paslaugą.

## Kodėl tai svarbu

Charleso Goodharto 1975 m. pastebėjimas apie pinigų politiką, vėliau išpopuliarintas Marilyn Strathern formuluote „kai matas tampa tikslu, jis nustoja būti geru matu“, yra svarbiausias įspėjamasis ženklas viešojo sektoriaus veiklos valdyme. KPI, pasirinktas sistemai *apibūdinti*, pradeda tą sistemą *iškreipti*, kai tik su juo susiejami ištekliai, atlyginimai ar politinis išlikimas. Klasikinė iliustracija yra NHS greitosios pagalbos reagavimo laikai: kai aštuonių minučių A kategorijos reagavimo tikslas tapo įpareigojančiu, kai kurios tarnybos, kaip parodyta, „sukraudavo“ greitosios pagalbos automobilius čia pat už reagavimo laiko skaičiavimo ribos arba perklasifikuodavo iškvietimus, kad pasiektų skaičių nepakeitę pacientų rezultatų. Jungtinės Karalystės National Audit Office gairės dėl veiklos rodiklių parinkimo ir naudojimo, išdėstytos jo vertės už pinigus ataskaitose ir sistemose „Performance Measurement by Regulators“ bei „Choosing the Right FABRIC“ (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective), egzistuoja būtent todėl, kad departamentai nuolat rinkosi rodiklius, kuriuos lengva pateikti, o ne tuos, kuriuos sunku iškreipti. Programinės įrangos inžinierius, kuris pateikia skydelį, pagal kurį bus vertinamas ministras ar direktorius, nori to ar ne, projektuoja viešosios institucijos paskatų struktūrą.

## Matematika

KPI projektavimas yra sistemos pobūdžio tema, bet kandidato KPI *vertinimas* yra pakartojamas kontrolinis sąrašas, o ne formulė:

```
Kiekvieną kandidatą KPI įvertinkite pagal:
  Tinkamumas tikslui  - ar jis matuoja rezultatą, ar kelis žingsnius nutolusį pakaitalą?
  Tikslingumas        - ar jis priklauso žmonėms, kurie iš tikrųjų gali jam daryti įtaką?
  Subalansuotumas     - ar jis suporuotas su priešpriešine metrika, gaudančia iškreipimą?
  Patikimumas         - ar jis atlaiko auditą, ar yra savarankiškai deklaruojamas ir nepatikrinamas?
  Integruotumas       - ar jis dera su platesniu rinkiniu, ar stumia prieš kitą KPI?
  Ekonomiškumas       - ar jo rinkimas kainuoja daugiau nei sprendimas, kurį jis informuoja?

Pirmaujančių ir atsiliekančių rodiklių skirstymas:
  Pirmaujantis rodiklis -> prognozuoja būsimą rezultatą, bet dažnai iškreipiamas (pvz., atsakyti skambučiai per <60 s)
  Atsiliekantis rodiklis -> patvirtina, kad rezultatas įvyko, bet ateina per vėlai vairuoti (pvz., metinė
                           pasitenkinimo apklausa)
  Pagrįstas KPI rinkinys kiekvienam tikslui suporuoja bent po vieną iš kiekvieno.
```

## Pavyzdys su skaičiavimais

**Greitosios pagalbos tarnyba**: tarnyba pateikia A kategorijos (pavojus gyvybei) reagavimo laiko KPI „75 % iškvietimų atsakyta per 8 minutes“. Per vieną ketvirtį gaunama 6 000 A kategorijos iškvietimų; 4 500 atitinka 8 minučių ribą, tai duoda 75,0 %, t. y. tikslas, atrodo, pasiektas.

```
Antraštinis KPI = 4 500 / 6 000 × 100 = 75,0 %  (atitinka 75 % ribą)
```

Tačiau Goodharto auditas prideda priešpriešinę metriką: vidutinis reagavimo laikas lėčiausiems 10 % iškvietimų.

```
Lėčiausio decilio vidutinis reagavimo laikas = 34 minutės (prieš dvejus metus buvo 19 minučių)
```

Tarnyba pasiekia tikslą, o uodega, t. y. iškvietimai, kurie, kai triažas netobulas, greičiausiai iš tikrųjų pavojingi gyvybei, gerokai pablogėjo, nes brigados nukreipiamos į iškvietimus netoli 8 minučių uolos krašto, o ne pagal klinikinį skubumą. Vienas KPI papasakojo klaidingą istoriją; suporuotas KPI papasakojo tikrą.

## Ryšys su programine inžinerija

Valdžios veiklos skydelius kuriantys inžinieriai funkciškai projektuoja organizacijos paskatų API. Praktinės pasekmės: *vardiklį* instrumentuokite taip pat griežtai kaip skaitiklį (KPI, pateiktas kaip gryna procentinė dalis, kviečia vardiklio iškreipimą; tą patį spąstą skaitmeninėse paslaugose žr. [kaina už sandorį](../kaštai-vienam-sandoriui/)); priešpriešines metrikas įtraukite į patį skydelį, o ne į atskirą ataskaitą, kurios niekas neskaito, kad iškreipimas būtų matomas sprendimo priėmimo vietoje; ir versijuokite KPI apibrėžimą, nes tylus pakeitimas (kas laikoma „iškvietimu“, „byla“ ar „užbaigimu“) funkciškai prilygsta tikslo pakeitimui apie tai nepranešus. [Viešosios vertės rezultatų kortelė](../viešosios-vertės-rezultatų-kortelė/) yra vienas struktūruotas būdas neleisti vieno KPI skaityti atskirai, o [rezultatais grįsta atskaitomybė](../rezultatais-grįsta-atskaitomybė/) yra populiacijos lygio KPI, kurių viena komanda negali vienašališkai iškreipti, parinkimo disciplina.

## Dažniausios klaidos

- **Lengvai renkamos metrikos pasirinkimas vietoj prasmingos**: skambučio atsakymo laiką trivialu registruoti; ar skambutis išsprendė piliečio problemą, ne, bet tik antrasis yra rezultatas. Nesitenkinkite tuo, ką sistema jau išspjauna.
- **Priešpriešinės metrikos nebuvimas**: bet koks KPI, susietas su pinigais ar reputacija, bus iškreipiamas ties riba; prieš skelbdami pateikite jį su suporuota metrika, gaudančia tikėtiną iškreipimo vektorių.
- **Metrikos pakeitimas be pakeitimų žurnalo**: pakeitus „gautus skambučius“ į „atsakytus skambučius“, kad būtų pagražinta tendencija, laiko eilutės patikimumas sunaikinamas, kai tik tai atrandama; kartu su skaičiais visada skelbkite apibrėžimų pakeitimų žurnalą.
- **Veiklos painiojimas su rezultatu**: atliktų patikrinimų skaičiavimas yra produktas; į reikalavimus atitinkančių patalpų skaičiavimas yra artimesnis rezultatui (žr. [rezultatai ir produktai](../rezultatai-ir-produktai/)).

## Šaltiniai

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (Goodharto dėsnio formuluotė, kaip dažniausiai cituojama).
- National Audit Office, tyrimai dėl NHS greitosios pagalbos tarnybų veiklos ataskaitų.
  <https://www.nao.org.uk/>
