# Oportunitetni strošek pri javni porabi

Oportunitetni strošek je vrednost najboljše opuščene alternative, kadar javni organ nameni denar, delovni čas osebja ali politični kapital eni možnosti namesto drugi. V ministrstvu s fiksnim proračunom je vsak funt, porabljen za en program, funt, ki ga ni mogoče porabiti za naslednji najboljši program – pravi strošek odločitve ni to, kar porabi, ampak to, kar izpodrine.

## Zakaj je pomembno

Javni proračuni so v obdobju pregleda porabe denarno omejeni, zato – za razliko od rastočega zasebnega podjetja – državno ministrstvo za dobro idejo ne more preprosto »najti več denarja«; financiranje te ideje pomeni opustitev financiranja nečesa drugega. Green Book britanskega finančnega ministrstva (HM Treasury) to obravnava kot temeljno: vsako vrednotenje mora primerjati poseg z izhodiščem »minimalnih ukrepov« (»do minimum«) *in* z realističnimi alternativnimi rabami istega vira, prav zato, ker vprašanje, ki ga zastavlja ekipa za porabo na finančnem ministrstvu, nikoli ni »ali je to dobro?«, ampak »ali je to boljše od tega, kar bi lahko kupili z istim denarjem?«. Temeljno načelo vrednotenja v Green Booku – da naj javna sredstva tečejo v poseg z najvišjo neto družbeno vrednostjo na funt – je oportunitetni strošek, zapisan kot politika.

To je lahko izreči in težko uporabiti, ker »naslednja najboljša alternativa« v enem poslovnem primeru redko vidna. Program nepovratnih sredstev v vrednosti £2 milijona za zaposlovanje mladih se v poslovnem primeru primerja z nedelovanjem, vendar je pošten primerjalnik naslednji najboljši poseg za zaposlovanje mladih ali pravzaprav naslednja najboljša raba £2 milijona kjer koli v portfelju, vključno s porabo, ki ni povezana z zaposlovanjem. Magenta Book (HM Treasury, 2020) izrecno opozarja, da vrednotenja, ki primerjajo »s posegom« in »brez posega«, podcenjujejo mejo, ki jo mora poseg preseči, ker »brez tega posega« ni isto kot »sploh z ničemer« – sproščeni denar financira nekaj drugega.

## Matematika

```
Oportunitetni strošek izbire A = vrednost najboljše opuščene alternative B

Neto javna vrednost A = vrednost(A) − vrednost(B), ne vrednost(A) − 0
```

Univerzalne formule ni, ker je opuščena alternativa odvisna od konteksta, a disciplina se posplošuje: opredelite realistično naslednjo najboljšo rabo iste proračunske postavke (ne idealiziranega »nedelovanja«), jo ovrednotite na isti podlagi (denarno, kjer je mogoče, po [družbeni analizi stroškov in koristi](../družbena-analiza-stroškov-in-koristi/)) in odštejte.

## Praktični primer

**Proračunska postavka ministrstva**: sklad za digitalno preobrazbo v vrednosti £5 milijonov lahko ta proračunsko leto financira natanko enega od dveh predlogov.

- *Možnost A*: nova platforma za vodenje primerov, denarno ovrednotena korist £7,2 milijona v 5 letih (prihranki učinkovitosti in hitrejše reševanje primerov).
- *Možnost B*: storitev preverjanja identitete, skupna trem ministrstvom, denarno ovrednotena korist £6,4 milijona v 5 letih.

Naiven poslovni primer za A primerja £7,2 milijona koristi s £5 milijoni stroškov in poroča o razmerju koristi in stroškov 1,44 : 1 – na videz močno. Ker pa se A in B potegujeta za istih £5 milijonov, je oportunitetni strošek izbire A opuščena korist B v višini £6,4 milijona. *Neto* primer za A v primerjavi z realistično alternativo je le £7,2 mio − £6,4 mio = £0,8 milijona, ne celotnih £7,2 milijona iz naslova. Če bi tretja možnost, C, ponujala £7,5 milijona koristi za istih £5 milijonov, bi financiranje A namesto C uničilo £0,3 milijona javne vrednosti, čeprav poslovni primer za A sam po sebi izgleda popolnoma upravičen.

**Delovni čas osebja lokalne oblasti**: tričlanska podatkovna ekipa občine lahko zgradi nadzorno ploščo za čakalne sezname za stanovanja (ocenjeno prihrani 400 uradniških ur/leto, ovrednotenih po £28/uro = £11.200/leto) ali orodje za triažo goljufij s prejemki (ocenjeno prepreči £85.000/leto napačnih izplačil). Gradnja nadzorne plošče ima oportunitetni strošek opuščenih £85.000/leto, ne le plačnega stroška podatkovne ekipe – pravi strošek »brezplačne« notranje izdelave je veliko večja korist, ki bi jo ekipa lahko ustvarila drugje.

## Povezava s programskim inženirstvom

Inženirske zmogljivosti znotraj javnega organa so same omejen proračun – zmogljivost sprintov, ne funti – in ista disciplina velja neposredno:

- Vedno navedite primerjalnik: poslovni primer funkcionalnosti naj navede, kaj drugega bi lahko dostavili isti ekipni tedni, ne le njen lastni donos.
- »Imamo prosto inženirsko zmogljivost« obravnavajte kot začetek analize oportunitetnih stroškov, ne kot njen konec – prosta zmogljivost ima še vedno najboljšo alternativno rabo, tudi če je ta odplačevanje tehničnega dolga (glej [tehnični dolg kot erozija javne vrednosti](../tehnični-dolg-kot-erozija-javne-vrednosti/)).
- To neposredno povežite z [vrednostjo za denar](../vrednost-za-denar/): test »gospodarnosti« pri VFM je brez poštenega oportunitetnega primerjalnika brez pomena, in s [stroškom odlašanja v javnih programih](../strošek-zamude-v-javnih-programih/), ki ovrednoti časovno razsežnost iste logike opuščene alternative.

## Pasti

- **Primerjava z »nedelovanjem« namesto z naslednjo najboljšo alternativo.** Green Book zahteva izhodišče »minimalnih ukrepov« prav zato, ker pravi oportunitetni strošek redko znaša nič; poslovni primer, ki preseže le mejo »nedelovanja«, ni pokazal, da je boljši od realistične alternative.
- **Zanemarjanje medresorskega tekmovanja za isti lonec.** Proračunske postavke, ki se zdijo znotraj ene direkcije zaščitene, pogosto tekmujejo na višji ravni (pregled porabe, kapitalski program), kjer se pravi oportunitetni strošek uresniči.
- **Predpostavka, da sproščeni delovni čas nima dodatne vrednosti.** »prihranjen« čas ustvari vrednost le, če je prerazporejen k nečemu vrednemu; če alternativne rabe ni, je prihranek navidezen.

## Viri

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
