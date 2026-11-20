# Družbena analiza stroškov in koristi (SCBA)

Družbena analiza stroškov in koristi pretvori vsak strošek in vsako korist politike ali programa – tržne in netržne – v skupno denarno enoto, prihodnje tokove diskontira na sedanjo vrednost in jih pobota v eno število: ali je družba zaradi tega predloga na boljšem in za koliko?

## Zakaj je pomembno

SCBA je privzeta kvantitativna metoda v ekonomskem primeru [ocene po Green Book](../ocena-po-green-booku/): smernice HM Treasury zahtevajo, da predlogi pokažejo pozitivno neto sedanjo družbeno vrednost (NPSV), kadar je koristi mogoče verodostojno denarno ovrednotiti, pri čemer je osnovno načelo vrednotenja netržnih dobrin pripravljenost plačati
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). Disciplina, ki jo uveljavlja, je, da »družbena« analiza stroškov in koristi ni isto kot ocena zasebne naložbe: vključiti mora stroške in koristi, ki padejo na tretje osebe, ki niso stranke posla (zunanji učinki), uporabiti mora [družbeno diskontno stopnjo](../družbena-diskontna-stopnja/) in ne komercialnega stroška kapitala ter uporabiti [porazdelitveno uteževanje](../porazdelitveno-ponderiranje/), kadar je funt za revnejše gospodinjstvo pomembnejši kot za bogatejše.

SCBA odpove točno tam, kjer njeni kritiki pričakujejo: dobrine brez tržnega ustreznika – čist zrak, družbena kohezija, vrednost rešenega življenja – je treba denarno ovrednotiti z metodami [izraženih preferenc](../vrednotenje-z-izraženimi-preferencami/) ali [razkritih preferenc](../vrednotenje-po-razkritih-preferencah/) ali pa sestaviti [senčno ceno](../senčne-cene/). Kadar je denarno vrednotenje sporno in ne le težko, Green Book sam priporoča umik k [analizi stroškovne učinkovitosti](../analiza-stroškovne-učinkovitosti-v-upravi/) ali [večkriterijski analizi odločanja](../večkriterijska-odločitvena-analiza/), namesto da bi vsiljevali število, ki mu nihče ne verjame.

## Matematika

```
NPSV = Σ [t=0 do T] (Korist_t − Strošek_t) / (1 + r)^t

kjer je:
  Korist_t  = vse denarno ovrednotene koristi v letu t, vključno z netržnimi
              dobrinami, vrednotenimi z izraženimi/razkritimi preferencami ali senčno ceno
  Strošek_t = vsi denarno ovrednoteni stroški v letu t, vključno z oportunitetnim
              stroškom virov (glej ../opportunity-cost-in-public-spending/)
  r         = družbena diskontna stopnja (HM Treasury določa 3,5 %, ki po 30. letu
              pada na nižje stopnje, po Green Book, Priloga A)
  T         = obdobje ocene

Razmerje med koristmi in stroški (BCR) = Σ PV(koristi) / Σ PV(stroškov)
```

BCR nad 1 (ali NPSV nad nič) kaže neto družbeno vrednost. Kategorije vrednosti za denar v Green Book (kot se uporabljajo pri ocenah prometa in infrastrukture) označujejo razpone BCR: pod 1,0 je slaba vrednost za denar, 1,0–1,5 nizka, 1,5–2,0 srednja, 2,0–4,0 visoka in nad 4,0 zelo visoka. Analiza občutljivosti – ponoven izračun NPSV ob pesimističnih in optimističnih predpostavkah – je obvezna, ne neobvezna, ker imajo denarno ovrednotene netržne koristi široke pasove negotovosti.

## Praktični primer

**Lokalna oblast**: občina ocenjuje naložbo v višini £3 mio v novo omrežje kolesarskih in pešpoti v 20-letnem obdobju ocene pri 3,5-odstotni diskontni stopnji.

```
Stroški: £3 mio kapitala v letu 0, £50 000/leto vzdrževanja (leta 1–20)
PV(vzdrževanje) ≈ £50 000 × 14,2 (20-letni rentni faktor pri 3,5 %) ≈ £710 000
Skupaj PV(stroški) ≈ £3,71 mio

Koristi (vse denarno ovrednotene z objavljenimi orodji DfT/WHO za vrednotenje):
  Zdravstvena korist zaradi večje telesne dejavnosti: £180 000/leto
  Zmanjšanje odsotnosti z dela: £40 000/leto
  Razbremenitev prometnih zastojev (manj voženj z avtomobilom): £60 000/leto
  Skupni tok koristi: £280 000/leto
PV(koristi) ≈ £280 000 × 14,2 ≈ £3,98 mio

NPSV = £3,98 mio − £3,71 mio = +£0,27 mio
BCR = 3,98 / 3,71 = 1,07 → »nizka« vrednost za denar
```

Shema prag komaj preseže; izračun občutljivosti z 20 % nižjo oceno zdravstvene koristi (kar odraža resnično negotovost pri vrednotenju telesne dejavnosti) potisne BCR pod 1,0, zato Green Book zahteva, da se tabela občutljivosti objavi skupaj z glavno številko, ne le osrednja ocena.

**Dobrodelna organizacija**: program preprečevanja umrljivosti dojenčkov, ki stane £500 000/leto, se ovrednoti z vrednostjo statističnega življenja (VSL) – senčno ceno, ne opazovano tržno ceno – približno £2,1 mio (številka HM Treasury, posodobljena leta 2023, sama izpeljana iz študij izraženih preferenc). Preprečitev ene smrti dojenčka na leto ob strošku £500 000 da BCR 4,2, kar je udobno »zelo visoka« vrednost za denar – a ves rezultat sloni na številki VSL, zato mora vsaka SCBA z VSL to razkriti kot predpostavko, ne dejstvo.

## Povezava s programskim inženirstvom

SCBA je naravni okvir za odločitve o naložbah v platforme in infrastrukturo v vladni programski opremi – primerjava skupne platforme za identiteto z oddelčnimi točkovnimi rešitvami na primer zahteva denarno vrednotenje koristi, kot so manjši stroški podvojenega vključevanja, manj goljufij in hitrejši čas do storitve, ki sami po sebi nimajo tržne cene. Inženirji, ki gradijo storitev, naj pričakujejo, da bodo vodje programov zahtevali vhodne podatke za to analizo: enotne stroške transakcij (glej [strošek na transakcijo](../strošek-na-transakcijo/)), pričakovane obsege ter stroške poslabšanja/izpada. Disciplina, ki jo je najpomembneje prevzeti: prihodnje koristi diskontirajte, izrecno poimenujte protidejstveno izhodišče (glej [protidejstvena analiza](../kontrafaktična-analiza/)) in nikoli ne predstavite enotne točkovne ocene brez razpona občutljivosti.

## Pasti

- **Dvojno štetje koristi.** Štetje »prihranjenega časa« in »produktivnosti, pridobljene iz tega časa« kot ločenih postavk koristi preceni primer; korist je prihranjeni čas, njegova nadaljnja uporaba ni dodatna korist, razen če je neodvisno dokazana.
- **Izpustitev izrinjenih stroškov.** Shema, ki prenese zastoje z ene ceste na drugo ali goljufije z enega kanala na drugega, ni ustvarila neto koristi, ki jo nakazuje njen glavni NPSV – glej [izrinjanje in pripisovanje](../izpodrinjenje-in-pripisovanje-učinka/).
- **Uporaba zasebne diskontne stopnje.** Uporaba komercialnega stroška kapitala (recimo 8–10 %) namesto družbene diskontne stopnje sistematično podceni dolgoročne javne koristi, kot so zdravstveni in okoljski dobički – glej [družbena diskontna stopnja](../družbena-diskontna-stopnja/).
- **Denarno vrednotenje nespornega in ignoriranje spornega.** Če sta dve tretjini koristi predloga samozavestno ovrednoten prihranek učinkovitosti in ena tretjina negotovo ovrednoten dobiček blaginje, glavni NPSV tiho meša trdo število z mehkim; poročajte ju ločeno.

## Viri

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
