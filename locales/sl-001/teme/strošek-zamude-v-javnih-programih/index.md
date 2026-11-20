# Strošek zamude v javnih programih (CoD)

Strošek zamude (Cost of Delay) je javna vrednost, izgubljena na enoto časa, v katerem program, storitev ali sprememba sistema *še ni* dostavljena. To je glavna premostitvena metrika te skupine tem: pretvori »zagon se je zamaknil za šest mesecev« v funte na teden ali v WELLBY na teden, da je o zamudi mogoče razpravljati v isti valuti kot o samem poslovnem primeru.

## Zakaj je pomembno

Reinertsenovo pravilo, »če kvantificirate le eno stvar, kvantificirajte strošek zamude«, se v upravo prenese skoraj nespremenjeno, ker so javni programi na to nenavadno izpostavljeni: poslovni primeri so odobreni glede na napovedani tok koristi, a ta začne teči šele ob zagonu, vsak teden zamika pa je teden izgubljene vrednosti, ki ga nihče ne ovrednoti v registru tveganj. Ponavljajoče se nadzorovanje uvedbe Universal Credit s strani National Audit Office (glej njena poročila »Rolling Out Universal Credit«, <https://www.nao.org.uk/>) ponazarja vzorec: zamik urnika je bil spremljan in poročan, a strošek v funtih na teden, ker reformiranega sistema *še* niso dostavili naslednjemu naboru upravičencev, je bil redko naveden kot glavna številka, čeprav je to številka, ki bi morala voditi prednostno razvrščanje in stopnjevanje. Brez številke CoD je zamujeni program videti kot težava z urnikom za izvedbeni odbor; z njo je problem erozije vrednosti za odgovornega uradnika.

## Matematika

```
CoD = korist na enoto časa, izgubljena, dokler ni dostavljeno   (£/teden ali WELLBY/teden)

Skupna izguba zaradi zamude = CoD × trajanje zamude

Tokovi koristi, ki jih je treba sešteti za javne programe:
  denarni prihranki        (zmanjšanje goljufij/napak, preprečeni začasni stroški)
+ nedenarna sproščena zmogljivost (ure referentov/uradnikov × polni strošek)
+ korist za dobro počutje  (WELLBY × 13.000 £/WELLBY, dopolnilne smernice
                             HMT Green Book o dobrem počutju, cene 2019)
```

Za storitve za državljane denominirajte tako v dobrem počutju kot v denarju; glej [življenjska leta, prilagojena dobremu počutju](../z-blaginjo-prilagojena-leta-življenja/) za osnovno enoto in [oportunitetni strošek v javni porabi](../oportunitetni-strošek-pri-javni-porabi/) za to, kaj bi odloženi funt sicer lahko financiral.

## Praktični primer

**Lokalna oblast**: nadgradnja sistema stanovanjskih dajatev zmanjša napako pri preplačilih za 150 £/zahtevek/leto pri 20.000 aktivnih zahtevkih.

```
Letna korist = 150 × 20.000 = 3.000.000 £/leto
CoD = 3.000.000 / 52 ≈ 57.700 £/teden
12-mesečna zamuda pri uvedbi stane 52 × 57.700 ≈ 3.000.000 £ preprečljivih napak.
```

**Agencija centralne vlade**: storitev ocenjevanja dajatev za invalidnost, dostavljena šest mesecev (26 tednov) pozneje od načrtovanega, pomeni, da 200.000 upravičencev na leto čaka v povprečju tri tedne dlje na odločitev. Vsak dodatni teden finančne negotovosti je modeliran kot učinek −0,0018 WELLBY (točke zadovoljstva z življenjem):

```
Izguba WELLBY na upravičenca = 3 × 0,0018 = 0,0054
Letna izguba WELLBY = 200.000 × 0,0054 = 1.080 WELLBY/leto
CoD_dobro počutje = 1.080 / 52 ≈ 20,8 WELLBY/teden
CoD_denar = 20,8 × 13.000 £ ≈ 270.000 £/teden vrednosti dobrega počutja
```

26-tedenska zamuda torej »stane« približno 540 WELLBY, kar je po vrednotenju dobrega počutja po Green Book vredno okoli 7 milijonov £, in zamujeni datum zagona preoblikuje v dogodek za blaginjo državljanov, ne v opombo upravljanja projekta.

## Povezava s programskim inženirstvom

CoD je tisto, zaradi česar so [metrike DORA](../metrike-dora-za-javno-vrednost/) in [metrike toka](../pretočne-metrike-pri-vladni-izvedbi/) finančno berljive: čas vodenja v cevovodu × CoD je denar (ali dobro počutje), pognan v čakalnih vrstah, še preden doseže državljana. Konkretno:

- **Prednostno razvrščanje**: zaostanek razvrstite po CoD ÷ trajanje in ne po starešinstvu deležnikov, kar je programski ekvivalent zahteve Green Book, da se možnosti presojajo po vrednosti, ne po tem, kdo sprašuje.
- **Javno naročanje**: 12 do 18-mesečni cikel naročanja prek okvirnega sporazuma ima CoD; ovrednotenje spremeni argument nujnosti za pospešene poti in neposredno vpliva na odločitve [razvoj ali nakup](../razvoj-ali-nakup-v-upravi/), kjer je čas do vrednosti odločilni dejavnik.
- **Primer koristi**: vsaka številka CoD, navedena ob odobritvi, naj se ponovno pojavi pri [uresničevanju koristi](../uresničevanje-koristi/): če je bil strošek zamude resničen, bi morala biti pospešena korist po zagonu merljiva.

## Pasti

- **Predpostavka linearnega CoD**: nekatere javne storitve imajo vrednost v obliki roka (zakonski datum skladnosti, kjer CoD po datumu skoči na raven tveganja izvrševanja, pred njim pa je blizu nič) in ne gladke tedenske stopnje. Pred množenjem razvrstite profil nujnosti.
- **CoD za izložke, ki jih nihče ne potrebuje**: zamuda ima strošek le, če ima nedostavljena stvar vrednost; sistem, ki ga nihče ne bo uporabljal, ima ničelni CoD, ne glede na to, kako zamuja.
- **Dvojno štetje zamude in diskontiranja**: [družbena diskontna stopnja](../družbena-diskontna-stopnja/) že vrednoti čas na večletnih horizontih presoje; CoD je operativna različica znotraj horizonta za tedne in mesece. CoD uporabite za zamik urnika, premik NPV pa za večletno prerazporeditev.

## Viri

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
