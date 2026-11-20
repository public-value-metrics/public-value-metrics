# Analiza stroškovne učinkovitosti v upravi

Analiza stroškovne učinkovitosti (CEA) primerja stroške alternativnih načinov doseganja *istega* izida, izraženega v naravnih enotah (strošek na nastanjenega brezdomca, strošek na učenca, pripeljanega do pričakovanega standarda, strošek na tono prihranjenega CO2), ne da bi sam izid pretvorila v denar.

## Zakaj je pomembno

Green Book obravnava CEA kot rezervno metodo, kadar zahteva [družbene analize stroškov in koristi](../družbena-analiza-stroškov-in-koristi/), da se vsaka korist denarno ovrednoti, postane ne le težka, temveč nepoštena, in sicer tam, kjer bi verodostojna cena izida zahtevala predpostavke, ki jih nihče resnično ne sprejema (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5, o presoji možnosti, kjer izidi niso zlahka denarno izraženi). CEA je metoda, izposojena najbolj neposredno iz zdravstvene ekonomike (strukturno je enaka temu, kako NICE primerja zdravljenja s stroškom na kakovostno prilagojeno življenjsko leto), a uporabljena za nezdravstvene javne programe: izobraževalne intervencije na točko izida učenca, stanovanjski programi na gospodinjstvo, ki mu je preprečena brezdomnost, programi zaposlovanja na trajni izid zaposlitve.

Razlog, zakaj si CEA zasluži mesto ob SCBA in ne da jo ta vsrka, je, da vsiljevanje denarne vrednosti nekaterim izidom da številko, dovolj natančno, da izgleda verodostojno, in dovolj sporno, da je v javni razpravi brez vrednosti. Določanje cene »otroku, ki bere na pričakovanem standardu«, vabi prav tisti izziv, ki poslovni primer iztiri pred odborom parlamenta. CEA se sporu izogne tako, da ga noče imeti: možnosti razvrsti po stroških na enoto *samega izida* in ločeno politično presojo, ali je izid sploh vreden zasledovanja, prepusti strateškemu primeru.

## Matematika

```
Razmerje stroškovne učinkovitosti (povprečno) = skupni strošek / skupne dosežene enote izida

Inkrementalno razmerje stroškovne učinkovitosti (ICER), primerjava možnosti A z možnostjo B:
ICER = (Strošek_A − Strošek_B) / (Izid_A − Izid_B)

Postopek:
1. Določite enoto izida in metodo merjenja za vse primerjane možnosti.
2. Ovrednotite vsako možnost na isti podlagi (glej ../green-book-appraisal/, finančni primer)
   na istem časovnem horizontu.
3. Zavrzite dominirane možnosti: vsaka možnost, ki stane več na enoto kot cenejša
   alternativa z enakim ali boljšim izidom, odpade.
4. Preostale možnosti razvrstite po inkrementalnem, ne povprečnem, razmerju stroškovne učinkovitosti.
```

CEA sama po sebi ne more povedati, ali je program sploh vreden financiranja, temveč le, kateri od več pristopov k istemu cilju je najcenejši na enoto. Odločitev, ali je cilj sam vreden porabe, zahteva bodisi pretvorbo nazaj v SCBA (če obstaja verodostojna vrednost) bodisi politično/strateško presojo zunaj matematike. Kjer izidov resnično ni mogoče zvesti na eno enoto, ker program ustvarja več izidov, ki so pomembni na različne načine, namesto tega uporabite [večkriterijsko analizo odločanja](../večkriterijska-odločitvena-analiza/).

## Praktični primer

**Lokalna oblast**: svet primerja tri pristope k zmanjševanju spanja na prostem, vsakega ovrednotenega za eno leto glede na izid »posamezniki preseljeni v stalno nastanitev za 6+ mesecev«:

```
Možnost                         Strošek    Doseženi izidi   Povpr. CER
Housing First (intenzivno)      900.000 £  60               15.000 £/izid
Hostel + podpora pri selitvi    600.000 £  50               12.000 £/izid
Terensko delo + zasebni najem   350.000 £  20               17.500 £/izid

ICER, Hostel proti Terenskemu delu:  (600k−350k)/(50−20) = 8.333 £ na dodatni izid
ICER, Housing First proti Hostlu: (900k−600k)/(60−50) = 30.000 £ na dodatni izid
```

Terensko delo je po povprečnem stroških dominirano s Hostlom, a *inkrementalni* korak od Terenskega dela do Hostla stane le 8.333 £ na dodatno nastanjeno osebo, kar je poceni v primerjavi s korakom do Housing First, ki stane 30.000 £ za vsako dodatno osebo poleg tega, kar doseže Hostel. Oblast z omejenim proračunom, ki širi program, naj raje razširi Hostel pred Housing First, čeprav je Housing First po lastnem povprečnem razmerju videti boljši.

**Nacionalna vlada**: program nadoknadbe pismenosti se primerja med tremi modeli izvedbe po »strošku na učenca, ki doseže starosti primeren standard branja«: individualno poučevanje (1.800 £/učenca), poučevanje v majhnih skupinah (700 £/učenca) in zgolj digitalna intervencija (150 £/učenca, a le 40 % stopnje izida poučevanja v majhnih skupinah na vpisanega učenca po prilagoditvi za osip zavzetosti). Po prilagoditvi za dejansko dokončanje zgolj digitalna rešitev stane 375 £ na učenca, ki doseže standard, kar je še vedno najceneje, vendar CEA ne more povedati, ali je manjše absolutno število učencev, ki jim zgolj digitalna rešitev pomaga pri enakem proračunu kot poučevanje v majhnih skupinah, sprejemljiva menjava za doseganje manj učencev z večjo globino. To je porazdelitvena presoja, ki jo CEA vrača odločevalcem.

## Povezava s programskim inženirstvom

CEA je pravi okvir, kadar koli inženirske ekipe ocenjujejo pristope izvedbe za *isti* izid storitve: strošek na uspešno preverjeno identiteto pri treh ponudnikih preverjanja identitete, strošek na pravilno razvrščen primer pri dveh zasnovah avtomatizacije obravnave primerov, strošek na odpravljeno napako dostopnosti pri notranji proti pogodbeni odpravi. Disciplina, ki jo neposredno uvaža: pred primerjavo stroškov opredelite enoto izida (ne »zaprti zahtevki«, kar je izložek, temveč »dejansko rešena potreba uporabnika«) in vedno izračunajte inkrementalno razmerje med delujočim sistemom in predlaganim nadomestkom, ne povprečnega stroška vsakega sistema posamično. Glej [izidi in izložki](../izidi-in-izložki/) in [strošek na izid](../strošek-na-izid/).

## Pasti

- **Primerjanje povprečnih, ne inkrementalnih razmerij pri odločanju o razširitvi.** Kot kaže primer spanja na prostem, možnost z najboljšim povprečnim razmerjem ni vedno najcenejša naslednja enota izida za nakup.
- **Izbira enote izida, ki je v resnici izložek.** »Opravljene napotitve« ali »izvedena srečanja« merijo dejavnost, ne izida, zaradi katerega program obstaja; CEA na izložkih da samozavestno videti številko, ki odgovarja na napačno vprašanje.
- **Primerjanje med resnično različnimi izidi.** CEA velja le, kadar vse možnosti ciljajo isti izid, merjen na isti način; primerjava »strošek na nastanjenega brezdomca« proti »strošek na mladostnika po zapustitvi skrbi v stabilnem najemu« zahteva generično merilo izida ali [večkriterijsko analizo odločanja](../večkriterijska-odločitvena-analiza/), ne CEA.
- **Zanemarjanje trajnosti izida.** Cenejša možnost, katere izidi ne obstanejo (učenec, ki nazaduje po koncu intervencije), v resnici ni stroškovno učinkovitejša, ko jo izmerimo na primerljivem horizontu; obdobje spremljanja uskladite med primerjanimi možnostmi.

## Viri

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  metoda stroškovne učinkovitosti, iz katere se ta vladna prilagoditev izposoja.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
