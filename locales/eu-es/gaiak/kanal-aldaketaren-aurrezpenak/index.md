# Kanal-aldaketaren aurrezpenak

Kanal-aldaketaren aurrezpenak (channel shift savings) transakzio-bolumena kanal garestietatik —telefonoa, aurrez aurreko leihatilak, posta fisikoa— auto-zerbitzu digital merketara eramateak ekarriko lukeen kostu-murrizketa aurreikusia dira. "Digital lehenespenez" ereduaren motor finantzarioa da, eta negozio-kasuko lerro okerrena izateko aukera gehien duena ere bai, oinarritzen den hipotesia —kanal ez-digitalak txikitzen direla hartze digitala handitzen den heinean— batzuetan bakarrik delako egia.

## Zergatik den garrantzitsua

Aritmetika eztabaidaezina dirudi Digital Efficiency Report-eko [transakzio-bakoitzeko kostu](../transakzio-bakoitzeko-kostua/) zifrak erabiliz: milioi bat transakzio £8,62ko aurrez aurreko bisita batetik £0,15eko digital batera aldatuz gero, aurrezpena £8 milioi baino gehiagokoa da. Baina aurrezpena birkokatzeko askatutako dirua bihurtzen da bakarrik txikitzen ari den kanalaren *ahalmen finkoa* benetan desegiten bada —deitzeko zentroko postuak, leihatilako langileak, telefono-kontratuko minutuak—, eta tokiko gobernuaren programa digitalek behin eta berriz aurkitu dute harremanen bolumen osoa ez dela jaisten hartze digitalarekin batera. Tokiko erakundeen eraldaketa digitaleko programetako ikerketek eta Socitm eta Local Government Association bezalako erakundeek eredu errepikakor bat dokumentatu dute: kanal digitalek benetan harreman berriak erakartzen dituzte (bestela deituko edo bisitatuko ez zuketen herritarrek orain egiten dute, errazagoa delako), eta transakzio "digital" askoren zati esanguratsu batek erdibidean huts egiten du eta telefono-dei bat sortzen du, nolanahi ere — beraz telefono-bolumena hartze digitalaren ehunekoak iradokiko lukeena baino askoz gutxiago jaisten da, batzuetan zenbaki absolutuetan batere jaitsi gabe, harreman osoaren *partaidetza* jaisten ari den arren.

## Matematika

```
Kanal-aldaketaren aurrezpen gordina = aldatutako bolumena × (kostua_kanal_zaharra − kostua_digitala)

Aurrezpen garbia (gauzatua) = aurrezpen gordina
                       − kanal errazak sortutako eskari berria/itzala
                       − hutsegite-eskariaren kostua (telefono-deia
                         edo leihatila-bisita sortzen duten hutsegite digitalak)
                       − erretiratu gabeko ahalmen finkoaren kostua (deitzeko
                         zentro batek langileak unitate diskretuetan bakarrik
                         murriztu ditzake; %15eko bolumen-jaitsierak ia inoiz ez
                         du langile-kopuruaren %15 murrizten uzten)

Gauzatze-atalasea: aurrezpenak bankuan sartzeko modukoak dira soilik bolumena
kanal zaharrak hurrengo ahalmen-urrats diskretu txikiagoan zerbitzatu
dezakeen mailaren azpitik jaisten denean (adib. txanda oso bat, mahai oso bat,
kontratatutako langile-banda bat galtzea)
```

## Adibide landua

**Konderriko kontseiluaren blue badge berritze-zerbitzua**: 60.000 berritze/urte, lehen %100 telefono/paper bidez £6,40ko transakzio bakoitzeko. Zerbitzu digital berri bat abiarazten da eta urtebetean %65eko hartze digitalera iristen da, transakzio digital bakoitzeko £0,30era.

```
Aurrezpenaren kalkulu inozoa (gordina):
  39.000 aldatuta × (£6,40 − £0,30) = £237.900/urte

Benetan gertatu zena, kontseiluaren harreman-zentroko datuen arabera:
  Telefono-bolumena 60.000/urtetik 46.000/urtera jaitsi zen (%23, ez %65)
  zergatik: 9.000 ibilbide digitalek huts egin zuten eta jarraipen-dei bat sortu zuten
           (hutsegite-eskariaren ihesa), eta lehen batere berritzen ez zuten 4.000 pertsonak
           orain berritzen dute, linean erraza aurkitu dutelako
           (eskari-itzala — sarbide-hobekuntza benetakoa, baina ez aurrezpena)

  Telefono-harreman-zentroa 8.000 dei/FTE-ko bandetan dago langiletuta;
  14.000 deiko jaitsierak (60.000 → 46.000) 1,75 FTE askatzen ditu,
  praktikan 1 FTE-ra biribilduta, benetan birkokatua = £34.000/urte

Aurrezpen gauzatua = £34.000/urte gehi 39.000 transakziotan saihestutako kanal
  digitalaren eraikuntza/ustiapen-kostua ≈ £34.000 + (39.000 × £0,30
  jada kontatutako kostu digitala) — goiburuko £237.900ren zati bat,
  nahiz eta zerbitzua erabiltzaileentzat zalantzarik gabe hobea den.
```

## Software ingeniaritzarekin lotura

Ingeniaritzaren ikasgaia da kanal-aldaketaren aurrezpenak *eragiketa-erabakien* bidez gauzatzen direla (txandak, desegiteak, kontratuen birnegoziazioa), ez softwarea argitaratzearen bidez — talde batek [digital-service-standard](../zerbitzu-digitalen-estandarra/) arauaren puntu guztiak bete ditzake eta aurrezpen garbirik ez entregatu, inork kanal zaharraren ahalmen finkoa erretiratzen ez badu. Hutsegite-eskaria instrumentatzea (ibilbide digitalaren zein puntutan uzten duten erabiltzaileek eta ondoren zer egiten duten) funnel-analitika arazo konpongarria da, eta ingeniaritza-talde batek aurrezpen-kasua babesteko egin dezakeen gauza eraginkorrena; [transakzio-bakoitzeko kostuarekin](../transakzio-bakoitzeko-kostua/) lotura zuzena ere bada, hutsegite-eskariak isilean puztzen duena. Ikus [onuren gauzatzea](../onuren-gauzatzea/) negozio-kasu baten aurrezpenak benetan lortzen diren egiaztatzeko diziplina zabalagoarentzat, eta [inklusio digitala](../inklusio-digitala/) kanal ez-digitala normalean zergatik ezin den, eta zergatik ez den, erabat erretiratu behar jakiteko.

## Tranpak

- **1:1 kanal-ordezkapena suposatzea**: hartze digitala telefono/leihatila-bolumenetik zuzeneko kenketa gisa ereduztatzea, tokiko gobernuaren kanal-aldaketaren ikerketan dokumentatutako eskari-itzala eta hutsegite-eskariaren ihesa alde batera utziz.
- **Aurrezpen gordinak desegin aurretik kontabilizatzea**: aurrezpena hartzea igotzen den urteko negozio-kasuan kontatzea, kanal zaharraren ahalmena benetan murrizten den urtean (inoiz bada) kontatu beharrean.
- **Langile-kostuen urrats-funtzio izaera alde batera uztea**: %20ko bolumen-jaitsierak ia inoiz ez du %20ko kostu-jaitsiera ekartzen, deitzeko zentroak eta leihatilak banda diskretuetan langiletzen direlako, ez etengabe.
- **Eskari-itzala hondakintzat jotzea**: lehen kanpoan geratutako edo kikilduta zeuden erabiltzaileen harreman berria [balio publikoaren](../balio-publikoa/) benetako igoera da, ez ereduaren akatsa — sarbide-emaitza gisa jakinarazi behar da, zarata gisa kendu beharrean.

## Iturriak

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
