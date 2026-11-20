# Gerovės vertinimas (WELLBY)

Gerovės vertinimas politikos poveikį įkainoja tiesiogiai pasitenkinimo gyvenimu terminais, naudodamas WELLBY (gerovės pakoreguotus gyvenimo metus) kaip savo vienetą – vienas WELLBY lygus vieno balo pokyčiui 0–10 pasitenkinimo gyvenimu skalėje, išlaikytam vienerius metus. Tai oficialiai HM Treasury patvirtinta alternatyva kiekvienos naudos išraiškai pinigais per pasirengimą mokėti.

## Kodėl tai svarbu

HM Treasury „Wellbeing guidance for appraisal: supplementary Green Book guidance“ (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
formaliai įtraukė subjektyvios gerovės duomenis į centrinės valdžios vertinimą, suteikdama analitikams būdą įvertinti rezultatus – socialinį ryšį, psichikos sveikatą, saugumą, pilietinį dalyvavimą – kuriuos [deklaruotų pirmenybių](../deklaruotų-pirmenybių-vertinimas/) ir [atskleistų pirmenybių](../atskleistų-pirmenybių-vertinimas/) metodai sunkiai įkainoja įtikinamai, nes žmonės dažnai prastai prognozuoja, kiek gėris iš tikrųjų paveiks jų pasitenkinimą gyvenimu. Gairės, parengtos kartu su What Works Centre for Wellbeing, nustato rekomenduojamą piniginę vertę už WELLBY – £13 000 (2021 m. kainomis, periodiškai peržiūrima) – išvestą iš didelėse gerovės apklausose (daugiausia ONS Annual Population Survey, kurioje nuo 2011 m. užduodami keturi ONS4 gerovės klausimai) stebimo pajamų ir pasitenkinimo gyvenimu ryšio, suteikdamos analitikams konversijos kursą atgal į svarus, kai reikia pinigais išreikšto palyginimo su kitais Green Book vertinimais.

Metodas svarbus, nes jis apverčia įprastą vertinimo logiką: užuot klausęs, kiek žmonės mokėtų už rezultatą (deklaruojamieji pasirinkimai) ar išvedęs vertę iš susijusio rinkos sandorio (atskleistieji pasirinkimai), jis tiesiogiai matuoja rezultato poveikį deklaruojamam pasitenkinimui gyvenimu, apeidamas spragą tarp to, ko žmonės sako norintys, ir to, kas iš tikrųjų pagerina jų gyvenimą. Tai kartu yra ir pagrindinis jo apribojimas – savarankiškai pateikiamam pasitenkinimui gyvenimu daro įtaką prisitaikymo ir formuluotės efektai, kuriuos atidus praktikas turi kontroliuoti.

## Matematika

```
WELLBY = 1 pasitenkinimo gyvenimu balas (0–10 skalė), išlaikytas 1 žmogui 1 metus

Visi WELLBY iš politikos =
  Σ (pasitenkinimo gyvenimu balo pokytis) × (paveiktų žmonių skaičius)
    × (trukmė metais, diskontuota socialine diskonto norma)

Pinigais išreikšta vertė = Visi WELLBY × vertė už WELLBY
  (HM Treasury rekomenduojama vertė: £13 000 už WELLBY, 2021 m. kainomis,
   periodiškai peržiūrima – prieš naudodami patikrinkite dabartines gaires)
```

Tai skiriasi nuo sveikatos ekonomikos [gerovės pakoreguotų gyvenimo metų](../gerovės-pakoreguoti-gyvenimo-metai/), kurie paprastai remiasi su sveikata susijusios gyvenimo kokybės skalėmis (EQ-5D ir panašiomis), o ne bendru pasitenkinimu gyvenimu; abu susiję, bet nekeičiami vienas kitu, o Green Book vertinimuose reikia aiškiai nurodyti, kokia skalė ir išgavimo metodas yra pagrindinis pateikto WELLBY skaičiaus.

## Pavyzdys su skaičiavimais

**Vietos valdžia**: savivaldybė vykdo bendruomenės draugystės schemą izoliuotiems vyresnio amžiaus gyventojams, aptarnaujančią 400 žmonių. Prieš ir po vykdyta gerovės apklausa su ONS4 pasitenkinimo gyvenimu klausimu rodo, kad dalyvių vidutinis balas pakyla nuo 5,8 iki 6,5 – 0,7 balo prieaugis, išlaikytas visą programos 2 metų finansavimo trukmę.

```
Sukurti WELLBY = 400 žmonių × 0,7 balo × 2 metai = 560 WELLBY
Pinigais išreikšta vertė = 560 × £13 000 = £7,28 mln.
Programos kaštai = £450 000 per 2 metus

Naudos ir kaštų santykis ≈ £7,28 mln. / £0,45 mln. ≈ 16:1
```

Tokį aukštą santykį reikėtų tikrinti, o ne švęsti – Green Book gerovės gairės aiškiai perspėja nepriimti mažos imties savarankiškai pateiktų prieaugių už gryną pinigą netikrinus atrankos efektų (ar į schemą įstojo tik bendraujantys, labiausiai linkę gerėti gyventojai?) ir be lyginamosios grupės; gerai suprojektuotas vertinimas atimtų kontrafaktinį pokytį, stebimą nedalyvaujantiems, žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/).

**Nacionalinė valdžia**: dviejų užimtumo programų palyginimas naudojant WELLBY, o ne vien uždarbį, užfiksuoja, kad nedarbas turi gerovės kaštų, viršijančių prarastas pajamas – JK gerovės tyrimai nuosekliai nustato, kad nedarbas sumažina pasitenkinimą gyvenimu labiau, nei prognozuotų vien pajamų praradimas, dėl nepiniginių struktūros, tikslo ir socialinio kontakto praradimo efektų. Programa, vertinama vien pagal uždarbio prieaugį, nuvertintų savo vertę, palyginti su ta, kuri papildomai vertinama WELLBY.

## Ryšys su programine inžinerija

Gerovės vertinimas retai tiesiogiai pasiekia inžinerijos komandas, bet jis formuoja, kaip apibrėžiama „sėkmė“ socialinio sektoriaus ir viešųjų paslaugų produktams – skaitmeninė draugystės platforma, psichikos sveikatos atrankos įrankis ar bendruomenės platforma izoliuotiems gyventojams turėtų tikėtis, kad jos poveikis galiausiai bus matuojamas šiuo būdu, o tai reiškia, kad produkto analitika turi fiksuoti, *kas* pasiekiamas ir *kiek laiko*, o ne vien naudojimo skaičius. Įdiekite gerovės apklausos instrumentus (ONS4 ar patvirtintus atitikmenis) į paslaugos vertinimą nuo pat pradžių, o ne pridėkite atgaline data; gerovės bazinio lygio pritaikymas paslaugai jau pradėjus veikti visiškai praranda palyginimą prieš ir po. Žr. [rezultatai ir produktai](../rezultatai-ir-produktai/) ir [poveikio vertinimo metodai](../poveikio-vertinimo-metodai/).

## Dažniausios klaidos

- **Nėra kontrafaktinio scenarijaus ar lyginamosios grupės.** Gerovės prieaugis prieš ir po be kontrolės, kas būtų įvykę bet kuriuo atveju, pervertina programos poveikį; žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/) ir [papildomumas ir tuščiasis poveikis](../papildomumas-ir-tuščiasis-poveikis/).
- **Mažos, savarankiškai atrinktos imtys.** Gerovės apklausos programos dalyvių, kurie savo noru įstojo, yra linkusios į atrankos šališkumą – žmonės, kurie įstojo ir liko, tikėtina jau turėjo kylančią tendenciją.
- **£ už WELLBY konversijos laikymas tiksliu.** Pinigais išreikšta vertė yra politikos konvencija, išvesta iš pajamų ir gerovės regresijų, o ne rinkos kaina; naudokite ją Green Book vertinimų palyginamumui, o ne kaip teiginį, „kiek vertas“ gerovė.
- **WELLBY painiojimas su su sveikata susijusiais QALY.** Jie matuoja skirtingus konstruktus skirtingomis skalėmis; žr. [gerovės pakoreguoti gyvenimo metai](../gerovės-pakoreguoti-gyvenimo-metai/) – sveikatos ekonomikos variantą, ir nevidurkinkite jų kartu.

## Šaltiniai

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
