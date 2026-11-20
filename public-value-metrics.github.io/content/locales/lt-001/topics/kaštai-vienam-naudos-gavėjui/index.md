# Kaštai vienam naudos gavėjui

Kaštai vienam naudos gavėjui – tai bendri programos kaštai, padalyti iš unikalių žmonių, gavusių paslaugą, skaičiaus – bet kurio, kurį pasiekėme, nepriklausomai nuo to, ar jo aplinkybės iš tikrųjų pasikeitė. Tai greičiausias efektyvumo skaičius, kurį organizacija gali pateikti, nes „ką aptarnavome“ beveik visada jau yra bylų valdymo sistemoje, o „kam padėjome“ paprastai nėra.

## Kodėl tai svarbu

Finansuotojai nuolat prašo kaštų vienam naudos gavėjui ir tam turi pagrįstų priežasčių: jis prieinamas iš karto, palyginamas visame labai skirtingų programų portfelyje ir sąžiningas dėl aprėpties taip, kaip rezultatų teiginiai – kuriuos patikrinti trunka ilgiau ir kuriuos lengviau pervertinti – nėra. JK Labdaros organizacijų SORP (Statement of Recommended Practice), reglamentuojantis, kaip labdaros organizacijos teikia ataskaitas pagal FRS 102, reikalauja, kad patikėtinių metinės ataskaitos aprašytų pasiekimus tikslų atžvilgiu, tačiau daugumos mažesnių labdaros organizacijų valdymo apskaita vis tiek pagal nutylėjimą naudoja aprėptimi grįstus vieneto kaštus, nes juos pigu pateikti ir patogu audituoti.

Pavojus yra laikyti kaštus vienam naudos gavėjui taip, tarsi jie atsakytų į klausimą, į kurį atsakyti negali: ar pinigai suveikė. Rodiklį, kuris iš tikrųjų į tai atsako, žr. [kaštai vienam rezultatui](../kaštai-vienam-rezultatui/), o pagrindinį skirtumą – [rezultatai ir produktai](../rezultatai-ir-produktai/). Kaštai vienam naudos gavėjui yra teisėtas rūšiavimo ir aprėpties rodiklis – jis parodo finansuotojui, kiek toli nusitęsia pinigai, – tačiau maži kaštai vienam naudos gavėjui gali reikšti arba tikrą efektyvumą, arba tokią plonytę paslaugą, kad ji nieko nekeičia.

## Matematika

```
Kaštai vienam naudos gavėjui = Bendri programos kaštai / Aptarnautų unikalių žmonių skaičius

Palyginimui:
Kaštai vienam rezultatui = Bendri programos kaštai / Apibrėžtą rezultatą pasiekusių žmonių skaičius

Kaštai vienam naudos gavėjui visada ≤ kaštai vienam rezultatui, nes rezultatų populiacija yra
naudos gavėjų populiacijos poaibis (dažnai nedidelis).
```

## Pavyzdys su skaičiavimais

**Maisto bankas, tie patys metai kaip kaštų vienam rezultatui pavyzdyje**:

- Bendri programos kaštai: £450 000
- Aptarnauti unikalūs namų ūkiai (trys ar daugiau maisto paketų): 1 800

```
Kaštai vienam naudos gavėjui = £450 000 / 1 800 = £250 vienam aptarnautam namų ūkiui
```

Palyginkime abu rodiklius greta:

| Rodiklis | Vardiklis | Rezultatas |
|---|---|---|
| Kaštai vienam naudos gavėjui | 1 800 aptarnautų namų ūkių | £250 |
| Kaštai vienam rezultatui | 630 namų ūkių, pasiekusių aprūpinimą maistu | £714 |

Finansuotojas, matantis tik £250, gali padaryti išvadą, kad tai labai efektyvi labdaros organizacija. Finansuotojas, matantis abu skaičius, gali užduoti naudingesnį klausimą: ar skirtumas tarp aprėpties (1 800) ir rezultato (630) yra duomenų rinkimo spraga, dizaino spraga, ar sąžiningas atspindys, kaip sunku vien maisto pagalba pasiekti aprūpinimą maistu?

**Darbo mokymo labdaros organizacija, iliustracinis pavyzdys**: kaštai vienam naudos gavėjui (užsiregistravusiam) = £2 000; kaštai vienam rezultatui (išlaikytas užimtumas po 6 mėnesių) = £11 000, nes tik 18 % užsiregistravusių baigia programą ir randa išlaikomą darbą. Du skaičiai, besiskiriantys penkis kartus, yra įprasta ten, kur baigimo ar patvarumo rodikliai maži – mokymo labdaros organizacija ir maisto bankas čia struktūriškai identiški.

## Ryšys su programine inžinerija

Kaštai vienam naudos gavėjui yra numatytasis ne pelno programinės įrangos rodiklis, nes tai rodiklis, kuris iškrenta iš naudos gavėjo įrašo be jokio papildomo darbo: sukurti bylą, užregistruoti paslaugą, suskaičiuoti eilutes. Sistemos, kuri palaiko ir kaštus vienam rezultatui, kūrimas reiškia sąmoningą antro pirmos klasės objekto pridėjimą – rezultato įvykio, datuoto ir apibrėžto nepriklausomai nuo paslaugos teikimo – ir atsispyrimą pagundai leisti „bylai uždarytai“ atstoti „rezultatą pasiektą“. Nustatant dotacijų valdymo ar CRM platformos apimtį, klauskite, kurį iš dviejų rodiklių rodo kiekvienas skydelis, ir atitinkamai jį pažymėkite; jų sumaišymas viename „poveikio“ langelyje yra viena dažniausių programinio lygmens žemiau nurodytų klaidų priežasčių. Kad bet kurį rodiklį, kai jis tinkamai pažymėtas, būtų galima lyginti su etalonais, žr. [vieneto kaštų duomenų bazės](../vieneto-kaštų-duomenų-bazės/).

## Dažniausios klaidos

- **Kaštų vienam naudos gavėjui pateikimas kaip poveikio.** Jie matuoja aprėptį, o ne pokytį. Skydelius ir ataskaitas žymėkite „kaštai vienam aptarnautam asmeniui“, o ne „kaštai vienam asmeniui, kuriam padėta“.
- **Dvigubas skaičiavimas tarp programų.** Asmuo, gaunantis ir maisto paketus, ir skolų konsultacijas iš tos pačios labdaros organizacijos, yra vienas naudos gavėjas, o ne du, jei vardiklis turi apibūdinti unikalią aprėptį; nuspręskite ir dokumentuokite, kuri konvencija naudojama.
- **Mažesnio skaičiaus laikymas visada geresniu.** Nemokamų pietų klubas visada nugalės intensyvią bylų valdymo paslaugą pagal kaštus vienam naudos gavėjui, nes lengvai paliesti žmogų kainuoja mažiau. Tai nieko nesako apie tai, kuri sukuria patvaresnį pokytį už svarą.
- **Tylus vardiklių keitimas tarp ataskaitų.** Kaštų vienam naudos gavėjui skaičius, vienoje metinėje ataskaitoje nurodytas pagal „užsiregistravusius“, o kitoje – pagal „baigusius“, nėra palyginamas metai iš metų; vardiklį nurodykite kiekvieną kartą.

## Šaltiniai

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
