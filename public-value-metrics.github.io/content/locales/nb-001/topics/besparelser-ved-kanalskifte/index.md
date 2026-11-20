# Besparelser ved kanalskifte

Besparelser ved kanalskifte er den anslåtte kostnadsreduksjonen ved å flytte transaksjonsvolum fra dyre kanaler – telefon, skrankebesøk, papirpost – til billig digital selvbetjening. Det er den finansielle motoren bak «digitalt som standard», og samtidig den posten i forretningscasen som oftest er feil, fordi forutsetningen den hviler på – at de fysiske kanalene krymper når digital bruk øker – bare noen ganger stemmer.

## Hvorfor det er viktig

Regnestykket ser ugjendrivelig ut med tallene for [kostnad per transaksjon](../kostnad-per-transaksjon/) fra Digital Efficiency Report: Flytter man en million transaksjoner fra et skrankebesøk til £8,62 til en digital transaksjon til £0,15, blir besparelsen over £8 millioner. Men en besparelse blir først til kontanter som kan omdisponeres hvis den krympende kanalens *faste kapasitet* faktisk avvikles – plassene på kundesenteret, skrankemedarbeiderne, telefonavtalens minutter – og digitaliseringsprogrammer i kommunene har gjentatte ganger funnet at den totale kontaktmengden ikke faller i takt med digital bruk. Forskning fra digitale transformasjonsprogrammer i lokale myndigheter og fra organer som Socitm og Local Government Association har dokumentert et tilbakevendende mønster: Digitale kanaler tiltrekker seg genuint ny kontakt (innbyggere som ellers ikke ville ha ringt eller møtt opp, gjør det nå fordi det er enklere), og en betydelig andel av de «digitale» transaksjonene feiler halvveis og genererer en telefonsamtale likevel. Dermed faller telefonvolumet langt mindre enn den digitale bruksandelen skulle tilsi, noen ganger ikke i det hele tatt i absolutte tall, selv om dets *andel* av samlet kontakt går ned.

## Regnestykket

```
Brutto besparelse ved kanalskifte = flyttet volum × (kostnad_gammel_kanal − kostnad_digital)

Netto (realisert) besparelse = brutto besparelse
                       − ny/skjult etterspørsel skapt av den enklere kanalen
                       − kostnad ved feiletterspørsel (digitale feil som
                         likevel genererer en telefonsamtale eller et skrankebesøk)
                       − kostnad ved kapasitet som ikke er avviklet (et
                         kundesenter kan bare redusere bemanning i hele enheter;
                         et volumfall på 15 % lar deg sjelden kutte 15 %
                         av bemanningen)

Realiseringsterskel: besparelser kan først regnes som sikre når volumet
faller under nivået den gamle kanalen kan bemanne på sitt neste
lavere diskrete kapasitetstrinn (f.eks. å miste ett helt skift, ett helt
skrivebord, ett kontraktfestet bemanningsbånd)
```

## Utregnet eksempel

**Fylkeskommunens fornyelse av parkeringskort for funksjonshemmede (blue badge)**: 60 000 fornyelser per år, tidligere 100 % telefon/papir til £6,40 per transaksjon. En ny digital tjeneste lanseres og når 65 % digital bruk i løpet av et år, til £0,30 per digitale transaksjon.

```
Naiv (brutto) besparelsesberegning:
  39 000 flyttet × (£6,40 − £0,30) = £237 900 per år

Hva som faktisk skjedde, ifølge kommunens data fra kundesenteret:
  Telefonvolumet falt fra 60 000 per år til 46 000 per år (−23 %, ikke −65 %)
  fordi: 9 000 digitale løp feilet og genererte en oppfølgingssamtale
         (lekkasje fra feiletterspørsel), og 4 000 personer som tidligere
         ikke fornyet i det hele tatt, gjør det nå fordi det var enkelt
         på nett (skjult etterspørsel – en reell forbedring av tilgangen,
         men ikke en besparelse)

  Telefonkundesenteret bemannes i enheter på 8 000 samtaler/årsverk;
  et fall på 14 000 samtaler (60 000 → 46 000) frigjør 1,75 årsverk,
  i praksis rundet ned til 1 årsverk som faktisk omdisponeres = £34 000 per år

Realisert besparelse = £34 000 per år pluss de unngåtte kostnadene til
  bygging/drift av digital kanal på 39 000 transaksjoner ≈ £34 000 + (39 000 × £0,30
  digital kostnad som allerede er regnet med) – en brøkdel av hovedtallet på £237 900,
  selv om tjenesten utvilsomt er bedre for brukerne.
```

## Sammenheng med programvareutvikling

Lærdommen for utviklere er at besparelser ved kanalskifte realiseres gjennom *operative* beslutninger (vaktlister, avvikling, reforhandling av kontrakter), ikke ved at programvaren leveres. Et team kan oppfylle alle punktene i [digital-service-standard](../standard-for-digitale-tjenester/) og likevel levere null nettobesparelse hvis ingen avvikler den gamle kanalens faste kapasitet. Å instrumentere feiletterspørsel (hvor i den digitale reisen brukerne gir opp og hva de gjør etterpå) er et løsbart traktanalyseproblem, og det mest effektive utviklingsteamet kan gjøre for å beskytte besparelsescasen. Det er også den direkte koblingen til [kostnad per transaksjon](../kostnad-per-transaksjon/), som feiletterspørsel i det stille blåser opp. Se [gevinstrealisering](../gevinstrealisering/) for den bredere disiplinen å kontrollere at besparelsene i en forretningscase faktisk kommer, og [digital inkludering](../digital-inkludering/) for hvorfor den fysiske kanalen vanligvis ikke kan, og ikke bør, avvikles helt.

## Fallgruver

- **Å anta 1:1-substitusjon mellom kanaler**: Å modellere digital bruk som en direkte subtraksjon fra telefon-/skranketall, uten å ta hensyn til skjult etterspørsel og lekkasje fra feiletterspørsel, som er dokumentert i forskning på kanalskifte i lokalforvaltningen.
- **Å bokføre brutto besparelser før avvikling**: Å regne besparelsen inn i forretningscasen året bruken øker, ikke året (om noen gang) den gamle kanalens kapasitet faktisk kuttes.
- **Å overse trinnvise bemanningskostnader**: Et volumfall på 20 % omsettes sjelden til et kostnadsfall på 20 %, fordi kundesentre og skranker bemannes i diskrete enheter, ikke kontinuerlig.
- **Å behandle skjult etterspørsel som sløsing**: Ny kontakt fra tidligere ekskluderte eller avskrekkede brukere er en reell økning i [offentlig verdi](../offentlig-verdi/), ikke en modellfeil – den bør rapporteres som et utfall for tilgang, ikke trekkes fra som støy.

## Kilder

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
