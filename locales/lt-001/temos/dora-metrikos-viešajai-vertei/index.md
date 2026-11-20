# DORA metrikos viešajai vertei

DORA (DevOps Research and Assessment) metrikos: diegimo dažnis, pakeitimų įgyvendinimo trukmė, pakeitimų nesėkmių lygis ir paslaugos atkūrimo laikas, o kaip penktoji dar ir patikimumas, yra programinės įrangos pramonės labiausiai patvirtinti teikimo našumo etalonai. Išversti į viešojo sektoriaus atskaitomybės kalbą, kiekviena jų yra tiesioginis rodiklis, kaip greitai ir kaip saugiai viešoji vertė pasiekia pilietį.

## Kodėl tai svarbu

Dešimtmetį trunkantys DORA tyrimai, kasmet skelbiami kaip *Accelerate State of DevOps Report* (Forsgren, Humble ir Kim metodika, dabar vykdoma Google Cloud), suskirsto komandas į elito, aukšto, vidutinio ir žemo našumo grupes. Elito komandos diegia pagal poreikį, nuo įsipareigojimo (angl. commit) iki produkcijos užtrunka mažiau nei dieną, nesėkmingai baigia maždaug 5 % pakeitimų ir atsigauna per mažiau nei valandą; žemo našumo komandos diegia kartą per mėnesį ar rečiau, užtrunka mėnesius, nesėkmingai baigia apie 40 % pakeitimų ir atsigauna per savaites. Vyriausybėje tai nėra inžinerijos tuštybės metrikos: Government Digital Service paslaugų standartas reikalauja, kad komandos „dažnai kartotų ir tobulintų“ ir sugebėtų greitai reaguoti į naudotojų poreikį, o departamentai, negalintys diegti saugiai ir dažnai, struktūriškai nepajėgūs atitikti šio standarto, ką bepasakytų jų naudotojų tyrimai. Paties Cabinet Office skaitmeninio veiksmingumo darbas nustatė, kad pilietį iš nepavykusios ar lėtos skaitmeninės transakcijos nukreipti į telefono ar popieriaus kanalą yra brangu: 2012 m. GDS Digital Efficiency Report įvertino, kad kai kurios skaitmeninės transakcijos kainuoja vos 20 pensų, palyginti su telefono ar tiesioginio kontakto kaštais iki 8,62 £, todėl visuomenei skirtos paslaugos pakeitimų nesėkmė kainuoja ne tik inžinerijos laiką, bet ir perkelia realius svarus į kontaktų centro biudžetą (žr. [kanalų perkėlimo sutaupymai](../kanalų-perkėlimo-sutaupymai/)).

## Matematika

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

Viešosios vertės vertimas:

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0.99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## Pavyzdys su skaičiavimais

Vietos valdžios išmokų prašymų portalo komanda prieš teikimo inžinerijos investiciją ir po jos:

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

Komanda per metus pateikia apie 25 patobulinimus, kurių vidutinė vertė 8 000 £ per savaitę ([delsimo kaštai](../delsimo-kaina-viešosiose-programose/)). Sutrumpinus įgyvendinimo trukmę maždaug 7,3 savaitės, kiekvieno patobulinimo naudos srautas pritraukiamas į priekį: 25 × 7,3 × 8 000 ≈ **1 460 000 £ per metus** anksčiau pateiktos vertės. Dėl nesėkmių lygio: 25 × (0,30 − 0,10) = 5 mažiau nesėkmingų pakeitimų per metus; kiekvienas nesėkmingas pakeitimas viešame portale paprastai nukreipia, kaip vertinama, 2 000 piliečių į telefono kanalą po 8,62 £, o ne po 20 p, t. y. grynieji kaštai maždaug 8,42 × 2 000 ≈ 16 840 £ vienam incidentui, tad išvengus 5 incidentų sutaupoma ≈ **84 200 £ per metus**. Teikimo inžinerijos investicija įvertinama ta pačia valiuta kaip ir bet kuris kitas viešosios vertės pagrindimas.

## Skaičiavimo pavyzdys, tęsinys: patikimumas

Jei portalas veikia 97 %, o ne siekiamu 99,5 % prieinamumu, ir kiekvienas prastovos procentinis punktas modeliuojamas kaip 2 % prašymų, prarastų dėl atsisakymo, paslauga teikia maždaug 0,975 savo modeliuojamos 2 mln. £ per metus naudos, t. y. 50 000 £ per metus naudos nuolaida, kurios gryna veikimo laiko (angl. uptime) skydelis niekada neparodo.

## Ryšys su programine inžinerija

DORA metrikos yra viešosios paslaugos veiklos metrikos kitais drabužiais: įgyvendinimo trukmė atitinka [paslaugų standartus ir transakcijų metrikas](../paslaugų-standartai-ir-sandorių-metrikos/); pakeitimų nesėkmių lygis atitinka pakartotinio darbo ir skundų lygius; MTTR atitinka tai, kiek laiko įstatymu numatyta paslauga nepasiekiama pareiškėjams. Tobulinimo metodai perduodami abiem kryptimis, nes abu yra eilių sistemos, veikiančios atskaitomybės apribojimų sąlygomis; pagrindinę eilių matematiką žr. [srauto metrikos vyriausybės teikime](../srauto-metrikos-vyriausybės-teikime/). Atkreipkite dėmesį ir į 2025 m. DORA išvadą, kad DI diegimas koreliuoja su didesniu pralaidumu, bet *prastesniu* stabilumu: intervencija ir su veiksmingumu, ir su šalutiniu poveikiu, būtent tokią grynosios naudos analizę nagrinėja šios grupės tema [DI produktyvumas viešajame sektoriuje](../di-produktyvumas-viešajame-sektoriuje/).

## Dažniausios klaidos

- **Metrikų manipuliavimas**: diegimų skaičiaus pučiamas tuščiais išleidimais arba skubių pataisų neįtraukimas į pakeitimų nesėkmių skaičių. Apibrėžkite įvykius taip tiksliai, kaip įstatymu numatytas paslaugų standartas apibrėžia „sėkmingą transakciją“.
- **Tarpdepartamentinės lyderių lentelės**: DORA grupės lygina teikimo praktikas, o ne paslaugas su skirtingais rizikos profiliais; mokesčių mokėjimo sistema, įvertinta „aukšta“, gali būti tinkama laikysena, kai „elito“ lygis būtų neatsakingas dėl užtikrinimo reikalavimų.
- **Vienos metrikos optimizavimas atskirai**: greitis be pakeitimų nesėkmių lygio yra klasikinis pralaidumo ir nestabilumo kompromisas; pateikite visas keturias kartu, o ne kaip vieną įvertį.

## Šaltiniai

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
