# Vrednotenje po razkritih preferencah

Metode razkritih preferenc sklepajo o vrednosti netržnega dobrega iz opazljivega vedenja na sorodnem trgu, namesto da bi ljudi vprašale neposredno. Hedonično določanje cen in metoda potnih stroškov sta dve delovni konjici: obe izhajata iz resnične transakcije in izpeljeta implicitno ceno za stvar, ki se nikoli ni neposredno prodajala.

## Zakaj je pomembno

Medtem ko metode [izraženih preferenc](../vrednotenje-z-izraženimi-preferencami/) postavljajo hipotetično vprašanje, metode razkritih preferenc opazujejo, za kaj so ljudje dejansko plačali, kar Green Book obravnava kot praviloma bolj verodostojen dokaz, ceteris paribus, ker ni podvržen hipotetični pristranskosti – udeleženci hedonične študije cen hiš so dejansko plačali premijo ali popust, ki se meri (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedonično določanje cen razčleni tržno ceno – običajno cene hiš – na implicitne cene za vsako lastnost dobrine, kar analitikom omogoča, da izolirajo, denimo, premijo, ki jo gospodinjstva dejansko plačajo za bivanje na mirnejšem mestu ali z boljšo kakovostjo zraka, ob statističnem nadzoru vseh drugih lastnosti, ki prav tako vplivajo na ceno hiše (velikost, lokacija, šolski okoliš). Metoda potnih stroškov naredi analogno stvar za rekreacijske lokacije brez vstopnine: čas in denar, ki ga ljudje porabijo za pot do lokacije, razkrije spodnjo mejo tega, koliko jim lokacija pomeni, ker nihče ne nosi stroška, ki presega vrednost obiska zanj.

Obe metodi imata skupno strukturno omejitev: vrednotita lahko le tisto, kar je vsebovano v obstoječi tržni transakciji. Hrup ob vzletni stezi se pokaže v cenah hiš, ker se ljudje, ki jih hrup skrbi, razvrstijo v mirnejša bivališča; eksistenčna vrednost vrste, ki je nihče ne obišče ali ob njej ne živi, se ne pokaže v nobeni transakciji, kar je natanko vrzel, ki jo zapolnjujejo metode [izraženih preferenc](../vrednotenje-z-izraženimi-preferencami/).

## Matematika

```
Hedonično določanje cen:
  Cena hiše = f(strukturne lastnosti, lokacijske lastnosti,
                 okoljska lastnost, ki nas zanima, ...)
  Ocenite z regresijo; koeficient pri okoljski lastnosti
  (ob nespremenjenih drugih) je njena implicitna cena.

  Implicitna cena lastnosti X = ∂(cena hiše) / ∂X

Metoda potnih stroškov:
  Stopnja obiskov (obiski na prebivalca iz cone i) = f(potni stroški iz cone i,
                 nadomestne lokacije, družbenoekonomski kontrolniki)
  Ocenite krivuljo povpraševanja po obiskih kot funkcijo potnih stroškov.
  Presežek potrošnika = površina pod ocenjeno krivuljo povpraševanja
                      = vrednost lokacije za obiskovalce
```

Obe metodi zahtevata statistično zdrav nabor kontrol – izpustitev zmotnega dejavnika (hedonično) ali bližnje nadomestne lokacije (potni stroški) pristransko vpliva na implicitno ceno v smeri, ki ni vedno vnaprej očitna, zato Green Book Annex 2 zahteva, da se poročata specifikacija regresije in kontrole, ne le naslovni koeficient.

## Praktični primer

**Državna vlada**: metodologija sence cene ogljika v Green Booku se deloma opira na hedonične dokaze, a enostavnejši ilustrativni primer je letalski hrup. Hedonična študija, ki regresira prodajne cene hiš na območju letalske poti glede na z razdaljo utežene izpostavljenosti hrupu, ob kontroli velikosti, starosti in šolskega okoliša, ugotovi, da je vsako povečanje povprečne izpostavljenosti hrupu za 1 decibel povezano z 0,5-odstotnim znižanjem cene hiše. Za tipično hišo v prizadetem območju v vrednosti £280.000:

```
Implicitna cena na decibel = £280.000 × 0,5 % = £1.400 na gospodinjstvo
Gospodinjstva, prizadeta zaradi povečanja za 3 dB zaradi nove vzletne steze = 18.000
Skupni implicitni strošek povečanja hrupa = £1.400 × 3 × 18.000 = £75,6 mio
```

To je enkraten kapitaliziran strošek (vsebovan v ceni hiše), pri katerem mora vrednotenje paziti, da ga ne šteje dvojno ob ločeno ocenjenem toku letnih stroškov motenj zaradi hrupa.

**Dobrodelna organizacija**: okoljska dobrodelna organizacija uporabi metodo potnih stroškov za vrednotenje naravnega rezervata brez vstopnine. Podatki raziskave o poštnih številkah obiskovalcev dajo povprečni strošek povratne poti (čas, vrednoten po vrednosti časa zunaj dela, ki jo priporoča Green Book, plus gorivo) £14 na obisk, pri 40.000 obiskih letno. Ocenjena krivulja povpraševanja – stopnje obiskov, ki padajo z naraščanjem potnih stroškov iz cone – implicira presežek potrošnika na obisk, nad dejansko porabljenimi £14, približno £9.

```
Skupna letna vrednost = 40.000 obiskov × (£14 porabljeno + £9 presežka potrošnika)
                      = 40.000 × £23 ≈ £920.000/leto
```

To močno presega ničelni prihodek rezervata iz vstopnine in skrbnikom dobrodelne organizacije da zagovorljivo številko rekreacijske vrednosti lokacije pri prepričevanju financerjev.

## Povezava s programskim inženirstvom

Razmišljanje o razkritih preferencah se v izdelčni analitiki javnega sektorja pojavlja pogosteje, kot se izvajalci zavedajo: podatki o uporabi brezplačne vladne digitalne storitve so sami dokaz o vrednosti iz razkritih preferenc (pogostost, dolžino sej in – najbolj povedno – vzorce ponovne in enkratne uporabe je mogoče analizirati na enak način, kot metoda potnih stroškov obravnava pogostost obiskov glede na razdaljo). Kjer ima storitev resnične nadomestke (papirni kanal, telefonska linija), je mogoče »strošek«, ki ga državljani nosijo za uporabo digitalnega kanala namesto njih (čas, podatki, naprava), oceniti in primerjati z uporabo, kar neposredno odmeva logiko potnih stroškov. Glej [standard digitalnih storitev](../standard-digitalnih-storitev/) in [vrednost odprtih podatkov](../vrednost-odprtih-podatkov/), ki se sooča s prav tem problemom vrednotenja za dobrino brez neposredne tržne cene.

## Pasti

- **Pristranskost zaradi izpuščene spremenljivke v hedoničnih modelih.** Izpustitev korelirane lastnosti (kakovost šol, ki korelira tako s ceno hiše kot z zanimivo okoljsko spremenljivko) pristransko vpliva na oceno implicitne cene; specifikacijo je treba poročati in preverjati, ne le rezultata.
- **Zanemarjanje nadomestnih lokacij v študijah potnih stroškov.** Razkrita vrednost obiskovalca za lokacijo je podcenjena, če obstaja bližja nadomestna lokacija, ki ni kontrolirana – morda obiskujejo predvsem zato, ker je brezplačna, ne ker je edinstveno vredna.
- **Uporaba razkritih preferenc za dobrino brez kakršnega koli tržnega odmeva.** Eksistenčna vrednost, opcijska vrednost in zapuščinska vrednost se ne pokažejo v nobeni transakciji in jih hedonične metode ali metode potnih stroškov ne morejo povrniti – ta vrzel pripada [vrednotenju po izraženih preferencah](../vrednotenje-z-izraženimi-preferencami/).
- **Mešanje kapitalizirane (enkratne) vrednosti z letnim tokom.** Hedonični učinki na cene hiš so običajno enkratne kapitalizirane vrednosti; obravnava kot tok letnih koristi napihne vrednotenje.

## Viri

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
