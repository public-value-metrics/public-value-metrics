# Metriky toku pri vládnej dodávke

Metriky toku (flow metrics), teda Littleov zákon, limity rozpracovanej práce (WIP) a efektívnosť toku, opisujú, ako rýchlo sa práca pohybuje systémom s obmedzenou kapacitou. Šprintová tabuľa je jedným takým systémom; front žiadostí o dávky, register stavebných povolení či nevybavené vízové prípady sú presne tá istá matematika v inej uniforme.

## Prečo na tom záleží

Agendy vo vláde sú systémy frontov a systémy frontov dodržiavajú zákony frontov, či už ich niekto meria, alebo nie. Zákonné lehoty na rozhodnutie to robia explicitným: podľa britského režimu územného plánovania (Town and Country Planning) má väčšina menších žiadostí o stavebné povolenie zákonný cieľ rozhodnutia do 8 týždňov a väčšie žiadosti do 13 týždňov, čo je záväzok doby cyklu zapísaný priamo do zákona. Nevybavené azylové prípady na Home Office, opakovane preverované National Audit Office a výborom Home Affairs Select Committee, sú dobre zdokumentovaným príkladom verejného systému, kde rozpracovaná práca dlhodobo rástla rýchlejšie než priepustnosť, čo vyhnalo doby cyklu ďaleko za akékoľvek zákonné či servisné očakávanie. Metriky toku dávajú inžinierom aj vedúcim vybavovateľov spoločnú kvantitatívnu slovnú zásobu pre presne tento druh zlyhania, namiesto kvalitatívneho „problému s nahromadenými prípadmi“.

## Matematika

```
Littleov zákon:  WIP = Priepustnosť × Doba cyklu
             →   Doba cyklu = WIP / Priepustnosť

Efektívnosť toku = aktívny (dotykový) čas / celková doba cyklu   (Vacanti)

Efekt limitu WIP: pri pevnej priepustnosti zníženie WIP na polovicu zhruba
zníži priemernú dobu cyklu na polovicu (Littleov zákon upravený) — páka
dostupná bez navyšovania počtu zamestnancov.
```

Ekvivalentnú matematiku aplikovanú na nasadzovacie pipeline softvéru namiesto vybavovania prípadov pozri v [metrikách DORA pre verejnú hodnotu](../metriky-dora-pre-verejnú-hodnotu/).

## Vypracovaný príklad

**Oddelenie územného plánovania miestneho úradu**: v každom okamihu je otvorených 400 žiadostí (WIP), tím vybaví 50 žiadostí týždenne (priepustnosť).

```
Doba cyklu = WIP / Priepustnosť = 400 / 50 = 8 týždňov
```

To pristane presne na zákonný cieľ 8 týždňov pre menšie žiadosti, bez akejkoľvek rezervy, čo znamená, že akákoľvek variabilita v prichádzajúcom dopyte alebo v dobe odpovede konzultovaných strán posunie rozhodnutia za zákonnú lehotu.

**Efektívnosť toku**: z týchto 8 týždňov (56 kalendárnych dní) pripadá na žiadosť typicky okolo 6 hodín skutočného spracovania vybavovateľom.

```
Efektívnosť toku = 6 hodín / (56 dní × 8 pracovných hodín/deň)
                 = 6 / 448 ≈ 1,3 %
```

Vacantiho referenčná hodnota pre softvérové tímy uvádza typickú efektívnosť toku 15 – 20 %; vládne vybavovanie prípadov s viacerými odovzdaniami zákonným konzultovaným stranám a oknami verejných konzultácií často beží o rádovo nižšie. Práve 98,7 % času „čakania“ je miesto, kde tie osem týždňov skutočne mizne, nie v kapacite vybavovateľov.

**Zásah limitom WIP**: obmedzenie počtu otvorených žiadostí na vybavovateľa na 15 namiesto neohraničených 25 (pri nezmenenej priepustnosti) posunie WIP zo 400 na zhruba 240 v 16-člennom tíme:

```
Nová doba cyklu = 240 / 50 = 4,8 týždňa
```

Takmer polovičná doba cyklu vďaka zmene pravidiel, nie navýšeniu personálu: tá istá páka, ktorú používajú dodávkové tímy v štýle DORA, keď obmedzujú WIP šprintu.

## Súvislosť so softvérovým inžinierstvom

Metriky toku sú spoločným jazykom medzi kanbanovou tabuľou dodávkového tímu a pracoviskom vybavovateľov, pre ktoré sa softvér stavia: front vybavovateľa a front pull requestov sa riadia Littleovým zákonom a oba prekračujú ciele doby cyklu rovnakým spôsobom: príliš veľa WIP vzhľadom na priepustnosť. Týka sa to priamo [ceny oneskorenia vo verejných programoch](../náklady-oneskorenia-vo-verejných-programoch/): doba cyklu × CoD sú libry, ktoré v každom okamihu ležia vo fronte, a týka sa to aj [štandardov služieb a metrík transakcií](../štandardy-služieb-a-metriky-transakcií/), kde zverejnený cieľ vybavenia je záväzok doby cyklu, ktorý po jeho nesplnení dokážu diagnostikovať iba metriky toku. Softvér systému na vybavovanie prípadov má sprístupniť WIP a dobu cyklu ako plnohodnotné prevádzkové metriky, nie ich zakopať vo vnútri systému správy prípadov, do ktorého nikto nenazerá.

## Úskalia

- **Pridanie limitov WIP bez odstránenia skutočného úzkeho miesta**: ak je obmedzením doba odpovede externej zákonne konzultovanej strany, obmedzenie WIP vybavovateľov len presunie front proti prúdu, neskráti ho.
- **Považovanie efektívnosti toku za cieľ, s ktorým sa dá manipulovať**: urýchľovanie 1,3 % aktívneho času sotva pohne dobou cyklu; páka je takmer vždy v čakacích stavoch, čo zvyčajne znamená prepracovanie procesu, nie rýchlosť vybavovateľa.
- **Ignorovanie variability**: Littleov zákon opisuje priemery; agenda s vysokou variabilitou dopytu potrebuje rezervnú kapacitu, nielen prísnejší limit WIP, inak sa zákonné lehoty na volatilnom konci distribúcie stále zmeškajú, aj keď sa priemer zlepší.
- **Nekonzistentné meranie WIP**: prípad „otvorený“ v evidenčnom systéme, ale v skutočnosti zastavený v očakávaní tretej strany, je stále WIP; jeho vylúčenie prikrášľuje čísla bez zmeny reality, ktorú vidí občan.

## Zdroje

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
