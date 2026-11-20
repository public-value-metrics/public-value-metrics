# Teorija tal-bidla

Teorija tal-bidla hija triq kawżali espliċita, mappjata lura, minn għan fit-tul sal-prekondizzjonijiet
u l-attivitajiet li jridu jeżistu biex jinkiseb, flimkien mas-suppożizzjonijiet li jgħaqqdu kull rabta.
Tinbena billi tibda mir-riżultat li trid u titlob "x'jrid ikun veru immedjatament qabel dan, biex
dan iseħħ?", ripetutament, sakemm tasal għal attivitajiet li tista' tassew twassal — li hija
d-direzzjoni opposta ta' [mudell loġiku](../mudell-loġiku/), u għalhekk it-tnejn huma komplementari
u mhux interkambjabbli.

## Għaliex hu importanti

Il-metodu tal-mappjar lura ġie formalizzat miċ-Center for Theory of Change u ActKnowledge, fuq ix-xogħol
tal-evalwatriċi Carol Weiss dwar kif jagħmlu espliċiti s-suppożizzjonijiet tal-programm biex ikunu
jistgħu jiġu ttestjati u mhux aċċettati fuq il-fidi. L-evalwazzjoni tal-għotjiet tar-Renju Unit assorbiet
dan direttament: il-Magenta Book ta' HM Treasury jittratta teorija tal-bidla bħala l-punt tat-tluq ta' kull
disinn ta' evalwazzjoni, u finanzjaturi bħan-National Lottery Community Fund jitolbu lill-applikanti
jiddeskrivu waħda qabel ma jiffinanzjaw proposta. Ir-raġuni għaliex timporta għal inġinier tas-software
hija li teorija tal-bidla hija d-dokument li għandu jiddetermina x'għandha tkejjel is-sistema tiegħek —
jekk il-katina kawżali tgħid "l-użu tal-benefiċċji jiddependi minn applikanti li jirċievu kalkolu
personalizzat", dik hija pretensjoni verifikabbli li l-prodott tiegħek jista' jiġi strumentat biex jagħti
evidenza tagħha, jew jirrifjutaha.

## Il-matematika

Teorija tal-bidla hija strutturali u mhux numerika. Kull rabta għandha ġġorr kemm suppożizzjoni kif
ukoll indikatur li jista' juri li s-suppożizzjoni hija falza:

```
Riżultat fit-tul (l-għan)
  ↑ prekondizzjoni + suppożizzjoni + indikatur
Riżultat intermedju N
  ↑ prekondizzjoni + suppożizzjoni + indikatur
  ...
Riżultat intermedju 1
  ↑ prekondizzjoni + suppożizzjoni + indikatur
Attivitajiet / interventi
  ↑ riżorsi impenjati
Inputs
```

Din l-istruttura titma' direttament fil-[metodi ta' evalwazzjoni tal-impatt](../metodi-tal-evalwazzjoni-tal-impatt/),
li jeżistu biex jittestjaw jekk is-suppożizzjonijiet f'kull rabta humiex tassew validi, u fl-[analiżi
kontrofattwali](../analiżi-kontrofattwali/), li tittestja jekk ir-riżultat fit-tul kienx jiġri xorta waħda.

## Eżempju prattiku

**Awtorità lokali (prevenzjoni tal-ħajja bla dar)**: ir-riżultat fit-tul huwa kirjiet sostnuti wara 12-il
xahar għal familji f'riskju ta' żgumbrament.

- Prekondizzjoni: il-familji għandhom pjan realistiku u affordabbli ta' rimbors tal-arretrati.
  Suppożizzjoni: pjanijiet innegozjati minn ħaddiem tal-każijiet huma aktar sostenibbli minn dawk
  ordnati mill-qorti.
  Indikatur: % ta' pjanijiet għadhom attivi wara 6 xhur.
- Prekondizzjoni: il-familji jitolbu l-benefiċċji li huma intitolati għalihom.
  Suppożizzjoni: kalkulatur diġitali tal-benefiċċji jżid it-talbiet korretti meta mqabbel ma' formoli
  tal-karta.
  Indikatur: rata ta' preċiżjoni tat-talbiet, imqabbla qabel/wara t-tnedija tal-għodda.
- Attivitajiet: triage minn ħaddiem tal-każijiet, kalkulatur diġitali tal-benefiċċji, negozjar tal-arretrati.

F'koorti pilota ta' 120 familja, is-suppożizzjoni tal-kalkulatur tal-benefiċċji żammet għal 102 familja
(85%) li komplew jitolbu b'mod korrett, evidenzjat minn evalwazzjoni sussegwenti tal-proċess — li tat lit-tim
tal-programm evidenza għal dik ir-rabta speċifika minflok pretensjoni waħda minn tarf sa tarf dwar
il-ħajja bla dar evitata.

**Karità (mentoraġġ taż-żgħażagħ)**: ir-riżultat fit-tul huwa tnaqqis fl-esklużjoni mill-iskola.
Prekondizzjonijiet mappjati lura: regolazzjoni emozzjonali mtejba → relazzjoni waħda-b'waħda fdata ma'
mentor → kuntatt konsistenti ta' kull ġimgħa matul żewġ terms. It-teorija tagħmel espliċitu li n-nuqqas
tal-prekondizzjoni tal-"kuntatt konsistenti ta' kull ġimgħa" (ngħidu aħna minħabba bidla fil-mentors)
tbassar li r-riżultat mhux se jiġi, li hija pretensjoni verifikabbli u falsifikabbli u mhux tamiet.

## Rabta mal-inġinerija tas-software

Teorija tal-bidla għandha tifforma l-mudell tad-dejta ta' prodott qabel ma jinbena dashboard wieħed:
identifika liema rabtiet jeħtieġu indikatur, u strumenta speċifikament għalihom, minflok tmur awtomatikament
għal dak li huwa l-eħfef biex jiġi rreġistrat. Tiddixxiplina wkoll il-konversazzjonijiet dwar ir-roadmap —
feature li ma tikkorrispondi għal ebda rabta fil-katina mhijiex ovvjament tistħoqq li tinbena. Ara
l-[mudell loġiku](../mudell-loġiku/) għall-katina ta' responsabbiltà ffaċċjata 'l quddiem mibnija
ladarba t-teorija tiġi miftehma, ir-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/)
għal metodu li jiddependi fuq teorija tal-bidla biex jiddefinixxi liema riżultati jiġu vvalutati, u
r-[riżultati vs. outputs](../eżiti-vs-outputs/) għad-distinzjoni li fuqha jiddependu r-rabtiet
tar-riżultati intermedji.

## Żbalji komuni

- **Li titħawwad ma' mudell loġiku.** Teorija tal-bidla hija kawżali u spjegattiva (għaliex nemmnu li dan
  jaħdem); mudell loġiku huwa sekwenzjali u deskrittiv (x'jiġri f'liema ordni). Jekk tipproduċi waħda
  biss jonqos jew il-"għaliex" jew it-traċċa ta' responsabbiltà.
- **Li s-suppożizzjonijiet jitħallew impliċiti.** Il-valur kollu tal-mappjar lura huwa li jinkixfu
  suppożizzjonijiet verifikabbli; teorija tal-bidla li sempliċement telenka kaxxi u vleġeġ mingħajr ma
  tisma' x'jista' jagħmel kull rabta falza hija dekorazzjoni.
- **Li tinbena darba u titqiegħed fuq xkaffa.** Teorija tal-bidla miktuba għal offerta ta' finanzjament u
  qatt ma tiġi riveduta tieqaf tkun utli hekk kif l-evidenza tibda tikkontradixxi rabta.
- **Li jitħalla barra l-kontribut tal-partijiet interessati.** Teorija tal-bidla mibnija kompletament
  mill-kummissjunarji mingħajr kontribut mill-persunal tal-linja ta' quddiem jew mill-benefiċjarji
  tinklina li tikkodifika suppożizzjonijiet li ħadd minn dawk li jwasslu s-servizz verament ma jemmen.

## Sorsi

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
