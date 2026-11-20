# Metriky sociálneho kapitálu

Metriky sociálneho kapitálu kvantifikujú siete, dôveru a občiansku participáciu, vďaka ktorým komunity a inštitúcie fungujú efektívne – „spojivové tkanivo“, ktoré nemá riadok v nijakej súvahe, no viditeľne znižuje náklady a trenie, keď je prítomné, a viditeľne ich zvyšuje, keď chýba. Moderné chápanie pochádza z knihy Roberta Putnama „Bowling Alone“ (2000), ktorý rozlíšil spájací kapitál (väzby v rámci podobnej skupiny) a premosťujúci kapitál (väzby naprieč rôznymi skupinami). Britský štatistický úrad (Office for National Statistics, ONS) odvtedy vytvoril stály súbor ukazovateľov na jeho sledovanie na národnej úrovni.

## Prečo na tom záleží

Putnamovo ústredné empirické tvrdenie – doložené klesajúcim členstvom v amerických občianskych združeniach, klesajúcou účasťou na bohoslužbách a v odboroch v druhej polovici dvadsiateho storočia – znelo, že sociálny kapitál predpovedá výsledky, ktoré konvenčná ekonómia len ťažko vysvetľuje: nižšiu kriminalitu, lepšiu starostlivosť o deti, efektívnejšiu miestnu správu a rýchlejšie hospodárske zotavenie po otrasoch. Spájací kapitál (silné väzby v rámci úzkej skupiny) je dobrý na vzájomnú podporu, ale môže stuhnúť do uzavretosti; premosťujúci kapitál (slabšie väzby naprieč rôznymi skupinami) zvyčajne súvisí s prístupom k príležitostiam, tokom informácií a dôverou v inštitúcie. ONS to vzalo natoľko vážne, že vytvorilo národný rámec ukazovateľov – rad „Social Capital in the UK“
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
sleduje štyri piliere: osobné vzťahy, podporu sociálnych sietí, občianske zapojenie a dôveru a kooperatívne normy, každý postavený na overených prieskumných otázkach (Community Life Survey, Understanding Society). Pre digitálne služby verejného sektora je sociálny kapitál dôležitý dvojnásobne: je výsledkom, ktorý sa niektoré programy snažia budovať (financovanie odolnosti komunít, sociálne predpisovanie), a zároveň vstupom, ktorý určuje, ako dobre sa služba skutočne ujme – služba zavedená v komunite s vysokou dôverou a dobrými sieťami sa bude šíriť ústnym podaním tak, ako identická služba v oblasti s nízkou dôverou nie.

## Matematika

```
Štvorpilierový rámec ONS (ukazovatele, ilustratívne):

Osobné vzťahy:                 % ľudí, ktorí majú na koho sa spoľahnúť v kríze
Podpora sociálnych sietí:      % ľudí, ktorí by si v prípade potreby mohli požičať peniaze od priateľov/rodiny
Občianske zapojenie:           % ľudí, ktorí za posledných 12 mesiacov robili dobrovoľnícku alebo občiansku činnosť
Dôvera a kooperatívne normy:   % ľudí súhlasiacich s tvrdením „väčšine ľudí sa dá dôverovať“

ONS nezverejňuje jediné súhrnné skóre – piliere sa uvádzajú oddelene,
zámerne, pretože ich spojenie do jedného indexu by zakrylo, ktorý
konkrétny pilier je slabý.

Putnamovo rozlíšenie spájacieho a premosťujúceho kapitálu (rámec, nie vzorec):
  spájací kapitál ≈ hustota väzieb v rámci homogénnej skupiny
  premosťujúci kapitál ≈ frekvencia/sila väzieb naprieč odlišnými skupinami
```

## Vypracovaný príklad

**Momentka sociálneho kapitálu v susedstve**: prieskum v štýle Community Life Survey v jednej miestnej oblasti zistí, že 78 % ľudí má na koho sa spoľahnúť v kríze (osobné vzťahy), 61 % by si mohlo v prípade potreby požičať peniaze (podpora sietí), 24 % vykonávalo za uplynulý rok dobrovoľnícku činnosť (občianske zapojenie) a 41 % súhlasí, že „väčšine ľudí sa dá dôverovať“ (dôvera a normy) – oproti celoštátnym priemerom približne 85 %, 70 %, 30 % a 45 % (ilustratívne; kalibrujte podľa aktuálneho bulletinu ONS). Oblasť zaostáva vo všetkých pilieroch, najvýraznejšie však v dôvere (41 % oproti 45 % celoštátne, rozdiel 4 body) a občianskom zapojení (24 % oproti 30 %, rozdiel 6 bodov) – čo poukazuje na občianske zapojenie, nie na dôveru, ako na najväčší relatívny deficit, ktorý stojí za cielenú investíciu (napríklad program komunitných grantov), a nie za všeobecnú iniciatívu „budovať dôveru“.

**Spájací vs. premosťujúci kapitál, návrh služby**: program zamestnanosti v úzko prepojenej komunite zistí, že odporúčania sa v komunite šíria rýchlo (vysoký spájací kapitál: správa sa rozšíri za pár dní), ale program sa len ťažko dostáva k obyvateľom mimo tejto siete (nízky premosťujúci kapitál: využívanie mimo jadra komunity je po mesiacoch takmer nulové). Z toho vyplýva, že riešením nie je „viac marketingu“, ale zámerné budovanie premosťujúcich väzieb – partnerstvo s organizáciami, ktoré stoja *mimo* existujúcej siete, pretože samotný spájací kapitál nevyrieši problém premosťujúceho kapitálu.

## Súvislosť so softvérovým inžinierstvom

- Digitálne platformy, ktoré sprostredkúvajú vzájomnú pomoc, dobrovoľníctvo alebo komunitné granty (napríklad služba „miestny konektor“), doslova budujú infraštruktúru premosťujúceho kapitálu; ich metrikou úspechu by mala byť rôznorodosť nadviazaných spojení v sieti, nielen počet transakcií – pozri [vládu ako platformu](../vláda-ako-platforma/) pre širší vzor infraštruktúry, na ktorej iní budujú hodnotu.
- Tam, kde teória zmeny programu výslovne cieli na sociálny kapitál ako výsledok (fond odolnosti komunít, služba sociálneho predpisovania), jeho [teória zmeny](../teória-zmeny/) a [logický model](../logický-model/) by mali pomenovať konkrétny pilier (dôvera, občianske zapojenie, podpora sietí), ktorý chcú posunúť, namiesto nediferencovaného výsledku „budovať komunitu“, ktorý sa nedá merať voči východiskovému stavu ONS.
- Ukazovatele sociálneho kapitálu sú užitočnou optikou spravodlivosti popri [Indexe viacnásobnej deprivácie](../index-viacnásobnej-deprivácie/): oblasť môže byť príjmovo deprivovaná, ale sociálne bohatá, alebo naopak, a tieto dva obrazy ukazujú na veľmi odlišné intervencie.

## Úskalia

- **Zlúčenie štyroch pilierov ONS do jedného súhrnného skóre** – ONS to zámerne nerobí; jediné číslo zakrýva, ktorý konkrétny pilier ťahá hodnotu nadol, a priemerovanie zakrýva rozdiel medzi komunitou s vysokou dôverou, ale nízkym občianskym zapojením, a komunitou, kde je to naopak.
- **Predpoklad, že sociálny kapitál je vždy dobrý** – hustý spájací kapitál v uzavretej skupine sa môže aktívne brániť vonkajším inštitúciám (vrátane vládnych služieb); Putnamova vlastná analýza zaobchádza so spájacím a premosťujúcim kapitálom ako s odlišnými statkami s rozdielnymi, niekedy protichodnými účinkami.
- **Používanie prieskumových mier sociálneho kapitálu ako prevádzkovej metriky v reálnom čase** – podkladové prieskumy (Community Life Survey, Understanding Society) sa robia ročne alebo zriedkavejšie; údaje o sociálnom kapitáli treba chápať ako pomaly sa meniaci kontextový ukazovateľ, nie ako niečo, čo môže dashboard služby aktualizovať týždenne.

## Zdroje

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (ročne).
