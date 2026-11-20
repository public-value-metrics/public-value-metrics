# Povrat ulaganja za donatora

Povrat ulaganja za donatora (donor return on investment) je ono što funta određenog donatora stvarno kupuje u ishodima, a ne operativni pokazatelji dobrotvorne organizacije niti njezin povrat na ukupni proračun. On premješta ROI s gledišta organizacije (koliko učinkovito radimo) na gledište donatora (što moj granični doprinos mijenja), a ta se dva broja redovito, i pogrešno, smatraju istom stvari.

## Zašto je važno

Vlastiti „ROI” dobrotvorne organizacije, ako se taj pojam uopće koristi, obično opisuje nešto poput [troška po korisniku](../trošak-po-korisniku/) ili [omjera općih troškova dobrotvorne organizacije](../omjer-režijskih-troškova-dobrotvornih-organizacija/), dakle mjere organizacijske učinkovitosti. ROI donatora posve je drugo pitanje: s obzirom na to da ta organizacija već ima druge prihode, što novac *ovog* donatora dodaje na margini? Ako bi organizacija provela isti program sa ili bez određenog dara od £10.000, jer ima dovoljno pričuva ili bi prazninu popunio drugi financijer, ROI tog donatora blizu je nule, koliko god dobro izgledali njezin ukupni omjer općih troškova ili trošak po ishodu.

To je isto pitanje dodatnosti koje je u osnovi ocjene [vrijednosti za novac](../vrijednost-za-novac/) u britanskoj javnoj potrošnji i [dodatnosti i mrtvog tereta](../dodatnost-i-mrtvi-teret/) u evaluaciji programa: stvorena vrijednost može se pripisati financijeru samo u mjeri u kojoj se ne bi dogodila u svakom slučaju. Velike platforme za donacije putem savjetovanih fondova i organizacije za učinkovito darivanje (Giving What We Can, GiveWell) svoje preporuke izričito grade oko te razlike, pitajući ne „je li ovo dobra dobrotvorna organizacija”, nego „ima li ova organizacija nepopunjen prostor za dodatno financiranje, tako da je moj dar dodatan”.

## Matematika

```
Donor ROI ≠ Charity's operating efficiency

Donor ROI  ≈  (Outcome achieved with the gift) − (Outcome that would have
               occurred without it, i.e. the counterfactual)
             ─────────────────────────────────────────────────
                              Size of the gift

Key inputs:
  - Room for more funding (is the charity funding-constrained at the margin?)
  - Funging (would another donor have filled the gap?)
  - Marginal cost-effectiveness at the specific funding level (costs often
    rise as an intervention scales past its easiest-to-reach population)
```

Pogledajte [troškovnu učinkovitost u efektivnom altruizmu](../troškovna-učinkovitost-u-efektivnom-altruizmu/) o tome kako GiveWell operacionalizira pitanje „prostora za dodatno financiranje” i [kontrafaktualnu analizu](../kontrafaktualna-analiza/) za opću metodu.

## Primjer iz prakse

Donor bira između dvaju darova od £5.000:

- **Organizacija C**: ima potpuno financiran temeljni program, £2 milijuna pričuva i listu čekanja financijera; dodatnih £5.000 vjerojatno bi završilo u pričuvama ili u aktivnosti nižeg prioriteta. Procijenjeni ishod dodatan zahvaljujući donatoru: minimalan, jer novac očito ne mijenja što se događa.
- **Organizacija D**: mali program utemeljen na dokazima koji je javno izjavio da će sljedeći kvartal morati odbiti 200 ljudi bez dodatnih £50.000, a od toga je već prikupio £42.000. Dodatnih £5.000 vrlo vjerojatno financira stvarnu dodatnu isporuku, recimo 20 dodatnih opsluženih ljudi, uz navedeni trošak organizacije po korisniku od £250.

Ista veličina dara, isti donor, radikalno različit ROI donatora: ne zato što je organizacija C lošija (ukupno može imati bolji trošak po ishodu), nego zato što je njezina granična financijska praznina već zatvorena.

## Veza s programskim inženjerstvom

Platforme za donatore i alati za preporuke darivanja prečesto prikazuju samo pokazatelje učinkovitosti na razini organizacije (omjer općih troškova, trošak po korisniku), jer ih organizacije objavljuju u godišnjim izvješćima i jer ih je najlakše povući u usporednu tablicu. Ispravan prikaz ROI-ja donatora zahtijeva drukčiji podatak koji je teže pribaviti: navedenu trenutačnu financijsku prazninu organizacije ili „prostor za dodatno financiranje”, koji se mijenja tijekom godine i rijetko je strukturiran podatak. Platforme koje žele podržati pravo promišljanje ROI-ja donatora trebaju ili izravan izvor iz objava financijskih praznina (kako GiveWell ručno održava za svoje preporučene organizacije) ili izričitu napomenu da usporedna tablica prikazuje organizacijsku učinkovitost, a ne dodatnost za donatora. Vidi [omjer općih troškova dobrotvorne organizacije](../omjer-režijskih-troškova-dobrotvornih-organizacija/) za pokazatelj s kojim se ROI donatora najčešće, i pogrešno, miješa.

## Zamke

- **Miješanje učinkovitosti organizacije s dodatnošću za donatora.** Dobro vođena organizacija s niskim općim troškovima i dalje može imati granični ROI donatora blizu nule ako nije financijski ograničena.
- **Zanemarivanje funginga (funging).** Ako bi veliki institucionalni financijer pokrio prazninu u svakom slučaju, dar pojedinačnog donatora istiskuje novac tog financijera umjesto da dodaje novu isporuku.
- **Pretpostavka linearne isplativosti pri povećanju opsega.** Korisnici do kojih je najjeftinije doprijeti obično se opslužuju prvi; granični trošak po ishodu često raste kako se program širi, pa ROI sljedeće funte nije jednak ROI-ju prosječne već potrošene funte.
- **Nema navedene financijske praznine.** Organizacija ili platforma koja ne može reći što bi financirao sljedećih £X ne može potkrijepiti istinsku tvrdnju o ROI-ju donatora, nego samo onu o prosječnom trošku.

## Izvori

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
