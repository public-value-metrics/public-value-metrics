# Utvikle selv eller kjøpe i offentlig forvaltning

Utvikle selv eller kjøpe er en strukturert, risikojustert sammenligning av egenutvikling mot kommersielt eller standardisert anskaffet løsning, sammenlignet på diskonterte [totale eierkostnader](../totalkostnad-for-eierskap-i-offentlig-it/), tid til verdi og risiko. Forvaltningen er strukturelt en kjøpende sektor – Technology Code of Practice fastsetter en presumpsjon for standard- og skyløsninger – men utviklingsteam i departementene velger likevel ofte å bygge selv, av de samme grunnene som utviklere ellers.

## Hvorfor det er viktig

Government Digital Services Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) og tilhørende veiledning i Service Manual om å avgjøre om man skal bygge eller kjøpe, presser departementene til å begrunne skreddersydd utvikling mot en presumpsjon om at standardfunksjonalitet bør kjøpes, ikke bygges, og at bare virkelig nyskapende, oppdragsdifferensierende funksjonalitet rettferdiggjør egen kode. HM Treasurys tilleggsveiledning til Green Book om optimismeskjevhet, hentet fra Mott MacDonalds gjennomgang av store offentlige anskaffelser i 2002, gir IT-prosjekter det bredeste påslagsintervallet av alle kategoriene som er vurdert – investeringskostnadsanslag anbefales økt med 10 % i den lave enden og med opptil 200 % i den høye før de brukes i vurderingen, noe som gjenspeiler hvor kraftig programvareutvikling historisk er blitt undervurdert i offentlige anskaffelser. Analysen av bygge eller kjøpe finnes nettopp for å tvinge denne risikojusteringen frem før godkjenning, i stedet for at den dukker opp som en forespørsel om tilleggsbevilgning midt i året.

## Regnestykket

```
Sammenlign over samme horisont på 3–5 år, diskontert med Green Books
samfunnsøkonomiske diskonteringsrente (se social-discount-rate.md):

NNV_alternativ = NV(gevinster, forskjøvet med tid til verdi) − NV(totale eierkostnader)

Risikojusteringer (Green Books mønster for optimismeskjevhet):
  utviklingskostnad × 1,1–3,0        (påslagsintervall for IT-prosjekter, Mott MacDonald)
  utviklingens tid til verdi + 40–60 % (forhåndsantakelse om forsinket idriftsettelse)
  kjøp: legg i stedet til en realitetssjekk av integrasjon og utgangskostnader i kontrakten

Beslutningsfaktorer, i den rekkefølgen de vanligvis avgjør:
  1. differensiering – er denne funksjonaliteten selve oppdraget, eller rørleggerarbeid?
  2. tid til verdi × forsinkelseskostnad (se cost-of-delay-in-public-programmes.md)
  3. risikojusterte totale eierkostnader
```

## Utregnet eksempel

En kommune trenger et saksbehandlingssystem for eldreomsorg. Kjøp: SaaS til £180 000 per år, i drift etter 4 måneder. Bygg: anslått £900 000 pluss £150 000 per år i vedlikehold, i drift etter 14 måneder.

```
Risikojustert utviklingskostnad = 900 000 × 1,4 = £1 260 000
Totale eierkostnader over 5 år:
  kjøp  = 180 000 × 5 = £900 000
  bygg  = 1 260 000 + 150 000 × 5 = £2 010 000

Forsinkelsesledd: systemet unngår £40 000 per måned i doble vurderinger;
bygg kommer 10 måneder senere enn kjøp.
Forsinkelseskostnad = 10 × 40 000 = £400 000

Effektiv sammenligning: £900 000 (kjøp) mot £2 010 000 + £400 000 = £2 410 000 (bygg)
```

Kjøp vinner med omtrent £1,5 million over fem år, og den største enkeltposten etter selve utviklingsanslaget er forsinkelseskostnaden, som en ren sammenligning av investeringsutgifter aldri ville ha avdekket.

## Sammenheng med programvareutvikling

Disiplinene som overføres direkte fra denne analysen til leveransepraksis: **risikojustering basert på erfaringstall** – Mott MacDonald-påslaget er programvarens tilsvarighet til Green Books optimismeskjevhet brukt mekanisk, så team bør argumentere for unntak fra det i stedet for å anta at deres eget anslag er unntaket. **Ærlig sammenligningsgrunnlag** – alternativet til å bygge er det beste tilgjengelige kjøpsalternativet, ikke «ingenting», noe som henger direkte sammen med [alternativkostnad i offentlig pengebruk](../alternativkostnad-i-offentlige-utgifter/). Og **ærlig sammenligning av eierkostnader** – hvert forslag om egenutvikling bør sammenlignes med kjøpsalternativets fulle [totale eierkostnader](../totalkostnad-for-eierskap-i-offentlig-it/), ikke med listeprisen. Der egenutvikling faktisk vinner, bør [forsinkelseskostnaden](../forsinkelseskostnad-i-offentlige-programmer/) for den ekstra utviklingstiden prises eksplisitt i forretningscasen, ikke etterlates som en uuttalt antakelse om at tid ikke spiller noen rolle.

## Fallgruver

- **Å sammenligne leverandørens listepris med et ujustert utviklingsanslag**: Dette flatterer egenutvikling dobbelt, både på kostnad og på tidsplan.
- **Intern arbeidskraft prissatt til null**: Statlige utvikleres tid behandles som «gratis» fordi den allerede ligger på departementets bemanningsbudsjett, noe som skjuler den reelle alternativkostnaden mot annet arbeid teamet kunne ha gjort.
- **Uprisede innlåsinger i begge retninger**: Kostnader ved å forlate en leverandør og flytte data er reelle, men det samme er en skreddersydd løsnings sårbarhet for at nøkkelpersoner slutter og avhengigheten av å beholde et lite, vanskelig erstattelig internt team gjennom hele levetiden.
- **Oppdragsdifferensiering påstått for rørleggerarbeid**: «Dette er kjernen hos oss» hevdet om integrasjonsmellomvare eller et dokumentlager – test det mot om en innbygger eller saksbehandler noen gang ville merke hvilken løsning som kjører under overflaten.

## Kilder

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
