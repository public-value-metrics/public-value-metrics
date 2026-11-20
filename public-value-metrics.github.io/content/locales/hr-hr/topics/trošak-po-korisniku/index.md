# Trošak po korisniku

Trošak po korisniku jest ukupni trošak programa podijeljen s brojem jedinstvenih osoba koje su primile uslugu, dakle svakoga koga se dotaklo, bez obzira jesu li se njegove okolnosti doista promijenile. To je najbrži pokazatelj učinkovitosti koji organizacija može proizvesti, jer je odgovor na „koga smo opsluživali” gotovo uvijek već u sustavu za vođenje slučajeva, dok odgovor na „kome je pomognuto” obično nije.

## Zašto je važno

Financijeri stalno traže trošak po korisniku, i to iz opravdanih razloga: dostupan je odmah, usporediv je kroz portfelj vrlo različitih programa i pošten je o dosegu na način na koji tvrdnje o ishodima, koje se dulje provjeravaju i lakše precjenjuju, nisu. Britanski Charities SORP (Statement of Recommended Practice), koji uređuje kako dobrotvorne organizacije izvješćuju prema FRS 102, zahtijeva da godišnja izvješća povjerenika opisuju postignuća u odnosu na ciljeve, no većina upravljačkih računa manjih organizacija i dalje se po zadanome oslanja na jedinične troškove temeljene na dosegu jer su jeftini za izradu i prikladni za reviziju.

Opasnost je u tome da se trošak po korisniku tretira kao da odgovara na pitanje na koje ne može odgovoriti: je li novac djelovao. Vidi [trošak po ishodu](../trošak-po-ishodu/) za metriku koja na to doista odgovara i [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) za temeljnu razliku. Trošak po korisniku legitimna je metrika trijaže i dosega, kaže financijeru koliko daleko novac seže, ali nizak trošak po korisniku može značiti ili stvarnu učinkovitost ili uslugu toliko tanku da ništa ne mijenja.

## Matematika

```
Trošak po korisniku = ukupni trošak programa / broj jedinstvenih opsluženih osoba

Kontrast:
Trošak po ishodu    = ukupni trošak programa / broj osoba koje postižu definirani ishod

Trošak po korisniku uvijek je ≤ trošku po ishodu, jer je populacija ishoda podskup
(često malen) populacije korisnika.
```

## Primjer iz prakse

**Banka hrane, ista godina kao u primjeru troška po ishodu**:

- Ukupni trošak programa: 450.000 £
- Jedinstvena opsluživana kućanstva (tri ili više paketa): 1.800

```
Trošak po korisniku = 450.000 £ / 1.800 = 250 £ po opsluženom kućanstvu
```

Usporedite obje metrike jednu uz drugu:

| Metrika | Nazivnik | Rezultat |
|---|---|---|
| Trošak po korisniku | 1.800 opsluženih kućanstava | 250 £ |
| Trošak po ishodu | 630 kućanstava koja postižu sigurnost opskrbe hranom | 714 £ |

Financijer koji vidi samo 250 £ mogao bi zaključiti da je riječ o iznimno učinkovitoj dobrotvornoj organizaciji. Financijer koji vidi oba broja može postaviti korisnije pitanje: je li jaz između dosega (1.800) i ishoda (630) jaz u prikupljanju podataka, jaz u dizajnu ili poštena refleksija koliko je teško postići sigurnost opskrbe hranom samo pomoću hrane?

**Dobrotvorna organizacija za osposobljavanje za posao, ilustrativno**: trošak po korisniku (upisanom) = 2.000 £; trošak po ishodu (trajno zaposlenje nakon 6 mjeseci) = 11.000 £, jer samo 18 % upisanih završi program i pronađe trajan posao. Razilaženje ta dva broja za faktor pet uobičajeno je gdje god su stope dovršetka ili trajnosti niske; organizacija za osposobljavanje i banka hrane ovdje su strukturno identične.

## Veza s programskim inženjerstvom

Trošak po korisniku zadana je metrika u softveru za neprofitni sektor jer je to metrika koja ispadne iz zapisa o korisniku bez ikakva dodatnog posla: stvori slučaj, zabilježi uslugu, prebroji retke. Izgradnja sustava koji podržava i trošak po ishodu znači namjerno dodavanje drugog ravnopravnog entiteta, događaja ishoda, datiranog i definiranog neovisno o isporuci usluge, i odupiranje iskušenju da „zatvoren slučaj” zamjenjuje „postignut ishod”. Pri određivanju opsega platforme za upravljanje bespovratnim sredstvima ili CRM-a pitajte koju od tih dviju metrika svaka nadzorna ploča doista prikazuje i tako je označite; miješanje u jednoj pločici „učinak” jedan je od najčešćih uzroka zamki u nastavku na razini softvera. Vidi [baze jediničnih troškova](../baze-jediničnih-troškova/) za usporedno ocjenjivanje obiju metrika nakon što su ispravno označene.

## Zamke

- **Predstavljanje troška po korisniku kao učinka.** Mjeri doseg, a ne promjenu. Označite nadzorne ploče i izvještaje „trošak po opsluženoj osobi”, a ne „trošak po osobi kojoj je pomognuto”.
- **Dvostruko brojenje kroz programe.** Osoba koja od iste dobrotvorne organizacije prima i pakete hrane i savjetovanje o dugovima jedan je korisnik, a ne dva, ako nazivnik treba opisivati jedinstveni doseg; odlučite koja se konvencija koristi i dokumentirajte je.
- **Tretiranje nižeg broja kao uvijek boljeg.** Druženje uz besplatan ručak uvijek će pobijediti intenzivnu uslugu vođenja slučajeva u trošku po korisniku, jer je jeftinije lagano dotaknuti nekoga. To ne govori ništa o tome koje stvara trajniju promjenu po funti.
- **Tiha zamjena nazivnika između izvještaja.** Trošak po korisniku naveden u jednom godišnjem izvještaju u odnosu na „upisane”, a u idućem u odnosu na „završene” nije usporediv iz godine u godinu; svaki put navedite nazivnik.

## Izvori

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
