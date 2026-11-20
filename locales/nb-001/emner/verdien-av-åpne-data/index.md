# Verdien av åpne data

Verdien av åpne data handler om å anslå hva offentlige data er verdt når de ikke har noen pris: de selges ikke, så det finnes ingen inntektslinje, men utlevering av dem (værobservasjoner, rutetabeller, postnummergrenser, foretaksregistre) skaper påviselig økonomisk og sosial aktivitet i neste ledd. Det er viktig å verdsette dem godt, for både «det er gratis å utgi» og «det er verdiløst» er feil, og en programvareutvikler som skal avgjøre om et API eller et datasett skal åpnes, trenger et bedre argument enn noen av delene.

## Hvorfor det er viktig

Det mest siterte overordnede anslaget kommer fra McKinsey Global Institutes rapport fra 2013, «Open data: Unlocking innovation and performance with liquid information», som anslo det potensielle årlige verdipotensialet for åpne data i sju sektorer – utdanning, transport, forbruksvarer, elektrisitet, olje og gass, helse og forbrukerfinans – til 3 til 5 billioner dollar i året globalt, gjennom mekanismer som økt åpenhet, mer effektiv tilpasning av tilbud til etterspørsel og nye produkter og tjenester bygget på dataene. Dette tallet er et scenarioanslag, ikke et målt resultat, og det feilsiteres jevnlig som om det var inntekt staten kunne tilegne seg direkte, mens verdien for det meste tilfaller tredjeparter – bedrifter, forskere, borgere – som bruker dataene, noe som nettopp er poenget med å åpne dem i stedet for å selge dem. Storbritannias Open Data Institute, grunnlagt i 2012 av Sir Tim Berners-Lee og Sir Nigel Shadbolt, har siden bygget opp en samling mer detaljerte nedenfra-og-opp-case-studier – sektor for sektor, datasett for datasett – som er langt mer nyttige i en reell forretningscase enn McKinseys overskriftstall, fordi de viser mekanismen for verdiskaping og ikke bare den samlede størrelsen.

## Regnestykket

Åpne data har ingen markedspris, så verdsettingsmetoder trer i stedet; tre tilnærminger går igjen, og ingen er tilstrekkelig alene:

```
1. Kostnadsunngått-/gjenanskaffelseskostnadsmetoden:
   verdi ≈ hva brukerne ellers ville ha betalt for å produsere eller
   lisensiere tilsvarende data selv — en nedre grense, ignorerer verdi
   skapt av bruksområder den opprinnelige produsenten aldri forutså

2. Markedsanalogi-/aktivitet-i-neste-ledd-metoden:
   verdi ≈ inntekter eller besparelser skapt av bedrifter/tjenester
   bygget på dataene (f.eks. navigasjonsapper bygget på åpne kart- og
   trafikkdata) — fanger reell økonomisk aktivitet, men er vanskelig å
   tilskrive selve datautgivelsen på en ren måte (se additionality-and-deadweight)

3. Betinget verdsetting/uttrykte preferanser:
   verdi ≈ hva brukerne sier de ville betalt, eller tiden de sier den
   sparer dem — se stated-preference-valuation for den generelle
   metoden og dens skjevheter

Ingen av disse gir et tall så rent som en markedspris; troverdige
forretningscaser for åpne data trianguleres over to eller flere, og er
eksplisitte om hvilken mekanisme som gjør jobben.
```

## Utregnet eksempel

**Illustrativ nasjonal utgivelse av kart-/adressedata** (metodikk etter ODI-lignende case-studier, tall illustrerende for den størrelsesordenen slike studier vanligvis finner):

```
Anslag basert på unngåtte kostnader:
  Bedrifter som ellers ville lisensiert tilsvarende adressematchingsdata
  kommersielt, til en anslått gjennomsnittlig lisenskostnad på £4 000/
  år, over anslagsvis 15 000 små og mellomstore bedrifter som nå bruker
  det gratis åpne datasettet
  = 15 000 × £4 000 = £60 000 000/år i unngåtte lisenskostnader alene

Anslag basert på aktivitet i neste ledd (mer spekulativt, krever et kontrafaktisk scenario):
  Nye ruteplanleggings- og logistikkprodukter bygget på de åpne dataene
  som ikke ville eksistert, eller ville vært vesentlig dårligere, uten
  dem — krever en sammenligning mot det kontrafaktiske scenarioet der
  dataene forble lukket eller kommersielt lisensiert (counterfactual-analysis),
  fordi noe av denne aktiviteten ville skjedd uansett på betalte data til
  en høyere pris, noe som er dødvekt i betydningen «verdi skapt ved å åpne dem»

En forsvarlig forretningscase rapporterer tallet for unngåtte kostnader
som den solide nedre grensen, og behandler tallet for aktivitet i neste
ledd som et øvre grensescenario, ikke som et faktum.
```

## Sammenheng med programvareutvikling

For utviklere er det praktiske spørsmålet om verdien av åpne data vanligvis snevrere enn de nasjonale overskriftstallene: vil det å åpne akkurat dette API-et eller datasettet (i stedet for å holde det bak en partneravtale) øke gjenbruken nok til å rettferdiggjøre den løpende kostnaden ved å dokumentere, versjonere og støtte det som et offentlig grensesnitt? Den vedlikeholdskostnaden er reell og er motstykket til økonomien i «bygg én gang, gjenbruk ofte» i [staten som plattform](../staten-som-plattform/) – de to temaene er nære slektninger, det ene om delt kode og infrastruktur, det andre om delte data. Enhver påstand om verdien av åpne data bør kontrolleres mot [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/) før den kommer inn i en forretningscase: aktivitet som uansett ville skjedd, på kommersielt lisensierte data, er ikke verdi som *åpningen* skapte.

## Fallgruver

- **Å sitere McKinseys tall på 3–5 billioner dollar som britisk-spesifikt eller som dette datasettets andel**: det er et globalt scenarioanslag for sju sektorer fra 2013 – å bruke det som en presis multiplikator for ett enkelt nasjonalt datasett feilrepresenterer hva tallet er.
- **Ingen kontrafaktisk analyse**: å kreve æren for all økonomisk aktivitet i neste ledd bygget på åpne data, uten å spørre hvor mye av den som uansett ville skjedd på betalte eller lisensierte data til en høyere pris (se [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/) og [kontrafaktisk analyse](../kontrafaktisk-analyse/)).
- **Å forveksle produksjonskostnad med skapt verdi**: et datasett som var dyrt å samle inn, er ikke automatisk verdifullt å utgi, og et billig er ikke automatisk lavverdi – verdien følger bruken i neste ledd, ikke kostnaden i første ledd.
- **Å overse den løpende vedlikeholdskostnaden ved «åpent»**: å publisere et engangsuttrekk i CSV er ikke den samme forpliktelsen som å drive et dokumentert, versjonert og støttet åpent API – å underfinansiere det siste etter lanseringen er en vanlig feilmodus.

## Kilder

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
