# L-Istandard tas-Servizz Diġitali

L-Istandard tas-Servizz ta' GOV.UK huwa l-bieb li kull servizz diġitali tal-gvern ċentrali jrid jgħaddi minnu qabel ma jkun jista' jibda joperah: 14-il punt ippubblikat, ivvalutat minn bord indipendenti fi tmiem kull fażi tal-forniment. Huwa l-mekkaniżmu li jbiddel "ibni servizzi pubbliċi tajbin" minn slogan f'deċiżjoni ta' għadda/ma għaddiex b'traċċa bil-miktub — u d-dixxendent dirett tal-mandat "diġitali b'mod awtomatiku" (digital by default) tal-Istrateġija Diġitali tal-Gvern tal-2012.

## Għaliex hu importanti

Qabel ma kien hemm l-Istandard tas-Servizz, il-falliment tal-IT tal-gvern kien rari li jidher qabel it-tnedija, u rari li seta' jiġi attribwit għal deċiżjoni li xi ħadd seta' jindika. L-Istrateġija Diġitali tal-Gvern tal-2012 impenjat lid-dipartimenti biex jiddisinjaw mill-ġdid il-25 servizz transazzjonali bl-ogħla volum li jiffaċċjaw il-pubbliku bħala "diġitali b'mod awtomatiku", u appoġġjat dan l-impenn b'mekkaniżmu ta' konformità: is-servizzi ma setgħux jibdew fuq GOV.UK mingħajr ma jgħaddu valutazzjoni tas-servizz kontra dak li dak iż-żmien kien standard ta' 26 punt (ikkonsolidat għal 18 fl-2019, u issa l-istandard ta' 14-il punt li huwa fis-seħħ illum, li jkopri tliet gruppi — il-fehim tal-ħtiġijiet tal-utenti, l-għoti ta' servizz tajjeb, u l-użu tat-teknoloġija t-tajba). Valutazzjoni tas-servizz hija avveniment reali: bord ta' valutaturi tal-GDS jew tad-dipartiment janalizza l-evidenza, jistaqsi lit-tim, u joħroġ verdett ta' għadda, falla jew "ma ntlaħaqx" kontra kull punt, ippubblikat fuq il-paġna tal-valutazzjoni tas-servizz. Il-falliment ta' valutazzjoni jwaqqaf is-servizz milli jaqbeż minn beta privata għal beta pubblika, jew minn beta għal servizz attiv — huwa bieb ġenwin, mhux reviżjoni.

## Il-matematika

L-Istandard tas-Servizz huwa qafas, mhux formula, imma jaħdem bħala struttura ta' deċiżjoni b'passi (stage-gated):

```
Discovery  → Valutazzjoni Alpha → Valutazzjoni Beta → Valutazzjoni Live
             (mhux obbligatorja   (obbligatorja qabel  (obbligatorja qabel
              għas-servizzi kollha, t-tnedija tal-beta   it-tneħħija tat-tikketta
              imma rakkomandata)   pubblika)             "beta" u l-għeluq tal-kanal l-antik)

Kull valutazzjoni: evidenza + intervista mat-tim → verdett tal-bord għal kull punt
  Intlaħaq / Intlaħaq parzjalment / Ma ntlaħaqx
Riżultat ġenerali: Għadda / Għadda b'kundizzjonijiet / Falla (tkun meħtieġa valutazzjoni mill-ġdid)

Spiża ta' falliment ≈ spiża taċ-ċiklu ta' sprint li jmiss biex jissewwa
                   + dewmien fl-[iffrankar mill-bidla fil-kanal](../iffrankar-mit-tibdil-tal-kanali/)
                     li għalihom ġie ffinanzjat is-servizz
```

Il-punt 10 ("iddefinixxi kif tidher is-suċċess, u ppubblika d-dejta tal-prestazzjoni") huwa dak li jitma' l-[spiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/) u l-[istandards tas-servizz u l-metriċi tat-tranżazzjonijiet](../standards-tas-servizz-u-metriċi-tat-transazzjonijiet/) — l-Istandard jobbliga l-kejl, mhux biss is-servizz.

## Eżempju prattiku

**Servizz ta' applikazzjoni għal akkomodazzjoni f'awtorità lokali**: tim ta' kunsill jilħaq il-valutazzjoni beta tiegħu b'servizz li jilħaq 11 mill-14-il punt imma jfalli l-punt 5 ("kun żgur li kulħadd jista' juża s-servizz") għax ma jeżisti l-ebda mogħdija ta' għajnuna diġitali għall-applikanti mingħajr aċċess għall-internet, u jfalli l-punt 9 għax dejta personali tiġi rreġistrata bħala test sempliċi fit-traċċi tal-iżbalji tal-applikazzjoni.

```
Spiża diretta tal-falliment:
  Slot ta' valutazzjoni mill-ġdid: stennija ta' 6–8 ġimgħat għall-bord li jmiss
  Sprint ta' rimedju: 2 żviluppaturi × 3 ġimgħat × £550/ġurnata ≈ £34 650
  Disinn tal-kanal ta' għajnuna diġitali: 1 riċerkatur × 2 ġimgħat ≈ £5 000

Spiża tad-dewmien: is-servizz kien previst li jittrasferixxi 40% ta' 18 000/sena
mistoqsijiet dwar l-akkomodazzjoni minn telefonati ta' £8,50 għal tranżazzjonijiet
diġitali ta' £0,20
  = 7 200 × (£8,50 − £0,20) = £59 760/sena mitlufa, proporzjonata għal
    dewmien ta' ~xahrejn ≈ £9 960

Spiża totali tal-valutazzjoni fallita ≈ £49 610
```

Il-punt tal-aritmetika mhuwiex il-preċiżjoni — huwa li valutazzjoni fallita għandha prezz reali u li jista' jiġi kkalkulat, u dan huwa eżattament għaliex il-bieb għandu snien.

## Rabta mal-inġinerija tas-software

Għall-inġiniera, l-Istandard jinqara bħala lista ta' kontroll tal-arkitettura u tal-forniment daqs dokument ta' politika: il-punt 11 ("agħżel l-għodda u t-teknoloġija t-tajba") u l-punt 12 ("agħmel il-kodiċi sors il-ġdid miftuħ") huma deċiżjonijiet diretti tal-inġinerija, u l-punt 14 ("topera servizz affidabbli") jeħtieġ l-istess SLOs u proċessi ta' inċidenti li kull sistema tal-produzzjoni teħtieġ. Huwa l-qafas ġenerali għal dan il-grupp ta' suġġetti — l-[ispiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/) u l-[iffrankar mill-bidla fil-kanal](../iffrankar-mit-tibdil-tal-kanali/) huma dak li l-Istandard qed jipprova jipproteġi finanzjarjament, l-[inklużjoni diġitali](../inklużjoni-diġitali/) hija dak li l-punt 5 jeżisti biex jiggarantixxi, u l-komponenti ta' [gvern bħala pjattaforma](../gvern-bħala-pjattaforma/) (GOV.UK Notify, Pay, One Login) jissodisfaw il-punt 13 ("uża u kkontribwixxi għal standards miftuħa, komponenti komuni u mudelli") l-aktar awtomatikament. Ara wkoll [ibni jew ixtri fil-gvern](../ibni-jew-ixtri-fil-gvern/) dwar kif il-punt tal-"għodda t-tajba" jidher fid-deċiżjonijiet tal-akkwist.

## Żbalji komuni

- **Il-valutazzjoni titqies bħala kaxxa ta' konformità għal jum it-tnedija**: it-timijiet li jaqraw il-14-il punt għall-ewwel darba ġimgħa qabel il-valutazzjoni beta tagħhom jfallu b'mod prevedibbli; l-Istandard huwa maħsub biex iwassal id-deċiżjonijiet mid-discovery 'il quddiem, mhux biex jivvalutahom b'lura.
- **Jiġi vvalutat il-prototip, mhux is-servizz**: demo lixxa tista' tgħaddi reviżjoni li l-verżjoni attiva tas-servizz, bi ħsieb għall-għajnuna diġitali, inklużiva u bi ġestjoni tal-inċidenti, kienet tfalli — il-valutaturi huma maħsuba li jinvestigaw din id-differenza, iżda s-servizzi żgħar li jiċċertifikaw lilhom infushom spiss jaqbżuha.
- **Ebda valutazzjoni mill-ġdid qabel it-tkabbir**: servizz ivvalutat b'5% tat-tnedija ma jibqax awtomatikament konformi b'100% — it-tagħbija, id-domanda minħabba falliment, u l-utenti ta' każijiet marġinali kollha jinbidlu.
- **Jiġi konfuż l-Istandard tas-Servizz ma' sistema tad-disinn**: il-komponenti tas-GOV.UK Design System jissodisfaw xi punti (konsistenza, aċċessibilità) imma l-Istandard ikopri wkoll l-istruttura tat-tim, il-prattika agile, u l-etika tad-dejta — servizz imżejjen tajjeb xorta jista' jfalli fuq il-punti 2, 6 jew 9.

## Sorsi

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
