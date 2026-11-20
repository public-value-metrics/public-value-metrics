# Metodi tal-Evalwazzjoni tal-Impatt

Il-metodi tal-evalwazzjoni tal-impatt huma d-disinji statistiċi u sperimentali użati biex jiġi stmat dak li politika jew programm fil-fatt ikkawża, għall-kuntrarju ta' dak li kien jiġri xorta waħda — it-testijiet ikkontrollati randomizzati (RCTs), id-differenza fid-differenzi, it-tqabbil bil-punteġġ ta' propensità, u d-disinn ta' diskontinwità tar-regressjoni huma l-erba' l-aktar użati fil-politika pubblika tar-Renju Unit. Jeżistu għax il-biċċa l-kbira tal-interventi tal-gvern ma jistgħux jiġu ttestjati f'laboratorju: ma tistax tagħmel randomizzazzjoni ta' liema belt tikseb rotta ġdida tal-linja tal-karozzi bl-istess mod li tista' tagħmel randomizzazzjoni ta' liema pazjent jieħu mediċina, għalhekk dawn il-metodi jissellfu l-istess loġika kawżali mingħajr ma dejjem jeħtieġu assenjazzjoni każwali.

## Għaliex hu importanti

Il-Magenta Book tat-HM Treasury, l-Anness A dwar il-metodi kważi-sperimentali, huwa l-gwida kanonika tal-gvern tar-Renju Unit dwar l-għażla bejn dawn id-disinji, u entitajiet bħall-Education Endowment Foundation u l-What Works Centre for Local Economic Growth jistituzzjonalizzaw ġerarkija tal-evidenza mibnija madwarhom — RCTs fejn ir-randomizzazzjoni hija fattibbli u etika, disinji kważi-sperimentali fejn ma hijiex. L-għażla tal-metodu mhijiex ħaġa teknika sekondarja: tiddetermina jekk evalwazzjoni tistax twieġeb "il-programm ikkawża dan?" jew biss "dan ġara wara li beda l-programm?", li hija l-istess mistoqsija li l-[analiżi kontrafattwali](../analiżi-kontrofattwali/) hija mibnija biex iġġiegħel lill-prattikanti jistaqsu qabel ma tiġi kummissjonata kwalunkwe evalwazzjoni.

## Il-matematika

```
RCT:
  Impatt = medja(riżultat | grupp ta' trattament) − medja(riżultat | grupp ta' kontroll)
  (validu għax l-assenjazzjoni għat-trattament hija każwali)

Differenza fid-differenzi (DiD):
  Impatt = [riżultat_wara(ttrattat) − riżultat_qabel(ttrattat)]
         − [riżultat_wara(kontroll) − riżultat_qabel(kontroll)]
  (teħtieġ assunzjoni ta' "xejriet paralleli": it-trattat u l-kontroll kienu jiċċaqalqu
   flimkien mingħajr l-intervent)

Tqabbil bil-punteġġ ta' propensità (PSM):
  1. Istma P(trattament = 1 | kovarjati X) għal kull unità → punteġġ ta' propensità
  2. Qabbel unitajiet ittrattati ma' unitajiet mhux ittrattati b'punteġġi ta' propensità simili
  3. Impatt = medja(riżultat | ittrattat) − medja(riżultat | kontroll imqabbel)

Disinn ta' diskontinwità tar-regressjoni (RDD):
  Impatt = qabża fir-riżultat osservata fil-limitu tal-eliġibbiltà,
           bit-tqabbil ta' unitajiet ftit 'il fuq kontra ftit 'l isfel mill-limitu
```

## Eżempju prattiku

**Awtorità lokali (differenza fid-differenzi għal programm ta' familji fi problemi)**: ir-riżultat huwa l-preżenza fl-iskola. Iż-żona ttrattata tmur minn 84% għal 89% preżenza (+5 punti perċentwali) matul il-perjodu tal-programm; żona komparabbli imma mhux ittrattata tmur minn 85% għal 87% (+2 punti perċentwali) matul l-istess perjodu. Stima tal-impatt DiD: 5 − 2 = +3 punti perċentwali attribwibbli għall-programm. Applikat għal koorti ta' 2 000 student fiż-żona ttrattata, dan huwa konsistenti ma' madwar 60 student addizzjonali (3% × 2 000) li jilħqu l-kategorija ta' preżenza ogħla, estrapolazzjoni li għandha tiġi rrapportata bit-twissija tax-xejriet paralleli tagħha, mhux bħala għadd preċiż ta' persuni.

**Karità (tqabbil bil-punteġġ ta' propensità għal karità tal-impjegabbiltà)**: 300 parteċipant fil-programm jitqabblu ma' 300 individwu minn dataset amministrattiv akbar bl-użu ta' punteġġi ta' propensità mibnija minn età, storja ta' impjieg preċedenti, u livell ta' kwalifika. Rata ta' impjieg wara tnax-il xahar: grupp ittrattat imqabbel 46%, grupp ta' tqabbil imqabbel 33%. Stima tal-impatt PSM: 46% − 33% = +13-il punt perċentwali attribwibbli għall-programm, bil-kundizzjoni li l-ebda konfuttur mhux osservat (bħall-motivazzjoni) ma jmexxi kemm il-parteċipazzjoni kif ukoll ir-riżultat.

## Rabta mal-inġinerija tas-software

Jekk xi wieħed minn dawn id-disinji jkunx fattibbli aktar tard jiddependi ħafna minn deċiżjonijiet tal-inġinerija tad-dejta meħuda kmieni. L-RDD jeħtieġ varjabbli ta' tħaddim irreġistrata b'mod preċiż u limitu ta' eliġibbiltà ġenwinament nadif; id-DiD jeħtieġ dejta ta' panel komparabbli maż-żmien kemm għaż-żoni ttrattati kif ukoll għal dawk ta' tqabbil, li jfisser joins konsistenti madwar sistemi u snin; il-PSM jeħtieġ dejta rikka ta' kovarjati bażi miġbura qabel it-trattament, mhux rikostruwita wara. Mudell tad-dejta mfassal flimkien ma' [teorija tal-bidla](../teorija-tal-bidla/) u [mudell loġiku](../mudell-loġiku/) mill-bidu — li jaqbad kovarjati bażi, dati, u rekords eliġibbli għall-grupp ta' tqabbil — huwa dak li jagħmel possibbli evalwazzjoni rigoruża tal-impatt aktar tard, minflok taħbil għali wara l-fatt. Ara [evalwazzjoni tal-impatt vs evalwazzjoni tal-proċess](../evalwazzjoni-tal-impatt-vs-evalwazzjoni-tal-proċess/) għall-mistoqsija kumplimentari li dawn il-metodi ma jwieġbux waħedhom.

## Żbalji komuni

- **Jiġi sfurzat RCT fejn ma huwiex fattibbli jew huwa mhux etiku**, jew bil-kontra qatt ma jiġi kkunsidrat disinn kważi-sperimentali meta kienet disponibbli opportunità ġenwina għal wieħed — limitu ta' politika, introduzzjoni f'fażijiet — u ma ntużax.
- **Tinjora l-assunzjoni tax-xejriet paralleli fid-DiD.** Jekk iż-żona ta' tqabbil kienet diġà qed tiddiverġi miż-żona ttrattata qabel l-intervent, it-tqabbil ta' żewġ punti huwa kontaminat; iċċekkja x-xejriet ta' qabel, mhux biss qabel/wara.
- **Tqabbil biss fuq kovarjati osservati fil-PSM.** Għażla mhux osservata, bħall-motivazzjoni tal-parteċipanti, tista' tgħawweġ l-istima anke meta l-kovarjati osservati huma bbilanċjati tajjeb.
- **Manipulazzjoni tal-varjabbli ta' tħaddim fl-RDD.** Jekk in-nies jistgħu jinfluwenzaw il-punteġġ tagħhom biex jaqa' ftit ġewwa limitu ta' eliġibbiltà, id-diskontinwità ma tibqax tiżola effett kawżali.

## Sorsi

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
