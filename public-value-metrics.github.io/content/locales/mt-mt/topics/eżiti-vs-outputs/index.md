# Eżiti vs outputs

Output huwa l-prodott dirett u li jista' jingħadd ta' attività — jeżisti hekk kif iseħħ it-twassil, irrispettivament mill-effett li jkollu. Eżitu huwa l-bidla li ssegwi għall-persuni, il-post jew is-sistema involuti. "500 persuna attendew workshop dwar it-tfittxija tax-xogħol" huwa output: huwa veru anki jekk ħadd minnhom ma jsib impjieg. "Il-prospetti tal-impjieg ta' 500 persuna tjiebu" huwa talba dwar eżitu, u teħtieġ evidenza ta' bidla, mhux biss evidenza ta' preżenza — il-konfużjoni li tipproduċi aktar rapporti ta' għotjiet qarrieqa minn kważi kull żball ieħor tal-kejl fis-settur.

## Għaliex hu importanti

Il-Magenta Book tal-HM Treasury u finanzjaturi bħall-National Lottery Community Fund it-tnejn jeżiġu rappurtar tal-eżiti speċifikament għax l-outputs huma dak li l-programmi jirrapportaw b'mod awtomatiku: huma rħas biex jingħaddu, dejjem disponibbli, u dejjem jidhru pożittivi. Għadd ta' outputs litteralment qatt ma jista' jonqos bħala riżultat tal-falliment tal-programm — aktar sessjonijiet imwassla huma dejjem "aktar", filwaqt li eżitu jista' jikxef li programm mhux qed jaħdem. In-National Audit Office ikkritikat ripetutament programmi tal-gvern talli jirrapportaw livelli ta' attività qisu evidenza ta' suċċess; sistema tas-software li tagħmel biss l-outputs faċli biex jiġu rrappurtati ssaħħaħ dan b'mod awtomatiku, għax l-outputs ma jeħtieġu ebda ġbir ta' data ta' segwitu u l-eżiti jeħtieġu.

## Il-matematika

M'hemm ebda formula, imma hemm test affidabbli biex tiġi kklassifikata metrika:

```
Test tal-output: jista' jingħadd fil-punt tat-twassil, veru anki jekk ir-riċevitur ma jiġix affettwat?
Test tal-eżitu:  jeħtieġ tqabbil qabel/wara jew bi/mingħajr biex ikollu tifsira?

Jekk numru jista' jkun veru b'xejn benefiċċju għal ħadd, huwa output.
```

Dan joqgħod fil-katina usa' tal-[mudell loġiku](../mudell-loġiku/) u jiddependi mir-rabtiet tal-eżiti definiti f'[teorija tal-bidla](../teorija-tal-bidla/); it-trasformazzjoni ta' eżitu f'flus tuża l-metodi tar-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/).

## Eżempju prattiku

**Awtorità lokali (appoġġ għall-impjieg)**: output — 500 persuna attendew workshops dwar it-tfittxija tax-xogħol. Eżitu — fis-segwitu wara 12-il xahar, 140 minn dawk il-500 (28%) huma impjegati b'mod sostnut (6+ xhur). Grupp ta' tqabbil b'karatteristiċi simili imma mingħajr aċċess għall-programm għandu rata bażi ta' impjieg ta' 15% matul l-istess perjodu. Żieda netta fl-eżitu: 28% − 15% = 13-il punt perċentwali, għalhekk stmati 500 × 0.13 = 65 persuna addizzjonali qed jaħdmu li ma kinux jaħdmu mod ieħor — l-eżitu attribwibbli, distint kemm miċ-ċifra tal-preżenza ta' 500 kif ukoll mill-għadd mhux ipproċessat ta' 140 impjegat.

**Karità (karità tal-litteriżmu)**: output — 1,200 sessjoni ta' qari mwassla lil 300 tifel/tifla. Eżitu — l-età tal-qari medja tjiebet b'8 xhur matul perjodu ta' 6 xhur, kontra linja bażi ta' progressjoni naturali mistennija ta' 6 xhur f'6 xhur. Qligħ nett fl-eżitu: 8 − 6 = 2 xhur ta' titjib addizzjonali fl-età tal-qari għal kull tifel/tifla attribwibbli għall-programm, mhux iċ-ċifra sħiħa ta' 8 xhur.

## Rabta mal-inġinerija tas-software

Il-logs tal-avvenimenti u s-sistemi transazzjonali jistrumentaw l-outputs kważi awtomatikament — page views, sessjonijiet, tickets magħluqa, appuntamenti rriżervati — għax jiġu ġġenerati mis-sistema li qed tagħmel ix-xogħol tagħha. L-eżiti jeħtieġu mudell tad-data li jaqbad l-istess individwu f'punt aktar tard fiż-żmien kontra linja bażi jew tqabbil, li jrid jiġi ddisinjat apposta: stħarriġiet ta' segwitu, rekords amministrattivi marbuta, jew koorti ta' tqabbil. Għodda tar-rappurtar li tappoġġa biss l-ewwel waħda b'mod skret tmexxi organizzazzjoni lejn rappurtar tal-outputs biss ikun x'ikun li talab il-finanzjatur. Ara l-[mudell loġiku](../mudell-loġiku/) biex tara fejn joqogħdu l-eżiti fil-katina tar-responsabbiltà, l-[ispiża għal kull eżitu](../spiża-għal-kull-riżultat/) biex din id-distinzjoni titmexxa f'metrika tal-ispiża unitarja, u l-[KPIs tas-settur pubbliku](../kpis-tas-settur-pubbliku/) għall-mudell usa' tal-għażla ta' metriċi.

## Żbalji komuni

- **Li l-outputs jiġu rrappurtati qisu eżiti.** "500 persuna attendew" jimplika benefiċċju mingħajr ma juri; ittikketta l-preżenza espliċitament bħala output.
- **Ebda linja bażi jew grupp ta' tqabbil.** Ċifra tal-eżitu mingħajr kontrofattwali — ara l-[analiżi kontrofattwali](../analiżi-kontrofattwali/) — ma tistax tifred l-effett tal-programm minn dak li kien jiġri xorta.
- **Ottimizzazzjoni għall-metrika ffinanzjata.** Meta l-finanzjament huwa marbut mal-volum tal-outputs, it-timijiet tat-twassil razzjonalment jimmassimizzaw il-preżenza fuq bidla dejjiema, mod ta' falliment tal-liġi ta' Goodhart.
- **Eżitu miksi.** Li metrika ta' output tiġi mitikkettata mill-ġdid b'lingwaġġ li jinstema' bħal eżitu ("eżiti ta' involviment: 500 attendent") mingħajr ebda kejl ta' segwitu warajha.

## Sorsi

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
