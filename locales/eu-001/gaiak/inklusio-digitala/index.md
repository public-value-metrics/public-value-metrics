# Inklusio digitala

Inklusio digitala "digital lehenespenez" "digital bakarrik" bihur ez dadin ziurtatzeko diziplina da — kanalik merkeenaren inguruan diseinatutako zerbitzu publikoek laguntzarik gabe erabili ezin dituzten edo nahi ez dituzten herritarrentzat ere funtzionatzen jarraitzen dutela. GDS-k entrega-mekanismo espezifikoa, "assisted digital" (laguntza digitala), asmatu zuen gobernuko zerbitzu digital guztientzako nahitaezko eskakizun gisa, ez aukerako gehigarri gisa.

## Zergatik den garrantzitsua

2012ko Government Digital Strategy-k anbizioa garbi ezarri zuen: zerbitzu digitalak digital lehenespenez eraiki behar dira, baina estrategiak berak aitortu zuen Erresuma Batuko helduen %10 inguruk ezingo zituela laguntzarik gabe erabili, eta sailei laguntza digitaleko babesa ematera konprometitu zituen —giza bitartekaritzako bide bat, telefonoz, pertsonalki edo bitartekari baten bidez— zerbitzuaren zati gisa, geroago erantsitako ordezko bereizi gisa ez. Konpromiso hori da gaur egun [digital-service-standard](../zerbitzu-digitalen-estandarra/) arauaren 5. puntua, "ziurtatu edonork erabil dezakeela zerbitzua". Etengabeko bazterkeriaren eskala Lloyds Banking Group-en urteko UK Consumer Digital Index-ak jarraitzen du: 2024ko edizioak aurkitu zuen Erresuma Batuan 1,6 milioi pertsona inguru lineaz kanpo jarraitzen dutela, eta talde hori 70–79 urteko pertsonetara, £35.000 azpiko diru-sarrerak dituztenetara eta erretiratuetara edo langabetuetara okertzen dela nabarmen — hain zuzen berriz diseinatzen ari diren zerbitzu publikoen mende egoteko aukera gehien duen biztanleria. Txosten berak aurkitu zuen Erresuma Batuko lan-indarraren %48k bakarrik osa zitzakeela Essential Digital Skills marko-ko 20 zereginak, hau da, bazterkeria ez dela konektibitate bitarra, trebetasun-, konfiantza- eta fidantza-espektro bat baizik, "banda zabala du" metrika sinple batek erabat galtzen duena.

## Matematika

Inklusio digitala esparru bat eta ekitate-egiaztapen bat da formula bakar bat baino, baina [distributional-weighting](../banaketa-haztapena/) bidez balio-ebaluazio kuantitatiboarekin osatzen da:

```
Kanal-aldaketaren balio inozoa:
  balioa = aldatutako bolumena × (kostua_zaharra − kostua_digitala)     [ikus channel-shift-savings]

Inklusioaren arabera doitutako balioa:
  balioa = (aldatutako bolumena × pisatu gabeko aurrezpena)
         − (kanpoan geratutako erabiltzaileak × laguntza digitaleko hornidura-kostua)
         − (sarbidea galtzen duten edo zerbitzu-kalitate narriatua jasaten duten
            kanpoko taldeei egindako kalterako banaketa-pisuaren doikuntza)

Laguntza digitala ez da hutsegitearen hondar-kostua — bere
[transakzio bakoitzeko kostua](../transakzio-bakoitzeko-kostua/) duen kanal diseinatu bat da,
normalean auto-zerbitzu digitala baino transakzio bakoitzeko askoz altuagoa baina
partzialki ordezkatzen duen kanal zaharra baino oraindik normalean merkeagoa.
```

## Adibide landua

**Universal Credit estiloko prestazio-zerbitzu nazionala**: 2,5 milioi eskaera/urte, eskatzaileen %10entzat laguntza digitala behar dela ebaluatua, Government Digital Strategy-ren planifikazio-hipotesiaren arabera.

```
Kanpoko/laguntza digitaleko koortea = 2.500.000 × %10 = 250.000 eskaera/urte

Laguntza digitaleko kanalaren kostua (telefonoa + aurrez aurreko laguntza,
ahulezia eta konplexutasuna kudeatzeko langiletua) ≈ £9,50/eskaera
  = 250.000 × £9,50 = £2.375.000/urte

Beste %90en auto-zerbitzu digitalaren kostua ≈ £0,40/eskaera
  = 2.250.000 × £0,40 = £900.000/urte

Transakzio bakoitzeko kostu nahasia = (2.375.000 + 900.000) / 2.500.000
  = £1,31/eskaera

Laguntza digitala saltatzen duen diseinu batek, transakzio bakoitzeko goiburuko
kostu baxuago bat lortzeko (adib. £0,40 nahasia, kanpoan geratutako 250.000
eskatzaileak alde batera utziz), ez du £2,375m-ko kostu hori ezabatzen —
erreklamatu gabeko eskubideetan, helegiteetan eta beheranzko krisi-zerbitzuen
eskarian bihurtzen du, guztiz beste aurrekontu baten gainean erortzen dena.
```

## Software ingeniaritzarekin lotura

Laguntza digitala kanal diseinatu bat da, hau da, interfazeak, SLA-k eta instrumentazioa ditu beste edozein bezala: telefonoko kasu-langileen tresna bat, Citizens Advice-rentzako edo tokiko erakunde baterako bitartekari-portal bat, edo pertsonalki erabiltzen den kiosko-fluxu bat. Atzerapen gisa tratatzea —letra txikiko telefono-zenbaki bat, aurkikuntzatik kontuan hartutako kanal bat izan beharrean— da zerbitzuek [digital-service-standard](../zerbitzu-digitalen-estandarra/) arauaren 5. puntuan ebaluazioan huts egiteko modurik ohikoena. Inklusio digitala talde honetako gainerako gai guztien ekitate-lentea da: [channel-shift-savings](../kanal-aldaketaren-aurrezpenak/) zein biziki gauzatu daitekeen mugatzen du, [transakzio bakoitzeko kostuan](../transakzio-bakoitzeko-kostua/) zintzotasunez sartu behar den lerro bat da, eta [distributional-weighting](../banaketa-haztapena/) zerbitzu digitalen testuinguruan zuzenean aplikatzea da — dagoeneko digitalki eta ekonomikoki baztertuta dauden pertsonengan neurriz gain erortzen den aurrezpen bat behera pisatu behar da, biztanleria osoan berdin banatutako aurrezpen baten baliokide gisa tratatu beharrean.

## Tranpak

- **"Digital lehenespenez" "digital bakarrik" bezala irakurtzea**: telefono-linea edo leihatila ixtea hartze digitalak atalase bat gainditzen duenean, geratzen den koorteak benetan erabilgarria den alternatiba duela egiaztatu gabe.
- **Inklusioa konektibitate bitarraren bidez neurtzea**: "banda zabala du" edo "telefono adimenduna du" transakzio zehatz bat osatzeko gaitasunaren proxy eskasa da — Essential Digital Skills hutsuneak (Erresuma Batuko lan-indarraren %48k bakarrik osatzen ditu 20 zereginak, Lloyds 2024) erakusten du trebetasunak eta konfiantzak sarbidea bezainbeste axola dutela.
- **Laguntza digitala biribiltze-akats gisa kostatzea**: kontingentzia-lerro txiki gisa aurrekontatzea, bere [transakzio bakoitzeko kostua](../transakzio-bakoitzeko-kostua/) duen kanal egoki gisa baino, eta gero sorpresa hartzea abian jartzean finantzaketa eta langile gutxiegi dituenean.
- **Digital osatzaile arrakastatsuak bakarrik inkestatzea**: erabat zerbitzuaren barruan egindako asebetetze- eta erabilgarritasun-ikerketak urrunago inoiz iritsi ez ziren pertsonak galtzen ditu, hain zuzen inklusio digitaleko lanak babestu nahi duen biztanleria.

## Iturriak

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
