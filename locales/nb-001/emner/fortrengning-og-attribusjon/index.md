# Fortrengning og attribusjon

Fortrengning (displacement) oppstår når et programs tilsynelatende nytte oppnås ved å ta aktivitet eller nytte bort fra et annet sted, i stedet for å skape noe nytt – din gevinst er en annens tap. Attribusjon er det beslektede spørsmålet om hvor mye av et observert utfall tiltaket ditt faktisk kan ta æren for, når andre aktører og faktorer også har bidratt. Begge er standardjusteringer i britisk veiledning for evaluering i offentlig sektor, sammen med dødvekt og lekkasje, og begge hoppes rutinemessig over i påstander om effekt som ser langt sterkere ut enn de er.

## Hvorfor det er viktig

En kommunes tilskuddsordning for næringsdrivende som hjelper 50 butikker å flytte inn i en byfornyelsessone, kan rapportere «50 bedrifter støttet, 200 arbeidsplasser skapt» – men hvis bedriftene bare flyttet fra en nabogate i stedet for å vokse, ble arbeidsplassene fortrengt, ikke skapt, og nettoeffekten for hele bydelen (eller regionen) kan være nær null. HM Treasurys Magenta Book og den veletablerte Additionality Guide behandler fortrengning som et påkrevd fradrag nettopp fordi lokale suksesshistorier er vanlige selv når de ikke gir noen nettonytte nasjonalt eller regionalt – verdi har bare flyttet seg, ofte til ulempe for området eller aktørene som mistet den. Veiledning for evaluering av strukturfond (brukt for tidligere programmer under EUs regionalfond og deres nasjonale etterfølgere, som UK Shared Prosperity Fund) formaliserer dette på tre geografiske nivåer: lokal fortrengning (innenfor en by), regional fortrengning (innenfor en region) og nasjonal fortrengning (på tvers av Storbritannia), fordi et tiltak kan være addisjonelt på ett nivå og ren fortrengning på et videre nivå – et sysselsettingsprogram som trekker arbeidere fra en nabobyen er nasjonalt nøytralt selv om det ser ut som en lokal suksess.

Attribusjon er søsterproblemet i leveranse med mange partnere, som nå er normen i sosial sektor og i offentlig tjenesteyting på tvers av etater. Når tre organisasjoner leverer en tjeneste for å forebygge bostedsløshet sammen, kan hver organisasjons årsrapport uavhengig kreve æren for den samme nedgangen i antall som sover ute – summert på tvers av rapportene kan den påståtte effekten overstige den observerte endringen i virkeligheten, noen ganger med flere ganger. Magenta Books veiledning om bidragsanalyse finnes nettopp fordi det ofte er umulig å tilskrive effekt til én enkelt aktør i leveranse på tvers av etater, og det ærlige svaret er ofte «vi bidro til dette utfallet» snarere enn «vi forårsaket dette utfallet».

## Regnestykket

Fortrengning som del av standardrekkefølgen for nettoeffekt (se [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/) for hele kjeden):

```
Netto addisjonell effekt = Brutto utfall − Dødvekt − Fortrengning − Lekkasje, × Multiplikator

Fortrengningsrate = nytte/aktivitet flyttet fra et annet sted
                     / samlet observert brutto nytte/aktivitet
```

Attribusjon, der flere aktører bidrar til ett utfall, uttrykkes vanligvis som en bidragsandel snarere enn en presis prosent, fordi den vanligvis ikke kan måles med samme strenghet som fortrengning:

```
Tilskrivbar andel ≈ f(styrken på det kausale bidraget, andre aktørers bidrag,
                        eksterne/kontekstuelle faktorer)

Påstått effekt bør aldri overstige:
  Σ (hver partners tilskrivbare andel) ≤ 100 % av det samlede observerte utfallet
```

## Utregnet eksempel

**Byfornyelsestilskudd**: En kommunes tilskuddsordning for sentrumsgater rapporterer 200 nye arbeidsplasser i detaljhandelen i den støttede sonen. Oppfølgende spørreundersøkelser viser at 60 av disse arbeidsplassene kom fra bedrifter som flyttet fra en nærliggende, ikke-støttet gate i samme kommune, og ytterligere 30 kom fra nasjonale kjeder som åpnet filialer som ville ha åpnet et sted i regionen uansett tilskuddet.

```
Påståtte brutto arbeidsplasser = 200
Lokal fortrengning = 60 (flyttet innenfor kommunen)
Regional fortrengning = 30 (ville uansett ha åpnet i regionen)

Netto addisjonelle arbeidsplasser (kommunenivå) = 200 − 60 = 140
Netto addisjonelle arbeidsplasser (regionalt nivå) = 200 − 60 − 30 = 110
```

Det ærlige hovedtallet avhenger av det geografiske nivået finansiøren bryr seg om – en Treasury-forretningscase vurdert på nasjonalt eller regionalt nivå bør bruke 110, ikke 140 på kommunenivå, og absolutt ikke de rå 200.

**Flerorganisasjonstjeneste mot bostedsløshet**: Tre partnerorganisasjoner (en kommune, en bolig-veldedighetsorganisasjon og et helseforetak) leverer sammen en tjeneste for å redusere antall som sover ute. Antallet i området falt med 30 personer i løpet av året. Hver organisasjons egen årsrapport hevder «vi reduserte antallet som sover ute med 30» – summert hevder de tre rapportene 90 personer hjulpet, tre ganger den faktiske reduksjonen. En bidragsanalyse som gir hver partner en andel (si 40 % kommunen, 35 % veldedighetsorganisasjonen, 25 % helseforetaket, basert på dokumentert rolle og uavhengig vurdering) ville rapportere henholdsvis 12, 10,5 og 7,5, som korrekt summerer til de observerte 30.

## Sammenheng med programvareutvikling

Fortrengning og attribusjon påvirker hvordan systemer for effektsporing og resultatrapportering bør utformes for leveranse på flere steder eller med flere partnere:

- Geografisk og organisatorisk omfang bør være eksplisitte, likeverdige felt i ethvert effektdashbord – et tall rapportert «for kommunen» og det samme tallet rapportert «for regionen» er ulike tall, og et system som blander dem sammen, produserer tall som ikke kan avstemmes på porteføljenivå.
- Der flere partnere leverer sammen, bør et resultatsystem registrere bidragsandeler (eller i det minste flagge felles attribusjon) i stedet for å la hver partners rapporteringsmodul uavhengig kreve 100 % av et felles utfall – ellers vil sammenstillinger på porteføljenivå overdrive den samlede effekten, noen ganger kraftig.
- Dette henger sammen med [sosial avkastning på investering](../sosial-avkastning-på-investering/) og [rapportering av tilskuddsresultater](../rapportering-av-tilskuddsresultater/): En SROI- eller IRIS+-beregning som ignorerer fortrengning eller overtilskriver felles utfall, gir et oppblåst forholdstall som ikke tåler revisjon eller etterprøving.

## Fallgruver

- **Å rapportere lokal suksess uten å sjekke fortrengning på videre nivå.** Et program kan se svært vellykket ut på det minste rapporteringsnivået mens det er nøytralt eller til og med negativt på et videre nivå – oppgi alltid hvilket geografisk nivå nettotallet gjelder.
- **Å la hver partner i en felles leveranse kreve full ære.** Med mindre bidragsandeler er avtalt og dokumentert, vil sammenstilt rapportering på tvers av partnere overdrive den samlede effekten – kontroller at partnernes påstander summerer til høyst det observerte totalet.
- **Å behandle attribusjon som en presis prosent når den egentlig er en vurdering.** Bidragsanalyse gir, i motsetning til et randomisert kontrafaktisk scenario, et forsvarlig anslag, ikke et målt faktum – presenter det med passende usikkerhet i stedet for falsk presisjon.
- **Å overse fortrengning i markedsrettede tiltak.** Bedriftsstøtte, sysselsettingsordninger og stedsbasert byfornyelse er de klassiske kategoriene med høy fortrengning – behandle fortrengningskontroller som obligatoriske for disse, ikke valgfrie.

## Kilder

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
