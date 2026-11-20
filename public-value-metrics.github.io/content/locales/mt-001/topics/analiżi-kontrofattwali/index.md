# Analiżi kontrofattwali

Kontrofattwali hija stima ta' dak li kien jiġri fin-nuqqas ta' intervent. Mingħajrha, bidla osservata wara t-tnedija ta' programm ma tistax tiġi distinta minn bidla li kienet issir xorta waħda — ebda kontrofattwali, ebda evidenza ta' effett, kemm jidhru konvinċenti n-numri ta' qabel u ta' wara. Il-Magenta Book tal-HM Treasury jittratta l-kostruzzjoni ta' kontrofattwali kredibbli bħala l-kompitu metodoloġiku ċentrali tal-evalwazzjoni tal-impatt, aktar importanti minn kull għażla oħra waħda tad-disinn.

## Għaliex hu importanti

"Il-kriminalità niżlet b'15% fis-sena ta' wara li introduċejna l-programm" mhijiex evidenza li l-programm ħadem sakemm ma tkunx taf x'kien jiġri lill-kriminalità mingħajru — il-kriminalità setgħet niżlet b'20% xorta waħda minħabba xejriet ekonomiċi jew demografiċi mhux relatati, li jfisser li l-programm fil-fatt għamel l-affarijiet agħar meta mqabbel mal-kontrofattwali, minkejja li n-numru tal-oriġini tjieb. Dan huwa l-iżball analitiku l-aktar komuni fil-pretensjonijiet dwar l-impatt fis-settur pubbliku u dak soċjali: li paragun ta' qabel/wara jiġi meħud bħala evidenza ta' kawżalità. Il-Magenta Book huwa espliċitu li l-evalwazzjoni tal-impatt teżisti biex twieġeb mistoqsija kontrofattwali — "x'differenza għamel dan l-intervent?" — u li twieġibha teħtieġ li tistma, mhux biss tiddeskrivi, id-dinja li ma seħħitx.

Metodi differenti jibnu l-kontrofattwali b'gradi differenti ta' fiduċja, u l-gwida tal-evalwazzjoni tal-gvern tikklassifikahom skont dan. Provi kkontrollati randomizzati (RCTs), fejn individwi jew żoni jiġu assenjati b'mod każwali biex jirċievu intervent jew le, jipproduċu l-aqwa kontrofattwali għax ir-randomizzazzjoni tiżgura li l-gruppi tat-trattament u tal-kontroll ivarjaw, bħala medja, biss fl-introduzzjoni tal-intervent. Il-Cabinet Office u s-What Works Network ippromwovew l-RCTs fil-politika pubblika tar-Renju Unit mir-rapport tal-2012 "Test, Learn, Adapt" mill-Behavioural Insights Team, preċiżament għax disinji aktar dgħajfa huma vulnerabbli għall-konfużjoni — id-differenza osservata tista' tirrifletti min għażel li jipparteċipa, mhux l-effett tal-programm. Fejn ir-randomizzazzjoni hija impraktikabbli jew mhux etika (kif spiss tkun għal programmi b'intitolament statutorju, jew għal bidliet fil-politika ta' popolazzjoni sħiħa), il-Magenta Book jistabbilixxi ġerarkija espliċita ta' alternattivi aktar dgħajfa iżda xorta utli: gruppi ta' paragun imqabbla, disinji ta' differenza fid-differenzi, diskontinwità tar-regressjoni madwar is-soll tal-eliġibbiltà, u, bħala l-aħħar rimedju, paragun sempliċi ta' qabel/wara — immarkat b'mod ċar bħala l-aktar forma dgħajfa ta' evidenza, suxxettibbli li tħawwad l-effett tal-programm mal-effett ta' kull ħaġa oħra li inbidlet fl-istess ħin.

## Il-matematika

L-inkwadrar kontrofattwali, applikabbli fil-metodi kollha:

```
Impatt stmat = Riżultat(bl-intervent) − Riżultat(kontrofattwali: mingħajr intervent)

MHUX:
Impatt stmat ≠ Riżultat(wara) − Riżultat(qabel)   [iħawwad iż-żmien mat-trattament]
```

Id-differenza fid-differenzi, wieħed mid-disinji kważi-sperimentali l-aktar komuni fl-evalwazzjoni tal-gvern, iżola l-effett tat-trattament billi tnaqqas il-bidla stess ta' qabel/wara tal-grupp ta' paragun:

```
Stima DiD = [Riżultat(trattat, wara) − Riżultat(trattat, qabel)]
          − [Riżultat(paragun, wara) − Riżultat(paragun, qabel)]
```

Dan ineħħi kull xejra komuni miż-żewġ gruppi (eż. bidla ekonomika nazzjonali li taffettwa lil kulħadd), u jħalli biss il-bidla differenzjali attribwibbli għall-intervent.

## Eżempju prattiku

**Programm tal-impjieg, qabel/wara (disinn dgħajjef)**: skema ta' appoġġ għax-xogħol tirrapporta li l-impjieg tal-parteċipanti żdied minn 40% għal 55% f'sena — konklużjoni naïve ta' "+15-il punt perċentwali minħabba l-programm."

**L-istess programm, differenza fid-differenzi (disinn aktar b'saħħtu)**: grupp ta' paragun imqabbel ta' mhux parteċipanti simili, meħud mill-istess suq tax-xogħol lokali, juri impjieg li jogħla minn 38% għal 47% fl-istess sena (kien għaddej rkupru ekonomiku nazzjonali).

```
Bidla fil-grupp trattat:   55% − 40% = +15-il punt perċentwali
Bidla fil-grupp ta' paragun: 47% − 38% = +9 punti perċentwali

Stima DiD (l-effett veru tal-programm) = 15 − 9 = +6 punti perċentwali
```

L-effett onest attribwibbli huwa 6 punti perċentwali, mhux 15 — iktar minn nofs it-titjib apparenti ta' qabel/wara kien iseħħ irrispettivament mill-programm, imqanqal mill-istess rkupru ekonomiku li tela' lill-grupp ta' paragun.

**Diskontinwità tar-regressjoni, soll tal-eliġibbiltà**: skema ta' għotjiet hija disponibbli biss għal negozji b'inqas minn 50 impjegat. Li jitqabblu r-riżultati għal negozji ftit taħt is-soll (45–49 impjegat, eliġibbli) ma' negozji ftit 'il fuq minnu (50–54 impjegat, mhux eliġibbli) jipprovdi kontrofattwali kredibbli għax negozji fuq kull naħa ta' limitu amministrattiv arbitrarju huma mod ieħor simili — is-soll, mhux xi karatteristika sottostanti tan-negozju, jiddetermina l-eliġibbiltà. Differenza medja ta' £2,000 fir-riżultat bejn iż-żewġ gruppi, osservata biss fis-soll, hija attribwibbli għall-għotja b'ħafna aktar fiduċja minn paragun sempliċi tan-negozji eliġibbli kollha kontra l-mhux eliġibbli kollha (li jvarjaw sistematikament fid-daqs).

## Rabta mal-inġinerija tas-software

It-tkabbir kontrofattwali għandu jifforma kif jiġu mfassla s-sistemi tat-traċċar tal-impatt u l-pipelines tal-evalwazzjoni għal software tal-gvern u tas-settur soċjali:

- Ibni l-qbid tal-grupp ta' paragun f'sistema mill-bidu — li tirreġistra min kien eliġibbli iżda mhux irreġistrat, jew koorti imqabbla ta' mhux parteċipanti — minflok ma żżidu wara li programm diġà jkun mexa u jeżistu biss dejta ta' qabel/wara.
- Fejn ir-randomizzazzjoni hija fattibbli (tnedija bi stadji, servizz diġitali attivat għal xi utenti qabel oħrajn), strumenta s-sistema biex iżżomm l-assenjazzjoni każwali bħala qasam li jista' jiġi mistoqsi; tnedija bi stadji teqred il-valur tal-evalwazzjoni tagħha stess jekk l-ordni tal-assenjazzjoni ma tiġix irreġistrata.
- Dan huwa l-metodu fundamentali wara [metodi tal-evalwazzjoni tal-impatt](../metodi-tal-evalwazzjoni-tal-impatt/) u huwa dak li jifred minn [evalwazzjoni tal-impatt vs evalwazzjoni tal-proċess](../evalwazzjoni-tal-impatt-vs-evalwazzjoni-tal-proċess/), li t-tieni tistaqsi jekk programm ġiex imwassal kif kien maħsub aktar milli jekk kienx il-kawża ta' effett.
- [Addizzjonalità u deadweight](../addizzjonalità-u-deadweight/) u [spostament u attribuzzjoni](../spostament-u-attribuzzjoni/) huma t-tnejn, fl-għeruq tagħhom, mistoqsijiet kontrofattwali — id-deadweight huwa "x'kien ikun dan ir-riżultat speċifiku mingħajr l-intervent", applikat fil-livell ta' aġġustament aktar milli ta' disinn sħiħ tal-evalwazzjoni.

## Żbalji komuni

- **Li qabel/wara jiġi ttrattat bħala evidenza ta' kawżalità.** Dan huwa l-iżball l-aktar komuni u l-aktar konsegwenzjali fir-rappurtar tal-impatt tas-settur pubbliku u soċjali; bidla ta' qabel/wara tħawwad l-effett tal-programm ma' kull ħaġa oħra li inbidlet fl-istess perjodu.
- **Li jintuża grupp ta' paragun li jvarja sistematikament mill-grupp trattat.** Grupp ta' paragun imqabbel irid ikun verament simili fuq karatteristiċi rilevanti (ara l-ġerarkija tal-metodi ta' [analiżi kontrofattwali](../analiżi-kontrofattwali/) fil-Magenta Book); li jitqabblu parteċipanti fil-programm (li għażlu li jissieħbu, u spiss huma aktar motivati) ma' mhux parteċipanti (li ma għamlux hekk) jirriskja preġudizzju tal-għażla li jippretendi li huwa effett tal-programm.
- **Li jiġu meqruda opportunitajiet ta' randomizzazzjoni permezz ta' disinn dgħajjef tal-forniment.** Tnedija bi stadji jew randomizzata żżomm il-valur tal-evalwazzjoni tagħha biss jekk l-assenjazzjoni hija verament każwali u rreġistrata — li l-maniġers lokali jħallu jagħżlu min imur l-ewwel jegħleb l-għan.
- **Li tiġi pretiża preċiżjoni żejda minn disinn dgħajjef.** Stima ta' qabel/wara għandha tiġi ppreżentata bħala indikattiva, mhux bħala daqs tal-effett imkejjel; il-ġerarkija tal-evidenza tal-Magenta Book teżisti biex is-saħħa ta' pretensjoni taqbel mas-saħħa tad-disinn li pproduċieha.

## Sorsi

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (referenza standard għal metodi ta' differenza fid-differenzi u ta' diskontinwità
  tar-regressjoni).
