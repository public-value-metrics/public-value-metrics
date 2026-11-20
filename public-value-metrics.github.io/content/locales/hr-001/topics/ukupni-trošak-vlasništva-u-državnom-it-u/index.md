# Ukupni trošak vlasništva (TCO) u državnom IT-u

Ukupni trošak vlasništva puni je trošak životnog ciklusa sustava (nabava plus svaka godina njegova rada), diskontiran na zajednički datum. U državnom IT-u najpouzdanija pogreška u prognoziranju jest usporedba dobavljača ili opcija samo prema nabavnoj cijeni, dok rad i održavanje obično čine između polovice i četiri petine računa kroz cijeli vijek.

## Zašto je važno

Green Book Ministarstva financija (HM Treasury) traži da financijski slučaj u svakom poslovnom slučaju prema modelu pet slučajeva obuhvati troškove cijelog vijeka, a ne samo kapitalnu potrošnju; ipak je National Audit Office više puta utvrdio da ministarstva odobravaju IT ulaganja prema nepotpunoj ili optimističnoj prognozi troškova rada, a pravi operativni trošak otkriju tek kad je sustav u radu i kad je kapitalna proračunska linija zatvorena. Kodeks prakse za tehnologiju (Technology Code of Practice) Government Digital Servicea i Central Digital and Data Officea (<https://www.gov.uk/guidance/the-technology-code-of-practice>) potiče ministarstva prema oblaku i standardnom hostingu djelomice zato što tekući trošak čini vidljivim i usporedivim, umjesto da je zakopan u jedinstvenoj kapitalnoj nabavnoj brojci koja pri odobrenju izgleda privlačno niska, a tri godine kasnije skupo pogrešna.

## Matematika

```
TCO = trošak nabave + Σ(t=1..N) godišnji operativni trošak_t / (1+r)^t
      − preostala vrijednost (diskontirana)

r = standardna društvena diskontna stopa Green Booka (HM Treasury), 3,5 %/godišnje
    (opadajući raspored stopa za horizonte dulje od 30 godina)

Komponente operativnog troška: hosting/licencije, podrška i održavanje,
sigurnosne zakrpe i usklađenost, vrijeme osoblja, planirano osvježenje/migracija
```

Vidi [društvenu diskontnu stopu](../društvena-diskontna-stopa/) o tome zašto je diskontni faktor važan kroz tipičan 5 do 10-godišnji vijek sustava i [izgraditi ili kupiti u državnoj upravi](../izgraditi-ili-kupiti-u-državnoj-upravi/) o tome kako TCO hrani odluku o izgradnji/kupnji.

## Primjer iz prakse

Ministarstvo uspoređuje dva sustava za upravljanje predmetima na 5-godišnjem horizontu uz diskontnu stopu Green Booka od 3,5 %.

```
Sustav A: capex 3.500.000 £, opex 250.000 £/godišnje
Sustav B: capex 1.800.000 £ (izgleda jeftinije), opex 650.000 £/godišnje
          (veća podrška dobavljača i teret integracije)

Naivna usporedba samo prema capexu: B pobjeđuje, 1,8 mil. £ < 3,5 mil. £.

Zbroj diskontnih faktora, 5 godina uz 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = 4.628.750 £
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = 4.734.750 £
```

TCO preokreće naivnu odluku: sustav B je nakon diskontiranja i zbrajanja operativnog troška za pet godina neznatno skuplji, jer je udio opexa u troškovima vijeka 62 % (2.934.750 / 4.734.750) naspram 24 % kod sustava A: konkretan primjer nalaza „održavanje je većina računa”, koji je potpuno skriven usporedbom cijena s etikete.

## Veza s programskim inženjerstvom

TCO je broj koji bi trebao discipliniranjem obuhvatiti svaku odluku o [izgradnji ili kupnji](../izgraditi-ili-kupiti-u-državnoj-upravi/) i svaki slučaj otplate [tehničkog duga](../tehnički-dug-kao-nagrizanje-javne-vrijednosti/), jer su kamata na dug i odgođeno održavanje oboje stavke operativnih troškova koje pripadaju u isti diskontirani zbroj, bez obzira je li ih itko pratio. Inženjeri koji predlažu platformu ili izbor dobavljača trebali bi iznijeti punu tablicu TCO-a, a ne nabavnu cijenu, jer je nabavna cijena upravo broj na koji se ministarstva, prema zamisli financijskog slučaja Green Booka, ne smiju oslanjati same. TCO je i pošten nazivnik za prosudbe o [vrijednosti za novac](../vrijednost-za-novac/): VFM uspoređuje korist s troškom, a podbrojana stavka troška napuhuje svaki VFM omjer u poslovnom slučaju.

## Zamke

- **Usporedba samo prema capexu**: najčešća pojedinačna pogreška u nabavi, usporedba popisnih cijena dobavljača bez usklađene prognoze operativnih troškova za svaku opciju.
- **Izostavljanje troškova izlaska i migracije**: izvlačenje podataka na kraju ugovora, prelazak na novu platformu i kazne za ovisnost o dobavljaču stvarne su stavke TCO-a koje se rijetko pojavljuju u izvornom poslovnom slučaju.
- **Izostavljanje troškova sigurnosti i usklađenosti**: učestalost zakrpa, obnova akreditacije i trošak revizije rastu sa starošću i složenošću sustava (vidi [vrijednost kibernetičke sigurnosti u javnom sektoru](../vrijednost-kibernetičke-sigurnosti-u-javnom-sektoru/)), a redovito se izostavljaju iz prognoze opexa.
- **Nediskontirana usporedba opcija s različitim profilima troškova**: usporedba opcije s teškim capexom i one s teškim opexom bez diskontiranja sustavno favorizira opciju koja slučajno odgađa više troška u kasnije godine.

## Izvori

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
