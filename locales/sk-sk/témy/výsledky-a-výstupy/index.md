# Výsledky a výstupy

Výstup je priamy, spočítateľný produkt aktivity: existuje v okamihu, keď sa dodávka uskutoční, bez
ohľadu na to, aký má účinok. Výsledok je zmena, ktorá nasleduje pre dotknutých ľudí, miesto alebo
systém. „500 ľudí sa zúčastnilo workshopu o hľadaní práce“ je výstup: platí aj vtedy, ak si nikto z
nich prácu nenájde. „Zlepšili sa vyhliadky na zamestnanie 500 ľudí“ je tvrdenie o výsledku a vyžaduje
dôkaz zmeny, nie len dôkaz účasti. Táto zámena vytvára viac zavádzajúcich správ o grantoch než takmer
akákoľvek iná chyba merania v sektore.

## Prečo na tom záleží

Magenta Book britského ministerstva financií (HM Treasury) aj poskytovatelia financií, ako je
National Lottery Community Fund, vyžadujú vykazovanie výsledkov práve preto, že výstupy sú to, čo
programy vykazujú predvolene: ľahko sa počítajú, sú vždy dostupné a vždy vyzerajú pozitívne. Počet
výstupov nemôže doslova nikdy klesnúť v dôsledku zlyhania programu: viac dodaných stretnutí je vždy
„viac“, zatiaľ čo výsledok môže odhaliť, že program nefunguje. National Audit Office opakovane
kritizoval vládne programy za vykazovanie úrovne aktivity, akoby bola dôkazom úspechu; softvérový
systém, ktorý uľahčuje len vykazovanie výstupov, to predvolene posilňuje, pretože výstupy nevyžadujú
žiadne následné zber údajov a výsledky áno.

## Matematika

Vzorec neexistuje, ale existuje spoľahlivý test na klasifikáciu metriky:

```
Test výstupu:  dá sa spočítať v mieste dodania a platí aj vtedy, ak príjemcu nijako neovplyvnilo?
Test výsledku: vyžaduje na zmysluplnosť porovnanie pred/po alebo s/bez?

Ak číslo môže platiť s nulovým prínosom pre kohokoľvek, je to výstup.
```

Toto zapadá do širšieho reťazca [logického modelu](../logický-model/) a závisí od väzieb výsledkov
definovaných v [teórii zmeny](../teória-zmeny/); premena výsledku na peniaze využíva metódy zo
[sociálnej návratnosti investícií](../sociálna-návratnosť-investície/).

## Vypracovaný príklad

**Miestna samospráva (podpora zamestnanosti)**: výstup: 500 ľudí sa zúčastnilo workshopov o hľadaní
práce. Výsledok: pri následnom sledovaní po 12 mesiacoch je 140 z týchto 500 (28 %) v trvalom
zamestnaní (6+ mesiacov). Porovnávacia skupina s podobnými charakteristikami, ale bez prístupu k
programu, má v rovnakom období základnú mieru zamestnanosti 15 %. Čistý nárast výsledku:
28 % − 15 % = 13 percentuálnych bodov, takže odhadom 500 × 0,13 = 65 ďalších ľudí je v práci, ktorí
by inak neboli, čo je pripísateľný výsledok, odlišný od 500 účastníkov aj od hrubého počtu 140
zamestnaných.

**Charita (charita zameraná na čitateľskú gramotnosť)**: výstup: 1 200 čitateľských stretnutí
dodaných 300 deťom. Výsledok: priemerný čitateľský vek sa zlepšil o 8 mesiacov za 6-mesačné obdobie,
oproti očakávanému základnému prirodzenému pokroku 6 mesiacov za 6 mesiacov. Čistý prírastok
výsledku: 8 − 6 = 2 mesiace ďalšieho zlepšenia čitateľského veku na dieťa pripísateľné programu, nie
celých 8 mesiacov.

## Súvislosť so softvérovým inžinierstvom

Záznamy udalostí a transakčné systémy inštrumentujú výstupy takmer automaticky (zobrazenia stránok,
relácie, uzavreté tikety, rezervované stretnutia), pretože ich generuje systém pri plnení svojej
úlohy. Výsledky vyžadujú dátový model, ktorý zachytí toho istého jednotlivca neskôr voči základnej
alebo porovnávacej hodnote, a ten sa musí navrhnúť zámerne: následné prieskumy, prepojené
administratívne záznamy alebo porovnávacia kohorta. Nástroj na vykazovanie, ktorý podporuje len prvé,
potichu nasmeruje organizáciu k vykazovaniu len výstupov bez ohľadu na to, čo poskytovateľ financií
žiadal. Pozri [logický model](../logický-model/), kde sú výsledky v reťazci zodpovednosti,
[náklady na výsledok](../náklady-na-výsledok/) na premenu tohto rozlíšenia na metriku jednotkových
nákladov a [KPI verejného sektora](../kpi-verejného-sektora/) pre širší vzor výberu metrík.

## Úskalia

- **Vykazovanie výstupov, akoby to boli výsledky.** „Zúčastnilo sa 500 ľudí“ naznačuje prínos bez
  toho, aby ho preukázalo; účasť výslovne označte ako výstup.
- **Žiadna základná hodnota ani porovnávacia skupina.** Údaj o výsledku bez kontrafaktuálu, pozri
  [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/), nedokáže oddeliť účinok programu od toho,
  čo by nastalo aj tak.
- **Optimalizácia pre financovanú metriku.** Keď je financovanie viazané na objem výstupov, dodávacie
  tímy racionálne maximalizujú účasť na úkor trvalej zmeny, čo je spôsob zlyhania podľa Goodhartovho
  zákona.
- **Pranie výsledkov (outcome washing).** Premenovanie metriky výstupu jazykom znejúcim ako výsledok
  („výsledky zapojenia: 500 účastníkov“) bez akéhokoľvek následného merania.

## Zdroje

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
