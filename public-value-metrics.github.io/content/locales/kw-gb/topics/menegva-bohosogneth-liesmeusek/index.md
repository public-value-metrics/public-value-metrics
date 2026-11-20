# Menegva Bohosogneth Liesmeusek (MPI)

An MPI a vesur bohosogneth avel diwadhow a drehedh a'n den war unn dro — yn yeghes, deskans ha
savonow bewnans — y le a dhegh herwydh kenwerth a dhegh a-woeles linenn. Hi a veu displegys gans
an Oxford Poverty and Human Development Initiative (OPHI) gans Sabina Alkire ha James Foster, ha
hi a veu dyllys warbarth gans UNDP yn pub Derivans a Ddisplegyans Denel dhyworth 2010, ryb an
[Menegva Displegyans Denel](../kevrennlyver-displegyans-denel/).

## Perag y talvos

Linennow bohosogneth a dhegh a gollva an re a'n jevo arghans lowr mes heb dowr glan, deskans, po
a dhrehedh marow a flogh — ha'n fet bos diwadhow kuntelles: chi heb tan-gonis yw moy
dhe wil heb sanyta ha dhe'n jeva flogh dyvas yn nownyn. An metod Alkire-Foster, a-dhelergh
an MPI, a gonta diwadhow pub den dres deg menegva rann yn tri dimensyon a bwys kehevelys — yeghes,
deskans, savonow bewnans — ha nyns a klassya den avel "bohosek MPI" marnas y dreus y skor
diwadh pwysys unn fin fest, ow kemmeres an kesgwrans na yll set a statystygyon unnik gwaynya. OPHI a
dhyllo an metodoleji leun ha data a bub pow orth
<https://ophi.org.uk/multidimensional-poverty-index/>; an MPI bys-tir a'n kenwerth warbarth
gans UNDP a wra kovera lemmyn moy es 110 pow. Rag medhelweyth gwrys rag towlennow
a-erbynn bohosogneth — treusfera arghans, triyans gwith sokyal, kuntel gweres — an set menegvaow
MPI yw yn fynsen an peth nessa dhe skema a ddiwadh standard re bu previs dres lies
ofis statystek kenedhlek.

## An matematik

```
10 menegva, 3 dimensyon, pub dimensyon pwysys 1/3:

Yeghes (1/3):            nyns an boos (1/6), mortolieth flehes (1/6)
Deskans (1/3):           bledhynyow a skol (1/6), pres dhe'n skol (1/6)
Savonow bewnans (1/3):   tanwedh kegina, sanyta, dowr eva,
                          tan-gonis, chi, asetow (1/18 pub unn)

skor diwadh (c) = kresen pwysow an menegvaow may fo an den diwadh ynna

den yw "bohosek MPI" mara c ≥ 1/3 (an dhisser bohosogneth, k = 33%)

H (kevrenn nivera) = niver a dus bohosek MPI / pobel hollek
A (kuthys)         = skor diwadh kresek rag an dus bohosek MPI hepken

MPI = H × A
```

Drefen an MPI a lamma *kevrenn* an bohosek gans *a hys* ens bohosek, dew ranndir gans an unn
rate H a yll kavos skorow MPI pur dhyffrans mar yw an diwadhow moy sevur yn unn — an
unn lojik "heb eskemm dres dimensyonow" a-dhelergh kresen geometrek an HDI.

## Ensampel oberys

**Arhwith kenedhlek a 1,000 den**: 350 a vydh aswonys avel bohosek liesmeusek (skor diwadh
≥ 33%). Yn mesk an 350 ma hepken, an skor diwadh kresek yw 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Keheveli dew vro gans an unn rate**: Bro A a'n jeves H = 0.30 ha A = 0.40 (lies bohosek, diwadh
yn kres); Bro B a'n jeves H = 0.30 ha A = 0.60 (kehevelys niver bohosek, mes diwadh moy sevur —
heb tan-gonis *ha* heb sanyta *ha* heb pres dhe'n skol war unn dro).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

An keth rate nivera, MPI 50% uhella yn Bro B — system dargetya hepken war bohosogneth a nivera a
wrella rannya an dhew vro heb dyffrans ha ankevi Bro B dhe othem entrevenans downha.

## Kevrenn gans ynjynnerieth medhelweyth

- Systemyow trian-kerghes ha dewisek rag towlennow sokyal a wra yn fynsen gwitha nebes a'n
  deg menegva (chi, pres dhe'n skol, merkyow yeghes) yn kistys dyvers; an metod konta
  Alkire-Foster yw skema parys dhe'ga kesstrehedhya yn unn skor diwadh y le byldya
  model skorya a-dhyworth an dallath.
- An rannans kevrenn/kuthys (H × A) yw patron dalvosek yn hollek rag pub ostel a dherivas
  "pes a vydh tuchys" ryb "pygemmys" — kolapsya an dhew dhe unn niver, haval orth statystygyon
  ledanskoryn, a gudh an kas yw moy resesek.
- Ostelow menegva MPI a gesya yn naturek gans derivans
  [kost rag benefisyer](../kost-rag-pub-kowethyer/) rag towlennow a-erbynn bohosogneth: kost rag poynt
  a dhisklyvans MPI yw unita a yll bos defendys rag keheveli entrevenansow pur dhyffrans
  (treusfera arghans erbynn staga sanyta).

## Trapow

- **Tretya an deg menegva avel hollvedhek** — menegvaow MPI bys-tir OPHI yw kalibrys rag keheveli
  rag pow dhe bow; MPIow kenedhlek (lies pow, yn kemmys yn Asi Dheghow ha Afrika, a dhyllo aga
  re aga honan) a dhesatel menegvaow ha pwysow dhe'n kettermyn leel, ha'n dhew na yll bos kehevelys
  yn ewn.
- **Derivya H hepken** — an rate nivera a ankev kuthys yn tien; deriv po konta A pup-prys
  ryb, po an MPI y honan.
- **Gorra bos an bohosek MPI ha'n bohosek a dhegh an keth pobel** — derivansow bro OPHI
  y honan a dhiskwedh pur vynsh hepken kesgwrans rann; towlen a dharget an bohosek a dhegh
  hepken a gollva yn system rann dalvosek a'n bohosek liesmeusek.

## Fentynyow

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
