# Gizarte-kostu-onura analisia (SCBA)

Gizarte-kostu-onura analisiak politika edo programa baten kostu eta onura guztiak (merkatukoak eta merkatuz kanpokoak) diru-unitate komun batera bihurtzen ditu, etorkizuneko fluxuak egungo balioraino deskontatzen ditu eta saldoa kalkulatzen du zenbaki bakar bat lortzeko: proposamen honek gizartea hobeto uzten al du, eta zenbat?

## Zergatik den garrantzitsua

SCBA da [Green Book-aren balioespenaren](../green-book-ebaluazioa/) kasu ekonomikoko metodo kuantitatibo lehenetsia: HM Treasury-ren gidaliburuak eskatzen du proposamenek gizarte-balio garbi eguneratu (NPSV) positiboa frogatzea onurak sinesgarriki diruz neur daitezkeen guztietan, ordaintzeko borondatea merkatuz kanpoko ondasunen oinarrizko balioespen-printzipio gisa erabiliz
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
5. kapitulua). Hark ezartzen duen diziplina da "gizarte" kostu-onura analisia ez dela sektore pribatuko inbertsio-balioespen baten ekintza bera: transakzioaren alderdi ez diren hirugarrenei eragiten dieten kostu eta onurak ere sartu behar ditu (kanpo-efektuak), [gizarte-deskontu tasa](../gizarte-deskontu-tasa/) erabili behar du kapital-kostu komertzial baten ordez, eta [banaketa-haztapena](../banaketa-haztapena/) aplikatu beharko luke libera bat etxe pobre batentzat aberats batentzat baino garrantzitsuagoa denean.

SCBA hausten den tokian haren kritikariek espero duten lekuan hausten da: merkatu-baliokiderik ez duten ondasunak (aire garbia, elkarbizitza soziala, salbatutako bizi baten balioa) [adierazitako lehentasunen](../adierazitako-lehentasunen-balioespena/) edo [agerian utzitako lehentasunen](../agerian-utzitako-lehentasunen-balioespena/) metodoen bidez diruz neurtu behar dira, edo [itzal-prezio bat](../itzal-prezioak/) eraiki behar da. Diruz neurtzea zaila baino eztabaidatua denean, Green Book-ak berak gomendatzen du [kostu-eraginkortasunaren analisira](../kostu-eraginkortasunaren-analisia-gobernuan/) edo [irizpide anitzeko erabaki-analisira](../irizpide-anitzeko-erabakien-analisia/) itzultzea, inork sinesten ez duen zenbaki bat behartu beharrean.

## Matematika

```
NPSV = Σ [t=0 tik T ra] (Onura_t − Kostu_t) / (1 + r)^t

non:
  Onura_t = t urteko onura diruztatu guztiak, merkatuz kanpoko ondasunak barne,
            adierazitako/agerian utzitako lehentasunen edo itzal-prezioaren bidez balioetsiak
  Kostu_t = t urteko kostu diruztatu guztiak, baliabideen aukera-kostua barne
            (ikus ../opportunity-cost-in-public-spending/)
  r       = gizarte-deskontu tasa (HM Treasury-k % 3,5 ezartzen du, 30. urtetik
            aurrera tasa baxuagoetara jaisten dena, Green Book-aren A eranskinaren arabera)
  T       = balioespen-aldia

Onura-kostu erlazioa (BCR) = Σ PV(Onurak) / Σ PV(Kostuak)
```

1etik gorako BCR batek (edo zerotik gorako NPSV batek) gizarte-balio garbia adierazten du. Green Book-aren diruaren truke balioaren kategoriek (garraio- eta azpiegitura-balioespenean erabiltzen direnek) BCR tarteak etiketatzen dituzte: 1,0 azpitik, diruaren truke balio eskasa; 1,0-1,5, baxua; 1,5-2,0, ertaina; 2,0-4,0, altua; eta 4,0 gainetik, oso altua. Sentsibilitate-analisia (NPSV berriro exekutatzea hipotesi pesimista eta optimistekin) derrigorrezkoa da, ez aukerakoa, merkatuz kanpoko onura diruztatuek ziurgabetasun-tarte zabalak dituztelako.

## Adibide landua

**Toki-agintaritza**: udal batek £3 milioiko inbertsioa balioesten du bizikleta- eta oinezkoen sare berri batean, 20 urteko balioespen-aldian eta % 3,5eko deskontu-tasarekin.

```
Kostuak: £3 milioi kapitala 0. urtean, £50.000/urte mantentze-lanak (1-20. urteak)
PV(mantentze-lanak) ≈ £50.000 × 14,2 (20 urteko anualitate-faktorea % 3,5ean) ≈ £710.000
PV(kostuak) guztira ≈ £3,71 milioi

Onurak (guztiak DfT/WHOren balioespen-tresna argitaratuen bidez diruztatuak):
  Jarduera fisiko handiagotik datorren osasun-onura: £180.000/urte
  Absentismoaren murrizketa: £40.000/urte
  Pilaketaren murrizketa (autoko bidaia gutxiago): £60.000/urte
  Onura-fluxua guztira: £280.000/urte
PV(onurak) ≈ £280.000 × 14,2 ≈ £3,98 milioi

NPSV = £3,98 milioi − £3,71 milioi = +£0,27 milioi
BCR = 3,98 / 3,71 = 1,07 → diruaren truke balio "baxua"
```

Eskemak langa gainditzen du, baina zorrotz-zorrotz; osasun-onuraren estimazioa % 20 baxuagoa hartzen duen sentsibilitate-exekuzio batek (jarduera fisikoaren balioespenaren benetako ziurgabetasuna islatuz) BCR 1,0 azpira jaisten du, hain zuzen horregatik eskatzen du Green Book-ak sentsibilitate-taula izenburuko zenbakiarekin batera argitaratzea, ez estimazio zentrala bakarrik.

**Karitatea**: urtean £500.000 kostatzen duen haurren heriotza prebenitzeko programa bizitza estatistikoaren balioaren (VSL) bidez ebaluatzen da. Hau itzal-prezio bat da, ez behatutako merkatu-prezio bat, eta ia £2,1 milioi da (HM Treasury-ren 2023ko zifra eguneratua, berez adierazitako lehentasunen ikerketetatik eratorria). Urtean haur baten heriotza saihesteak, £500.000ko kostuaren aldean, 4,2ko BCR bat ematen du, diruaren truke balio "oso altua" erraz; baina emaitza osoa VSL zifran oinarritzen da, eta horregatik VSL erabiltzen duen edozein SCBAk hura hipotesi gisa ager dezala behar da, ez egitate gisa.

## Software ingeniaritzarekin lotura

SCBA gobernuko softwareko plataforma- eta azpiegitura-inbertsioen erabakietarako esparru naturala da: identitate-plataforma partekatu bat sailetako puntuko irtenbideekin alderatzeak, adibidez, merkatu-prezio propiorik ez duten onurak diruztatzea eskatzen du: bikoiztutako onboarding-kostuaren murrizketa, iruzur gutxiago eta zerbitzura iristeko denbora laburragoa. Azpiko zerbitzua eraikitzen duten ingeniariek espero beharko lukete programa-arduradunek analisi honetarako sarrerak eskatzea: transakzioen unitate-kostuak (ikus [transakzio bakoitzeko kostua](../transakzio-bakoitzeko-kostua/)), bolumen esperoak eta degradazio/geldialdi-kostuak. Inportatzeko diziplinarik garrantzitsuena: etorkizuneko onurak deskontatu, oinarri-lerro kontrafaktuala esplizituki izendatu (ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/)) eta ez aurkeztu inoiz puntuko estimazio bakar bat bere sentsibilitate-tartea gabe.

## Tranpak

- **Onurak bikoiztea kontatzea.** "Aurreztutako denbora" eta "denbora horretatik lortutako produktibitatea" onura-lerro bereiztzat zenbatzeak kasua gehiegi puztu egiten du; aurreztutako denbora da onura, haren ondorengo erabilera ez da onura gehigarri bat, bereizita ebidentziatu ezean.
- **Desplazatutako kostuak alde batera uztea.** Pilaketa errepide batetik bestera mugitzen duen eskemak, edo iruzurra kanal batetik bestera mugitzen duenak, ez du NPSV nagusiak adierazten duen onura garbia sortu; ikus [desplazamendua eta atribuzioa](../desplazamendua-eta-atribuzioa/).
- **Deskontu-tasa pribatua erabiltzea.** Gizarte-deskontu tasaren ordez kapital-kostu komertziala (esaterako % 8-10) aplikatzeak sistematikoki gutxiesten ditu epe luzeko onura publikoak, hala nola osasun- eta ingurumen-irabaziak; ikus [gizarte-deskontu tasa](../gizarte-deskontu-tasa/).
- **Eztabaidagaitza dena diruztatzea eta eztabaidatua dena modu lauso batean tratatzea.** Proposamen baten onuraren bi herenak aurrezki-efizientzia konfiantzaz diruztatu bat badira eta herena ongizate-irabazi ahul diruztatu bat, NPSV nagusiak zenbaki gogor bat eta bigun bat nahasten ditu isilean; jakinarazi bereizita.

## Iturriak

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
