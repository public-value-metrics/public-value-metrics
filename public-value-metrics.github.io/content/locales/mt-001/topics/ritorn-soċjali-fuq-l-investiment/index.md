# Ritorn soċjali fuq l-investiment (SROI)

Ir-ritorn soċjali fuq l-investiment huwa qafas biex jitkejjel, jiġi mmonetizzat u jiġi rendikontat
kunċett wiesa' ta' valur — soċjali, ambjentali u ekonomiku — u jiġi espress bħala proporzjon kontra
r-riżorsi investiti, pereżempju "£1,44 ta' valur soċjali għal kull £1 investita". Ġie mfassal biex
jestendi l-loġika tal-kontabilità finanzjarja għal riżultati li s-swieq ma jipprezzawx, mingħajr ma
titlef id-dixxiplina tal-kontabilità: kull numru f'SROI jrid ikun traċċabbli għal riżultat definit
mill-partijiet interessati, bażi ta' evidenza, u aġġustament espliċitu għal dak li kien jiġri xorta waħda.

## Għaliex hu importanti

L-SROI huwa miżmum minn Social Value UK u Social Value International, korpi suċċessuri tan-Netwerk
SROI, li "A Guide to Social Return on Investment" (2012) tagħhom għadu l-metodoloġija ta' referenza.
Il-qafas jistrieħ fuq seba' prinċipji — involvi lill-partijiet interessati, fehem x'jinbidel, ivvaluta
dak li jimporta, inkludi biss dak li huwa materjali, titlobx iżżejjed, kun trasparenti, u ivverifika
r-riżultat — u huwa l-ħames prinċipju, "titlobx iżżejjed", li l-biċċa l-kbira tar-rapporti SROI fid-dinja
reali jfallu fih. Proporzjon prodott billi jitfew l-aġġustamenti tal-piż mejjet u tal-attribuzzjoni
mhuwiex SROI; huwa numru ta' kummerċjalizzazzjoni liebes il-ħwejjeġ ta' SROI. L-inġiniera tas-software
li jibnu għodod ta' rapportar għal karitajiet, impriżi soċjali jew kummissjunarji jeħtieġu jafu d-differenza,
għax l-għodda jew tinforza d-dixxiplina jew tagħmilha faċli li titħalla barra.

## Il-matematika

L-SROI jiddependi fuq [teorija tal-bidla](../teorija-tal-bidla/) biex jidentifika liema riżultati
jidħlu fl-ambitu, u jesprimihom bl-istess katina ta' responsabbiltà bħal [mudell loġiku](../mudell-loġiku/):

```
Proporzjon SROI = Valur preżenti tar-riżultati / Valur tal-inputs

Proċess:
 1. Stabbilixxi l-ambitu u identifika l-partijiet interessati li r-riżultati tagħhom ser jitkejlu
 2. Immappja r-riżultati (teorija tal-bidla, evidenzjata mal-partijiet interessati, mhux preżunta)
 3. Evidenzja r-riżultati u agħtihom valur permezz ta' proxies finanzjarji
 4. Stabbilixxi l-impatt: valur gross − piż mejjet − attribuzzjoni − spostament, imbagħad applika t-tnaqqis gradwali
 5. Ikkalkula l-SROI: valur preżenti nett tal-impatt ÷ valur tal-inputs
 6. Irrapporta, uża u inkorpora — il-proporzjon huwa mezz ta' komunikazzjoni, mhux il-ħsieb finali
```

Il-piż mejjet, l-attribuzzjoni u l-ispostament huma koperti fl-[addizzjonalità u l-piż mejjet](../addizzjonalità-u-deadweight/)
u fl-[ispostament u l-attribuzzjoni](../spostament-u-attribuzzjoni/); it-tlieta jeżistu biex jissepparaw
l-impatt [kontrofattwali](../analiżi-kontrofattwali/) ġenwin mir-riżultat gross.

## Eżempju prattiku

**Programm tal-impjieg ta' awtorità lokali**: spiża annwali ta' input £250 000. Sittin parteċipant jinqalgħu
għal impjieg sostnut; proxy finanzjarju għal dak ir-riżultat (titjib fil-benesseri, tnaqqis fid-dipendenza
fuq il-benefiċċji, u dħul mit-taxxa flimkien) huwa £8 500 għal kull persuna għall-ewwel sena — ara l-
[bażijiet tad-dejta tal-ispejjeż unitarji](../bażijiet-tad-dejta-tal-ispejjeż-unitarji/) għal fejn jiġu dawn il-proxies.

- Valur gross tar-riżultat: 60 × £8 500 = £510 000
- Mingħajr il-piż mejjet (40% x'aktarx kienu jsibu xogħol mingħajr il-programm): £510 000 × 0,60 = £306 000
- Mingħajr l-attribuzzjoni (30% tal-bidla li fadal hija dovuta għall-appoġġ ta' aġenziji oħra): £306 000 × 0,70 = £214 200
- Riżultat tas-sena 2 b'tnaqqis gradwali ta' 30%: £214 200 × 0,70 = £149 940, skontat b'3,5%/sena (ara
  [r-rata soċjali ta' skont](../rata-soċjali-ta-skont/)): £149 940 ÷ 1,035 = £144 870
- Valur preżenti totali tal-impatt: £214 200 + £144 870 = £359 070
- **Proporzjon SROI: £359 070 ÷ £250 000 = 1,44**, irrapportat bħala "£1,44 ta' valur soċjali għal kull £1 investita"

**Karità**: servizz ta' għaqda ta' £60 000 inaqqas il-weħda għal 80 persuna anzjana, ivvalutat bi proxy ta'
£1 100/persuna/sena. Valur gross £88 000; wara 35% piż mejjet u 15% attribuzzjoni, l-impatt nett huwa
£88 000 × 0,65 × 0,85 = £48 620, proporzjon SROI ta' 0,81 — taħt il-punt tal-pareġġ, li huwa sejba leġittima
u utli, mhux falliment li ma jinkitibx.

## Rabta mal-inġinerija tas-software

Kalkulatur SROI li jħalli lill-utent jidħol għadd ta' riżultati u valuri proxy iżda m'għandux qasam
meħtieġ għall-piż mejjet, l-attribuzzjoni jew teorija tal-bidla marbuta se jipproduċi proporzjonijiet
minfuħin awtomatikament, għax li jitħallew barra l-aġġustamenti hija t-triq tal-inqas reżistenza. Ibni
d-dixxiplina fl-iskema: kull ringiela ta' riżultat għandha tirreferi għal grupp ta' partijiet interessati,
kwantità evidenzjata, proxy finanzjarju bis-sors tiegħu, u kampijiet mhux fakultattivi għall-piż mejjet/
attribuzzjoni. Ara r-[riżultati vs. outputs](../eżiti-vs-outputs/) għad-distinzjoni li fuqha jistrieħ
l-immappjar tar-riżultati tal-SROI, u l-[mudell loġiku](../mudell-loġiku/) għall-katina li l-għodda
għandha tirrifletti fil-mudell tad-dejta tagħha.

## Żbalji komuni

- **Li jitħallew barra l-piż mejjet u l-attribuzzjoni.** Il-proporzjon ewlieni mingħajr dawn l-aġġustamenti
  huwa figura grossa, mhux figura ta' impatt nett, u l-prinċipji ta' Social Value UK jitolbu ż-żewġ
  aġġustamenti b'mod espliċitu.
- **It-tqabbil ta' proporzjonijiet bejn organizzazzjonijiet.** Proporzjon SROI jiddependi fuq l-ambitu u l-għażliet
  ta' proxy magħmula każ b'każ; li proporzjon ta' 4:1 minn rapport wieħed jiġi trattat bħala "aħjar" minn
  wieħed ta' 2:1 minn ieħor jinjora li s-suppożizzjonijiet mhumiex standardizzati bħal proporzjon
  tal-kontabilità finanzjarja.
- **Għadd doppju ta' proxies li jikkoinċidu.** Li jinġabar proxy ta' "weħda mnaqqsa" ma' proxy ta'
  "benesseri mentali mtejjeb" għall-istess benefiċjarji jista' jivvaluta darbtejn bidla sottostanti waħda.
- **Li jitħalla barra l-involviment tal-partijiet interessati.** L-ewwel prinċipju jitlob li r-riżultati
  jiġu definiti mal-persuni li jesperjenzawhom, mhux preżunti mill-analista li jibni l-mudell.

## Sorsi

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
