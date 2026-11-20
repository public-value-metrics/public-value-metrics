# Valutazzjoni bil-preferenza żvelata

Il-metodi tal-preferenza żvelata jiddeduċu l-valur ta' oġġett mhux tas-suq mill-imġiba osservabbli f'suq relatat, minflok ma jistaqsu lin-nies direttament. Il-prezzijiet edoniċi u l-metodu tal-ispiża tal-ivvjaġġar huma ż-żewġ tekniki ewlenin: it-tnejn jibdew minn transazzjoni reali u jiddeduċu prezz impliċitu għal dak li qatt ma nbiegħ direttament.

## Għaliex hu importanti

Fejn il-metodi tal-[preferenza ddikjarata](../valutazzjoni-bil-preferenza-ddikjarata/) jistaqsu mistoqsija ipotetika, il-metodi tal-preferenza żvelata josservaw dak li n-nies fil-fatt ħallsu, li l-Green Book tqis ġeneralment evidenza aktar kredibbli, kollox ugwali, għax mhix suġġetta għal preġudizzju ipotetiku — ir-rispondenti fi studju edoniku tal-prezzijiet tad-djar fil-fatt ħallsu l-premium jew l-iskont li qed jitkejjel (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Il-prezzijiet edoniċi jiddekomponu prezz tas-suq — tipikament il-prezzijiet tad-djar — f'prezzijiet impliċiti għal kull attribut tal-oġġett, u jħallu lill-analisti jiżolaw, per eżempju, il-premium tal-prezz li l-familji fil-fatt iħallsu biex jgħixu x'imkien aktar kwiet jew b'kwalità aħjar tal-arja, b'kontroll statistiku għal kull attribut ieħor li jaffettwa wkoll il-prezz tad-dar (daqs, post, żona tal-iskola). Il-metodu tal-ispiża tal-ivvjaġġar jagħmel l-istess ħaġa għal siti rikreattivi mingħajr miżata tad-dħul: il-ħin u l-flus li n-nies jonfqu biex jivvjaġġaw lejn sit jikxfu limitu baxx ta' dak li s-sit jiswa għalihom, għax ħadd ma jġarrab spiża li taqbeż dak li ż-żjara tiswa għalih.

It-tnejn jaqsmu limitazzjoni strutturali: jistgħu jevalwaw biss dak li huwa inkorporat f'transazzjoni tas-suq eżistenti. Il-ħoss ħdejn runway jidher fil-prezzijiet tad-djar għax in-nies li jimpurtahom mill-ħoss jgħaddu għal djar aktar kwieti; il-valur tal-eżistenza ta' speċi li ħadd ma jżur jew jgħix qrib ma jidher f'ebda transazzjoni, li huwa eżattament id-distakk li l-metodi tal-[preferenza ddikjarata](../valutazzjoni-bil-preferenza-ddikjarata/) jeżistu biex jimlew.

## Il-matematika

```
Prezzijiet edoniċi:
  Prezz tad-dar = f(attributi strutturali, attributi tal-post,
                     attribut ambjentali ta' interess, ...)
  Ikkalkula permezz ta' rigressjoni; il-koeffiċjent fuq l-attribut
  ambjentali (billi jinżamm kollox ieħor kostanti) huwa l-prezz impliċitu tiegħu.

  Prezz impliċitu tal-attribut X = ∂(Prezz tad-dar) / ∂X

Metodu tal-ispiża tal-ivvjaġġar:
  Rata ta' żjarat (żjarat per capita miż-żona i) = f(spiża tal-ivvjaġġar miż-żona i,
                   siti sostitwti, kontrolli soċjoekonomiċi)
  Ikkalkula kurva tad-domanda għaż-żjarat bħala funzjoni tal-ispiża tal-ivvjaġġar.
  Surplus tal-konsumatur = żona taħt il-kurva tad-domanda stmata
                           = valur tas-sit għaż-żuwar
```

It-tnejn jeħtieġu sett ta' kontrolli statistikament sod — l-ommissjoni ta' attribut konfondenti (edoniku) jew ta' sit sostitut fil-qrib (spiża tal-ivvjaġġar) tbiddel il-prezz impliċitu f'direzzjoni li mhix dejjem ovvja minn qabel, li huwa għaliex l-Annex 2 tal-Green Book jeżiġi li l-ispeċifikazzjoni tar-rigressjoni u l-kontrolli jiġu rrappurtati, mhux biss il-koeffiċjent headline.

## Eżempju prattiku

**Gvern nazzjonali**: il-metodoloġija stess tal-Green Book għall-prezz ombra tal-karbonju tiddependi parzjalment fuq evidenza edonika, imma każ illustrattiv aktar sempliċi huwa l-ħoss tal-ajruplani. Studju edoniku li jirregressa l-prezzijiet tal-bejgħ tad-djar f'żona taħt it-triq tat-titjiriet kontra esponiment għall-ħoss ippiżat skont id-distanza, b'kontroll għad-daqs, l-età u ż-żona tal-iskola, isib li kull żieda ta' 1 deċibel fl-esponiment medju għall-ħoss hija assoċjata ma' tnaqqis ta' 0.5% fil-prezz tad-dar. Għal dar tipika ta' £280,000 fiż-żona affettwata:

```
Prezz impliċitu għal kull deċibel = £280,000 × 0.5% = £1,400 għal kull familja
Familji affettwati minn żieda ta' 3dB minn runway ġdid = 18,000
Spiża impliċita aggregata taż-żieda fil-ħoss = £1,400 × 3 × 18,000 = £75.6m
```

Din hija spiża kapitalizzata ta' darba (inkorporata fil-prezz tad-dar), li l-appraisal irid joqgħod attent li ma jgħoddhiex darbtejn kontra fluss annwali stmat separatament ta' spiża ta' skumdità mill-ħoss.

**Karità**: karità ambjentali tuża l-metodu tal-ispiża tal-ivvjaġġar biex tevalwa riżerva naturali b'dħul b'xejn. Data tal-istħarriġ dwar il-kodiċijiet postali taż-żuwar tagħti spiża medja tal-ivvjaġġar bit-tluq u r-ritorn (ħin evalwat bil-valur tal-ħin mhux tax-xogħol rakkomandat mill-Green Book, flimkien mal-fuel) ta' £14 għal kull żjara, b'40,000 żjara fis-sena. Il-kurva tad-domanda stmata — ir-rati ta' żjarat jonqsu hekk kif l-ispiża tal-ivvjaġġar minn żona togħla — timplika surplus tal-konsumatur għal kull żjara, 'il fuq mill-£14 mqatta' fil-fatt, ta' madwar £9.

```
Valur annwali totali = 40,000 żjara × (£14 mqatta' + £9 surplus tal-konsumatur)
                      = 40,000 × £23 ≈ £920,000/sena
```

Dan jegħleb id-dħul żero tar-riżerva mid-dħul u jagħti lit-trustees tal-karità ċifra difensibbli tal-valur rikreattiv tas-sit meta jagħmlu l-każ mal-finanzjaturi.

## Rabta mal-inġinerija tas-software

Il-ħsieb tal-preferenza żvelata jidher fl-analitika tal-prodotti tas-settur pubbliku aktar spiss milli l-prattikanti jirrealizzaw: id-data tal-użu minn servizz diġitali governattiv b'xejn hija nnifisha evidenza tal-preferenza żvelata tal-valur (il-frekwenza, it-tul tas-sessjoni, u — l-aktar rivelanti — mudelli ta' użu ripetut kontra ta' darba jistgħu jiġu analizzati bl-istess mod li mudell tal-ispiża tal-ivvjaġġar jittratta l-frekwenza tal-ivvjaġġ kontra d-distanza). Fejn servizz għandu sostituti ġenwini (kanal tal-karta, linja tat-telefon), l-"ispiża" li ċ-ċittadini jġarrbu biex jużaw il-kanal diġitali minflok (ħin, data, apparat) tista' tiġi stmata u mqabbla mal-użu, bl-eku dirett tal-loġika tal-ispiża tal-ivvjaġġar. Ara l-[istandard tas-servizz diġitali](../l-istandard-tas-servizz-diġitali/) u l-[valur tad-data miftuħa](../il-valur-tad-data-miftuħa/), li jiffaċċja eżattament din il-problema ta' valutazzjoni għal oġġett mingħajr prezz dirett tas-suq.

## Żbalji komuni

- **Preġudizzju tal-varjabbli omessa fil-mudelli edoniċi.** Li titħalla barra attribut korrelatat (kwalità tal-iskola li tikkorrelata kemm mal-prezz tad-dar kif ukoll mal-varjabbli ambjentali ta' interess) iċċaqlaq l-istima tal-prezz impliċitu; l-ispeċifikazzjoni trid tiġi rrappurtata u eżaminata, mhux biss ir-riżultat.
- **Li jiġu injorati siti sostituti fl-istudji tal-ispiża tal-ivvjaġġar.** Il-valur żvelat ta' żuwar għal sit huwa sottovalutat jekk jeżisti sostitut eqreb u ma jiġix ikkontrollat — jistgħu jkunu qed iżuru primarjament għax huwa b'xejn, mhux għax huwa unikament ta' valur.
- **Li l-preferenza żvelata tiġi applikata għal oġġett mingħajr ebda eku tas-suq.** Il-valur tal-eżistenza, il-valur tal-għażla u l-valur tal-wirt ma jidhru f'ebda transazzjoni u ma jistgħux jiġu rkuprati bil-metodi edoniċi jew tal-ispiża tal-ivvjaġġar — dak id-distakk jappartjeni lill-[valutazzjoni bil-preferenza ddikjarata](../valutazzjoni-bil-preferenza-ddikjarata/).
- **Li l-valur kapitalizzat (ta' darba) jitħawwad ma' fluss annwali.** L-effetti edoniċi fuq il-prezz tad-djar huma tipikament valuri kapitalizzati ta' darba; li jiġu ttrattati bħala fluss annwali ta' benefiċċji jgħolli l-appraisal.

## Sorsi

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
