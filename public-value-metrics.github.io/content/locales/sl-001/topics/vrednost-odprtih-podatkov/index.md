# Vrednost odprtih podatkov

Vrednost odprtih podatkov je problem ocenjevanja, koliko so vredni državni in javni podatki, ki nimajo cene: ne prodajajo se, zato ni vrstice prihodkov, vendar njihova objava (vremenski zapisi, vozni redi, meje poštnih okolišev, registri podjetij) dokazljivo ustvarja gospodarsko in družbeno dejavnost v nadaljnjih fazah. Dobro vrednotenje je pomembno, ker sta »objava je brezplačna« in »je brez vrednosti« napačna, programski inženir, ki se odloča, ali bo odprl API ali podatkovni nabor, pa potrebuje boljši argument od obeh.

## Zakaj je pomembno

Najpogosteje navajana ocena od zgoraj navzdol izhaja iz poročila McKinsey Global Institute iz leta 2013 »Open data: Unlocking innovation and performance with liquid information«, ki je potencialno letno vrednost odprtih podatkov v sedmih področjih – izobraževanje, promet, potrošniški izdelki, elektrika, nafta in plin, zdravstvo ter potrošniške finance – ocenilo na 3 do 5 bilijonov dolarjev letno po vsem svetu, in sicer z mehanizmi, kot so večja preglednost, učinkovitejše usklajevanje ponudbe in povpraševanja ter omogočanje novih izdelkov in storitev, zgrajenih na podatkih. Ta številka je ocena scenarija, ne izmerjen dosežek, in jo pogosto napačno navajajo, kot da gre za prihodek, ki ga lahko država neposredno zajame, čeprav vrednost večinoma pripada tretjim osebam – podjetjem, raziskovalcem, državljanom – ki podatke uporabljajo, kar je prav smisel odpiranja namesto prodaje. Britanski Open Data Institute, ki sta ga leta 2012 soustanovila Sir Tim Berners-Lee in Sir Nigel Shadbolt, je od takrat zgradil zbirko podrobnejših študij primerov od spodaj navzgor – po sektorjih, po podatkovnih naborih – ki so za resničen poslovni primer veliko bolj uporabne kot naslovna številka McKinseyja, ker kažejo mehanizem ustvarjanja vrednosti in ne le njegove skupne velikosti.

## Matematika

Odprti podatki nimajo tržne cene, zato jo nadomeščajo metode vrednotenja; ponavljajo se trije pristopi in noben ni sam po sebi zadosten:

```
1. Metoda preprečenih stroškov / nadomestitvenih stroškov:
   vrednost ≈ kar bi uporabniki plačali za lastno izdelavo ali licenco
   enakovrednih podatkov – spodnja meja, ne zajema vrednosti, ki jo
   ustvarijo uporabe, ki jih prvotni izdelovalec ni predvidel

2. Metoda tržne analogije / dejavnosti v nadaljnjih fazah:
   vrednost ≈ prihodki ali prihranki, ki jih ustvarijo podjetja/storitve,
   zgrajene na podatkih (npr. navigacijske aplikacije na odprtih
   kartografskih in prometnih podatkih) – zajame resnično gospodarsko
   dejavnost, vendar jo je težko čisto pripisati sami objavi podatkov
   (glej additionality-and-deadweight)

3. Metoda pogojnega vrednotenja / izraženih preferenc:
   vrednost ≈ kar uporabniki pravijo, da bi plačali, ali čas, za
   katerega pravijo, da jim ga prihrani – glej stated-preference-valuation
   za splošno metodo in njene pristranskosti

Nobena od teh ne ustvari tako čiste številke kot tržna cena; verodostojni
poslovni primeri odprtih podatkov triangulirajo med dvema ali več metodami
in jasno navedejo, kateri mehanizem opravlja delo.
```

## Praktični primer

**Ilustrativna objava nacionalnih kartografskih/naslovnih podatkov** (metodologija po vzoru študij primerov v slogu ODI, številke ponazarjajo obseg, ki ga take študije običajno najdejo):

```
Ocena preprečenih stroškov:
  Podjetja, ki bi sicer komercialno licencirala enakovredne podatke za
  ujemanje naslovov, pri ocenjenem povprečnem strošku licence £4.000/
  leto, med ocenjenimi 15.000 MSP, ki zdaj uporabljajo brezplačni odprti
  podatkovni nabor
  = 15.000 × £4.000 = £60.000.000/leto samo prihranjenih licenčnin

Ocena dejavnosti v nadaljnjih fazah (bolj špekulativna, potrebuje kontrafaktični scenarij):
  Novi izdelki za usmerjanje dostave in logistiko, zgrajeni na odprtih
  podatkih, ki brez njih ne bi obstajali ali bi bili bistveno slabši –
  zahteva primerjavo s kontrafaktičnim scenarijem, da podatki ostanejo
  zaprti ali komercialno licencirani (counterfactual-analysis), ker bi
  del te dejavnosti nastal tako ali tako na plačljivih podatkih po višji
  ceni, kar je mrtva teža v smislu »vrednosti, ki jo je ustvarilo odpiranje«

Zagovorljiv poslovni primer navaja preprečene stroške kot trdno spodnjo
mejo, oceno dejavnosti v nadaljnjih fazah pa obravnava kot scenarij
zgornje meje, ne kot dejstvo.
```

## Povezava s programskim inženirstvom

Za inženirje je praktično vprašanje vrednosti odprtih podatkov običajno ožje od nacionalnih naslovnih številk: ali odpiranje tega določenega API-ja ali podatkovnega nabora (namesto da ostane za partnerskim sporazumom) poveča ponovno uporabo dovolj, da upraviči tekoče stroške dokumentiranja, verzioniranja in podpore kot javnemu vmesniku? Ti stroški vzdrževanja so resnični in so nasprotje ekonomike »zgradi enkrat, uporabi pogosto« pri [državi kot platformi](../vlada-kot-platforma/) – temi sta tesni sorodnici, ena o skupni kodi in infrastrukturi, druga o skupnih podatkih. Vsako trditev o vrednosti odprtih podatkov je treba preveriti z [dodatnostjo in mrtvo težo](../dodatnost-in-mrtva-teža/), preden pride v poslovni primer: dejavnost, ki bi nastala tako ali tako, na komercialno licenciranih podatkih, ni vrednost, ki jo je ustvarilo *odpiranje*.

## Pasti

- **Navajanje McKinseyjeve številke 3–5 bilijonov $ kot specifične za Združeno kraljestvo ali kot deleža tega podatkovnega nabora**: to je globalna ocena scenarija za sedem sektorjev iz leta 2013 – uporaba kot natančnega množitelja za posamezen nacionalni podatkovni nabor napačno predstavlja, kaj ta številka je.
- **Brez kontrafaktičnega scenarija**: prisvajanje zaslug za vso gospodarsko dejavnost v nadaljnjih fazah, zgrajeno na odprtih podatkih, brez vprašanja, koliko bi je nastalo tako ali tako na plačljivih ali licenciranih podatkih po višji ceni (glej [dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/) ter [analiza kontrafaktičnega scenarija](../kontrafaktična-analiza/)).
- **Zamenjevanje stroškov izdelave z ustvarjeno vrednostjo**: podatkovni nabor, ki je bil drag za zbiranje, ni samodejno vreden objave, poceni pa ni samodejno malo vreden – vrednost sledi uporabi v nadaljnjih fazah, ne stroškom v prejšnjih.
- **Zanemarjanje tekočih stroškov vzdrževanja »odprtosti«**: objava enkratnega izvoza CSV ni enaka zaveza kot upravljanje dokumentiranega, verzioniranega, podprtega odprtega API-ja – nezadostno financiranje slednjega po objavi ob lansiranju je pogost način neuspeha.

## Viri

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
