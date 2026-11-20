# Vrijednost umjetne inteligencije u državnoj upravi

Vrijednost umjetne inteligencije u državnoj upravi zahtjev je da sustav umjetne inteligencije koji se koristi u javnoj usluzi zadovolji istu ljestvicu vrijednosti za novac i javne vrijednosti kao i svaka druga odluka o potrošnji: ne nižu zato što je novost, niti višu zato što ga se boji. To je pitanje na koje isporučiteljski tim mora moći odgovoriti prije, a ne nakon što se značajka umjetne inteligencije pusti u rad: stvara li ona više vrijednosti nego što košta, kad se osiguranje kvalitete, nadzor i rizik iskreno uračunaju u cijenu?

## Zašto je važno

Britanski Central Digital and Data Office (CDDO) 2024. objavio je Generative AI Framework for Government (Okvir za generativnu umjetnu inteligenciju u državnoj upravi), nadovezujući se na ranije privremene smjernice iz lipnja 2023., i strukturirao ga oko deset načela koja obuhvaćaju što je generativna umjetna inteligencija, njezine etičke implikacije, sigurnost alata, kontrole osiguranja kvalitete, upravljanje cijelim životnim ciklusom generativne umjetne inteligencije, prepoznavanje stvarnih slučajeva uporabe, suradnju među tijelima uprave, transparentnost, vještine i upravljanje. Inzistiranje okvira na „smislenoj ljudskoj kontroli” i upravljanju cijelim životnim ciklusom postoji jer poslovni slučajevi projekata umjetne inteligencije imaju poseban način neuspjeha kakav druga IT ulaganja nemaju: naslovni broj produktivnosti iz pilota lako je proizvesti i lako precijeniti jer se mjeri prije nego što se uračuna teret provjere, ispravljanja i nadzora koji alat stvara. Uz okvir, Algorithmic Transparency Recording Standard (ATRS, Standard za bilježenje algoritamske transparentnosti) obvezuje javna tijela da objave standardizirani zapis, koji uključuje svrhu, korištene podatke, performanse, testiranje pravednosti i mjere ljudskog nadzora, za algoritamske alate koji znatno utječu na odluke o pojedincima, čime trošak osiguranja kvalitete sustava umjetne inteligencije postaje javna evidencija, a ne unutarnja procjena koju tim može tiho preskočiti.

## Matematika

Uvođenje umjetne inteligencije procjenjuje se kao dodatak standardnoj procjeni [vrijednosti za novac](../vrijednost-za-novac/), a ne kao njezina zamjena, pri čemu se članovi specifični za umjetnu inteligenciju iskazuju izričito, a ne utapaju u jedan broj „dobitka u produktivnosti”:

```
Neto vrijednost sustava umjetne inteligencije =
    dobitak u produktivnosti (ušteđeno vrijeme × puni trošak osoblja)
  − trošak licence/računalnih resursa
  − trošak ljudske provjere i nadzora (provjera izlaza umjetne inteligencije
    prije nego što se po njemu postupi — ne smanjuje se na nulu ni za
    zrele alate)
  − trošak ATRS dokumentacije i trajnog praćenja
  − rizikom prilagođen trošak štete od pogrešaka, pristranosti ili
    halucinacija, ponderiran prema tome tko tu štetu snosi
    (distribucijsko ponderiranje)

Pilot-broj produktivnosti koji izostavlja član nadzora nije usporediv
s polaznim troškom redovnog poslovanja koji već uključuje jednakovrijednu
ljudsku provjeru — vidi ai-productivity-in-the-public-sector za potpuniju
disciplinu mjerenja produktivnosti na kojoj se ovo temelji.
```

## Primjer iz prakse

**Lokalna vlast koja koristi alat generativne umjetne inteligencije za izradu prvih odgovora na rutinske upite o porezu na imovinu**: 25.000 upita godišnje, koje su prije u cijelosti obrađivali referenti u prosjeku 14 minuta po upitu, uz puni trošak osoblja od 34 £ na sat.

```
Polazni trošak (bez umjetne inteligencije):
  25.000 × (14/60) × 34 £ = 198.333 £ godišnje

Naslovna tvrdnja pilota: umjetna inteligencija izradi odgovor za 90 sekundi,
referent ga „samo pregleda i pošalje” — tvrdi se da je novo vrijeme 3 minute
  25.000 × (3/60) × 34 £ = 42.500 £ godišnje
  → tvrdi se da je ušteda 155.833 £ godišnje (izgleda transformativno)

Puni trošak, izmjeren nakon 3 mjeseca u radu, a ne na ručno odabranim
testnim slučajevima pilota:
  Stvarno vrijeme pregleda i ispravljanja po odgovoru: 6 minuta (nacrti
  zahtijevaju stvarnu doradu za složene ili emocionalno osjetljive upite)
  25.000 × (6/60) × 34 £ = 85.000 £ godišnje
  Trošak licence/računalnih resursa: 38.000 £ godišnje
  ATRS dokumentacija i tromjesečno praćenje pristranosti/kvalitete: 14.000 £ godišnje
  Ukupni trošak = 85.000 + 38.000 + 14.000 = 137.000 £ godišnje

Stvarna ušteda = 198.333 − 137.000 = 61.333 £ godišnje — stvarna i vrijedna
zadržavanja, ali znatno manja od polovice naslovne tvrdnje pilota, a da bi
se do nje došlo, trebalo je iskreno izmjeriti vrijeme nadzora, a ne
najpovoljniji slučaj iz pilota.
```

## Veza s programskim inženjerstvom

Ovdje se susreću [ai-productivity-in-the-public-sector](../produktivnost-umjetne-inteligencije-u-javnom-sektoru/) i ova tema: inženjerski timovi koji ugrađuju značajke umjetne inteligencije u javne usluge vlasnici su instrumentacije koja omogućuje „stvarni” broj iz primjera, a to znači bilježenje stvarnog vremena pregleda, razlike (edit distance) između nacrta i poslanog odgovora te stope eskalacije, umjesto pouzdavanja u uvjete demonstracije pilota. Značajke umjetne inteligencije trebalo bi procjenjivati prema točki 9 [Digital Service Standarda](../standard-digitalnih-usluga/) (sigurna usluga, privatnost korisnika) i povezati s [vrijednošću kibernetičke sigurnosti u javnom sektoru](../vrijednost-kibernetičke-sigurnosti-u-javnom-sektoru/) ondje gdje alat dodiruje podatke građana, a svaki sustav umjetne inteligencije koji znatno utječe na odluke o pojedincima treba ATRS zapis prije nego što se može smatrati spremnim za procjenu, jednako kao što usluga mora proći procjenu prema [Digital Service Standardu](../standard-digitalnih-usluga/) prije puštanja u rad.

## Zamke

- **„AI-washing”**: preimenovanje postojeće automatizacije temeljene na pravilima u „umjetnu inteligenciju” radi pristupa financiranju ili pozornosti namijenjenima uvođenju umjetne inteligencije, bez rizika točnosti ili pristranosti koji zapravo opravdavaju dodatni nadzor iz okvira.
- **Mjerenje produktivnosti pilota, a ne produktivnosti u produkciji**: piloti se vrte na odabranim testnim slučajevima s angažiranim i pozornim recenzentima; produkcija se vrti na cijelom neurednom spektru slučajeva s recenzentima koji s vremenom razviju pristranost prema automatizaciji (automation bias) i premalo provjeravaju izlaze; oboje iskrivljuje iskreni iznos troška nadzora.
- **Preskakanje ATRS registracije jer alat „zapravo nije automatizirano odlučivanje”**: prag standarda jest znatan utjecaj na odluku o pojedincu, a većina alata umjetne inteligencije za izradu nacrta ili trijažu okrenutih građanima taj prag ispunjava čak i kad čovjek formalno potpisuje odluku.
- **Zanemarivanje distribucijskog učinka pogrešaka**: stopa pogrešaka sustava umjetne inteligencije usrednjena po svim korisnicima može sakriti znatno višu stopu pogrešaka ili pristranosti za određene skupine; [distribucijsko ponderiranje](../distribucijsko-ponderiranje/) treba primijeniti na rizikom prilagođen član štete, a ne samo na ukupnu točnost.

## Izvori

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
