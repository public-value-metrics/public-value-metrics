# Gehigarritasuna eta pisu hila

Gehigarritasunak galdetzen du ea esku-hartze batek bestela gertatuko ez zen emaitza bat eragin duen. Pisu hila
(deadweight) haren ispilua da: programarik, diru-laguntzarik edo subsidiorik gabe ere, nolanahi gertatuko zen
emaitzaren zatia. Gobernu-programa edo karitate-erakunde batek aldarrikatzen duen inpaktu ia guztiak bere
eragina gehiegi azpimarratzen du, pisu hila kendu arte; horregatik, Erresuma Batuko ebaluazio-gidek goiburuko
edozein zifrari egin beharreko lehen doikuntza eta garrantzitsuena dela jotzen dute.

## Zergatik den garrantzitsua

"500 enpresari lagundu genien hazten" lorpen handia dirudi, baina enpresa horietatik 300 nolanahi ere haziko
balira —tokiko ekonomia suspertzen ari zelako, beste finantzaketa-bide batzuk zituztelako, programa hasi aurretik
hazkunde-bidean zeudelako—, programaren benetako ekarpen gehigarria 200 da, ez 500. HM Treasury-ren Magenta
Book-ak eta HM Treasury/BIS-en aspaldiko "Additionality Guide"-ak (hasieran eskualde-garapenerako eta
birgaitze-programetarako sortua, eta ordutik Erresuma Batuko gobernuaren ebaluazioetan oso erabilia) pisu hila
ezarri dute inpaktu garbiaren sekuentzia estandarreko lehen doikuntza gisa: efektu gordina ken pisu hila, ken
desplazamendua, ken ihesa, biderkatzaile-efektuen arabera doitua, berdin inpaktu gehigarri garbia. Urrats hau
saltatzea da sektore publikoko eta gizarte-sektoreko inpaktu-aldarrikapenak puztzeko modurik ohikoena, nahita
edo nahi gabe: erkaketa-talderik gabe parte-hartzaileen emaitza gordinak soilik neurtzen dituen diru-laguntza
programa batek ezin du bereizi bere efektua eta nolanahi gertatuko zenaren artekoa.

Pisu hila ez da ehuneko finkoa; guztiz populazio eta esku-hartze zehatzaren kontrafaktualaren araberakoa da
(ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/)). Aurreko Regional Development Agencies erakundeen
garaiko Ingalaterrako eskualde-garapenaren ebaluazioek maiz aurkitu zuten pisu hilaren tasa %20 eta %60 artekoa
zela, enpresentzako laguntza motaren arabera. Horregatik, ebaluazio sinesgarriek pisu hilaren arabera doitutako
tartea ematen dute, eta ez zifra bakar suposatu bat; eta horregatik eskatzen diete National Lottery Community
Fund eta Big Society Capital bezalako finantzatzaileek diru-laguntza jasotzaileei pisu hila esplizituki lantzea
emaitzen txostenetan, parte-hartzaile gordinen zenbaketak aurkeztu beharrean.

## Matematika

Inpaktu garbiaren doikuntza-sekuentzia estandarra, Erresuma Batuko ebaluazio-gidek ezarritakoaren arabera
(Magenta Book; HM Treasury/BIS Additionality Guide; ESIF eta funts estrukturalen ebaluazio-gidak):

```
Emaitza gordina
  − Pisu hila        (nolanahi gertatuko zena)
  − Desplazamendua   (beste nonbaitetik lekualdatutako jarduera/onura, sortu gabea — ikus
                       displacement-and-attribution)
  − Ihesa            (xede-taldetik/eremutik kanpo geratzen den onura)
  × Biderkatzailea   (zeharkako/eragindako jarduera ekonomiko gehigarria, positiboa bada)
  = Inpaktu gehigarri garbia
```

Pisu hilaren tasa proportzio gisa:

```
Pisu hilaren tasa = esku-hartzerik gabe gertatuko ziren emaitzak
                     / behatutako emaitza gordinak guztira

Emaitza gehigarri garbiak = Emaitza gordinak × (1 − Pisu hilaren tasa)
```

## Adibide landua

**Enpresentzako laguntza-programa**: eskualde-mailako diru-laguntza eskema batek jakinarazten du lagundutako 500
enpresak enpleguak handitu zituztela hurrengo urtean, batez beste 3 lanpostu bakoitzak —guztira 1.500 lanpostuko
aldarrikapen gordina—.

Lagundu gabeko enpresa antzekoen erkaketa-talde parekatu batek (ikus
[analisi kontrafaktuala](../analisi-kontrafaktuala/)) erakusten du lagundutako enpresen enplegu-hazkundearen
%40 nolanahi gertatuko zela, talde parekatuak aldi berean izandako jokabidean oinarrituta.

```
Pisu hilaren tasa = %40
Lanpostu gehigarri garbiak = 1.500 × (1 − 0,40) = 900 lanpostu
```

Programak zintzotasunez jakinaraz dezakeen lorpena 900 lanpostu dira, ez 1.500: %40ko murrizketa pisu hilaren
doikuntzagatik bakarrik, desplazamendua edo ihesa kontuan hartu gabe oraindik.

**Karitate-erakundearen enplegu-programa**: karitate-erakunde batek epe luzean langabe zeuden 200 pertsona lanean
jartzen ditu £600.000ko kostuarekin (£3.000 kokapen bakoitzeko, gordina). Lan-merkatuaren datu nazionalek
erakusten dute inolako esku-hartzerik gabe, epe luzeko langabeen koorte konparagarri baten gutxi gorabehera %15k
lana aurkitzen duela aldi berean, lan-merkatuaren mugimendu naturalaren bidez.

```
Pisu hilaren tasa = %15
Kokapen gehigarri garbiak = 200 × (1 − 0,15) = 170
Kokapen gehigarri bakoitzaren benetako kostua = £600.000 / 170 ≈ £3.529
```

Kokapen bakoitzeko kostu gordinak (£3.000) karitate-erakundearen ekarpen gehigarriaren benetako kostua gutxi
gorabehera %15 gutxiesten du.

## Software ingeniaritzarekin lotura

Gehigarritasunak eta pisu hilak zuzenean axola dute sektore publikorako edo sozialerako inpaktua neurtzeko edo
diru-laguntzak kudeatzeko softwarea eraikitzen duenarentzat:

- Emaitzak jakinarazteko sistemek erkaketa-talde edo oinarri-talde bat jaso behar dute diseinutik, ez
  parte-hartzaileen emaitzak soilik; kontrafaktual bat sistema abiarazi ondoren gehitzea askoz zailagoa da hasieratik
  jasotzea baino (ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/)).
- Parte-hartzaile gordinen zenbaketak bakarrik jakinarazten dituzten panelek sistematikoki puztuko dute inpaktua
  finantzatzaileen eta gainbegiratze-organoen aurrean; pisu hilaren estimazioak daudenean (ebaluazio-literaturatik
  edo erkaketa-talde batetik), softwareak pisu hila kendutako zifra erakutsi behar du zifra gordinaren ondoan, ez haren
  ordez.
- Honek zuzenean lotzen da [gizarte-itzulera inbertsioan](../gizarte-inbertsioaren-itzulkina/) gaiarekin: haren SROI
  ratioa sinesgarria da bakarrik emaitza gordinei pisu hila (eta desplazamendua) kendu ondoren; urrats hau
  baztertzen duen SROI kalkulagailu batek ratio puztuak sortuko ditu, azterketa gainditzen ez dutenak.

## Tranpak

- **Emaitza gordinak guztiak gehigarriak balira bezala jakinaraztea.** Hau da diru-laguntzen eta programen
  txostenetan inpaktuaren neurketan egiten den akats ohikoena; galdetu beti "hau nolanahi gertatuko al zen?"
  goiburuko zifra argitaratu aurretik.
- **Pisu hilaren ehuneko bakar bat toki guztietan aplikatzen dela suposatzea.** Pisu hila oso aldakorra da
  sektorearen, populazioaren eta tokiko baldintza ekonomikoen arabera; erabili erkaketa-talde bat edo sektore
  zehatzeko ebidentzia, ez erlazio gabeko ebaluazio bateko zifra berrerabili.
- **Pisu hila eta desplazamendua nahastea.** Pisu hila parte-hartzaile berberen emaitza kontrafaktualei buruzkoa da;
  desplazamendua, berriz, beste pertsona edo lekuetako eraginei buruzkoa — ikus
  [desplazamendua eta atribuzioa](../desplazamendua-eta-atribuzioa/). Biak nahasteak doikuntza bikoiztea edo
  gutxiegi kontatzea dakar.
- **Parte-hartzaileek beraiek jakinarazitako pisu hila.** Onuradunei "hau gure laguntzarik gabe gertatuko al zen?"
  galdetzeak pisu hilaren estimazio sistematikoki baxuak sortzen ditu (parte-hartzaileek programari aitortzeko joera
  dute); kanpoko erkaketa-talde bat askoz fidagarriagoa da.

## Iturriak

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
