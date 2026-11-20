# Logični model

Logični model je linearni diagram, ki povezuje vložke, dejavnosti, izložke, izide in vpliv programa. Bere se od leve proti desni kot veriga odgovornosti: viri vstopijo, dejavnosti se izvedejo, nastanejo izložki, za upravičence se spremenijo izidi, vpliv pa se nabere v širšem ali daljšem časovnem okviru. To je standardna struktura, glede na katero financerji in revizorji pričakujejo poročanje o programu, hkrati pa je naprej usmerjena dopolnitev nazaj zasnovane [teorije spremembe](../teorija-spremembe/).

## Zakaj je pomembno

Magenta Book, navodila britanskega finančnega ministrstva (HM Treasury), določa logični model kot obvezen element zasnove vrednotenja programov, financerji, kot je National Lottery Community Fund, pa prav okoli te petstolpčne verige gradijo svoje prijavne in poročevalske predloge. Njegova vrednost je v tem, da programu naloži, naj v enem diagramu navede, koliko bo porabil, kaj bo s tem počel, kaj bo ustvaril in – kar je ključno – kaj naj bi se zaradi tega spremenilo, in to z natančnostjo, ki jo odstavek besedila pogosto zamegli. Logični model z izpolnjenima stolpcema vložkov in dejavnosti ter praznim ali nejasnim stolpcem izidov je mogoče diagnosticirati na prvi pogled, zato ga financerji tudi zahtevajo.

## Matematika

Logični model je strukturna veriga in ne formula:

```
Vložki          Dejavnosti        Izložki             Izidi                 Vpliv
(vložena        (kaj se z njimi   (neposredni, šteti   (sprememba za         (dolgoročna,
 sredstva)       naredi)           izdelki)             upravičence)          populacijska
                                                                              ali sistemska
                                                                              sprememba)
```

Vsak stolpec naj bo bolj konkreten od prejšnjega: vložki so tisto, kar porabite, dejavnosti so tisto, kar počnete, izložki so tisto, kar je dostavljeno ne glede na učinek, izidi so tisto, kar se zaradi tega spremeni (razlika je v celoti obravnavana v temi [izidi in izložki](../izidi-in-izložki/)), vpliv pa je trajna, pogosto le delno pripisljiva dolgoročna sprememba.

## Praktični primer

**Lokalna oblast (digitalna storitev svetovanja o dolgovih)**:

- Vložki: letni proračun £180.000, 4,0 ekvivalenta polnega delovnega časa (FTE) svetovalcev, sistem za vodenje primerov.
- Dejavnosti: informativni dogodki, individualni termini svetovanja o dolgovih.
- Izložki: izvedenih 900 terminov; izdanih 750 načrtov za dolgove in prejemke.
- Izidi: od strank, ki so prišle na 6-mesečno nadaljnje spremljanje, jih 60 % (450 od 750) poroča o manjših zaostankih, v povprečju za £1.200 na stranko – skupaj £540.000 zmanjšanja zaostankov.
- Vpliv: merljivo zmanjšanje števila prošenj za nastanitev brezdomcev med strankami storitve v dveh letih, ki je le delno pripisljivo tej storitvi ob drugih ukrepih (glej [analizo kontrafaktičnega scenarija](../kontrafaktična-analiza/)).

**Dobrodelna organizacija (partnerstvo za napotitve v banko hrane)**:

- Vložki: £45.000, koordinator z 1,5 FTE, sporazumi o partnerstvu z 12 napotitvenimi agencijami.
- Dejavnosti: triaža napotitev, pakiranje in razdeljevanje paketov.
- Izložki: razdeljenih 5.000 paketov hrane 1.100 gospodinjstvom.
- Izidi: 68 % anketiranih gospodinjstev (748 od 1.100) pri nadaljnjem klicu po 4 tednih poroča o boljši prehranski varnosti.
- Vpliv: prispevek k manjšemu povpraševanju po lokalnih kriznih storitvah, izkazan le v skupnih statistikah območja in ni pripisljiv samo tej dobrodelni organizaciji.

## Povezava s programskim inženirstvom

Logični model je skoraj dobesedno podatkovni model sistema za spremljanje izidov: vložki in dejavnosti so operativni podatki, ki jih že imate (poraba, kadri, dnevniki srečanj); izložke je lahko instrumentirati, ker se štejejo na mestu izvedbe; izidi zahtevajo namensko zasnovano zbiranje podatkov o nadaljnjem spremljanju (ankete, povezovanje administrativnih podatkov), ki ne bo obstajalo, če ga nekdo ne zgradi; vpliv običajno zahteva povezane, longitudinalne ali populacijske podatke, ki presegajo sisteme posameznega programa. Inženirji, ki gradijo orodja za poročanje, naj naročnike spodbujajo, da kazalnike izidov in vpliva opredelijo že ob zasnovi, ne pa da privzeto posežejo po nadzorni plošči samo z izložki, ker je to pač tisto, kar transakcijski podatki že omogočajo. Za metodo, ki vrednoti prav stolpca izidov in vpliva, glej [družbeni donos naložbe](../družbeni-donos-naložbe/), za spremljanje, ali je bil stolpec vpliva res dosežen, pa [uresničevanje koristi](../uresničevanje-koristi/).

## Pasti

- **Ustavitev pri izložkih.** Nadzorna plošča, ki poroča o izvedenih terminih ali razdeljenih paketih in s tem nakazuje korist, poroča o dejavnosti, ne o rezultatih – glej [izidi in izložki](../izidi-in-izložki/).
- **Brez navedene vzročne povezave med stolpci.** Logični model navaja verigo, ne pa tega, zakaj naj bi dejavnosti ustvarile izložke, ti pa izide; to razmišljanje sodi v [teorijo spremembe](../teorija-spremembe/), logični model brez nje pa je nepreizkušen.
- **Obravnava kot enkratni prijavni dokument.** Logični modeli, izdelani le za izpolnitev zahtev pri prijavi na razpis in nikoli posodobljeni, kmalu prenehajo odražati to, kar program dejansko počne.
- **Polzenje pripisovanja pri stolpcu vpliva.** Trditev, da je spremembo na ravni prebivalstva povzročil izključno en program, brez kontrafaktičnega scenarija, preceni to, kar dokazi podpirajo.

## Viri

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
