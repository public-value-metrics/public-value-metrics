# Gizarte-inbertsioaren itzulkina (SROI)

Gizarte-inbertsioaren itzulkina balio-kontzeptu zabal bat (soziala, ingurumenekoa eta ekonomikoa) neurtzeko, diruztatzeko eta kontatzeko esparru bat da, eta inbertitutako baliabideen aldean ratio gisa adierazten da, adibidez "£1,44 gizarte-balio inbertitutako £1 bakoitzeko". Merkatuek prezioztatzen ez dituzten emaitzetara kontabilitate finantzarioaren logika hedatzeko diseinatu zen, kontabilitatearen diziplina galdu gabe: SROI bateko zenbaki bakoitza alderdi interesdunek definitutako emaitza batera, ebidentzia-oinarri batera eta nolanahi ere gertatuko zenaren doikuntza esplizitu batera trazagarria izan behar da.

## Zergatik den garrantzitsua

SROI Social Value UK-k eta Social Value International-ek mantentzen dute, SROI Network-aren ondorengo erakundeak, eta haien "A Guide to Social Return on Investment" (2012) oraindik metodologia-erreferentzia da. Esparruak zazpi printzipiotan oinarritzen da: alderdi interesdunak inplikatu, zer aldatzen den ulertu, axola dutenak balioetsi, esanguratsua dena bakarrik sartu, gehiegi ez aldarrikatu, gardena izan eta emaitza egiaztatu; eta bosgarren printzipioa, "gehiegi ez aldarrikatu", da naturan dauden SROI txosten gehienek betetzen ez dutena. Pisu hilaren (deadweight) eta atribuzioaren doikuntzak saltatuz sortutako ratio bat ez da SROI bat; SROI baten arropa daraman marketin-zenbaki bat da. Karitateentzat, gizarte-enpresentzat edo komisionatzaileentzat txosten-tresnak eraikitzen dituzten software-ingeniariek ezberdintasuna ezagutu behar dute, tresnak diziplina behartuko duelako edo saltatzea erraz egingo duelako.

## Matematika

SROIk [aldaketa-teoria](../aldaketa-teoria/) baten menpe dago zein emaitza dauden eremuan identifikatzeko, eta [logika-eredu](../logika-eredua/) baten kontu-emateko kate bera erabiltzen du haiek adierazteko:

```
SROI ratioa = Emaitzen egungo balioa / Sarreren balioa

Prozesua:
 1. Eremua ezarri eta emaitzak neurtuko zaizkien alderdi interesdunak identifikatu
 2. Emaitzak mapatu (aldaketa-teoria bat, alderdi interesdunekin ebidentziatua, ez suposatua)
 3. Emaitzak ebidentziatu eta balioa eman proxy finantzarioak erabiliz
 4. Eragina ezarri: balio gordina − pisu hila − atribuzioa − desplazamendua, gero beherakada (drop-off) aplikatu
 5. SROI kalkulatu: eraginaren egungo balio garbia ÷ sarreren balioa
 6. Jakinarazi, erabili eta txertatu — ratioa komunikazio-gailu bat da, ez azken helburua
```

Pisu hila, atribuzioa eta desplazamendua [gehigarritasuna eta pisu hila](../gehigarritasuna-eta-pisu-hila/) eta [desplazamendua eta atribuzioa](../desplazamendua-eta-atribuzioa/) gaietan jorratzen dira; hirurak emaitza gordinetik benetako [kontrafaktuala](../analisi-kontrafaktuala/) den eragina isolatzeko daude.

## Adibide landua

**Toki-agintaritzaren enplegu-programa**: urteko sarrera-kostua £250.000. Hirurogei parte-hartzailek enplegu iraunkorra lortzen dute; emaitza horren proxy finantzarioa (ongizate-hobekuntza, prestazioen mendekotasunaren murrizketa eta zerga-diru-sarrerak konbinatuta) £8.500 da pertsona bakoitzeko lehen urtean; ikus [unitate-kostuen datu-baseak](../unitate-kostuen-datu-baseak/) halako proxyak nondik datozen jakiteko.

- Emaitza gordinaren balioa: 60 × £8.500 = £510.000
- Ken pisu hila (% 40k programarik gabe ere lana aurkituko zukeen): £510.000 × 0,60 = £306.000
- Ken atribuzioa (gainerako aldaketaren % 30 beste agentzia batzuen laguntzari zor zaio): £306.000 × 0,70 = £214.200
- 2. urteko emaitza % 30eko beherakadarekin: £214.200 × 0,70 = £149.940, urteko % 3,5ean deskontatuta (ikus [gizarte-deskontu tasa](../gizarte-deskontu-tasa/)): £149.940 ÷ 1,035 = £144.870
- Eraginaren egungo balioa guztira: £214.200 + £144.870 = £359.070
- **SROI ratioa: £359.070 ÷ £250.000 = 1,44**, "£1,44 gizarte-balio inbertitutako £1 bakoitzeko" gisa jakinarazita

**Karitatea**: £60.000ko adiskidetze-zerbitzu batek bakardadea murrizten du 80 adineko pertsonatan, pertsona/urte £1.100eko proxy batekin balioetsia. Balio gordina £88.000; % 35eko pisu hilaren eta % 15eko atribuzioaren ondoren, eragin garbia £88.000 × 0,65 × 0,85 = £48.620 da, 0,81eko SROI ratio bat, hau da, oreka-puntuaren azpitik; hau aurkikuntza zilegi eta erabilgarria da, ez idazteko porrot bat.

## Software ingeniaritzarekin lotura

Erabiltzaileak emaitza-kopuruak eta proxy-balioak sartzen uzten duen baina pisu hilerako, atribuziorako edo lotutako aldaketa-teoriarako derrigorrezko eremurik ez duen SROI kalkulagailu batek ratio puztuak sortuko ditu lehenespenez, doikuntzak ez sartzea baita erresistentzia txikieneko bidea. Eraiki diziplina eskeman: emaitza-errenkada bakoitzak alderdi interesdunen talde bati, kantitate ebidentziatu bati, bere iturriarekin proxy finantzario bati eta pisu hil/atribuzio eremu ez-aukerazkoei egin behar die erreferentzia. Ikus [emaitzak vs. irteerak](../emaitzak-eta-irteerak/) SROIren emaitza-mapaketak menpe duen bereizketarako, eta [logika-eredua](../logika-eredua/) tresnak bere datu-ereduan islatu beharko lukeen katerako.

## Tranpak

- **Pisu hila eta atribuzioa saltatzea.** Doikuntza hauek gabeko ratio nagusia zifra gordin bat da, ez eragin garbiaren zifra bat, eta Social Value UK-ren printzipioek bi doikuntzak esplizituki eskatzen dituzte.
- **Ratioak erakundeen artean alderatzea.** SROI ratio bat kasuz kasu hartutako eremu- eta proxy-aukeren menpe dago; txosten bateko 4:1 ratioa beste bateko 2:1 ratioa baino "hobea" dela tratatzeak alde batera uzten du hipotesiak ez daudela estandarizatuta kontabilitate finantzarioko ratio bat bezala.
- **Gainjartzen diren proxyak bikoiztea kontatzea.** Onuradun berberentzat "bakardade murriztua" proxy bat eta "buruko ongizate hobetua" proxy bat pilatzeak azpiko aldaketa bakar bat bi aldiz balioetsi dezake.
- **Alderdi interesdunen partaidetza saltatzea.** Lehen printzipioak eskatzen du emaitzak haiek bizi dituzten pertsonekin definitzea, ereduaren analistak suposatu beharrean.

## Iturriak

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
