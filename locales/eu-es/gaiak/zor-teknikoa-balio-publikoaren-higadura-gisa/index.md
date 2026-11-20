# Zor teknikoa balio publikoaren higadura gisa

Zor teknikoa Ward Cunningham-ek 1992an proposatutako metafora da, iraganeko kodeketa-erabaki bizkorrek ekarriko dituzten etorkizuneko kostuak izendatzeko: **kapital** bat (zor den konponketa-lana) eta **interes** bat (entregari etengabe eragiten dion zama). Gobernuko IT ondare zahar batean, interes hori zuzenean balio publikotik ordaintzen da: lege-aldaketen entrega motelagoa, herritarrei begirako zerbitzuen hutsegite-tasa handiagoak, eta sistemari segurtasunez heltzeko gai den jende-multzo gero eta txikiagoa.

## Zergatik den garrantzitsua

Erresuma Batuko gobernu-sailetako mainframe eta COBOL garaiko sistema zaharrek (HMRC eta DWP aipatuenen artean) ongi dokumentatutako eta gero eta handiagoa den arrisku bat dute, eta National Audit Office-k behin eta berriz adierazi du, besteak beste bere *Digital Transformation in Government* txostenean (<https://www.nao.org.uk/>): plataforma zahartuak, aldatzeko garestiak, gero eta zailago babesteko, eta ordezkatzen den baino azkarrago erretiratzen ari den langile espezializatuen mende. Sektore pribatuko atzeratutako lanen zerrenda batek ez bezala, zor honek zuzenean herritarren eta haien lege-eskubideen artean dago: segurtasunez alda ezin daitekeen prestazio-kalkuluaren motor bat politika-entregaren murrizketa bat da, ez ingeniaritzako eragozpen soil bat. Universal Credit-eko IT programaren 2013ko berrabiaraztea, National Audit Office-k jatorrizko eraikuntzak ez zuela diruaren truke baliorik emango eta softwarearen aktiboaren zati handi bat hondatu behar izan zela aurkitu zuenean, prezioztatu gabeko zor teknikoak programa publiko bizi eta ministerialki ikusgarri bati harrapatzearen adibide kanonikoa da.

## Matematika

```
SQALE kapitala = Σ urraketa guztiak (konponketa-denbora) × garatzailearen kostu-tasa
Zor teknikoaren ratioa (TDR) = konponketa-kostua / birgaratze-kostua × 100
                    (SonarQube mailak: A ≤% 5, B ≤% 10, C ≤% 20, D ≤% 50)

Interesa (amortizazioa justifikatzen duen zenbakia):
  interesa/urte = Δ entrega-abiadura × abiadura-unitate bakoitzaren balioa
                + Δ herritarrei begirako gertakarien tasa × gertakari bakoitzaren kostua
                + espezialisten primak × eragindako langile-kopurua
Amortizazio-kasua = PV(horizontean saihestutako interesa) − konponketa-kostua
               (Green Book-aren gizarte-deskontu tasaz deskontatuta, ikus
               social-discount-rate.md)
```

Kapitalak erantzukizuna adierazten du; interesak du kontu publikoen batzorde bati inbertsio-kasua aurkezten diona.

## Adibide landua

4GL zahar batean idatzitako 250.000 lerroko erreklamazioak prozesatzeko motor bat. CAST Appmarq erreferentzia erabiliz, kode-lerro bakoitzeko ≈ $3,61 zor teknikoaren kapital (≈ £2,85, ohiko bihurketarekin):

```
Kapitala ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ % 16 (C maila)
```

Neurtutako interesa: sailak hiru kontratista espezialista mantentzen ditu ingeniari nagusi estandarren tasa baino % 40ko egun-tasa-prima batekin, barne-trebetasunak erori direlako; sei pertsonako talde batean £180.000/urteko gehigarria. Sistemak, gainera, urtean lau prozesatze-geldialdi larri eragiten ditu, bakoitzak 5.000 erreklamatzailerentzat erabakiak etenez eta kontaktu-zentrora birbideratuz, deiko £25 inguruan:

```
Interesa ≈ £180.000 (trebetasun-prima)
         + 4 × 5.000 × £25 = £500.000 (birbideratutako kontaktuaren kostua)
         ≈ £680.000/urte
```

Errendimendu txarreneko moduluen konponketa zuzenduak £1.200.000 kostatzen ditu, eta interesa % 70 murriztea modelatzen da:

```
Interesaren murrizketa = 0,70 × 680.000 = £476.000/urte
Berreskuratze-epea ≈ 1.200.000 / 476.000 ≈ 2,5 urte
```

Zuzenketak axola du: gutxitan ukitzen den kodea konpontzeak ez du ezer erosten, interesa aldaketa-maiztasuna eta zor-dentsitatea biak gailurrean dauden tokian kontzentratzen baita.

## Software ingeniaritzarekin lotura

Zor teknikoaren kasua "kodea zaharra da" baino gehiagora igotzen duen balio publikoaren planteamendua: adierazi sistema zaharren ondarea entrega-gaitasun galdua non kontzentratzen den inbentario gisa, eta lotu esplizituki [jabetza-kostu osoarekin](../jabetza-kostu-osoa-gobernuko-it-an/), interesa TCO lerroan egotea dagokion funtzionamendu-kostu bat baita, finantzek inoiz eskatu ez badute ere. Zorrez betetako sistemek [zibersegurtasun](../sektore-publikoko-ziberseguritatearen-balioa/)-esposizio neurrigabea ere izaten dute, adabaki-erritmoa eta zor-dentsitatea lotuta daudelako: adabaki ezin daitekeen sistema zahar bat interesa liberetan baino gertakari-arriskuan ordaintzen duen zor teknikoa da. Eta konponketa-versus-eginbide trukaketa orok [atzerapenaren kostuaren](../atzerapenaren-kostua-programa-publikoetan/) erabaki bat da: zorra amortizatzeak hurrengo lege-aldaketa atzeratzen du, eta horrek bere CoD propioa du, aurreztutako interesaren aldean pisatu behar dena.

## Tranpak

- **Kapitala bakarrik jakinaraztea**: interes-zifrarik gabeko konponketa-estimazio handi eta beldurgarri batek ez dio ezer justifikatzen gastua onartzen duenari.
- **Tresnek sortutako zor-zifrak hitzez hitz hartzea**: SQALE motako eskanerrek arau-urraketak zenbatzen dituzte; zor-mota garestia (arkitektura-erabakiak eta dokumentatu gabeko negozio-arau zaharrak) galtzen dute, bitxikeriak nabarmentzen dituzten bitartean.
- **"Berridazteak dena saihesten du"**: ordezkapen-programek beste edozein negozio-kasuren diziplina bera gainditu behar dute (kostu kontrafaktuala, arrakasta-probabilitatea eta deskontua), ez salbuespen bat izan, 2013ko Universal Credit-en berrabiarazteak frogatu zuen bezala.
- **Zor-zeroaren utopismoa**: zor-maila optimoa ez da zero; zorra lehenago entregatzea erosi zuen palanka bat da. Galdera bizia beti interes-tasa da, ez zorra existitzen den ala ez.

## Iturriak

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
