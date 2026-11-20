# Veidot vai pirkt valdībā

Veidot vai pirkt (angl. build vs buy) ir strukturēts, ar risku koriģēts pielāgotas izstrādes salīdzinājums ar komerciālu vai standartprodukta iegādi, salīdzinot pēc diskontētām [kopējām īpašumtiesību izmaksām](../kopējās-piederības-izmaksas-valsts-it/), laika līdz vērtībai un riska. Valdība strukturāli ir pircēja sektors — Technology Code of Practice nosaka prezumpciju par labu standartrisinājumiem un mākoņrisinājumiem —, tomēr departamentu iekšējās inženieru komandas joprojām pēc noklusējuma izvēlas veidot pašas, tādu pašu iemeslu dēļ kā veidotāji visur.

## Kāpēc tas ir svarīgi

Government Digital Service Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) un tam pievienotie Service Manual norādījumi par lēmumu veidot vai pirkt mudina departamentus attaisnot individuālu izstrādi pret prezumpciju, ka standartspēja jāpērk, nevis jāveido, un ka pielāgotu kodu pamato tikai patiesi jauna, misiju diferencējoša spēja. HM Treasury papildu norādījumi par optimisma novirzi Green Book, kas pamatoti ar 2002. gada Mott MacDonald pārskatu par lieliem publiskajiem iepirkumiem, piešķir IT projektiem plašāko korekcijas diapazonu no visām novērtētajām kategorijām — kapitāla izmaksu aplēses pirms izmantošanas novērtēšanā ieteicams palielināt no 10 % zemākajā galā līdz pat 200 % augstākajā, atspoguļojot, cik ļoti programmatūras izstrāde publiskajos iepirkumos vēsturiski ir nenovērtēta. Veidot-vai-pirkt analīze pastāv tieši tāpēc, lai šo riska korekciju liktu uz galda pirms apstiprināšanas, nevis ļautu tai parādīties kā gada laikā iesniegtam pārtēriņa pieprasījumam.

## Matemātika

```
Salīdzina vienā un tajā pašā 3–5 gadu horizontā, diskontējot ar Green Book
sociālo diskonta likmi (sk. social-discount-rate.md):

NPV_variants = PV(ieguvumi, nobīdīti ar laiku līdz vērtībai) − PV(TCO)

Riska korekcijas (Green Book optimisma novirzes shēma):
  veidošanas izmaksas × 1,1–3,0   (IT projektu korekcijas diapazons, Mott MacDonald)
  veidošanas laiks līdz vērtībai + 40–60 % (ieviešanas kavējuma priors)
  pirkšana: tā vietā pievieno integrācijas realitātes pārbaudi un līguma izbeigšanas izmaksas

Lēmuma dzinuļi, kādā secībā tie parasti izšķir:
  1. diferenciācija — vai šī spēja ir misija vai santehnika?
  2. laiks līdz vērtībai × kavēšanās izmaksas (sk. cost-of-delay-in-public-programmes.md)
  3. ar risku koriģētas kopējās īpašumtiesību izmaksas
```

## Aprēķina piemērs

Pašvaldībai vajadzīga pieaugušo sociālās aprūpes lietu pārvaldības sistēma. Pirkt: SaaS par £180 000 gadā, darbībā pēc 4 mēnešiem. Veidot: aplēstas £900 000 plus £150 000 gadā uzturēšana, darbībā pēc 14 mēnešiem.

```
Ar risku koriģētas veidošanas izmaksas = 900 000 × 1,4 = £1 260 000
5 gadu TCO:
  pirkt  = 180 000 × 5 = £900 000
  veidot = 1 260 000 + 150 000 × 5 = £2 010 000

Kavēšanās loceklis: sistēma novērš £40 000 mēnesī dublētu novērtējumu izmaksu;
veidotā sistēma ierodas 10 mēnešus vēlāk nekā nopirktā.
CoD = 10 × 40 000 = £400 000

Efektīvais salīdzinājums: £900 000 (pirkt) pret £2 010 000 + £400 000 = £2 410 000 (veidot)
```

Pirkšana uzvar aptuveni par £1,5 miljoniem piecos gados, un lielākā atsevišķā pozīcija aiz paša veidošanas aprēķina ir kavēšanās izmaksas, ko tīrs kapitālizdevumu salīdzinājums nekad nebūtu atklājis.

## Saikne ar programmatūras inženieriju

Disciplīnas, kas no šīs analīzes tieši pāriet piegādes praksē: **uz priora balstīta riska korekcija** — Mott MacDonald korekcija ir programmatūras ekvivalents Green Book optimisma novirzei, kas piemērota mehāniski, tāpēc komandām jāargumentē izņēmumi, nevis jāpieņem, ka to aplēse ir izņēmums; **salīdzinājuma godīgums** — alternatīva veidošanai ir labākā pieejamā pirkšanas iespēja, nevis „nekas", kas tieši saistīts ar [alternatīvajām izmaksām publiskajos izdevumos](../alternatīvās-izmaksas-publiskajos-izdevumos/); un **godīgs TCO salīdzinājums** — katrs veidošanas priekšlikums jāsalīdzina ar pirkšanas varianta pilnām [kopējām īpašumtiesību izmaksām](../kopējās-piederības-izmaksas-valsts-it/), nevis ar tā cenu lapas cenu. Kur veidošana patiešām uzvar, papildu veidošanas laika [kavēšanās izmaksas](../kavēšanās-izmaksas-publiskajās-programmās/) jāizmaksā skaidri biznesa gadījumā, nevis jāatstāj kā nenorādīts pieņēmums, ka laikam nav nozīmes.

## Biežākās kļūdas

- **Piegādātāja cenu lapas cenas salīdzināšana ar ar risku nekoriģētu veidošanas aplēsi**: tas divkārši glaimo veidošanai — gan izmaksu, gan grafika ziņā.
- **Iekšējā darba nulles cena**: valsts dienesta inženieru laiks tiek uzskatīts par „bezmaksas", jo tas jau ir departamenta štata budžetā, kas slēpj tā patiesās alternatīvās izmaksas pret citu darbu, ko komanda varētu veikt.
- **Neizmaksāta piesaiste abos virzienos**: piegādātāja maiņas un datu pārnesamības izmaksas ir reālas, taču tāpat ir individuāli veidota risinājuma autobusa faktors (bus-factor) un atkarība no neliela, grūti aizvietojama iekšējā komandas saglabāšanas visu tā mūžu.
- **Misijas diferenciācija, kas apgalvota par santehniku**: „tas mums ir svarīgi" apgalvots par integrācijas starpprogrammatūru vai dokumentu krātuvi — pārbaudiet, vai iedzīvotājs vai darbinieks jebkad pamanītu, kurš risinājums darbojas apakšā.

## Avoti

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
