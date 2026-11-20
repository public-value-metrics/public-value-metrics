# Tjenestestandarder og transaksjonsmål

GOV.UK Service Standard er den britiske regjeringens sjekkliste med 14 punkter for å bygge og drive en offentlig digital tjeneste, og den kommer sammen med et lite, obligatorisk sett kvantitative transaksjonsmål – kostnad per transaksjon, gjennomføringsgrad, digital bruk og brukertilfredshet – som team må publisere for hver tjeneste i drift i sentralforvaltningen. Sammen er standarden og målene den operasjonelle, daglige spesialiseringen av de bredere rammeverkene for offentlig verdi og nøkkeltall i dette depotet, rettet rett mot programvareleveringsteam.

## Hvorfor det er viktig

Service Standard, som vedlikeholdes i GOV.UKs Service Manual, krever at hver vurdering på et gitt tidspunkt (alfa, beta, drift) av en offentlig digital tjeneste skal vise – blant de 14 punktene – at teamet forstår brukernes behov, arbeider i et tverrfaglig team, itererer og forbedrer hyppig, og *evaluerer verktøy, systemer og arbeidsmåter*. Historisk lå dette ved siden av en offentlig Performance Platform der hver tjeneste i drift publiserte transaksjonsdataene sine åpent; den plattformen er siden nedlagt, men den underliggende plikten til å måle og publisere disse fire kjernemålene består gjennom Service Manuals veiledning «measuring success». Grunnen til at dette skiller seg fra et generisk dashbord med programvarenøkkeltall, er at disse målene uttrykkelig ble utformet som én koblet økonomisk modell, ikke fire uavhengige skårer: hele besparelsescasen for digital forvaltning – Government Digital Services Digital Efficiency Report fant at digitale transaksjoner var omtrent 20 ganger billigere enn over telefon og rundt 50 ganger billigere enn ved personlig oppmøte for sammenlignbare kommunale tjenester – materialiserer seg bare hvis gjennomføringsgraden holder seg høy og den digitale bruken genuint øker, i stedet for bare å legge til en billig kanal ved siden av en uendret dyr.

## Regnestykket

```
Kostnad per transaksjon = total driftskostnad for tjenesten / antall gjennomførte transaksjoner
Gjennomføringsgrad      = gjennomførte transaksjoner / påbegynte transaksjoner × 100
Digital bruk            = transaksjoner i digitale kanaler / transaksjoner i alle kanaler × 100
Brukertilfredshet       = % fornøyde + svært fornøyde, i en 5-punkts undersøkelse i tjenesten

Besparelse ved kanalskifte = transaksjonsvolum × endring i digital bruk × (kostnad per transaksjon i
                              den gamle kanalen − kostnad per transaksjon digitalt)

Kostnad av feiletterspørsel = (1 − gjennomføringsgrad) × transaksjoner forsøkt digitalt ×
                              kostnaden for reservekanalen disse brukerne da bruker i stedet
```

## Utregnet eksempel

**Illustrativ tjeneste for fornyelse av lisenser i sentralforvaltningen**, 2 millioner transaksjoner/år, for tiden 65 % telefon (£3,00/transaksjon) og 35 % digitalt (£0,30/transaksjon), gjennomføringsgrad 80 %. En redesign etter Service Standards 14 punkter løfter digital bruk til 60 % og gjennomføringsgraden til 92 %:

```
Besparelse fra endret bruk = 2 000 000 × 0,25 × (3,00 − 0,30) = £1 350 000/år

Kostnad av feiletterspørsel, før:
  2 000 000 × 0,35 × (1 − 0,80) × £3,00 = £420 000/år (de som gir opp faller tilbake på telefon)

Kostnad av feiletterspørsel, etter:
  2 000 000 × 0,60 × (1 − 0,92) × £3,00 = £288 000/år

Netto besparelse i feiletterspørsel = £420 000 − £288 000 = £132 000/år

Total årlig besparelse ≈ £1 350 000 + £132 000 = £1 482 000/år
```

Regnestykket viser tydelig hvorfor gjennomføringsgraden ikke er et sekundært mål: uten forbedringen fra 80 % til 92 % ville besparelsen fra endret bruk delvis blitt spist opp av feiletterspørsel som sender frustrerte digitale brukere rett tilbake til den dyre telefonkanalen.

## Sammenheng med programvareutvikling

Disse fire målene er et fungerende eksempel på et dashbord for kostnad og konsekvenser: ett kostnadsmål holdt atskilt fra tre utfalls-/kvalitetsmål, bevisst aldri slått sammen til én skår – den samme disiplinen som argumenteres for i [nøkkeltall i offentlig sektor](../nøkkeltall-i-offentlig-sektor/). For utviklere brytes dette ned i konkret arbeid man kan eie: gjennomføringsgrad er et problem med instrumentering av trakten, og hvert punkt der brukere gir opp i reisen kan i prinsippet lokaliseres og rettes; kostnad per transaksjon krever ekte enhetskostnadsregnskap, inkludert kostnader til bistått og papirbasert kanal, ikke bare utgifter til skydrift (se [kostnad per transaksjon](../kostnad-per-transaksjon/) og [totale eierkostnader i offentlig IT](../totalkostnad-for-eierskap-i-offentlig-it/)); og digital bruk er et likhetsmål i effektivitetsdrakt – innbyggerne som ikke kan eller vil bytte kanal er uforholdsmessig ofte eldre, funksjonshemmede eller digitalt ekskluderte, så aggressiv nedleggelse av kanaler gjør en «besparelse» til en tilgangsskade (se [digital inkludering](../digital-inkludering/) og [besparelser ved kanalskifte](../besparelser-ved-kanalskifte/)). Selve standarden på 14 punkter er prosessspesifikasjonen bak disse tallene – se [Digital Service Standard](../standard-for-digitale-tjenester/) for hele standarden, og [mål for innbyggertilfredshet](../mål-på-innbyggertilfredshet/) for hvordan tilfredshetstallet her forholder seg til bredere måling av tillit.

## Fallgruver

- **Økt bruk oppnådd ved å stenge alternativkanalen**: å stenge en telefonlinje løfter den digitale bruksprosenten aritmetisk, mens feiletterspørsel dumpes på den kanalen som er igjen (ofte en dyrere bistått digital eller personlig rute); mål alltid totalsystemets kostnad, ikke forholdstallet alene.
- **Å måle gjennomføringsgrad fra trinn to i trakten**: å starte «påbegynt»-tellingen etter det første reelle frafallspunktet pynter på gjennomføringsgraden og skjuler det største tapet som kan rettes.
- **Kostnad per transaksjon uten bistått digital støtte**: en enhetskostnad for bare digitalt som ignorerer arbeidstiden brukt på å hjelpe brukere som ikke kan klare seg selv, undervurderer kanalens sanne kostnad.
- **Å publisere mål uten felles definisjon på tvers av tjenester**: «transaksjon» og «gjennomført» betyr ulike ting hos ulike tjenesteteam med mindre definisjonene standardiseres og versjoneres, noe som gjør sammenligning på tvers av tjenester upålitelig.

## Kilder

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
