# Hodnotiaca karta verejnej hodnoty

Hodnotiaca karta verejnej hodnoty (public value scorecard) prispôsobuje vyváženú hodnotiacu kartu
(balanced scorecard) Roberta Kaplana a Davida Nortona z roku 1992, vytvorenú pre firmy optimalizujúce
zisk naprieč finančnou perspektívou, perspektívou zákazníka, interných procesov a učenia sa a rastu,
organizáciám, ktorých výsledkom je poslanie, nie marža. Núti verejný orgán vykazovať výkonnosť
naprieč viacerými neredukovateľnými rozmermi naraz, namiesto zlúčenia všetkého do jedného čísla,
ktoré skrýva kompromisy.

## Prečo na tom záleží

Pôvodný argument Kaplana a Nortona v Harvard Business Review bol, že jediná finančná metrika je
oneskorený ukazovateľ, ktorý nič nehovorí o tom, *prečo* sa výkonnosť v nasledujúcom štvrťroku zmení.
V súkromnom sektore bola riešením štyri prepojené perspektívy. Vo verejnej správe zodpovedajúcu
štruktúru dodáva „strategický trojuholník“ Marka Moora (z *Creating Public Value*, 1995): služba musí
súčasne dodávať **verejnú hodnotu** (výsledok poslania), udržiavať **legitimitu a podporu** (politická
a verejná podpora) a byť **prevádzkovo uskutočniteľná** (dodateľná s reálne dostupnými zdrojmi a
schopnosťami). Kniha Paula Nivena *Balanced Scorecard: Step-by-Step for Government and Nonprofit
Agencies* (2003) je praktická príručka na prenesenie štyroch políčok Kaplana a Nortona do tohto
trojuholníka: typicky sa „finančná“ perspektíva premenuje na „správu zdrojov“ (stewardship), poslanie
sa umiestni navrch namiesto „hodnoty pre akcionárov“ na spodku a perspektívy zákazníka a
zainteresovaných strán sa považujú za rovnocenné, nie podriadené zisku. Dôvod, prečo to dodávací tím
zaujíma, je, že verejná digitálna služba posudzovaná len podľa finančnej alebo efektívnostnej
metriky (povedzme náklady na transakciu) bude systematicky podinvestovať do rozmerov legitimity a
výsledkov, ktoré finančná metrika nevidí.

## Matematika

Hodnotiaca karta verejnej hodnoty je rámec, nie vzorec, ale jej štruktúra je pevná a stojí za to ju
reprodukovať presne:

```
Perspektíva          Otázka verejného sektora                  Príklad ukazovateľa
--------------------------------------------------------------------------------
Poslanie / výsledky   Dosahujeme verejnú hodnotu, kvôli ktorej  Populačná miera výsledku
                       existujeme?                              (pozri outcomes-vs-outputs)
Správa zdrojov        Využívame verejné peniaze efektívne      Náklady na výsledok, odchýlka
                       a v rámci schválených limitov?            od rozpočtu
Zákazník / používateľ Môžu používatelia a občania službu       Miera dokončenia, spokojnosť
                       získať a mať z nej úžitok?
Legitimita / podpora  Podporujú nás politickí zadávatelia,     Ukazovatele dôvery, zistenia
                       dozorné orgány a verejnosť aj naďalej?    auditu, opodstatnené sťažnosti
Interný proces /      Máme schopnosť a proces na ďalšie        Fluktuácia zamestnancov, čas
  učenie               zlepšovanie?                              cyklu, vek nevybavených prípadov

Obhájiteľná karta vykazuje 3 – 5 ukazovateľov na perspektívu, zvolených tak, aby
sa žiadna jediná perspektíva nedala zneužiť bez toho, aby sa škoda prejavila v inej.
```

## Vypracovaný príklad

**Oddelenie sociálnej starostlivosti o dospelých miestnej samosprávy**: hodnotiaca karta pre službu
reablementu (krátkodobá podpora na znovuzískanie samostatnosti po pobyte v nemocnici) vykazuje:

```
Poslanie:         68 % používateľov služby už po 6 týždňoch nepotrebuje trvalú starostlivosť (cieľ 65 %)
Správa zdrojov:   náklady na dokončenú epizódu reablementu = £1 850 (rozpočtový predpoklad £2 000)
Zákazník:         spokojnosť používateľov 82 %, priemerné čakanie na začiatok služby 4,1 dňa
Legitimita:       3 opodstatnené sťažnosti na 1 000 epizód; rada pre ochranu dospelých hodnotí
                  službu ako „dobrú“
Proces:           miera neobsadených miest 14 %, priemerný počet prípadov na pracovníka 23
                  (bezpečná horná hranica: 25)
```

Pri samostatnom čítaní vyzerajú čísla poslania a správy zdrojov ako priamočary príbeh o úspechu: pod
rozpočtom a nad cieľom výsledku. Pri spoločnom čítaní s riadkom procesu miera neobsadených miest 14 %
oproti hornej hranici 25 prípadov ukazuje, že dobrý výsledok sa kupuje behom blízko nebezpečnej
úrovne obsadenia: varovanie, ktoré by samotné číslo poslania nikdy neodhalilo, a presne ten spôsob
zlyhania, ku ktorému pozýva KPI z jednej perspektívy (pozri [KPI verejného sektora](../kpi-verejného-sektora/)).

## Súvislosť so softvérovým inžinierstvom

Pre tím, ktorý tvorí interný alebo verejne prístupný dashboard, je hodnotiaca karta priamym argumentom
proti jedinému widgetu „skóre zdravia“: vytvorte jeden panel na perspektívu a odolajte tlaku produktu
zlúčiť ich do semafora, lebo práve krok syntézy ničí informáciu o kompromisoch. Dobre sa premieta aj
do štruktúr OKR produktových tímov: OKR poslania bez spárovaného OKR správy zdrojov alebo procesu
reprodukuje spôsob zlyhania jedinej metriky, proti ktorému Kaplan a Norton v roku 1992 písali.
Moorovu základnú teóriu toho, čo má políčko „poslanie“ skutočne obsahovať, pozri v téme
[verejná hodnota](../verejná-hodnota/) a o tom, ako naplniť perspektívu legitimity skutočnými
ukazovateľmi s uvedeným zdrojom namiesto zástupnej veličiny, ktorú nik neobháji, v téme
[ukazovatele dôvery a legitimity](../metriky-dôvery-a-legitimity/).

## Úskalia

- **Zlúčenie hodnotiacej karty do jedného skóre**: spriemerovanie štyroch perspektív do jedného
  čísla znovu zavádza presne ten problém (zlé skóre legitimity zakryté dobrým skóre správy zdrojov),
  ktorému má karta zabrániť.
- **Nezmenené prevzatie „finančnej“ perspektívy zo súkromného sektora**: perspektíva správy zdrojov
  verejného orgánu je o dodržaní schválených, často vyčlenených rozpočtov, nie o maximalizácii
  tržieb; Nivenovo premenovanie nie je kozmetické.
- **Voľba ukazovateľov, ktoré tím vlastniaci hodnotiacu kartu môže jednostranne pohnúť**: ukazovateľ
  legitimity pochádzajúci z toho istého tímu, ktorý posudzuje (napríklad sebahlásené vybavovanie
  sťažností), nie je nezávislý dôkaz.
- **Vytvorenie karty raz a nikdy sa nevrátiť k váham alebo ukazovateľom**: Kaplan a Norton mali na
  mysli každoročné preskúmanie stratégie; karta zmrazená na roky sa vzďaľuje od poslania, ktoré mala
  sledovať.

## Zdroje

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
