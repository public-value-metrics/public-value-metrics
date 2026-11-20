# Oportunitetni trošak u javnoj potrošnji

Oportunitetni trošak vrijednost je najbolje odbačene alternative kada javno tijelo uloži novac, radno
vrijeme osoblja ili politički kapital u jednu opciju umjesto u drugu. U ministarstvu s fiksnim proračunom
svaka funta potrošena na jedan program funta je koja se ne može potrošiti na sljedeći najbolji program:
pravi trošak odluke nije ono što troši, nego ono što istiskuje.

## Zašto je važno

Javni proračuni novčano su ograničeni unutar razdoblja pregleda potrošnje, pa, za razliku od rastuće
privatne tvrtke, državno ministarstvo ne može jednostavno „pronaći još novca” za dobru zamisao: njezino
financiranje znači ukidanje financiranja nečega drugoga. Green Book britanskog Ministarstva financija (HM
Treasury) to smatra temeljnim: svaka procjena mora usporediti intervenciju s osnovnim scenarijem „minimalnog
djelovanja” (do minimum) *i* s realističnim alternativnim uporabama istog resursa, upravo zato što pravo
pitanje koje postavlja tim Ministarstva financija za potrošnju nikad nije „je li ovo dobro?”, nego „je li
ovo bolje od onoga što bi se još moglo kupiti ovim novcem?”. Temeljno načelo procjene u Green Booku, da javni
resursi trebaju ići intervenciji s najvišom neto društvenom vrijednošću po funti, oportunitetni je trošak
izrečen kao politika.

To je lako reći, a teško primijeniti jer „sljedeća najbolja alternativa” rijetko je vidljiva u jednom
poslovnom slučaju. Program bespovratnih sredstava za zapošljavanje mladih vrijedan 2 milijuna £ u poslovnom
se slučaju uspoređuje s nečinjenjem, ali pošteni komparator je sljedeća najbolja intervencija za
zapošljavanje mladih, ili zapravo sljedeća najbolja uporaba 2 milijuna £ bilo gdje u portfelju, uključujući
potrošnju koja nije vezana uz zapošljavanje. Magenta Book (HM Treasury, 2020.) izričito upozorava da
evaluacije koje uspoređuju „s intervencijom” i „bez intervencije” podcjenjuju prag koji intervencija mora
preći, jer „bez ove intervencije” nije isto što i „bez ičega”: oslobođeni novac financira nešto drugo.

## Matematika

```
Oportunitetni trošak odabira A = vrijednost najbolje odbačene alternative B

Neto javna vrijednost od A = vrijednost(A) − vrijednost(B), a ne vrijednost(A) − 0
```

Ne postoji univerzalna formula jer je odbačena alternativa specifična za kontekst, ali se disciplina
uopćava: utvrdite realističnu sljedeću najbolju uporabu iste proračunske stavke (a ne idealizirano
„nečinjenje”), vrednujte je na istoj osnovi (monetizirano gdje je moguće, prema
[socijalnoj analizi troškova i koristi](../društvena-analiza-troškova-i-koristi/)) i oduzmite.

## Primjer iz prakse

**Proračunska stavka ministarstva**: fond za digitalnu transformaciju od 5 milijuna £ može u ovoj
financijskoj godini financirati točno jedan od dva prijedloga.

- *Opcija A*: nova platforma za upravljanje slučajevima, monetizirana korist 7,2 milijuna £ tijekom 5
  godina (uštede učinkovitosti plus brže rješavanje slučajeva).
- *Opcija B*: usluga provjere identiteta koju dijele tri ministarstva, monetizirana korist 6,4 milijuna £
  tijekom 5 godina.

Naivan poslovni slučaj za A uspoređuje 7,2 milijuna £ koristi s 5 milijuna £ troška i iskazuje omjer
koristi i troška 1,44 : 1, naizgled snažan. No budući da A i B konkuriraju za istih 5 milijuna £,
oportunitetni trošak odabira A jest odbačena korist B-a od 6,4 milijuna £. *Neto* argument za A
naspram realistične alternative samo je 7,2 mil. £ − 6,4 mil. £ = 0,8 milijuna £, a ne cijelih 7,2
milijuna £ iz naslova. Kad bi treća opcija, C, nudila 7,5 milijuna £ koristi za istih 5 milijuna £,
financiranje opcije A umjesto C uništilo bi 0,3 milijuna £ javne vrijednosti iako poslovni slučaj
opcije A sam za sebe izgleda potpuno opravdan.

**Radno vrijeme osoblja lokalne vlasti**: tročlani podatkovni tim vijeća može izgraditi ili nadzornu ploču
za popis čekanja za stanovanje (procijenjena ušteda od 400 radnih sati službenika godišnje, vrednovano po 28
£/sat = 11.200 £/godišnje) ili alat za trijažu prijevara s naknadama (procijenjeno da sprječava 85.000
£/godišnje netočnih isplata). Izgradnja nadzorne ploče ima oportunitetni trošak od 85.000 £/godišnje
odbačene koristi, a ne samo trošak plaća podatkovnog tima: pravi trošak „besplatne” interne izgradnje
daleko je veća korist koju je tim mogao proizvesti drugdje.

## Veza s programskim inženjerstvom

Inženjerski kapacitet unutar javnog tijela i sam je ograničen proračun (kapacitet sprintova, a ne funte) i
ista se disciplina izravno primjenjuje:

- Uvijek imenujte komparator: poslovni slučaj značajke trebao bi navesti što bi isti timski tjedni mogli
  isporučiti, a ne samo njezin vlastiti povrat.
- „Imamo slobodnog inženjerskog kapaciteta” tretirajte kao početak analize oportunitetnog troška, a ne kao
  njezin kraj: slobodni kapacitet i dalje ima najbolju alternativnu uporabu, makar to bila otplata
  tehničkog duga (vidi [tehnički dug kao erozija javne vrijednosti](../tehnički-dug-kao-nagrizanje-javne-vrijednosti/)).
- Povežite to izravno s [vrijednošću za novac](../vrijednost-za-novac/): test „ekonomičnosti” iz VFM-a
  besmislen je bez poštenog komparatora oportunitetnog troška, te s
  [troškom odgode u javnim programima](../trošak-odgode-u-javnim-programima/), koji cijeni vremensku
  dimenziju iste logike odbačene alternative.

## Zamke

- **Usporedba s „nečinjenjem” umjesto sa sljedećom najboljom alternativom.** Green Book zahtijeva osnovni
  scenarij „minimalnog djelovanja” upravo zato što pravi oportunitetni trošak rijetko iznosi nula; poslovni
  slučaj koji prelazi samo prag „nečinjenja” nije pokazao da nadmašuje realističnu alternativu.
- **Zanemarivanje međuresorne konkurencije za isti lonac.** Proračunske stavke koje izgledaju namijenjene
  unutar jedne uprave često konkuriraju na višoj razini (pregled potrošnje, kapitalni program) gdje se
  stvarni oportunitetni trošak ostvaruje.
- **Pretpostavka da oslobođeno radno vrijeme nema daljnje vrijednosti.** „Ušteđeno” vrijeme stvara
  vrijednost samo ako se preraspodijeli na nešto vrijedno; ako alternativna uporaba ne postoji, ušteda je
  nominalna.

## Izvori

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — kanonski empirijski dokaz oportunitetnog troška kao obvezujućeg
  ograničenja u fiksnom javnom proračunu. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
