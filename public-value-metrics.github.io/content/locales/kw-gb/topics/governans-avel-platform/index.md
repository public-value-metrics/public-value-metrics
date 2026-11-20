# Governans avel Platform (GaaP)

Governans avel Platform yw an strateji a dhyssynya komponentow kevrennys, adhevnydhys — servis gwarnyansow, servis paymentow, servis hanow — unnweyth, yn kresel, may hyll kansow a wonysow governans aga devnydhya yn le dhe bub unn dhe dhyssynya y honan. Hi a dreyl an servisow didhital poblek dhe bwnk yskonomieth platform: nyns yw an talvos y'n unn kevrenn, yw y'n kost ogasel a'n bagas *nessa* a'n kemmer ow-nesa dhe seros.

## Perag y talvos

GDS a dherivas an strateji yn furv y'n dyllans 2015 "Government as a Platform," ow-dadhla bos an governans ow-tyssynya an keth gallosogethow — kemmeres pajment, gwarnya devnydhyer, kwiriaeth hanow, hwilas trigva — yn servis wosa servis, pub unn ow-ferya y brenans y honan, arvreythyans sawthekter, ha begh sopport hirneth. An dewis o nebes platformow kevrennys, gwrys dhe savonek uhel unnweyth hag adhevnydhys pup le: GOV.UK Notify rag danvon ebosteli, messajys tekst ha lytherow, GOV.UK Pay rag kemmeres paymentow awlyn, ha GOV.UK One Login (holyer a'n program hanow koth GOV.UK Verify) rag kwiriaeth hanow. An skeul a dhrehevsys an platformow ma yw an dustuni cleara a sewena an strateji: GOV.UK Pay re dreusprosesas moy es £10 bilyon yn treuslansow dres nes dhe 1,800 servis dyffrans — ha le may kemmeras nes dhe peswar bledhen dhe brosessa y £1 bilyon kynsa, lemmyn a brosess kemmys yn nes dhe pymp mis — ha GOV.UK Notify re dhanvonas moy es 9 bilyon messaj rag moy es 1,500 organyzasyon governans. Pub unn a'n servisow ma ow-kemmeres a dhelles dyssynya, sawthegi ha gwitha y borth paymentow y honan po pibyer messajys.

## An matematik

```
Kost dyssynya dhe bub servis (heb platform) = N servis × kost dhe dhyssynya,
  arvreythya-sawthek, ha gonys unn system pajment/gwarnya/hanow

Kost platform = kost dyssynya platform sefys
              + kost ogasel dhe bub servis ow-kemmeres (integrasyon,
                konfigurasyon, sopport bagas platform a dheu)

Adhevnydh a dhrehwel yn kyfyn pan:
  kost dyssynya platform < N × (kost dyssynya dhe bub servis − kost
  ogasel integrasyon)

Rag platform kowrys, kost ogasel dhe bub ow-kemmeres ynkresek a nesa
dhe'n fe treuslans/messaj hepken — an kost sefys yw rannys dres an
estat governans hollek, nyns yw budjet unn department, hen yw an
acheson may fo komponentow GaaP arghansys yn kresel dre gebmyn, nyns
yw chargys orth kost-dasgasa leun dhe'n kynsa ow-kemmeres.
```

## Ensampel oberys

**Awtorita leel ow-kemmeres GOV.UK Pay yn le a dhyssynya porth pajment**:

```
Arvysans dyssynya-dha-honan:
  ober konfurmya PCI-DSS + integrasyon + dasonan dhe dhrik
  ≈ £85,000 dyssynya + £22,000/bledhen dasonan

Kemmeres GOV.UK Pay:
  Whel integrasyon ≈ £12,000 (termyn displegyer)
  Feow treuslans: paymentow kard governans-dhe-sitisen yw kebmyn
  chargys orth kevran byghan + fe sefys dhe bub treuslans, heb begh
  PCI-DSS dyffrans dhe'n konsel
  ≈ £12,000 unnweyth, kost a dheu chanjadow gans kevaj, nyns yw sefys

Selvyans kynsa bledhen ≈ £85,000 − £12,000 = £73,000, kyns kowntya an
£22,000/bledhen dasonan gochyes ha'n peryl konfurmyans gochyes a
dalleth data kard yn system gonysys gans konsel — an nessa klass ma
yw an talvos sawthekter a dhegor public-sector-cybersecurity-value.
```

Skeulya an £73,000 na dres an nes dhe 1,800 servis a dhevnydh lemmyn GOV.UK Pay ha'n kost dyssynya gochyes hollek dres an governans yw yn kansow a vylyons — yskonomieth platform, nyns yw unn integrasyon, yw le may fo talvos gwir an strateji.

## Kevrenn gans ynjynnerieth medhelweyth

Governans avel Platform yw argyns ewn rag [gwruthyl po prena y'n governans](../byldya-po-prena-yn-gwarnans/): pan eus komponent kevrennys, arvreythys, gonysys yn ta, gwruthyl kehevelep gwrys-dha-honan yw fest skant an dewis gwell [talvos rag arghans](../talvedh-rag-arghans/), hag ev a fyll poynt 13 a'n [savonek servis didhital](../savonek-servis-didhital/) ("devnydhya ha ri dhe savonegow ygor, komponentow kebmyn ha patrons") nes dhe vos dre dyffrans. Hi a dreyl ynwedh furv [kost perghennyeth hollek yn TT governans](../kost-perthyans-hollek-yn-tt-an-governans/): kemmeres platform a gevewa lyn bras a gevalan ha dasonan rag kost oberyansek le, kevrennys gans devnydh, esya dhe rakwelas hag esya dhe dhisarghansya mar yw servis dhe dhiweythi. Adhevnydh ygor a gomponentow a'n jy kar yn [talvos data ygor](../gwerth-data-ygor/) — an dhew yw strategiow rag dhevnydhya tra a wra an governans unnweyth avel gwredhek kevrennys, nyns yw ased departmental.

## Trapow

- **Dasdyssynya yn kuf**: bagasow a dhyssynya yn kuv aga integrasyon pajment po gwarnya y honan drefen bos argerdh dalleth an platform lentha es y wruthyl aga honan — kudh gevreth governans, nyns yw teknologieth, hag a vorra yn kuf an yskonomieth adhevnydh may sew an strateji hollek.
- **Dowdarghansa bagas an platform dhe'n talvos a wra**: talvos a dheu dhe departmentow ow-kemmeres ha kost a drik gans bagas an platform, ow-kruthyl peryl dowdarghans kenedhlek heb arghans kresel ha gwithys — versyon a drasedi an kebmyn.
- **Musura sewena platform dre devnydh hepken**: nivyow kemmeres (servisow kemmerys, messajys danvonys) yw sinyek ynwedh, nyns yw dustuni talvos; an arbrynyans gwir yw an aritmetik kost-dyssynya-gochyes ha peryl-gochyes a-ugh.
- **Ewnhe "platform" avel kehevelep a "monolith"**: komponentow GaaP a sew drefen bos pub unn ow-gwul unn tra yn ta gans ynterfas kyng, sefys — bundlya gallosogethow dyvyskys yn unn "platform" a dhesedha an kudhedh dyssynya-gwrys-dha-honan orth skeul dyffrans.

## Fentynyow

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
