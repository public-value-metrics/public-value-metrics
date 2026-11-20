# Ħlas bir-riżultati u bonds ta' impatt soċjali (PbR/SIBs)

Il-ħlas bir-riżultati (PbR) iħallas lil fornitur skont eżiti vverifikati milħuqa, mhux attivitajiet imwettqa. Bond ta' impatt soċjali (SIB) huwa struttura speċifika ta' finanzjament PbR li fiha investituri privati jew filantropiċi jiffinanzjaw it-twassil tas-servizz minn qabel u jitħallsu lura — b'ritorn — minn kummissarju tal-gvern biss jekk l-eżiti mkejla b'mod indipendenti jilħqu limiti miftiehma, u b'hekk ir-riskju tat-twassil jiċċaqlaq mill-ħallas tat-taxxa għall-investitur.

## Għaliex hu importanti

L-ewwel SIB fid-dinja tnieda fil-HMP Peterborough f'Settembru 2010: Social Finance ġabret £5 miljun minn 17-il investitur biex jiffinanzjaw il-"One Service," li jaħdem ma' priġunieri b'sentenzi qosra (taħt 12-il xahar) biex jitnaqqas ir-reati ripetuti, bil-Ministry of Justice u l-Big Lottery Fund jaqblu li jħallsu lura lill-investituri biss jekk l-avvenimenti ta' kundanna mill-ġdid jonqsu b'mill-inqas 7.5% kontra koorti nazzjonali ta' tqabbil imqabbla. L-aħħar koorti tal-pilota ta' Peterborough irreġistrat tnaqqis ta' 9.7% fil-kundanni mill-ġdid, sew 'il fuq mil-limitu, u l-investituri tħallsu lura b'ritorn. Il-mekkaniżmu kien importanti għax solva problema speċifika tal-kummissjonar: il-gvern kien irid iħallas għall-eżiti minflok għall-inputs, imma ma setax jassorbi r-riskju finanzjarju ta' intervent li jista' ma jaħdimx, għalhekk l-istruttura tas-SIB ċaqalqet dak ir-riskju fuq investituri lesti jissottoskrivuh. Il-Government Outcomes Lab (GO Lab) fil-Blavatnik School of Government ta' Oxford issa jżomm l-iktar bażi ta' evidenza pubblika kompluta dwar il-prestazzjoni tal-PbR u tas-SIBs fid-dinja, li timmonitorja ferm aktar minn 200 impact bond globalment u tippubblika r-riċerka dwar liema karatteristiċi tad-disinn jikkorrelataw mas-suċċess jew il-falliment. Il-lezzjoni li l-bażi tal-evidenza tirritorna fuqha ripetutament hija li l-*metrika tal-eżitu magħżula*, u min iġorr ir-riskju li jitilfuha, tiddetermina kważi kollox dwar kif kuntratt PbR fil-fatt iġib ruħu fil-prattika.

## Il-matematika

```
Ħlas PbR = ħlas bażi (jekk hemm) + Σ (eżitu miksub × prezz unitarju għal kull eżitu)

Ritorn tal-investitur ta' bond ta' impatt soċjali:
  Nefqa tal-investitur = kapital minn qabel li jiffinanzja t-twassil tas-servizz
  Ħlas tal-eżitu       = il-kummissarju jħallas biss jekk l-eżitu ≥ limitu, skalat skont
                          kemm il-prestazzjoni tinżel 'il fuq mil-limitu
  Ritorn tal-investitur = ħlasijiet tal-eżitu riċevuti − nefqa tal-investitur
                          (rata ta' ritorn, ta' spiss limitata, li tirrifletti r-riskju meħud)

Parametri ewlenin tad-disinn li jiddeterminaw l-imġiba tal-kuntratt kollu:
  Metrika tal-eżitu     — trid tkun eżitu, mhux output (ara outcomes-vs-outputs)
  Tqabbil/kontrofattwali — normalment koorti mqabbla (ara counterfactual-analysis)
  Limitu tal-ħlas        — titjib minimu qabel ma jiġi attivat xi ħlas
  Kurva tal-ħlas         — lineari, bi stadji, jew limitata 'l fuq mil-limitu
  Skont tal-attribuzzjoni/deadweight — ara additionality-and-deadweight
```

## Eżempju prattiku

**Peterborough One Service** (ċifri illustrattivi meħuda minn evalwazzjonijiet ippubblikati):

```
Kapital miġbur mill-investituri:  £5,000,000
Koorti:                           ~3,000 priġunier maskili b'sentenzi qosra f'żewġ koorti
Limitu:                           tnaqqis ≥7.5% fl-avvenimenti ta' kundanna mill-ġdid vs grupp
                                   nazzjonali ta' tqabbil imqabbel, jew ebda ħlas
Riżultat tal-Koorti 1:            tnaqqis ta' 8.4% — taħt il-linja kuntrattwali għal dik il-koorti
                                   waħedha taħt ir-regoli oriġinali
Riżultat kombinat/tal-aħħar koorti: tnaqqis ta' 9.7% — 'il fuq mil-limitu
Ħlas tal-eżitu:                   il-gvern (Ministry of Justice / Big Lottery Fund)
                                   iħallas għal kull punt perċentwali 'l fuq mil-limitu, u jiffinanzja
                                   it-tħallis lura tal-investituri flimkien ma' ritorn
```

**Kuntratt PbR ta' awtorità lokali (illustrattiv)**: servizz ta' intervent fil-familja huwa kkummissjonat b'£4,000 għal kull familja riferuta (ħlas tal-attività) flimkien ma' £6,000 għal kull familja mingħajr riferiment ieħor tal-protezzjoni tat-tfal 12-il xahar wara l-għeluq (ħlas tal-eżitu). 200 familja riferuta, 150 każ magħluq, 96 jibqgħu mingħajr riferiment wara 12-il xahar:

```
Ħlas tal-attività = 200 × £4,000 = £800,000
Ħlas tal-eżitu    = 96 × £6,000  = £576,000
Spiża totali tal-kuntratt = £1,376,000 għal 96 eżitu sostnut ikkonfermat
Spiża għal kull eżitu kkonfermat ≈ £14,333 (ara cost-per-outcome)
```

## Rabta mal-inġinerija tas-software

Il-ħlas bir-riżultati huwa problema ta' allinjament tal-inċentivi qabel ma jkun problema tad-data, u s-sistema tad-data hija fejn dak l-allinjament jew iżomm jew jinkiser. Il-verifika indipendenti u reżistenti għall-manipulazzjoni tal-eżiti hija l-logħba kollha: il-kummissarju u l-fornitur għandhom inċentivi opposti dwar kif każ ambigwu jiġi kkodifikat, għalhekk is-sistema li tirreġistra l-eżiti teħtieġ traċċa ta' awditjar, ftehim tal-qsim tad-data mal-verifikatur indipendenti (spiss korp differenti mill-fornitur, xi drabi korp tal-istatistika uffiċjali li jqabbel ma' rekords tal-pulizija jew tal-benefiċċji), u verżjonar immutabbli tad-definizzjoni tal-eżitu — l-ekwivalenti PbR tan-nassa ta' "tiddefinixxi mill-ġdid il-metrika" fil-[KPIs tas-settur pubbliku](../kpis-tas-settur-pubbliku/). Il-kalkoli tal-attribuzzjoni jiddependu mill-metodi ta' koorti mqabbla tal-[analiżi kontrofattwali](../analiżi-kontrofattwali/), li jeħtieġu kodiċi riproduċibbli u awditabbli, mhux spreadsheet ta' darba. U l-metrika nnifisha trid tkun eżitu ġenwin, mhux attività proxy — ara [eżiti vs outputs](../eżiti-vs-outputs/) — għax kuntratt PbR li jħallas għal output sempliċement jerġa' jittikketta finanzjament business-as-usual b'spiża transazzjonali żejda. Fejn ir-ritorn soċjali ta' SIB qed jiġi mmudellat b'mod prospettiv, dak l-appraisal tipikament jissellef direttament mill-metodoloġija tar-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/).

## Żbalji komuni

- **Li jitħallas għal eżitu proxy faċilment manipulat**: "preżenza fis-sessjonijiet" hija attività mlibbsa bħala eżitu; insisti fuq miżura li tirrifletti l-bidla attwali mfittxija (reati ripetuti, impjieg, stabbiltà tad-djar).
- **Ebda kontrofattwali kredibbli**: mingħajr grupp ta' tqabbil imqabbel, titjib jista' jkun rigressjoni lejn il-medja jew trend usa', mhux l-effett tal-programm — ara l-[analiżi kontrofattwali](../analiżi-kontrofattwali/) u l-[addizzjonalità u d-deadweight](../addizzjonalità-u-deadweight/).
- **Sottovalutazzjoni tal-ispejjeż transazzjonali u tal-evalwazzjoni**: verifika indipendenti, rabta tad-data u amministrazzjoni tal-kuntratti għal skemi PbR/SIB regolarment jilħqu żewġ ċifri bħala perċentwali tal-valur tal-kuntratt — il-bażi tal-evidenza tal-GO Lab tiddokumenta dan bħala mutur rikorrenti tat-twaqqif tal-iskemi.
- **Cherry-picking jew "parking"**: fornituri mħallsa għal kull eżitu għandhom inċentiv dirett li jipprijoritizzaw lill-klijenti li kienu jirnexxu xorta u jaqtgħu l-prijorità tal-każijiet l-aktar diffiċli — iddisinja livelli ta' ħlas jew aġġustament tal-kombinazzjoni tal-każijiet biex tikkontrastah.

## Sorsi

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
