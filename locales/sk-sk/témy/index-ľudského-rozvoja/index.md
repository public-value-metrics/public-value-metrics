# Index ľudského rozvoja (HDI)

HDI je hlavnou alternatívou OSN k radeniu krajín len podľa príjmu: spája strednú dĺžku života, vzdelanie a príjem do jedného čísla medzi 0 a 1 na základe predpokladu, ktorý presadzoval ekonóm Amartya Sen a pre OSN ho rozpracoval Mahbub ul Haq, že rozvoj znamená rozširovanie toho, čo ľudia môžu robiť a byť, nielen koľko zarábajú. Každoročne ho od roku 1990 uverejňuje Rozvojový program OSN (UNDP) v Správe o ľudskom rozvoji (Human Development Report).

## Prečo na tom záleží

Pred HDI sa „rozvoj“ meral takmer výlučne HNP na obyvateľa, čo nič nehovorí o tom, či rast dosiahne na zdravie alebo vzdelanie bežných ľudí. Senov prístup založený na schopnostiach (capability approach) prerámcoval rozvoj ako rozširovanie skutočných slobôd a ul Haq z toho urobil publikovateľný index, podľa ktorého mohol UNDP zoradiť každú krajinu, čím prinútil vlády, ktoré zbohatli len na príjme, ale zanedbali zdravie či školstvo, čeliť horšiemu poradiu, než naznačovalo ich HDP (štandardnými príkladmi sú štáty Perzského zálivu s ropou a niektoré ťažobné ekonomiky). Trojzložková štruktúra HDI je tiež priamym metodickým predkom [Multidimenzionálneho indexu chudoby](../index-mnohorozmernej-chudoby/): obaja odmietajú dovoliť, aby jedna dimenzia vykúpila nedostatok v inej, a používajú geometrický namiesto aritmetického priemeru. UNDP zverejňuje plné technické poznámky a podkladové údaje ku každému vydaniu (<https://hdr.undp.org/data-center/human-development-index>), čo je kanonický zdroj pre každého, kto na indexe stavia, namiesto jeho opätovného odvodzovania.

## Matematika

```
Index strednej dĺžky života (LEI)   = (LE − 20) / (85 − 20)

Index priemernej dĺžky školskej dochádzky    = priemerné roky školskej dochádzky / 15
Index očakávanej dĺžky školskej dochádzky    = očakávané roky školskej dochádzky / 18
Index vzdelania (EI)                         = (Index priemerných rokov + Index očakávaných rokov) / 2

Index príjmu (II)                   = (ln(HND na obyvateľa) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometrický priemer troch podindexov]
```

Geometrický priemer je zámerný: pretože násobí namiesto priemerovania, veľmi vysoké skóre v jednej dimenzii nemôže plne vykompenzovať veľmi nízke skóre v inej; UNDP ho zaviedol v roku 2010 práve na penalizáciu nerovnováhy a nahradil ním predchádzajúci vzorec s aritmetickým priemerom.

## Vypracovaný príklad

**Krajina so stredným príjmom**: stredná dĺžka života 72 rokov, priemerné roky školskej dochádzky 8, očakávané roky školskej dochádzky 13, HND na obyvateľa $12 000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI 0,713 spadá do pásma „vysoký ľudský rozvoj“ podľa UNDP (0,700 – 0,799); „veľmi vysoký“ začína pri 0,800. Všimnite si, aká citlivá je hodnota na najslabší podindex: ak by priemerné roky školskej dochádzky boli 4 namiesto 8 (MYSI = 0,267, EI = 0,494), HDI klesne na (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639, teda o celé pásmo, hoci sa nezmenilo nič iné.

## Súvislosť so softvérovým inžinierstvom

- Vzor geometrického priemeru sa dá priamo opätovne použiť pri každom kompozitnom skóre služby alebo produktu, pri ktorom nechcete, aby jedna silná dimenzia zakryla kritickú slabú, napr. pri kombinovaní skóre prístupnosti, výkonu a spoľahlivosti verejnej digitálnej služby násobením namiesto váženého priemeru, takže rýchla, ale neprístupná služba nemôže dostať skóre „dobrá“.
- Logaritmická transformácia príjmu v HDI (klesajúca hraničná hodnota ďalšej libry) je tá istá logika, ktorá stojí za [distribučným vážením](../distribučné-váženie/) pri hodnotení: ďalších $1 000 znamená pre chudobnú domácnosť oveľa viac než pre bohatú a lineárne zaobchádzanie s oboma nesprávne oceňuje dopad.
- Každý dashboard, ktorý vykazuje jediné zmiešané skóre „digitálnej inklúzie“ alebo „výsledkov pre občanov“, má svoj agregačný vzorec dokumentovať tak explicitne ako technické poznámky UNDP; pozri [KPI verejného sektora](../kpi-verejného-sektora/) a [scorecard verejnej hodnoty](../hodnotiaca-karta-verejnej-hodnoty/).

## Úskalia

- **Priemerovanie namiesto geometrického priemeru**: aritmetický priemer nechá vysoký príjem úplne zakryť slabé zdravie alebo vzdelanie; celý zmysel metodickej zmeny z roku 2010 bol zastaviť túto zameniteľnosť.
- **Porovnávanie HDI rok po roku, akoby šlo o HDP očistené o infláciu**: UNDP index pravidelne rebasuje (nové minimálne/maximálne hranice, revidované stropy školskej dochádzky), takže zmena poradia môže odrážať aktualizáciu metodiky, nie skutočný posun; vždy skontrolujte, z ktorého vydania HDR údaj pochádza.
- **Považovanie HDI za mieru chudoby**: je to národný priemer a nič nehovorí o rozdelení v rámci krajiny; na to použite [Multidimenzionálny index chudoby](../index-mnohorozmernej-chudoby/) alebo samostatný HDI očistený o nerovnosť (Inequality-adjusted HDI) od UNDP.

## Zdroje

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
