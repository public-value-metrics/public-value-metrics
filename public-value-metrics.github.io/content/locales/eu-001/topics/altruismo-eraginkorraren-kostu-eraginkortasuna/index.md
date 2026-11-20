# Altruismo eraginkorraren kostu-eraginkortasuna

Altruismo eraginkorraren (EA) kostu-eraginkortasunaren arrazoibideak karitate-esku-hartzeak sailkatzen ditu egindako ontasunaren kantitatearen arabera —gehienetan gastatutako dolar bakoitzeko salbatutako bizitza edo irabazitako osasun gisa adierazia— eta dirua marjinan ontasun gehien erosten duen esku-hartzera zuzentzen du. GiveWell da arloko praktikatzaile eragingarriena: «goi-karitate» zerrenda txiki baterako bizitza salbatu bakoitzeko kostu eta emaitza bakoitzeko kostuaren estimazio esplizituak eta eguneratuak argitaratzen ditu, eta emaileei gomendatzen die finantzaketa gehiagorako tokia duen eta ratio onena duenari ematea.

## Zergatik den garrantzitsua

GiveWell-ek kostu-eraginkortasuna lehen irizpide gisa adierazten du bere metodologia argitaratuan: froga sendoko esku-hartzeak bilatzen ditu, haien kostu-eraginkortasuna unitate komun batean estimatzen du, eta guztiz erlazionatu gabeko arrazoiak —malariaren aurkako eltxo-sareak, A bitaminaren osagarriak, diru-transferentziak, txertoen pizgarri-ordainketak— ardatz bakar horretan sailkatzen ditu. Hau osasun-ekonomiako QALY/DALY motako arrazoibidearen inportazio zuzena da filantropiara: osasun-sistema batek marjinan «zenbat QALY libra bakoitzeko» galdetzen duen bezala, GiveWell-ek marjinan «zenbat bizitza, edo bizitza-urte, dolar bakoitzeko» galdetzen du, eta arrazoiak ordezkagarritzat hartzen ditu unitate komun horretara bihurtu ondoren. Ikus [kostu-eraginkortasunaren analisia gobernuan](../kostu-eraginkortasunaren-analisia-gobernuan/) arrazoibide-esparru honen lehengusu publikorako.

GiveWell-en zifrarik aipatuena Against Malaria Foundation-i (AMF) dagokio, intsektizidaz tratatutako eltxo-sareak banatzen dituena. GiveWell-en argitaratutako adibide landuan (2020ko finantzaketa-datuetatik hartua), gutxi gorabehera $4.500-k nahikoa sare finantzatzen zuten heriotza bat saihesteko, sareen erabilera inperfektua, sareik gabeko oinarrizko hilkortasuna eta funging-aren doikuntza —AMFk finantzaketa horren zati bat beste emaile batzuengandik jasoko zukeen aukera, nolanahi ere— kontuan hartuta. GiveWell-ek argi uzten du zifra hori denboran eta geografian aldatzen dela malariaren prebalentzia, sareen kostua eta finantzaketa-hutsuneak aldatzen diren heinean, eta bizitza bat salbatzeko kostua orokorrean igoko dela espero dela aukerarik merkeenak lehenengo hartzen direlako; metodoaren adibide landua da, ez prezio finkoa.

## Matematika

```
Kostu-eraginkortasuna = Esku-hartzearen kostua / Sortutako ontasun-unitateak
                       (adib. $ salbatutako bizitza bakoitzeko, $ saihestutako DALY bakoitzeko, $ QALY bakoitzeko)

GiveWell-en katea eltxo-sareen programa baterako, adibide gisa:
  $ erositako eta emandako sare bakoitzeko
    ÷ benetan erabilitako sareen zatia
    ÷ sare bakoitzak babestutako pertsonak
    × sareik gabeko urteko oinarrizko hilkortasuna
    × sarearen erabilerari egotzitako hilkortasun-murrizketa (RCT frogetatik)
    × sare bakoitzaren babes-urteak
    ÷ funging-aren doikuntza (dirua beste emaileen finantzaketa ordezkatzen)
  = $ salbatutako bizitza bakoitzeko (finantzaketa kontrafaktualaren ondorioak kenduta)
```

Kate honek axola du, urrats bakoitza kostu-eraginkortasunaren estimazioak gehienetan gaizki ateratzen diren lekua delako —ikus beheko akatsak— eta «salbatutako bizitza bakoitzeko kostua» inoiz ez dela behatutako prezio gordina argi uzten duelako; banaka ziurgabeak diren hainbat sarreratik eraikitako estimazio modelatua da.

## Adibide landua

Bi esku-hartze hipotetiko, biak froga sendokoak, £100.000 marjinal berdinaren bila:

- **Eltxo-sareak (AMF motakoak)**: gutxi gorabehera $4.500 salbatutako bizitza bakoitzeko, GiveWell-en 2020ko datuetatik hartutako adibide landuaren arabera; hau da, oso gutxi gorabehera 20 bizitza salbatuta £100.000-ko, erabilitako truke-tasaren eta urtearen arabera.
- **Parasitoen aurkako programa (deworming)**: hilkortasun-onura sinesgarririk batere ez, baina haurtzaroko tratamenduak epe luzeko errenta-irabaziak dakartzatelako froga sendoak; GiveWell-ek errenta-irabazien terminoetan baloratzen du, ez salbatutako bizitzetan, eta horrek zaildu egiten du eltxo-sareekin zuzenean alderatzea unitate partekaturik gabe. GiveWell-ek «balio moralen» esparru esplizitua erabiltzen du biak barne-unitate bakar batera bihurtzeko sailkapenerako.

EA metodoaren diziplina da alderaketa hori argitan jartzera behartzea, biak finantzatu beharrean «ondo iruditzen zaizkielako». Ikus [gizarte-itzulera inbertsioa](../gizarte-inbertsioaren-itzulkina/) Erresuma Batuko gizarte-enpresek eta tokiko enkargatzaileek erabiltzen duten behartze-funtzio baliokiderako; galdera bera egiten du —zein da itzulera onena libra bakoitzeko?— baina balio monetizatuaren hizkeran, bizitza/DALY hizkeran beharrean.

## Software ingeniaritzarekin lotura

EAren aldeko finantzatzaileentzako dohaintza-plataformak, diru-laguntzen parekatze-tresnak edo inpaktu-panelak eraikitzen dituzten ingeniariek (Open Philanthropy, GiveWell bera, Giving What We Can bezalako ematearen eraginkortasuneko plataformak) kostu-eraginkortasunaren estimazioak tarte gisa irudikatu behar dituzte, adierazitako hipotesiekin, ez zenbaki bakar gisa: azpiko ereduak hainbat sarrera ziurgabe biderkatzaile ditu, eta panel batean zifra bakarrera laburtzeak GiveWell-ek berak adierazten duen konfiantza desitxuratzen du. Bertsionatu estimazio bakoitza argitaratze-dataren arabera; GiveWell-ek bere zenbakiak berrikusten ditu, batzuetan nabarmen, RCT froga berriak edo finantzaketa-hutsuneen datuak iristean, eta zifra zaharra cache-an gordetzen duen plataforma isilean okerra bihurtzen da.

## Tranpak

- **Kostu-eraginkortasunaren estimazioa prezio finkotzat hartzea.** Eredu baten irteera da, hainbat sarrera ziurgabe biderkatzailerekin (erabilera-tasak, oinarrizko hilkortasuna, funging-aren doikuntza); adierazi data eta bertsioa.
- **Funging-a/desplazamendua alde batera uztea.** Beste emaile batengandik nolanahi ere dirua jasoko zukeen erakunde bat finantzatzeak titularrak iradokitzen duena baino ontasun kontrafaktual gutxiago erosten du; ikus [gehigarritasuna eta pisu hila](../gehigarritasuna-eta-pisu-hila/) eta [desplazamendua eta atribuzioa](../desplazamendua-eta-atribuzioa/).
- **Unitate bateraezinak bihurketarik gabe alderatzea.** «Salbatutako bizitzak» eta «irabazitako errenta» ez dira zuzenean alderagarriak balio moralen esparru esplizitu bat gabe; elkarren ondoan aurkezteak, alderagarriak balira bezala, kategoria-akatsa dakar.
- **Eremu bakarreko ikuspegi estua.** Eremu baten barruan bakarrik sailkatzeak (adibidez, osasun globaleko karitateak bakarrik) eta irabazlea «karitate kostu-eraginkorrena» deitzeak baieztapena gehiegi puztu egiten du; GiveWell-en arrazoi arteko sailkapena nahita estua da (osasun eta ongizate globala), ez unibertsala.

## Iturriak

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
