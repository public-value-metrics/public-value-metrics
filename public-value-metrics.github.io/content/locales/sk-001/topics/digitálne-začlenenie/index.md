# Digitálne začlenenie

Digitálne začlenenie je disciplína zabezpečenia, aby sa „digital by default“ nestalo „iba digitálne“: aby verejné služby navrhnuté okolo najlacnejšieho kanála stále fungovali pre občanov, ktorí ho nevedia alebo nechcú používať bez pomoci. GDS vytvoril konkrétny mechanizmus poskytovania, „asistovaný digitál“ (assisted digital), ako povinnú požiadavku pre každú vládnu digitálnu službu, nie voliteľný doplnok.

## Prečo na tom záleží

Government Digital Strategy z roku 2012 stanovila ambíciu jasne: digitálne služby sa majú budovať ako digitálne štandardne, no samotná stratégia uznala, že okolo 10 % dospelých v Spojenom kráľovstve ich nebude vedieť používať bez pomoci, a zaviazala rezorty poskytovať asistovanú digitálnu podporu (cestu sprostredkovanú človekom, telefonicky, osobne alebo cez sprostredkovateľa) ako súčasť služby, nie ako samostatnú záložnú možnosť pripojenú neskôr. Tento záväzok je dnes bodom 5 [štandardu digitálnych služieb](../štandard-digitálnych-služieb/), „zabezpečte, aby službu mohol používať každý“. Rozsah pretrvávajúceho vylúčenia sleduje každoročný UK Consumer Digital Index od Lloyds Banking Group: vydanie z roku 2024 zistilo, že okolo 1,6 milióna ľudí v Spojenom kráľovstve zostáva offline a že táto skupina je výrazne naklonená k ľuďom vo veku 70 – 79 rokov, tým s príjmom pod £35 000 a dôchodcom či nezamestnaným, teda presne populácii, ktorá najpravdepodobnejšie závisí od verejných služieb, ktoré sa prepracúvajú. Tá istá správa zistila, že len 48 % britskej pracovnej sily zvládlo všetkých 20 úloh rámca Essential Digital Skills, čo znamená, že vylúčenie nie je binárne pripojenie, ale spektrum zručností, sebadôvery a dôvery, ktoré jednoduchá metrika „má širokopásmové pripojenie“ úplne míňa.

## Matematika

Digitálne začlenenie je rámec a kontrola spravodlivosti, nie jediný vzorec, ale skladá sa s kvantitatívnym hodnotením hodnoty cez [distribučné váženie](../distribučné-váženie/):

```
Naivná hodnota presunu medzi kanálmi:
  hodnota = presunutý objem × (náklady_staré − náklady_digitálne)     [pozri channel-shift-savings]

Hodnota upravená o začlenenie:
  hodnota = (presunutý objem × nevážená úspora)
          − (vylúčení používatelia × náklady asistovaného digitálneho poskytovania)
          − (úprava distribučným váhovaním za škodu pre vylúčené
             skupiny, ktoré strácajú prístup alebo čelia zhoršenej
             kvalite služby)

Asistovaný digitál nie je zvyškový náklad zlyhania, je to navrhnutý
kanál s vlastnými [nákladmi na transakciu](../náklady-na-transakciu/),
typicky na transakciu omnoho vyššími než digitálna samoobsluha, ale
stále zvyčajne lacnejšími než zdedený kanál, ktorý čiastočne nahrádza.
```

## Vypracovaný príklad

**Národná dávková služba typu Universal Credit**: 2,5 milióna žiadostí ročne, posúdených tak, že asistovanú digitálnu podporu potrebuje odhadom 10 % žiadateľov podľa plánovacieho predpokladu Government Digital Strategy.

```
Kohorta vylúčených/asistovaného digitálu = 2 500 000 × 10 % = 250 000 žiadostí ročne

Náklady asistovaného digitálneho kanála (telefonická + osobná podpora,
obsadená na zvládnutie zraniteľnosti a zložitosti) ≈ £9,50/žiadosť
  = 250 000 × £9,50 = £2 375 000 ročne

Náklady digitálnej samoobsluhy pre ostatných 90 % ≈ £0,40/žiadosť
  = 2 250 000 × £0,40 = £900 000 ročne

Zmiešané náklady na transakciu = (2 375 000 + 900 000) / 2 500 000
  = £1,31/žiadosť

Návrh, ktorý vynechá asistovaný digitál, aby dosiahol nižšie hlavné
náklady na transakciu (napr. £0,40 zmiešane, ignorujúc 250 000
vylúčených žiadateľov), nezruší týchto £2,375 mil. – premení ich na
nevyužité nároky, odvolania a následný dopyt po krízových službách,
ktorý dopadne na úplne iný rozpočet.
```

## Súvislosť so softvérovým inžinierstvom

Asistovaný digitál je navrhnutý kanál, čo znamená, že má rozhrania, SLA a inštrumentáciu ako každý iný: nástroj pre referenta na báze telefónu, portál pre sprostredkovateľa pre Citizens Advice alebo miestnu samosprávu, alebo osobný kioskový tok. Zaobchádzanie s ním ako s dodatkom (telefónne číslo malým písmom namiesto kanála zvažovaného od objavovania) je najčastejším spôsobom, ako služby pri posúdení neuspejú v bode 5 [štandardu digitálnych služieb](../štandard-digitálnych-služieb/). Digitálne začlenenie je optika spravodlivosti pre každú inú tému tejto skupiny: obmedzuje, ako agresívne možno realizovať [úspory z presunu medzi kanálmi](../úspory-z-presunu-medzi-kanálmi/), je to položka, ktorá sa musí poctivo zahrnúť do [nákladov na transakciu](../náklady-na-transakciu/), a je to priama aplikácia [distribučného váženia](../distribučné-váženie/) na kontext digitálnych služieb: úspora, ktorá dopadá neúmerne na ľudí už digitálne a ekonomicky vylúčených, by sa mala znížiť váhou, nie považovať za rovnocennú úspore rozloženej rovnomerne naprieč populáciou.

## Úskalia

- **„Digital by default“ čítané ako „iba digitálne“**: zatvorenie telefónnej linky alebo pultu, keď digitálne využívanie prekročí prah, bez overenia, že zostávajúca kohorta má skutočne použiteľnú alternatívu.
- **Meranie začlenenia binárnym pripojením**: „má širokopásmové pripojenie“ alebo „vlastní smartfón“ je slabým zástupným ukazovateľom schopnosti dokončiť konkrétnu transakciu. Medzera v Essential Digital Skills (len 48 % britskej pracovnej sily dokončí všetkých 20 úloh podľa Lloyds 2024) ukazuje, že zručnosti a sebadôvera záležia rovnako ako prístup.
- **Oceňovanie asistovaného digitálu ako zaokrúhľovacej chyby**: rozpočtovanie ako malej rezervnej položky namiesto riadneho kanála s vlastnými [nákladmi na transakciu](../náklady-na-transakciu/) a následné prekvapenie, keď je pri spustení poddimenzovaný a poddotovaný personálom.
- **Prieskum len úspešne dokončujúcich digitálnych používateľov**: výskum spokojnosti a použiteľnosti realizovaný celý priamo v službe míňa ľudí, ktorí sa tak ďaleko nedostali, čo je presne populácia, ktorú má práca digitálneho začlenenia chrániť.

## Zdroje

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
