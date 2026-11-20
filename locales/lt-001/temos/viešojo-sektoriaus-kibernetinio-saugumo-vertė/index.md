# Viešojo sektoriaus kibernetinio saugumo vertė

Viešojo sektoriaus kibernetinio saugumo vertė yra rizikos mažinimo įkainojimo disciplina: kiek verta sumažinti piliečių duomenų pažeidimo tikimybę, turint omenyje, kad saugumo išlaidos nesukuria matomo produkto, kai veikia, ir labai matomą, kai nepavyksta? Paslaugai, laikančiai išmokų įrašus, sveikatos duomenis ar mokesčių įrašus, ši „nematomumo, kai veikia“ savybė yra būtent priežastis, kodėl jai reikia aiškaus vertės argumento, o ne vien atitikties varnelės.

## Kodėl tai svarbu

Jungtinės Karalystės Nacionalinio kibernetinio saugumo centro (NCSC) Kibernetinio vertinimo sistema (Cyber Assessment Framework, CAF) suteikia viešojo sektoriaus organizacijoms struktūruotą būdą saugumą paversti vertinama, rezultatais grįsta disciplina, o ne kontroliniu sąrašu: ji apibrėžia keturis aukšto lygio tikslus (saugumo rizikos valdymas, apsauga nuo kibernetinių atakų, kibernetinio saugumo įvykių aptikimas ir incidentų poveikio mažinimas), suskaidytus į prisidedančius rezultatus, pagal kuriuos sistemos savininką galima vertinti, ta pačia dvasia kaip [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) 9 punktas („sukurkite saugią paslaugą, apsaugančią naudotojų privatumą“). Nuo to, nuo ko saugo CAF vertinimas, yra dokumentuota kaina: IBM Cost of a Data Breach Report seka vidutines pažeidimo sąnaudas pagal sektorių ir nuosekliai nustatė, kad viešasis sektorius yra žemesniame diapazono gale, palyginti su finansais ar sveikatos priežiūra (naujausi leidimai nurodo viešojo sektoriaus vidurkį apie 2,6–2,9 mln. $ už pažeidimą), tačiau „mažiau nei finansuose“ nereiškia „mažai“, o valdžios pažeidimai turi sąnaudų, kurių ataskaitos skaičiai visiškai neįvertina: piliečių pasitikėjimo skaitmeniniais kanalais praradimą, kuris slopina [skaitmeninį naudojimą](../kanalų-perkėlimo-sutaupymai/), nuo kurio priklauso kanalų perkėlimo verslo atvejai, ir politines bei teisines sąnaudas dėl duomenų, kuriuos valstybė iš pradžių privertė piliečius pateikti, atskleidimo.

## Matematika

Saugumo investicijos vertinamos taip, kaip bet kokios rizikos mažinimo išlaidos: kaip tikėtinų nuostolių sumažėjimas, naudojant klasikinę rizikos valdymo tapatybę.

```
Metinis tikėtinas nuostolis (ALE) = Vieno įvykio tikėtinas nuostolis (SLE)
                                    × Metinis pasireiškimo dažnis (ARO)

Saugumo kontrolės vertė =
  ALE_prieš_kontrolę − ALE_po_kontrolės − metinė kontrolės kaina

Kontrolę verta finansuoti, kai:
  (ALE_prieš − ALE_po) > metinė kontrolės kaina

CAF vertinimas tiesiogiai neduoda tikimybės, bet paslaugos CAF
rezultatų profilis (kurie prisidedantys rezultatai yra „pasiekti“,
„iš dalies pasiekti“ ar „nepasiekti“) yra pagrįstas pakaitinis
įvesties duomenų šaltinis ARO įvertinti: sistema su nevaldoma
privilegijuota prieiga ar be išbandyto incidentų reagavimo plano turi
esmingai didesnį realų ARO nei ta, kurioje yra abu.
```

## Pavyzdys su skaičiavimais

**Apskrities tarybos bylų valdymo sistema, laikanti socialinės globos įrašus apie 40 000 gyventojų**:

```
Vieno įvykio tikėtinas nuostolis (pažeidimo kaina), naudojant viešojo
sektoriaus vidurkį iš neseniai paskelbtos IBM Cost of a Data Breach
Report ≈ 2,1 mln. £
(konvertuota, eilės tvarkos skaičius - visada išveskite iš naujausio
ataskaitos leidimo, o ne naudokite fiksuoto skaičiaus)

Dabartinis ARO (nevaldoma privilegijuota prieiga, neišbandytas incidentų
reagavimas, pagal vidinį CAF savivertinimą su keliais „nepasiektais“
rezultatais) ≈ apskaičiuota 8 % per metus
  ALE_prieš = 2,1 mln. £ × 0,08 = 168 000 £/metus

Siūloma kontrolė: privilegijuotos prieigos valdymas + išbandytas incidentų
reagavimo planas, kurie atitinkamus CAF rezultatus perkelia į „pasiektus“,
apskaičiuota, kad ARO sumažės iki 3 %/metus
  ALE_po = 2,1 mln. £ × 0,03 = 63 000 £/metus

Metinė kontrolės kaina (įrankiai + procesas + testavimas) = 45 000 £

Kontrolės vertė = (168 000 − 63 000) − 45 000 = 60 000 £/metus
  grynai teigiama - finansuokite. Aritmetika taip pat rodo, kad kontrolę
  vis tiek verta finansuoti net esant beveik triskart didesnei kainai;
  tokį jautrumo patikrinimą turėtų lydėti bet kuris ALE skaičius, sukurtas
  iš apskaičiuotų tikimybių.
```

## Ryšys su programine inžinerija

Inžinieriai valdo daugumą ALE lygties svirčių: prieigos kontrolės projektavimas, priklausomybių ir pataisų higiena, žurnalų kaupimo ir aptikimo aprėptis bei incidentų reagavimo įrankiai tiesiogiai veikia ARO narį, todėl CAF vertinimas skamba tiek kaip techninės architektūros peržiūra, tiek kaip politikos auditas. Tai yra [techninė skola kaip viešosios vertės erozija](../techninė-skola-kaip-viešosios-vertės-erozija/) ūmiausia forma: neatnaujinamos, nestebimos, prastai prieigos kontroliuojamos sistemos yra skola, kurios palūkanos yra uodegos rizika, o ne pastovus slėgis, ir ją reikia suderinti su [bendromis nuosavybės sąnaudomis valdžios IT](../bendrieji-nuosavybės-kaštai-valdžios-it/), kad saugumo išlaidos nebūtų traktuojamos atskirai nuo tikrųjų sistemos eksploatavimo sąnaudų. Tai taip pat tiesioginis indėlis į [vertės už pinigus](../vertė-už-pinigus/) vertinimus pagal Green Book: riziką įvertinta kaina yra „sąnaudų“ pusės dalis bet kuriame variantų vertinime, o ne pabaigoje prisegtas papildymas.

## Dažniausios klaidos

- **CAF savivertinimo laikymas pačiu saugumu**: užbaigtas vertinimas aprašo saugumo būklę, bet jos nesukuria; vertė yra pasiektuose rezultatuose, o ne dokumente.
- **Pasaulinių vidutinių pažeidimo sąnaudų naudojimas kaip vietos įverčio be pritaikymo**: IBM skaičiai yra didelių, įvairių imčių vidurkiai; mažos vietos valdžios institucijos realus vieno įvykio tikėtinas nuostolis retai sutampa su nacionalinio valdžios departamento.
- **Uodegos rizikos psichologijos ignoravimas investicijų sprendimuose**: maža metinė tikimybė leidžia saugumo išlaidas nuolat atidėti, kol ateina metai, kai to padaryti nebegalima; ALE skaičiavimo jautrumo tikrinimas keliems ARO, kaip pavyzdyje, tam užkerta kelią.
- **Skaičiavimas tik IBM tipo pažeidimo sąnaudų, o ne pasitikėjimo sąnaudų**: pažeidimas, mažinantis piliečių norą naudotis skaitmeniniais kanalais, metų metus griauna [kanalų perkėlimo sutaupymų](../kanalų-perkėlimo-sutaupymai/) pagrindimą; šios sąnaudos retai įtraukiamos į pažeidimo sąnaudų apskaičiavimus.

## Šaltiniai

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
