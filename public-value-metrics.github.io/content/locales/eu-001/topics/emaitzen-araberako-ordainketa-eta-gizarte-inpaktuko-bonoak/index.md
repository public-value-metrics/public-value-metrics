# Emaitzen araberako ordainketa eta gizarte-inpaktuko bonoak (PbR/SIB)

Emaitzen araberako ordainketak (payment by results, PbR) hornitzaile bati egiaztatutako emaitzen
arabera ordaintzen dio, ez egindako jardueren arabera. Gizarte-inpaktuko bonoa (social impact bond,
SIB) PbR finantzaketa-egitura espezifiko bat da: inbertitzaile pribatuek edo filantropikoek zerbitzuaren
entrega aldez aurretik finantzatzen dute eta gobernu-komisionatzaile batek itzultzen die —etekinarekin—
independenteki neurtutako emaitzek adostutako langak gainditzen badituzte soilik, entrega-arriskua
zergadunarengandik inbertitzaileari eramanez.

## Zergatik den garrantzitsua

Munduko lehen SIB-a HMP Peterborough-n abiatu zen 2010eko irailean: Social Finance-k 5 milioi £
bildu zituen 17 inbertitzaileren aldetik "One Service" finantzatzeko, 12 hilabete baino gutxiagoko
zigorra duten presoekin lan eginez berrerrotzea murrizteko; Ministry of Justice-ek eta Big Lottery
Fund-ek inbertitzaileei itzuliko zietela adostu zuten berrepaiketa-gertaerak, gutxienez % 7,5
jaisten baziren, parekatutako konparazio-kohorte nazional baten aurka. Peterborough-ko pilotuaren
azken kohorteak berrepaiketen % 9,7ko murrizketa erregistratu zuen, langa nahikoa gaindituz, eta
inbertitzaileei etekinarekin itzuli zitzaien. Mekanismoak garrantzia izan zuen komisioetako arazo
zehatz bat konpontzen zuelako: gobernuak sarreren ordez emaitzengatik ordaindu nahi zuen, baina
ezin zuen funtzionatu ez zezakeen esku-hartze baten finantza-arriskua bere gain hartu, beraz SIB
egiturak arrisku hori hura bermatzeko prest zeuden inbertitzaileengana eraman zuen. Oxford-eko
Blavatnik School of Government-eko Government Outcomes Lab-ek (GO Lab) PbR eta SIB-en errendimenduari
buruzko mundu osoko ebidentzia-base publiko osoena mantentzen du, mundu osoan 200 inpaktu-bono baino
gehiago jarraituz eta zer diseinu-ezaugarrik duten arrakastarekin edo porrotarekin korrelazioa
argitaratuz. Ebidentzia-baseak behin eta berriz itzultzen duen ikasgaia da *aukeratutako emaitza-metrikak*,
eta hura galtzeko arriskua nork jasaten duenak, PbR kontratu batek praktikan nola jokatzen duenaren
ia guztia zehazten dutela.

## Matematika

```
PbR ordainketa = oinarrizko ordainketa (halakorik badago) + Σ (lortutako emaitza × emaitza bakoitzaren unitate-prezioa)

Gizarte-inpaktuko bonoaren inbertitzailearen itzulkina:
  Inbertitzailearen gastua = zerbitzuaren entrega finantzatzen duen aldez aurretiko kapitala
  Emaitza-ordainketa       = komisionatzaileak emaitza ≥ langa denean bakarrik ordaintzen du,
                              errendimendua langatik zenbat gorago dagoen arabera eskalatuta
  Inbertitzailearen itzulkina = jasotako emaitza-ordainketak − inbertitzailearen gastua
                              (itzulkin-tasa bat, askotan mugatua, hartutako arriskua islatuz)

Kontratu osoaren portaera zehazten duten diseinu-parametro nagusiak:
  Emaitza-metrika        — emaitza izan behar da, ez irteera (ikus outcomes-vs-outputs)
  Konparazioa/kontrafaktuala — normalean kohorte parekatu bat (ikus counterfactual-analysis)
  Ordainketa-langa       — ordainketa bat abiarazi aurreko gutxieneko hobekuntza
  Ordainketa-kurba       — lineala, mailakatua edo langaren gainetik mugatua
  Atribuzio/pisu hilaren deskontua — ikus additionality-and-deadweight
```

## Adibide landua

**Peterborough One Service** (argitaratutako ebaluazioetatik hartutako zifra ilustragarriak):

```
Bildutako inbertitzaile-kapitala:  5.000.000 £
Kohortea:                          ~3.000 zigor laburreko gizonezko preso bi kohortetan
Langa:                             ≥ % 7,5eko berrepaiketa-gertaeren murrizketa
                                   parekatutako konparazio-talde nazional baten aurka,
                                   bestela ordainketarik ez
1. kohortearen emaitza:            % 8,4ko murrizketa — jatorrizko arauen arabera
                                   kohorte horren barne kontratuzko langaren azpitik
Kohorte konbinatuaren/azkenaren emaitza: % 9,7ko murrizketa — langaren gainetik
Emaitza-ordainketa:                gobernuak (Ministry of Justice / Big Lottery Fund)
                                   langaren gainetik dagoen puntu portzentual bakoitzeko
                                   ordaintzen du, inbertitzailearen itzulketa eta
                                   etekina finantzatuz
```

**Tokiko erakundeko PbR kontratua (ilustragarria)**: familia-esku-hartzeko zerbitzu bat komisionatzen
da bideratutako familia bakoitzeko 4.000 £-tan (jarduera-ordainketa) gehi itxi ondorengo 12 hilabetetan
haurren babeserako bideratze gehiagorik ez duen familia bakoitzeko 6.000 £ (emaitza-ordainketa).
200 familia bideratu dira, 150 kasu itxi dira, 96 bideratzerik gabe jarraitzen dute 12 hilabetetara:

```
Jarduera-ordainketa = 200 × 4.000 £ = 800.000 £
Emaitza-ordainketa  = 96 × 6.000 £  = 576.000 £
Kontratuaren kostu osoa = 1.376.000 £ 96 emaitza iraunkor baieztatuengatik
Baieztatutako emaitza bakoitzeko kostua ≈ 14.333 £ (ikus cost-per-outcome)
```

## Software ingeniaritzarekin lotura

Emaitzen araberako ordainketa pizgarrien lerrokatze-arazo bat da datu-arazo bat izan aurretik, eta
datu-sistema da lerrokatze hori mantentzen edo apurtzen den lekua. Emaitzen egiaztapen independente
eta manipulazio-ebidentzia duena da joko osoa: komisionatzaileak eta hornitzaileak pizgarri
kontrajarriak dituzte kasu anbiguo bat nola kodetzen den, beraz emaitzak erregistratzen dituen sistemak
auditoria-arrastoa behar du, egiaztatzaile independentearekin (askotan hornitzailea ez den erakunde
bat, batzuetan polizia- edo prestazio-erregistroekin parekatzen duen estatistika ofizialeko erakunde bat)
datu-partekatze hitzarmen bat, eta emaitzaren definizioaren bertsio aldaezina — [sektore publikoko KPI-etan](../sektore-publikoko-kpi-ak/)
"metrika birdefinitzearen" tranparen PbR-ko baliokidea. Atribuzio-kalkuluak
[analisi kontrafaktualeko](../analisi-kontrafaktuala/) kohorte parekatuen metodoen mende daude,
errepikagarria eta auditagarria den kodea behar dutenak, ez kalkulu-orri puntual bat. Eta metrikak berak
benetako emaitza izan behar du, ez jarduera-ordezko bat — ikus [emaitzak eta irteerak](../emaitzak-eta-irteerak/) —
irteera baten truke ordaintzen duen PbR kontratu batek ohiko finantzaketa transakzio-kostu gehigarriarekin
berrizendatzen baitu. SIB baten gizarte-itzulkina prospektiboki modelatzen denean, balioespen horrek
normalean [inbertsioaren itzulkin sozialaren](../gizarte-inbertsioaren-itzulkina/) metodologiatik
zuzenean hartzen du.

## Tranpak

- **Erraz maniobratzen den ordezko emaitza baten truke ordaintzea**: "saioetara asistentzia"
  emaitza gisa mozorrotutako jarduera da; exijitu bilatzen den aldaketa benetan islatzen duen neurri bat
  (berrerrotzea, enplegua, etxebizitza-egonkortasuna).
- **Kontrafaktual sinesgarririk ez**: konparazio-talde parekaturik gabe, hobekuntza batek batez bestekora
  itzultzea edo joera zabalago bat izan daiteke, ez programaren eragina — ikus
  [analisi kontrafaktuala](../analisi-kontrafaktuala/) eta
  [gehigarritasuna eta pisu hila](../gehigarritasuna-eta-pisu-hila/).
- **Transakzio- eta ebaluazio-kostuak gutxiestea**: PbR/SIB eskemetarako egiaztapen independenteak,
  datu-loturak eta kontratu-administrazioak ohikoa da kontratuaren balioaren ehuneko bi digituetara
  iristea — GO Lab-en ebidentzia-baseak eskemak eteteko eragile errepikari gisa dokumentatzen du.
- **Hautaketa selektiboa edo "aparkatzea"**: emaitza bakoitzeko ordaintzen zaien hornitzaileek pizgarri
  zuzena dute hala ere arrakasta izango luketen bezeroak lehenesteko eta kasu zailenak atzeratzeko —
  diseinatu ordainketa-mailak edo kasu-nahasketaren doikuntza hori kontrajartzeko.

## Iturriak

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
