# Ključni kazalniki uspešnosti v javnem sektorju

Ključni kazalnik uspešnosti (KPI) je izbrana, spremljana mera, ki nadomešča odgovor na vprašanje, ali javna storitev dobro opravlja svoje delo. V državni upravi izbira KPI nikoli ni nevtralna: ker so KPI vezani na proračune, lestvice in kariere, dejanje izbire enega oblikuje vedenje vseh za njim, pogosto bolj kot politika, ki je storitev ustvarila.

## Zakaj je pomembno

Opazka Charlesa Goodharta iz leta 1975 o denarni politiki – ki jo je kasneje populariziral Marilyn Strathern kot »ko mera postane cilj, preneha biti dobra mera« – je najpomembnejše opozorilo v upravljanju uspešnosti v javnem sektorju. KPI, izbran za *opisovanje* sistema, ga začne *izkrivljati*, takoj ko so z njim povezani viri, plače ali politično preživetje. Klasičen primer so odzivni časi reševalnih vozil NHS: ko je osemminutni cilj odziva za kategorijo A postal zavezujoč, so nekateri skladi (trusts) pokazali, da so reševalna vozila »zlagali« tik zunaj ure odzivnega časa ali prekategorizirali klice, da bi dosegli številko, ne da bi spremenili izide za paciente. Smernice britanskega državnega računskega urada (National Audit Office) o izbiri in uporabi kazalnikov uspešnosti – navedene v poročilih o vrednosti za denar ter v okvirih »Performance Measurement by Regulators« in »Choosing the Right FABRIC« (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) – obstajajo prav zato, ker so ministrstva stalno izbirala kazalnike, ki jih je lahko poročati, ne kazalnikov, ki jih je težko izigrati. Programski inženir, ki dostavi nadzorno ploščo, po kateri bosta presojana minister ali direktor, je, ali to želi ali ne, oblikovalec spodbujevalne strukture javne institucije.

## Matematika

Zasnova KPI je tema v obliki okvira, vendar je *vrednotenje* kandidata za KPI ponovljiv kontrolni seznam in ne formula:

```
Za vsak kandidat za KPI ocenite glede na:
  Primernost za namen  — ali meri izid ali nadomestek, oddaljen več korakov?
  Ustreznost           — ali pripada ljudem, ki nanj dejansko lahko vplivajo?
  Uravnoteženost       — ali je v paru z nasprotno metriko, ki ujame izigravanje?
  Robustnost           — ali preživi revizijo ali je samoporočan in nepreverljiv?
  Povezanost           — ali se vklaplja v širši nabor ali nasprotuje drugemu KPI?
  Stroškovna učinkovitost — ali zbiranje stane več kot odločitev, ki jo informira?

Razdelitev na vodilne in zaostajajoče:
  Vodilni kazalnik     → napoveduje prihodnji izid, a ga je pogosto mogoče izigrati (npr. klici, odgovorjeni <60 s)
  Zaostajajoči kazalnik → potrdi, da je izid nastal, a prispe prepozno za usmerjanje (npr. letna
                           anketa zadovoljstva)
  Zagovorljiv nabor KPI združuje vsaj enega od vsakega na cilj.
```

## Praktični primer

**Reševalni sklad**: sklad poroča o KPI odzivnega časa kategorije A (življenjsko nevarni primeri) »75 % klicev odgovorjenih v 8 minutah«. V enem četrtletju je prejetih 6.000 klicev kategorije A; 4.500 jih je izpolnjenih v 8 minutah, kar da 75,0 % – navidezno na cilju.

```
Naslovni KPI = 4.500 / 6.000 × 100 = 75,0 %  (izpolnjuje prag 75 %)
```

Vendar revizija po Goodhartu doda nasprotno metriko: povprečni odzivni čas za najpočasnejših 10 % klicev.

```
Povprečni odziv najpočasnejšega decila = 34 minut (navzgor z 19 minut pred dvema letoma)
```

Sklad dosega cilj, medtem ko se rep – klici, ki so verjetno resnično življenjsko nevarni, če je triaža nepopolna – močno poslabšal, ker so posadke usmerjene k klicem blizu 8-minutnega praga, namesto h klinični nujnosti. En sam KPI je povedal napačno zgodbo; parni KPI je povedal resnično.

## Povezava s programskim inženirstvom

Inženirji, ki gradijo nadzorne plošče uspešnosti za državno upravo, so funkcionalno oblikovalci spodbujevalnega API-ja organizacije. Praktične posledice: *imenovalec* instrumentirajte tako strogo kot števec (KPI, poročan kot goli odstotek, vabi k izigravanju imenovalca – glej [strošek na transakcijo](../strošek-na-transakcijo/) za isto past pri digitalnih storitvah); nasprotne metrike vgradite v isto nadzorno ploščo, ne v ločeno poročilo, ki ga nihče ne bere, da je izigravanje vidno ob odločanju; in KPI verzionirajte, ker je tiha preopredelitev (sprememba tega, kaj šteje kot »klic«, »primer« ali »dokončanje«) funkcionalno enakovredna spremembi cilja brez obvestila. [Kazalniška kartica javne vrednosti](../kazalniška-kartica-javne-vrednosti/) je en strukturiran način, da se en sam KPI ne bere izolirano, [odgovornost, temelječa na izidih](../odgovornost-temelječa-na-izidih/) pa je disciplina izbire KPI na ravni prebivalstva, ki jih ena sama ekipa ne more enostransko izkriviti.

## Pasti

- **Izbira metrike, ki jo je lahko zbirati, namesto smiselne**: čas odgovora na klic je trivialno beležiti; ali je klic rešil državljanov problem, ni – a le drugo je izid. Upirajte se privzeti izbiri tistega, kar sistem že oddaja.
- **Brez nasprotne metrike**: vsak KPI, vezan na denar ali ugled, bo ob robu izigran; dostavite ga s parno metriko, ki ujame verjeten vektor izigravanja, preden ga objavite.
- **Preopredelitev metrike brez dnevnika sprememb**: zamenjava »prejetih klicev« z »odgovorjenimi klici«, da se trend polepša, uniči verodostojnost časovne vrste v trenutku, ko je odkrita – vedno objavite dnevnik sprememb opredelitev poleg številk.
- **Zamenjevanje dejavnosti z rezultatom**: štetje opravljenih inšpekcij je izložek; štetje prostorov, ki so bili privedeni v skladnost, je bližje izidu (glej [izidi in izložki](../izidi-in-izložki/)).

## Viri

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
