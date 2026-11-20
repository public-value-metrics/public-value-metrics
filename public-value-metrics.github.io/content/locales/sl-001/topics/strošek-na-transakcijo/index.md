# Strošek na transakcijo

Strošek na transakcijo je glavna metrika ekonomike enote za vladno digitalno storitev: skupni strošek izvajanja kanala, deljen s številom transakcij, dokončanih prek njega. Bila je vodilna številka na nekdanji platformi GOV.UK Performance Platform in številka, ki je financirala desetletje naložb v »digitalno privzeto«, zato je tudi metrika, ki je najbolj izpostavljena igranju z njo.

## Zakaj je pomembno

Digital Efficiency Report urada Cabinet Office iz leta 2012 je primerjavo stroškov kanalov postavil v izrazih, ki so obstali: digitalne transakcije naj bi stale približno 20-krat manj kot po telefonu in približno 50-krat manj kot osebno, z ilustrativnimi številkami lokalne uprave približno 0,15 £ na spletno transakcijo proti 2,83 £ po telefonu in 8,62 £ osebno. Ta primerjava je postala utemeljitev za preoblikovanje 25 vzornih storitev, imenovanih v Government Digital Strategy, in za vsak poslovni primer ministrstva, ki se je od takrat skliceval na prihranke zaradi preusmeritve kanalov. Številka je resnično koristna kot signal velikostnega reda, vendar razmerje popolnoma je odvisno od tega, kaj se šteje na vsaki strani: pošten strošek telefonskega kanala vključuje osebje klicnega centra, telefonsko pogodbo, usposabljanje in prostore; pošten digitalni strošek vključuje gostovanje, tekoče plače produktne ekipe, čas službe za podporo pri neuspelih poteh in kanal digitalne pomoči, ki ga zahteva točka 5 [digital-service-standard](../standard-digitalnih-storitev/). Izločite dovolj od tega z digitalne strani in vsaka storitev je videti poceni.

## Matematika

```
Strošek na transakcijo = skupni dodeljeni strošek kanala / dokončane transakcije

Skupni dodeljeni strošek kanala naj vključuje:
  + gostovanje in infrastrukturo
  + strošek produktne/inženirske/podporne ekipe (amortiziran)
  + strošek vsebine in oblikovanja storitve (amortiziran)
  + strošek digitalne pomoči / podpore dostopnosti
  + strošek povpraševanja zaradi neuspeha (uporabniki, ki spodletijo digitalno
    in se zatečejo k telefonu)
  − enkratni strošek gradnje se amortizira čez pričakovano življenjsko dobo storitve,
    ne odpiše v celoti v prvem letu

Običajen računovodski trik:
  »Mejni strošek na transakcijo« (samo gostovanje, ko je zgrajeno) se navaja,
  kot da bi bil »povprečni strošek na transakcijo« (skupni strošek, vključno
  z ekipo, ki storitev še naprej gradi in upravlja). Ta se lahko pri storitvi
  z veliko, aktivno izvajalsko ekipo razlikujeta za 10-krat ali več.
```

## Praktični primer

**Storitev obnove davka na vozilo**: 4 milijone transakcij na leto.

```
Samo mejna številka (trik):
  Samo gostovanje + obdelava plačil = 180.000 £/leto
  Strošek na transakcijo = 180.000 / 4.000.000 = 0,045 £
  → glavna številka, navedena v poslovnem primeru

Polno obremenjena številka (poštena):
  Gostovanje + plačila                      180.000 £
  Produktna/inženirska ekipa (8 FTE)        720.000 £
  Služba za podporo (neuspele/sporne txn)   310.000 £
  Telefonska linija digitalne pomoči        140.000 £
  Skupaj                                  1.350.000 £
  Strošek na transakcijo = 1.350.000 / 4.000.000 = 0,3375 £

Polno obremenjena številka je še vedno približno 8-krat cenejša od
primerjalne vrednosti telefonskega kanala 2,83 £ iz Digital Efficiency
Report, kar je resničen in obramben prihranek, vendar 7,5-krat višja od
samo mejne številke, navedene v bližnjični različici. Obe številki sta
»resnični«; le ena je primerljiva s stroškom telefonskega kanala, proti
kateremu se postavlja.
```

## Povezava s programskim inženirstvom

Strošek na transakcijo je mesto, kjer arhitekturne odločitve postanejo finančna številka: storitev, ki se čisto samodejno prilagaja in zahteva malo ročnih posegov, to številko sčasoma znižuje; storitev, ki zaradi zmedenih stanj napak ustvarja velik obseg zahtevkov za podporo, jo zvišuje ne glede na učinkovitost gostovanja. To je naravna spremljevalna metrika točke 10 [digital-service-standard](../standard-digitalnih-storitev/) (»opredelite, kako izgleda uspeh, in objavite podatke o uspešnosti«) in [standardov storitev in metrik transakcij](../standardi-storitev-in-transakcijske-metrike/), ki določa širši nabor kazalnikov, znotraj katerega ta številka stoji. Neposredno napaja tudi izračune [prihrankov zaradi preusmeritve kanalov](../prihranki-zaradi-preusmeritve-kanalov/) in jo je treba uskladiti s [skupnimi stroški lastništva v vladnem IT](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/), da se stroški platforme in skupnih storitev ne izgubijo tiho.

## Pasti

- **Mejni strošek, preoblečen v povprečni strošek**: navajanje stroška samo gostovanja, ko je storitev zgrajena, z izpustitvijo stalne ekipe, ki jo vzdržuje, iterira in podpira (glej izračunan primer zgoraj).
- **Izključitev stroška digitalne pomoči**: kanal ni skladen z »digitalno privzeto« in njegov pravi strošek ni zajet, če je rezervni telefonski/papirni kanal, ki ga zahteva [digitalna vključenost](../digitalna-vključenost/), ovrednoten ločeno ali prezrt.
- **Zanemarjanje povpraševanja zaradi neuspeha**: transakcije, ki se začnejo digitalno in spodletijo ter vseeno ustvarijo telefonski klic ali papirni obrazec, so strošek digitalnega kanala, ne kanala, ki neuspeh ujame.
- **Primerjanje transakcij različne zahtevnosti med kanali**: telefonski klici nesorazmerno obravnavajo težke primere (več vzdrževanih oseb, popravljanje napak, ranljivi vlagatelji); primerjava povprečnega telefonskega stroška s povprečnim digitalnim stroškom razmerje precenjuje, razen če je mešanica transakcij usklajena.

## Viri

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
