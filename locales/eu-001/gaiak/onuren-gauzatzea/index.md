# Onuren gauzatzea

Onuren gauzatzearen kudeaketa negozio-kasu batean agindutako onurak go-live ondoren benetan gauzatu direla identifikatzeko, oinarritzat hartzeko, jarraitzeko eta *frogatzeko* diziplina da. Erresuma Batuko inbertsio publikoan HM Treasury-ren Green Book-aren Bost Kasuko Ereduaren barruan eta Infrastructure and Projects Authority-ren onuren kudeaketa-gida espezifikoan bizi da; hori gabe, "sistemak kasu-langileen 30 minutu aurrezten ditu erreklamazio bakoitzeko" betiko auditatu gabeko baieztapen bat izaten jarraitzen du.

## Zergatik den garrantzitsua

Negozio-kasuak promesak dira; onuren gauzatzea auditoretza da. Green Book-ak eskatzen du gastu-kasu orok bost proba gainditzea —estrategikoa, ekonomikoa, komertziala, finantzarioa eta kudeaketakoa—, eta kudeaketa-kasuak ezarri behar du onurak nola gauzatuko diren *onarpena baino lehen*: jabeak izendatuta, oinarri-lerroak jasota eta neurketa-datak finkatuta. Infrastructure and Projects Authority-ren gidak, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), existitzen da IPA-ren beraren Government Major Projects Portfolio-ko txostenek behin eta berriz aurkitu dutelako entrega-konfiantza eta onuren gauzatzea programa handietan ahulezia errepikakor gisa aipatzen direla. Proiektu bat "garaiz eta aurrekontuaren barruan" itxi daiteke bere entrega-mugarriekin alderatuta, dirua gastatzea justifikatu zuten onurak gauzatzen ez dituen bitartean — IPA-ren gidak bereizketa hori diziplinaren xede osotzat jotzen du.

## Matematika

```
Gauzatze-tasa = gauzatutako onurak / aurreikusitako onurak   (onura bakoitzeko, aldi bakoitzeko)

Kalkulagarri egiten duten mekanismoak:
  oinarri-lerroa go-live BAINO LEHEN jaso (bestela delta neurtezina da)
  onura bakoitza: jabe izendatua, metrika, datu-iturria, neurketa-egutegia
  aurreikuspena ebaluazioan baikortasun-alborapenaren arabera doitua
  (Green Book-aren aginduz)
  onurak sailkatu dirua askatzen dutenak / ahalmena askatzen dutenak /
  kualitatiboak, bereizita jarraitu eta jakinarazita
```

## Adibide landua

**Tokiko erakundea**: planeamendu-eskaeren portal digital baten negozio-kasuak urtero agindu zuen: £300.000 inprimatze- eta posta-gastuen murrizketan (dirua), 4.500 funtzionario-ordu askatuak (ahalmena) eta eskatzaileen asebetetze hobea (kualitatiboa). Go-live ondorengo hamabi hilabetera:

```
Onura             Aurreikusia  Gauzatua   Tasa   Ebidentzia

Diru-aurrezpena   £300.000     £210.000   %70    finantza-liburua vs oinarri-urtea
Funtzionario-orduak 4.500      3.200      %71    denbora-mugimendu lagina
Asebetetzea       +8pp         +11pp      %138   eskatzaileen inkesta-datuak

Berrikuspenaren ekintzak (onuren gauzatzearen xedea):
diru-hutsunea aurkitu da bi zerbitzu-eremutan, oraindik salbuespen gisa
paperezko eskaerak prozesatzen dituztenetan → salbuespen-bidea itxi;
hurrengo negozio-kasuaren baikortasun-alborapenaren zuzenketa %10etik
%25era igo da, kasu honen aurreikuspen-akatsean oinarrituta.
```

%70eko gauzatze-tasa ez da porrota — hurrengo aurreikuspena hobeto kalibratzeko aukera ematen duen ezagutza da. Neurtu gabeko kasu batek %100 aldarrikatuko zuen betiko, eta finantza-taldeak ez zukeen oinarririk izango zalantzan jartzeko.

## Software ingeniaritzarekin lotura

Ingeniaritza-erakundeek ohi plataforma- eta tresna-inbertsioak onartzen dituzte aurreikusitako onuraren arabera, eta ia inoiz ez dituzte ondoren auditatzen — hain zuzen onuren gauzatzearen kudeaketak konpontzeko existitzen den patologia. Eramate arina: materialtasun-atalase bat gainditzen duen proposamen orok onura-jabe bat, oinarri-metrika bat eta berrikuspen-data finko bat (normalean go-live eta sei hilabetera) izendatzen ditu, eta iraganeko proposamenen gauzatze-tasek murriztu behar dute erakundeak talde baten edo saltzaile baten hurrengo aurreikuspenean duen konfiantza. Honek [Green Book ebaluaziora](../green-book-ebaluazioa/) itzultzen gaitu, diziplina honek auditatzen duen aurreikuspena ezartzen duena, eta oso zabalduta dagoen aurkikuntza honen logika bera da: AA sortzaileko pilotu gehienek ez dutela itzulera neurgarririk erakusten — ikus [AA produktibitatea sektore publikoan](../adimen-artifizialaren-produktibitatea-sektore-publikoan/) — balioa itzuli zuten pilotuak, ia salbuespenik gabe, hasieratik onura-lerro izendatu eta jarraigarri bat zutenak zirelako. Era berean, benetan entregatutakoa eta benetan gauzatutakoa bereiztean oinarritzen da — ikus [emaitzak vs irteerak](../emaitzak-eta-irteerak/).

## Tranpak

- **Go-live aurreko oinarri-lerrorik ez**: omisio hilgarri eta konponezina — hori gabe, ezin da inoiz gauzatze-tasarik kalkulatu, baieztatu baizik.
- **Onura umezurtza**: jabe izendaturik ez duen onurak ez du datuak biltzen dituen inor, eta portfolio-berrikuspen guztiek "oro har bidean" jakinarazten dute lehenespenez.
- **Portfolio bateko proiektuen artean onurak bi aldiz kontatzea**: bi proiektuk kasu-langileen ahalmen askatu bera aldarrikatzea beren onura gisa — mantendu onura-erregistro bakarra portfolio osoan hau harrapatzeko.
- **Gauzatze-antzerkia**: irabazi kualitatibo errazak nabarmen neurtzea eta jakinaraztea, dirua eta ahalmenaren lerroak isilean aztertu gabe uzten diren bitartean.
- **Entrega eta gauzatzea nahastea**: proiektu batek bere mugarriak "garaiz eta aurrekontuaren barruan" ixteak ez du ezer esaten aurreikusitako onura inoiz benetan gertatu den ala ez — IPA-ren gidak bi galdera bereizi gisa tratatzen ditu, bi ebidentzia-bide bereizirekin.

## Iturriak

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
