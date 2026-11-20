# Efektyviojo altruizmo ekonominis efektyvumas

Efektyviojo altruizmo (angl. effective altruism, EA) ekonominio efektyvumo mąstymas reitinguoja labdaros intervencijas pagal gėrio kiekį, dažniausiai išreiškiamą išgelbėtomis gyvybėmis ar pagerinta sveikata už išleistą dolerį, ir nukreipia pinigus į tą intervenciją, kuri prie ribos nuperka daugiausia gėrio. GiveWell yra įtakingiausias šios srities praktikas: jis skelbia aiškius, atnaujinamus kaštų už išgelbėtą gyvybę ir kaštų už rezultatą įverčius nedideliam „geriausių labdaros organizacijų“ sąrašui ir rekomenduoja rėmėjams duoti tai, kuri šiuo metu turi vietos papildomam finansavimui ir geriausią santykį.

## Kodėl tai svarbu

GiveWell savo paskelbtoje metodikoje ekonominį efektyvumą nurodo kaip pagrindinį kriterijų: ieško įrodymais pagrįstų intervencijų, įvertina jų ekonominį efektyvumą bendru vienetu ir reitinguoja visiškai nesusijusias priežastis (tinklus nuo maliarijos, vitamino A papildus, pinigų pervedimus, skatinamąsias išmokas už vakcinaciją) pagal tą vieną ašį. Tai tiesioginis QALY/DALY tipo mąstymo importas iš sveikatos ekonomikos į filantropiją: kaip sveikatos sistema klausia „kiek QALY už svarą prie ribos“, taip GiveWell klausia „kiek gyvybių ar gyvenimo metų už dolerį prie ribos“ ir laiko priežastis keičiamomis, kai jos išverstos į tą bendrą vienetą. Šios mąstymo sistemos viešojo sektoriaus giminaitį žr. [ekonominio efektyvumo analizė vyriausybėje](../kaštų-veiksmingumo-analizė-valdžios-sektoriuje/).

Dažniausiai cituojamas GiveWell skaičius susijęs su Against Malaria Foundation (AMF), kuri platina insekticidais apdorotus tinklus nuo uodų. GiveWell paskelbtame skaičiavimo pavyzdyje (pagal 2020 m. finansavimo duomenis) maždaug 4 500 $ finansavo pakankamai tinklų, kad būtų išvengta vienos mirties, atsižvelgus į netobulą tinklų naudojimą, bazinį mirtingumą be tinklų ir funging pataisą, t. y. galimybę, kad AMF dalį to finansavimo būtų gavusi iš kitų rėmėjų bet kuriuo atveju. GiveWell aiškiai nurodo, kad šis skaičius laikui bėgant ir skirtingose geografinėse vietovėse kinta, keičiantis maliarijos paplitimui, tinklų kainoms ir finansavimo spragoms, ir kad gyvybės išgelbėjimo kaštai paprastai turėtų augti, nes pirmiausia išnaudojamos pigiausios galimybės; tai metodo iliustracija, o ne nekintama kaina.

## Matematika

```
Cost-effectiveness = Cost of intervention / Units of good produced
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell's chain for a bednet programme, illustratively:
  $ per net purchased and delivered
    ÷ share of nets actually used
    ÷ people protected per net
    × baseline annual mortality without nets
    × reduction in mortality attributable to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money displacing other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

Ši grandinė svarbi, nes kiekviename žingsnyje ekonominio efektyvumo įverčiai dažniausiai suklysta (žr. toliau esančias dažniausias klaidas) ir nes ji aiškiai parodo, kad „kaštai už išgelbėtą gyvybę“ niekada nėra neapdorota stebima kaina, o modeliuotas įvertis, sudarytas iš kelių atskirai neapibrėžtų įvesčių.

## Pavyzdys su skaičiavimais

Dvi hipotetinės intervencijos, abi pagrįstos įrodymais, varžosi dėl tų pačių ribinių 100 000 £:

- **Tinklai nuo uodų (AMF tipo)**: maždaug 4 500 $ už išgelbėtą gyvybę pagal GiveWell paskelbtą skaičiavimo pavyzdį iš 2020 m. duomenų, t. y. labai apytiksliai 20 išgelbėtų gyvybių už 100 000 £, priklausomai nuo naudojamo valiutos kurso ir metų.
- **Dehelmintizacijos programa**: jokios tikėtinos mirtingumo naudos, bet stiprūs įrodymai apie ilgalaikį pajamų prieaugį dėl vaikystės dehelmintizacijos; GiveWell ją vertina pajamų prieaugio, o ne išgelbėtų gyvybių terminais, todėl be bendro vieneto sunku tiesiogiai lyginti su tinklais. GiveWell naudoja aiškią „moralinių svorių“ sistemą, kad abu paverstų vienu vidiniu vienetu reitingavimui.

EA metodo disciplina yra priversti šį palyginimą išeiti į viešumą, o ne finansuoti abi, nes abi „skamba gerai“. Atitinkamą priverstinę funkciją, kurią naudoja JK socialinės įmonės ir vietos užsakovai ir kuri užduoda tą patį klausimą (kokia geriausia grąža už svarą), tik piniginės vertės, o ne gyvybių / DALY kalba, žr. [socialinė investicijų grąža](../socialinė-investicijų-grąža/).

## Ryšys su programine inžinerija

Inžinieriai, kuriantys rėmėjų platformas, dotacijų derinimo įrankius ar poveikio skydelius EA orientuotiems finansuotojams (Open Philanthropy, pats GiveWell, veiksmingo davimo platformos, tokios kaip Giving What We Can), turi pateikti ekonominio efektyvumo įverčius kaip intervalus su nurodytomis prielaidomis, o ne pavienius skaičius: pagrindinis modelis turi kelias dauginamas neapibrėžtas įvestis, ir sutraukus jas į vieną skaičių skydelyje iškreipiamas pasitikėjimas, kurį nurodo pats GiveWell. Versijuokite kiekvieną įvertį pagal paskelbimo datą; GiveWell peržiūri savo skaičius, kartais iš esmės, kai atsiranda naujų RCT įrodymų ar finansavimo spragų duomenų, o platforma, kuri talpina seną skaičių, tyliai tampa neteisinga.

## Dažniausios klaidos

- **Ekonominio efektyvumo įverčio laikymas fiksuota kaina.** Tai modelio išvestis su keliomis neapibrėžtomis dauginamomis įvestimis (naudojimo lygiai, bazinis mirtingumas, funging pataisa); nurodykite datą ir versiją.
- **Funging / išstūmimo ignoravimas.** Finansuojant organizaciją, kuri tuos pinigus bet kuriuo atveju būtų gavusi iš kito rėmėjo, nuperkama mažiau kontrafaktinio gėrio, nei rodo antraštė; žr. [papildomumas ir tuščiasis poveikis](../papildomumas-ir-tuščiasis-poveikis/) bei [išstūmimas ir priskyrimas](../išstūmimas-ir-priskyrimas/).
- **Palyginimas tarp nesuderinamų vienetų be konvertavimo.** „Išgelbėtos gyvybės“ ir „gautos pajamos“ tiesiogiai nepalyginami be aiškios moralinių svorių sistemos; jų pateikimas greta, tarsi būtų palyginami, yra kategorijos klaida.
- **Tunelinis matymas vienos priežasties srityje.** Reitinguojant tik vienoje priežasčių srityje (pvz., tik pasaulinės sveikatos labdaros organizacijas) ir nugalėtoją vadinant „ekonomiškai efektyviausia labdaros organizacija“, teiginys perdedamas; GiveWell tarpsritinis reitingas sąmoningai siauras (pasaulinė sveikata ir gerovė), o ne universalus.

## Šaltiniai

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
