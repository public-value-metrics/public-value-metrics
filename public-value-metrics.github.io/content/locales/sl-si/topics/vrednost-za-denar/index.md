# Vrednost za denar (VFM)

Vrednost za denar je formalni preizkus britanskega javnega sektorja, ali poraba dosega najboljše razpoložljivo razmerje med stroški in koristmi. Green Book HM Treasury jo oblikuje s tremi »E« – ekonomičnost (economy), učinkovitost (efficiency) in uspešnost (effectiveness) – pri čemer je pravičnost (equity) vse bolj zagovarjana kot sporni četrti. Vsak poslovni primer javnega sektorja, ki prestane pregled, mora izrecno odgovoriti na vse tri, ne le trditi, da je poraba »vredna«.

## Zakaj je pomembno

VFM ni sopomenka za »poceni«. Green Book (HM Treasury, izdaja 2022) izrecno navaja, da je nakup najcenejše možnosti (ekonomičnost) brez preverjanja, ali prinaša želene izide (uspešnost), pogosta in draga napaka – nabava, ki prihrani 10 % pri enotnem strošku, a prinese 40 % manj učinka, je slabša vrednost, ne boljša. Okvir treh E prisili poslovni primer, da loči tri resnično različne načine odpovedi: preplačilo vložkov, zapravljanje vložkov pri pretvorbi v izložke in ustvarjanje izložkov, ki se ne prevedejo v izide, ki jih je kdo želel. Britanski nadzori porabe vlade – točke odobritve Treasury, študije vrednosti za denar National Audit Office (NAO) in ocene računovodskih odgovornih oseb oddelkov – so zgrajeni okoli tega tridelnega preizkusa, zato inženirski poslovni primer, ki obravnava samo stroške (ekonomičnost), ne bo prestal pregleda, četudi je tehnologija zdrava.

»Četrti E«, pravičnost, je sporen ravno zato, ker je lahko v nasprotju z ostalimi tremi: najučinkovitejši način za nacionalno zagotavljanje storitve je redko najpravičnejši, saj osredotočanje izvajanja tja, kjer je državljane najceneje doseči, pogosto pomeni zapostavljanje najtežje dosegljivih. Revizija Green Book iz leta 2020 se je odzvala na kritike (tudi iz Treasury Select Committee 2020 in IPPR North), da čista razmerja koristi in stroškov sistematično dajejo prednost že premožnim regijam, tako da je zahtevala, da ocene izrecno obravnavajo porazdelitveni učinek – glej [porazdelitveno uteževanje](../porazdelitveno-ponderiranje/).

## Matematika

VFM ni eno samo razmerje, ampak tridelna (ali štiridelna) diagnostika, uporabljena po vrsti:

```
Ekonomičnost:  Ali so vložki nabavljeni po najnižjem razumnem strošku za
               zahtevano kakovost?  (£ na enoto vložka)

Učinkovitost:  Kako dobro se vložki pretvarjajo v izložke?
               (izložki / vložki, npr. obdelani primeri na uro socialnega delavca)

Uspešnost:     Ali izložki dejansko prinesejo želene izide?
               (doseženi izidi / nameravani izidi)

[Pravičnost]:  Ali so stroški in koristi pošteno porazdeljeni po
               prebivalstvu ali koncentrirani pri tistih, ki jih najmanj potrebujejo?
```

Odpoved VFM se lahko zgodi na kateri koli stopnji neodvisno: ekonomična nabava z neučinkovitim izvajanjem; učinkovito izvajanje napačnega izložka; uspešni izidi, kupljeni po pretiranem strošku. Glej [KPI-ji javnega sektorja](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/) za to, kako se to prevede v merljive kazalnike, in [analiza stroškovne učinkovitosti v vladi](../analiza-stroškovne-učinkovitosti-v-upravi/) za formalno primerjalno metodo.

## Praktični primer

**Klicni center lokalne oblasti**: občina primerja dve možnosti za nov sistem za vodenje primerov.

- *Možnost A*: licenca £600 000 (najcenejša na voljo), a agenti še vedno v povprečju porabijo 22 minut na primer, ker potek dela zahteva ročno ponovno vnašanje med sistemi – učinkovitost je slaba.
- *Možnost B*: licenca £900 000, integriran potek dela, agenti v povprečju porabijo 9 minut na primer.

Sama ekonomičnost daje prednost A (£300 000 ceneje). A pri 40 000 primerih na leto A stane 40 000 × 22/60 = 14 667 delovnih ur; B stane 40 000 × 9/60 = 6 000 delovnih ur. Pri polno obremenjenem strošku osebja £28/uro A stane £410 667/leto v času osebja proti £168 000/leto pri B – razlika v učinkovitosti £242 667/leto, ki v 14 mesecih preseže razliko £300 000 v ekonomičnosti vnaprej. VFM daje prednost B, ko se upošteva učinkovitost, ne A.

**Dobrodelno izvedbeno nepovratno sredstvo**: financer primerja nepovratno sredstvo £50 000, ki doseže 200 uspešnih zaposlitev (£250/zaposlitev – navidezno odlična ekonomičnost), z nepovratnim sredstvom £120 000, ki doseže 350 zaposlitev, ki trajajo več kot 12 mesecev, v primerjavi z zaposlitvami prvega, od katerih jih polovica poneha v 3 mesecih. Uspešnost – trajni izidi – obrne navidezno razvrstitev VFM: pravi strošek na *trajno* zaposlitev je £250 ÷ 0,5 = £500 za prvo nepovratno sredstvo proti £120 000/350 ≈ £343 za drugo.

## Povezava s programskim inženirstvom

VFM daje inženirskim ekipam disciplino za oblikovanje tehnoloških poslovnih primerov tako, kot jih bodo dejansko brale finančne in revizijske službe:

- Ekonomičnost, učinkovitost in uspešnost navedite kot ločene postavke v poslovnem primeru, ne kot eno pomešano število »vrednosti« – pregledovalec, usposobljen po Green Book, bo zahteval ravno to razčlenitev.
- Pazite se optimizacije stroškov nabave (ekonomičnost) na račun integracije in učinkovitosti poteka dela, kar je zelo pogost lažni prihranek v vladni IT (glej [skupni stroški lastništva pri vladni IT](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/) in [izdelava ali nakup v vladi](../razvoj-ali-nakup-v-upravi/)).
- Uspešnost zahteva podatke o izidih, ne le števil izložkov – merila izvajanja povežite z [izidi proti izložkom](../izidi-in-izložki/) in z resničnim vrednotenjem prek [protidejstvene analize](../kontrafaktična-analiza/), namesto da predpostavljate, da izložki pomenijo izide.
- Kadar sistem služi neenakomerno po regijah ali demografskih skupinah, je vprašanje pravičnosti legitimen ugovor VFM, ne ločena »lepa želja« – glej [digitalna vključenost](../digitalna-vključenost/).

## Pasti

- **Enačenje VFM z najnižjo ceno.** Ekonomičnost je ena tretjina (ali četrtina) preizkusa; Green Book izrecno svari pred pravili nabave »najnižjega stroška«, ki prezrejo učinkovitost in uspešnost.
- **Merjenje izložkov in imenovanje izidov.** Prepustnost primerov (učinkovitost) ni isto kot dobro rešeni primeri (uspešnost); glej [izidi proti izložkom](../izidi-in-izložki/).
- **Obravnavanje pravičnosti kot neobvezne.** Od posodobitve Green Book 2020 naj bi se porazdelitveni učinek ocenjeval poleg tradicionalnih treh E, ne naknadno dodan; njegovo naknadno vgrajevanje po odobritvi poslovnega primera je veliko težje kot vključitev od začetka.
- **Primerjava možnosti pri različnih obsegih brez normalizacije.** Primerjava VFM na enoto med možnostmi, ki služijo različnim populacijam, mora nadzorovati obseg, sicer je primerjava učinkovitosti brez pomena.

## Viri

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
