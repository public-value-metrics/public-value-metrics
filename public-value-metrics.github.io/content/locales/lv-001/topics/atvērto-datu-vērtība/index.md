# Atvērto datu vērtība

Atvērto datu vērtība ir problēma, kā novērtēt, cik vērti ir valdības un publiskie dati, kuriem nav
cenas: tie netiek pārdoti, tāpēc nav ieņēmumu rindas, tomēr to atklāšana (laikapstākļu ieraksti,
satiksmes saraksti, pasta indeksu robežas, uzņēmumu reģistri) pierādāmi rada ekonomisko un sociālo
aktivitāti lejpus plūsmā. Pareiza vērtēšana ir svarīga, jo gan "atklāt ir par velti", gan "tas ir
bezvērtīgi" ir nepareizi, un programmatūras inženierim, kurš izlemj, vai atvērt API vai datu kopu, ir
vajadzīgs labāks arguments nekā jebkurš no tiem.

## Kāpēc tas ir svarīgi

Visbiežāk citētais augšupējais novērtējums nāk no McKinsey Global Institute 2013. gada ziņojuma "Open data:
Unlocking innovation and performance with liquid information", kurā atvērto datu potenciālā gada vērtība
septiņās jomās — izglītībā, transportā, patēriņa precēs, elektroenerģijā, naftā un gāzē, veselības aprūpē
un patērētāju finansēs — tika lēsta 3 līdz 5 triljoni dolāru gadā visā pasaulē, izmantojot tādus mehānismus
kā lielāka pārredzamība, efektīvāka piedāvājuma un pieprasījuma saskaņošana un jaunu produktu un
pakalpojumu veidošana uz datu bāzes. Šis skaitlis ir scenārija novērtējums, nevis izmērīts rezultāts, un
to regulāri citē nepareizi, it kā tie būtu ieņēmumi, ko valdība varētu iegūt tieši, kaut gan vērtība lielākoties
rodas trešajām pusēm — uzņēmumiem, pētniekiem, iedzīvotājiem —, kas datus izmanto, un tieši tāpēc dati tiek
atvērti, nevis pārdoti. Apvienotās Karalistes Open Data Institute, ko 2012. gadā līdzdibināja sers Tims
Bērnerss-Lī (Tim Berners-Lee) un sers Naidžels Šedbolts (Nigel Shadbolt), kopš tā laika ir izveidojis
detalizētāku, augšupēju gadījumu pētījumu kopumu — pa nozarēm un pa datu kopām —, kas reāla biznesa
gadījuma vajadzībām ir daudz noderīgāks par McKinsey virsrakstā minēto skaitli, jo rāda vērtības radīšanas
mehānismu, nevis tikai tās kopējo apmēru.

## Matemātika

Atvērtajiem datiem nav tirgus cenas, tāpēc vērtēšanas metodes to aizstāj; atkārtojas trīs pieejas, un
neviena nav pietiekama atsevišķi:

```
1. Izvairīto izmaksu / aizstāšanas izmaksu metode:
   vērtība ≈ ko lietotāji būtu maksājuši, lai paši izveidotu vai
   licencētu līdzvērtīgus datus — apakšējā robeža, ignorē vērtību,
   ko rada izmantošanas veidi, kurus sākotnējais ražotājs
   nav paredzējis

2. Tirgus analoga / lejupējās aktivitātes metode:
   vērtība ≈ ieņēmumi vai ietaupījumi, ko rada uz datiem
   balstīti uzņēmumi/pakalpojumi (piem., navigācijas lietotnes,
   kas balstītas uz atvērtiem kartēšanas un satiksmes datiem) — aptver reālu
   ekonomisko aktivitāti, bet to ir grūti tīri attiecināt
   uz pašu datu atklāšanu (skatiet additionality-and-deadweight)

3. Kontingentā / deklarēto preferenču metode:
   vērtība ≈ ko lietotāji saka, ka būtu gatavi maksāt, vai laiks,
   ko viņi saka, ka tas viņiem ietaupa — vispārīgo metodi un tās
   aizspriedumus skatiet stated-preference-valuation

Neviena no tām nedod tik tīru skaitli kā tirgus cena; ticami atvērto
datu biznesa gadījumi triangulē vismaz divas metodes un skaidri norāda,
kurš mehānisms veic galveno darbu.
```

## Aprēķina piemērs

**Ilustratīva valsts kartēšanas/adrešu datu atklāšana** (metodoloģija pēc ODI tipa gadījumu pētījumiem,
skaitļi ilustrē mērogu, kādu šādi pētījumi parasti atrod):

```
Izvairīto izmaksu novērtējums:
  Uzņēmumi, kas citādi komerciāli licencētu līdzvērtīgus adrešu
  saskaņošanas datus par aptuveni £4 000 vidējām licences izmaksām
  gadā, aptuveni 15 000 MVU, kas tagad izmanto bezmaksas atvērto datu kopu
  = 15 000 × £4 000 = £60 000 000/gadā tikai no izvairītām licencēšanas izmaksām

Lejupējās aktivitātes novērtējums (spekulatīvāks, vajadzīgs kontrafaktiskais scenārijs):
  Jauni piegādes maršrutēšanas un loģistikas produkti, kas uz atvērtajiem
  datiem balstīti un bez tiem nepastāvētu vai būtu ievērojami sliktāki —
  nepieciešams salīdzinājums ar kontrafaktisko scenāriju, ka dati paliek
  slēgti vai komerciāli licencēti (counterfactual-analysis), jo daļa šīs
  aktivitātes tāpat notiktu uz maksas datiem par augstāku cenu, un tas
  ir deadweight efekts attiecībā uz "atvēršanas radīto vērtību"

Aizstāvams biznesa gadījums izvairīto izmaksu skaitli uzrāda kā stabilu
apakšējo robežu, bet lejupējās aktivitātes skaitli uzskata par augšējās
robežas scenāriju, nevis faktu.
```

## Saikne ar programmatūras inženieriju

Inženieriem praktiskais atvērto datu vērtības jautājums parasti ir šaurāks par valsts mēroga virsrakstu
skaitļiem: vai šī konkrētā API vai datu kopas atvēršana (nevis turēšana aiz partnerības līguma) palielina
atkalizmantošanu pietiekami, lai attaisnotu pastāvīgās izmaksas par tās dokumentēšanu, versiju veidošanu
un atbalstīšanu kā publisku saskarni? Šīs uzturēšanas izmaksas ir reālas un ir pretstats principam "izveido
vienreiz, izmanto bieži" [valdība kā platforma](../valdība-kā-platforma/) ekonomikā — abas tēmas ir
tuvi radinieki, viena par kopīgu kodu un infrastruktūru, otra par kopīgiem datiem. Jebkurš apgalvojums par
atvērto datu vērtību jāpārbauda pret [papildinātību un deadweight efektu](../papildinātība-un-inerces-efekts/),
pirms tas nonāk biznesa gadījumā: aktivitāte, kas notiktu tāpat uz komerciāli licencētiem datiem, nav
vērtība, ko radīja *atvēršana*.

## Biežākās kļūdas

- **McKinsey 3–5 triljonu dolāru skaitļa citēšana kā specifiska Apvienotajai Karalistei vai kā šīs datu
  kopas daļa**: tas ir 2013. gada globāls septiņu nozaru scenārija novērtējums — izmantot to kā precīzu
  reizinātāju vienai valsts datu kopai nozīmē sagrozīt to, kas šis skaitlis ir.
- **Nav kontrafaktiskā scenārija**: sev piedēvēt visu lejupējo ekonomisko aktivitāti, kas balstīta uz
  atvērtajiem datiem, nejautājot, cik daudz no tās tāpat notiktu uz maksas vai licencētiem datiem par
  augstāku cenu (skatiet [papildinātība un deadweight efekts](../papildinātība-un-inerces-efekts/) un
  [kontrafaktiskā analīze](../kontrfaktiskā-analīze/)).
- **Ražošanas izmaksu jaukšana ar radīto vērtību**: dārgi savāktas datu kopas atklāšana nav automātiski
  vērtīga, un lēta nav automātiski mazvērtīga — vērtība seko lejupējai izmantošanai, nevis augšupējām
  izmaksām.
- **"Atvērtības" pastāvīgo uzturēšanas izmaksu ignorēšana**: vienreizēja CSV izvilkuma publicēšana nav
  tāda pati apņemšanās kā dokumentētas, versijotas, atbalstītas atvērtās API darbināšana — pēdējās
  nepietiekama finansēšana pēc palaišanas paziņojuma ir bieža neveiksmes forma.

## Avoti

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
