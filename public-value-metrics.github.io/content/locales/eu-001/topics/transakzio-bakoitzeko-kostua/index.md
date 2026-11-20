# Transakzio bakoitzeko kostua

Transakzio bakoitzeko kostua gobernuko zerbitzu digital baten unitate-ekonomiaren goiburuko metrika da: kanal bat entregatzeko kostu osoa, kanal horren bidez osatutako transakzio kopuruaz zatituta. GOV.UK Performance Platform zaharreko zifra nagusia zen, eta "digital lehenespenez" ereduaren hamarkada bateko inbertsioa finantzatu zuen zenbakia da — hain zuzen horregatik da tranpa egiteko aukera gehien duen metrika ere.

## Zergatik den garrantzitsua

Cabinet Office-ren 2012ko Digital Efficiency Report-ek kanalen kostuaren konparazioa gogoan geratu zen terminoetan jarri zuen: transakzio digitalek telefonoz baino 20 aldiz gutxiago eta aurrez aurre baino 50 aldiz gutxiago kostatzen zutela aurkitu zen, tokiko gobernuko zifra ilustratiboekin: web-transakzio bakoitzeko £0,15 inguru, telefonoz £2,83 eta aurrez aurre £8,62. Konparazio bakar hori izan zen Government Digital Strategy-n izendatutako 25 zerbitzu eredugarriak berriz diseinatzeko justifikazioa, eta ordutik kanal-aldaketaren aurrezpenak aipatu dituen sail-mailako negozio-kasu guztiena. Zifra erabilgarria da magnitude-ordenako seinale gisa, baina ratioa guztiz alde bakoitzean zer kontatzen den araberakoa da: telefono-kanalaren kostu bidezko batek deitzeko zentroaren langileak, telefonia-kontratua, prestakuntza eta eraikinak barne hartzen ditu; kostu digital bidezko batek ostatatzea, produktu-taldearen soldata etengabeak, huts egindako ibilbideentzako laguntza-mahaiko denbora eta [digital-service-standard](../zerbitzu-digitalen-estandarra/) arauaren 5. puntuak eskatutako laguntza-digitaleko kanala barne hartzen ditu. Hauetako nahikoa kentzen badiozu aldea digitalari, edozein zerbitzu merke dirudi.

## Matematika

```
Transakzio bakoitzeko kostua = esleitutako kanal-kostu osoa / osatutako transakzioak

Esleitutako kanal-kostu osoak barne hartu behar du:
  + ostatatzea eta azpiegitura
  + produktu/ingeniaritza/laguntza-taldearen kostua (amortizatua)
  + edukiaren eta zerbitzu-diseinuaren kostua (amortizatua)
  + laguntza-digitaleko / irisgarritasun-laguntzako kostua
  + hutsegite-eskariaren kostua (digitalean huts egin eta telefonora itzultzen diren erabiltzaileak)
  − behin-behineko eraikuntza-kostua zerbitzuaren bizitza espero osoan
    amortizatzen da, ez osorik lehen urtean gastu gisa

Kontabilitate-trikimailu ohikoa:
  "Transakzio bakoitzeko kostu marjinala" (ostatatzea bakarrik, eraiki ondoren)
  "transakzio bakoitzeko batez besteko kostua" balitz bezala aipatzen da
  (eraikitzen eta ustiatzen jarraitzen duen taldea barne kostu osoa).
  Biak 10 aldiz edo gehiagoz aldendu daitezke entrega-talde handi eta
  aktiboa duen zerbitzu batean.
```

## Adibide landua

**Ibilgailuen zergaren berritze-zerbitzua**: 4 milioi transakzio/urte.

```
Zifra marjinala soilik (trikimailua):
  Ostatatzea + ordainketa-prozesamendua bakarrik = £180.000/urte
  Transakzio bakoitzeko kostua = 180.000 / 4.000.000 = £0,045
  → negozio-kasu batean aipatutako goiburuko zifra

Kostu osoko zifra (zintzoa):
  Ostatatzea + ordainketa                  £180.000
  Produktu/ingeniaritza-taldea (8 FTE)     £720.000
  Laguntza-mahaia (huts egin/kontsultatutako txn.)  £310.000
  Laguntza-digitaleko telefono-lerroa      £140.000
  Guztira                                  £1.350.000
  Transakzio bakoitzeko kostua = 1.350.000 / 4.000.000 = £0,3375

Kostu osoko zifra Digital Efficiency Report-eko £2,83ko telefono-kanalaren
konparatzailea baino 8 aldiz merkeago dago oraindik — aurrezpen erreala eta
defendagarria — baina zifra marjinala soilik aipatzen duen lasterbidezko
bertsioa baino 7,5 aldiz altuagoa. Bi zenbakiak "egiazkoak" dira; bakarra da
alderatzen ari den telefono-kanalaren kostuarekin alderagarria.
```

## Software ingeniaritzarekin lotura

Transakzio bakoitzeko kostua arkitektura-erabakiak finantza-zenbaki bihurtzen diren lekua da: garbi eskalatzen den eta esku-hartze eskuzko gutxi behar duen zerbitzu batek zifra hau jaisten du denborarekin; errore-egoera nahasgarriengatik laguntza-tiket-bolumen handia sortzen duenak igotzen du, ostatatzearen eraginkortasuna edozein dela ere. [digital-service-standard](../zerbitzu-digitalen-estandarra/) arauaren 10. puntuaren ("definitu zer den arrakasta, eta argitaratu errendimendu-datuak") eta [service-standards-and-transaction-metrics](../zerbitzu-estandarrak-eta-transakzio-metrikak/) gaiaren metrika lagun naturala da, zifra hau barruan dagoen KPI multzo osoagoa ezartzen duena. [channel-shift-savings](../kanal-aldaketaren-aurrezpenak/) kalkuluak ere zuzenean elikatzen ditu eta [total-cost-of-ownership-in-government-it](../jabetza-kostu-osoa-gobernuko-it-an/) gaiarekin bateratu behar da, plataformaren eta zerbitzu partekatuen gastu orokorrak isilean ez erortzeko.

## Tranpak

- **Batez besteko kostu gisa jantzitako kostu marjinala**: zerbitzua eraiki ondoren ostatatze-kostua bakarrik aipatzea, hura mantentzen, iteratzen eta laguntzen duen talde etengabea alde batera utziz — ikus goiko adibide landua.
- **Laguntza-digitaleko kostua baztertzea**: kanal bat ez da "digital lehenespenez" betetzen eta bere benetako kostua ez da jasotzen, [inklusio digitalak](../inklusio-digitala/) eskatzen duen telefono/paper-ordezko bidea bereizita kostatzen bada edo alde batera uzten bada.
- **Hutsegite-eskaria alde batera uztea**: digital hasten diren eta huts egiten duten transakzioek, hala ere telefono-dei bat edo paper-inprimaki bat sortuz, kanal digitalaren kostua dira, hutsegitea jasotzen duen kanalarena baino.
- **Kanalen artean konplexutasun desberdineko transakzioak alderatzea**: telefono-deiek neurriz gaineko kasu zailak kudeatzen dituzte (mendeko anitz, akats-zuzenketa, eskatzaile ahulak); batez besteko telefono-kostua batez besteko kostu digitalarekin alderatzeak ratioa gehiegi kalkulatzen du transakzio-nahasketa parekatzen ez bada.

## Iturriak

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
