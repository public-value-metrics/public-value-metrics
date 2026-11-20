# Merila socialnega kapitala

Merila socialnega kapitala količinsko opredeljujejo mreže, zaupanje in državljansko udeležbo, ki skupnostim in ustanovam omogočajo učinkovito delovanje – »vezivno tkivo«, ki nima vrstice v nobeni bilanci, a vidno zmanjšuje stroške in trenje, kadar je prisotno, in jih vidno povečuje, kadar ga ni. Sodobni okvir izvira iz knjige Roberta Putnama »Bowling Alone« (2000), ki je razlikovala med povezovalnim kapitalom (vezi znotraj podobne skupine) in premostitvenim kapitalom (vezi med različnimi skupinami); britanski Office for National Statistics (ONS, nacionalni statistični urad) je odtlej zgradil stalni nabor kazalnikov za njegovo nacionalno spremljanje.

## Zakaj je pomembno

Putnamova osrednja empirična trditev – dokumentirana s upadanjem članstva v ameriških civilnih združenjih, obiskovanja cerkva in sindikalne udeležbe v poznem dvajsetem stoletju – je, da socialni kapital napoveduje izide, ki jih običajna ekonomija težko pojasni: manj kriminala, boljšo otroško blaginjo, učinkovitejšo lokalno oblast, hitrejše gospodarsko okrevanje po šokih. Povezovalni kapital (močne vezi znotraj tesno povezane skupine) je dober za medsebojno podporo, a se lahko okostene v zaprtost; premostitveni kapital (šibkejše vezi med različnimi skupinami) običajno sovpada z dostopom do priložnosti, pretokom informacij in zaupanjem v ustanove. ONS je to vzel dovolj resno, da je zgradil nacionalni okvir kazalnikov – serija »Social Capital in the UK«
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
spremlja štiri stebre: osebne odnose, podporo socialne mreže, državljansko udejstvovanje ter zaupanje in sodelovalne norme, vsakega iz uveljavljenih anketnih vprašanj (Community Life Survey, Understanding Society). Za digitalne storitve javnega sektorja je socialni kapital dvojno pomemben: je izid, ki ga nekateri programi poskušajo ustvariti (financiranje odpornosti skupnosti, socialno predpisovanje), in hkrati vložek, ki določa, kako dobro bo storitev dejansko sprejeta – storitev, uvedena v skupnosti z visokim zaupanjem in dobro povezanostjo, se bo širila od ust do ust, kakor se enaka storitev na območju z nizkim zaupanjem ne bo.

## Matematika

```
Štiristebrni okvir ONS (kazalniki, ilustrativno):

Osebni odnosi:                  % tistih, ki imajo koga, na kogar se lahko zanesejo v stiski
Podpora socialne mreže:         % tistih, ki bi si lahko ob potrebi izposodili denar od prijateljev/družine
Državljansko udejstvovanje:     % tistih, ki so v zadnjih 12 mesecih prostovoljno delali ali ukrepali kot državljani
Zaupanje in sodelovalne norme:  % tistih, ki se strinjajo, da »večini ljudi lahko zaupamo«

ONS ne objavlja nobene enotne sestavljene ocene – stebri se poročajo
ločeno, namerno, ker bi združitev v en indeks
skrila, kateri steber je šibek.

Putnamova delitev na povezovalni/premostitveni (okvir, ne formula):
  povezovalni kapital ≈ gostota vezi znotraj homogene skupine
  premostitveni kapital ≈ pogostost/moč vezi med različnimi skupinami
```

## Praktični primer

**Posnetek socialnega kapitala soseske**: anketa v slogu Community Life Survey na lokalnem območju ugotovi, da ima 78 % koga, na kogar se lahko zanese v stiski (osebni odnosi), 61 % bi si lahko ob potrebi izposodilo denar (podpora mreže), 24 % je v zadnjem letu prostovoljno delalo (državljansko udejstvovanje) in 41 % se strinja, da »večini ljudi lahko zaupamo« (zaupanje in norme) – v primerjavi z nacionalnimi povprečji približno 85 %, 70 %, 30 % in 45 % (ilustrativno, umerite po trenutnem biltenu ONS). Območje je pod povprečjem pri vseh stebrih, a najbolj pri zaupanju (41 % proti 45 % na nacionalni ravni, razlika 4 točke) in državljanskem udejstvovanju (24 % proti 30 %, razlika 6 točk) – kar kaže, da je največji relativni primanjkljaj, vreden ciljne naložbe (denimo programa skupnostnih nepovratnih sredstev), državljansko udejstvovanje in ne zaupanje, ter ne splošna pobuda »gradimo zaupanje«.

**Povezovalni proti premostitvenemu, zasnova storitve**: program zaposlovanja v tesno povezani skupnosti ugotovi, da se napotitve znotraj skupnosti širijo hitro (visok povezovalni kapital: novica se razširi v nekaj dneh), a programu ne uspe doseči prebivalcev zunaj te mreže (nizek premostitveni kapital: odziv zunaj jedra skupnosti je po mesecih skoraj nič). Rešitev ni »več trženja«, temveč namerno gradnja premostitvenih vezi – partnerstvo z organizacijami, ki so *zunaj* obstoječe mreže, saj samo povezovalni kapital ne more rešiti problema premostitvenega kapitala.

## Povezava s programskim inženirstvom

- Digitalne platforme, ki usmerjajo vzajemno pomoč, prostovoljstvo ali skupnostna nepovratna sredstva (na primer storitev »lokalni povezovalec«), dobesedno gradijo infrastrukturo premostitvenega kapitala; njihovo merilo uspeha naj bo raznolikost mreže vzpostavljenih povezav, ne le število transakcij – glej [vlada kot platforma](../vlada-kot-platforma/) za širši vzorec infrastrukture, na kateri drugi gradijo vrednost.
- Kjer teorija spremembe programa izrecno cilja na socialni kapital kot izid (sklad za odpornost skupnosti, storitev socialnega predpisovanja), naj [teorija spremembe](../teorija-spremembe/) in [logični model](../logični-model/) poimenujeta konkretni steber (zaupanje, državljansko udejstvovanje, podpora mreže), ki ga pričakuje premakniti, ne pa nediferenciranega izida »gradnja skupnosti«, ki ga ni mogoče meriti glede na izhodišče ONS.
- Kazalniki socialnega kapitala so uporabna leča pravičnosti poleg [indeksa večkratne prikrajšanosti](../indeks-večkratne-prikrajšanosti/): območje je lahko dohodkovno prikrajšano, a socialno bogato, ali obratno, in obe sliki kažeta na zelo različne posege.

## Pasti

- **Zvedba štirih stebrov ONS na eno sestavljeno oceno** – ONS tega namerno ne počne; ena sama številka skrije, kateri steber povzroča nizko vrednost, povprečenje pa zakrije razliko med skupnostjo z visokim zaupanjem, a nizko državljansko vpletenostjo, in obratno.
- **Predpostavka, da je socialni kapital vedno dober** – gost povezovalni kapital v zaprti skupini se lahko aktivno upira zunanjim ustanovam (tudi vladnim storitvam); Putnamova lastna analiza obravnava povezovalni in premostitveni kapital kot različni dobrini z različnimi, včasih nasprotujočimi si učinki.
- **Uporaba anketnih meril socialnega kapitala kot operativnega merila v realnem času** – osnovne ankete (Community Life Survey, Understanding Society) tečejo letno ali redkeje; podatke o socialnem kapitalu obravnavajte kot počasi spreminjajoč se kontekstualni kazalnik, ne kot nekaj, kar bi nadzorna plošča storitve posodabljala tedensko.

## Viri

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
