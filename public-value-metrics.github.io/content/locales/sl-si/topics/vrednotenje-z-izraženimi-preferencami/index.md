# Vrednotenje z izraženimi preferencami

Metode izraženih preferenc ocenjujejo vrednost netržne dobrine tako, da ljudi neposredno vprašajo, koliko bi bili pripravljeni plačati zanjo ali kakšno nadomestilo bi bili pripravljeni sprejeti za njeno opustitev, običajno z strukturirano anketo, ki opisuje hipotetični scenarij. Kontingentno vrednotenje je najbolj znana tehnika v tej družini.

## Zakaj je pomembno

Priloga 2 Green Book (dopolnilne smernice o vrednotenju netržnih učinkov) podpira metode izraženih preferenc za dobrine, pri katerih sploh ni opazne tržne transakcije, iz katere bi lahko sklepali vrednost – kakovost zraka, biotska raznovrstnost, zaščita pred poplavami, obstojna vrednost krajine, ki je nekdo morda nikoli ne bo obiskal
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra je objavil lastne smernice za izražene preference pri okoljskem vrednotenju ravno zato, ker velik del okoljske vrednosti (ohranjanje habitatov, kakovost vode) nima nikakršnega nadomestnega trga, za razliko od hrupa, ki se vsaj povezuje z opaznimi cenami hiš (glej [vrednotenje z razkritimi preferencami](../vrednotenje-po-razkritih-preferencah/)).

Osrednja privlačnost izraženih preferenc – lahko ovrednotijo dobesedno vse, tudi dobrine, s katerimi se nihče nikoli ni trgoval – je tudi vir težav z njihovo verodostojnostjo. Ker anketiranci dejansko ne trošijo denarja, so ankete kontingentnega vrednotenja ranljive za hipotetično pristranskost (ljudje precenijo pripravljenost plačati, kadar ni resnične proračunske omejitve), učinke vgnezdenja (ista dobrina je vrednotena različno glede na to, kaj je še v anketi) in pristranskost začetne točke pri zasnovah z licitiranjem. Panel NOAA iz leta 1993 o kontingentnem vrednotenju, sklican po sodnih postopkih zaradi razlitja nafte Exxon Valdez, je določil standarde zasnove – dvojiško obliko referenduma »ali bi plačali £X, da/ne« namesto odprtega licitiranja in obvezne opomnike na dejansko proračunsko omejitev anketiranca – ki ostajajo referenčni standard za obranljive ankete.

## Matematika

```
Kontingentno vrednotenje (oblika referenduma):
  Predstavite dvojiško izbiro: »ali bi plačali £X na leto za izid Y? da/ne«
  X naključno spreminjajte med anketiranci.
  Pripravljenost plačati prilagodite kot funkcijo deleža odgovorov da/ne pri vsakem X.

Povprečni WTP = površina pod ocenjeno krivuljo povpraševanja
Skupna vrednost = povprečni WTP × prizadeto prebivalstvo

Različica poskusa izbire (modeliranje diskretne izbire):
  Anketirancem predstavite ponavljajoče se izbire med sveženji lastnosti
  (vključno s stroškovno lastnostjo), implicitne cene za vsako
  nestroškovno lastnost ocenite iz kompromisov, ki jih anketiranci razkrijejo.
```

Različica poskusa izbire je v sedanji britanski praksi na splošno bolj priljubljena kot kontingentno vrednotenje z enim vprašanjem, ker prisiljevanje anketirancev k večkratnemu tehtanju več lastnosti proti stroškom ustvari notranje bolj skladne ocene, ki jih je težje izigrati, kot eno samo vprašanje da/ne.

## Praktični primer

**Državna uprava**: Defra naroči anketo kontingentnega vrednotenja za vrednotenje programa izboljšanja kakovosti vode v reki. Anketa v obliki referenduma na 2 000 gospodinjstvih ugotovi, da bi 62 % plačalo £40/leto prek hipotetičnega dodatka k računu za vodo, ocenjena krivulja povpraševanja pa da povprečno pripravljenost plačati £28/leto na gospodinjstvo.

```
Povprečni WTP = £28/gospodinjstvo/leto
Gospodinjstva v povodju = 340 000
Skupna letna vrednost = £28 × 340 000 = £9,52 mio/leto

V 20-letnem obdobju ocene pri 3,5-odstotni diskontni stopnji (rentni faktor ≈ 14,2):
PV(korist) ≈ £9,52 mio × 14,2 ≈ £135 mio
```

Ta skupna številka se nato primerja s stroškovno stranjo [družbene analize stroškov in koristi](../družbena-analiza-stroškov-in-koristi/) programa. Green Book zahteva, da se takšni dokazi o izraženih preferencah poročajo skupaj z intervalom zaupanja in metodologijo ankete, ne kot gola točkovna ocena, ravno ker je osnovno število bolj krhko od tržne cene.

**Dobrodelna organizacija**: dediščinski sklad anketira obiskovalce in neobiskovalce o pripravljenosti plačati za preprečitev zaprtja zgodovinske stavbe, ki je nobena skupina nujno ne obišče (njena obstojna vrednost). Ker neobiskovalci, ki stavbe nikoli ne bodo videli, vseeno poročajo o pozitivni pripravljenosti plačati, anketa zajame obstojno in zapuščinsko vrednost, ki bi jo preprosto štetje prihodka od vstopnin obiskovalcev (nadomestek razkritih preferenc) popolnoma zgrešilo – kar kaže pravo prednost izraženih preferenc, kadar ne obstaja nobena tržna transakcija, ki bi razkrila vrednost.

## Povezava s programskim inženirstvom

Metode izraženih preferenc se redko neposredno nanašajo na delo programskega inženirstva, vendar inženirji, ki gradijo platforme za posvetovanje z državljani, orodja za sodelovanje pri proračunu ali infrastrukturo javnih anket, pogosto gradijo instrument, od katerega je ekonomija odvisna. Pravilna zasnova ankete – naključni zneski ponudb, dvojiško referendumsko oblikovanje namesto odprtih vprašanj, izrecni opomniki na proračunsko omejitev – ni uporabniška vljudnost, ampak to, kar naredi nastalo vrednotenje obranljivo pod nadzorom; slabo zasnovana anketa v aplikaciji lahko razveljavi mesece poznejše ekonomske analize. Glej [merila zadovoljstva državljanov](../metrike-zadovoljstva-državljanov/) za splošnejšo disciplino zbiranja podatkov o javnem mnenju, ki bodo imeli analitično težo.

## Pasti

- **Odprta vprašanja »koliko bi plačali?«.** So veliko bolj nagnjena k strateški pristranskosti in sidranju kot dvojiško referendumsko oblikovanje; priporočilo panela NOAA za obliko referenduma obstaja ravno zato, ker odprto izvabljanje deluje slabo.
- **Brez opomnika na dejansko proračunsko omejitev anketiranca.** Brez njega izražena pripravljenost plačati običajno presega to, kar bi isti ljudje plačali ob resničnem proračunskem kompromisu – hipotetična pristranskost.
- **Prezrti učinki vgnezdenja.** Ista dobrina, vrednotena sama, in kot del večjega sveženja, daje različne ocene pripravljenosti plačati; poročajte, kaj je še bilo, če sploh, v okviru ankete.
- **Obravnavanje točkovne ocene ene ankete kot dokončne.** Praksa Green Book pričakuje razpon in razpravo o znanih pristranskostih, ne gole številke, prenesene v tabelo stroškov in koristi, kot da bi bila tržna cena.

## Viri

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
