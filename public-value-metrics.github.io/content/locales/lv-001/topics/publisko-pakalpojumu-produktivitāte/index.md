# Publisko pakalpojumu produktivitāte

Publisko pakalpojumu produktivitāte mēra, cik efektīvi publiskie izdevumi pārvērš resursus
(darbiniekus, kapitālu, preces un pakalpojumus) kvalitātei koriģētā izlaidē tādiem pakalpojumiem kā
veselības aprūpe, izglītība, policija un sociālā aprūpe, kuriem nav tirgus cenas un tāpēc nav ieņēmumu
skaitļa, uz kuru dalīt izmaksas. Apvienotās Karalistes Nacionālais statistikas birojs (ONS) šo rindu
publicē kopš 2000. gadu vidus, un tā joprojām ir metodoloģiski vispilnīgākā valsts mēroga mēģinājums
atbildēt uz jautājumu "vai valdībai labāk vai sliktāk izdodas pārvērst naudu publiskajos pakalpojumos?"

## Kāpēc tas ir svarīgi

Tirgū produktivitāte ir (izlaides vērtība) / (resursu izmaksas), un izlaides vērtība ir novērojama, jo kāds
par to maksā. Gūžas locītavas nomaiņai, skolas vietai un policijas patrulai nav pārdošanas cenas, tāpēc
naivi var izmērīt tikai *resursus* (to, kas iztērēts), kas kārdina komentētājus uzskatīt augošus publiskos
izdevumus par automātiski sliktiem, jo vairāk resursu ar nemainīgu virsraksta aktivitāti izskatās pēc
krītošas produktivitātes. ONS metodoloģija, kas izklāstīta tās publiskā pakalpojumu produktivitātes
"Sources and Methods" publikācijās, to risina, konstruējot *izlaides* indeksu no aktivitāšu apjomiem
(veiktās operācijas, mācītie skolēni, izmeklētie noziegumi) un pēc tam *koriģējot šo izlaides indeksu pēc
kvalitātes* — veselības aprūpē iekļaujot izdzīvošanas rādītājus un gaidīšanas laikus, izglītībā —
sasniegumus, policijā — tādus rezultātus kā lietu atrisināšana —, lai pakalpojums, kas veic to pašu
operāciju skaitu, bet sasniedz labākus izdzīvošanas rādītājus, tiktu reģistrēts kā produktīvāks, nevis tikai
dārgāks. Galvenais secinājums, kas atkārtojas ONS publikācijās, ir sektoram skaudrs: Apvienotās Karalistes
publisko pakalpojumu produktivitāte COVID-19 pandēmijas laikā strauji kritās, un pēc paša ONS 2020. gadu
vidus izdevumiem vairākās apakšnozarēs, tostarp veselības aprūpē, joprojām nebija atjaunojusies līdz
2019. gada līmenim, pat pieaugot izdevumiem — šī plaisa pārformulē "vairāk finansējuma" un "vairāk
produktivitātes" kā divus pilnīgi atsevišķus jautājumus.

## Matemātika

```
Izlaides indekss (apjoms) = Σ (aktivitāte_i × relatīvais vienības izmaksu svars_i), bāzes gada svērts
                          pār visām pakalpojumu aktivitātēm (piem., gūžas operācijas, kataraktas
                          operācijas, ģimenes ārstu konsultācijas), analogs Laspeiresa/Pāše apjoma indeksam

Kvalitātes korekcija  = izlaides indekss × kvalitātes korekcijas faktors
                          (piem., iekļaujot izdzīvošanas rādītāju, gaidīšanas laiku,
                          sasniegumu vai recidīvisma izmaiņas kā reizinātāju neapstrādātam apjomam)

Resursu indekss       = Σ (darba stundas × darba izmaksu svars) + (preču/pakalpojumu izmaksas,
                          deflētas) + (kapitāla patēriņš)

Kopējās faktoru produktivitātes pieaugums = kvalitātei koriģētā izlaides indeksa % izmaiņas
                                    − resursu indeksa % izmaiņas
```

## Aprēķina piemērs

**Ilustratīvs NHS akūtā sektora produktivitātes aprēķins** (struktūra seko ONS metodoloģijai):

```
1. gads: izlaides apjoma indekss = 100,0 (bāzes gads), resursu indekss = 100,0
        → produktivitātes indekss = 100,0

2. gads: aktivitātes apjoms pieaug par 3,0 % (vairāk operāciju, vairāk pieņemšanu)
        bet vidējais gaidīšanas laiks pasliktinās, piemērojot kvalitātes
        korekcijas atlaidi −1,0 %
        Kvalitātei koriģētais izlaides indekss = 100 × 1,030 × 0,990 = 101,97

        Resursi pieaug: darbinieku skaits +4,0 %, citas izmaksas (deflētas) +1,5 %,
        svērtais resursu indekss = 100 × 1,032 = 103,2

Produktivitātes pieaugums = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                     = 1,97 % − 3,2 % = −1,23 procentpunkti

Interpretācija: aktivitāte pieauga, bet resursi pieauga ātrāk un kvalitāte
nedaudz kritās, tāpēc produktivitāte — izlaide uz resursu vienību — samazinājās,
kaut arī "tika sniegts vairāk aprūpes."
```

Tieši šādu modeli ONS publikācijas atkārtoti ziņojušas par atsevišķām NHS daļām pēc pandēmijas: augoši
izdevumi un augoša neapstrādāta aktivitāte līdzās krītošai izmērītajai produktivitātei, kad ņemti vērā gan
kvalitātes korekcija, gan resursu pieaugums.

## Saikne ar programmatūras inženieriju

Publisko pakalpojumu produktivitāte ir iedzīvotāju līmeņa analogs inženierijas produktivitātes debatēm
(piegādātie stāsta punkti pret [DORA rādītājiem](../dora-rādītāji-publiskās-vērtības-nodrošināšanai/) pret
[plūsmas rādītājiem](../plūsmas-rādītāji-valdības-piegādē/)): neapstrādāta caurlaide bez kvalitātes
korekcijas ir tikpat maldinoša slimnīcā kā "piegādātās koda rindas" programmatūras komandā. Komandām, kas
veido snieguma datu cauruļvadus departamentiem, kvalitātes korekcija jāuzskata par pirmšķirīgu, versionētu
transformācijas posmu, nevis zemsvītras piezīmi — jo paša ONS uzticamība balstās uz to, ka šī korekcija ir
pārredzama, atkārtojama un pārskatāma, kad pienāk labāki kvalitātes dati (ONS pārskata iepriekšējo gadu
produktivitātes novērtējumus, kad tiek galīgi apstiprināti pamatā esošie kvalitātes dati, piemēram,
izdzīvošanas rādītāji, tāpēc jebkurai lejupējai sistēmai, kas patērē šo statistiku, jāapstrādā atpakaļejoši
pārskatījumi, nevis tikai jāpievieno jauni periodi). Tas arī tieši krustojas ar
[kopējām īpašumtiesību izmaksām](../kopējās-piederības-izmaksas-valsts-it/) un
[mākslīgā intelekta produktivitāti publiskajā sektorā](../mi-produktivitāte-publiskajā-sektorā/): sistēma,
kas palielina neapstrādāto aktivitātes apjomu, neuzlabojot vai nesaglabājot kvalitāti, pēc paša ONS
definīcijas nav produktivitātes uzlabojums.

## Biežākās kļūdas

- **Resursu pieauguma uzskatīšana par produktivitātes pieaugumu**: lielāki izdevumi, kas finansē vairāk
  darbinieku, rada vairāk *aktivitātes*, nevis vairāk *produktivitātes*, ja vien izlaide uz resursu vienību
  arī nepieaug — abus politiskajos komentāros regulāri sajauc.
- **Kvalitātes korekcijas pilnīga ignorēšana**: izlaides indekss, kas veidots tikai no neapstrādātiem
  aktivitāšu skaitļiem, uzrādīs "produktivitātes ieguvumus" no vairāk zemākas vērtības vai zemākas
  kvalitātes darīšanas; ONS kvalitātes korekcija pastāv tieši, lai to pamanītu.
- **Produktivitātes indeksu salīdzināšana starp apakšnozarēm bez metodoloģijas versiju saskaņošanas**:
  veselības, izglītības un policijas produktivitāte katra ir veidota no atšķirīgiem aktivitāšu un
  kvalitātes datu avotiem ar atšķirīgiem pārskatīšanas cikliem — naivs starpnozaru salīdzinājums
  salīdzina nesaderīgus instrumentus.
- **Viena gada produktivitātes krituma lasīšana kā pastāvīgas tendences**: pandēmijas un pēcpandēmijas
  laika produktivitātes skaitļi uzrādījuši ievērojamu svārstīgumu no gada uz gadu, kad pati kvalitātes dati
  (piem., gaidīšanas saraksti, plānveida atveseļošanās) mainījās; ONS konsekventi brīdina pret viena gada
  izmaiņu pārāk lielu interpretāciju.

## Avoti

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
