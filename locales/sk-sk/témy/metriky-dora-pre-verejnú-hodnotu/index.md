# Metriky DORA pre verejnú hodnotu

Metriky DORA (DevOps Research and Assessment): frekvencia nasadzovania, čas realizácie zmeny (lead time), miera zlyhania zmien a čas obnovy služby, plus spoľahlivosť ako piata, sú najlepšie overenými referenčnými mierami výkonnosti dodávky v softvérovom priemysle. Preložené do jazyka verejnej zodpovednosti je každá z nich priamym ukazovateľom toho, ako rýchlo a ako bezpečne sa verejná hodnota dostáva k občanovi.

## Prečo na tom záleží

Desaťročný výskum DORA, každoročne publikovaný ako *Accelerate State of DevOps Report* (metodika Forsgrenovej, Humblea a Kima, dnes ju vedie Google Cloud), zaraďuje tímy medzi elitné, vysoko, stredne a nízko výkonné. Elitné tímy nasadzujú na požiadanie, od commitu po produkciu im to trvá menej než deň, zlyhá im zhruba 5 % zmien a obnovia sa za menej než hodinu; nízko výkonné tímy nasadzujú raz mesačne alebo menej často, trvá im to mesiace, zlyhá im okolo 40 % zmien a obnovujú sa týždne. Vo vláde to nie sú márnivé inžinierske metriky: Service Standard Government Digital Service (GDS) vyžaduje, aby tímy „často iterovali a zlepšovali“ a vedeli rýchlo reagovať na potreby používateľov, a rezorty, ktoré nevedia nasadzovať bezpečne a často, tento štandard štrukturálne nemôžu splniť, nech ukazuje ich výskum používateľov čokoľvek. Vlastná práca Cabinet Office na digitálnej efektívnosti zistila, že presun občana z neúspešnej alebo pomalej digitálnej transakcie na telefonický alebo papierový kanál je drahý: správa GDS Digital Efficiency Report z roku 2012 odhadla, že niektoré digitálne transakcie stoja len 20 p oproti telefonickým alebo osobným kontaktom za až £8,62, takže zlyhanie zmeny v službe určenej verejnosti nestojí len inžiniersky čas, ale prenáša skutočné libry na rozpočet kontaktného centra (pozri [úspory z presunu kanálov](../úspory-z-presunu-medzi-kanálmi/)).

## Matematika

```
Frekvencia nasadzovania = nasadenia do produkcie / čas
Čas realizácie zmeny    = t(nasadenie) − t(commit), medián
Miera zlyhania zmien    = zlyhané zmeny / všetky zmeny × 100
Čas obnovy (MTTR)       = t(obnovené) − t(zlyhanie), medián
Spoľahlivosť            = plnenie SLO (dostupnosť, latencia, správnosť)
```

Preklady do verejnej hodnoty:

```
Čas realizácie → týždne v pipeline × CoD, pozri cost-of-delay-in-public-programmes
Miera zlyhania → miera incidentov viditeľných pre občana: CFR × náklady na jeden
                 presmerovaný hovor do kontaktného centra (alebo na jednu
                 zlyhanú zákonnú transakciu)
Čas obnovy     → škoda z výpadku služby: MTTR × (zablokované žiadosti
                 za hodinu) × následné náklady alebo strata blahobytu na jednotku
Spoľahlivosť   → zníženie prínosu: služba s dostupnosťou 99 % prinesie
                 ≈ 0,99 svojho modelovaného prínosu, čo je dodávkový
                 analóg nedostatočného využitia (take-up) alebo dodržiavania pravidiel
```

## Vypracovaný príklad

Tím portálu žiadostí o dávky na miestnom úrade, pred investíciou do inžinierstva dodávky a po nej:

```
                    Pred        Po
Nasadenia           mesačne     týždenne
Čas realizácie      8 týždňov   5 dní
CFR                 30 %        10 %
MTTR                3 dni       4 hodiny
```

Tím dodáva zhruba 25 zlepšení ročne s priemernou hodnotou £8 000 týždenne ([cena oneskorenia](../náklady-oneskorenia-vo-verejných-programoch/)). Skrátenie času realizácie o zhruba 7,3 týždňa posúva prínosový tok každého zlepšenia dopredu: 25 × 7,3 × 8 000 ≈ **£1 460 000 ročne** hodnoty dodanej skôr. Pri miere zlyhania: 25 × (0,30 − 0,10) = 5 menej zlyhaných zmien ročne; každá zlyhaná zmena na verejnom portáli typicky presmeruje odhadom 2 000 občanov na telefonický kanál za £8,62 oproti 20 p, čistý náklad zhruba £8,42 × 2 000 ≈ £16 840 na incident, takže odvrátenie 5 incidentov ušetrí ≈ **£84 200 ročne**. Investícia do inžinierstva dodávky je tak ocenená v rovnakej mene ako akýkoľvek iný argument o verejnej hodnote.

## Riešený príklad, pokračovanie: spoľahlivosť

Ak portál beží na 97 % dostupnosti namiesto cieľových 99,5 % a každý percentuálny bod výpadku sa modeluje ako 2 % žiadostí stratených opustením, služba dodáva zhruba 0,975 svojho modelovaného prínosu £2 mil. ročne, teda zníženie prínosu £50 000 ročne, ktoré čisto dashboard dostupnosti nikdy neodhalí.

## Súvislosť so softvérovým inžinierstvom

Metriky DORA sú prevádzkové metriky verejnej služby v inom obleku: čas realizácie zodpovedá [štandardom služieb a metrikám transakcií](../štandardy-služieb-a-metriky-transakcií/); miera zlyhania zmien zodpovedá miere prepracovania a sťažností; MTTR zodpovedá tomu, ako dlho je zákonná služba pre žiadateľov nedostupná. Zlepšovacie techniky sa prenášajú oboma smermi, pretože obe sú systémy frontov pod obmedzeniami zodpovednosti; matematiku frontov nájdete v téme [metriky toku pri vládnej dodávke](../metriky-toku-pri-vládnej-dodávke/). Všimnite si aj zistenie DORA z roku 2025, že zavádzanie AI koreluje s vyššou priepustnosťou, ale *horšou* stabilitou: intervencia s účinnosťou aj vedľajšími účinkami, čo je presne analýza čistého prínosu, ktorú rozoberá téma [produktivita AI vo verejnom sektore](../produktivita-umelej-inteligencie-vo-verejnom-sektore/) z tejto skupiny.

## Úskalia

- **Manipulácia s metrikami**: nafukovanie počtu nasadení prázdnymi vydaniami alebo vylúčenie hotfixov z počtu zlyhaných zmien. Udalosti definujte tak presne, ako zákonný štandard služby definuje „úspešnú transakciu“.
- **Tabuľky poradia medzi rezortmi**: klastre DORA porovnávajú dodávkové postupy, nie služby s rozdielnymi rizikovými profilmi; daňový platobný systém hodnotený ako „vysoký“ môže byť správnym postojom tam, kde by „elitný“ bol vzhľadom na požiadavky na zabezpečenie neopatrný.
- **Optimalizácia jedinej metriky**: rýchlosť bez miery zlyhania zmien je klasický kompromis medzi priepustnosťou a nestabilitou; vykazujte všetky štyri spolu, nie ako jediné skóre.

## Zdroje

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
