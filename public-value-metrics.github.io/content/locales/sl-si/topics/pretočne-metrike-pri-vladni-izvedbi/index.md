# Pretočne metrike pri vladni izvedbi

Pretočne metrike – Littlov zakon, omejitve dela v teku (WIP) in pretočna učinkovitost – opisujejo, kako hitro se delo premika skozi sistem z omejeno zmogljivostjo. Tabla sprinta je en tak sistem; čakalna vrsta zahtevkov za dajatve, register vlog za gradbena dovoljenja ali zaostanek pri obravnavi vizumov je povsem ista matematika v drugačni uniformi.

## Zakaj je pomembno

Obseg zadev v vladi so čakalni sistemi, čakalni sistemi pa ubogajo zakone čakalnih vrst, ne glede na to, ali jih kdo meri. Zakonski roki za odločanje to naredijo izrecno: po ureditvi Town and Country Planning večina manjših vlog za prostorsko načrtovanje nosi 8-tedenski zakonski ciljni rok za odločitev, večje vloge pa 13 tednov – zaveza glede časa cikla, zapisana neposredno v zakon. Zaostanek pri obravnavi azilnih zadev na Home Office, ki ga je večkrat preučil National Audit Office in odbor Home Affairs Select Committee, je dobro dokumentiran primer javnega sistema, kjer je delo v teku dlje časa raslo hitreje od prepustnosti in časov ciklov daleč preseglo vsa zakonska ali storitvena pričakovanja. Pretočne metrike dajejo inženirjem in vodjem obravnave zadev skupen, količinski besednjak za ravno ta način odpovedi, namesto da bi ostal kvalitativen »problem zaostanka«.

## Matematika

```
Littlov zakon:  WIP = Prepustnost × Čas cikla
            →   Čas cikla = WIP / Prepustnost

Pretočna učinkovitost = aktivni (dotični) čas / skupni čas cikla   (Vacanti)

Učinek omejitve WIP: pri nespremenjeni prepustnosti razpolovitev WIP približno
razpolovi povprečni čas cikla (preoblikovan Littlov zakon) – vzvod, ki je na voljo
brez dodatnega zaposlovanja.
```

Glej [metrike DORA za javno vrednost](../metrike-dora-za-javno-vrednost/) za enako matematiko, uporabljeno na cevovodih uvajanja programske opreme namesto obravnave zadev.

## Praktični primer

**Oddelek za prostorsko načrtovanje lokalne oblasti**: 400 vlog je odprtih v vsakem trenutku (WIP), ekipa reši 50 vlog na teden (prepustnost).

```
Čas cikla = WIP / Prepustnost = 400 / 50 = 8 tednov
```

To pristane natančno na zakonskem 8-tedenskem cilju za manjše vloge – brez rezerve, kar pomeni, da vsaka variabilnost prihodnjega povpraševanja ali odzivnega časa posvetovalnih organov odločitve potisne čez zakonski rok.

**Pretočna učinkovitost**: od teh 8 tednov (56 koledarskih dni) vloga običajno prejme okoli 6 ur dejanske obdelave referenta.

```
Pretočna učinkovitost = 6 ur / (56 dni × 8 delovnih ur/dan)
                      = 6 / 448 ≈ 1,3 %
```

Vacantijev kriterij za programske ekipe postavlja tipično pretočno učinkovitost na 15–20 %; vladna obravnava zadev z več zakonskimi predajami posvetovalnim organom in okni javnega posvetovanja pogosto deluje za velikostni red nižje. 98,7 % časa »čakanja« je tam, kamor dejansko gredo osmi tedni – ne v zmogljivosti referentov.

**Poseg z omejitvijo WIP**: omejitev odprtih vlog na referenta na 15 namesto neomejenih 25 (pri nespremenjeni prepustnosti) premakne WIP s 400 na približno 240 v 16-članski ekipi:

```
Nov čas cikla = 240 / 50 = 4,8 tedna
```

Skoraj razpolovitev časa cikla zaradi spremembe pravil, ne povečanja kadra – isti vzvod, ki ga vlečejo izvedbene ekipe v slogu DORA, ko omejijo WIP sprinta.

## Povezava s programskim inženirstvom

Pretočne metrike so skupni jezik med tablo Kanban izvedbene ekipe in oddelkom za obravnavo zadev, za katerega ekipa gradi programsko opremo: čakalna vrsta referenta in vrsta zahtevkov za združitev (pull request) sta obe podrejeni Littlovemu zakonu in obe zgrešita cilje časa cikla na isti način – preveč WIP glede na prepustnost. To je neposredno pomembno za [strošek odlašanja pri javnih programih](../strošek-zamude-v-javnih-programih/): čas cikla × CoD je funtov, ki ob vsakem trenutku čakajo v vrsti, in za [standarde storitev in metrike transakcij](../standardi-storitev-in-transakcijske-metrike/), kjer je objavljeni cilj časa obdelave zaveza glede časa cikla, ki jo ob zamudi lahko diagnosticirajo le pretočne metrike. Programska oprema za obravnavo zadev bi morala WIP in čas cikla razkriti kot prvovrstni operativni metriki, ne pa ju zakopati v sistem za upravljanje zadev, ki ga nihče ne poizveduje.

## Pasti

- **Dodajanje omejitev WIP brez odprave pravega ozkega grla**: če je omejitev odzivni čas zunanjega zakonskega posvetovalnega organa, omejitev WIP referentov vrsto le premakne navzgor, namesto da bi jo skrajšala.
- **Obravnavanje pretočne učinkovitosti kot cilja, ki ga je mogoče izigrati**: hitenje 1,3 % aktivnega časa komaj premakne čas cikla; vzvod je skoraj vedno v stanjih čakanja, kar običajno pomeni preoblikovanje procesa, ne hitrost referentov.
- **Prezrta variabilnost**: Littlov zakon opisuje povprečja; obseg zadev z veliko variance povpraševanja potrebuje zalogo zmogljivosti, ne le strožje omejitve WIP, sicer bodo zakonski roki še vedno zgrešeni na nestanovitnem repu, čeprav se povprečje izboljša.
- **Nedosledno merjenje WIP**: zadeva, ki je v evidenčnem sistemu »odprta«, a dejansko stoji in čaka tretjo stran, je še vedno WIP; njena izključitev laska številkam, ne da bi spremenila realnost za državljane.

## Viri

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
