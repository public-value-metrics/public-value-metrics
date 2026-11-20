# Dasserghyans Dewisow Liesmeus (MCDA)

MCDA a skorya hag a bosa dewisyow erbynn nebes meusow dyffrans, pwysys, war unn dro, hag a rydh
keheveli klasys heb konstrynya pub meus dhe unn skeul a arghans po unita naturek. Hi yw an metod
apposyans rag dewisyow mayth ens an sewyansow a vri na yll bos digresys yn gwir dhe unn niver.

## Perag y talvos

An Green Book a asnodh yn splann MCDA (y skoodhow Box 2 ha Annex A a'n dyskus yn ewn) rag
apposyansow mayth yw an budhow "yn gwir anvesurys warbarth" — le may hwrella treylya pup tra
dhe arghans dre [dhasserghyans kost-budhi sokyal](../dhivyskans-kost-prow-sokel/), po dhe unn
sewyans dre [dhasserghyans kost-effeythusder](../dhivyskans-kost-effeythyans-yn-gwarnans/),
mis-dherivas an dewis y'n le a'n displegya
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Dewis le rag prison nowydh, rag ensampel, a drawsvyrgh kost chif erbynn efeyth war an kemenedh,
kevrennans treusporth, effeyth a'n kerghynnedh, ha hwithrans a staff — meusow na rann unn unita
hag a-ves y hwra konstrynya dhe unn unita rann (yn fynsen arghans) kuhudha breus a dalvos
adro dhe vri kerdhesek, rag ensampel, efeyth a'n kerghynnedh erbynn kost, kudhys avel
aritmetik objektiv.

Gwiryonedh MCDA yw ynwedh y wanna chif: drefen pwysow dhe vos dhesignys gans nebonan a wra
an apposyans (po gans panel), ny vydh an metod lel marnas an argerdh a bwysa. Dyskans an Green Book a
lever yn splann bos res assentya ha dyllo an meusow ha'n pwysow *kens* skorya an dewisyow, rag lettya
reviewer dhe oberi war-dhelergh dhyworth dewis kerensys dhe'n pwysow a'n justyfia.

## An matematik

```
Rag pub dewis i ha meus j:
  Score_ij   = performans an dewis erbynn an meus na (pur vynsh 0-100
               po 1-10, dhyworth dustuni, breus arbennik, po skorya an
               perghennogyon-kowethyans)
  Weight_j   = kerensys a'n meus j, pwysow a gesadhas dhe 1 (po 100)

Skor pwysys a'n dewis i = Σ_j (Score_ij × Weight_j)

Argerdh:
1. Assentya an set a veusow ha'n pwysow KENS skorya dewis vyth (pwysa
   swing po keheveli dewblek, rag ensampel AHP, yw metodow kemmyn dhe wovyn).
2. Skorya pub dewis erbynn pub meus war unn skeul kemmyn, dhyworth
   dustuni mar pell ha hyllir.
3. Jeva an kresennow pwysys; ranna an dewisyow.
4. Previa sensitivita an pwysow: a wra an rann sevel orth dyvarth
   gwiryon a-dro dhe'n re vri a dal dhe bub meus?
```

MCDA ny dhefol gwerth assolut dalvosek haval orth gwerth presens net SCBA — ny wra marnas rann
dhe'n pwysow assentys. Hedna yw bodh pan yw an dewis yn gwir adro dhe drawsvyrgh a dhaow
anvesurys, hag yw difyk mar y'n usyer dhe gudha an lavur kaletter a vonetyzya, pan o
monetyzya possybyl.

## Ensampel oberys

**Auturdod leel**: konsel ow tewys le rag kreslu nowydh a dhasprena skubel chi a skorya tri le erbynn
peswar meus, pwysys gans panel dhyworth lies kevrenn kens ymweles gans le vyth:

```
Meusow (pwysow):          Kost chif (30%)  Hedhyans treusporth (25%)
                           Efeyth kemenedh (25%)  Efeyth kerghynnedh (20%)

Skorow an lehow (0-100, uhella = gwell):
Le A: kost 80, hedhyans 60, kemenedh 40, kerghynnedh 70
Le B: kost 60, hedhyans 90, kemenedh 70, kerghynnedh 50
Le C: kost 90, hedhyans 50, kemenedh 80, kerghynnedh 60

Kresennow pwysys:
Le A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Le B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Le C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Le C a worta uhella. Kerdh sensitivita a dreusfera pwysow efeyth kemenedh dhyworth 25% dhe 35%
(a gemeres 10 poynt dhyworth kost chif) a janj kresen Le C dhe 71.5 − 3 + 8 = 76.5 ha Le B
dhe 68 − 6 + 7 = 69 — Le C a rev hwath, ytho yw an rann fyrv orth an dyvarth gwiryon ma
a-dro dhe bwysa, ha hedna yw an previ a wayt an Green Book y weles derivys.

**Charita**: fundyans ow ri grontys ow tewys ynter fundya gonis kuvyth dhe rydh, kesrosweyth
a gelghow bos, ha towlen a skians arghans a wra usya MCDA y le SROI (mir orth
[dewis alowsys a'n dhelenwes sokyal](../dehwelans-sokel-war-ynworrans/)) kens drefen
y hwra an trustiys dyvarth, yn da fydh, a'n kaws a dal gwil moy a bwys dhe leshe
kyfyr po dhe lettya — MCDA a res dhedha assentya *furv* an dyvarth (kevradh
a bwysow) y le fainya bos unn rate SROI a'n dyski.

## Kevrenn gans ynjynnerieth medhelweyth

MCDA yw an ostelwedh naturek rag dewis gwerthoryon ha ardhyk a'n meusow dhe unn tu a wrella
kesstrif — dewis ynter system a vaner kevri ostys y'n kommol ha unn y'n le yw
ow trawsvyrgh kost, peryl a sovereynita data, hedhysans, ha fistynyans
dyllans yn fordhow na leshe dhe unn niver. Penn jynnyoryon a dal gorholergh y hwrella
pwysa kens skorya an dewisyow, haval orth an pyth a res an Green Book, drefen ymweles
a bwysa wrys wosa gweles an rolyn berr a wra pur vynsh ow dhrehedhes dhe'n dewis
a gerya an stevell hwath. Mir orth
[prena po gwil y'n governans](../byldya-po-prena-yn-gwarnans/) rag usadow kemmyn a MCDA, ha
[skorkard a werth poblek](../skorkard-gwerth-poblek/) rag ostelwedh skorya
strethys haval devedhys wosa an dewis y le kens an dewis.

## Trapow

- **Settya pwysow wosa gweles an dewisyow.** Hedna yw an fordh moyha kemmyn may fo MCDA
  gwarnys, a-voth po heb; dyllo pwysow kens skorya, ha rekordya piw a'ga settyas.
- **Tretya an kresen pwysys avel niver kalesek.** Skor a 71.5 erbynn 68 nyns yw bwlch
  statystek a dal marnas bos dustunys gans an analys sensitivita bos an rann stabil; derivys
  ystynnow, na ver fals.
- **Usya MCDA dhe wlas monetyzya a veu possybyl yn gwir.** Mara hyllir prisya
  an moyha a'n meusow yn lel, ow dyfaltya dhe MCDA y le [SCBA](../dhivyskans-kost-prow-sokel/)
  a dhelo gwybodhek a hyllsa an apposyans usya.
- **Gasa unn perghenn arbennik settya pub pwysow y honan.** Prattys da an Green Book a wayt
  pwysow dhe vos gwrys dhyworth panel kynrosel, na'n dhirektour a skoodh, rag lettya
  an apposyans dhe dherivya hepken an pyth a wova an den ma dhe-gensa.

## Fentynyow

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
