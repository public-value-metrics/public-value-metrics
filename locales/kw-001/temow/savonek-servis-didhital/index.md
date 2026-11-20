# Savonek Servis Didhital

An Savonek Servis GOV.UK yw an yet may tal pub servis didhital a lywodraeth ganol passya kyns ha may hyll mos yn few: 14 poynt dyllys, assayys gans pannel anserghek orth diwedh pub fas a dhelivrans. Ev yw an vayn a wra "gwruthyl gonysow poblek da" dhe vos ervirans passya po fyllel gans lergh skrifys — hag ev yw an ynner-ha-hy dhyrag an gorhemmynn "didhital dre ragosodhek" a Strateji Didhital an Governans a 2012.

## Perag y talvos

Kyns bos an Savonek Servis, fyllans TT an governans a vedha hwath gwelys fest ha skyan bys y'n lonshyans, ha hwath anwoll dhe dhesyrans a ylli den dhe dhiskwedhes. Strateji Didhital an Governans a 2012 a berthyas an radnyow dhe dhe-wruthyl an 25 gonys treusvarghow gans an moyha a vylgomment dhe'n poblow avel "didhital dre ragosodhek", ha'n ambosow a veu skoodhys gans mayn dhe wiredhes: ny ylli gonysow mos yn few war GOV.UK heb passya arvreythyans servis erbyn an hyn o savonek a 26 poynt (kuntellys dhe 18 yn 2019, ha lemmyn an savonek a 14 poynt a vew hedhyw, ow kudha tri bagas — konvedhes edhomow an devnydhyoryon, provia servis da, ha devnydhya an teknologieth ewn). Arvreythyans servis yw hwarvos gwir: pannel a arvreythysi GDS po radn a hwithra an displegyansow, govyn orth an bagas, ha ri breus a bassya, a fyllel, po "ny veu kowlwrys" erbyn pub poynt, dyllys war bejen arvreythyans an servis. Fyllel arvreythyans a lettyas an servis dhyworth mos a beta privedh dhe beta poblek, po dhyworth beta dhe vew — yth yw yet gwir, nyns yw whelans bys.

## An matematik

An Savonek Servis yw framwayth, nyns yw formula, mes y hu ev avel strukturyans dewis gans yethow:

```
Diskudhans → Arvreythyans alfa → Arvreythyans beta → Arvreythyans bew
             (nyns yw ilvos       (ilvos kyns         (ilvos kyns tedha
              rag pub servis,      lonshya beta         an tag "beta" ha
              mes erghys)          poblek)              degea an kenwerth koth)

Pub arvreythyans: displegyans + kesklapp gans an bagas → breus an pannel rag pub poynt
  Kowlwrys / Kowlwrys yn rann / Ny veu kowlwrys
Deveth hollek: Passya / Passya gans ammodhow / Fyllel (hwithrans nowydh yw ilvos)

Kost fyllel ≈ kost an kylgh sprint nessa dhe worra yn ordyn
              + hirheans an [selvyansow dre dreylyans kenwerth](../sawyansow-treylyans-kanel/)
                may feu an servis arghansys dhe dhelivra
```

Poynt 10 ("dyffrya pyth yw sewena, ha dyllo data gonys") a boras [kost an treuslans](../kost-rag-pub-trehans/) ha [savonegow servis ha metryksow treuslans](../standardys-servys-ha-metrikow-trensaksyon/) — an Savonek a worhemmyn an musuryans, nyns yw hepken an servis.

## Ensampel oberys

**Servis spladn tre awtorita leel**: bagas konsel a dhe'n arvreythyans beta gans servis a gowlwra 11 a 14 poynt mes a fyll poynt 5 ("gwruthyl certan may hyll pubonan devnydhya an servis") drefen nag eus fordh didhital skoodhys rag gwithyewgwarthek heb kevrys an kesrosweyth, ha fyllel poynt 9 drefen data personel yw skrifys yn tekst plain y'n lergh gwallow a'n wuruthyans.

```
Kost ewn an fyllel:
  Spas hwithrans nowydh: gortos a 6–8 seythun rag an pannel nessa
  Sprint a worra yn ordyn: 2 displegyer × 3 seythun × £550/dydh ≈ £34,650
  Dyssynnans fordh didhital skoodhys: 1 hwithrer × 2 seythun ≈ £5,000

Kost an hirheans: an servis o rakwelys dhe dreylya 40% a 18,000
govynnow tyji/bledhen dhyworth galwyansow pellgowser a £8.50
dhe dreuslansow didhital a £0.20
  = 7,200 × (£8.50 − £0.20) = £59,760/bledhen kellys, ow rann dhe'n
    hirheans a ~2 mis ≈ £9,960

Kost hollek an arvreythyans fyllys ≈ £49,610
```

Ny yw an poynt a'n aritmetik an kewar — yth yw bos pris gwir ha jyst gans arvreythyans fyllys, hag ev yw an acheson may kyn an yet dhyns.

## Kevrenn gans ynjynnerieth medhelweyth

Rag ynjynnoryon, an Savonek a dhesk avel rol-whithra a architektur ha delivrans kefrys avel dokument polici: poynt 11 ("dewis an toulys ha'n teknologieth ewn") ha poynt 12 ("gwruthyl an kod fenten nowydh ygor") yw dewisyow ynjynnans ewn, ha poynt 14 ("gonis servis fyadow") a worhemmyn an keth SLOs ha argerdhow hwarvos a dal pub system produksyon. Ev yw an framwayth gwarthek rag an bagas ma a dhesedhow — [kost an treuslans](../kost-rag-pub-trehans/) ha [selvyansow dre dreylyans kenwerth](../sawyansow-treylyans-kanel/) yw an pyth a whelas an Savonek gwitha yn arghansek, [kebmyskadow didhital](../kefrysans-didjital/) yw an pyth a wra poynt 5 certan, ha komponentow [governans avel platform](../governans-avel-platform/) (GOV.UK Notify, Pay, One Login) a gowlwra poynt 13 ("devnydhya ha ri dhe savonegow ygor, komponentow kebmyn ha patrons") an moyha dre ragosodhek. Mir ynwedh [gwruthyl po prena y'n governans](../byldya-po-prena-yn-gwarnans/) rag fatell wra poynt an "toulys ewn" yn dewisyow prenans.

## Trapow

- **Ewnhe an arvreythyans avel kreslenn omlowenhe a dhydh lonshyans**: bagasow a redyas an 14 poynt hepken seythun kyns aga arvreythyans beta a fyll dre dhos; an Savonek yw ervirys dhe furvya dewisyow dhyworth an diskudhans, nyns yw dhe awditya aga lergh.
- **Arvreythya an prototyp, nyns yw an servis**: demo splann a yll passya arbrynyans a wrussa an servis bew, kebmyskadow didhital skoodhys, ha rethys gans hwarvosow, fyllel — an arvreythysi a dal whelas an bwlans ma, mes servisow byghan omcertifyes ens ynwedh hepkorrys.
- **Heb arvreythyans nowydh kyns skeulya**: servis arvreythys orth lonshyans 5% ny wra gwitha ragosodhek erbyn 100% — an karg, an govynn a fyllel, ha'n devnydhyoryon a'n kasow pennfinow a dreyl oll.
- **Kemmysga an Savonek Servis gans system dyssynnans**: komponentow Kevrenn Dyssynnans GOV.UK a gowlwra nebes poyntow (kehevelepter, hedhes) mes an Savonek a gudh ynwedh strukturyans an bagas, argerdh agile, ha etik data — servis fest stylys a yll fyllel hwath orth poyntow 2, 6 po 9.

## Fentynyow

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
