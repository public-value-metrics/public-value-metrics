# Inklużjoni diġitali

L-inklużjoni diġitali hija d-dixxiplina li tiżgura li "digital by default" ma jsirx "digital biss" — li servizzi pubbliċi mfassla madwar l-irħas kanal jibqgħu jaħdmu liċ-ċittadini li ma jistgħux jew ma jridux jużawh mingħajr assistenza. L-GDS ħoloq il-mekkaniżmu speċifiku tal-forniment, "assisted digital", bħala rekwiżit obbligatorju għal kull servizz diġitali tal-gvern, mhux żieda fakultattiva.

## Għaliex hu importanti

Il-Government Digital Strategy tal-2012 stabbilixxiet l-ambizzjoni b'mod ċar: is-servizzi diġitali għandhom jinbnew digital by default, iżda l-istrateġija nnifisha rrikonoxxiet li madwar 10% tal-adulti tar-Renju Unit ma jkunux jistgħu jużawhom mingħajr għajnuna, u impenjat lid-dipartimenti jipprovdu appoġġ assisted digital — rotta medjata minn bniedem, bit-telefon, personalment jew permezz ta' intermedjarju — bħala parti mis-servizz, mhux fallback separat imwaħħal aktar tard. Dak l-impenn issa huwa l-punt 5 tal-[digital-service-standard](../l-istandard-tas-servizz-diġitali/), "żgura li kulħadd ikun jista' juża s-servizz". L-iskala tal-esklużjoni kontinwa hija segwita mill-Consumer Digital Index annwali tal-UK tal-Lloyds Banking Group: l-edizzjoni tal-2024 sabet li madwar 1.6 miljun persuna fir-Renju Unit għadhom offline, u li dan il-grupp iserraħ ħafna lejn persuni ta' 70–79 sena, dawk li jaqilgħu inqas minn £35,000, u dawk irtirati jew qiegħda — preċiżament il-popolazzjoni l-aktar probabbli li tiddependi fuq is-servizzi pubbliċi li qed jiġu ddisinjati mill-ġdid. L-istess rapport sab li biss 48% tal-forza tax-xogħol tar-Renju Unit setgħu jlestu l-20 kompitu kollha fil-qafas tal-Essential Digital Skills, li jfisser li l-esklużjoni mhijiex konnettività binarja, hija spettru ta' ħiliet, fiduċja u fidi li metrika sempliċi ta' "għandu broadband" tinjora għalkollox.

## Il-matematika

L-inklużjoni diġitali hija qafas u kontroll ta' ekwità aktar milli formula waħda, iżda tikkomponi mal-evalwazzjoni kwantitattiva tal-valur permezz tad-[distributional-weighting](../ponderazzjoni-distributtiva/):

```
Valur naïve tat-tibdil tal-kanali:
  valur = volum miċċaqlaq × (spiża_antika − spiża_diġitali)     [ara channel-shift-savings]

Valur aġġustat għall-inklużjoni:
  valur = (volum miċċaqlaq × iffrankar mhux ippeżat)
        − (utenti esklużi × spiża tal-provvediment assisted-digital)
        − (aġġustament tal-piż distributtiv għad-dannu lill-gruppi
           esklużi li jitilfu l-aċċess jew jiffaċċjaw kwalità ta' servizz imnaqqsa)

Assisted digital mhuwiex l-ispiża residwa tal-falliment — huwa kanal
iddisinjat bl-[ispiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/) tiegħu stess,
tipikament ferm ogħla għal kull tranżazzjoni minn diġitali self-service iżda
xorta normalment irħas mill-kanal antik li jissostitwixxi parzjalment.
```

## Eżempju prattiku

**Servizz nazzjonali ta' benefiċċju stil Universal Credit**: 2.5 miljun talba/sena, evalwata li teħtieġ appoġġ assisted digital għal 10% stmat tal-applikanti skont l-assunzjoni tal-ippjanar tal-Government Digital Strategy.

```
Koorti esklusa/assisted-digital = 2,500,000 × 10% = 250,000 talba/sena

Spiża tal-kanal assisted-digital (appoġġ bit-telefon + wiċċ imb wiċċ,
bi persunal biex jimmaniġġja vulnerabbiltà u kumplessità) ≈ £9.50/talba
  = 250,000 × £9.50 = £2,375,000/sena

Spiża diġitali self-service għall-90% l-oħra ≈ £0.40/talba
  = 2,250,000 × £0.40 = £900,000/sena

Spiża mħallta għal kull tranżazzjoni = (2,375,000 + 900,000) / 2,500,000
  = £1.31/talba

Disinn li jaqbeż assisted digital biex jilħaq spiża għal kull tranżazzjoni
aktar baxxa (eż. £0.40 mħallta, billi jiġu injorati l-250,000
applikant eskluż) ma jelimina dik l-ispiża ta' £2.375m — jikkonvertiha
f'intitolamenti mhux mitluba, appelli, u domanda downstream għal servizzi ta'
kriżi li tkun tinsab fuq baġit totalment differenti.
```

## Rabta mal-inġinerija tas-software

Assisted digital huwa kanal iddisinjat, li jfisser li għandu interfaces, SLAs u strumentazzjoni bħal kull ieħor: għodda ta' ħaddiem tal-każijiet ibbażata fuq it-telefon, portal ta' intermedjarju għal Citizens Advice jew awtorità lokali, jew fluss ta' kiosk personali. Li jiġi ttrattat bħala ħaġa sekondarja — numru tat-telefon bil-ittri żgħar minflok kanal ikkunsidrat mid-discovery — huwa l-aktar mod komuni kif servizzi jfallu l-punt 5 tal-[digital-service-standard](../l-istandard-tas-servizz-diġitali/) fl-evalwazzjoni. L-inklużjoni diġitali hija l-lenti tal-ekwità fuq kull suġġett ieħor f'dan il-grupp: tillimita kemm l-[iffrankar mit-tibdil tal-kanali](../iffrankar-mit-tibdil-tal-kanali/) jista' jinkiseb b'mod aggressiv, hija linja li trid tiġi inkluża onestament fl-[ispiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/), u hija l-applikazzjoni diretta tad-[distributional-weighting](../ponderazzjoni-distributtiva/) għal kuntest ta' servizzi diġitali — iffrankar li jaqa' b'mod sproporzjonat fuq persuni li diġà huma esklużi diġitalment u ekonomikament għandu jiġi ppeżat 'l isfel, mhux ittrattat bħala ekwivalenti għal iffrankar mifrux b'mod uniformi fil-popolazzjoni.

## Żbalji komuni

- **"Digital by default" mifhum bħala "digital biss"**: li tagħlaq il-linja tat-telefon jew is-siport ladarba l-użu diġitali jaqbeż limitu, mingħajr ma tivverifika li l-koorti li jifdal għandha alternattiva verament użabbli.
- **Li l-inklużjoni titkejjel b'konnettività binarja**: "għandu broadband" jew "għandu smartphone" huwa proxy fqir tal-kapaċità li tlesti tranżazzjoni speċifika — id-distakk fil-Essential Digital Skills (biss 48% tal-forza tax-xogħol tar-Renju Unit ilesti l-20 kompitu kollha, skont Lloyds 2024) juri li l-ħiliet u l-fiduċja huma importanti daqs l-aċċess.
- **Li assisted digital jiġi kkalkulat bħala żball ta' tqarrib**: li jiġi bbaġittjat bħala linja żgħira ta' kontinġenza minflok kanal xieraq bl-[ispiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/) tiegħu stess, u mbagħad tiġi sorpriża meta jkun taħt-iffinanzjat u b'persunal insuffiċjenti fit-tnedija.
- **Li jiġu stħarrġa biss dawk li lestew b'suċċess id-diġitali**: riċerka tas-sodisfazzjon u tal-użabbiltà mmexxija għalkollox fis-servizz titlef lil dawk li qatt ma waslu s'hemm, li huma eżattament il-popolazzjoni li x-xogħol tal-inklużjoni diġitali huwa maħsub biex jipproteġi.

## Sorsi

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
