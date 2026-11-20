# Izpodrinjenje in pripisovanje učinka

Do izpodrinjenja pride, kadar je navidezna korist programa dosežena tako, da se dejavnost ali korist odvzame drugje, namesto da bi nastalo kaj novega – vaša zmaga je izguba nekoga drugega. Pripisovanje učinka je sorodno vprašanje, koliko opaženega izida lahko vaš ukrep resnično šteje za svojega, kadar so prispevali tudi drugi akterji in dejavniki. Oboje sta običajni popravki v britanskih smernicah za vrednotenje v javnem sektorju, poleg mrtve teže (deadweight) in uhajanja (leakage), in oba se v trditvah o učinkih, ki se zdijo veliko močnejše, kot so, običajno preskočita.

## Zakaj je pomembno

Shema poslovnih nepovratnih sredstev lokalne oblasti, ki pomaga 50 trgovinam, da se preselijo v območje prenove, lahko sporoči »podprtih 50 podjetij, ustvarjenih 200 delovnih mest« – toda če so se ta podjetja zgolj preselila z sosednje glavne ulice, namesto da bi se razširila, so bila delovna mesta izpodrinjena, ne ustvarjena, neto učinek na ravni občine (ali regije) pa je lahko blizu nič. Magenta Book britanskega zakladnega ministrstva (HM Treasury) in dolgoletni Additionality Guide izpodrinjenje obravnavata kot obvezen odbitek, ravno ker so lokalne zgodbe o uspehu pogoste tudi takrat, ko ne prinesejo nobene neto koristi na nacionalni ali regionalni ravni – vrednost se je preprosto premaknila, pogosto v škodo območja ali akterjev, ki so jo izgubili. Smernice za vrednotenje strukturnih skladov (uporabljene za nekdanje programe Evropskega sklada za regionalni razvoj in njihove domače naslednike, kot je UK Shared Prosperity Fund) to formalizirajo na treh prostorskih ravneh: lokalno izpodrinjenje (znotraj mesta), regionalno izpodrinjenje (znotraj regije) in nacionalno izpodrinjenje (po vsej Združenem kraljestvu), saj je lahko ukrep dodaten na eni ravni, na širši pa čisto izpodrinjenje – program zaposlovanja, ki privabi delavce iz sosednjega mesta, je nacionalno nevtralen, četudi se zdi lokalni uspeh.

Pripisovanje učinka je sorodna težava pri izvedbi, ki temelji na partnerstvih, kar je danes v socialnem sektorju in pri storitvah več agencij običajno. Kadar tri organizacije skupaj izvajajo storitev preprečevanja brezdomstva, lahko letno poročilo vsake organizacije neodvisno zahteva zasluge za isto zmanjšanje števila ljudi, ki spijo na ulici – seštete čez poročila lahko zatrjevane učinke presegajo opaženo spremembo v resničnem svetu, včasih večkratno. Smernice Magenta Book o analizi prispevka (contribution analysis) obstajajo ravno zato, ker je naključno pripisovanje enemu akterju pri izvedbi več agencij pogosto nemogoče, pošten odgovor pa je pogosto »prispevali smo k temu izidu«, ne »povzročili smo ta izid«.

## Matematika

Izpodrinjenje kot del standardnega zaporedja neto učinka (celotna veriga je v temi [dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/)):

```
Neto dodatni učinek = (Bruto izid − Mrtva teža − Izpodrinjenje − Uhajanje) × Množilnik

Stopnja izpodrinjenja = od drugod preusmerjena korist/dejavnost
                        / skupna opažena bruto korist/dejavnost
```

Pripisovanje učinka, kadar k enemu izidu prispeva več akterjev, se običajno izraža kot delež prispevka, ne kot natančen odstotek, ker ga običajno ni mogoče izmeriti z enako strogostjo kot izpodrinjenje:

```
Pripisljivi delež ≈ f(moč vzročnega prispevka, prispevki drugih akterjev,
                      zunanji/kontekstualni dejavniki)

Zatrjevani učinek ne sme nikoli presegati:
  Σ (pripisljivi delež vsakega partnerja) ≤ 100 % skupnega opaženega izida
```

## Praktični primer

**Nepovratna sredstva za prenovo**: shema nepovratnih sredstev občine za glavno ulico poroča o 200 novih delovnih mestih v trgovini na podprtem območju. Naknadna anketa pokaže, da je 60 teh delovnih mest nastalo zaradi podjetij, ki so se preselila s sosednje, nepodprte glavne ulice znotraj iste občine, še 30 pa zaradi nacionalnih verig, ki bi odprle podružnice nekje v regiji tudi brez nepovratnih sredstev.

```
Zatrjevana bruto delovna mesta = 200
Lokalno izpodrinjenje = 60 (selitev znotraj občine)
Regionalno izpodrinjenje = 30 (bi se v regiji odprla tako ali tako)

Neto dodatna delovna mesta (raven občine) = 200 − 60 = 140
Neto dodatna delovna mesta (regionalna raven) = 200 − 60 − 30 = 110
```

Pošten naslov je odvisen od geografske ravni, ki zanima financerja – poslovni primer za Treasury, ovrednoten na nacionalni ali regionalni ravni, mora uporabiti 110, ne 140 na ravni občine in zagotovo ne surovih 200.

**Storitev za brezdomce več agencij**: tri partnerske organizacije (občina, stanovanjska dobrodelna organizacija in zdravstveni zavod) skupaj izvajajo storitev zmanjševanja števila ljudi, ki spijo na ulici. Število ljudi, ki spijo na ulici, se je na območju v letu zmanjšalo za 30. Letno poročilo vsake organizacije posebej navaja »zmanjšali smo število za 30« – seštete tri poročila trdijo, da je bilo pomoči deležnih 90 ljudi, trikrat več od dejanskega zmanjšanja. Analiza prispevka, ki vsakemu partnerju dodeli delež (recimo 40 % občina, 35 % dobrodelna organizacija, 25 % zdravstveni zavod, na podlagi dokumentirane vloge in neodvisne ocene), bi poročala 12, 10,5 in 7,5, kar se pravilno sešteje v opaženih 30.

## Povezava s programskim inženirstvom

Izpodrinjenje in pripisovanje učinka oblikujeta, kako je treba zasnovati sisteme za spremljanje učinkov in poročanje o izidih pri izvedbi na več lokacijah ali z več partnerji:

- Geografski in organizacijski obseg morata biti izrecni, prvovrstni polji v vsaki nadzorni plošči učinkov – številka, poročana »za občino«, in ista številka, poročana »za regijo«, sta različni številki, sistem, ki ju zamenjuje, pa bo ustvaril številke, ki jih na ravni portfelja ni mogoče uskladiti.
- Kadar partnerji izvajajo skupaj, mora sistem izidov beležiti deleže prispevka (ali vsaj označiti skupno pripisovanje), namesto da bi vsak partnerjev poročevalski modul neodvisno zahteval 100 % skupnega izida – sicer bodo seštevki na ravni portfelja precenili skupni učinek, včasih hudo.
- To je povezano z [družbenim donosom naložbe](../družbeni-donos-naložbe/) in [poročanjem o izidih nepovratnih sredstev](../poročanje-o-izidih-nepovratnih-sredstev/): izračun SROI ali IRIS+, ki prezre izpodrinjenje ali preveč pripisuje skupne izide, bo dal napihnjeno razmerje, ki ne prestane revizije ali ponovitve.

## Pasti

- **Poročanje o lokalnem uspehu brez preverjanja širšega izpodrinjenja.** Program se lahko na najmanjši poročevalski ravni zdi zelo uspešen, na širši pa nevtralen ali celo negativen; vedno navedite geografsko raven, na katero se neto številka nanaša.
- **Dovoljevanje, da vsak partner pri skupni izvedbi zahteva polne zasluge.** Če deleži prispevka niso dogovorjeni in dokumentirani, bo seštevno poročanje čez partnerje precenilo skupni učinek – preverite, da trditve na ravni partnerjev ne seštejejo več od opaženega skupnega izida.
- **Obravnavanje pripisovanja kot natančnega odstotka, čeprav gre za presojo.** Analiza prispevka, za razliko od naključnega kontrafaktičnega scenarija, da zagovorljivo oceno, ne izmerjenega dejstva; predstavite jo z ustrezno negotovostjo, ne z lažno natančnostjo.
- **Prezrto izpodrinjenje pri ukrepih, usmerjenih na trg.** Podpora podjetjem, programi zaposlovanja in prostorsko usmerjena prenova so klasične kategorije z veliko izpodrinjenja; preverjanje izpodrinjenja pri njih obravnavajte kot obvezno, ne kot izbirno.

## Viri

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
