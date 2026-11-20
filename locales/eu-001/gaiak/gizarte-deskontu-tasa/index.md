# Gizarte-deskontu tasa

Gizarte-deskontu tasak etorkizuneko kostu eta onurak egungo balioetara bihurtzen ditu, hamarkadetan zehar sakabanatutako irabaziak dituzten programak oinarri komun batean alderatu ahal izateko. HM Treasury-ren Green Book-ak deskontu-egutegi beheranzko bat agintzen du, lehen 30 urteetarako % 3,5ean ainguratua eta Ramsey-ren formulan oinarritua: zenbaki zehatz eta aipagarri bat, klima-politika edo azpiegiturak bezalako epe luzeko konpromisoei aplikatzen zaienean eztabaida politiko eta etiko bizia bihurtu dena.

## Zergatik den garrantzitsua

Gaur jasotzen den onura-libera batek ez du 30 urte barru jasotzen denak adina balio, zati batean denbora-lehentasun hutsagatik (pertsonek eta gizarteek gauza onak lehenago nahiago dituzte) eta zati batean hazkundeagatik (etorkizuneko gizartea aberatsagoa izango dela espero da, beraz libera batek garrantzi txikiagoa du marjinan). Green Book-aren 6. eranskinak Erresuma Batuko deskontu-tasa estandarra Ramsey-ren formulatik eratortzen du, denbora-lehentasun hutsaren tasa, kontsumoaren hazkunde-tasa esperoa eta kontsumoaren erabilgarritasun marjinalaren elastikotasuna konbinatuz, eta urteko % 3,5eko tasa argitaratua ematen du 0-30 urteetarako, 31. urtetik aurrera egutegi argitaratu batean beheranzkoa (% 1era arte 301. urtetik aurrera). Egutegi hau hain zuzen existitzen da, mendebete batean metatutako % 3,5eko tasa konstante batek ia edozein epe luzeko onura (80 urte barru bizitzak salbatzen dituen uholde-babes bat, 100 urte barru kaltea saihesten duen karbono-murrizketa bat) gaurko balioan arbuiagarri bihurtuko lukeelako, eta Treasury-k ondorio etiko sinesgaitza zela iritzi zuen benetan bizitza luzeko azpiegituretan eta ingurumen-erabakietan.

Deskontu-tasa eztabaidatua da hain zuzen aukera ez delako parametro tekniko neutroa: gaur gizarte batek oraindik jaio gabeko pertsonengatik zenbat sakrifikatu behar duen buruzko judizio bat kodetzen du. Klima-aldaketaren Ekonomiari buruzko Stern Review-k (2006) zerotik hurbileko deskontu-tasa bat erabili zuen (denbora-lehentasun hutsa % 0,1 ingurukoa), etorkizuneko belaunaldien ongizatea merkatu-tasen antzeko batean deskontatzea etikoki defendaezina dela argudiatuz, kaltea (klima-aldaketa katastrofikoa) itzulezina denean. Kritikariek (batez ere William Nordhaus-ek) argudiatu zuten Stern-en zero ondoko tasak berehalako klima-gastuaren aldeko kasua gehiegi puztu egiten zuela, ia edozein egungo kostu justifikatuta ikusarazten zuelako ia deskontatu gabeko etorkizuneko onura baten aurrean. Desadostasuna ez zen matematikari buruzkoa; zein esparru etikok ezarri behar zuen tasa zen, eta deskontu-tasa politika-aukera bat dela, ez sarrera aktuarial hutsa, azaltzeko adibide estandarra izaten jarraitzen du.

## Matematika

Green Book-aren tasaren azpiko Ramsey-ren formula:

```
r = ρ + η·g

non:
  r = gizarte-deskontu tasa
  ρ = denbora-lehentasun hutsaren tasa (pazientzia-eza + hondamendi-arriskua)
  η = kontsumoaren erabilgarritasun marjinalaren elastikotasuna
  g = per capita kontsumoaren urteko hazkunde-tasa esperoa
```

Green Book-aren egutegi beheranzkoa (6. eranskina, ilustratiboa — begiratu egungo edizioa argitaratutako taula zehatzerako):

```
0–30 urteak:    3,5%
31–75 urteak:   3,0%
76–125 urteak:  2,5%
126–200 urteak: 2,0%
201–300 urteak: 1,5%
301+ urteak:    1,0%
```

Etorkizuneko diru-kopuru baten egungo balioa:

```
PV = FV / (1 + r)^t
```

## Adibide landua

**Uholdeen aurkako babes-eskema**: proiektu batek £10 milioiko uholde-kalte saihestua ematen du 40. urtean.

% 3,5eko tasa lau bat erabiliz: PV = 10.000.000 / (1,035)^40 ≈ £2,52 milioi; onurak txikia dirudi.

Green Book-aren egutegi beheranzkoa erabiliz (% 3,5 0-30 urteetan, % 3,0 ondoren), kalkuluak % 3,5ean metatzen du lehen 30 urteetan eta % 3,0an 31-40 urteetan:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 milioi
```

Egutegi beheranzkoak apur bat handitzen du epe luzeko onuren egungo balioa tasa lau altu baten aldean; hori da egutegiaren xede esplizitua, mende osorako % 3,5eko tasa lau batek 100. urteko £100 milioiko onura £3,3 milioitik beherakoraino deskontatuko lukeelako.

**Azpiegitura digitala**: orain £4 milioi kostatzen duen gobernuaren hodei-migrazio batek urtean £500.000ko legatu-mantentze kostua saihestea espero da 15 urtez. % 3,5ean, anualitate horren egungo balioa ≈ £500.000 × 11,52 (% 3,5eko 15 urteko anualitate-faktorea) ≈ £5,76 milioi da, £4 milioiko kostua erraz gaindituz: egungo balio garbi positiboko kasu bat, zentzugabeki aukeratutako tasa altuago batekin nabarmen ahulagoa litzatekeena (% 7an, anualitate-faktoreak 9,11ra jaisten da, £4,56 milioi emanez, oraindik positiboa baina marjina askoz meheagoarekin).

## Software ingeniaritzarekin lotura

Software-negozio kasu gehienak 3-5 urtez exekutatzen dira, % 3,5eko banda lauaren barruan, beraz egutegi beheranzkoak gutxitan eragiten du zuzenean; baina azpiko diziplina garrantzitsua da aktibo-bizitza luzea duen gobernuko edozein teknologia-inbertsiotarako (plataforma nazional bat, datu-azpiegituren programa bat, hamarkada anitzeko kontratu bat):

- Erabili Green Book-aren tasa argitaratua, finantza pribatuetatik hartutako barne "langa-tasa" bat baino; auditoreek eta Treasury-ren berrikusleek egutegi estandarra espero dute.
- Urte asko geroago gauzatzen diren onuretarako (plataforma baten epe luzeko mantentze-aurrezkiak, datu irekien ekosistema baten balio metagarria; ikus [datu irekien balioa](../datu-irekien-balioa/)), deskontu-aukerak negozio-kasu bat positibotik negatibora alda dezake; egin tasa eta horizontea hipotesi esplizitu, ez lehenetsi ezkutu.
- Honek zuzenean elikatzen du [Green Book-aren balioespena](../green-book-ebaluazioa/), deskontatutako kutxa-fluxua formalki eskatzen duen bost kasuko eredua, eta [ongizatearen balioespena](../ongizatearen-balioespena/), non deskontuaren galdera bera sortzen den diruz kanpoko ongizate-onuretarako.
- Ikus, halaber, [belaunaldien arteko ekitatea eta jasangarritasun-deskontua](../belaunaldien-arteko-ekitatea-eta-jasangarritasunaren-deskontua/), Stern vs. Nordhaus eztabaida ingurumen- eta klima-teknologiako inbertsioetan zehazki aplikatuta.

## Tranpak

- **Tasa lau bat erabiltzea oso epe luzeetarako.** Green Book-aren egutegi beheranzkoa hain zuzen existitzen da tasa konstante batek benetan bizitza luzeko onurak gutxiesten dituelako; begiratu zein bandak aplikatzen den, ez lehenetsi % 3,5 osoan zehar.
- **Deskontu-tasa etikoki neutrotzat hartzea.** Stern-Nordhaus eztabaidak erakusten du tasak etorkizuneko belaunaldiei buruzko balio-judizio bat kodetzen duela; aldatzeak zein programa justifikatuta dauden aldatzen du, beraz esan eta defendatu behar da, ez kalkulu-orri baten lehenespen batean ezkutatu.
- **Gizarte-deskontu tasa kapital-kostu pribatuarekin nahastea.** Gobernuaren zorpetze-kostuak eta sektore pribatuko langa-tasak Ramsey-tik eratorritako gizarte-tasatik bereizitako kontzeptuak dira, eta balioespen publiko batean bata bestearen ordez erabiltzeak, normalean, emaitza distortsionatuko du epe laburreko etekinen alde.
- **Kutxa-fluxu errealak eta nominalak koherentziarik gabe deskontatzea.** Green Book-aren tasa tasa erreala da (inflazioari doitua); kutxa-fluxu nominalak horrekin deskontatzeak egungo balioak nabarmen gutxiesten ditu.

## Iturriak

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
