# Zerbitzu digitalen estandarra

GOV.UK Service Standard (Zerbitzuen Estandarra) da gobernu zentraleko zerbitzu digital orok martxan jarri aurretik gainditu behar duen atea: argitaratutako 14 puntu, eta bitarteko panel independente batek eskuratze-fase bakoitzaren amaieran ebaluatzen ditu. «Eraiki zerbitzu publiko onak» lelo hutsetik gainditu/ez gainditu erabaki bihurtzen duen mekanismoa da, aztarna dokumentatuarekin, eta 2012ko Government Digital Strategy-ren «digital by default» (lehenetsita digitala) agindu horren oinordeko zuzena.

## Zergatik den garrantzitsua

Service Standard ezarri aurretik, gobernuko IT hutsegiteak ia inoiz ez ziren ikusten abian jarri arte, eta gutxitan egozten zitzaizkion norbaitek seinala zezakeen erabaki bati. 2012ko Government Digital Strategy-k ministerioei konpromisoa hartarazi zien jendaurreko transakzio-zerbitzu bolumen handienetako 25 «digital by default» berriz diseinatzeko, eta betetze-mekanismo batekin babestu zuen: zerbitzuek ezin zuten GOV.UK-n abian jarri, orduko 26 puntuko estandarraren aurkako zerbitzu-ebaluazioa gainditu gabe (2019an 18ra bateratu zen, eta gaur indarrean dagoen 14 puntuko estandarra da; hiru multzo ditu: erabiltzaileen beharrak ulertzea, zerbitzu ona ematea eta teknologia egokia erabiltzea). Zerbitzu-ebaluazioa benetako gertaera da: GDSko edo ministerioetako ebaluatzaileen panel batek frogak aztertzen ditu, taldeari galdetzen dio eta puntu bakoitzeko epaia ematen du: gainditua, ez gainditua edo «ez betea»; epaia zerbitzuaren ebaluazio-orrian argitaratzen da. Ebaluazioa gainditu gabe, zerbitzuak ezin du beta pribatutik beta publikora igaro, ezta betatik zerbitzu aktibora ere: benetako atea da, ez berrikuspena.

## Matematika

Service Standard esparru bat da, ez formula bat, baina faseka egindako erabaki-egitura gisa funtzionatzen du:

```
Discovery  → Alpha ebaluazioa  → Beta ebaluazioa   → Live ebaluazioa
             (ez da derrigorrezkoa (derrigorrezkoa    (derrigorrezkoa «beta»
              zerbitzu guztientzat, beta publikoa       etiketa kendu eta
              baina gomendatua)     abiarazi aurretik)  kanal zaharra itxi aurretik)

Ebaluazio bakoitza: frogak + taldearekin elkarrizketa → panelaren epaia puntu bakoitzeko
  Betea / Zati batean betea / Ez betea
Emaitza orokorra: Gaindituta / Baldintzekin gaindituta / Ez gaindituta (berriz ebaluatu behar da)

Ez gainditzearen kostua ≈ konpontzeko hurrengo sprint-zikloaren kostua
              + zerbitzuak ekarri behar zuen [kanal-aldaketaren aurrezkien](../kanal-aldaketaren-aurrezpenak/)
                atzerapena
```

10. puntua («zehaztu zer den arrakasta, eta argitaratu errendimendu-datuak») da [transakzio bakoitzeko kostua](../transakzio-bakoitzeko-kostua/) eta [zerbitzu-estandarrak eta transakzio-metrikak](../zerbitzu-estandarrak-eta-transakzio-metrikak/) elikatzen dituena: estandarrak neurketa bera ezartzen du, ez zerbitzua bakarrik.

## Adibide landua

**Tokiko erakundearen etxebizitza-eskaeren zerbitzua**: kontseilu bateko talde bat beta ebaluaziora iristen da, 14 puntuetatik 11 betetzen dituen zerbitzuarekin; baina 5. puntuan huts egiten du («ziurtatu guztiek erabil dezaketela zerbitzua»), interneterik ez duten eskatzaileentzat bide digital lagunduturik ez dagoelako, eta 9. puntuan ere huts egiten du, datu pertsonalak testu garbian erregistratzen direlako eskaeren akats-aztarnetan.

```
Hutsegitearen kostu zuzena:
  Berriz ebaluatzeko txanda: 6–8 asteko itxaronaldia hurrengo panel erabilgarrira arte
  Zuzenketa-sprinta: 2 garatzaile × 3 aste × £550/egun ≈ £34.650
  Laguntza digitaleko kanalaren diseinua: ikertzaile 1 × 2 aste ≈ £5.000

Atzerapenaren kostua: zerbitzuak urteko 18.000 etxebizitza-kontsulten
%40 £8,50-ko telefono-deietatik £0,20-ko transakzio digitaletara aldatuko zuela aurreikusten zen
  = 7.200 × (£8,50 − £0,20) = £59.760/urte galdu, ~2 hilabeteko
    atzerapenari proportzionalki egokituta ≈ £9.960

Ebaluazio huts egindakoaren guztizko kostua ≈ £49.610
```

Aritmetikaren xedea ez da zehaztasuna: huts egindako ebaluazio batek benetako prezio kalkulagarria duela erakustea da, eta horregatik du atea horrek hortzak.

## Software ingeniaritzarekin lotura

Ingeniarientzat, estandarra politika-dokumentua bezainbeste arkitektura- eta entrega-zerrenda da: 11. puntua («aukeratu tresna eta teknologia egokiak») eta 12. puntua («egin kode berria irekia») zuzenean ingeniaritza-erabakiak dira, eta 14. puntuak («erabili zerbitzu fidagarria») edozein produkzio-sistemak behar dituen SLO eta intzidentzia-prozesu berberak eskatzen ditu. Gai-multzo honen esparru-markoa da: [transakzio bakoitzeko kostua](../transakzio-bakoitzeko-kostua/) eta [kanal-aldaketaren aurrezkiak](../kanal-aldaketaren-aurrezpenak/) dira estandarrak finantzatik babesten saiatzen dena, [inklusio digitala](../inklusio-digitala/) da 5. puntuak bermatu nahi duena, eta [gobernua plataforma gisa](../gobernua-plataforma-gisa/) osagaiek (GOV.UK Notify, Pay, One Login) 13. puntua («erabili eta lagundu estandar irekiei, osagai komunei eta ereduei») ia berez betetzen dute. Ikus, halaber, [gobernuan eraiki ala erosi](../eraiki-ala-erosi-gobernuan/), «tresna egokien» puntuak erosketa-erabakietan nola jokatzen duen jakiteko.

## Tranpak

- **Ebaluazioa abiarazte-egunean betetzeko izapide gisa tratatzea**: beta ebaluazioa baino astebete lehenago bakarrik 14 puntuak irakurtzen dituzten taldeek aurreikus daitekeen moduan huts egiten dute; estandarrak erabakiak discovery-tik aurrera moldatu behar ditu, ez atzera begirako auditoretza izan.
- **Prototipoa ebaluatzea, ez zerbitzua**: demo dotore batek gainditu dezake zerbitzu errealak —laguntza digitala eta inklusioa barne, intzidentziak kudeatuta— gaindituko ez lukeen berrikuspena; ebaluatzaileek tarte hori aztertu behar dute, baina auto-ziurtatutako zerbitzu txikiek askotan saltatzen dute.
- **Eskalatu aurretik berriz ebaluatzeko ez egitea**: %5eko zabalkundean ebaluatutako zerbitzua ez da automatikoki betetzen jarraitzen %100ean: karga, porrot-eskaera eta muturreko erabiltzaileak aldatu egiten dira.
- **Service Standard diseinu-sistemarekin nahastea**: GOV.UK Design System-eko osagaiek puntu batzuk betetzen dituzte (koherentzia, irisgarritasuna), baina estandarrak talde-egitura, praktika agilak eta datuen etika ere hartzen ditu; zerbitzu ongi estilatuak 2., 6. edo 9. puntuetan huts egin dezake.

## Iturriak

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
