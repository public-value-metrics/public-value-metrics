# Produktivnost umjetne inteligencije u javnom sektoru

Metrike onoga što pomoć umjetne inteligencije pri programiranju doista čini inženjerskom učinku (stope prihvaćanja prijedloga, ubrzanja u kontroliranim studijama, propusnost PR-ova i zadržavanje koda) počivaju na istinski proturječnim dokazima čak i prije nego što se dodaju ograničenja javnog sektora: klasifikacija podataka određuje koje dijelove naslijeđenog sustava alat umjetne inteligencije uopće smije dirati, ciklusi javne nabave znače da je alat koji se evaluira često jednu generaciju modela iza trenutnih mogućnosti, a sigurnosne provjere (clearance) određuju tko ga smije koristiti i na čemu.

## Zašto je važno

Dvije najcitiranije kontrolirane studije upućuju u suprotnim smjerovima. RCT Penga i suradnika o GitHub Copilotu iz 2023. pokazao je da su programeri zadatak izrade HTTP poslužitelja od nule dovršili 55,8 % brže uz Copilot (1 h 11 min naspram 2 h 41 min, n = 95). METR-ov RCT iz 2025. pokazao je da su iskusni programeri otvorenog koda koji rade na *vlastitim zrelim repozitorijima* bili 19 % sporiji uz alate umjetne inteligencije s početka 2025., a vjerovali su da su otprilike 20 % brži. Obje su studije valjane; proturječje je upravo nalaz: učinkovitost na zadacima od nule ne prenosi se na djelotvornost u zreloj bazi koda, a velik dio državnog inženjerstva jest rad na zreloj bazi koda, u sustavima starijima i osebujnijima od medijalnog komercijalnog repozitorija. Generative AI Framework for HMG (2024., <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) britanskog Central Digital and Data Officea postavlja načela odgovornog uvođenja upravo zato što se ti dokazi ne mogu jednostavno preuzeti iz demonstracija dobavljača; od ministarstava se očekuje da alate procijene u odnosu na vlastite zahtjeve za rukovanje podacima i sigurnost prije uvođenja.

## Matematika

```
Stopa prihvaćanja   = prihvaćeni prijedlozi / prikazani prijedlozi
Stopa zadržavanja   = AI kod koji preživi do spajanja / prihvaćeni AI kod
Ubrzanje            = (t_kontrola − t_AI) / t_kontrola  (SAMO iz kontrolirane usporedbe)
Promjena propusnosti = Δ spojenih PR-ova/programeru/tjedno

Faktor pokrivenosti u javnom sektoru:
  udio prihvatljive baze koda = LOC na sustavima na kojima klasifikacija
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) uopće dopušta alat

Model vrijednosti = programeri × prihvatljiva pokrivenost × ušteđeno vrijeme × puna satnica × iskorištenost
                    — svaki član traži lokalno mjerenje, a faktor pokrivenosti
                    nema ekvivalenta u privatnom sektoru
```

## Primjer iz prakse

Državno ministarstvo pilotira asistenta za programiranje s umjetnom inteligencijom na 300 programera, ali samo sustavi klasificirani kao OFFICIAL smiju koristiti alat: to je 70 % sustava prema raspodjeli zaposlenika, dok je preostalih 30 % (sustavi više klasifikacije) potpuno isključeno.

```
Prihvatljivi programeri = 300 × 0,70 = 210

Rezultat pilota: samoprijavljeno ušteđeno vrijeme 40 min/dan;
                 izmjerena ušteda na razini zadataka 12 min/dan (0,2 h)
                 — METR-ov jaz percepcije, reproduciran u praksi

Vrednujemo IZMJERENI broj:
  210 × 0,2 h × 220 dana × 55 £/h puna satnica × 0,6 iskorištenost
  = 210 × 44 sata × 55 £ × 0,6
  = 9.240 sati × 55 £ × 0,6 ≈ 304.920 £/godišnje kapaciteta

Trošak: 210 licenciranih mjesta × 22 £/mjesečno × 12 ≈ 55.440 £/godišnje

Neto omjer kapaciteta ≈ 304.920 / 55.440 ≈ 5,5 : 1
```

Moguće ga je financirati uz otprilike trećinu samoprijavljene koristi, i to tek nakon primjene klasifikacijskog stropa: licenciranje svih 300 programera na temelju samoprijavljene brojke precijenilo bi i prihvatljivu populaciju i stvarnu uštedu.

## Veza s programskim inženjerstvom

Discipline koje se izravno prenose: provodite **pragmatična ispitivanja** na vlastitoj bazi koda ministarstva i stvarnim zadacima, a ne na demonstracijskim zadacima dobavljača, jer je METR-ov rezultat nalaz specifičan za zrelu bazu koda; **stopu prihvaćanja tretirajte kao zamjensku mjeru, a ne kao ishod** — visoko prihvaćanje uz nisko zadržavanje softverski je ekvivalent prekomjerne dijagnostike; svaku tvrdnju o propusnosti uparite s **provjerom stabilnosti**, jer je DORA-in izvještaj za 2025. utvrdio da uvođenje umjetne inteligencije povećava propusnost, ali pogoršava stabilnost promjena, što je upravo analiza neto koristi za koju su izgrađene [DORA metrike za javnu vrijednost](../dora-metrike-za-javnu-vrijednost/); i budite iskreni da alati umjetne inteligencije mogu produbiti, a ne smanjiti jaz na naslijeđenim sustavima opterećenima [tehničkim dugom](../tehnički-dug-kao-nagrizanje-javne-vrijednosti/), jer su u podacima za treniranje slabo zastupljeni COBOL, 4GL i prilagođeni mainframe kod uobičajeni u državnoj upravi, pa je kvaliteta prijedloga često najslabija upravo na sustavima kojima je pomoć najpotrebnija. Ovo stoji uz šire pitanje [vrijednosti umjetne inteligencije u državnoj upravi](../vrijednost-umjetne-inteligencije-u-državnoj-upravi/), a treba ga voditi istim ograničenjima [vrijednosti kibernetičke sigurnosti u javnom sektoru](../vrijednost-kibernetičke-sigurnosti-u-javnom-sektoru/) koja određuju gdje bilo koji alat treće strane uopće smije vidjeti kod ili podatke.

## Zamke

- **Presađivanje studija dobavljača**: primjena ubrzanja iz RCT-ova na zadacima od nule na posao integracije naslijeđenih sustava upravo je pogreška koju je razotkrila METR-ova studija.
- **Samoprijava kao mjerenje**: jaz od 20 postotnih bodova između percepcije i izmjerenog najveća je poznata pristranost u toj literaturi i napuhuje poslovne slučajeve koji se oslanjaju samo na ankete programera.
- **Zanemarivanje klasifikacijskog stropa**: modeli licenciranja i vrijednosti izgrađeni na ukupnom broju zaposlenika, a ne na prihvatljivom podskupu s odobrenom klasifikacijom, sustavno precjenjuju i isplativost i ostvarivu pokrivenost.
- **Kašnjenje zbog ciklusa nabave**: nabava alata putem okvirnih sporazuma može značiti da pilot evaluira generaciju modela koja do punog uvođenja zaostaje 12 do 18 mjeseci za javno dostupnim, pa pretpostavka o ubrzanju iz izvornog poslovnog slučaja zastari prije puštanja u rad.

## Izvori

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
