# Il-valur tad-data miftuħa

Il-valur tad-data miftuħa huwa l-problema li jiġi stmat kemm tiswa d-data tal-gvern u tas-settur pubbliku meta ma jkollha ebda prezz: ma tinbiegħx, allura m'hemm ebda linja tad-dħul, u madankollu l-ħruġ tagħha (rekords tat-temp, skedi tat-trasport, konfini tal-kodiċi postali, reġistri tal-kumpaniji) b'mod ippruvat jiġġenera attività ekonomika u soċjali iktar 'l isfel fil-katina. Li tevalwaha tajjeb jgħodd għax "huwa b'xejn li toħrġu" u "m'għandha ebda valur" huma t-tnejn żbaljati, u inġinier tas-software li qed jiddeċiedi jekk jiftaħx API jew dataset għandu bżonn argument aħjar minn kwalunkwe waħda minnhom.

## Għaliex hu importanti

L-aktar stima mill-ogħla għall-isfel ikkwotata hija mir-rapport tal-2013 tal-McKinsey Global Institute "Open data: Unlocking innovation and performance with liquid information", li poġġa l-valur annwali potenzjali tad-data miftuħa f'seba' oqsma — edukazzjoni, trasport, prodotti tal-konsumatur, elettriku, żejt u gass, kura tas-saħħa u finanzi tal-konsumatur — bejn $3 triljun u $5 triljun fis-sena globalment, permezz ta' mekkaniżmi li jinkludu trasparenza akbar, tqabbil aktar effiċjenti tal-provvista mad-domanda, u l-possibbiltà ta' prodotti u servizzi ġodda mibnija fuq id-data. Dik iċ-ċifra hija stima ta' xenarju, mhux riżultat imkejjel, u spiss tiġi kkwotata ħażin qisha dħul li l-gvern jista' jaqbad direttament, meta l-valur l-aktar imur għand partijiet terzi — negozji, riċerkaturi, ċittadini — li jużaw id-data, li huwa eżattament il-punt li tiftaħha minflok ma tbiegħha. L-Open Data Institute tar-Renju Unit, imwaqqaf flimkien minn Sir Tim Berners-Lee u Sir Nigel Shadbolt fl-2012, minn dak iż-żmien bena korp ta' studji ta' każ aktar granulari, mill-qiegħ 'il fuq — settur b'settur, dataset b'dataset — li huma ferm aktar utli għal business case reali mill-figura tal-headline tal-McKinsey, għax juru l-mekkaniżmu tal-ħolqien tal-valur, mhux biss id-daqs aggregat tiegħu.

## Il-matematika

Id-data miftuħa m'għandha ebda prezz tas-suq, għalhekk metodi ta' valutazzjoni jieħdu postu; tliet approċċi jirrikorru, u ebda wieħed mhu biżżejjed waħdu:

```
1. Metodu tal-ispiża evitata / tal-ispiża ta' sostituzzjoni:
   valur ≈ dak li l-utenti kienu jħallsu biex jipproduċu jew jagħtu liċenzja
   għal data ekwivalenti huma stess — limitu baxx, jinjora l-valur maħluq
   minn użi li l-produttur oriġinali qatt ma antiċipa

2. Metodu tal-analogu tas-suq / tal-attività iktar 'l isfel:
   valur ≈ dħul jew iffrankar iġġenerat minn negozji/servizzi mibnija
   fuq id-data (eż. apps tas-satnav mibnija fuq mapep miftuħa u data
   tat-traffiku) — jaqbad attività ekonomika reali imma huwa diffiċli
   biex jiġi attribwit b'mod nadif għall-ħruġ tad-data nnifsu (ara additionality-and-deadweight)

3. Metodu kontinġenti/tal-preferenza ddikjarata:
   valur ≈ dak li l-utenti jgħidu li kienu jħallsu, jew il-ħin li jgħidu
   li jiffrankalhom — ara stated-preference-valuation għall-metodu
   ġenerali u l-preġudizzji tiegħu

Ebda waħda minn dawn ma tipproduċi ċifra nadifa daqs prezz tas-suq; business
cases kredibbli tad-data miftuħa jittrijangulaw bejn tnejn jew aktar, u huma
espliċiti dwar liema mekkaniżmu qed jagħmel ix-xogħol.
```

## Eżempju prattiku

**Ħruġ illustrattiv ta' data nazzjonali tal-mapep/indirizzi** (metodoloġija wara studji ta' każ fl-istil tal-ODI, ċifri illustrattivi tad-daqs li studji bħal dawn tipikament isibu):

```
Stima tal-ispiża evitata:
  Negozji li altrimenti kienu jakkwistaw liċenzja għal data ekwivalenti ta'
  tqabbil ta' indirizzi kummerċjalment, b'spiża medja stmata ta' liċenzja ta'
  £4,000/sena, fost stima ta' 15,000 SME li issa jużaw id-dataset miftuħ b'xejn
  = 15,000 × £4,000 = £60,000,000/sena fi spiża ta' liċenzjar evitata biss

Stima tal-attività iktar 'l isfel (aktar spekulattiva, teħtieġ kontrofattwali):
  Prodotti ġodda ta' routing tal-konsenji u loġistika mibnija fuq id-data
  miftuħa li ma kinux jeżistu, jew kienu materjalment agħar, mingħajrha —
  teħtieġ tqabbil mal-kontrofattwali li d-data tibqa' magħluqa jew b'liċenzja
  kummerċjali (counterfactual-analysis), għax xi wħud minn dik l-attività kienu
  jiġru xorta fuq data mħallsa bi prezz ogħla, li huwa deadweight fis-sens ta'
  "valur maħluq mill-ftuħ"

Business case difensibbli jirrapporta ċ-ċifra tal-ispiża evitata bħala limitu
baxx solidu, u jittratta ċ-ċifra tal-attività iktar 'l isfel bħala xenarju
ta' limitu għoli, mhux fatt.
```

## Rabta mal-inġinerija tas-software

Għall-inġiniera, il-mistoqsija prattika dwar il-valur tad-data miftuħa ġeneralment hija aktar dejqa mill-ċifri nazzjonali tal-headline: il-ftuħ ta' dan l-API jew dataset speċifiku (minflok ma jinżamm wara ftehim ma' sieħeb) iżid il-użu mill-ġdid biżżejjed biex jiġġustifika l-ispiża kontinwa li jiġi dokumentat, verżjonat u appoġġat bħala interface pubblika? Dik l-ispiża ta' manutenzjoni hija reali u hija l-parti opposta tal-ekonomija ta' ibni-darba-uża-ħafna-drabi tal-[gvern bħala pjattaforma](../gvern-bħala-pjattaforma/) — iż-żewġ suġġetti huma kużini qrib, wieħed dwar kodiċi u infrastruttura maqsuma, l-ieħor dwar data maqsuma. Kwalunkwe pretensjoni dwar il-valur tad-data miftuħa għandha tiġi vverifikata kontra l-[addizzjonalità u d-deadweight](../addizzjonalità-u-deadweight/) qabel ma tidħol f'business case: attività li kienet tiġri xorta, fuq data b'liċenzja kummerċjali, mhix valur maħluq mill-*ftuħ*.

## Żbalji komuni

- **Li ċ-ċifra ta' $3–5 triljun tal-McKinsey tiġi kkwotata bħala speċifika għar-Renju Unit jew bħala sehem ta' dan id-dataset**: hija stima ta' xenarju globali ta' seba' setturi mill-2013 — li tintuża bħala multiplikatur preċiż għal dataset nazzjonali wieħed tirrappreżenta ħażin dak li hu dan in-numru.
- **Ebda kontrofattwali**: li jittieħed il-kreditu għall-attività ekonomika kollha iktar 'l isfel mibnija fuq data miftuħa, mingħajr ma wieħed jistaqsi kemm minnha kienet tiġri xorta fuq data mħallsa jew b'liċenzja bi prezz ogħla (ara [addizzjonalità u deadweight](../addizzjonalità-u-deadweight/) u [analiżi kontrofattwali](../analiżi-kontrofattwali/)).
- **Li l-ispiża tal-produzzjoni titħawwad mal-valur maħluq**: dataset li kien għali biex jinġabar mhuwiex awtomatikament prezzjuż li joħroġ, u wieħed rħis mhuwiex awtomatikament ta' valur baxx — il-valur isegwi l-użu iktar 'l isfel, mhux l-ispiża 'l fuq.
- **Li tiġi injorata l-ispiża kontinwa ta' manutenzjoni ta' "miftuħ"**: li tippubblika estratt CSV ta' darba mhuwiex l-istess impenn bħal li tħaddem API miftuħ dokumentat, verżjonat u appoġġat — li dan tal-aħħar ma jiġix iffinanzjat biżżejjed wara l-anunzju tat-tnedija huwa mod komuni ta' falliment.

## Sorsi

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
