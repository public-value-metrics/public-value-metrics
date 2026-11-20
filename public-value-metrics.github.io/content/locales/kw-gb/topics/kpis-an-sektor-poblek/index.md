# KPIs an Sektor Poblek

Menegva performans alwedhek (KPI) yw messuryans dewisys, holyys, a sev rag fatell wra servys poblek
y wriansow yn da. Y'n governans, dewis KPI nyns yw dyvarth vyth: drefen KPIs a vydh kelmys dhe
budjettys, tablennow lega, ha gwriansow, an gwrians dhe dhewis unn a furvya omdhegh an re oll
downstream, pur vynsh moy es an polici a grias an servys.

## Perag y talvos

Arwodhyans Charles Goodhart yn 1975 a bolisi mona — wosa hedna skoodhys gans Marilyn Strathern
avel "pan wra messuryans dos dhe vos tarjys, hi a hedh bos messuryans da" — yw an
arwodh-lavar moyha posek a'n lyverans performans sektor poblek. KPI dewisys dhe *dhyskrifa*
system a dhallath *dhe dhistorsya* an system na an prys may fo ressowrsya, pay, po
sevyans politek kelmys dhodho. An ensampel kanonek yw termynow gorthyp ambulans an NHS: pan
veu tarjys gorthyp Klass A a eth mynysen kelmys, nebes trustys a veu diskwedhys dhe "stakya"
ambulansow a-ves dhe horn termyn gorthyp, po dhe dhasglassya galwansow, dhe dhrehedhes an
niver heb chanjya sewyansow klavjy. Dyskans an National Audit Office a'n Pow Unys a-dro dhe
dhewis ha usya menegvaow performans — settys dres y reportys gwerth rag arghans ha'y
framweyth "Performance Measurement by Regulators" ha "Choosing the Right FABRIC" (Fit for
purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — yw yn skila poran drefen
dirvedhow a wrug dewis menegvaow es dhe dherivas heb menegvaow kales dhe gammwul. Jynnyor medhelweyth a
dhyllo an ostel mayth vydh minister po dirvekter breusys orto yw, a-voth po heb, ow tesinya
strethur inkentiv a'n furvyans poblek.

## An matematik

Desinyans KPI yw tema furv-framweyth, mes *gwerthyans* KPI ymgynnydhek yw rol-lyver dasgwrys, na
furvlen:

```
Rag pub KPI ymgynnydhek, skorya erbynn:
  Fit for purpose  — a vesur an sewyans, po proksi nebes kamm dhyworth?
  Appropriate      — a bew dhe'n re a yll y symudya yn gwir?
  Balanced         — a yw hi parys gans kontra-metrik a ven kamgemeres?
  Robust           — a yll hi sevel orth awdyt, po omderivys heb kadarnhe?
  Integrated       — a gesya hi gans an set ledan, po hi a wask erbynn KPI aral?
  Cost-effective   — a gost hi moy dhe gelmi es an dewis a hysya?

Dyberth arwodhyek vs lagek:
  Menegva arwodhyek  → a varner sewyans a dheu, mes yn fynsen kamgemerus (rag ensampel
                       galwansow gorthybys <60s)
  Menegva lagek      → a gadarnha an sewyans a wrug hwarvos, mes a dhrehedh re ladh
                       dhe lewyans (rag ensampel arhwith plesyans bledhynnek)
  Set KPI defendys a dhelmya dhe'n lyha unn a bub rann rag pub amkan.
```

## Ensampel oberys

**Trust ambulans**: trust a dheriv KPI gorthyp Klass A (peryl bewnans) a "75% a alwansow
gorthybys a-ji dhe 8 mynysen." Yn unn kwarter, 6,000 galwans Klass A a dhe; 4,500 yw
metys a-ji dhe 8 mynysen, ow ri 75.0% — splann yn tarjys.

```
KPI titel = 4,500 / 6,000 × 100 = 75.0%  (a vet an dhisser 75%)
```

Mes awdyt Goodhart a dhe ynwedh kontra-metrik: termyn gorthyp kresek rag an 10% a'n
galwansow lenna.

```
Kresen gorthyp dekil lenna = 34 mynysen (dhyworth 19 mynysen dew vledhen kens)
```

An trust a dharget an tarjys pan wra an lost — an galwansow moyha gwir a vensa bos peryl
bewnans mara vo an triyas anperfeyth — dos dhe vos pur wethha, drefen kriwyow a vydh
prioritys dhe galwansow ogas dhe'n kleys 8 mynysen na dhe vri klavjy. An KPI unn
a dherivas hwedhel fals; an KPI parys a dherivas an hwir.

## Kevrenn gans ynjynnerieth medhelweyth

Jynnyoryon a dhesink ostelow performans rag governans yw, yn oberyans, ow tesinya
API inkentiv an kuntellyans. Konsekvensow praktyk: instrumentya an *denominator* mar fyr avel
an numerator (KPI derivys avel rate noeth a elwir dhe denominator gaming — mir orth
[kost rag trensaksyon](../kost-rag-pub-trehans/) rag an keth fosow yn servyssow didjital);
byldya kontra-metrikow y'n keth ostel y le report dyffrans na redh den vyth, may fo gaming
gwelys orth poynt an dewis; ha versionya diskrifans an KPI, drefen dasdhiskrifans
tavas (chanjya pyth a vydh kontys avel "galwans," "kas," po "kwarier") yw haval dhe
chanjya an tarjys heb y gennerthi. [Skorkard gwerth poblek](../skorkard-gwerth-poblek/)
yw unn fordh strethys dhe lettya unn KPI dhe vos redys yn kehedhys, ha
[atebelder selys war sewyansow](../atebelder-selys-war-sewyansow/) yw an dysgyblyn a dhewis
KPIs nivel pobel na yll skipa unn yn unn distorsya.

## Trapow

- **Dewis an metrik es dhe gelmi dres an metrik styrek**: termyn gorthyp galwans yw
  pur es dhe logya; a wrug an galwans dhe dhrehedh problem an sevysek na — mes an nessa unn
  yn unn yw an sewyans. Hedhi dhe sewya an pyth a wra an system yn-dhe-yn.
- **Heb kontra-metrik**: pub KPI kelmys dhe arghans po fam a vydh gamys orth an
  rynn; y dhyllo gans metrik parys a ven kamgemeres an fordh gaming gwaytys kens y dyllo.
- **Dasdhiskrifa an metrik heb chanjlogh**: chanjya "galwansow kefys" gans "galwansow
  gorthybys" dhe wil gwarthe an tuedh a goll kredyans an rew termyn pan yw dyskevys —
  dyllo pup prys chanjlogh diskrifansow ryb an niverow.
- **Kemmysga oberyans gans sewyans**: konta arwodhyansow kowlwrys yw dyllyans; konta
  tiogow dres dhe dhrehedhes yw nes dhe'n sewyans (mir orth
  [sewyansow erbynn dyllyansow](../sewyansow-erbynn-dyllyansow/)).

## Fentynyow

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
