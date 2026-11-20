# DORA metrikak balio publikorako

DORA (DevOps Research and Assessment) metrikak —hedapen-maiztasuna, aldaketen epea, aldaketen hutsegite-tasa eta zerbitzua berreskuratzeko denbora, eta bosgarren gisa fidagarritasuna— software-industriako entrega-errendimenduaren erreferentzia balioztatuenak dira. Sektore publikoko kontu-emate terminoetara itzulita, bakoitza ordezko zuzena da balio publikoa herritarrarengana zein azkar eta zein segurtasunez iristen den neurtzeko.

## Zergatik den garrantzitsua

DORAren hamarkada bateko ikerketak, urtero *Accelerate State of DevOps Report* gisa argitaratua (Forsgren, Humble eta Kim-en metodologia, gaur egun Google Cloud-ek zuzendua), taldeak elite, goi, ertain eta behe mailako errendimendutan multzokatzen ditu. Elite taldeek eskatzean hedatzen dute, commit-etik produkziora egun bat baino gutxiago behar dute, aldaketen %5 inguru huts egiten dute eta ordu bat baino gutxiagoan berreskuratzen dira; behe mailako taldeek hilean behin edo gutxiagotan hedatzen dute, hilabeteak behar dituzte, aldaketen %40 inguru huts egiten dute eta asteak behar dituzte berreskuratzeko. Gobernuan hauek ez dira ingeniaritzako ageriko metrikak: Government Digital Service-ren Service Standard-ak taldeei eskatzen die «maiz iteratu eta hobetu» eta erabiltzaileen beharrei azkar erantzuteko gai izan, eta modu seguruan eta maiz hedatu ezin duten ministerioak egiturazko aldetik ezin dute estandar hori bete, haien erabiltzaile-ikerketak edozer esanda ere. Cabinet Office-ren eraginkortasun digitalaren lanak aurkitu zuen herritar bat transakzio digital huts egin edo motel batetik telefono- edo paper-kanalera bideratzea garestia dela: GDSren 2012ko Digital Efficiency Report-ek estimatu zuen transakzio digital batzuek 20p bezain gutxi kostatzen zutela, telefono- edo aurrez aurreko kontaktuek £8,62 arte kostatzen duten bitartean; beraz, jendaurreko zerbitzu baten aldaketa-hutsegiteak ez du ingeniaritza-denbora bakarrik kostatzen, benetako liberak ere bideratzen ditu kontaktu-zentroaren aurrekontura (ikus [kanal-aldaketaren aurrezkiak](../kanal-aldaketaren-aurrezpenak/)).

## Matematika

```
Hedapen-maiztasuna     = produkzio-hedapenak / denbora
Aldaketen epea         = t(hedapena) − t(commit), mediana
Aldaketen hutsegite-tasa = huts egindako aldaketak / aldaketak guztira × 100
Berreskuratzeko denbora (MTTR) = t(berreskuratua) − t(hutsegitea), mediana
Fidagarritasuna        = SLO betetzea (erabilgarritasuna, latentzia, zuzentasuna)
```

Balio publikorako itzulpenak:

```
Epea           → asteak pipeline-ean × CoD, ikus cost-of-delay-in-public-programmes
Hutsegite-tasa → herritarrek ikusten duten intzidentzia-tasa: CFR × bideratutako
                 kontaktu-zentroko dei bakoitzaren kostua (edo huts egindako transakzio
                 legal bakoitzarena)
Berreskuratzea → zerbitzu-etenaren kaltea: MTTR × (orduko blokeatutako
                 erreklamazio/eskaerak) × unitate bakoitzeko ondorengo kostua edo ongizate-galera
Fidagarritasuna → onura-deskontua: %99ko erabilgarritasuneko zerbitzu batek
                 modelatutako onuraren ≈ 0,99 ematen du — entregaren baliokidea
                 hartze- edo betetze-gabeziarena
```

## Adibide landua

Tokiko erakunde baten prestazio-eskaeren ataria garatzen duen taldea, entrega-ingeniaritzan inbertitu aurretik eta ondoren:

```
                    Aurretik    Ondoren
Hedapenak           hilero      astero
Epea                8 aste      5 egun
CFR                 %30         %10
MTTR                3 egun      4 ordu
```

Taldeak urtean 25 hobekuntza inguru ematen ditu, batez besteko balioa £8.000/aste ([atzerapenaren kostua](../atzerapenaren-kostua-programa-publikoetan/)). Epea gutxi gorabehera 7,3 aste murrizteak hobekuntza bakoitzaren onura-fluxua aurreratzen du: 25 × 7,3 × 8.000 ≈ **£1.460.000/urte** lehenago emandako balioan. Hutsegite-tasari dagokionez: 25 × (0,30 − 0,10) = urtean 5 aldaketa huts gutxiago; atari publiko batean huts egindako aldaketa bakoitzak, normalean, estimatuta 2.000 herritar bideratzen ditu telefono-kanalera £8,62-tan 20p-en ordez, hau da, intzidentziako kostu garbia ≈ £8,42 × 2.000 ≈ £16.840; beraz, 5 intzidentzia saihesteak ≈ **£84.200/urte** aurrezten du. Entrega-ingeniaritzako inbertsioa beste edozein balio publikoko kasuren moneta berean baloratzen da.

## Adibide landuaren jarraipena: fidagarritasuna

Atariak %99,5eko helburuaren ordez %97ko erabilgarritasunarekin funtzionatzen badu, eta geldialdiaren ehuneko-puntu bakoitza erreklamazioen %2ren abandonatze gisa modelatzen bada, zerbitzuak modelatutako urteko £2M-ko onuraren 0,975 inguru ematen du: urteko £50.000-ko onura-deskontua, funtzionamendu-denboraren panel hutsak inoiz azaleratzen ez duena.

## Software ingeniaritzarekin lotura

DORA metrikak zerbitzu publiko baten funtzionamendu-metrikak dira beste jantzi batekin: epea [zerbitzu-estandarrei eta transakzio-metrikei](../zerbitzu-estandarrak-eta-transakzio-metrikak/) dagokie; aldaketen hutsegite-tasa berrlan eta kexa-tasei; MTTR zerbitzu legal bat erreklamatzaileentzat zenbat denboran eskuragarri ez dagoen adierazten du. Hobekuntza-teknikak bi norabidetan transferitzen dira, biak kontu-emate murrizketapean dauden ilara-sistemak direlako; ikus [fluxu-metrikak gobernuko entregan](../fluxu-metrikak-gobernuko-entregan/) azpiko ilara-matematikarako. Kontuan hartu, halaber, DORAren 2025eko aurkikuntza: AIren erabilerak throughput handiagoarekin dauka lotura baina egonkortasun *okerragoarekin*; eraginkortasuna eta albo-ondorioak dituen esku-hartzea, hain zuzen talde honetako [AI produktibitatea](../adimen-artifizialaren-produktibitatea-sektore-publikoan/) gaiak lantzen duen onura garbiaren analisia.

## Tranpak

- **Metrikak manipulatzea**: hedapen-kopuruak puztea ez-eragiketa diren bertsioekin, edo hotfix-ak aldaketa-hutsegiteen zenbaketatik kanpo uztea. Definitu gertaerak zerbitzu-estandar legal batek «transakzio arrakastatsua» definitzen duen bezain zehazki.
- **Ministerioen arteko sailkapen-taulak**: DORAren multzoek entrega-praktikak alderatzen dituzte, ez arrisku-profil desberdineko zerbitzuak; «goi» mailatzat jotako zerga-ordainketa sistema jarrera egokia izan daiteke «elite» arduragabea litzatekeen lekuan, bermatze-eskakizunak kontuan hartuta.
- **Metrika bakarra optimizatzea**: aldaketen hutsegite-tasarik gabeko abiadura throughput-egonkortasun trukaketa klasikoa da; jakinarazi lau metrikak batera, ez puntuazio bakar gisa.

## Iturriak

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
