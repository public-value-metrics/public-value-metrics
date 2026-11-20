# Produktivita umelej inteligencie vo verejnom sektore

Metriky toho, čo asistencia umelej inteligencie pri programovaní skutočne robí s inžinierskym výstupom (miera prijatia návrhov, zrýchlenie v kontrolovaných štúdiách, priepustnosť pull requestov a zachovanie kódu), majú aj bez obmedzení verejného sektora skutočne rozporuplnú dôkaznú základňu. K tomu pristupuje klasifikácia údajov, ktorá určuje, ktorých častí starého prostredia sa nástroj UI smie vôbec dotknúť, obstarávacie cykly, pre ktoré je hodnotený nástroj často o jednu generáciu modelu za súčasnými možnosťami, a požiadavky na bezpečnostné previerky, ktoré určujú, kto ho smie na čom používať.

## Prečo na tom záleží

Dve najcitovanejšie kontrolované štúdie smerujú opačným smerom. Randomizovaná kontrolovaná štúdia (RCT) Penga a kol. z roku 2023 o GitHub Copilot zistila, že vývojári dokončili novú úlohu s HTTP serverom s Copilotom o 55,8 % rýchlejšie (1 h 11 min oproti 2 h 41 min, n = 95). RCT od METR z roku 2025 zistila, že skúsení vývojári open source pracujúci na *vlastných vyspelých repozitároch* boli s nástrojmi UI z počiatku roku 2025 o 19 % pomalší, hoci si mysleli, že sú asi o 20 % rýchlejší. Obe štúdie sú správne a práve ich rozpor je zistením: účinnosť pri novej úlohe sa neprenáša do účinnosti pri vyspelej kódovej základni, a veľká časť vládneho inžinierstva je práca na vyspelej kódovej základni v prostrediach, ktoré sú starsie a svojrázovejšie než medián komerčných repozitárov. Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) od Central Digital and Data Office stanovuje zásady zodpovedného zavádzania práve preto, že tieto dôkazy nemožno jednoducho prevziať z ukážok dodávateľov. Od rezortov sa očakáva, že pred nasadením posúdia nástroje podľa vlastných požiadaviek na nakladanie s údajmi a bezpečnosť.

## Matematika

```
Miera prijatia      = prijaté návrhy / zobrazené návrhy
Miera zachovania    = kód UI, ktorý prežil do zlúčenia / prijatý kód UI
Zrýchlenie          = (t_kontrola − t_UI) / t_kontrola  (LEN z kontrolovaného porovnania)
Zmena priepustnosti = Δ zlúčených PR/vývojár/týždeň

Faktor pokrytia vo verejnom sektore:
  oprávnený podiel kódovej základne = LOC v systémoch, kde klasifikácia
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) nástroj vôbec povoľuje

Model hodnoty = vývojári × oprávnené pokrytie × ušetrený čas × plná sadzba × využitie
             – každý člen vyžaduje lokálne meranie a faktor pokrytia
             nemá v súkromnom sektore obdobu
```

## Vypracovaný príklad

Vládny rezort pilotne nasadzuje asistenta UI pri programovaní medzi 300 vývojárov, ale na používanie nástroja sú oprávnené len systémy klasifikované ako OFFICIAL, teda 70 % prostredia podľa rozdelenia počtu pracovníkov, zvyšných 30 % (systémy vyššej klasifikácie) je vylúčených úplne.

```
Oprávnení vývojári = 300 × 0,70 = 210

Výsledok pilotu: sebahodnotením ušetrený čas 40 min/deň;
                 nameraná úspora na úrovni úloh 12 min/deň (0,2 h)
                 – rozdiel vnímania podľa METR, reprodukovaný v praxi

Ocenenie NAMERANÉHO čísla:
  210 × 0,2 h × 220 dní × £55/h plná sadzba × 0,6 využitie
  = 210 × 44 hodín × £55 × 0,6
  = 9 240 hodín × £55 × 0,6 ≈ £304 920 ročne kapacita

Náklady: 210 licencovaných miest × £22/mesiac × 12 ≈ £55 440 ročne

Čistý pomer kapacity ≈ 304 920 / 55 440 ≈ 5,5 : 1
```

Dá sa financovať pri približne jednej tretine prínosu uvádzaného sebahodnotením a až po uplatnení stropu klasifikácie. Licencovanie všetkých 300 vývojárov na základe sebahodnoteného čísla by nadsadilo oprávnenú populáciu aj skutočnú úsporu.

## Súvislosť so softvérovým inžinierstvom

Disciplíny, ktoré sa prenášajú priamo: robte **pragmatické pokusy** na vlastnej kódovej základni rezortu a skutočných tiketoch, nie na ukážkových úlohách dodávateľov, pretože výsledok METR je výslovne zistením o vyspelej kódovej základni. Berte **mieru prijatia ako zástupný ukazovateľ, nie výsledok**: vysoké prijatie pri nízkom zachovaní je softvérovým ekvivalentom nadmernej diagnostiky. Každé tvrdenie o priepustnosti dopĺňajte **kontrolou stability**, keďže správa DORA z roku 2025 zistila, že zavedenie UI zvyšuje priepustnosť, ale zhoršuje stabilitu zmien, čo je presne čistá analýza prínosov, ktorú majú vykonávať [metriky DORA pre verejnú hodnotu](../metriky-dora-pre-verejnú-hodnotu/). A buďte úprimní, že nástroje UI môžu medzeru v starých prostrediach zaťažených [technickým dlhom](../technický-dlh-ako-erózia-verejnej-hodnoty/) skôr zväčšiť než zmenšiť, pretože trénovacie údaje podreprezentujú COBOL, 4GL a zákazkový mainframový kód bežný vo verejnej správe, takže kvalita návrhov je často najslabšia práve v systémoch, ktoré pomoc potrebujú najviac. Toto stojí popri širšej otázke [hodnoty UI vo verejnej správe](../hodnota-umelej-inteligencie-vo-verejnej-správe/) a malo by sa riadiť rovnakými obmedzeniami [hodnoty kybernetickej bezpečnosti vo verejnom sektore](../hodnota-kybernetickej-bezpečnosti-vo-verejnom-sektore/), ktoré obmedzujú, kde môže akýkoľvek nástroj tretej strany vôbec vidieť kód alebo údaje.

## Úskalia

- **Prenos štúdií dodávateľov**: použitie zrýchlení z RCT na novej úlohe na prácu s integráciou starých systémov je presne tá chyba, ktorú odhalila štúdia METR.
- **Sebahodnotenie ako meranie**: rozdiel 20 percentuálnych bodov medzi vnímaním a nameraným je najväčším známym skreslením v tejto literatúre a nadsadzuje obchodné prípady, ktoré sa opierajú len o prieskumy medzi vývojármi.
- **Ignorovanie stropu klasifikácie**: modely licencií a hodnoty postavené na celkovom počte pracovníkov namiesto oprávnenej podmnožiny s povolenou klasifikáciou systematicky nadsadzujú nákladovú efektívnosť aj dosiahnuteľné pokrytie.
- **Oneskorenie obstarávacieho cyklu**: obstarávanie nástrojov cez rámcové dohody môže znamenať, že pilot hodnotí generáciu modelu o 12 – 18 mesiacov staršiu než je verejne dostupné v čase plného nasadenia, takže predpoklad zrýchlenia v pôvodnom obchodnom prípade zastará ešte pred spustením.

## Zdroje

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
