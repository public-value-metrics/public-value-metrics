# Vurdering etter Green Book (femcasemodellen)

Green Book er HM Treasurys obligatoriske veiledning for vurdering og evaluering av britiske statlige utgiftsforslag. Dens sentrale verktøy, femcasemodellen, tvinger en forretningscase til å svare på fem separate spørsmål – er det en god idé, gir den verdi, kan den anskaffes, har vi råd til den, og kan den leveres – i stedet for å slå alt sammen til ett tall en statsråd kan vifte gjennom.

## Hvorfor det er viktig

Hvert britisk forslag om statlig pengebruk over departementenes delegerte grenser må gjennom vurdering etter Green Book før midler frigis, og HM Treasurys Green Book Review 2020 (publisert etter kritikk av at prosessen var skjev mot fattigere regioner, se <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) strammet inn kravet om at alternativer sammenlignes mot en reell «gjør minimum»-referanse og at strategisk samsvar påvises før valuta for pengene i det hele tatt vurderes. Selve femcasemodellen er eldre enn Green Book – den oppsto hos Office of Government Commerce som standard struktur for en forretningscase – men utgaven av Green Book fra 2022 gjør den til den obligatoriske formen for enhver forretningscase som søker godkjenning hos Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Poenget med å dele casen i fem er at et forslag kan svikte på hvilken som helst dimensjon uavhengig av de andre. En strategisk fornuftig, kostnadseffektiv IT-replattformering kan likevel svikte den kommersielle casen hvis bare én leverandør kan levere den (som skaper risiko for direkte anskaffelse), eller svikte ledelsescasen hvis departementet ikke har noen erfaring med å levere programmer av den størrelsen. En enkelt score for «valuta for pengene» skjuler nettopp denne typen feilmodus.

## Regnestykket

Femcasemodellen er en struktur, ikke en formel, men hver case har sin egen kvantitative eller dokumentasjonsbaserte test:

```
1. Strategisk case
   Dokumentasjon av et utgiftsmål knyttet til organisasjonens strategi.
   Test: finnes det i det hele tatt en begrunnelse for endring? («gjør ingenting» er alltid et alternativ.)

2. Økonomisk case
   Alternativvurdering mot en «gjør minimum»-referanse, med
   samfunnsøkonomisk nytte-kostnadsanalyse eller kostnadseffektivitetsanalyse.
   Test: hvilket alternativ maksimerer netto offentlig verdi?
   Se ../social-cost-benefit-analysis/ og ../cost-effectiveness-analysis-in-government/

3. Kommersiell case
   Markedsdialog, anskaffelsesmåte, risikofordeling mellom
   kjøper og leverandør.
   Test: kan det foretrukne alternativet anskaffes på akseptable vilkår?

4. Finansiell case
   Finansierbarhet innenfor departementets budsjettrammer, finansieringskilde,
   balansebehandling.
   Test: har vi råd til det, i år og hvert år etterpå?

5. Ledelsescase
   Styring, prosjektplan, plan for gevinstrealisering, risikoregister.
   Test: kan denne organisasjonen faktisk levere det?
   Se ../benefits-realization/
```

Den økonomiske casen er der den kvantitative vurderingen ligger: Alternativer sammenlignes på nåverdi justert med [samfunnsøkonomisk diskonteringsrente](../samfunnets-diskonteringsrate/), med metoden for [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/), eller, der nytte ikke kan prissettes ærlig, via [kostnadseffektivitetsanalyse](../kostnadseffektivitetsanalyse-i-offentlig-forvaltning/) eller [multikriterieanalyse](../multikriteriell-beslutningsanalyse/).

## Utregnet eksempel

**Kommune**: En kommune som vurderer et IT-system for boligvedlikehold til £12 millioner, kjører de fem casene slik. Strategisk case: etterslepet i vedlikehold bryter den lovfestede standarden for forsvarlige boliger innen 18 måneder uten inngrep. Økonomisk case: tre alternativer kostnadsberegnet over en vurderingsperiode på 10 år med 3,5 % diskonteringsrente (i henhold til standard sosial tidspreferanserate i Green Book 2022) – «gjør minimum» (lappe på det gamle systemet, NNV −£4,1 mill.), «kjøp» (standardplattform, NNV +£2,3 mill.), «bygg» (skreddersydd plattform, NNV +£0,6 mill. etter at optimismeskjevhet på 40 % for programvareutvikling er brukt på de udiskonterte investeringskostnadene, jf. Green Book, vedlegg A). Kjøp vinner den økonomiske casen. Kommersiell case: to levedyktige leverandører finnes, konkurranseutsetting er mulig – bestått. Finansiell case: kapital er tilgjengelig fra Public Works Loan Board, driftskostnader passer innenfor den mellomlange økonomiplanen – bestått. Ledelsescase: kommunen har levert to sammenlignbare systemer de siste fem årene – bestått. Forslaget går videre med «kjøp».

**Sentralt departement**: Et forslag med en sterk økonomisk case (NNV +£40 mill.) men der bare én leverandør har den aktuelle akkrediteringen, svikter den kommersielle casen på konkurransespenning. Det tvinger enten frem et unntak for direkte anskaffelse (med egen gransking) eller en omskriving av kravspesifikasjonen for å åpne markedet – den økonomiske casen alene ville aldri ha avdekket dette.

## Sammenheng med programvareutvikling

Utviklingsteam i forvaltningen eller tilskuddsfinansierte organisasjoner ser vanligvis bare den økonomiske casen, fordi det er den delen produkt- og utviklingsledelsen blir bedt om å begrunne («hva er ROI på denne migreringen?»). Men en forretningscase som skal klare Treasury eller en tilskuddskomité trenger alle fem, og utviklere er ofte best plassert til å svare på den kommersielle casen (kan dette faktisk anskaffes, eller låser det oss til én leverandørs proprietære format?) og ledelsescasen (har vi leveransekapasiteten, eller avhenger dette av at tre bestemte personer ikke slutter?). Behandle en forespørsel om «bare tallene til forretningscasen» som en forespørsel om en femdel av selve beslutningen. Se [valuta for pengene](../verdi-for-pengene/) for hvordan den økonomiske casens resultat vanligvis oppsummeres, og [totale eierkostnader](../totalkostnad-for-eierskap-i-offentlig-it/) for den finansielle casens vanlige kvantitative kjerne.

## Fallgruver

- **Å skrive den økonomiske casen først og den strategiske casen tilpasset den.** Green Book Review 2020 fant at nettopp denne feilmodusen drev vurderingsskjevhet mot steder og sektorer som allerede var godt dokumentert, og dermed befestet regional ulikhet – den strategiske casen bør fastsette målet før alternativer sammenlignes.
- **Å behandle «gjør minimum» som «gjør ingenting».** Riktig referanse er det rimeligste alternativet som fortsatt oppfyller minimumskrav til lov og sikkerhet, ikke en fantasi om null utgifter – å sammenligne mot bokstavelig talt null blåser opp hvert alternativs tilsynelatende verdi.
- **Å hoppe over den kommersielle og ledelsescasen fordi den økonomiske casen er sterk.** Et forslag med høy nåverdi som ikke kan anskaffes i konkurranse eller leveres av den ansvarlige organisasjonen, er ikke et forslag som kan finansieres – Treasurys gjennomgangere avviser rutinemessig av disse grunnene selv med en overbevisende økonomisk case.
- **Å bruke femcasemodellen én gang, i starten.** Green Book krever at casen tas opp igjen ved hver påfølgende godkjenningsport (strategisk skisse, skisse til forretningscase, full forretningscase) etter hvert som kostnader og dokumentasjon konkretiseres – en case som er frosset på skissestadiet overser kostnadsvekst en senere port ville ha fanget opp.

## Kilder

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
