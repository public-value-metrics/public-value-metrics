# Vlada kot platforma (GaaP)

Vlada kot platforma (Government as a Platform) je strategija, da se skupne, ponovno uporabne komponente – storitev obveščanja, storitev plačil, storitev identitete – zgradijo enkrat, centralno, da jih stotine posameznih vladnih storitev uporablja, namesto da bi jih vsaka gradila sama. Javno digitalno infrastrukturo preoblikuje v problem ekonomike platform: vrednost ni v nobeni posamezni integraciji, temveč v tem, da se mejni strošek *naslednje* ekipe, ki jo uvede, približuje ničli.

## Zakaj je pomembno

GDS je strategijo formalno predstavil v publikaciji »Government as a Platform« iz leta 2015 z argumentom, da je vlada iste zmožnosti – sprejemanje plačil, obveščanje uporabnikov, preverjanje identitete, iskanje naslovov – gradila ločeno v storitvi za storitvijo, pri čemer je vsaka nosila lastno javno naročilo, varnostno presojo in breme stalne podpore. Alternativa je bilo majhno število skupnih platform, enkrat zgrajenih po visokem standardu in uporabljenih povsod: GOV.UK Notify za pošiljanje e-pošte, sporočil SMS in pisem, GOV.UK Pay za sprejemanje spletnih plačil in GOV.UK One Login (naslednik prejšnjega programa identitete GOV.UK Verify) za preverjanje identitete. Obseg, ki so ga te platforme dosegle, je najjasnejši dokaz, da je strategija delovala: GOV.UK Pay je obdelal več kot £10 milijard transakcij pri okoli 1 800 posameznih storitvah – in kjer je za prvo milijardo £1 potreboval približno štiri leta, jo zdaj obdela v okoli petih mesecih – GOV.UK Notify pa je poslal več kot 9 milijard sporočil v imenu več kot 1 500 vladnih organizacij. Vsaka od teh storitev, ki so jih uvedle, se je izognila gradnji, zavarovanju in vzdrževanju lastnega plačilnega prehoda ali cevovoda sporočil.

## Matematika

```
Strošek gradnje na storitev (brez platforme) = N storitev × strošek gradnje,
  varnostne presoje in delovanja enega sistema plačil/obveščanja/identitete

Strošek platforme = fiksni strošek gradnje platforme
                  + mejni strošek na storitev, ki jo uvede (integracija,
                    konfiguracija, stalna podpora ekipe platforme)

Ponovna uporaba se izplača, ko:
  strošek gradnje platforme < N × (strošek gradnje na storitev − mejni
  strošek integracije)

Pri zreli platformi se mejni strošek na dodatnega uporabnika približuje
zgolj pristojbini za transakcijo/sporočilo – fiksni strošek se amortizira
čez celotno vladno ozemlje, ne čez proračun enega ministrstva, zato se
komponente GaaP običajno financirajo centralno, namesto da bi se zgodnjim
uporabnikom zaračunalo polno povračilo stroškov.
```

## Praktični primer

**Lokalna oblast uvede GOV.UK Pay namesto gradnje plačilnega prehoda**:

```
Ocena lastne gradnje:
  delo za skladnost PCI-DSS + integracija + stalno vzdrževanje
  ≈ £85 000 gradnja + £22 000/leto vzdrževanje

Uvedba GOV.UK Pay:
  Napor za integracijo ≈ £12 000 (čas razvijalcev)
  Transakcijske pristojbine: kartična plačila od države državljanom se običajno
  zaračunajo kot majhen odstotek + fiksna pristojbina na transakcijo, občina
  ne nosi ločenega bremena PCI-DSS
  ≈ £12 000 enkratno, stalni strošek spremenljiv z obsegom, ne fiksen

Prihranek v prvem letu ≈ £85 000 − £12 000 = £73 000, pred upoštevanjem
izogibanja £22 000/leto vzdrževanja in izogibanja tveganju skladnosti zaradi
hrambe podatkov o karticah v sistemu, ki ga vodi občina – ta druga
kategorija je varnostna vrednost, obravnavana v
public-sector-cybersecurity-value.
```

Če ta prihranek £73 000 pomnožimo z okoli 1 800 storitvami, ki zdaj uporabljajo GOV.UK Pay, je skupni izognjeni strošek gradnje po vladi v stotinah milijonov – ekonomika platforme, ne katera posamezna integracija, je tam, kjer je dejanska vrednost strategije.

## Povezava s programskim inženirstvom

Vlada kot platforma je neposreden argument za [izdelati ali kupiti v vladi](../razvoj-ali-nakup-v-upravi/): kadar obstaja skupna, presojena, dobro vodena komponenta, je gradnja po meri le redko boljša izbira z vidika [vrednosti za denar](../vrednost-za-denar/) in skoraj po definiciji ne izpolni točke 13 [Standarda digitalnih storitev](../standard-digitalnih-storitev/) (»uporabljajte odprte standarde, skupne komponente in vzorce ter prispevajte k njim«). Spremeni tudi obliko [skupnih stroškov lastništva v vladni informatiki](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/): uvedba platforme zamenja veliko kapitalno in vzdrževalno postavko z manjšim, od uporabe odvisnim operativnim stroškom, ki ga je lažje napovedati in lažje ukiniti, če se storitev opusti. Odprta ponovna uporaba komponent ima sorodnika v [vrednosti odprtih podatkov](../vrednost-odprtih-podatkov/) – oboje sta strategiji obravnavanja nečesa, kar vlada ustvari enkrat, kot skupne infrastrukture, ne kot sredstva posameznega ministrstva.

## Pasti

- **Skrita ponovna gradnja**: ekipe tiho zgradijo lastno integracijo plačil ali obveščanja, ker je uvajanje platforme počasnejše od lastne izvedbe – težava upravljavskega trenja, ne tehnologije, ki tiho razžira ekonomiko ponovne uporabe, od katere je odvisna celotna strategija.
- **Podfinanciranje ekipe platforme glede na vrednost, ki jo ustvarja**: vrednost pripade uporabniškim ministrstvom, strošek pa ostane pri ekipi platforme, kar ustvarja kronično tveganje premajhnih naložb, razen če je financiranje centralizirano in zaščiteno – različica tragedije skupne dobrine.
- **Merjenje uspeha platforme le z uporabo**: številke uvedb (vključene storitve, poslana sporočila) so vodilni kazalnik, ne dokaz vrednosti; pravi preizkus je zgornji izračun izognjenih stroškov gradnje in izognjenega tveganja.
- **Enačenje »platforme« z »monolitom«**: komponente GaaP uspejo, ker vsaka dobro opravlja eno stvar z ozkim, stabilnim vmesnikom – združevanje nepovezanih zmožnosti v eno »platformo« ponovno ustvari problem gradnje po meri na drugi ravni.

## Viri

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
