# Eraiki ala erosi gobernuan

Eraiki-ala-erosi (build-vs-buy) garapen pertsonalizatuaren eta eskuraketa komertzial edo komoditatearen arteko konparazio egituratu eta arriskuaren arabera doitua da, deskontatutako [jabetza-kostu osoan](../jabetza-kostu-osoa-gobernuko-it-an/), balioa lortzeko denboran eta arriskuan oinarrituta. Gobernua egituraz erosle-sektorea da —Technology Code of Practice-k komoditate- eta hodei-irtenbideen aldeko presuntzioa ezartzen du—, baina sailen barruko ingeniaritza-taldeek oraindik eraikitzera jotzen dute lehenespenez, nonahiko eraikitzaileek arrazoi berberengatik.

## Zergatik den garrantzitsua

Government Digital Service-ren Technology Code of Practice-k (<https://www.gov.uk/guidance/the-technology-code-of-practice>) eta Service Manual-eko eraiki ala erosi erabakitzeko gidak sailak bultzatzen dituzte garapen pertsonalizatua justifikatzera, komoditate-gaitasuna erosi behar dela eta ez eraiki, eta benetan berria eta misioa bereizten duen gaitasunak bakarrik justifikatzen duela kode pertsonalizatua, presuntzioaren aurka. HM Treasury-k Green Book-erako baikortasun-alborapenari buruz duen gida osagarriak, 2002ko Mott MacDonald-en erosketa publiko handien berrikuspenetik abiatuta, IT proiektuei ebaluatutako kategoria guztien arteko igoera-tarte zabalena ematen die — kapital-kostuaren estimazioak ebaluazioan erabili aurretik %10 igotzea gomendatzen da behealdean eta %200ra arte goialdean, software-eraikuntzak erosketa publikoan historikoki zein gaizki azpiestimatu diren islatuz. Eraiki-ala-erosi analisia hain zuzen arrisku-doikuntza hori mahai gainean jartzera behartzeko dago onarpena baino lehen, urte barruko gain-gastuaren eskari gisa azaleratzen utzi beharrean.

## Matematika

```
Konparatu 3–5 urteko horizonte berean, Green Book-aren gizarte-deskontu
tasarekin deskontatuta (ikus social-discount-rate.md):

NPV_aukera = PV(onurak, balioa lortzeko denborarekin lekualdatuta) − PV(TCO)

Arrisku-doikuntzak (Green Book-aren baikortasun-alborapenaren eredua):
  eraikuntza-kostua × 1,1–3,0       (IT proiektuen igoera-tartea, Mott MacDonald)
  eraikuntzaren balioa lortzeko denbora + %40–60 (hedapen-atzerapenaren aurrekoa)
  erosketa: gehitu integrazioaren errealitate-egiaztapena eta kontratutik ateratzeko kostuak

Erabaki-eragileak, normalean erabakitzen duten ordenan:
  1. bereizgarritasuna — gaitasun hau misioa al da, ala hodiak?
  2. balioa lortzeko denbora × atzerapenaren kostua (ikus cost-of-delay-in-public-programmes.md)
  3. arriskuaren arabera doitutako jabetza-kostu osoa
```

## Adibide landua

Tokiko erakunde batek kasu-kudeaketako sistema bat behar du helduen gizarte-arretarako. Erosi: SaaS £180.000/urte, 4 hilabetetan martxan. Eraiki: £900.000 estimatuta gehi £150.000/urte mantentze-lanetan, 14 hilabetetan martxan.

```
Arriskuaren arabera doitutako eraikuntza-kostua = 900.000 × 1,4 = £1.260.000
5 urteko TCO:
  erosi   = 180.000 × 5 = £900.000
  eraiki  = 1.260.000 + 150.000 × 5 = £2.010.000

Atzerapen-terminoa: sistemak hilean £40.000 aurrezten ditu bikoiztutako ebaluazioetan;
eraikuntza erosketa baino 10 hilabete beranduago iristen da.
CoD = 10 × 40.000 = £400.000

Konparazio eraginkorra: £900.000 (erosi) vs £2.010.000 + £400.000 = £2.410.000 (eraiki)
```

Erosketak gutxi gorabehera £1,5 milioiko aldearekin irabazten du bost urtean, eta eraikuntza-estimazioaren beraren ondoren lerro bakar handiena atzerapenaren kostua da, capex-konparazio hutsak inoiz azaleratuko ez lukeena.

## Software ingeniaritzarekin lotura

Analisi honetatik entrega-praktikara zuzenean transferitzen diren diziplinak: **aurrekoetan oinarritutako arrisku-doikuntza** — Mott MacDonald-en igoera Green Book-aren baikortasun-alborapenaren software-baliokidea da, mekanikoki aplikatua, beraz taldeek salbuespenak eskatu behar dituzte, beren estimazioa salbuespena dela suposatu beharrean; **konparatzailearen zintzotasuna** — eraikitzearen alternatiba erosteko aukera onena eskuragarria da, ez "ezer", eta horrek zuzenean lotzen du [gastu publikoko aukera-kostuarekin](../aukera-kostua-gastu-publikoan/); eta **TCO konparazio zintzoa** — eraikitzeko proposamen orok erosteko aukera baten [jabetza-kostu osoarekin](../jabetza-kostu-osoa-gobernuko-it-an/) alderatu behar da, ez haren prezio-zerrendarekin. Eraikitzeak benetan irabazten duenean, eraikuntza-denbora gehigarriaren [atzerapenaren kostua](../atzerapenaren-kostua-programa-publikoetan/) esplizituki prezioztatu behar da negozio-kasuan, denborak axolarik ez duela dioen ustezko hipotesi gisa utzi beharrean.

## Tranpak

- **Saltzailearen prezio-zerrenda arriskuaren arabera doitu gabeko eraikuntza-estimazio batekin alderatzea**: honek eraikuntza bi aldiz hobetsita aurkezten du, kostuan eta egutegian.
- **Barne-lana zero prezioan**: funtzio publikoko ingeniaritza-denbora "doakotzat" hartzen da sailaren langile-aurrekontuan dagoelako, eta horrek ezkutatzen du talde horrek egin zezakeen beste lanaren aldean duen benetako aukera-kostua.
- **Bi norabideetan prezioztatu gabeko lotura (lock-in)**: saltzailea uzteko eta datuen eramangarritasunaren kostuak errealak dira, baina baita eraikuntza pertsonalizatu baten bus-faktorea eta bizitza osoan zehar etxeko talde txiki eta ordezkatzen zaila mantentzearen mendekotasuna ere.
- **Misio-bereizgarritasuna hodietarako aldarrikatzea**: "hau gure muina da" integrazio-middleware-ari edo dokumentu-biltegi bati buruz esatea — probatu ea herritar batek edo kasu-langile batek inoiz jabetuko litzatekeen azpian zein dabilen.

## Iturriak

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
