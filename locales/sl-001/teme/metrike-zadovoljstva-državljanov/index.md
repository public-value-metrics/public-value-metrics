# Metrike zadovoljstva državljanov

Metrike zadovoljstva državljanov merijo, kako ljudje ocenjujejo svojo neposredno izkušnjo z javno storitvijo. To je drugo kot zaupanje v institucije na splošno in drugo kot to, ali je storitev dejansko dosegla dober izid. Storitev je lahko priljubljena in neučinkovita ali učinkovita in nepriljubljena; razlika med obema je sama po sebi diagnostična informacija, ki bi jo morala izvajalska ekipa spremljati.

## Zakaj je pomembno

Zadovoljstvo se meri na dveh različnih ravneh, ki se rutinsko mešata. Na ravni storitve britanska zdaj ukinjena Performance Platform in današnji priročnik GOV.UK Service Manual zahtevata anketo o zadovoljstvu za vsako storitev (običajno petstopenjska lestvica od »zelo zadovoljen« do »zelo nezadovoljen«, izvedena ob trenutku transakcije) kot enega od štirih obveznih kazalnikov storitve; glej [standardi storitev in metrike transakcij](../standardi-storitev-in-transakcijske-metrike/). Na institucionalni ravni britanska Civil Service People Survey vsako leto meri zavzetost in izkušnjo zaposlenih v vseh centralnih vladnih ministrstvih, program OECD »Trust in Government« pa posebej anketira javno zaupanje v nacionalno vlado v državah članicah in spremlja dolgoročni vzorec upada in okrevanja, ki ga močno oblikujejo krize (finančna kriza 2008 in pandemija COVID-19 sta obe povzročili izrazita, vidna gibanja v številkah zaupanja OECD). Razlog, zakaj morajo inženirji, ki gradijo storitve za državljane, zadovoljstvo in izid ločevati, je znan način neuspeha pri oblikovanju storitev: čudovito oblikovan, preprost digitalni obrazec za zahtevek za dajatev lahko doseže zelo visoko zadovoljstvo, medtem ko osnovna politika (pravila upravičenosti, zaostanki pri obdelavi, višine dajatev) upravičenca ne postavi v boljši položaj. Zadovoljstvo meri vmesnik, ne meri pa vrednosti, ki jo storitev za njim dostavi.

## Matematika

```
Neto zadovoljstvo = % zadovoljnih (ali zelo zadovoljnih) − % nezadovoljnih (ali zelo nezadovoljnih)
                    (nevtralni odgovori/brez mnenja so izključeni iz obeh členov, a se
                    štejejo v osnovo odgovorov za izračun vsakega odstotka)

Vrzel med zadovoljstvom in izidom = ocena zadovoljstva − ocena doseganja izida
                    (obe normalizirani 0–100; velika pozitivna vrzel kaže na storitev,
                    ki »daje dober občutek«, a vsebinsko ne dostavi dovolj)

Indeks zaupanja (v slogu OECD) = % anketirancev, ki odgovorijo »da« na
                    »ali zaupate [nacionalni vladi]?«
                    spremljano kot časovna vrsta, običajno razčlenjeno po
                    starosti, dohodku in izobrazbi
```

## Praktični primer

**Storitev e-obračunavanja občinskega davka lokalne oblasti**: anketa o zadovoljstvu ob uspešni transakciji kaže 2.400 anketirancev: 1.650 zadovoljnih/zelo zadovoljnih, 250 nezadovoljnih/zelo nezadovoljnih, 500 nevtralnih.

```
Neto zadovoljstvo = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 neto zadovoljstva
```

To se na samem zdi močno. A anketa se pokaže samo uporabnikom, ki transakcijo *uspešno* zaključijo, kar je znana merilna pristranskost (glej pasti spodaj). Povezava z metriko stopnje dokončanja iz [standardov storitev in metrik transakcij](../standardi-storitev-in-transakcijske-metrike/) pokaže, da je dokončanje le 71 %, kar pomeni:

```
Pravo zadovoljstvo populacije ni izmerjeno za 29 %, ki so pot opustili –
verjetno najbolj nezadovoljno skupino, saj je opustitev sama močan negativen
signal, ki ga anketa nikoli ne zajame.
```

**Primer na nacionalni ravni (struktura vrste zaupanja v slogu OECD)**: zaupanje v nacionalno vlado je v 1. letu poročano pri 42 %, v 2. letu (kriznem) pade na 34 % in v 3. letu okreva na 39 %, kar je pot, značilna za vzorec šoka in delnega okrevanja, ki ga OECD dokumentira v državah članicah po večjih krizah.

## Povezava s programskim inženirstvom

Ankete o zadovoljstvu instrumentirajte na vsaki smiselni izstopni točki uporabniške poti, ne le ob uspešnem dokončanju. To je najpogostejša inženirska napaka na tem področju, ki tiho spremeni metriko zadovoljstva v nečimrno metriko s pristranskostjo preživelih. Kjer je mogoče, oceno zadovoljstva na isti nadzorni plošči povežite z metriko dokončanja ali izida, da ekipa ne more slaviti naraščajočega zadovoljstva, medtem ko dokončanje tiho pada (glej [strošek na transakcijo](../strošek-na-transakcijo/) in [digitalno vključenost](../digitalna-vključenost/) za to, kdo je pri vzorčenju digitalnega zadovoljstva sploh izključen: nedigitalni uporabniki in uporabniki s pomočjo digitalnega so v anketah znotraj storitve sistematično premalo zastopani). Podatki o zadovoljstvu in zaupanju neposredno napajajo nogo legitimnosti [Moorovega strateškega trikotnika](../javna-vrednost/) in sodijo v perspektivi »stranka« in »legitimnost« [kazalnikov javne vrednosti](../kazalniška-kartica-javne-vrednosti/); glej [metrike zaupanja in legitimnosti](../merila-zaupanja-in-legitimnosti/) za institucionalni ustreznik te metrike na ravni storitve.

## Pasti

- **Pristranskost preživelih pri anketah ob dokončanju**: uporabniki, ki pot opustijo, ankete nikoli ne vidijo, zato lahko visoko zadovoljstvo znotraj storitve soobstaja z nizko stopnjo dokončanja in veliko nevidno populacijo nezadovoljnih, ki poti niso dokončali.
- **Obravnavanje zadovoljstva kot približka izida**: dobro oblikovan vmesnik za slabo zasnovano politiko doseže dobre ocene zadovoljstva in slabe izida; vedno poročajte oboje, nikoli enega kot nadomestek za drugega.
- **Majhni, nereprezentativni vzorci, poročani z lažno natančnostjo**: ocena zadovoljstva nekaj sto samoizbranih anketirancev, poročana na eno decimalko, implicira zaupanje, ki ga velikost vzorca ne more podpreti.
- **Zanemarjanje demografske razčlenitve**: nacionalne številke zaupanja in zadovoljstva, ki niso razčlenjene po starosti, dohodku, invalidnosti ali digitalnem dostopu, lahko prikrijejo močno različne izkušnje med skupinami, kar objave OECD Trust in Government same izrecno razčlenjujejo.

## Viri

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
