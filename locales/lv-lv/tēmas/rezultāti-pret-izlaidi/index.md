# Rezultāti pret izlaidi

Izlaide (output) ir aktivitātes tiešs, saskaitāms produkts — tā pastāv tajā brīdī, kad notiek piegāde,
neatkarīgi no tā, kādu efektu tā rada. Rezultāts (outcome) ir izmaiņas, kas seko iesaistītajiem cilvēkiem,
vietai vai sistēmai. "500 cilvēku apmeklēja darba meklēšanas semināru" ir izlaide: tas ir patiesi pat tad,
ja neviens no viņiem neatrod darbu. "500 cilvēku nodarbinātības izredzes uzlabojās" ir apgalvojums par
rezultātu, un tam vajadzīgi pierādījumi par izmaiņām, nevis tikai par apmeklējumu — šī neskaidrība rada
vairāk maldinošu dotāciju pārskatu nekā gandrīz jebkura cita mērīšanas kļūda nozarē.

## Kāpēc tas ir svarīgi

HM Treasury Magenta Book un finansētāji, piemēram, National Lottery Community Fund, prasa ziņot tieši par
rezultātiem, jo izlaide ir tas, par ko programmas ziņo pēc noklusējuma: to ir lēti skaitīt, tā vienmēr ir
pieejama un vienmēr izskatās pozitīva. Izlaides skaitlis burtiski nekad nevar samazināties programmas
neveiksmes dēļ — vairāk piegādāto sesiju vienmēr ir "vairāk", savukārt rezultāts var atklāt, ka programma
nedarbojas. Nacionālā revīzijas pārvalde (National Audit Office) atkārtoti kritizējusi valdības programmas
par aktivitāšu līmeņa uzrādīšanu kā panākumu pierādījumu; programmatūras sistēma, kas atvieglo tikai izlaides
ziņošanu, to pēc noklusējuma pastiprina, jo izlaidei nav vajadzīga papildu datu vākšana, bet rezultātiem ir.

## Matemātika

Formulas nav, taču pastāv uzticams tests metrikas klasificēšanai:

```
Izlaides tests:   vai to var saskaitīt piegādes brīdī, un vai tas ir patiesi, pat ja saņēmējs netiek ietekmēts?
Rezultāta tests:  vai, lai tas būtu jēgpilns, nepieciešams salīdzinājums pirms/pēc vai ar/bez?

Ja skaitlis var būt patiess bez jebkāda ieguvuma jebkuram, tā ir izlaide.
```

Tas atrodas plašākajā [loģikas modeļa](../loģikas-modelis/) ķēdē un ir atkarīgs no rezultātu saitēm, kas
definētas [pārmaiņu teorijā](../pārmaiņu-teorija/); rezultāta pārvēršanai naudā izmanto metodes tēmā
[sociālā atdeve no ieguldījuma](../sociālā-ieguldījumu-atdeve/).

## Aprēķina piemērs

**Pašvaldība (nodarbinātības atbalsts)**: izlaide — 500 cilvēku apmeklēja darba meklēšanas seminārus.
Rezultāts — 12 mēnešu pēcpārbaudē 140 no šiem 500 (28 %) ir ilgstoši nodarbināti (6+ mēneši).
Salīdzināmajai grupai ar līdzīgām īpašībām, bet bez piekļuves programmai, tajā pašā periodā bāzlīnijas
nodarbinātības līmenis ir 15 %. Neto rezultāta pieaugums: 28 % − 15 % = 13 procentpunkti, tātad aptuveni
500 × 0,13 = 65 papildu cilvēki strādā, kas citādi nestrādātu — attiecināmais rezultāts, kas atšķiras gan no
500 apmeklējuma skaitļa, gan no 140 neapstrādātā nodarbināto skaita.

**Labdarības organizācija (lasītprasmes labdarība)**: izlaide — 1 200 lasīšanas sesiju, kas sniegtas 300
bērniem. Rezultāts — vidējais lasītprasmes vecums uzlabojās par 8 mēnešiem 6 mēnešu periodā pret
gaidāmo dabiskās progresijas bāzlīniju 6 mēneši. Neto rezultāta ieguvums: 8 − 6 = 2 mēneši papildu lasītprasmes
vecuma uzlabojuma uz bērnu, kas attiecināms uz programmu, nevis pilnie 8 mēneši.

## Saikne ar programmatūras inženieriju

Notikumu žurnāli un transakciju sistēmas instrumentē izlaidi gandrīz automātiski — lapu skatījumus,
sesijas, slēgtos pieteikumus, rezervētās tikšanās —, jo tos ģenerē sistēma, veicot savu darbu. Rezultātiem
vajadzīgs datu modelis, kas fiksē to pašu indivīdu vēlākā laika punktā pret bāzlīniju vai salīdzinājumu, un
to jāizstrādā speciāli: pēcpārbaudes aptaujas, sasaistīti administratīvie ieraksti vai salīdzinājuma kohorta.
Atskaišu rīks, kas atbalsta tikai pirmo, klusām virzīs organizāciju uz tikai izlaides ziņošanu neatkarīgi no
tā, ko pieprasījis finansētājs. Skatiet [loģikas modelis](../loģikas-modelis/), lai redzētu, kur rezultāti
atrodas atbildības ķēdē, [izmaksas uz rezultātu](../izmaksas-uz-iznākumu/), lai šo nošķīrumu pārvērstu
vienības izmaksu metrikā, un [publiskā sektora KPI](../publiskā-sektora-kpi/) par plašāku metriku izvēles
shēmu.

## Biežākās kļūdas

- **Izlaides ziņošana kā rezultātu.** "500 cilvēku apmeklēja" netieši norāda uz ieguvumu, to
  nepierādot; skaidri marķējiet apmeklējumu kā izlaidi.
- **Nav bāzlīnijas vai salīdzinājuma grupas.** Rezultāta skaitlis bez kontrafaktiskā scenārija — skatiet
  [kontrafaktiskā analīze](../kontrfaktiskā-analīze/) — nespēj nošķirt programmas efektu no tā, kas
  notiktu tāpat.
- **Optimizēšana finansētajai metrikai.** Kad finansējums ir piesaistīts izlaides apjomam, piegādes komandas
  racionāli maksimizē apmeklējumu, nevis ilgtspējīgas izmaiņas — Gudharta likuma (Goodhart) kļūmes veids.
- **Rezultātu skaistināšana.** Izlaides metrikas pārsaukšana ar rezultātiem līdzīgu valodu ("iesaistes
  rezultāti: 500 apmeklētāji") bez jebkādas pēcpārbaudes mērījuma aiz tās.

## Avoti

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
