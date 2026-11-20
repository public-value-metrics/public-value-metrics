# Alternatīvas iekšzemes kopproduktam

Iekšzemes kopprodukta (IKP) alternatīvas ir rādītāji, kas izveidoti, lai aptvertu to, ko IKP strukturāli ignorē: neapmaksātu aprūpes darbu, vides noplicināšanu, ienākumu sadali un to, vai izaugsme patiešām uzlabo dzīvi. Pazīstamākie ir Patiesā progresa rādītājs (Genuine Progress Indicator, GPI) un Butānas Bruto nacionālās laimes (GNH) indekss; ietekmīgāko pamatojumu to nopietnai uztverei sniedza 2009. gada Stiglica–Sena–Fitusī komisija. Inženieriem, kas būvē valdības informācijas paneļus vai KPI sistēmas, “kurš skaitlis skaitās progress” ir dizaina lēmums ar reālām sekām tam, kas tiek finansēts.

## Kāpēc tas ir svarīgi

Saimons Kuzņecs, kas 1930. gados izveidoja ASV nacionālos kontus, 1934. gadā brīdināja Kongresu, ka “nācijas labklājību grūti izsecināt no nacionālā ienākuma mērījuma” — brīdinājums, ko šis rādītājs gandrīz nekavējoties pārauga. IKP naftas noplūdes sakopšanu uzskaita kā izaugsmi, bet vecāka neapmaksātu bērnu aprūpi — kā neko; tas neatšķir tēriņus, kas veido ilgtspējīgu labklājību, no tēriņiem, kas tikai kompensē jau nodarītu kaitējumu. Stiglica–Sena–Fitusī komisija, ko sasauca Francijas prezidents Nikolā Sarkozī un vadīja Džozefs Stiglics, Amartja Sens un Žans Polā Fitusī, 2009. gadā ziņoja, ka statistikas sistēmām jāpārceļ uzsvars “no ekonomiskās ražošanas mērīšanas uz cilvēku labklājības mērīšanu” un ka ilgtspēja jāseko atsevišķi no pašreizējās labklājības, nevis jāapvieno vienā skaitlī. IKP alternatīvas šo ieteikumu īsteno praksē. GPI, ko 1990. gados izstrādāja domnīca Redefining Progress un kas balstīts uz Viljama Nordhausa un Džeimsa Tobina 1972. gada Ekonomiskās labklājības mēru, sākas ar personīgo patēriņu (kā IKP) un pēc tam pievieno ārpustirgus ieguvumus, ko IKP izlaiž (mājsaimniecības darbs, brīvprātīgais darbs), vienlaikus atņemot aizsardzības un noplicināšanas izmaksas (noziedzība, piesārņojums, došanās uz darbu, resursu izsīkšana), kuras IKP kļūdaini skaita kā pozitīvas. Butānas GNH indekss, ko administrē GNH Centre Bhutan (<https://www.gnhcentre.bt/>), iet vēl tālāk, aizstājot izaugsmi kā valsts konstitucionāli noteikto mērķi: tas apkopo 33 rādītājus 9 jomās — psiholoģiskā labklājība, veselība, izglītība, laika izmantojums, kultūras daudzveidība, pārvaldība, kopienas dzīvotspēja, ekoloģiskā daudzveidība un dzīves līmenis — vienā pietiekamības vērtējumā, ko tieši izmanto valdības politikas priekšlikumu atlasei.

## Matemātika

```
GPI = personīgā patēriņa izdevumi
      + ārpustirgus ieguvumi (mājsaimniecības darbs, brīvprātīgais darbs, augstākā izglītība)
      − aizsardzības un sociālās izmaksas (noziedzība, piesārņojums, došanās uz darbu, ģimenes sabrukums)
      − dabas un sociālā kapitāla noplicināšana (resursu izsīkšana, lauksaimniecības zemes zudums)

GNH pietiekamības vērtējums katrā jomā:
  cilvēks ir “pietiekams” jomā, kad pārsniedz tās slieksni katram rādītājam
  Laimes indekss = (% iedzīvotāju, kas pietiekami ≥ 6 no 9 jomām)
                   + (“vēl ne laimīgās” minoritātes svērtais vidējais iztrūkums)
```

## Aprēķina piemērs

**Reģions, GPI**: personīgais patēriņš ir $50 mljrd. Pieskaitiet aplēsto mājsaimniecības un brīvprātīgo darba vērtību $12 mljrd. (aizvietošanas izmaksu darba algas likmes — skatiet [brīvprātīgo laika vērtība](../brīvprātīgā-laika-vērtība/)). Atņemiet aplēstās ikgadējās izmaksas par satiksmes sastrēgumiem ($3 mljrd.), noziedzību ($4 mljrd.) un ilgtermiņa resursu noplicināšanu ($6 mljrd.):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ mljrd.)
```

Ja IKP tajā gadā pieauga no $50 mljrd. līdz $55 mljrd. (+10 %), bet aizsardzības un noplicināšanas izmaksas auga ātrāk nekā patēriņš, GPI var kristies, kamēr IKP aug — “sliekšņa hipotēze”, ko GPI pētnieki min augsta ienākuma ekonomikām kopš aptuveni 1970. gadiem, kad izaugsme turpināja kāpt, bet GPI stabilizējās.

**Iedzīvotājs, GNH**: respondents sasniedz pietiekamības slieksni 7 no 9 jomām (veselība, izglītība, dzīves līmenis, kopienas dzīvotspēja, kultūras daudzveidība, ekoloģiskā daudzveidība, laika izmantojums), bet neizpilda psiholoģisko labklājību un pārvaldību. Tā kā 7 ≥ 6, viņš tiek skaitīts kā “laimīgs” kopskaitā; indekss atsevišķi seko viņa divu iztrūkumu dziļumam, lai šaurs izturējums nebūtu nesaprotams no ērta.

## Saikne ar programmatūras inženieriju

- KPI informācijas panelis, kas modelēts tikai pēc caurlaidspējas vai izdevumiem (IKP paraugs), sistemātiski palaidīs garām kaitējumu, kas nodarīts šīs caurlaidspējas radīšanā — atbalsta pieteikumu apjoma uzskatīšana par “iesaisti”, nevis “lietotāju satraukumu” ir programmatūras piegādes versija naftas noplūdes skaitīšanai kā izaugsmei.
- GPI tipa uzskaite ir noderīgs audita modelis jebkuram [publiskā sektora KPI](../publiskā-sektora-kpi/) komplektam: katram virsraksta izlaides rādītājam jautājiet, kādas aizsardzības izmaksas tas klusi rada (pārstrāde, incidentu reaģēšana, izdegšana), un atņemiet tās, kā GPI atņem aizsardzības izdevumus no patēriņa.
- GNH jomu pietiekamības metode — izturēts/neizturēts pa dimensijām, pēc tam apkopojums — ir strukturāli tā pati tehnika kā [daudzkritēriju lēmumu analīze](../daudzkritēriju-lēmumu-analīze/) un ir vērts to izmantot visur, kur viens skalārs vērtējums slēptu kritisku neizturētu dimensiju.

## Biežākās kļūdas

- **GPI uztvere kā precīzu nacionālo kontu** — atšķirībā no IKP, GPI nav vienas standartizētas metodoloģijas; dažādi pētījumi atšķirīgi sver satiksmes izmaksas, brīvprātīgo laiku vai resursu noplicināšanu, tāpēc GPI salīdzinājumi starp pētījumiem ir daudz mazāk uzticami nekā IKP salīdzinājumi starp valstīm.
- **GNH pārņemšana pilnībā citā politikas kultūrā** — tā jomu svari un pietiekamības sliekšņi tika noteikti Butānas konsultācijās; skaitļa kopēšana bez pamatā esošā konsultāciju procesa rada tukšu rādītāju, kam neviens neuzticas.
- **Pieņēmums, ka IKP alternatīva aizstāj izmaksu un ieguvumu novērtējumu** — tie ir diagnostiski, visas ekonomikas rādītāji, nevis lēmumu pieņemšanas rīki atsevišķai programmai; šim nolūkam izmantojiet [sociālo izmaksu un ieguvumu analīzi](../sociālā-izmaksu-un-ieguvumu-analīze/).

## Avoti

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
