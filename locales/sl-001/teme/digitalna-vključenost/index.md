# Digitalna vključenost

Digitalna vključenost je disciplina, ki zagotavlja, da »digitalno privzeto« ne postane »samo digitalno«, torej da javne storitve, zasnovane okoli najcenejšega kanala, še vedno delujejo za državljane, ki ga brez pomoči ne morejo ali nočejo uporabljati. GDS je skoval konkretni mehanizem izvedbe, »podprta digitalizacija« (assisted digital), kot obvezno zahtevo za vsako vladno digitalno storitev, ne kot neobvezen dodatek.

## Zakaj je pomembno

Government Digital Strategy iz leta 2012 je ambicijo postavila jasno: digitalne storitve naj se gradijo digitalno privzeto, a sama strategija je priznala, da približno 10 % odraslih v Združenem kraljestvu brez pomoči ne bo moglo uporabljati storitev, in ministrstva zavezala, da kot del storitve (ne kot ločeno rezervo, pritrjeno pozneje) zagotovijo podporo podprte digitalizacije, torej pot s človeškim posredovanjem, po telefonu, osebno ali prek posrednika. Ta zaveza je zdaj točka 5 [digital-service-standard](../standard-digitalnih-storitev/), »poskrbite, da lahko storitev uporablja vsak«. Obseg trajne izključenosti spremlja letni UK Consumer Digital Index skupine Lloyds Banking Group: izdaja za leto 2024 je ugotovila, da je okoli 1,6 milijona ljudi v Združenem kraljestvu še vedno brez povezave in da ta skupina močno nagiba k osebam, starim 70–79 let, tistim z dohodkom pod 35.000 £ ter upokojencem ali brezposelnim, torej prav k populaciji, ki je najverjetneje odvisna od javnih storitev, ki se preoblikujejo. Isto poročilo je ugotovilo, da le 48 % delovne sile v Združenem kraljestvu zmore opraviti vseh 20 nalog okvira Essential Digital Skills, kar pomeni, da izključenost ni dvojiška povezljivost, temveč spekter veščin, samozavesti in zaupanja, ki ga preprosta metrika »ima širokopasovni dostop« popolnoma zgreši.

## Matematika

Digitalna vključenost je okvir in preizkus enakosti, ne ena sama formula, vendar se s kvantitativno oceno vrednosti sestavlja prek [distributional-weighting](../porazdelitveno-ponderiranje/):

```
Naivna vrednost preusmeritve kanalov:
  vrednost = preusmerjeni obseg × (strošek_staro − strošek_digitalno)     [glej channel-shift-savings]

Vrednost, prilagojena za vključenost:
  vrednost = (preusmerjeni obseg × neutežen prihranek)
           − (izključeni uporabniki × strošek zagotavljanja podprte digitalizacije)
           − (prilagoditev porazdelitvene uteži za škodo izključenim
              skupinam, ki izgubijo dostop ali se soočijo s poslabšano
              kakovostjo storitve)

Podprta digitalizacija ni preostali strošek neuspeha – je zasnovan
kanal z lastnim [stroškom na transakcijo](../strošek-na-transakcijo/),
običajno na transakcijo precej višjim od digitalne samopostrežbe,
a še vedno običajno cenejšim od starega kanala, ki ga delno nadomešča.
```

## Praktični primer

**Nacionalna storitev dajatev v slogu Universal Credit**: 2,5 milijona zahtevkov na leto, ocenjenih, da približno 10 % upravičencev potrebuje podporo podprte digitalizacije po načrtovalni predpostavki Government Digital Strategy.

```
Izključena kohorta/kohorta podprte digitalizacije = 2.500.000 × 10 % = 250.000 zahtevkov/leto

Strošek kanala podprte digitalizacije (telefonska + osebna podpora,
z osebjem za ranljivost in zapletenost) ≈ 9,50 £/zahtevek
  = 250.000 × 9,50 £ = 2.375.000 £/leto

Strošek digitalne samopostrežbe za drugih 90 % ≈ 0,40 £/zahtevek
  = 2.250.000 × 0,40 £ = 900.000 £/leto

Mešani strošek na transakcijo = (2.375.000 + 900.000) / 2.500.000
  = 1,31 £/zahtevek

Zasnova, ki podprto digitalizacijo preskoči, da doseže nižji glavni
strošek na transakcijo (npr. 0,40 £ mešano, ob zanemarjanju 250.000
izključenih upravičencev), tega stroška 2,375 milijona £ ne odpravi –
pretvori ga v neuveljavljene pravice, pritožbe in povpraševanje po
kriznih storitvah navzdol po verigi, ki pade na povsem drug proračun.
```

## Povezava s programskim inženirstvom

Podprta digitalizacija je zasnovan kanal, kar pomeni, da ima vmesnike, SLA in instrumentacijo kot vsak drug: orodje referenta za telefon, portal za posrednike za Citizens Advice ali lokalno oblast ali tok za osebni kiosk. Obravnavanje kot naknadne misli (telefonska številka drobnega tiska namesto kanala, upoštevanega od odkrivanja) je najpogostejši način, kako storitve pri presoji ne izpolnijo točke 5 [digital-service-standard](../standard-digitalnih-storitev/). Digitalna vključenost je leča enakosti za vsako drugo temo v tej skupini: omejuje, kako agresivno je mogoče uresničiti [prihranke zaradi preusmeritve kanalov](../prihranki-zaradi-preusmeritve-kanalov/), je postavka, ki jo je treba pošteno vključiti v [strošek na transakcijo](../strošek-na-transakcijo/), in je neposredna uporaba [distributional-weighting](../porazdelitveno-ponderiranje/) v kontekstu digitalnih storitev: prihranek, ki nesorazmerno pade na ljudi, ki so že digitalno in ekonomsko izključeni, je treba znižati z utežjo, ne obravnavati kot enakovreden prihranku, enakomerno razporejenemu po populaciji.

## Pasti

- **»Digitalno privzeto« brano kot »samo digitalno«**: zapiranje telefonske linije ali okenca, ko digitalna uporaba preseže prag, brez preverjanja, da ima preostala kohorta resnično uporabno alternativo.
- **Merjenje vključenosti z dvojiško povezljivostjo**: »ima širokopasovni dostop« ali »ima pametni telefon« je slab približek zmožnosti dokončanja določene transakcije; vrzel v Essential Digital Skills (le 48 % delovne sile v Združenem kraljestvu opravi vseh 20 nalog po Lloyds 2024) kaže, da so veščine in samozavest enako pomembne kot dostop.
- **Obravnavanje stroška podprte digitalizacije kot zaokrožitvene napake**: proračunska postavka kot majhna rezerva namesto pravega kanala z lastnim [stroškom na transakcijo](../strošek-na-transakcijo/), nato presenečenje, ko je ob zagonu premalo financirana in premalo zasedena.
- **Anketiranje samo uspešnih digitalnih zaključevalcev**: raziskave zadovoljstva in uporabnosti, izvedene povsem znotraj storitve, zgrešijo ljudi, ki sploh niso prišli tako daleč, to pa je prav populacija, ki jo mora delo digitalne vključenosti zaščititi.

## Viri

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
