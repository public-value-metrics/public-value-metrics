# Metryksow DORA rag Talvos Poblek

Metryksow DORA (DevOps Research and Assessment) — frekwens displegya, termyn derivadow rag chanjyow, nivel fyllel chanj, ha termyn dhe dhasvewa servis, ha fyadowieth avel pympes — yw an arvreythyansow delivrans moyha kowlwrys yn diwysyans software. Treylys dhe dermyn atebelder a'n sektor poblek, pub unn yw dysyl ewn a fatell uskis, ha fatell sawthek, y teu talvos poblek dhe sitisen.

## Perag y talvos

Ymwithrans a dheg bledhen DORA, dyllys bledhennek avel an *Accelerate State of DevOps Report* (metodologieth Forsgren, Humble ha Kim, lemmyn gonyssys gans Google Cloud), a rann bagasow yn berformyoryon elit, uhel, kres hag isel. Bagasow elit a displegya dhe wul, a gemmer isella es unn dydh dhyworth commit bys yn produksyon, a fyll nes dhe 5% a chanjyow, ha dasvewa yn dan unn our; berformyoryon isel a displegya yn mysek po lyha, a gemmer mysyow, a fyll nes dhe 40% a chanjyow, ha dasvewa yn seythunyow. Y'n governans nyns yw an metryksow ma boghow vanyta ynjynnans: Savonek Servis an Government Digital Service a erghi bagasow dhe "iterya ha gwellha yn menough" ha bos abyl dhe worthyb yn uskis dhe edhom an devnydhyer, ha departmentow na yll displegya yn sawthek ha menough yw yn strukturyans heb gallos kowlwra an savonek na, pytegyns yw aga hwithrans devnydhyer. Whel effeythieth didhital an Cabinet Office y honan a gavas bos kostek ow-trenna sitisen dhyworth treuslans didhital fyllys po lent bys yn kenwerth pellgowser po paper — Derivadow Effeythieth Didhital GDS 2012 a rakwelas nebes treuslansow didhital a gostyas bys dhe 20p erbyn kesstowyow pellgowser po fas-orth-fas a gostya bys dhe £8.62 — ytho fyllel chanj yn servis fas-poblek nyns a kosti hepken termyn ynjynnans mes a wra bos puntow gwir war budjet an kresel-kesstow (mir [selvyansow dre dreylyans kenwerth](../sawyansow-treylyans-kanel/)).

## An matematik

```
Frekwens displegya    = displegyansow produksyon / termyn
Termyn derivadow      = t(displegya) − t(commit), kresek
Nivel fyllel chanj    = chanjyow fyllys / hollek chanjyow × 100
Termyn dasvewa (MTTR) = t(dasvewys) − t(fyllel), kresek
Fyadowieth            = kowlwrans SLO (kavadewder, lentedh, ewnder)
```

Treylyansow talvos poblek:

```
Termyn derivadow → seythunyow y'n pyplyn × CoD, mir cost-of-delay-in-public-programmes
Nivel fyllel     → nivel hwarvos a wel an sitisen: CFR × kost dhe bub galwyans
                   kresel-kesstow dreylys (po dhe bub treuslans statutek fyllys)
Termyn dasvewa   → noy a dhyghtyans servis: MTTR × (clammow/dyllansow lettys
                   dhe bub our) × kost ynwedh po kellyans les dhe bub unnik
Fyadowieth       → diskont budhek: servis orth 99% kavadewder a ri
                   ≈ 0.99 a'y vudhek modellys — an hevelep delivrans
                   a hyt dhe daken po kewsyans le
```

## Ensampel oberys

Bagas portal clammow budhekow a awtorita leel, kyns ha wosa budhek ynjynnans delivrans:

```
                    Kyns        Wosa
Displegya           mysek       seythunek
Termyn derivadow    8 seythun   5 dydh
CFR                 30%         10%
MTTR                3 dydh      4 our
```

An bagas a dhelivra nes dhe 25 gwellheans/bledhen, talvos kresek £8,000/seythun ([kost an dhelay](../kost-daladh-yn-towlennow-poblek/)). Kuttha termyn derivadow gans nes dhe 7.3 seythun a dhre dhyghtyans pub gwellheans yn-rag: 25 × 7.3 × 8,000 ≈ **£1,460,000/bledhen** a dalvos delivrys moy skyn. Rag nivel fyllel: 25 × (0.30 − 0.10) = 5 chanj fyllys le/bledhen; pub chanj fyllys war portal poblek a dhre kyns hanow nes dhe 2,000 sitisen dhe'n kenwerth pellgowser orth £8.62 erbyn 20p, kost net a nes dhe £8.42 × 2,000 ≈ £16,840 dhe bub hwarvos, ytho gochya 5 hwarvos a sawv ≈ **£84,200/bledhen**. Budhek ynjynnans delivrans yw talvys y'n keth arghans avel pub kas talvos poblek aral.

## Ensampel oberys pellheys: fyadowieth

Mar kwra an portal oberi orth 97% kavadewder yn le a'n gwydhel 99.5%, ha pub poynt a ranndhys a dhelyn a vo modellys avel 2% a glammow kellys dre dhyslevya, yth yw an servis ow-tevran nes dhe 0.975 a'y vudhek modellys a £2M/bledhen — diskont budhek a £50,000/bledhen na wra tablyn-bord uptime pur dhiskwedh nevra.

## Kevrenn gans ynjynnerieth medhelweyth

Metryksow DORA yw metryksow oberyansek servis poblek yn dyllas dyffrans: termyn derivadow a vap dhe [savonegow servis ha metryksow treuslans](../standardys-servys-ha-metrikow-trensaksyon/); nivel fyllel chanj a vap dhe nivelyow dasober ha klamm; MTTR a vap dhe hirneth may fo servis statutek anavadow dhe glammoryon. Tekniks gwellheans a dreylya yn dhew-fordh drefen bos an dhew ow-sistemys gortos yn dan strusyansow atebelder — mir [metryksow ruth yn delivrans governans](../metryksow-ruth-yn-delivrans-an-governans/) rag an matematik gortos dyghtys. Gwra notya ynwedh kavans DORA 2025 bos devnydh AI ow-kevrenna gans uhelha throughput mes *gwessa* sawthekter — ebyrnans gans effeythieth ha tuedhow-kostow ynwedh, an keth dhegresyans budhek-net a wra an testen [produktivita AI y'n sektor poblek](../produktivita-ai-yn-rann-poblek/) an bagas ma oberi anodho.

## Trapow

- **Gamya metryks**: ynkressya nivel displegyansow gans delivrans heb efyth, po dhe-dhelles hotfixes dhyworth an kownt a fyllel chanj. Dyffrya hwarvosow orth keth ewnder avel savonek servis statutek a dyffrya "treuslans sewenys".
- **Tablow-kesstrif ynter departmentow**: klustrow DORA a gehevely arferow delivrans, nyns yw servisow gans profilys peryl dyffrans; system pajment treth warnyes "uhel" a yll bos an saf ewn le may fo "elit" dhe vos hesek drefen erghow dhe-hwithrans.
- **Gwellhe unn metryks hepken**: uskisder heb nivel fyllel chanj yw an ammos klasek a throughput ha anstabilita — raportya an peswar warbarth, nyns avel unn skor.

## Fentynyow

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
