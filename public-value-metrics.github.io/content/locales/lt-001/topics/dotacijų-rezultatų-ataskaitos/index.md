# Dotacijų rezultatų ataskaitos (IRIS+)

Dotacijų rezultatų ataskaitos yra praktika, kai dotacijų gavėjai teikia finansuotojams standartizuotas, palyginamas rezultatų metrikas, o ne kiekvienas finansuotojas kuria savo individualų ataskaitos šabloną. IRIS+, kurį prižiūri Global Impact Investing Network (GIIN), yra plačiausiai pritaikytas toks standartas: iš anksto apibrėžtų socialinių, aplinkosauginių ir finansinių veiklos metrikų katalogas, kurį poveikio investuotojai ir vis dažniau dotacijas teikiantys fondai reikalauja arba rekomenduoja naudoti dotacijų gavėjams.

## Kodėl tai svarbu

Prieš standartizuotas ataskaitas kiekvienas fondas prašė dotacijų gavėjų skirtingo rodiklių rinkinio skirtingu formatu, o vidutinio dydžio labdaros organizacija su dešimčia finansuotojų galėjo vykdyti dešimt lygiagrečių ataskaitų procesų persidengiančiam darbui: gerai dokumentuota ataskaitų naštos priežastis, kurią dotacijų rezultatų standartizavimas ir siekia sumažinti. IRIS+ tai sprendžia suteikdamas finansuotojams ir dotacijų gavėjams bendrą žodyną: pagrindinių metrikų rinkiniai (angl. Core Metrics Sets), sugrupuoti pagal temą (pvz., įperkamas būstas, prieiga prie švarios energijos, finansinė įtrauktis), kiekviena metrika apibrėžta pakankamai tiksliai, kad „sukurtos darbo vietos“ ar „aptarnauti namų ūkiai“ reikštų tą patį, kas bepateiktų, ir suderinta su JT Darnaus vystymosi tikslais, kad finansuotojas galėtų dotacijų gavėjo lygio duomenis sutraukti į portfelio lygio DVT pasakojimą. GIIN praneša, kad IRIS metrikas naudoja maždaug pusė poveikio investuotojų ir didžioji dauguma šioje srityje veikiančių fondų valdytojų, bankų ir vystymosi finansų institucijų.

Standartizavimas svarbiausias ten, kur jis sąveikauja su [rezultatais ir produktais](../rezultatai-ir-produktai/): IRIS+ stumia ataskaitas link apibrėžtų rezultato ir poveikio metrikų, o ne to, ką tik dotacijų gavėjo esama bylų valdymo sistema užregistruoja, o tai yra būtent ta spraga, kurią aprašo [kaštai vienam rezultatui](../kaštai-vienam-rezultatui/) ir [kaštai vienam gavėjui](../kaštai-vienam-naudos-gavėjui/).

## Matematika

Dotacijų rezultatų ataskaitos yra sistema ir procesas, o ne formulė:

```
1. Funder selects a Core Metrics Set relevant to the grant's theme
   (e.g. IRIS+ "Financial Inclusion" or "Sustainable Agriculture")
2. Each metric has a fixed definition, unit, and calculation method
   published by GIIN — not invented per-funder
3. Grantee reports against the same metric definitions across all
   its funders using that standard, cutting duplicate reporting effort
4. Funder aggregates grantee-level metrics into portfolio-level reporting,
   comparable year over year and across grantees using the same metric
```

Efektyvumo prieaugis yra kombinatorinis: N finansuotojų × M dotacijų gavėjų standartizavimas į vieną bendrą žodyną N×M individualių ataskaitų santykių paverčia maždaug N+M susiejimų su vienu standartu.

## Pavyzdys su skaičiavimais

**Dotacijų gavėjas su trimis finansuotojais, prieš standartizavimą**: 1 finansuotojui praneša „aptarnauti žmonės“ pagal galvų skaičiaus apibrėžimą, 2 finansuotojui „pasiekti gavėjai“ pagal namų ūkių apibrėžimą, o 3 finansuotojui „paveikti asmenys“ pagal paslaugos epizodo apibrėžimą (taigi vienas du kartus apsilankęs asmuo skaičiuojamas du kartus). Trys ataskaitos, trys skaičiai, nė vienas nepalyginamas, ir nė vienas nepalyginamas su kito dotacijų gavėjo skaičiais net to paties finansuotojo portfelyje.

**Tas pats dotacijų gavėjas pagal IRIS+**: praneša pagal apibrėžtą IRIS+ pasiektų asmenų metriką kartu su apibrėžta rezultato metrika iš atitinkamo pagrindinių metrikų rinkinio, abiem naudodamas GIIN paskelbtą skaičiavimo metodiką. Visi trys finansuotojai dabar gauna tą patį skaičių, apskaičiuotą tuo pačiu būdu, ir gali palyginti šio dotacijų gavėjo kaštus vienam IRIS+ apibrėžtam vienetui su kitais savo portfelio dotacijų gavėjais pagal tą pačią metriką, o tai ataskaitų infrastruktūros mastu atitinka bendros [vienetinių kaštų duomenų bazės](../vieneto-kaštų-duomenų-bazės/) turėjimą.

## Ryšys su programine inžinerija

Dotacijų valdymo platformos turėtų traktuoti IRIS+ metrikų identifikatorius kaip išorinį raktą (angl. foreign key), o ne laisvą tekstą: paskelbto metrikos kodo saugojimas šalia dotacijų gavėjo pateiktos vertės (o ne vietoje savos išrastos srities, pavadintos „beneficiaries“) leidžia vėliau atlikti agregavimą tarp finansuotojų ir portfelių be duomenų valymo projekto. Kai platforma turi palaikyti finansuotojus, kurie nepriėmė IRIS+, pragmatiškas dizainas yra leisti vietinę metriką susieti su artimiausiu IRIS+ apibrėžimu, o ne priversti kiekvieną finansuotoją iš karto pereiti prie standarto: palyginamumas gerėja palaipsniui, kai vis daugiau grafo susiejama su bendrais identifikatoriais. Ką surinkus pateiktus skaičius reikėtų apskaičiuoti, žr. giminingą temą [kaštai vienam rezultatui](../kaštai-vienam-rezultatui/).

## Dažniausios klaidos

- **IRIS+ pritaikymo laikymas automatišku palyginamumu.** Du dotacijų gavėjai gali abu teikti pagal tą pačią IRIS+ metriką ir vis tiek būti nepalyginami, jei skiriasi jų duomenų kokybė ar kontrafaktinės prielaidos; standartas nustato apibrėžimus, o ne matavimo griežtumą.
- **Finansuotojo išrastos „IRIS suderintos“ metrikos.** Metrika, kuri tik įkvėpta IRIS+ kalbos, bet nėra tikrasis paskelbtas apibrėžimas, vėl įveda susiskaidymą, kurį standartas turėjo išspręsti.
- **Ataskaitų nuovargis dėl per didelio pasirinkimo.** Reikalauti, kad dotacijų gavėjas teiktų ataskaitas pagal visą pagrindinių metrikų rinkinį, kai sprendimui svarbios tik dvi ar trys metrikos, atkuria naštos problemą standartizuotame apvalkale.
- **Jokios rezultato metrikos.** IRIS+ apima daug gryno produkto metrikų (pvz., aptarnautų žmonių skaičius); pasirinkus tik jas ir nė vienos rezultato lygio metrikos, gaunamos [kaštų vienam gavėjui](../kaštai-vienam-naudos-gavėjui/) pobūdžio ataskaitos po rezultatų ataskaitų etikete.

## Šaltiniai

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
