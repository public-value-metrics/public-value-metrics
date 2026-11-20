# Indiċi tal-Iżvilupp Uman (HDI)

L-HDI huwa l-alternattiva ewlenija tan-NU għall-klassifika tal-pajjiżi bid-dħul biss: jgħaqqad l-ispettattiva tal-ħajja, l-edukazzjoni, u d-dħul f'numru wieħed bejn 0 u 1, fuq il-premessa — argumentata mill-ekonomista Amartya Sen u żviluppata għan-NU minn Mahbub ul Haq — li l-iżvilupp huwa dwar it-tkabbir ta' dak li n-nies jistgħu jagħmlu u jkunu, mhux biss dak li jaqilgħu. Ġie ppubblikat kull sena fir-Rapport dwar l-Iżvilupp Uman tal-Programm tan-NU għall-Iżvilupp (UNDP) mill-1990.

## Għaliex hu importanti

Qabel l-HDI, l-"iżvilupp" kien imkejjel kważi kompletament bil-GNP per capita, li ma jgħid xejn dwar jekk it-tkabbir jilħaqx is-saħħa jew l-edukazzjoni tan-nies tas-soltu. L-approċċ tal-kapaċità ta' Sen reġa' ddefinixxa l-iżvilupp bħala t-tkabbir ta' libertajiet reali, u ul Haq biddlu dan f'indiċi li jista' jiġi ppubblikat li l-UNDP setgħet tikklassifika kull pajjiż bih, u ġiegħel gvernijiet li kibru sinjuri bid-dħul biss imma injoraw is-saħħa jew l-iskola jiffaċċjaw pożizzjoni agħar milli kien jissuġġerixxi l-GDP tagħhom (l-istati taż-żejt tal-Golf u xi ekonomiji estrattivi huma l-eżempji standard). L-istruttura tripla tal-HDI hija wkoll l-antenat metodoloġiku dirett tal-[Indiċi tal-Faqar Multidimensjonali](../indiċi-tal-faqar-multidimensjonali/): it-tnejn jirrifjutaw li jħallu dimensjoni waħda tixtri lura nuqqas f'oħra, bl-użu ta' medja ġeometrika minflok aritmetika. L-UNDP tippubblika noti tekniċi sħaħ u d-dejta sottostanti għal kull edizzjoni (<https://hdr.undp.org/data-center/human-development-index>), li hija s-sors kanoniku għal kull min jibni fuq l-indiċi minflok ma jerġa' jiddeduċih.

## Il-matematika

```
Indiċi tal-Ispettattiva tal-Ħajja (LEI)  = (LE − 20) / (85 − 20)

Indiċi tas-Snin Medji ta' Skolarizzazzjoni   = snin medji ta' skolarizzazzjoni / 15
Indiċi tas-Snin Mistennija ta' Skolarizzazzjoni = snin mistennija ta' skolarizzazzjoni / 18
Indiċi tal-Edukazzjoni (EI)  = (Indiċi tas-Snin Medji + Indiċi tas-Snin Mistennija) / 2

Indiċi tad-Dħul (II)         = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [medja ġeometrika tat-tliet sub-indiċijiet]
```

Il-medja ġeometrika hija deliberata: billi timmultiplika minflok tagħmel il-medja, punteġġ għoli ħafna f'dimensjoni waħda ma jistax jikkumpensa għal kollox punteġġ baxx ħafna f'oħra — disinn li l-UNDP adottat fl-2010 speċifikament biex jikkastiga l-iżbilanċ, u biddel il-formula preċedenti tal-medja aritmetika.

## Eżempju prattiku

**Pajjiż b'dħul medju**: spettattiva tal-ħajja ta' 72 sena, snin medji ta' skolarizzazzjoni 8, snin mistennija ta' skolarizzazzjoni 13, GNI per capita ta' $12 000.

```
LEI  = (72 − 20) / (85 − 20)            = 52 / 65   = 0,800
MYSI = 8 / 15                                       = 0,533
EYSI = 13 / 18                                      = 0,722
EI   = (0,533 + 0,722) / 2                          = 0,628
II   = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
     = (9,393 − 4,605) / (11,225 − 4,605)
     = 4,788 / 6,620                                = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                               ≈ 0,713
```

HDI ta' 0,713 jaqa' fil-banda tal-UNDP ta' "żvilupp uman għoli" (0,700–0,799); "għoli ħafna" jibda minn 0,800. Innota kemm ir-riżultat huwa sensittiv għall-aktar sub-indiċi dgħajjef: li kieku s-snin medji ta' skolarizzazzjoni kienu 4 minflok 8 (MYSI = 0,267, EI = 0,494), l-HDI jinżel għal (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — jaqa' banda sħiħa — għalkemm xejn ieħor ma nbidel.

## Rabta mal-inġinerija tas-software

- Il-mudell tal-medja ġeometrika jista' jerġa' jintuża direttament għal kull punteġġ komposti ta' servizz jew prodott fejn ma tridx li dimensjoni waħda b'saħħitha tgħatti dgħjufija kritika — eż. it-taħlit tal-punteġġi tal-aċċessibilità, tal-prestazzjoni, u tal-affidabbiltà għal servizz diġitali pubbliku b'mod multiplikattiv minflok b'medja ppeżata, sabiex servizz li huwa mgħaġġel imma mhux aċċessibbli ma jistax jikseb "tajjeb".
- It-trasformazzjoni logaritmika tad-dħul fl-HDI (valur marġinali dejjem jonqos ta' lira żejda) hija l-istess loġika wara l-[ponderazzjoni distributtiva](../ponderazzjoni-distributtiva/) fil-valutazzjoni: $1 000 żejda jfissru ħafna aktar għal familja foqra milli għal waħda sinjura, u t-trattament taż-żewġ każijiet b'mod lineari jqiegħed prezz ħażin fuq l-impatt.
- Kull dashboard li jirrapporta punteġġ imħallat wieħed ta' "inklużjoni diġitali" jew "riżultati taċ-ċittadini" għandu jiddokumenta l-formula tal-aggregazzjoni tiegħu b'mod daqstant espliċitu kif jagħmlu n-noti tekniċi tal-UNDP — ara [KPIs tas-settur pubbliku](../kpis-tas-settur-pubbliku/) u [scorecard tal-valur pubbliku](../scorecard-tal-valur-pubbliku/).

## Żbalji komuni

- **Tintuża medja aritmetika minflok il-medja ġeometrika** — medja aritmetika tħalli d-dħul għoli jgħatti għal kollox saħħa jew edukazzjoni ħażina; il-punt kollu tal-bidla fil-metodoloġija tal-2010 kien li jitwaqqaf dik is-sostituzzjoni.
- **L-HDI jitqabbel sena wara sena daqslikieku kien GDP aġġustat għall-inflazzjoni** — l-UNDP perjodikament terġa' tibda l-bażi tal-indiċi (limiti minimi/massimi ġodda, limiti riveduti tal-iskolarizzazzjoni), għalhekk bidla fil-pożizzjoni tista' tirrifletti aġġornament tal-metodoloġija, mhux bidla reali; iċċekkja dejjem minn liema edizzjoni tal-HDR toħroġ ċifra.
- **L-HDI jitqies bħala miżura tal-faqar** — huwa medja nazzjonali u ma jgħid xejn dwar it-tqassim ġewwa pajjiż; għal dak, uża l-[Indiċi tal-Faqar Multidimensjonali](../indiċi-tal-faqar-multidimensjonali/) jew l-HDI aġġustat għall-inugwaljanza separat tal-UNDP.

## Sorsi

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
