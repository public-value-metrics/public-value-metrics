# Il-produttività tas-servizzi pubbliċi

Il-produttività tas-servizzi pubbliċi tkejjel kemm l-infiq pubbliku jikkonverti b'mod effiċjenti l-inputs (persunal, kapital, oġġetti u servizzi) f'outputs aġġustati għall-kwalità, għal servizzi — saħħa, edukazzjoni, pulizija, kura soċjali — li m'għandhom ebda prezz tas-suq u għalhekk ebda ċifra tad-dħul li biha jinqasmu l-ispejjeż. L-Office for National Statistics tar-Renju Unit ippubblika din is-serje sa mill-nofs tas-snin 2000 u tibqa' l-aktar tentattiv nazzjonali żviluppat metodoloġikament biex tingħata tweġiba għal "il-gvern qed isir aħjar jew agħar biex jikkonverti flus f'servizzi pubbliċi?"

## Għaliex hu importanti

Fis-suq, il-produttività hija (valur tal-output) / (spiża tal-input), u l-valur tal-output jidher għax xi ħadd iħallas għalih. Tibdil tal-ġenb, post fl-iskola, u patrol tal-pulizija m'għandhom ebda prezz tal-bejgħ, għalhekk b'mod naive tista' tkejjel biss l-*inputs* (dak li ntefaq) — li tiġbed lill-kummentaturi biex jittrattaw infiq pubbliku li jikber bħala awtomatikament ħażin, peress li aktar input b'attività headline ċatta jidher bħal produttività li tonqos. Il-metodoloġija tal-ONS, stabbilita fil-pubblikazzjonijiet tagħha "Sources and Methods" dwar il-produttività tas-servizzi pubbliċi, issolvi dan billi tibni indiċi tal-*output* mill-volumi tal-attività (operazzjonijiet imwettqa, studenti mgħallma, reati investigati) u mbagħad *taġġusta għall-kwalità* dak l-indiċi tal-output — għas-saħħa, billi tinkorpora r-rati ta' sopravivenza u l-ħinijiet tal-istennija; għall-edukazzjoni, billi tinkorpora l-attainment; għall-pulizija, billi tinkorpora eżiti bħar-riżoluzzjoni tal-każijiet — sabiex servizz li jagħmel l-istess numru ta' operazzjonijiet imma jilħaq rati ta' sopravivenza aħjar jirreġistra bħala aktar produttiv, mhux biss aktar għali. Is-sejba headline li terġa' tidher fil-pubblikazzjonijiet tal-ONS hija sobrija għas-settur: il-produttività tas-servizzi pubbliċi tar-Renju Unit niżlet bil-qawwa matul il-pandemija tal-COVID-19 u sal-pubblikazzjonijiet tal-ONS stess f'nofs is-snin 2020 kienet għadha ma rkuprat il-livelli tal-2019 f'diversi sottosetturi inkluża l-kura tas-saħħa, anki hekk kif l-infiq żdied — distakk li jerġa' jfassal "aktar finanzjament" u "aktar produttività" bħala żewġ mistoqsijiet għal kollox separati.

## Il-matematika

```
Indiċi tal-output (volum) = Σ (attività_i × piż relattiv tal-ispiża unitarja_i), ippiżat fuq is-sena
                          bażi madwar l-attivitajiet kollha tas-servizz (eż. operazzjonijiet tal-ġenb,
                          tal-katarretti, konsultazzjonijiet tal-GP), analogu għal indiċi tal-volum Laspeyres/Paasche

Aġġustament tal-kwalità = indiċi tal-output × fattur tal-aġġustament tal-kwalità
                          (eż. jinkorpora bidla fir-rati ta' sopravivenza, fil-ħinijiet tal-istennija,
                          fl-attainment, jew fir-reati ripetuti bħala multiplikatur fuq il-volum mhux ipproċessat)

Indiċi tal-input        = Σ (sigħat tax-xogħol × piż tal-ispiża tax-xogħol) + (spiża ta' oġġetti/servizzi,
                          deflatata) + (konsum tal-kapital)

Tkabbir tal-produttività totali tal-fattur = % bidla fl-indiċi tal-output aġġustat għall-kwalità
                                             − % bidla fl-indiċi tal-input
```

## Eżempju prattiku

**Kalkolu illustrattiv tal-produttività tas-settur akut tal-NHS** (l-istruttura ssegwi l-metodoloġija tal-ONS):

```
Sena 1: indiċi tal-volum tal-output = 100.0 (sena bażi), indiċi tal-input = 100.0
        → indiċi tal-produttività = 100.0

Sena 2: il-volum tal-attività jogħla 3.0% (aktar operazzjonijiet, aktar appuntamenti)
        imma l-ħin medju tal-istennija jmur għall-agħar, u japplika skont tal-aġġustament
        tal-kwalità ta' −1.0%
        Indiċi tal-output aġġustat għall-kwalità = 100 × 1.030 × 0.990 = 101.97

        L-inputs jogħlew: numri tal-persunal +4.0%, spejjeż oħra (deflatati) +1.5%,
        indiċi tal-input ippiżat = 100 × 1.032 = 103.2

Tkabbir tal-produttività = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                         = 1.97% − 3.2% = −1.23 punt perċentwali

Interpretazzjoni: l-attività żdiedet, imma l-inputs żdiedu aktar malajr u l-kwalità niżlet
ftit, għalhekk il-produttività — output għal kull unità ta' input — naqset
anki jekk "tqassmet aktar kura."
```

Dan huwa eżattament il-mudell li l-pubblikazzjonijiet tal-ONS irrapportaw ripetutament għal partijiet tal-NHS wara l-pandemija: infiq li jogħla u attività mhux ipproċessata li togħla jeżistu flimkien ma' produttività mkejla li tonqos ladarba kemm l-aġġustament tal-kwalità kif ukoll it-tkabbir tal-input jitqiesu.

## Rabta mal-inġinerija tas-software

Il-produttività tas-servizzi pubbliċi hija l-analogu fil-livell tal-popolazzjoni tad-dibattiti dwar il-produttività tal-inġinerija (story points imwassla kontra [metriċi DORA](../metriċi-dora-għall-valur-pubbliku/) kontra [metriċi tal-fluss](../metriċi-tal-fluss-fil-forniment-tal-gvern/)): throughput mhux ipproċessat mingħajr aġġustament tal-kwalità huwa eżattament qarrieqi fi sptar daqskemm "linji ta' kodiċi mwassla" huwa fi tim tas-software. Timijiet li jibnu pipelines tad-data tal-prestazzjoni għad-dipartimenti għandhom jittrattaw l-aġġustament tal-kwalità bħala stadju ta' trasformazzjoni ta' klassi ewwel, verżjonat, mhux nota f'qiegħ il-paġna — għax il-kredibbiltà tal-ONS stess tistrieħ fuq dak l-aġġustament li jkun trasparenti, riproduċibbli, u rivedut hekk kif tasal data aħjar tal-kwalità (l-ONS jirrevedi l-istimi tal-produttività tas-snin ta' qabel hekk kif id-data sottostanti tal-kwalità — eż. rati ta' sopravivenza — tiġi finalizzata, għalhekk kwalunkwe sistema downstream li tikkonsma dawn l-istatistiki trid timmaniġġja reviżjonijiet b'effett retroattiv, mhux biss iżżid perjodi ġodda). Tintersekta direttament ukoll mal-[ispiża totali tas-sjieda](../spiża-totali-tas-sjieda-fl-it-governattiv/) u mal-[produttività tal-IA fis-settur pubbliku](../il-produttività-tal-ia-fis-settur-pubbliku/): sistema li żżid il-volum tal-attività mhux ipproċessata mingħajr ma ttejjeb jew iżżomm il-kwalità mhijiex, skont id-definizzjoni stess tal-ONS, titjib fil-produttività.

## Żbalji komuni

- **Li t-tkabbir tal-input jiġi ttrattat bħala tkabbir tal-produttività**: aktar infiq li jiffinanzja aktar persunal jipproduċi aktar *attività*, mhux aktar *produttività*, sakemm l-output għal kull unità ta' input ma jogħlix ukoll — it-tnejn regolarment jitħawdu fil-kummentarju politiku.
- **Li l-aġġustament tal-kwalità jiġi injorat għal kollox**: indiċi tal-output mibni biss minn għadd tal-attività mhux ipproċessat juri "qligħ fil-produttività" minn li tagħmel aktar minn xi ħaġa ta' valur jew kwalità aktar baxxi; l-aġġustament tal-kwalità tal-ONS jeżisti speċifikament biex jaqbad dan.
- **Li jitqabblu indiċi tal-produttività bejn sottosetturi mingħajr ma tinqabel il-vintage tal-metodoloġija**: il-produttività tas-saħħa, tal-edukazzjoni u tal-pulizija hija kull waħda mibnija minn sorsi differenti tad-data tal-attività u tal-kwalità fuq ċikli ta' reviżjoni differenti — tqabbil naive bejn setturi jqabbel strumenti inkompatibbli.
- **Li tinqara waqgħa f'sena waħda tal-produttività bħala trend permanenti**: iċ-ċifri tal-produttività tal-era tal-pandemija u ta' wara l-pandemija wrew volatilità sinifikanti minn sena għal sena hekk kif id-data tal-kwalità (eż. listi tal-istennija, irkupru elettiv) nnifisha nbidlet; l-ONS konsistentement iwissi kontra l-interpretazzjoni żejda ta' movimenti ta' sena waħda.

## Sorsi

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
