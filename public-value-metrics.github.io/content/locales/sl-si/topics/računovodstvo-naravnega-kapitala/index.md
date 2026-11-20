# Računovodstvo naravnega kapitala

Računovodstvo naravnega kapitala postavlja okolje na enako raven kot vsako drugo nacionalno ali organizacijsko sredstvo: meri zalogo naravnih virov (gozdovi, tla, reke, mokrišča, ozračje) in tok storitev, ki jih ustvarjajo (shranjevanje ogljika, zaščita pred poplavami, rekreacija, hrana), tako v fizičnih kot denarnih enotah, tako da se izčrpavanje okolja v odločanju pokaže, kot bi se izčrpavanje finančnega kapitala. Združeno kraljestvo je ena najbolj naprednih vlad pri sistematičnem izvajanju tega, spodbuja ga 25-letni okoljski načrt (25 Year Environment Plan, 2018), uresničuje pa se prek računov naravnega kapitala Združenega kraljestva, ki jih pripravlja britanski statistični urad ONS, in dopolnilnih smernic Green Book britanskega finančnega ministrstva (HM Treasury).

## Zakaj je pomembno

Običajno računovodstvo – podjetniško in državno – obravnava gozd kot brez vrednosti, dokler ni posekan in prodan kot les, ko postane BDP. Računovodstvo naravnega kapitala obstaja, da ta vrzel zapre: 25-letni okoljski načrt Združenega kraljestva je zavezal vlado, da naravni kapital vgradi v vse politike, in izrecno navaja ambicijo, da bi bili »prva generacija, ki bo okolje pustila v boljšem stanju, kot smo ga našli«. ONS je od takrat objavil letne račune naravnega kapitala Združenega kraljestva (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), ki ocenjujejo denarno vrednost ekosistemskih storitev – od rekreacije v gozdu do zdravstvenih koristi urbanih zelenih površin in shranjevanja ogljika v šotiščih – z istim okvirom nacionalnih računov, ki se uporablja za proizvedeni kapital, tako da bo naravni kapital sčasoma lahko stal v isti bilanci kot ceste, stavbe in oprema. Smernice HM Treasury Enabling a Natural Capital Approach (ENCA), dopolnilo k Green Booku (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), določajo, kako naj ocenjevalci vrednotijo okoljske stroške in koristi v poslovnih primerih, tako da je mogoče cestni projekt, ki uniči starodavni gozd, in protipoplavni projekt, ki obnovi mokrišče, primerjati v dosledni denarni obliki, namesto da ima eden številko, drugi pa odstavek pridržkov.

## Matematika

```
Vrednost sredstva ekosistemske storitve = NSV toka storitev, ki jih sredstvo zagotavlja

Vrednost sredstva = Σ (t = 1 do T) [vrednost letnega toka storitev_t / (1 + r)^t]

kjer je:
  vrednost toka storitev_t = količina storitve v letu t × enotna vrednost
                          (npr. rekreacijski obiski × vrednost na obisk;
                           tone shranjenega ogljika × cena ogljika)
  r = diskontna stopnja (družbena diskontna stopnja po Green Booku – glej
      [družbena diskontna stopnja](../družbena-diskontna-stopnja/))
  T = časovno obzorje, v katerem naj bi sredstvo zagotavljalo storitev
```

To je ista struktura neto sedanje vrednosti (NSV), ki se uporablja za vrednotenje proizvedenega kapitala ali presojo vsake javne naložbe po [presoji po Green Booku](../ocena-po-green-booku/) – prispevek računovodstva naravnega kapitala je zagotavljanje verodostojnih fizičnih količin in enotnih vrednosti za storitve, ki so bile prej ovrednotene z ničlo.

## Praktični primer

**Mestni gozd, rekreacijska vrednost**: 50-hektarski gozd letno sprejme ocenjenih 80.000 rekreacijskih obiskov, vsak ovrednoten (z metodo potnih stroškov ali metodo izražene preference – glej [vrednotenje po razkritih preferencah](../vrednotenje-po-razkritih-preferencah/) in [vrednotenje po izraženih preferencah](../vrednotenje-z-izraženimi-preferencami/)) na £3 na obisk. Pričakuje se, da bo gozd to storitev zagotavljal 50 let, vrednoteno pri 3,5-odstotni diskontni stopnji.

```
Letna rekreacijska vrednost = 80.000 × £3 = £240.000/leto

NSV za 50 let pri 3,5 % ≈ £240.000 × rentni faktor (3,5 %, 50 let)
rentni faktor (3,5 %, 50) ≈ 21,4

Vrednost sredstva ≈ £240.000 × 21,4 ≈ £5.136.000
```

**Dodajanje shranjevanja ogljika**: isti gozd shrani ocenjenih 400 ton CO2 letno, ovrednotenih po vladni ceni ogljika za netrgovane emisije približno £75/tono (zgolj ilustrativno – za dejansko presojo uporabite aktualne objavljene vrednosti ogljika BEIS/DESNZ).

```
Letna vrednost ogljika = 400 × £75 = £30.000/leto
NSV za 50 let pri 3,5 % ≈ £30.000 × 21,4 ≈ £642.000

Skupna vrednost sredstva gozda (rekreacija + ogljik) ≈ £5.136.000 + £642.000
                                                      ≈ £5.778.000
```

To je pred dodajanjem zadrževanja poplavnih voda, biotske raznovrstnosti ali storitev kakovosti zraka, ki jih smernice ENCA prav tako prosijo ocenjevalce upoštevati – skupna vrednost je namenoma spodnja, ne zgornja meja.

## Povezava s programskim inženirstvom

- Okoljski sistemi in sistemi za upravljanje sredstev lokalnih oblasti in agencij (parki, ceste, vodna telesa) lahko poleg fizičnega registra sredstev vzdržujejo register naravnega kapitala, pri čemer uporabijo isti vzorec toka storitev krat enotna vrednost kot pri vsaki drugi [zbirki enotnih stroškov](../zbirke-enotnih-stroškov/), ki jo organizacija vzdržuje.
- Ker je NSV naravnega kapitala občutljiva na diskontno stopnjo (glej rentni faktor v izdelanem primeru), mora vsako orodje, ki jo izračunava, stopnjo in obzorje prikazati kot vidna vhodna podatka in ju ne skriti – isto načelo preglednosti je obravnavano pri [medgeneracijski pravičnosti in diskontiranju za trajnost](../medgeneracijska-pravičnost-in-diskontiranje-trajnosti/).
- Računi naravnega kapitala so vse pogosteje obvezen vložek v okoljske razdelke poslovnega primera po [presoji po Green Booku](../ocena-po-green-booku/); izvedbena ekipa, ki gradi orodja za poslovne primere, naj račune ONS in enotne vrednosti ENCA obravnava kot referenčne podatke, ki jih je treba vključiti, in ne kot nekaj, kar bi ocenjevalci vsakič izračunali znova.

## Pasti

- **Dvojno štetje prekrivajočih se ekosistemskih storitev** – rekreacijska vrednost in vrednost biotske raznovrstnosti za isto lokacijo si lahko delita podlagne podatke o pripravljenosti plačati; smernice ENCA izrecno opozarjajo pred seštevanjem vrednotenj, izpeljanih iz prekrivajočih se anketnih instrumentov.
- **Obravnava vrednosti sredstva naravnega kapitala kot statične** – tokovi storitev se spreminjajo podnebnimi spremembami, upravljanjem in pritiski rabe zemljišč; vrednost ogljika in zadrževanja poplav v gozdu v tem desetletju ni stalna lastnost lokacije.
- **Uporaba nacionalnih povprečnih enotnih vrednosti za zelo lokalno odločitev** – hektar dostopnega mestnega gozda in hektar odročne planote imata zelo različno rekreacijsko vrednost; smernice ENCA priporočajo lokalne ali za lokacijo specifične vrednosti, kjer so na voljo, namesto privzetih nacionalnih povprečij.

## Viri

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
