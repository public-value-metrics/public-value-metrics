# Ēnu cenas

Ēnu cena ir aprēķināta vērtība, ko piešķir precei, resursam vai ārējai ietekmei, kurai nav novērojamas tirgus cenas vai kuras tirgus cena ir izkropļota un neatspoguļo patieso sociālo vērtību. Valsts novērtēšana balstās nelielā oficiālu ēnu cenu kopumā — oglekļa, brīvā laika, bezdarbnieku darba — ko publicē centralizēti, lai visas ministrijas izmantotu vienu un to pašu skaitli.

## Kāpēc tas ir svarīgi

Ēnu cenas pastāv tāpēc, ka [sociālā izmaksu un ieguvumu analīze](../sociālā-izmaksu-un-ieguvumu-analīze/) nevar darboties bez naudas vērtības katrai izmaksu un ieguvumu pozīcijai, bet vairākām no nozīmīgākajām — izmesta oglekļa tonnai, braucēja stundai, citādi bezdarbā esoša cilvēka darba stundai — nav nekādas tirgus cenas vai arī tirgus cena nepareizi atspoguļo to patiesās sociālās izmaksas. HM Treasury (Lielbritānijas Finanšu ministrija) un Enerģētikas drošības un nulles emisiju departaments kopīgi publicē oglekļa ēnu cenu, ko izmanto visā Apvienotās Karalistes valdības novērtēšanā (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Tā nav atvasināta no kāda oglekļa tirgus cenas, bet gan no mērķiem atbilstošas pieejas: oglekļa vērtību nosaka kā robežsamazinājuma izmaksas, kas nepieciešamas, lai sasniegtu Apvienotās Karalistes likumā noteiktos oglekļa budžetus. Tā ir pamatā atšķirīga loģika nekā novērot, par ko ogleklis faktiski tiek tirgots ES vai Apvienotās Karalistes emisiju tirdzniecības sistēmā.

Ēnu darba samaksas likme darba tirgus pusē balstās līdzīgā loģikā. Nodarbinot cilvēku, kurš citādi būtu bijis bezdarbnieks, sabiedrībai tas neizmaksā viņa pilnu algu — daļa no šīs algas ir transferts no zaudētajiem pabalstu maksājumiem un zaudētā brīvā laika vai darba meklēšanas laika, nevis jauns sabiedrības resursu patēriņš. Tāpēc Green Book (Lielbritānijas valdības novērtēšanas rokasgrāmata) norādījumi nosaka ēnu cenu, kas ir zemāka par tirgus algu darbam, kas ņemts no bezdarba, atspoguļojot šī darba patiesās alternatīvās izmaksas (skatiet [alternatīvās izmaksas publiskajos izdevumos](../alternatīvās-izmaksas-publiskajos-izdevumos/)), nevis tā tirgus cenu.

## Matemātika

```
Oglekļa ēnu cena (ilustratīva struktūra; aktuālās vērtības ņemamas no
oficiālā BEIS/DESNZ oglekļa vērtību rīka — nelietojiet novecojušus skaitļus):
  Tirdzniecības sektora vērtība: balstīta uz ETS kvotu cenu trajektorijām
  Netirgotā sektora (mērķiem atbilstošā) vērtība: noteikta kā robežizmaksas
    samazinājumam, kas vajadzīgs likumā noteikto oglekļa budžetu izpildei,
    laika gaitā pieaugot, jo vieglākās samazināšanas iespējas izsīkst
  Piemērošana: £/tonna CO2e × variantā emitētās vai novērstās tonnas,
    nākamajiem gadiem diskontējot ar sociālo diskonta likmi

Ēnu darba samaksas likme (SWR):
  SWR = tirgus alga − (ietaupītā brīvā laika/meklēšanas laika vērtība
                        + vairs nemaksāto pabalstu vērtība)
  Parasti izsaka kā tirgus algas daļu (piemēram, SWR = 0,6
    × tirgus alga apgabalā ar augstu bezdarbu, saskaņā ar Green Book
    A pielikuma norādījumiem par darba tirgiem ar brīvu kapacitāti)
```

Abi lielumi ir centralizēti noteiktas politikas konvencijas, nevis empīriski tirgus novērojumi — ēnu cenas jēga ir aizstāt trūkstošu vai izkropļotu tirgu, tāpēc novērtējumam, kas tās lieto, jānorāda aktuālais oficiālais avots, nevis jāatvasina savs skaitlis, tieši lai visu ministriju novērtējumi būtu salīdzināmi.

## Aprēķina piemērs

**Nacionālā valdība**: plūdu aizsardzības shēmas novērtējumā lēsts, ka tā novērš 400 tonnas CO2e emisiju gadā (mazāk lietojot avārijas tehniku un mazinot iebūvēto oglekli, jo nav jāveic atjaunošana) 30 gadu novērtēšanas periodā, salīdzinot ar bāzes scenāriju "darīt minimumu".

```
Ilustratīva oglekļa ēnu cena: £280/tonna CO2e (1. gads, novērtēšanas
  periodā pieaugot saskaņā ar oficiālo netirgoto oglekļa vērtību grafiku)
1. gada oglekļa ieguvums = 400 × £280 = £112 000
```

Tā kā oficiālajā grafikā oglekļa vērtība novērtēšanas periodā *pieaug* (atspoguļojot stingrākus oglekļa budžetus), analītiķim 30 gadu plūsmas katram gadam jāpiemēro attiecīgā gada vērtība, nevis fiksēta likme — izmantojot 1. gada vērtību visos gados, vēlāko gadu ieguvumi tiktu nenovērtēti un izkropļotos salīdzinājums ar alternatīvām plūdu aizsardzības konstrukcijām, kam ir cits oglekļa profils.

**Vietējā pašvaldība**: pašvaldības nodarbinātības atbalsta programma ilgstošiem bezdarbniekiem iekārto darbā 150 cilvēkus ar atalgojumu £11/stundā. Ja vērtētu pēc pilnas tirgus algas, programmai kā sociālais ieguvums tiktu ieskaitīts £11 × nostrādātās stundas, taču ēnu darba samaksas likmes pieeja atzīst, ka šie nebija darbinieki, kas pārņemti no citiem darbiem — viņu darba patiesās alternatīvās izmaksas pirms programmas bija zemas.

```
Tirgus alga: £11,00/stundā
Ēnu darba samaksas likme (ilustratīvi, augsts vietējais bezdarbs): 0,6 × tirgus alga = £6,60/stundā
Neto sociālais ieguvums uz nostrādāto stundu ≈ £11,00 − £6,60 = £4,40/stundā
  („papildu" vērtība, kas rodas, patiesi dīkstāves darbaspēku iesaistot ražošanā,
   atšķirībā no pašas algas, kas lielā mērā ir transferts)
```

Tāpēc nodarbinātības programmu novērtējumi apgabalos ar augstu bezdarbu var uzrādīt pozitīvu neto sociālo vērtību, kamēr tā pati programma apgabalā ar pilnu nodarbinātību, kur darbaspēks tiktu vienkārši pārvilināts no citiem darbiem, to neuzrādītu.

## Saikne ar programmatūras inženieriju

Ēnu cenas reti skar programmatūras piegādi tieši, taču tās ir svarīgas ikreiz, kad biznesa gadījums IT izmaiņām apgalvo oglekļa vai sociālu ieguvumu — datu centru konsolidācija, kas pretendē uz oglekļa ietaupījumu, vai bezpapīra pakalpojums, kas pretendē uz novērstu drukāšanas un pasta oglekļa emisiju, jālieto aktuālā oficiālā oglekļa ēnu cena, nevis izdomāts skaitlis, un jāpiemēro pareizais gadu grafiks, nevis fiksēta likme — tieši tāpat kā jebkuram citam Green Book novērtējuma ievaddatam. Skatiet [kopējās piederības izmaksas valsts IT](../kopējās-piederības-izmaksas-valsts-it/) un [publiskā sektora kiberdrošības vērtība](../publiskā-sektora-kiberdrošības-vērtība/); abos gadījumos līdzās tieši izmaksātajām pozīcijām bieži vajag ēnu cenu grūti naudā izsakāmam ievaddatam (pārkāpuma risks, dīkstāve).

## Biežākās kļūdas

- **Novecojušas oglekļa vai algas vērtības lietošana.** Abas vērtības centrālie norādījumi periodiski pārskata; novērtējums, kas balstīts uz atceltu skaitli, Finanšu ministrijas pārbaudi neizturēs.
- **Fiksētas oglekļa ēnu cenas piemērošana vairāku desmitgažu novērtējumā.** Oficiālais grafiks laika gaitā pieaug; izmantojot 1. gada vērtību visā periodā, tiek nepareizi attēlots ieguvumu vai izmaksu profils.
- **Ēnu algas sajaukšana ar atlaidi darbinieka faktiskajai samaksai.** Ēnu darba samaksas likme koriģē *novērtējuma* vērtējumu darba ievaddatam, nevis algu, ko darbinieks faktiski saņem — šo jēdzienu sajaukšana (nepareizi) var kalpot par attaisnojumu samaksai zem tirgus līmeņa.
- **Sava ēnu cenas aprēķina izstrāde oficiālās vietā.** Ēnu cenas ir politikas konvencijas tieši tāpēc, lai novērtējumi būtu salīdzināmi starp ministrijām; vietēji izdomāts skaitlis, lai cik labi pamatots, šo salīdzināmību izjauc.

## Avoti

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (pamatdarbs ēnu cenu metodoloģijā).
