# Zákon o sociálnej hodnote (Social Value Act)

Zákon Public Services (Social Value) Act 2012 je britská zákonná povinnosť, podľa ktorej musia verejné orgány v Anglicku a vo Walese pred začatím obstarávania zmlúv o verejných službách zvážiť, ako by obstarávané plnenie mohlo zlepšiť ekonomickú, sociálnu a environmentálnu pohodu relevantnej oblasti, a zvážiť konzultáciu o tejto otázke. Do platnosti vstúpil v januári 2013 ako pomerne mäkká povinnosť „prihliadať na“ a podstatne ho posilnila Procurement Policy Note (PPN) 06/20 z januára 2021, ktorá vyžaduje, aby zmluvy ústrednej vlády sociálnu hodnotu výslovne hodnotili – nielen zvažovali – s minimálnou váhou v kritériách zadania zákazky.

## Prečo na tom záleží

Pred PPN 06/20 stačilo na „zváženie“ sociálnej hodnoty, aby objednávateľ poznamenal, že sa nad ňou zamyslel, bez povinnosti, aby ovplyvnila rozhodnutie o zadaní – povinnosť, ktorú sa dalo na papieri ľahko splniť a v praxi ignorovať. PPN 06/20 túto medzeru pre obstarávanie ústrednej vlády uzavrela: nariaďuje, aby sa sociálna hodnota bodovala ako súčasť hodnotenia ponúk, a to podľa piatich národných prioritných tém – obnova po COVID-19, boj proti ekonomickej nerovnosti, boj proti zmene klímy, rovnaké príležitosti a pohoda (wellbeing) – a bežne sa meria pomocou rámca National TOMs (Themes, Outcomes, Measures), ktorý spravuje Social Value Portal. Pre softvérového inžiniera, ktorý buduje nástroje na obstarávanie, správu zmlúv alebo podporu ponúk pre verejný sektor, je to právny základ, na ktorom musí jeho klient stavať, nie nepovinná prídavná vlastnosť.

## Matematika

Sociálna hodnota je téma formovaná rámcom; jej „matematikou“ je štruktúra bodovania, ktorú používa väčšina orgánov:

```
Celkové skóre ponuky = váha ceny/nákladov + váha kvality + váha sociálnej hodnoty

PPN 06/20 (ústredná vláda): váha sociálnej hodnoty ≥ 10 % celkového skóre

Témy sociálnej hodnoty (PPN 06/20):
 1. Obnova po COVID-19
 2. Boj proti ekonomickej nerovnosti
 3. Boj proti zmene klímy
 4. Rovnaké príležitosti
 5. Pohoda (wellbeing)
```

Uchádzači zvyčajne oceňujú svoje záväzky voči týmto témam pomocou [databáz jednotkových nákladov](../databázy-jednotkových-nákladov/) a platí tu rovnaká logika oceňovania ako pri [sociálnej návratnosti investície](../sociálna-návratnosť-investície/): záväzok by mal byť doložený, pripísateľný zmluve a nemal by sa dvojmo započítať s iným financovaním.

## Vypracovaný príklad

**IT zmluva miestnej samosprávy**: zmluva za £2 milióny na 3 roky sa bodovo hodnotí 60 % kvalita, 30 % cena, 10 % sociálna hodnota. Uchádzač A sa zaväzuje poskytnúť 2 učňovské miesta, £150 000 výdavkov na miestnych subdodávateľov a 200 hodín bezplatného (pro bono) školenia digitálnych zručností pre miestnu školu, čo sa pomocou proxy hodnôt z databázy jednotkových nákladov ocení na spolu £90 000 dodatočnej sociálnej hodnoty. Uchádzač B sa zaväzuje k menšiemu balíku ocenenému na £40 000. Ak orgán hodnotí sociálnu hodnotu proporcionálne voči najsilnejšej ponuke, uchádzač A dostane plných 10 bodov; uchádzač B dostane 10 × (£40 000 ÷ £90 000) = 4,4 bodu – rozdiel 5,6 bodu, ktorý môže o zákazke rozhodnúť aj vtedy, keď sú kvalita a cena blízko seba.

**Uchádzač z dobrovoľníckeho sektora**: malý subjekt VCSE (dobrovoľnícka, komunitná a sociálna organizácia) uchádzajúci sa o zákazku na údržbu zelene proti komerčnému konkurentovi nemôže konkurovať samotnou jednotkovou cenou, ale pomocou proxy hodnôt z Global Value Exchange oceňuje svoje existujúce záväzky v komunitnom zamestnávaní a dobrovoľníctve, čím vytvára doložený prípad sociálnej hodnoty, ktorý má zmysel bodovať popri cene a kvalite.

## Súvislosť so softvérovým inžinierstvom

Vyhratie ponuky s oceniteľnými záväzkami sociálnej hodnoty vytvára povinnosť doložiť ich plnenie prostredníctvom správy zmluvy – nástrojmi, ktoré zaznamenávajú nástupy učňov, miestne výdavky a hodiny školení voči konkrétnym záväzkom bodovaným pri ponuke a ktoré vstupujú do zmluvných revíznych stretnutí, namiesto toho, aby sa po podpise zmluvy zabudlo. Záznamy v G-Cloud a Digital Marketplace čoraz častejšie vyžadujú vyhlásenia o sociálnej hodnote už pri zápise. Pozri [sociálnu návratnosť investície](../sociálna-návratnosť-investície/) pre metódu oceňovania záväzkov, [databázy jednotkových nákladov](../databázy-jednotkových-nákladov/) pre proxy hodnoty, z ktorých uchádzači čerpajú, a [výsledky vs. výstupy](../výsledky-a-výstupy/) pre zabezpečenie, aby splnené záväzky boli výsledky, nielen počty aktivít.

## Úskalia

- **Sociálne „pranie“ ponúk (social-washing).** Vágne záväzky („podporujeme miestnu komunitu“), ktoré sa nedajú merať ani vymáhať počas správy zmluvy, dostávajú dobré skóre, ale nedodávajú nič overiteľné.
- **Chápanie sociálnej hodnoty ako rozhodujúceho kritéria pri rovnosti.** PPN 06/20 vyžaduje, aby sa sociálna hodnota výslovne hodnotila v rámci kritérií zadania, nie aby sa neformálne využívala na rozhodnutie medzi inak rovnocennými ponukami.
- **Žiadne sledovanie v rámci správy zmluvy.** Záväzky bodované pri ponuke sa počas plnenia často nikdy nesledujú – pozri [realizáciu prínosov](../realizácia-prínosov/).
- **Nekonzistentné rámce merania naprieč zmluvami.** Použitie rôznych zdrojov proxy hodnôt pre podobné záväzky na rôznych zmluvách robí porovnanie na úrovni portfólia nezmyselným, a preto existujú spoločné rámce ako National TOMs a zdieľané databázy jednotkových nákladov.

## Zdroje

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
