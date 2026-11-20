# Evaluacija učinka naspram evaluacije procesa

Evaluacija učinka pita je li program uzrokovao željene ishode. Evaluacija procesa pita je li program doista isporučen onako kako je zamišljen: kome, u kojoj dozi i uz koje prepreke ili olakšavajuće čimbenike na putu. To su različita pitanja koja traže različite metode, a Magenta Book britanskog Ministarstva financija zajedničko naručivanje obje smatra standardnom praksom, jer je slab ili nulti rezultat učinka sam po sebi nemoguće protumačiti: ne govori je li temeljna teorija programa bila pogrešna ili dobra teorija jednostavno nikada nije pravilno isporučena.

## Zašto je važno

Državne evaluacije više su puta utvrdile da program nema mjerljiv učinak, a bez evaluacije procesa koja bi objasnila zašto, naručitelji nisu mogli razlikovati „ova ideja ne funkcionira” (neuspjeh teorije) od „ova ideja nikada nije stvarno pravilno isprobana” (neuspjeh provedbe). Smjernice Medical Research Council za evaluaciju procesa složenih intervencija, objavljene u BMJ-u 2015. i široko citirane uz Magenta Book, formalizirale su vjernost provedbe (fidelity), dozu i doseg kao ključne stvari koje evaluacija procesa mora mjeriti. Naručivanje evaluacije učinka bez evaluacije procesa riskira odbacivanje doista dobrog dizajna programa jer je isporučen polovici ciljane populacije uz djelić predviđenog intenziteta, što je pogreška koju graditelj sustava dobro može spriječiti, jer su vjernost isporuke upravo ono što operativni podatkovni sustavi mogu bilježiti gotovo u stvarnom vremenu.

## Matematika

```
Process evaluation asks:
 - Was it delivered to the target population, at the planned dose/intensity?
 - Did delivery match the logic model / theory of change design?
 - What barriers or facilitators affected delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation asks:
 - What changed, and how much of that change is attributable to the programme?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against a counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: the model itself did not produce the outcome
 No effect  + low fidelity   → implementation failure: the model was never properly tested
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: the effect may be fragile or site-specific
```

## Primjer iz prakse

**Lokalna uprava (program za roditeljstvo)**: evaluacija učinka metodom razlike razlika nalazi promjenu od +2 postotna boda u mjeri dječjeg blagostanja, što nije statistički značajno. Evaluacija procesa, provedena usporedno, utvrđuje da je program dosegnuo samo 210 od 500 ciljanih obitelji (doseg 42 %), a od tih samo je 95 ispunilo unaprijed određeni prag vjernosti od 75 %+ pohađanih sesija, što je 19 % izvorno planiranog dosega. Zaključak: slab rezultat učinka u skladu je s neuspjehom provedbe, a ne dokaz da model programa ne funkcionira; primjeren odgovor je popravak puta upućivanja koji je uzrokovao pad od 58 %, a ne napuštanje dizajna programa.

**Dobrotvorna organizacija (program digitalne pismenosti)**: evaluacija učinka nalazi snažan učinak (+18 postotnih bodova na ocjeni digitalnog samopouzdanja), a usporedna evaluacija procesa potvrđuje 92 % vjernosti planiranom kurikulumu na svih 12 mjesta isporuke. Zajedno, financijer može s povjerenjem proširiti program, jer je pokazano da učinak dosljedno vrijedi, a nije produkt jedne neobično dobre lokacije.

## Veza s programskim inženjerstvom

Podaci evaluacije procesa upravo su ono što sustavi isporuke dobro mogu bilježiti: pohađanje u odnosu na plan, doza sesija i odustajanje na svakoj fazi lijevka upućivanja ili upisa: ista analitika lijevka koju inženjeri već grade za značajke proizvoda, primijenjena na cjevovod isporuke društvenog programa. Dostavljanje metrika vjernosti i dosega voditeljima programa gotovo u stvarnom vremenu, umjesto čekanja evaluacije na kraju potpore, omogućuje popravak neispravnog puta upućivanja usred programa umjesto da se otkrije tek nakon završetka razdoblja financiranja. Vidi [metode evaluacije učinka](../metode-evaluacije-učinka/) za uzročne nacrte uz koje se evaluacija procesa uparuje, [teoriju promjene](../teorija-promjene/) i [logički model](../logički-model/) za dizajn prema kojem evaluacija procesa provjerava vjernost te [ostvarenje koristi](../ostvarenje-koristi/) za praćenje isporuke sve do obećanih ishoda.

## Zamke

- **Naručivanje samo evaluacije učinka.** Nulti ili slab rezultat tada se ne može protumačiti kao neuspjeh teorije ili neuspjeh provedbe, a upravo ta razlika odlučuje što učiniti dalje.
- **Tretiranje evaluacije procesa kao mekog dodatka.** Treba jednaku strogost i unaprijed određene kriterije vjernosti kao nacrt učinka, inače se pretvara u anegdotu kada stignu rezultati.
- **Brkanje „na vrijeme i u okviru proračuna” s „isporučeno kako je zamišljeno”.** Evaluacija procesa provjerava vjernost modelu (doza, ciljna skupina, sadržaj), a ne RAG status upravljanja projektom.
- **Neregistriranje pragova vjernosti unaprijed.** Naknadno odlučivanje što se računa kao „dovoljna doza” čini svako objašnjenje razočaravajućeg rezultata učinka nalik naknadnom pronalaženju isprika.

## Izvori

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
