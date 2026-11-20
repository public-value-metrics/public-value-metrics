# Vlastný vývoj alebo nákup vo verejnej správe

Rozhodovanie medzi vlastným vývojom a nákupom (build-vs-buy) je štruktúrované, rizikovo upravené porovnanie zákazkového vývoja s komerčným alebo štandardným obstaraním, porovnávané podľa diskontovaných [celkových nákladov vlastníctva](../celkové-náklady-vlastníctva-vo-vládnom-it/), času do získania hodnoty a rizika. Verejná správa je štrukturálne kupujúci sektor (Technology Code of Practice stanovuje prezumpciu v prospech štandardných a cloudových riešení), a predsa inžinierske tímy v rezortoch štandardne siahajú po vlastnom vývoji, z rovnakých dôvodov ako vývojári všade inde.

## Prečo na tom záleží

Technology Code of Practice od Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) a súvisiace usmernenie Service Manual o rozhodovaní medzi vlastným vývojom a nákupom nútia rezorty odôvodniť zákazkový vývoj proti prezumpcii, že štandardnú schopnosť treba kúpiť, nie vyvinúť, a že zákazkový kód si zaslúži len skutočne novátorská schopnosť, ktorá odlišuje poslanie. Doplnkové usmernenie ministerstva financií (HM Treasury) k optimistickému skresleniu v Green Book, vychádzajúce z preskúmania veľkých verejných obstarávaní od Mott MacDonald z roku 2002, dáva IT projektom najširšie rozpätie navýšenia zo všetkých hodnotených kategórií: odhady kapitálových nákladov sa odporúča pred použitím v hodnotení navýšiť o 10 % na dolnom konci a až o 200 % na hornom, čo odráža, ako výrazne sa softvérové vývoje v minulosti vo verejnom obstarávaní podhodnocovali. Analýza vlastný vývoj–nákup existuje práve preto, aby pred schválením vynútila toto rizikové prispôsobenie na stôl, a nenechala ho vyplávať ako žiadosť o pokrytie prečerpania v priebehu roka.

## Matematika

```
Porovnávajte v rovnakom 3 – 5-ročnom horizonte, diskontovanom sociálnou
diskontnou sadzbou podľa Green Book (pozri social-discount-rate.md):

NPV_možnosť = PV(prínosy, posunuté o čas do získania hodnoty) − PV(TCO)

Rizikové úpravy (vzor optimistického skreslenia podľa Green Book):
  náklady vlastného vývoja × 1,1 – 3,0   (rozpätie navýšenia pre IT projekty, Mott MacDonald)
  čas do získania hodnoty pri vlastnom vývoji + 40 – 60 % (predpoklad oneskorenia nasadenia)
  nákup: namiesto toho pridať kontrolu reality integrácie a náklady na ukončenie zmluvy

Rozhodovacie faktory v poradí, v akom zvyčajne rozhodujú:
  1. odlišnosť – je táto schopnosť poslaním, alebo len potrubím?
  2. čas do získania hodnoty × náklady oneskorenia (pozri cost-of-delay-in-public-programmes.md)
  3. rizikovo upravené celkové náklady vlastníctva
```

## Vypracovaný príklad

Miestna samospráva potrebuje systém správy prípadov pre sociálnu starostlivosť o dospelých. Nákup: SaaS za £180 000 ročne, spustený za 4 mesiace. Vlastný vývoj: odhadované £900 000 plus £150 000 ročne na údržbu, spustený za 14 mesiacov.

```
Rizikovo upravené náklady vlastného vývoja = 900 000 × 1,4 = £1 260 000
5-ročné TCO:
  nákup = 180 000 × 5 = £900 000
  vlastný vývoj = 1 260 000 + 150 000 × 5 = £2 010 000

Člen oneskorenia: systém predchádza £40 000 mesačne duplicitných posúdení;
vlastný vývoj príde o 10 mesiacov neskôr než nákup.
NO = 10 × 40 000 = £400 000

Efektívne porovnanie: £900 000 (nákup) oproti £2 010 000 + £400 000 = £2 410 000 (vlastný vývoj)
```

Nákup vyhráva za päť rokov zhruba o 1,5 milióna libier a najväčšou jednotlivou položkou po samotnom odhade vlastného vývoja sú náklady oneskorenia, ktoré by čisté porovnanie kapitálových výdavkov nikdy neodhalilo.

## Súvislosť so softvérovým inžinierstvom

Disciplíny, ktoré sa z tejto analýzy priamo prenášajú do praxe dodávania: **rizikové úpravy založené na predchádzajúcich údajoch** – navýšenie Mott MacDonald je softvérovým ekvivalentom optimistického skreslenia podľa Green Book uplatneného mechanicky, takže tímy majú obhajovať výnimky z neho, nie predpokladať, že výnimkou je ich odhad. **Poctivosť pri porovnávaní** – alternatívou k vlastnému vývoju je najlepšia dostupná možnosť nákupu, nie „nič“, čo priamo súvisí s [náklady obetovanej príležitosti vo verejných výdavkoch](../oportunitné-náklady-vo-verejných-výdavkoch/). **Poctivé porovnanie TCO** – každý návrh vlastného vývoja by sa mal porovnať s úplnými [celkovými nákladmi vlastníctva](../celkové-náklady-vlastníctva-vo-vládnom-it/) možnosti nákupu, nie s jej cenníkovou cenou. Kde vlastný vývoj skutočne vyhráva, [náklady oneskorenia](../náklady-oneskorenia-vo-verejných-programoch/) dodatočného času vývoja by sa mali v obchodnom prípade výslovne ocenieť, nie nechať ako nevyslovený predpoklad, že čas nezáleží.

## Úskalia

- **Porovnávanie cenníkovej ceny dodávateľa s rizikovo neupraveným odhadom vlastného vývoja**: vlastný vývoj sa tým dvakrát nepravdivo vylepšuje, raz v nákladoch a raz v harmonograme.
- **Nulové ocenenie interných pracovných síl**: inžiniersky čas štátnych zamestnancov sa považuje za „zadarmo“, lebo je už v rozpočte rezortu na počet pracovníkov, čo skrýva jeho skutočné náklady obetovanej príležitosti oproti inej práci, ktorú by tím mohol robiť.
- **Neocenená väzba na dodávateľa v oboch smeroch**: náklady na ukončenie spolupráce s dodávateľom a prenos údajov sú skutočné, ale rovnako je skutočný aj bus factor zákazkového vývoja a jeho závislosť od udržania malého, ťažko nahraditeľného interného tímu počas celej životnosti.
- **Odlišnosť poslania tvrdená pre potrubie**: „toto je pre nás kľúčové“ sa tvrdí o integračnom middleware alebo úložisku dokumentov. Overte to tým, či by si občan alebo referent vôbec všimol, ktoré z nich beží pod povrchom.

## Zdroje

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
