# Ibni jew ixtri fil-gvern

Ibni jew ixtri huwa paragun strutturat u aġġustat għar-riskju bejn żvilupp apposta u akkwist kummerċjali jew ta' prodott standard, imqabbla fuq [spiża totali tas-sjieda](../spiża-totali-tas-sjieda-fl-it-governattiv/) skontata, ħin biex jinkiseb il-valur u riskju. Il-gvern huwa strutturalment settur li jixtri — it-Technology Code of Practice jistabbilixxi preżunzjoni favur soluzzjonijiet standard u fil-cloud — iżda t-timijiet tal-inġinerija fi ħdan id-dipartimenti xorta jibnu b'mod awtomatiku, għall-istess raġunijiet li jibnu l-bennejja kullimkien.

## Għaliex hu importanti

It-Technology Code of Practice tal-Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) u l-gwida li takkumpanjah fis-Service Manual dwar jekk wieħed għandux jibni jew jixtri jisprunaw lid-dipartimenti jiġġustifikaw żvilupp apposta kontra preżunzjoni li kapaċità standard għandha tiġi mixtrija, mhux mibnija, u li biss kapaċità verament ġdida u li tiddistingwi l-missjoni tiġġustifika kodiċi apposta. Il-gwida supplimentari tal-HM Treasury għall-Green Book dwar il-preġudizzju ta' ottimiżmu, meħuda mir-reviżjoni tal-2002 ta' Mott MacDonald tal-akkwisti pubbliċi kbar, tagħti lill-proġetti tal-IT l-usa' firxa ta' żieda minn kull kategorija evalwata — stimi tal-ispiża kapitali rakkomandati għal żieda ta' 10% fil-minimu u sa 200% fil-massimu qabel jintużaw fl-evalwazzjoni, li jirriflettu kemm il-bini tas-software storikament kien sottostimat fl-akkwist pubbliku. L-analiżi ta' ibni jew ixtri teżisti preċiżament biex iġġib dan l-aġġustament għar-riskju fuq il-mejda qabel l-approvazzjoni, minflok ma titlaq titfaċċa bħala talba għal nefqa żejda fis-sena.

## Il-matematika

```
Qabbel fuq l-istess orizzont ta' 3–5 snin, skontat bir-rata soċjali ta' skont
tal-Green Book (ara social-discount-rate.md):

NPV_għażla = PV(benefiċċji, imċaqalqa bil-ħin biex jinkiseb il-valur) − PV(TCO)

Aġġustamenti għar-riskju (mudell tal-preġudizzju ta' ottimiżmu tal-Green Book):
  spiża tal-bini × 1.1–3.0        (firxa ta' żieda għall-proġetti tal-IT, Mott MacDonald)
  ħin biex jinkiseb il-valur tal-bini + 40–60% (prior tad-dewmien fit-tħaddim)
  xiri: żid verifika tar-realtà tal-integrazzjoni u spejjeż tal-ħruġ mill-kuntratt minflok

Fatturi li jiddeċiedu, fl-ordni li normalment jiddeċiedu:
  1. differenzjazzjoni — din il-kapaċità hija l-missjoni, jew l-impjant?
  2. ħin biex jinkiseb il-valur × spiża tad-dewmien (ara cost-of-delay-in-public-programmes.md)
  3. spiża totali tas-sjieda aġġustata għar-riskju
```

## Eżempju prattiku

Awtorità lokali teħtieġ sistema tal-ġestjoni tal-każijiet għall-kura soċjali tal-adulti. Xiri: SaaS b'£180,000/sena, attiva f'4 xhur. Bini: stmat £900,000 flimkien ma' £150,000/sena manutenzjoni, attiv f'14-il xahar.

```
Spiża tal-bini aġġustata għar-riskju = 900,000 × 1.4 = £1,260,000
TCO ta' 5 snin:
  xiri  = 180,000 × 5 = £900,000
  bini  = 1,260,000 + 150,000 × 5 = £2,010,000

Terminu tad-dewmien: is-sistema tevita £40,000/xahar f'evalwazzjonijiet duplikati;
il-bini jasal 10 xhur aktar tard mix-xiri.
CoD = 10 × 40,000 = £400,000

Paragun effettiv: £900,000 (xiri) vs £2,010,000 + £400,000 = £2,410,000 (bini)
```

Ix-xiri jirbaħ b'madwar £1.5 miljun fuq ħames snin, u l-akbar linja waħda wara l-istima tal-bini innifsu hija l-ispiża tad-dewmien li paragun puru ta' capex ma kien qatt juri.

## Rabta mal-inġinerija tas-software

Id-dixxiplini li jgħaddu direttament minn din l-analiżi għall-prattika tal-forniment: **aġġustament tar-riskju abbażi ta' prior** — iż-żieda ta' Mott MacDonald hija l-ekwivalenti fis-software tal-preġudizzju ta' ottimiżmu tal-Green Book applikat b'mod mekkaniku, u għalhekk it-timijiet għandhom jargumentaw għal eċċezzjonijiet minnha minflok jassumu li l-istima tagħhom hija l-eċċezzjoni; **onestà fil-komparatur** — l-alternattiva għall-bini hija l-aħjar għażla ta' xiri disponibbli, mhux "xejn", li torbot direttament ma' [spiża ta' opportunità fin-nefqa pubblika](../l-ispiża-tal-opportunità-fl-infiq-pubbliku/); u **paragun onest tat-TCO** — kull proposta ta' bini għandha titqabbel mal-[spiża totali tas-sjieda](../spiża-totali-tas-sjieda-fl-it-governattiv/) sħiħa ta' għażla ta' xiri, mhux mal-prezz tal-lista tagħha. Fejn il-bini verament jirbaħ, l-[ispiża tad-dewmien](../spiża-tad-dewmien-fil-programmi-pubbliċi/) tal-ħin addizzjonali tal-bini għandha tiġi evalwata b'mod espliċitu fil-każ tan-negozju, mhux titħalla bħala assunzjoni mhux dikjarata li l-ħin ma jgħoddx.

## Żbalji komuni

- **Li jitqabbel il-prezz tal-lista tal-fornitur ma' stima tal-bini mhux aġġustata għar-riskju**: dan jippreferi l-bini darbtejn, darba fuq l-ispiża u darba fuq l-iskeda.
- **Xogħol intern bi prezz żero**: il-ħin tal-inġiniera tas-servizz ċivili jiġi ttrattat bħala "b'xejn" għax diġà jinsab fil-baġit tal-persunal tad-dipartiment, u dan jaħbi l-ispiża ta' opportunità vera tiegħu kontra xogħol ieħor li dak it-tim jista' jagħmel.
- **Lock-in mhux evalwat fiż-żewġ direzzjonijiet**: l-ispejjeż tal-ħruġ mill-fornitur u tal-portabilità tad-dejta huma reali, iżda hekk huma wkoll il-bus-factor ta' bini apposta u d-dipendenza tiegħu fuq iż-żamma ta' tim intern żgħir u diffiċli biex jinbidel matul ħajtu.
- **Differenzjazzjoni tal-missjoni mitluba għall-impjant**: "dan huwa ċentrali għalina" jiġi asserit dwar middleware ta' integrazzjoni jew maħżen tad-dokumenti — ittestjah kontra jekk ċittadin jew uffiċjal tal-każijiet qattx jinduna liema wieħed qed jaħdem taħt.

## Sorsi

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
