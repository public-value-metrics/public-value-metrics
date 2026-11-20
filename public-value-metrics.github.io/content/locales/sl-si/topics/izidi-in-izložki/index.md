# Izidi in izložki

Izložek je neposreden, štet produkt dejavnosti – obstaja v trenutku, ko se izvedba zgodi, ne glede na to, kakšen učinek ima. Izid je sprememba, ki sledi za vpletene ljudi, kraj ali sistem. »500 ljudi se je udeležilo delavnice iskanja zaposlitve« je izložek: drži, tudi če nobeden od njih ne najde dela. »Zaposlitvene možnosti 500 ljudi so se izboljšale« je trditev o izidu in zahteva dokaz spremembe, ne le dokaza udeležbe – ta zmeda povzroča več zavajajočih poročil o donacijah kot skoraj katera koli druga merilna napaka v sektorju.

## Zakaj je pomembno

Magenta Book britanskega finančnega ministrstva (HM Treasury) in financerji, kot je National Lottery Community Fund, zahtevajo poročanje o izidih prav zato, ker programi privzeto poročajo o izložkih: so poceni za štetje, vedno na voljo in vedno videti pozitivni. Število izložkov dobesedno nikoli ne more upasti zaradi neuspeha programa – več izvedenih srečanj je vedno »več«, medtem ko izid lahko razkrije, da program ne deluje. Britanski državni računski urad (National Audit Office) je večkrat kritiziral vladne programe, ker so poročali o ravneh dejavnosti, kot da bi bile dokaz uspeha; programska oprema, ki olajša samo poročanje o izložkih, to privzeto krepi, saj izložki ne zahtevajo nadaljnjega zbiranja podatkov, izidi pa ga.

## Matematika

Formule ni, obstaja pa zanesljiv test za razvrstitev metrike:

```
Test izložka: ali ga je mogoče prešteti na mestu izvedbe in drži, tudi če prejemnik ni prizadet?
Test izida:   ali potrebuje primerjavo pred/po ali z/brez, da je smiseln?

Če je število lahko resnično ob ničelni koristi za vse, je izložek.
```

To sodi v širšo verigo [logičnega modela](../logični-model/) in je odvisno od povezav izidov, opredeljenih v [teoriji spremembe](../teorija-spremembe/); pretvorba izida v denar uporablja metode iz [družbenega donosa naložbe](../družbeni-donos-naložbe/).

## Praktični primer

**Lokalna oblast (podpora zaposlovanju)**: izložek – 500 ljudi se je udeležilo delavnic iskanja zaposlitve. Izid – ob 12-mesečnem spremljanju je 140 od teh 500 (28 %) trajno zaposlenih (6+ mesecev). Primerjalna skupina s podobnimi značilnostmi, a brez dostopa do programa, ima v istem obdobju 15-odstotno izhodiščno stopnjo zaposlenosti. Neto dvig izida: 28 % − 15 % = 13 odstotnih točk, torej je ocenjeno 500 × 0,13 = 65 dodatnih ljudi zaposlenih, ki sicer ne bi bili – pripisljiv izid, ločen tako od številke udeležbe 500 kot od surovega števila zaposlenih 140.

**Dobrodelna organizacija (organizacija za pismenost)**: izložek – 1.200 ur branja, izvedenih za 300 otrok. Izid – povprečna bralna starost se je v 6-mesečnem obdobju izboljšala za 8 mesecev, pri pričakovanem izhodišču naravnega napredka 6 mesecev v 6 mesecih. Neto pridobitev izida: 8 − 6 = 2 meseca dodatnega izboljšanja bralne starosti na otroka, pripisljivega programu, ne celotnih 8 mesecev.

## Povezava s programskim inženirstvom

Dnevniki dogodkov in transakcijski sistemi instrumentirajo izložke skoraj samodejno – ogledi strani, seje, zaprti zahtevki, rezervirani termini – ker jih ustvari sistem, ki opravlja svoje delo. Izidi zahtevajo podatkovni model, ki zajame isto osebo ob kasnejšem času glede na izhodišče ali primerjavo, kar je treba zasnovati namerno: nadaljnje ankete, povezane administrativne evidence ali primerjalna kohorta. Orodje za poročanje, ki podpira samo prvo, bo organizacijo tiho usmerjalo k poročanju samo o izložkih, ne glede na to, kaj je zahteval financer. Glej [logični model](../logični-model/), kje izidi sedijo v verigi odgovornosti, [strošek na izid](../strošek-na-izid/) za pretvorbo tega razlikovanja v metriko enotnih stroškov in [KPI v javnem sektorju](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/) za širši vzorec izbire metrik.

## Pasti

- **Poročanje o izložkih, kot da bi bili izidi.** »500 ljudi se je udeležilo« nakazuje korist, ne da bi jo izkazalo; udeležbo izrecno označite kot izložek.
- **Brez izhodišča ali primerjalne skupine.** Številka izida brez kontrafaktičnega scenarija – glej [analiza kontrafaktičnega scenarija](../kontrafaktična-analiza/) – ne more ločiti učinka programa od tega, kar bi se zgodilo tako ali tako.
- **Optimizacija za financirano metriko.** Kadar je financiranje vezano na obseg izložkov, izvedbene ekipe racionalno maksimirajo udeležbo namesto trajne spremembe – način neuspeha po Goodhartovem zakonu.
- **Pranje izidov.** Preimenovanje metrike izložka z izrazi, ki zvenijo kot izid (»izidi vključenosti: 500 udeležencev«), brez nadaljnjega merjenja za njim.

## Viri

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
