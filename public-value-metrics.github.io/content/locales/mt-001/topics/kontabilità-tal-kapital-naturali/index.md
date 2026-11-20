# Kontabilità tal-kapital naturali

Il-kontabilità tal-kapital naturali tpoġġi l-ambjent fuq l-istess livell ta' kwalunkwe assi nazzjonali jew organizzattivi oħra: tkejjel l-istokk ta' riżorsi naturali (foresti, ħamrija, xmajjar, artijiet mistagħdra, l-atmosfera) u l-fluss ta' servizzi li jipproduċu (sekwestrazzjoni tal-karbonju, protezzjoni mill-għargħar, rikreazzjoni, ikel), kemm f'termini fiżiċi kif ukoll monetarji, biex it-tnaqqis ambjentali jidher fit-teħid tad-deċiżjonijiet bl-istess mod li jidher l-użu tal-kapital finanzjarju. Ir-Renju Unit huwa wieħed mill-gvernijiet l-aktar avvanzati fl-għamla ta' dan b'mod sistematiku, immexxi mill-25 Year Environment Plan (2018) u implimentat permezz tal-kontijiet tal-UK Natural Capital tal-ONS u l-gwida supplimentari tal-Green Book tal-HM Treasury.

## Għaliex hu importanti

Il-kontabilità konvenzjonali — korporattiva u governattiva bl-istess mod — tqis foresta bla valur sakemm tinqata' u tinbiegħ bħala injam, u dak il-ħin issir parti mill-GDP. Il-kontabilità tal-kapital naturali teżisti biex tagħlaq dan id-distakk: il-25 Year Environment Plan tar-Renju Unit impenja lill-gvern biex iwaħħal il-ħsieb tal-kapital naturali fil-politika kollha, bil-ħsieb espliċitu li jkun "l-ewwel ġenerazzjoni li tħalli l-ambjent f'kundizzjoni aħjar minn kif sibnih." Mindu l-ONS ippubblika kontijiet annwali tal-UK Natural Capital (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) li jistmaw il-valur monetarju tas-servizzi tal-ekosistema — mir-rikreazzjoni fil-foresti sal-benefiċċji għas-saħħa tal-ispazji ħodor urbani sal-ħażna tal-karbonju fil-peatlands — bl-istess qafas tal-Kontijiet Nazzjonali użat għall-kapital prodott, sabiex il-kapital naturali eventwalment ikun jista' joqgħod fl-istess karta tal-bilanċ ma' toroq, bini u tagħmir. Il-gwida tal-HM Treasury Enabling a Natural Capital Approach (ENCA), supplimentari għall-Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), tistabbilixxi kif l-appraisers għandhom jevalwaw l-ispejjeż u l-benefiċċji ambjentali f'business cases, sabiex skema ta' triq li teqred foresta antika jew skema kontra l-għargħar li tirrestawra art mistagħdra jkunu jistgħu jitqabblu f'termini monetarji konsistenti minflok ma waħda jkollha numru u l-oħra paragrafu ta' riżervi.

## Il-matematika

```
Valur ta' assi tas-servizz tal-ekosistema = NPV tal-fluss ta' servizzi li l-assi jipprovdi

Valur tal-assi = Σ (t = 1 sa T) [valur annwali tal-fluss tas-servizz_t / (1 + r)^t]

fejn:
  valur tal-fluss tas-servizz_t = kwantità tas-servizz fis-sena t × valur unitarju
                          (eż. żjarat rikreattivi × valur għal kull żjara;
                           tunnellati ta' karbonju sekwestrat × prezz tal-karbonju)
  r = rata ta' skont (rata ta' skont soċjali tal-Green Book — ara
      [rata ta' skont soċjali](../rata-soċjali-ta-skont/))
  T = orizzont taż-żmien li matulu l-assi huwa mistenni jipprovdi s-servizz
```

Din hija eżattament l-istess struttura tal-valur preżenti nett użata biex jiġi evalwat kapital prodott jew biex jiġi appraised kwalunkwe investiment pubbliku taħt l-[appraisal tal-Green Book](../valutazzjoni-tal-green-book/) — il-kontribut tal-kontabilità tal-kapital naturali huwa li tipprovdi kwantitajiet fiżiċi kredibbli u valuri unitarji għal servizzi li qabel kienu jiġu evalwati b'żero.

## Eżempju prattiku

**Foresta urbana, valur rikreattiv**: foresta ta' 50 ettaru tirċievi stima ta' 80,000 żjara rikreattiva fis-sena, kull waħda evalwata (bil-metodu tal-ispiża tal-ivvjaġġar jew tal-preferenza ddikjarata — ara l-[valutazzjoni tal-preferenza żvelata](../valutazzjoni-bil-preferenza-żvelata/) u l-[valutazzjoni tal-preferenza ddikjarata](../valutazzjoni-bil-preferenza-ddikjarata/)) £3 għal kull żjara. Il-foresta hija mistennija tkompli tipprovdi dan is-servizz għal 50 sena, appraised b'rata ta' skont ta' 3.5%.

```
Valur rikreattiv annwali = 80,000 × £3 = £240,000/sena

NPV fuq 50 sena b'3.5% ≈ £240,000 × fattur tal-annwità(3.5%, 50 sena)
fattur tal-annwità(3.5%, 50) ≈ 21.4

Valur tal-assi ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Żieda tal-ħażna tal-karbonju**: l-istess foresta tissekwestra stima ta' 400 tunnellata ta' CO2 fis-sena, evalwati bil-prezz tal-karbonju mhux ikkummerċjat tal-gvern ta' madwar £75/tunnellata (illustrattiv — uża l-valuri tal-karbonju attwali ppubblikati mill-BEIS/DESNZ għal appraisal ħaj).

```
Valur annwali tal-karbonju = 400 × £75 = £30,000/sena
NPV fuq 50 sena b'3.5% ≈ £30,000 × 21.4 ≈ £642,000

Valur totali tal-assi tal-foresta (rikreazzjoni + karbonju) ≈ £5,136,000 + £642,000
                                                             ≈ £5,778,000
```

Dan qabel ma jiżdiedu s-servizzi ta' tnaqqis tal-għargħar, bijodiversità jew kwalità tal-arja li l-gwida ENCA titlob lill-appraisers iqisu wkoll — it-total huwa apposta limitu minimu, mhux massimu.

## Rabta mal-inġinerija tas-software

- Is-sistemi tal-ġestjoni ambjentali u tal-assi għal awtoritajiet lokali u aġenziji (parks, awtostradi, korpi tal-ilma) jistgħu jgħaqqdu reġistru tal-kapital naturali mar-reġistru tal-assi fiżiċi tagħhom, bl-użu tal-istess mudell ta' fluss tas-servizz imdaqqas bil-valur unitarju bħal kwalunkwe [database tal-ispejjeż unitarji](../bażijiet-tad-dejta-tal-ispejjeż-unitarji/) oħra li żżomm l-organizzazzjoni.
- Peress li l-NPV tal-kapital naturali huwa sensittiv għar-rata ta' skont (ara l-fattur tal-annwità fl-eżempju prattiku), kwalunkwe għodda li tikkalkulah għandha tesponi r-rata u l-orizzont bħala inputs viżibbli, mhux tgħattihom — l-istess prinċipju ta' trasparenza koperti taħt l-[ekwità bejn il-ġenerazzjonijiet u l-iskont tas-sostenibbiltà](../ekwità-bejn-il-ġenerazzjonijiet-u-skont-għas-sostenibbiltà/).
- Il-kontijiet tal-kapital naturali dejjem aktar huma input meħtieġ għat-taqsimiet tal-impatt ambjentali ta' business case ta' [appraisal tal-Green Book](../valutazzjoni-tal-green-book/); tim tat-twassil li jibni għodod għall-business cases għandu jittratta l-kontijiet tal-ONS u l-valuri unitarji tal-ENCA bħala data ta' referenza li tiġi integrata, mhux xi ħaġa li l-appraisers jerġgħu jikkalkulaw mill-bidu kull darba.

## Żbalji komuni

- **Għadd doppju ta' servizzi tal-ekosistema li jikkoinċidu** — il-valur rikreattiv u l-valur tal-bijodiversità għall-istess sit jistgħu jaqsmu data sottostanti dwar ir-rieda li jitħallas; il-gwida ENCA twissi espliċitament kontra s-somma ta' valutazzjonijiet derivati minn strumenti ta' stħarriġ li jikkoinċidu.
- **Li l-valur ta' assi tal-kapital naturali jiġi ttrattat bħala statiku** — il-fluss tas-servizzi jinbidel mal-klima, il-ġestjoni u l-pressjoni tal-użu tal-art; il-valur tal-karbonju u tat-tnaqqis tal-għargħar ta' foresta f'dan id-deċennju mhuwiex proprjetà permanenti tas-sit.
- **L-użu ta' valuri unitarji medji nazzjonali għal deċiżjoni lokali ħafna** — ettaru ta' foresta urbana aċċessibbli u ettaru ta' art għolja remota għandhom valur rikreattiv differenti ħafna; il-gwida ENCA tirrakkomanda valuri lokali jew speċifiċi għas-sit fejn disponibbli minflok id-default fuq medji nazzjonali.

## Sorsi

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
