# Dodatnost in mrtva teža

Dodatnost se sprašuje, ali je intervencija povzročila izid, ki se sicer ne bi zgodil. Mrtva teža je njen zrcalni pojem: delež izida, ki bi se zgodil tudi brez programa, nepovratnih sredstev ali subvencije. Skoraj vsaka trditev o vplivu vladnega programa ali dobrodelne organizacije precenjuje njegov učinek, dokler se ne odšteje mrtva teža. Zato jo britanske smernice za vrednotenje obravnavajo kot prvi in najpomembnejši popravek vsake bruto številke.

## Zakaj je pomembno

»Podprli smo rast 500 podjetij« zveni kot dosežek. Če pa bi 300 teh podjetij zraslo tudi brez podpore, ker si je lokalno gospodarstvo opomoglo, ker so imela druge vire financiranja ali ker so bila na rastni poti že pred začetkom programa, je pravi dodatni prispevek programa 200, ne 500. Magenta Book britanskega finančnega ministrstva (HM Treasury) in dolgoletni »Additionality Guide« (HM Treasury/BIS), ki je nastal za programe regionalnega razvoja in prenove ter se od takrat široko uporablja pri vrednotenju v britanski upravi, formalizirata mrtvo težo kot izhodiščni popravek v standardnem zaporedju izračuna neto vpliva: bruto učinek minus mrtva teža, minus izpodrivanje, minus uhajanje, prilagojeno za multiplikativne učinke, je enako neto dodatnemu vplivu. Izpustitev tega koraka je najpogostejši način, kako se trditve o vplivu v javnem in socialnem sektorju napihnejo, namerno ali ne. Program nepovratnih sredstev, ki meri le bruto izide udeležencev in nima primerjalne skupine, ne more ločiti lastnega učinka od tistega, kar bi se zgodilo v vsakem primeru.

Mrtva teža ni stalen odstotek. Popolnoma je odvisna od kontrafaktičnega scenarija za določeno populacijo in intervencijo (glej [kontrafaktična analiza](../kontrafaktična-analiza/)). Vrednotenja regionalnega razvoja v Angliji pod nekdanjimi regionalnimi razvojnimi agencijami so ugotavljala stopnje mrtve teže približno med 20 in 60 %, odvisno od vrste podpore podjetjem. Zato verodostojna vrednotenja programov poročajo o razponu, prilagojenem za mrtvo težo, ne o eni predpostavljeni številki. Zato tudi financerji, kot sta National Lottery Community Fund in Big Society Capital, od prejemnikov zahtevajo, da mrtvo težo izrecno obravnavajo v poročilih o izidih in ne poročajo le o bruto številu udeležencev.

## Matematika

Standardno zaporedje popravkov za neto vpliv, kot ga določajo britanske smernice za vrednotenje (Magenta Book; Additionality Guide HM Treasury/BIS; smernice za vrednotenje skladov ESIF in strukturnih skladov):

```
Bruto izid
  − Mrtva teža       (kar bi se zgodilo tako ali tako)
  − Izpodrivanje     (dejavnost/korist, prestavljena od drugod, ne ustvarjena – glej
                       displacement-and-attribution)
  − Uhajanje         (korist, ki pripade zunaj ciljne skupine/območja)
  × Multiplikator    (dodatna posredna/inducirana gospodarska dejavnost, kjer je pozitivna)
  = Neto dodatni vpliv
```

Stopnja mrtve teže kot delež:

```
Stopnja mrtve teže = izidi, ki bi nastali brez intervencije
                      / skupni opaženi bruto izidi

Neto dodatni izidi = bruto izidi × (1 − stopnja mrtve teže)
```

## Praktični primer

**Program nepovratnih sredstev za podporo podjetjem**: regionalna shema poroča, da je 500 podprtih podjetij v naslednjem letu povečalo zaposlenost, v povprečju za 3 delovna mesta na podjetje, torej bruto trditev o 1.500 delovnih mestih.

Primerjalna skupina primerljivih nepodprtih podjetij (glej [kontrafaktična analiza](../kontrafaktična-analiza/)) kaže, da bi se 40 % rasti zaposlenosti podprtih podjetij zgodilo tudi brez podpore, glede na uspešnost primerjalne skupine v istem obdobju.

```
Stopnja mrtve teže = 40 %
Neto dodatna delovna mesta = 1.500 × (1 − 0,40) = 900 delovnih mest
```

Pošteno sporočljiv dosežek programa je 900 delovnih mest, ne 1.500, torej 40 % manj samo zaradi popravka za mrtvo težo, še preden sta upoštevana izpodrivanje ali uhajanje.

**Dobrodelni program zaposlovanja**: dobrodelna organizacija zaposli 200 dolgotrajno brezposelnih oseb s stroški 600.000 £ (3.000 £ na zaposlitev, bruto). Nacionalni podatki o trgu dela kažejo, da bi brez kakršne koli intervencije v istem obdobju zaradi naravnega gibanja na trgu dela službo našlo približno 15 % primerljive skupine dolgotrajno brezposelnih.

```
Stopnja mrtve teže = 15 %
Neto dodatne zaposlitve = 200 × (1 − 0,15) = 170
Pravi strošek na dodatno zaposlitev = 600.000 £ / 170 ≈ 3.529 £
```

Bruto strošek na zaposlitev (3.000 £) podcenjuje pravi strošek dodatnega prispevka dobrodelne organizacije za približno 15 %.

## Povezava s programskim inženirstvom

Dodatnost in mrtva teža sta neposredno pomembni za vsakogar, ki razvija programsko opremo za merjenje vpliva ali upravljanje nepovratnih sredstev v javnem ali socialnem sektorju:

- Sistemi za poročanje o izidih naj že po zasnovi zajemajo primerjalno ali izhodiščno skupino, ne le izide udeležencev. Naknadno dodajanje kontrafaktičnega scenarija po zagonu sistema, ki ga ni vseboval, je precej težje kot vgradnja zajema od začetka (glej [kontrafaktična analiza](../kontrafaktična-analiza/)).
- Nadzorne plošče, ki poročajo le bruto število udeležencev, bodo financerjem in nadzornim organom sistematično precenjevale vpliv. Kjer ocene mrtve teže obstajajo (iz literature o vrednotenju ali iz primerjalne skupine), naj programska oprema poleg bruto številke prikaže tudi številko po odštetju mrtve teže, ne namesto nje.
- To je neposredno povezano z [družbeno donosnostjo naložbe](../družbeni-donos-naložbe/), katere razmerje SROI je verodostojno šele, ko sta od zatrjevanih bruto izidov odšteta mrtva teža (in izpodrivanje). Kalkulator SROI, ki ta korak izpusti, bo dajal napihnjena razmerja, ki ne zdržijo preverjanja.

## Pasti

- **Poročanje o bruto izidih, kot da bi bili vsi dodatni.** To je najpogostejša napaka pri merjenju vpliva v poročilih o nepovratnih sredstvih in programih. Pred objavo glavne številke se vedno vprašajte, ali bi se to zgodilo tako ali tako.
- **Predpostavka, da povsod velja en sam odstotek mrtve teže.** Mrtva teža se močno razlikuje glede na sektor, populacijo in lokalne gospodarske razmere. Uporabite primerjalno skupino ali dokaze za posamezni sektor, ne številke iz nepovezanega vrednotenja.
- **Zamenjevanje mrtve teže z izpodrivanjem.** Mrtva teža zadeva kontrafaktične izide za iste udeležence, izpodrivanje pa učinke na druge ljudi ali kraje (glej [izpodrivanje in pripisovanje](../izpodrinjenje-in-pripisovanje-učinka/)). Mešanje obeh vodi v dvojno štetje ali premajhno štetje popravka.
- **Mrtva teža, ki jo sami navedejo udeleženci.** Če upravičence vprašamo, ali bi se to zgodilo brez naše pomoči, dobimo sistematično prenizke ocene mrtve teže (udeleženci običajno pripišejo zasluge programu). Neodvisna primerjalna skupina je veliko zanesljivejša.

## Viri

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  smernice o mrtvi teži, izpodrivanju in uhajanju pri vrednotenju strukturnih skladov.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
