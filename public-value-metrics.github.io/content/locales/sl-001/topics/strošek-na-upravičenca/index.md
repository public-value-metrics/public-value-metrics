# Strošek na upravičenca

Strošek na upravičenca je skupni strošek programa, deljen s številom edinstvenih ljudi, ki so prejeli storitev, torej vsakogar, ki je bil dosežen, ne glede na to, ali so se njegove okoliščine dejansko spremenile. To je najhitrejša številka učinkovitosti, ki jo organizacija lahko pridobi, saj je »komu smo postregli« skoraj vedno že v sistemu za vodenje primerov, »komu je bilo pomagano« pa običajno ni.

## Zakaj je pomembno

Financerji strošek na upravičenca zahtevajo nenehno, in to iz utemeljenih razlogov: na voljo je takoj, primerljiv je v portfelju zelo različnih programov in je pošten glede dosega na način, kot trditve o izidih, ki jih je dlje preverjati in jih je lažje preceniti, niso. Britanski Charities SORP (Statement of Recommended Practice), ki ureja poročanje dobrodelnih organizacij po FRS 102, od skrbnikov zahteva, da v letnih poročilih opišejo dosežke glede na cilje, vendar upravljavski računi večine manjših dobrodelnih organizacij še vedno privzeto uporabljajo stroške na enoto na podlagi dosega, ker jih je poceni izdelati in so prijazni do revizije.

Nevarnost je, da se strošek na upravičenca obravnava, kot da odgovarja na vprašanje, na katero ne more odgovoriti: ali je denar deloval. Glej [strošek na izid](../strošek-na-izid/) za metriko, ki na to dejansko odgovori, in [izidi in izložki](../izidi-in-izložki/) za osnovno razliko. Strošek na upravičenca je upravičena metrika razvrščanja in dosega, ki financerju pove, kako daleč seže denar, a nizek strošek na upravičenca lahko pomeni bodisi resnično učinkovitost bodisi tako tanko storitev, da ničesar ne spremeni.

## Matematika

```
Strošek na upravičenca = skupni strošek programa / število edinstvenih oseb, ki jim je bilo postreženo

Primerjava:
Strošek na izid        = skupni strošek programa / število oseb, ki dosežejo opredeljeni izid

Strošek na upravičenca je vedno ≤ strošek na izid, ker je populacija izida podmnožica
(pogosto majhna) populacije upravičencev.
```

## Praktični primer

**Banka hrane, isto leto kot v primeru stroška na izid**:

- Skupni strošek programa: 450.000 £
- Edinstvena gospodinjstva, ki jim je bilo postreženo (tri ali več paketov): 1.800

```
Strošek na upravičenca = 450.000 £ / 1.800 = 250 £ na gospodinjstvo, ki mu je bilo postreženo
```

Primerjava obeh metrik drugo ob drugi:

| Metrika | Imenovalec | Rezultat |
|---|---|---|
| Strošek na upravičenca | 1.800 gospodinjstev, ki jim je bilo postreženo | 250 £ |
| Strošek na izid | 630 gospodinjstev, ki dosežejo prehransko varnost | 714 £ |

Financer, ki vidi samo 250 £, bi lahko sklenil, da je to zelo učinkovita dobrodelna organizacija. Financer, ki vidi obe številki, lahko postavi bolj koristno vprašanje: ali je vrzel med dosegom (1.800) in izidom (630) vrzel v zbiranju podatkov, vrzel v zasnovi ali pošten odraz tega, kako težko je prehransko varnost doseči samo s prehransko pomočjo?

**Dobrodelna organizacija za usposabljanje za zaposlitev, ilustrativno**: strošek na upravičenca (vpisanega) = 2.000 £; strošek na izid (trajna zaposlitev po 6 mesecih) = 11.000 £, ker program dokonča in trajno zaposlitev najde le 18 % vpisanih. Petkratno razhajanje obeh številk je običajno povsod, kjer sta stopnji dokončanja ali trajnosti nizki; organizacija za usposabljanje in banka hrane sta tu strukturno enaki.

## Povezava s programskim inženirstvom

Strošek na upravičenca je privzeta metrika v programski opremi za neprofitni sektor, ker je metrika, ki izpade iz zapisa upravičenca brez dodatnega dela: ustvari primer, zabeleži storitev, preštej vrstice. Gradnja sistema, ki podpira tudi strošek na izid, pomeni namerno dodajanje druge enakovredne entitete, dogodka izida, datiranega in opredeljenega neodvisno od izvedbe storitve, ter upiranje skušnjavi, da bi »primer zaprt« nadomestil »izid dosežen«. Pri opredeljevanju obsega platforme za upravljanje nepovratnih sredstev ali CRM vprašajte, katero od obeh metrik vsaka nadzorna plošča dejansko prikazuje, in jo ustrezno označite; mešanje obeh v eni ploščici »vpliv« je eden najpogostejših programskih vzrokov spodnjih pasti. Glej [zbirke stroškov na enoto](../zbirke-enotnih-stroškov/) za primerjalno vrednotenje obeh metrik, ko sta pravilno označeni.

## Pasti

- **Predstavljanje stroška na upravičenca kot vpliva.** Meri doseg, ne spremembe. Nadzorne plošče in poročila označite »strošek na osebo, ki ji je bilo postreženo«, ne »strošek na osebo, ki ji je bilo pomagano«.
- **Dvojno štetje med programi.** Oseba, ki prejme tako prehranske pakete kot svetovanje o dolgovih pri isti dobrodelni organizaciji, je en upravičenec, ne dva, če naj imenovalec opisuje edinstven doseg; odločite se in dokumentirajte, katera konvencija se uporablja.
- **Obravnavanje nižje številke kot vedno boljše.** Odprt dnevni klub z obroki bo pri strošku na upravičenca vedno premagal intenzivno storitev vodenja primerov, ker je stik z nekom lahek dotik cenejši. To ne pove nič o tem, kaj ustvari trajnejšo spremembo na funt.
- **Tiha zamenjava imenovalcev med poročili.** Strošek na upravičenca, naveden v enem letnem poročilu glede na »vpisane« in v naslednjem glede na »dokončane«, ni primerljiv iz leta v leto; imenovalec navedite vsakič.

## Viri

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
