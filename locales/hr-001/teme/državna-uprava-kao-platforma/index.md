# Državna uprava kao platforma (GaaP)

Državna uprava kao platforma (Government as a Platform) je strategija izgradnje zajedničkih, ponovno upotrebljivih komponenti (usluge obavijesti, usluge plaćanja, usluge identiteta) jednom i centralno, tako da ih stotine pojedinačnih državnih usluga koriste umjesto da svaka gradi vlastitu. Ona javnu digitalnu infrastrukturu preoblikuje u problem ekonomije platformi: vrijednost nije u jednoj integraciji, nego u tome što granični trošak *sljedećeg* tima koji je usvoji teži nuli.

## Zašto je važno

GDS je strategiju formalno iznio u publikaciji „Government as a Platform” iz 2015., tvrdeći da je država iste sposobnosti (naplatu plaćanja, obavještavanje korisnika, provjeru identiteta, pretraživanje adresa) gradila zasebno u svakoj usluzi, a svaka je nosila vlastitu nabavu, sigurnosnu procjenu i teret trajne podrške. Alternativa je bio mali broj zajedničkih platformi, jednom izgrađenih po visokom standardu i svugdje ponovno korištenih: GOV.UK Notify za slanje e-pošte, SMS poruka i pisama, GOV.UK Pay za naplatu plaćanja putem interneta i GOV.UK One Login (nasljednik ranijeg programa identiteta GOV.UK Verify) za provjeru identiteta. Opseg koji su te platforme dosegnule najjasniji je dokaz da je strategija uspjela: GOV.UK Pay obradio je više od £10 milijardi transakcija u oko 1.800 pojedinačnih usluga, a dok mu je za prvu milijardu funti trebalo otprilike četiri godine, danas toliko obradi za otprilike pet mjeseci; GOV.UK Notify poslao je više od 9 milijardi poruka u ime više od 1.500 državnih organizacija. Svaka od tih usluga koje su ih usvojile izbjegla je izgradnju, osiguravanje i održavanje vlastitog prolaza za plaćanja ili cjevovoda za poruke.

## Matematika

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## Primjer iz prakse

**Lokalna uprava koja usvaja GOV.UK Pay umjesto izgradnje vlastitog prolaza za plaćanja**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85.000 build + £22.000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12.000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12.000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85.000 − £12.000 = £73.000, before counting the
avoided £22.000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

Pomnožite tih £73.000 s otprilike 1.800 usluga koje danas koriste GOV.UK Pay i ukupni izbjegnuti trošak izgradnje u državnoj upravi iznosi stotine milijuna: ekonomija platforme, a ne bilo koja pojedinačna integracija, mjesto je gdje stvarno leži vrijednost strategije.

## Veza s programskim inženjerstvom

Državna uprava kao platforma izravan je argument za [izgradnju ili kupnju u državnoj upravi](../izgraditi-ili-kupiti-u-državnoj-upravi/): kada postoji zajednička, procijenjena, dobro vođena komponenta, izgradnja vlastitog ekvivalenta vrlo je rijetko bolji izbor s gledišta [vrijednosti za novac](../vrijednost-za-novac/) i gotovo po definiciji ne ispunjava točku 13 [standarda digitalnih usluga](../standard-digitalnih-usluga/) („koristite otvorene standarde, zajedničke komponente i obrasce te doprinosite njima”). Mijenja i oblik [ukupnog troška vlasništva u državnom IT-u](../ukupni-trošak-vlasništva-u-državnom-it-u/): usvajanje platforme zamjenjuje veliku stavku kapitala i održavanja manjim operativnim troškom vezanim uz korištenje, koji je lakše prognozirati i lakše ukinuti ako se usluga povuče iz upotrebe. Otvoreno ponovno korištenje komponenti ima srodnika u [vrijednosti otvorenih podataka](../vrijednost-otvorenih-podataka/): oboje su strategije tretiranja onoga što država proizvodi jednom kao zajedničke infrastrukture, a ne kao imovine pojedinog ministarstva.

## Zamke

- **Skrivena ponovna izgradnja**: timovi tiho grade vlastitu integraciju plaćanja ili obavijesti jer je uvođenje na platformu sporije od samostalne izrade; to je problem trenja upravljanja, a ne tehnologije, i tiho nagriza ekonomiku ponovne uporabe o kojoj ovisi cijela strategija.
- **Nedovoljno financiranje tima platforme u odnosu na vrijednost koju stvara**: vrijednost pripada ministarstvima korisnicima, a trošak ostaje timu platforme, što stvara kronični rizik podulaganja ako financiranje nije centralizirano i zaštićeno; to je inačica tragedije zajedničkog dobra.
- **Mjerenje uspjeha platforme samo korištenjem**: brojke usvajanja (uvedene usluge, poslane poruke) su vodeći pokazatelj, a ne dokaz vrijednosti; stvarni test je gornji račun izbjegnutog troška izgradnje i izbjegnutog rizika.
- **Izjednačavanje „platforme” s „monolitom”**: komponente GaaP-a uspijevaju jer svaka radi jednu stvar dobro uz usko, stabilno sučelje; povezivanje nepovezanih sposobnosti u jednu „platformu” ponovno stvara problem izrade po mjeri na drugoj razini.

## Izvori

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
