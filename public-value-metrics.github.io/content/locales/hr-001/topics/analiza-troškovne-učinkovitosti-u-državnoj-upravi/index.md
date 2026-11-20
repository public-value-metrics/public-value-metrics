# Analiza troškovne učinkovitosti u državnoj upravi

Analiza troškovne učinkovitosti (CEA, engl. cost-effectiveness analysis) uspoređuje troškove alternativnih načina postizanja *istog* ishoda izraženog u prirodnim jedinicama, kao što su trošak po smještenoj osobi koja spava na ulici, trošak po učeniku dovedenom do očekivanog standarda ili trošak po toni uklonjenog CO2, bez pretvaranja samog ishoda u novac.

## Zašto je važno

Green Book tretira CEA kao zamjensku metodu kad zahtjev [društvene analize troškova i koristi](../društvena-analiza-troškova-i-koristi/) da se svaka korist novčano iskaže postane ne samo težak nego i nepošten, ondje gdje bi vjerodostojno vrednovanje ishoda zahtijevalo pretpostavke koje nitko doista ne dijeli
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
poglavlje 5, o procjeni opcija kad se ishodi ne mogu lako novčano iskazati). CEA je metoda preuzeta najizravnije iz zdravstvene ekonomike: strukturno je identična načinu na koji NICE uspoređuje liječenja prema trošku po godini života prilagođenoj kvaliteti (QALY), ali primijenjena na nezdravstvene javne programe: obrazovne intervencije po bodu ishoda učenika, stambene programe po kućanstvu kojem je spriječeno beskućništvo, programe zapošljavanja po održivom ishodu zaposlenja.

Razlog zašto CEA zaslužuje mjesto uz SCBA, a ne da bude njome obuhvaćena, jest to što nametanje novčane vrijednosti nekim ishodima daje broj dovoljno precizan da djeluje autoritativno, a dovoljno osporen da je bezvrijedan u javnoj raspravi: stavljanje cijene na „dijete koje čita na očekivanoj razini” poziva upravo na onu vrstu osporavanja koja izbacuje poslovni slučaj iz kolosijeka pred parlamentarnim odborom. CEA zaobilazi spor odbijajući ga voditi: rangira opcije prema trošku po jedinici *samog ishoda*, a zasebnu političku prosudbu vrijedi li ishod uopće slijediti prepušta strateškom slučaju.

## Matematika

```
Omjer troškovne učinkovitosti (prosječni) = ukupni trošak / ukupno postignutih jedinica ishoda

Inkrementalni omjer troškovne učinkovitosti (ICER), usporedba opcije A s opcijom B:
ICER = (Trošak_A − Trošak_B) / (Ishod_A − Ishod_B)

Postupak:
1. Utvrditi jedinicu ishoda i metodu mjerenja jednake za sve opcije koje se uspoređuju.
2. Vrednovati svaku opciju na istoj osnovi (vidi ../green-book-appraisal/, financijski slučaj)
   na istom vremenskom horizontu.
3. Odbaciti dominirane opcije: svaka opcija koja košta više po jedinici od jeftinije
   alternative koja postiže isti ili bolji ishod odbacuje se.
4. Rangirati preostale opcije prema inkrementalnom, a ne prosječnom, omjeru troškovne učinkovitosti.
```

CEA sama po sebi ne može reći vrijedi li program uopće financirati, nego samo koji je od nekoliko pristupa istom cilju najjeftiniji po jedinici. Odluka vrijedi li sam cilj potrošnje zahtijeva ili povratak na SCBA (ako postoji vjerodostojno vrednovanje) ili političku/stratešku prosudbu izvan matematike. Ondje gdje se ishodi doista ne mogu svesti na jednu jedinicu, jer program stvara više ishoda koji su važni na različite načine, umjesto toga koristite [višekriterijsku analizu odlučivanja](../višekriterijska-analiza-odlučivanja/).

## Primjer iz prakse

**Lokalna vlast**: vijeće uspoređuje tri pristupa smanjenju spavanja na ulici, svaki vrednovan na godinu dana prema ishodu „osobe useljene u stabilan smještaj na 6+ mjeseci”:

```
Opcija                              Trošak     Postignuti ishodi   Prosj. CER
Housing First (intenzivno)          900.000 £  60                  15.000 £/ishod
Prihvatilište + potpora pri prelasku 600.000 £ 50                  12.000 £/ishod
Terenski rad + privatni najam       350.000 £  20                  17.500 £/ishod

ICER, Prihvatilište naspram Terenskog rada: (600k−350k)/(50−20) = 8.333 £ po dodatnom ishodu
ICER, Housing First naspram Prihvatilišta: (900k−600k)/(60−50) = 30.000 £ po dodatnom ishodu
```

Terenski rad dominiran je prosječnim troškom Prihvatilišta, ali *inkrementalni* korak od Terenskog rada do Prihvatilišta košta samo 8.333 £ po dodatno smještenoj osobi, što je jeftino u odnosu na korak do Housing Firsta, koji košta 30.000 £ za svaku dodatnu osobu povrh onoga što postiže Prihvatilište. Vlast s ograničenim proračunom koja se širi trebala bi prvo proširiti Prihvatilište prije Housing Firsta, iako Housing First na vlastitom prosječnom omjeru izgleda bolje.

**Nacionalna vlada**: program nadoknade pismenosti uspoređuje se kroz tri modela isporuke prema „trošku po učeniku koji dosegne standard čitanja primjeren dobi”: individualno podučavanje (1.800 £/učeniku), podučavanje u maloj skupini (700 £/učeniku) i isključivo digitalna intervencija (150 £/učeniku, ali samo 40 % stope ishoda podučavanja u maloj skupini po upisanom učeniku nakon prilagodbe za odustajanje). Kad se prilagodi stvarnom dovršetku, isključivo digitalna košta 375 £ po učeniku koji dosegne standard, što je i dalje najjeftinije, no CEA ne može reći je li manji apsolutni broj učenika kojima pomaže isključivo digitalna, ako se isporučuje uz isti proračun kao mala skupina, prihvatljiva zamjena za dosezanje manjeg broja učenika s većom dubinom; to je distribucijska prosudba koju CEA vraća donositeljima odluka.

## Veza s programskim inženjerstvom

CEA je pravi okvir kad god inženjerski timovi evaluiraju pristupe isporuci za *isti* ishod usluge: trošak po uspješno provjerenom identitetu kod triju dobavljača provjere identiteta, trošak po ispravno trijažiranom slučaju kod dvaju dizajna automatizacije obrade slučajeva, trošak po otklonjenom nedostatku pristupačnosti kod interne naspram ugovorene sanacije. Disciplina koju izravno uvozi: definirajte jedinicu ishoda prije usporedbe troškova (ne „zatvoreni tiketi”, što je izlazni rezultat, nego „stvarno riješena potreba korisnika”) i uvijek računajte inkrementalni omjer između postojećeg sustava i predložene zamjene, a ne prosječni trošak svakog sustava izolirano. Vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) i [trošak po ishodu](../trošak-po-ishodu/).

## Zamke

- **Usporedba prosječnih, a ne inkrementalnih omjera pri odluci o proširenju.** Kako pokazuje primjer spavanja na ulici, opcija s najboljim prosječnim omjerom nije uvijek najjeftinija iduća jedinica ishoda koju treba kupiti.
- **Odabir jedinice ishoda koja je zapravo izlazni rezultat.** „Provedena upućivanja” ili „održane sesije” mjere aktivnost, a ne ishod zbog kojeg program postoji; CEA na izlaznim rezultatima daje broj koji djeluje pouzdano, a odgovara na pogrešno pitanje.
- **Usporedba različitih ishoda.** CEA vrijedi samo kad sve opcije ciljaju isti ishod mjeren na isti način; usporedba „troška po smještenoj osobi koja spava na ulici” s „troškom po osobi koja je napustila skrb u stabilnom najmu” traži generičku mjeru ishoda ili [višekriterijsku analizu odlučivanja](../višekriterijska-analiza-odlučivanja/), a ne CEA.
- **Ignoriranje trajnosti ishoda.** Jeftinija opcija čiji ishodi ne traju (učenik koji nazaduje nakon završetka intervencije) zapravo nije troškovno učinkovitija kad se mjeri na usporedivom horizontu; uskladite razdoblje praćenja među opcijama koje se uspoređuju.

## Izvori

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
