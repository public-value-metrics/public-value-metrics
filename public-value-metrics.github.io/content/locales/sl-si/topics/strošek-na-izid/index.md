# Strošek na izid

Strošek na izid je skupna poraba programa, deljena s številom ljudi, ki dosežejo opredeljeno, smiselno spremembo svojih okoliščin, ne s številom tistih, ki so zgolj prejeli storitev. To je najostrejša metrika učinkovitosti, ki jo lahko uporabita financer ali izvajalska ekipa, ker vsili predhodno vprašanje, ki se mu večina dobrodelnih organizacij izogiba: kaj natančno šteje za uspeh?

## Zakaj je pomembno

Banka hrane lahko iz računov istega leta poroča dve zelo različni številki. Strošek na razdeljen paket hrane je lahko 15 £. Strošek na gospodinjstvo, ki doseže prehransko varnost, torej ne potrebuje več nujne prehranske pomoči, preverjeno ob nadaljnji točki, je lahko 340 £. Obe sta resnični. Samo ena pove financerju, ali denar deluje. Razlika med njima je razlika med izložkom in izidom: predan paket je izložek; gospodinjstvo, ki ni več v krizi, je izid. Glej [izidi in izložki](../izidi-in-izložki/).

Britanski tretji sektor je dve desetletji gradil infrastrukturo, da to razlikovanje vsili. »Pristop štirih stebrov« organizacije New Philanthropy Capital k učinkovitosti dobrodelnih organizacij izrecno od organizacij zahteva, da izide navedejo pred izložki, Inspiring Impact, britanski sodelovalni projekt merjenja vpliva s podporo financerjev, pa objavlja Outcomes Matrix, ki jo mnoge vloge za nepovratna sredstva zdaj zahtevajo od dobrodelnih organizacij. Letni raziskovalni program »State of Hunger« organizacije Trussell Trust, izvajan s Heriot-Watt University, obstaja prav zato, ker same številke paketov ne povedo ničesar o tem, ali ljudje ubežijo prehranski negotovosti.

Strošek na izid ima pomen šele, ko je določen kontrafaktični scenarij: izid, dosežen »tako ali tako«, ni izid, ki ga je program kupil. Glej [kontrafaktična analiza](../kontrafaktična-analiza/) in [izpodrivanje in pripisovanje](../izpodrinjenje-in-pripisovanje-učinka/).

## Matematika

```
Strošek na izid = skupni strošek programa / število upravičencev, ki dosežejo opredeljeni izid

kjer:
  Skupni strošek programa = neposredni strošek izvedbe + pošteni delež režije
  Opredeljeni izid        = vnaprej določena, merljiva sprememba stanja
                            (npr. »prehransko varen ob 6-mesečnem nadaljnjem spremljanju«,
                            ne »prejel paket hrane«)
```

Primerjajte z [zbirkami stroškov na enoto](../zbirke-enotnih-stroškov/) (npr. sektorskimi primerjalnimi vrednostmi stroškov na enoto), da presodite, ali je dani strošek na izid dober, povprečen ali slab v primerjavi s primerljivimi intervencijami.

## Praktični primer

**Banka hrane, eno leto**:

- Skupni strošek programa: 450.000 £
- Razdeljenih paketov: 30.000
- Strošek na paket (metrika izložka): 450.000 £ / 30.000 = **15 £**

Dobrodelna organizacija izvede tudi šestmesečno nadaljnjo anketo na vzorcu gospodinjstev in ugotovi, da 35 % gospodinjstev, ki so prejela tri ali več paketov, poroča, da ne potrebujejo več nujne prehranske pomoči, in dosega nad pragom prehranske varnosti na standardnem modulu ankete o prehranski varnosti. Od 1.800 gospodinjstev, ki so to leto prejela tri ali več paketov, jih 630 doseže ta izid.

```
Strošek na izid = 450.000 £ / 630 = 714 £ na gospodinjstvo, ki doseže prehransko varnost
```

Številka 714 £ je tista, ki jo mora uporabiti financer, ki to dobrodelno organizacijo primerja s pilotom denarnih nakazil ali storitvijo svetovanja o dolgovih, ne 15 £. Če primerljiv program denarnih nakazil v isti regiji doseže prehransko varnost po 500 £ na gospodinjstvo, banka hrane ni očitno učinkovitejša pot do istega izida, čeprav je njen strošek na paket videti nizek.

## Povezava s programskim inženirstvom

Večina sistemov za vodenje primerov je zgrajena za beleženje izložkov, ker so izložki to, kar se zgodi znotraj transakcije (paket je predan, obrazec oddan). Izidi se običajno zgodijo pozneje, pogosto zunaj običajnega okna zajema sistema, in zahtevajo namerno oblikovalsko odločitev: mehanizem nadaljnjega spremljanja (sprožilec ankete, potek ponovnega stika, povezovanje podatkov) zgradite kot enakovredno funkcijo, ne kot naknadno pritrjen dodatek za letno poročilo. Inženirji, ki gradijo platforme za upravljanje nepovratnih sredstev ali vodenje primerov za sektor, naj »kaj je dogodek izida in kako ga opazimo« obravnavajo kot vprašanje zahtev, postavljeno pred zamrznitvijo podatkovnega modela: izidno polje je veliko težje dodati naknadno kot števec izložkov. Glej [izidi in izložki](../izidi-in-izložki/) in [logični model](../logični-model/) za strukturo tega pogovora o zahtevah ter [strošek na upravičenca](../strošek-na-upravičenca/) za hitrejšo, grobo metriko, po kateri ekipe posežejo, ko sledenje izidom še ni zgrajeno.

## Pasti

- **Poročanje izložkov, preoblečenih v izide.** »Doseženi ljudje« ni »ljudje, ki jim je bilo pomagano«. Če je metriko mogoče izdelati iz sistemskega dnevnika brez nadaljnjega stika, je skoraj zagotovo izložek.
- **Igranje z imenovalcem.** Zožitev populacije izida na »tiste, ki so dokončali program« tiho izpusti ljudi, ki so odstopili (pogosto najtežje primere), in napihne navidezno stopnjo. Imenovalec navedite kot vse, ki so začeli, ne vse, ki so končali.
- **Brez kontrafaktičnega scenarija.** Štetje vseh, ki so dosegli izid, tudi tistih, ki bi ga tako ali tako, precenjuje, kaj je program kupil. Glej [kontrafaktična analiza](../kontrafaktična-analiza/).
- **Primerjanje med nezdružljivimi opredelitvami izida.** »Prehransko varen«, izmerjeno z validiranim modulom ankete, ni primerljivo s »prehransko varen«, samoprijavljenim v obrazcu zadovoljstva; lestvica stroškov na izid je poštena le, če se opredelitve izidov ujemajo.

## Viri

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
