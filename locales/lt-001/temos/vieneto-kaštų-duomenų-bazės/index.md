# Vieneto kaštų duomenų bazės

Vieneto kaštų duomenų bazė – tai iš anksto ištirtų, įrodymais pagrįstų finansinių socialinių rezultatų pakaitalų biblioteka – perėjimo iš nedarbo į darbą vertės, sumažėjusios vienatvės vertės, stabilios nuomos vertės – leidžianti praktikui rezultatą išreikšti pinigais, nepasamdant atskiro vertinimo tyrimo kiekvienąkart. Jos egzistuoja tam, kad maža labdaros organizacija, rašanti finansavimo paraišką, galėtų taikyti tokį patį griežtumą kaip gerai aprūpinta konsultacijų įmonė, pakartotinai panaudodama pakaitalą, kurį kažkas kitas jau išvedė ir paskelbė.

## Kodėl tai svarbu

HACT „UK Social Value Bank“, sukurtas su ekonomistu Danieliu Fujiwara naudojant gerovės vertinimo metodus, ir Global Value Exchange – atvira, bendruomenės pildoma finansinių pakaitalų duomenų bazė – yra dvi plačiausiai JK trečiajame ir viešajame sektoriuose naudojamos. Abi egzistuoja todėl, kad pagrindinis vertinimo darbas – [gerovės vertinimas](../gerovės-vertinimas/) ir [deklaruotų pirmenybių vertinimas](../deklaruotų-pirmenybių-vertinimas/) – yra brangus, metodologiškai reiklus ir lėtas, jei jį atlikti iš naujo kiekvienam projektui. Bendra, paskelbta pakaitalų biblioteka paverčia kelių mėnesių tyrimą paieška, ir būtent todėl jos svarbios tiek [socialinės investicijų grąžos](../socialinė-investicijų-grąža/) skaičiavimams, tiek [Socialinės vertės akto](../socialinės-vertės-aktas/) pasiūlymų vertinimui: be jų griežtas išraiškos pinigais atlikimas būtų įperkamas tik pakankamai didelėms organizacijoms, galinčioms užsakyti savo tyrimus.

## Matematika

Vieneto kaštų duomenų bazė pati nieko neskaičiuoja; ji pateikia vieną įvestį skaičiavimui, atliekamam kitur:

```
Finansinio pakaitalo vertė = rinkos kaina, ARBA šešėlinė kaina, ARBA gerovės vertinimas,
                         ARBA deklaruotų pirmenybių vertė
                         apibrėžtam rezultato pokyčio vienetui
                         (pvz., „vienam asmeniui, perėjusiam iš nedarbo į darbą, per metus“)

Taikoma vertė = pasiektų rezultatų skaičius × vieneto pakaitalo vertė
```

Žr. [šešėlinės kainos](../šešėlinės-kainos/) – kaip sukonstruojamas pakaitalas, kai rinkos kainos nėra, ir [socialinė investicijų grąža](../socialinė-investicijų-grąža/) – kaip taikoma vertė vėliau patenka į santykį po tuščiojo poveikio ir priskyrimo korekcijų.

## Pavyzdys su skaičiavimais

**Labdara (draugystės paslaugos SROI)**: vieneto kaštų duomenų bazės įrašas „sumažėjusi vienatvė“ duoda iliustracinį pakaitalą £1 100 vienam asmeniui per metus. Pritaikius 80 naudos gavėjų: 80 × £1 100 = £88 000 bendroji vertė. Jei toje pačioje duomenų bazėje yra ir „pagerėjusios psichinės gerovės“ pakaitalas, remiantis iš dalies sutampančiu gerovės apklausos punktu, abiejų pakaitalų sudėjimas tiems patiems 80 žmonių dalį to paties pokyčio suskaičiuotų dukart – duomenų bazė pateikia skaičių, bet šios dubliavimosi išvengti yra analitiko atsakomybė.

**Vietos valdžia (darbo klubo SROI)**: vieneto kaštų duomenų bazės įrašas „perėjimas iš nedarbo į pastovų darbą“ pritaikomas 45 dalyviams su iliustraciniu pakaitalu £8 500 vienam asmeniui per metus: 45 × £8 500 = £382 500 bendroji vertė, prieš tuščiojo poveikio ir priskyrimo korekcijas, parodytas [socialinės investicijų grąžos](../socialinė-investicijų-grąža/) temoje.

## Ryšys su programine inžinerija

Komandoms, kuriančioms ataskaitų įrankius labdaros organizacijoms ar užsakovams, naudingas vidinis „rezultatų katalogas“ – lentelė, susiejanti kiekvieną rezultatą, kurį produktas ar paslauga gali pagrįstai deklaruoti, su įvardytu pakaitalu, jo šaltinio duomenų baze, paskelbimo data ir versijos identifikatoriumi – kad skirtingos organizacijos komandos nepasirinktų šiek tiek skirtingų verčių tam pačiam rezultatui. Global Value Exchange atvirų duomenų apgaubimas paieškos paslauga, visada rodant šaltinį ir datą šalia skaičiaus, išlaiko pakaitalą audituojamą, o ne stebuklingu skaičiumi, paslėptu skaičiuoklėje. Žr. [socialinė investicijų grąža](../socialinė-investicijų-grąža/) ir [socialinės vertės aktas](../socialinės-vertės-aktas/) – dvi pagrindines vietas, kur šie pakaitalai naudojami.

## Dažniausios klaidos

- **Pakaitalų laikymas tikslių.** Dauguma paskelbtų pakaitalų yra modeliuoti vidurkiai iš gerovės vertinimo tyrimų su plačiais pasikliautinaisiais intervalais; nurodyti vieną iki svaro tikslumu reiškia perdėti tikslumą, kurį palaiko pagrindinis tyrimas.
- **Persidengiančių pakaitalų dvigubas skaičiavimas.** Derinant pakaitalus (pvz., „sumažėjusi vienatvė“ ir „pagerėjusi psichinė gerovė“), išvestus iš persidengiančių apklausos konstruktų, tas pats pokytis įvertinamas du kartus.
- **Konteksto neatitinkančio pakaitalo naudojimas be korekcijos.** Pakaitalas, sukalibruotas vienos šalies populiacijai ir metams, pritaikytas kitur be infliacijos ar konteksto korekcijos, tyliai iškreipia vertę.
- **Kilmės netikrinimas.** Global Value Exchange yra atvira ir bendruomenės pildoma, todėl įrašų kokybė priklauso nuo prisidėjusio asmens; prieš cituodami skaičių finansavimo paraiškoje ar pirkimo pasiūlyme, patikrinkite pagrindinį šaltinį.

## Šaltiniai

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
