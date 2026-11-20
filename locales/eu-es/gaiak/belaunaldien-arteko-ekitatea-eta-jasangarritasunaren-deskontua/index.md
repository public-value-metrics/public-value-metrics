# Belaunaldien arteko ekitatea eta jasangarritasunaren deskontua

Etorkizuneko kostuak eta onurak egungo baliora deskontatzea ebaluazio publikoko praktika estandarra da —ikus [gizarte-deskontu-tasa](../gizarte-deskontu-tasa/)—, baina deskontu-tasa positibo orok, hamarkadetan edo mendeetan konposatuta, urruneko etorkizuna zerorantz txikitzen du gaurko terminoetan. Mende bat edo gehiagora ondorioak dituzten erabakietan —klima-aldaketa, hondakin nuklearrak, biodibertsitate-galera, pentsioen jasangarritasuna—, egitate matematiko hori etiko bihurtzen da: deskontu estandarrak etorkizuneko belaunaldiei egindako kalte katastrofikoa, egungo balioaren terminoetan, ia saihestea merezi ez duen gisa ager dezake.

## Zergatik den garrantzitsua

Ramsey-ren ekuazioak, Frank Ramsey-k 1928an eratorriak, deskontu-tasa bi osagaitan deskonposatzen du: denbora-lehentasun hutsa (δ, orain geroago baino zenbat nahiago dugun, aberastasunarekiko independenteki) eta aberastasun-hazkundearen efektua (η×g, zenbat deskontatzen dugun etorkizuneko belaunaldiak aberatsagoak izango direla espero delako, eta, beraz, libra gehigarri batek haientzat gutxiago axola duelako). Erresuma Batuko Green Book-aren epe luzeko deskontu-tasa estandarra ekuazio horretan oinarritzen da eta *beheranzko* egutegi bat jarraitzen du tasa laun baten ordez; diseinua Martin Weitzman-en «gamma deskontua» lanean sustraitua dago, eta erakusten du etorkizuneko deskontu-tasa bera ziurgabea denean, aplikatu beharreko tasa baliokide-ziurra denboran beheranzkoa dela matematikoki, tasa baxuko eszenatokiek nagusitzen direlako zenbat eta urrunago begiratu. Sir Nicholas Stern-ek zuzendutako Stern Review on the Economics of Climate Change-k (2006) eztabaida etikoa harago eraman zuen: Sternek argudiatu zuen denbora-lehentasun hutsa zerotik gertu ezarri behar zela (δ ≈ %0,1 erabili zuen, zibilizazioa amaitzeko hondamendiaren probabilitate txikia soilik islatuz, ez orainaren aldeko benetako lehentasuna), eta horrek Green Book-eko ohiko praktikak baino askoz deskontu-tasa eraginkor txikiagoa sortu zuen eta, horren arabera, klima-ekintzaren aldeko egungo kasu askoz handiagoa. Kritikariek (nabarmen William Nordhaus-ek) argudiatu zuten Stern-en zerotik gertuko tasa etikoki defendagarria zela baina benetan behatutako aurrezki- eta inbertsio-portaerarekin bateraezina. Desadostasuna ez da oin-ohar tekniko bat: bi ekonomialari berdin zorrotzek azken batean oso ondorio desberdinetara irits daitezen zergatirik handiena da, egungo belaunaldiak etorkizunaren alde zenbat sakrifikatu behar duen, eta horregatik epe luzeko inbertsio publikoen ebaluazioa onartzen duen softwareak bere deskontu-hipotesiak agerian jarri behar ditu kalkulu-orri baten lehenespenean ezkutatu beharrean.

## Matematika

```
Ramsey-ren ekuazioa:   r = δ + η × g

  r = gizarte-deskontu-tasa
  δ = denbora-lehentasun hutsa (pazientzia-eza tasa, aberastasunarekiko independentea)
  η = kontsumoaren utilitate marjinalaren elastikotasuna (kontsumo gehigarriaren
      balio beherakorra jendea aberasten den heinean)
  g = biztanleko kontsumoaren hazkunde-tasa esperoa

Green Book-en epe luzeko beheranzko egutegia (gutxi gorabeherakoa, argitaratutako uneko tarteak):
  0–30 urte:     %3,5
  31–75 urte:    %3,0
  76–125 urte:   %2,5
  126–200 urte:  %2,0
  201–300 urte:  %1,5
  301+ urte:     %1,0

Stern Review parametroak: δ ≈ %0,1, η = 1, g ≈ %1,3  → r ≈ %1,4
```

## Adibide landua

**100 urte barru saihestutako kalte-£1-ren gaurko balioa**, hiru deskontu-erregimenetan:

```
Green Book-eko epe laburreko tasa laua (%3,5, 100 urtez konstante):
  EB = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 penike)

Green Book-eko beheranzko egutegia (%3,5 1–30 urteetan, %3,0 31–75 urteetan,
%2,5 76–100 urteetan):
  faktorea(1–30)   = 1,035^30  ≈ 2,807
  faktorea(31–75)  = 1,03^45   ≈ 3,782
  faktorea(76–100) = 1,025^25  ≈ 1,854
  faktore osoa ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  EB = 1 / 19,68 ≈ £0,051   (5,1 penike)

Stern motako denbora-lehentasun hutsa zerotik gertu (r ≈ %1,4 laua):
  EB = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 penike)
```

Mende bat barru saihestutako kalte-£1 berak 3,2p, 5,1p edo 25p balio du gaur, deskontu-konbentzio zein erabiltzen den soilik kontuan hartuta: ia zortzi aldiz bitarteko aldea, aldez aurretik kostu handia eta mende bat geroago itzulera duen klima-arintze proiektu batek egungo balio garbi positiboaren atalasea gainditzen duen ala ez erabakitzen duena. Hau da gaiaren abisu zentralaren mekanismoa: edozein tasa lau esanguratsuki positiboan, nahikoa urruneko etorkizuneko kaltea aritmetikoki ezabatzen da ebaluaziotik, bere benetako larritasuna edozein dela ere.

## Software ingeniaritzarekin lotura

- Epe luzeko ebaluazio edo negozio-kasuko edozein tresnak (azpiegitura, klimara egokitzapena, pentsioen modelizazioa) Green Book-aren *beheranzko* egutegia ezarri behar du, ez tasa lau bakar bat: tasa laun lehenetsiak isilean egungo Erresuma Batuko gobernuaren gidak zehazten duena baino etorkizunaren aurkako alborapen askoz indartsuagoa txertatzen du.
- Deskontu-tasa eta denbora-horizontea beti agerian dauden parametro auditagarri gisa erakutsi behar dira ebaluazio-softwarean, kalkuluak horiekiko duen sentikortasuna esplizituki erakutsiz (goiko adibide landuan bezala); tasa konfigurazio-fitxategi batean ezkutatzeak hain zuzen Stern-Nordhaus eztabaidak ohartarazten duen «aukera etiko ezkutua» gonbidatzen du; hau [kapital naturalaren kontabilitatean](../natura-kapitalaren-kontabilitatea/) egindako gardentasun-puntuarekin parekatzen da eta [gizarte-deskontu-tasa](../gizarte-deskontu-tasa/) gaiaren oinarrian dago orokorrean.
- Programa baten onurak esplizituki belaunaldien artekoak direnean (uholde-babesa, kapital naturalaren berreskuratzea, epe luzeko azpiegitura digitala), [gizarte-kostu-onura analisiak](../gizarte-kostu-onura-analisia/) gutxienez bi deskontu-hipotesiren pean jakinarazi behar ditu emaitzak (Green Book estandarra eta tasa baxuko sentikortasun-kasua), puntu-estimazio bakar baten ordez, erabakitzaileek deskontu-tasaren aukerak bakarrik erantzuna nola mugitzen duen ikus dezaten.

## Tranpak

- **EGB deskontatu bakar bat sentikortasun-tarterik gabe aurkeztea**: epe luzeko proiektuetan deskontu-tasak bakarrik erantzuna zenbat aldatzen duen kontuan hartuta, tasa bakarreko EGBk zehaztasuna nabarmen gainestimatzen du; jakinarazi beti gutxienez Green Book estandarra eta tasa baxuko eszenatokia hartzen dituen tartea.
- **Epe laburreko tasa laua (%3,5) mende anitzeko ebaluazio bati aplikatzea**: Green Book-aren gidak berak beheranzko egutegia zehazten du hain zuzen tasa laua 30 urte inguru baino haratago desegokitzat jo zelako; hala ere erabiltzeak epe luzeko kostuak gutxiesten ditu.
- **δ (denbora-lehentasun hutsa) parametro hutsik tekniko gisa tratatzea**: Stern-en zerotik gertuko balioa eta Green Book-aren balio inplizitu altuagoa biak orainak etorkizunari zenbat pisu zor dion posizio etiko gisa bakarrik defendagarriak dira, ez zenbaki enpirikoki «zuzen» edo «okerrak»; softwareak hipotesia ikusgai jarri behar du, zifra bakarra objektiboki zuzentzat aurkeztu beharrean.

## Iturriak

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
