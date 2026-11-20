# Bażijiet tad-dejta tal-ispejjeż unitarji

Bażi tad-dejta tal-ispejjeż unitarji hija librerija ta' proxies finanzjarji, riċerkati minn qabel u bbażati
fuq evidenza, għal riżultati soċjali — il-valur li wieħed jinqala' mid-diżimpjieg għal impjieg, ta' weħda
mnaqqsa, ta' kirja stabbli — li jippermettu lil prattikant jimmonetizza riżultat mingħajr ma jikkummissjona
riċerka ta' valutazzjoni apposta kull darba. Jeżistu biex karità żgħira li tikteb offerta ta' finanzjament
tkun tista' tapplika l-istess rigorożità bħal konsulenza b'riżorsi tajbin, billi terġa' tuża proxy li xi ħadd
ieħor diġà derivah u ppubblikah.

## Għaliex hu importanti

L-UK Social Value Bank ta' HACT, żviluppat mal-ekonomista Daniel Fujiwara bl-użu ta' metodi ta' valutazzjoni
tal-benesseri, u l-Global Value Exchange, bażi tad-dejta miftuħa u crowdsourced ta' proxies finanzjarji,
huma ż-żewġ l-aktar użati fit-tielet settur u s-settur pubbliku tar-Renju Unit. It-tnejn jeżistu għax ix-xogħol
ta' valutazzjoni sottostanti — il-[valutazzjoni tal-benesseri](../valutazzjoni-tal-benesseri/) u l-[valutazzjoni
bil-preferenza ddikjarata](../valutazzjoni-bil-preferenza-ddikjarata/) — huwa għali, jeżiġi metodoloġikament, u bil-mod
biex jitmexxa mill-bidu għal kull proġett. Librerija kondiviża u ppubblikata ta' proxies tibdel dak li
kien ikun eżerċizzju ta' riċerka ta' diversi xhur f'tfittxija (lookup), u eżattament għalhekk jimportaw kemm għall-kalkoli
tar-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/) kif ukoll għall-evalwazzjonijiet tal-offerti
tas-[Social Value Act](../social-value-act/): mingħajrhom, monetizzazzjoni rigoruża tkun affordabbli biss
għal organizzazzjonijiet kbar biżżejjed biex jikkummissjonaw studji tagħhom.

## Il-matematika

Bażi tad-dejta tal-ispejjeż unitarji ma tikkalkula xejn waħedha; tipprovdi input wieħed għal kalkolu
li jsir x'imkien ieħor:

```
Valur tal-proxy finanzjarju = prezz tas-suq, JEW prezz ombra, JEW valutazzjoni tal-benesseri,
                              JEW valur ta' preferenza ddikjarata
                              għal unità definita ta' bidla fir-riżultat
                              (eż. "għal kull persuna li tmur minn diżimpjieg għal impjieg, fis-sena")

Valur applikat = għadd ta' riżultati miksuba × valur unitarju tal-proxy
```

Ara l-[prezzijiet ombra](../prezzijiet-ombra/) għal kif jinbena proxy meta ma jeżisti l-ebda prezz tas-suq,
u r-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/) għal kif il-valur applikat imbagħad
jitma' proporzjon wara aġġustamenti tal-piż mejjet u tal-attribuzzjoni.

## Eżempju prattiku

**Karità (SROI ta' servizz ta' għaqda)**: daħla fil-bażi tad-dejta tal-ispejjeż unitarji għal "tnaqqis fil-weħda"
tagħti proxy illustrattiv ta' £1 100 għal kull persuna fis-sena. Applikat għal 80 benefiċjarju: 80 ×
£1 100 = £88 000 valur gross. Jekk l-istess bażi tad-dejta jkollha wkoll proxy għal "benesseri mentali
mtejjeb" li jiġbed minn element ta' stħarriġ tal-benesseri li jikkoinċidi, li jinġabru ż-żewġ proxies
għall-istess 80 persuna jgħodd darbtejn parti mill-istess bidla sottostanti — il-bażi tad-dejta tipprovdi
n-numru, iżda li tiġi evitata din is-sovrapożizzjoni hija r-responsabbiltà tal-analista.

**Awtorità lokali (SROI ta' club tax-xogħol)**: daħla fil-bażi tad-dejta tal-ispejjeż unitarji għal "mid-diżimpjieg
għal impjieg sostnut" tiġi applikata għal 45 parteċipant b'proxy illustrattiv ta' £8 500 għal kull persuna
fis-sena: 45 × £8 500 = £382 500 valur gross, qabel l-aġġustamenti tal-piż mejjet u tal-attribuzzjoni
murija fir-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/).

## Rabta mal-inġinerija tas-software

It-timijiet li jibnu għodod ta' rapportar għal karitajiet jew kummissjunarji jibbenefikaw minn "katalgu
tar-riżultati" intern — tabella li tmappja kull riżultat li prodott jew servizz jista' b'mod plawżibbli jitlob
għal proxy msemmi, il-bażi tad-dejta tas-sors tiegħu, id-data tal-pubblikazzjoni tiegħu, u identifikatur
tal-verżjoni — sabiex timijiet differenti fi ħdan organizzazzjoni ma jagħżlux kull wieħed valuri ftit differenti
għall-istess riżultat. Li d-dejta miftuħa tal-Global Value Exchange tiġi mgeżwra wara servizz ta' lookup,
bis-sors u d-data dejjem murija maġenb il-figura, iżomm il-proxy awditabbli minflok numru maġiku midfun
fi spreadsheet. Ara r-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/) u l-[Social Value
Act](../social-value-act/) għaż-żewġ postijiet ewlenin fejn dawn il-proxies jiġu kkunsmati.

## Żbalji komuni

- **Li l-proxies jiġu ttrattati bħala preċiżi.** Il-biċċa l-kbira tal-proxies ippubblikati huma medji
  mmudellati minn studji ta' valutazzjoni tal-benesseri b'intervalli wiesgħa ta' kunfidenza; li wieħed
  jikkwotah sal-lira jegħleb il-preċiżjoni li r-riċerka sottostanti tappoġġja.
- **Għadd doppju ta' proxies li jikkoinċidu.** Li jiġu kkombinati proxies (eż. "weħda mnaqqsa" u "benesseri
  mentali mtejjeb") derivati minn kostruzzjonijiet ta' stħarriġ li jikkoinċidu jivvaluta l-istess bidla
  sottostanti darbtejn.
- **Użu ta' proxy barra mill-kuntest mingħajr aġġustament.** Proxy kalibrat fuq popolazzjoni nazzjonali u sena
  waħda, applikat x'imkien ieħor mingħajr aġġustament għall-inflazzjoni jew għall-kuntest, jiddikjara
  b'mod żbaljat il-valur bil-kwiet.
- **Li ma tiċċekkjax il-provenjenza.** Il-Global Value Exchange huwa miftuħ u crowdsourced, għalhekk il-kwalità
  tad-daħliet tvarja skont min jikkontribwixxi; iċċekkja s-sors sottostanti qabel ma tikkwota figura
  f'offerta ta' finanzjament jew sottomissjoni ta' akkwist.

## Sorsi

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
