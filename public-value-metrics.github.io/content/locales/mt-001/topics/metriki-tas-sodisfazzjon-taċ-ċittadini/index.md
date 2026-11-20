# Metriki tas-sodisfazzjon taċ-ċittadini

Il-metriki tas-sodisfazzjon taċ-ċittadini jkejlu kif in-nies jivvalutaw l-esperjenza diretta tagħhom ta' servizz pubbliku — differenti mill-fiduċja fl-istituzzjonijiet b'mod ġenerali, u differenti minn jekk is-servizz fil-fatt kisibx riżultat tajjeb. Servizz jista' jkun maħbub u ineffettiv, jew effettiv u mhux maħbub; id-distakk bejn it-tnejn huwa nnifsu informazzjoni dijanjostika li tim tal-forniment għandu jsegwi.

## Għaliex hu importanti

Is-sodisfazzjon jitkejjel f'żewġ altitudnijiet differenti li regolarment jiġu mħallta. Fil-livell tas-servizz, il-Performance Platform tar-Renju Unit li issa ġie rtirat u s-service manual attwali tal-GOV.UK jeżiġu stħarriġ tas-sodisfazzjon għal kull servizz (tipikament skala ta' ħames punti minn "sodisfatt ħafna" għal "mhux sodisfatt xejn", amministrat fil-punt tat-tranżazzjoni) bħala wieħed minn erba' KPIs obbligatorji tas-servizz — ara [standards tas-servizz u metriki tat-tranżazzjonijiet](../standards-tas-servizz-u-metriċi-tat-transazzjonijiet/). Fil-livell istituzzjonali, il-Civil Service People Survey tar-Renju Unit ikejjel l-impenn u l-esperjenza tal-impjegati fid-dipartimenti kollha tal-gvern ċentrali kull sena, u separatament il-programm "Trust in Government" tal-OECD jistħarreġ il-fiduċja pubblika fil-gvern nazzjonali fl-istati membri, u jsegwi mudell fit-tul ta' tnaqqis u rkupru ffurmat ħafna minn kriżijiet (kemm il-kriżi finanzjarja tal-2008 kif ukoll il-pandemija tal-COVID-19 ipproduċew movimenti qawwija u viżibbli fiċ-ċifri tal-fiduċja tal-OECD). Ir-raġuni li l-inġiniera li jibnu servizzi li jiffaċċjaw liċ-ċittadini jeħtieġu jżommu s-sodisfazzjon u r-riżultat separati hija modalità ta' falliment magħrufa fid-disinn tas-servizzi: formola diġitali mfassla sabiħ u faċli biex tintuża għal talba ta' benefiċċju tista' tikseb sodisfazzjon għoli ħafna waqt li l-politika ta' taħtha — regoli ta' eliġibbiltà, backlogs tal-ipproċessar, ammonti tal-għotjiet — iħalli lit-talbiet mhux aħjar. Is-sodisfazzjon ikejjel l-interface; ma jkejjilx il-valur mogħti warajha.

## Il-matematika

```
Sodisfazzjon nett = % sodisfatt (jew sodisfatt ħafna) − % mhux sodisfatt (jew mhux sodisfatt xejn)
                    (tweġibiet newtrali/bla opinjoni esklużi miż-żewġ termini, imma magħduda
                    fil-bażi tat-tweġibiet għall-kalkolu ta' kull perċentwal)

Distakk bejn sodisfazzjon u riżultat = punteġġ tas-sodisfazzjon − punteġġ tal-kisba tar-riżultat
                    (it-tnejn normalizzati 0–100; distakk pożittiv kbir jindika servizz
                    li "iħossu tajjeb" iżda ma jwassalx biżżejjed fis-sustanza)

Indiċi tal-fiduċja (stil OECD) = % tar-rispondenti tal-istħarriġ li jwieġbu "iva" għal
                    "għandek fiduċja fi [gvern nazzjonali]?"
                    segwit bħala serje taż-żmien, tipikament diżaggregat skont
                    l-età, id-dħul u l-edukazzjoni
```

## Eżempju prattiku

**Servizz tal-e-billing tat-taxxa tal-kunsill ta' awtorità lokali**: stħarriġ tas-sodisfazzjon fil-punt ta' tranżazzjoni b'suċċess juri 2,400 rispondent: 1,650 sodisfatti/sodisfatti ħafna, 250 mhux sodisfatti/mhux sodisfatti xejn, 500 newtrali.

```
Sodisfazzjon nett = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 sodisfazzjon nett
```

Dan jidher b'saħħtu waħdu. Imma l-istħarriġ jintwera biss lill-utenti li lestew it-tranżazzjoni *b'suċċess* — preġudizzju magħruf tal-kejl (ara l-iżbalji komuni hawn taħt). Meta jitqabbel mal-metrika tar-rata ta' tlestija minn [standards tas-servizz u metriki tat-tranżazzjonijiet](../standards-tas-servizz-u-metriċi-tat-transazzjonijiet/), jidher li t-tlestija hija biss 71%, li jfisser:

```
Is-sodisfazzjon veru tal-popolazzjoni mhuwiex imkejjel għat-29% li abbandunaw il-vjaġġ —
plawżibbilment il-koorti l-aktar mhux sodisfatta, billi l-abbandun innifsu huwa sinjal
negattiv qawwi li l-istħarriġ qatt ma jaqbad.
```

**Illustrazzjoni fil-livell nazzjonali (struttura ta' serje tal-fiduċja stil OECD)**: il-fiduċja fil-gvern nazzjonali rrappurtata għal 42% fl-ewwel sena, tinżel għal 34% fit-tieni sena (sena ta' kriżi) u tirkupra għal 39% fit-tielet sena — traiettorja tipika tal-mudell ta' xokk u rkupru parzjali li l-OECD jiddokumenta fl-istati membri wara kriżijiet kbar.

## Rabta mal-inġinerija tas-software

Strumenta l-istħarriġ tas-sodisfazzjon f'kull punt ta' ħruġ sinifikanti ta' vjaġġ tal-utent, mhux biss fit-tlestija b'suċċess — l-iżball tal-inġinerija l-aktar komuni f'dan il-qasam, u wieħed li bil-kwiet jibdel metrika tas-sodisfazzjon f'metrika tal-vanità bi preġudizzju ta' survivorship. Fejn possibbli, qabbad il-punteġġ tas-sodisfazzjon ma' metrika ta' tlestija jew ta' riżultat fuq l-istess dashboard biex tim ma jiċċelebrax sodisfazzjon li jogħla waqt li t-tlestija bil-kwiet tinżel (ara [spiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/) u [inklużjoni diġitali](../inklużjoni-diġitali/) għal min jiġi eskluż mill-kampjunar tas-sodisfazzjon diġitali fl-ewwel lok — l-utenti mhux diġitali u dawk b'assistenza diġitali huma sottorappreżentati sistematikament fl-istħarriġ fis-servizz). Id-dejta tas-sodisfazzjon u tal-fiduċja tintegra wkoll direttament fis-sieq tal-leġittimità tat-[trijangolu strateġiku ta' Moore](../valur-pubbliku/), u tappartjeni għall-perspettivi tal-"klijent" u tal-"leġittimità" ta' [scorecard tal-valur pubbliku](../scorecard-tal-valur-pubbliku/) — ara [metriki tal-fiduċja u tal-leġittimità](../metriki-tal-fiduċja-u-tal-leġittimità/) għall-ekwivalenti fil-livell istituzzjonali ta' din il-metrika fil-livell tas-servizz.

## Żbalji komuni

- **Preġudizzju ta' survivorship fl-istħarriġ fil-punt tat-tlestija**: l-utenti li jabbandunaw vjaġġ qatt ma jaraw l-istħarriġ, u għalhekk punteġġ għoli ta' sodisfazzjon fis-servizz jista' jikkoeżisti ma' rata baxxa ta' tlestija u popolazzjoni kbira invisibbli ta' dawk li ma lestewx mhux sodisfatti.
- **Li s-sodisfazzjon jiġi ttrattat bħala proxy tar-riżultat**: interface mfassla tajjeb għal politika mfassla ħażin tikseb punteġġ tajjeb fis-sodisfazzjon u ħażin fir-riżultat — dejjem irrapporta t-tnejn, qatt wieħed bħala sostitut tal-ieħor.
- **Kampjuni żgħar u mhux rappreżentattivi rrappurtati b'preċiżjoni foloz**: punteġġ tas-sodisfazzjon minn ftit mijiet ta' rispondenti li għażlu lilhom infushom irrappurtat sa deċimali wieħed jimplika fiduċja li d-daqs tal-kampjun ma jistax isostni.
- **Li tiġi injorata d-diżaggregazzjoni demografika**: ċifri nazzjonali tal-fiduċja u s-sodisfazzjon li ma jinqasmux skont l-età, id-dħul, id-diżabilità jew l-aċċess diġitali jistgħu jaħbu esperjenzi li jvarjaw b'mod qawwi bejn gruppi — mudell li r-rilaxxi stess tal-OECD Trust in Government jiddiżaggregaw b'mod espliċitu.

## Sorsi

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
