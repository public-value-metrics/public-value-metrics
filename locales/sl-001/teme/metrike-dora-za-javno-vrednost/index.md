# Metrike DORA za javno vrednost

Metrike DORA (DevOps Research and Assessment) – pogostost uvajanja, čas izvedbe sprememb, stopnja neuspešnih sprememb in čas obnovitve storitve, kot peta pa zanesljivost – so najbolj preverjeni referenčni kazalniki uspešnosti izvedbe v programski industriji. Prevedene v jezik odgovornosti javnega sektorja je vsaka od njih neposreden približek tega, kako hitro in kako varno javna vrednost doseže državljana.

## Zakaj je pomembno

Desetletje raziskav DORA, ki jih vsako leto objavlja *Accelerate State of DevOps Report* (metodologija Forsgren, Humble in Kim, danes pod okriljem Google Cloud), razvršča ekipe med elitne, visoke, srednje in nizke izvajalce. Elitne ekipe uvajajo na zahtevo, od potrditve kode do produkcije potrebujejo manj kot dan, pri približno 5 % sprememb odpovejo in si opomorejo v manj kot eni uri; nizki izvajalci uvajajo mesečno ali redkeje, potrebujejo mesece, pri okoli 40 % sprememb odpovejo in si opomorejo v tednih. V vladi to niso inženirske nečimrnostne metrike: Standard storitev Government Digital Service zahteva, da ekipe »pogosto ponavljajo in izboljšujejo« ter se hitro odzivajo na uporabniške potrebe, ministrstva, ki ne morejo varno in pogosto uvajati sprememb, pa tega standarda strukturno ne morejo izpolniti, karkoli pokažejo njihove uporabniške raziskave. Lastno delo Cabinet Office na področju digitalne učinkovitosti je pokazalo, da je preusmeritev državljana iz neuspele ali počasne digitalne transakcije v telefonski ali papirni kanal draga – poročilo GDS Digital Efficiency Report iz leta 2012 je ocenilo, da nekatere digitalne transakcije stanejo le 20p, medtem ko telefonski ali osebni stiki stanejo do £8,62 – zato neuspešna sprememba pri javni storitvi ne stane le inženirskega časa, temveč prenese resnične funte na proračun kontaktnega centra (glej [prihranki zaradi prehoda na digitalne kanale](../prihranki-zaradi-preusmeritve-kanalov/)).

## Matematika

```
Pogostost uvajanja     = uvedbe v produkcijo / čas
Čas izvedbe sprememb   = t(uvedba) − t(potrditev), mediana
Stopnja neuspešnih sprememb = neuspešne spremembe / vse spremembe × 100
Čas obnovitve (MTTR)   = t(obnovitev) − t(odpoved), mediana
Zanesljivost           = doseganje SLO (razpoložljivost, odzivnost, pravilnost)
```

Prevodi v javno vrednost:

```
Čas izvedbe    → tedni v cevovodu × CoD, glej cost-of-delay-in-public-programmes
Stopnja odpovedi → stopnja incidentov, vidnih državljanom: CFR × strošek na
                 preusmerjeni klic v kontaktni center (ali na neuspešno zakonsko transakcijo)
Čas obnovitve  → škoda zaradi izpada storitve: MTTR × (blokirani zahtevki/vloge
                 na uro) × nadaljnji strošek ali izguba blaginje na enoto
Zanesljivost   → popust na korist: storitev z 99-odstotno razpoložljivostjo
                 prinese ≈ 0,99 modelirane koristi – izvedbeni ustreznik
                 primanjkljaja pri koriščenju ali skladnosti
```

## Praktični primer

Ekipa portala za zahtevke za dajatve pri lokalni oblasti, pred naložbo v inženirstvo izvedbe in po njej:

```
                    Prej        Potem
Uvedbe              mesečno     tedensko
Čas izvedbe         8 tednov    5 dni
CFR                 30 %        10 %
MTTR                3 dni       4 ure
```

Ekipa izda okoli 25 izboljšav na leto, povprečna vrednost £8 000 na teden ([strošek odlašanja](../strošek-zamude-v-javnih-programih/)). Skrajšanje časa izvedbe za približno 7,3 tedna pospeši tok koristi vsake izboljšave: 25 × 7,3 × 8 000 ≈ **£1 460 000 na leto** prej dostavljene vrednosti. Pri stopnji odpovedi: 25 × (0,30 − 0,10) = 5 manj neuspešnih sprememb na leto; vsaka neuspešna sprememba na javnem portalu običajno preusmeri ocenjenih 2 000 državljanov v telefonski kanal po £8,62 namesto 20p, kar je neto strošek približno £8,42 × 2 000 ≈ £16 840 na incident, zato izogib 5 incidentom prihrani ≈ **£84 200 na leto**. Naložba v inženirstvo izvedbe je vrednotena v isti valuti kot vsak drug primer javne vrednosti.

## Delovni primer, nadaljevanje: zanesljivost

Če portal deluje z 97-odstotno razpoložljivostjo namesto ciljnih 99,5 % in je vsaka odstotna točka izpada modelirana kot 2 % zahtevkov, izgubljenih zaradi opustitve, storitev prinaša približno 0,975 modelirane koristi £2 milijona na leto – popust na korist £50 000 na leto, ki ga nadzorna plošča zgolj razpoložljivosti nikoli ne pokaže.

## Povezava s programskim inženirstvom

Metrike DORA so operativne metrike javne storitve v drugačni preobleki: čas izvedbe ustreza [standardom storitev in metrikam transakcij](../standardi-storitev-in-transakcijske-metrike/); stopnja neuspešnih sprememb ustreza stopnji popravkov in pritožb; MTTR ustreza temu, kako dolgo je zakonska storitev nedostopna upravičencem. Tehnike izboljšav se prenašajo v obe smeri, ker sta oba čakalni sistem pod omejitvami odgovornosti – glej [pretočne metrike pri vladni izvedbi](../pretočne-metrike-pri-vladni-izvedbi/) za osnovno matematiko čakalnih vrst. Omenimo tudi ugotovitev DORA iz leta 2025, da je uvedba umetne inteligence povezana z večjo prepustnostjo, a *slabšo* stabilnostjo – ukrep z učinkovitostjo in stranskimi učinki, kar je točno analiza neto koristi, ki jo obdela tema [produktivnost umetne inteligence](../produktivnost-umetne-inteligence-v-javnem-sektorju/) v tej skupini.

## Pasti

- **Zloraba metrik**: napihovanje števila uvedb s praznimi izdajami ali izključevanje nujnih popravkov iz štetja neuspešnih sprememb. Dogodke opredelite tako natančno, kot standard zakonske storitve opredeljuje »uspešno transakcijo«.
- **Lestvice med ministrstvi**: skupine DORA primerjajo prakse izvedbe, ne storitev z različnimi profili tveganja; davčni plačilni sistem z oceno »visoka« je lahko prava drža, kjer bi bila »elitna« neodgovorna glede na zahteve zagotovila.
- **Optimizacija samo ene metrike**: hitrost brez stopnje neuspešnih sprememb je klasičen kompromis med prepustnostjo in nestabilnostjo – poročajte vse štiri skupaj, ne kot eno oceno.

## Viri

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
