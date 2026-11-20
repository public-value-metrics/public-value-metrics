# Sociālā ieguldījumu atdeve (SROI)

Sociālā ieguldījumu atdeve ir ietvars plašas vērtības — sociālās, vides un ekonomiskās — mērīšanai, izteikšanai naudā un uzskaitei, izsakot to kā attiecību pret ieguldītajiem resursiem, piemēram, „£1,44 sociālās vērtības par katru ieguldīto £1". Tas izstrādāts, lai finanšu uzskaites loģiku paplašinātu uz iznākumiem, ko tirgi nenovērtē, nezaudējot uzskaites disciplīnu: katram SROI skaitlim jābūt izsekojamam līdz ieinteresēto pušu definētam iznākumam, pierādījumu bāzei un skaidrai korekcijai par to, kas būtu noticis tāpat.

## Kāpēc tas ir svarīgi

SROI uztur Social Value UK un Social Value International — SROI tīkla (SROI Network) pēcteces organizācijas —, kuru "A Guide to Social Return on Investment" (2012) joprojām ir atsauces metodoloģija. Ietvars balstās uz septiņiem principiem — iesaistīt ieinteresētās puses, izprast, kas mainās, novērtēt to, kas ir svarīgi, iekļaut tikai būtisko, nepārspīlēt, būt pārredzamam un pārbaudīt rezultātu —, un tieši piekto principu „nepārspīlēt" nepilda vairums praksē sastopamo SROI ziņojumu. Attiecība, kas iegūta, izlaižot inerces efekta (efekta, kas būtu iestājies arī bez programmas) korekciju un attiecināšanas korekcijas, nav SROI; tas ir mārketinga skaitlis SROI ietērpā. Programmatūras inženieriem, kas būvē ziņošanas rīkus labdarības organizācijām, sociālajiem uzņēmumiem vai pasūtītājiem, jāzina šī atšķirība, jo rīks vai nu uzspiedīs disciplīnu, vai atvieglos tās apiešanu.

## Matemātika

SROI balstās uz [pārmaiņu teoriju](../pārmaiņu-teorija/), lai noteiktu, kuri iznākumi ir aptverti, un tos izsaka ar to pašu atbildības ķēdi kā [loģikas modelis](../loģikas-modelis/):

```
SROI attiecība = Iznākumu tagadnes vērtība / Ieguldījumu vērtība

Process:
 1. Noteikt apjomu un identificēt ieinteresētās puses, kuru iznākumus mērīs
 2. Attēlot iznākumus (pārmaiņu teorija, kas pierādīta kopā ar ieinteresētajām pusēm, nevis pieņemta)
 3. Pierādīt iznākumus un piešķirt tiem vērtību ar finanšu aizstājējrādītājiem
 4. Noteikt ietekmi: bruto vērtība − inerces efekts − attiecināšana − izspiešana, pēc tam piemērot samazināšanos laikā
 5. Aprēķināt SROI: ietekmes neto tagadnes vērtība ÷ ieguldījumu vērtība
 6. Ziņot, izmantot un iestrādāt — attiecība ir komunikācijas rīks, nevis galamērķis
```

Inerces efekts, attiecināšana un izspiešana aplūkoti sadaļās [papildinātība un inerces efekts](../papildinātība-un-inerces-efekts/) un [izspiešana un attiecināšana](../izspiešana-un-attiecināšana/); visi trīs kalpo, lai no bruto iznākuma izdalītu patieso [kontrfaktisko](../kontrfaktiskā-analīze/) ietekmi.

## Aprēķina piemērs

**Pašvaldības nodarbinātības programma**: gada ieguldījumu izmaksas £250 000. Sešdesmit dalībnieki pāriet ilgstošā nodarbinātībā; šī iznākuma finanšu aizstājējrādītājs (apvienojot labklājības pieaugumu, mazāku atkarību no pabalstiem un nodokļu ieņēmumus) pirmajā gadā ir £8 500 uz cilvēku — skatiet [vienības izmaksu datubāzes](../vienības-izmaksu-datubāzes/), no kurienes ņemami šādi aizstājējrādītāji.

- Iznākuma bruto vērtība: 60 × £8 500 = £510 000
- Atskaitot inerces efektu (40 % visticamāk būtu atraduši darbu bez programmas): £510 000 × 0,60 = £306 000
- Atskaitot attiecināšanu (30 % atlikušo izmaiņu ir citu aģentūru atbalsta nopelns): £306 000 × 0,70 = £214 200
- 2. gada iznākums ar 30 % samazināšanos: £214 200 × 0,70 = £149 940, diskontēts ar 3,5 % gadā (skatiet [sociālā diskonta likme](../sociālā-diskonta-likme/)): £149 940 ÷ 1,035 = £144 870
- Ietekmes kopējā tagadnes vērtība: £214 200 + £144 870 = £359 070
- **SROI attiecība: £359 070 ÷ £250 000 = 1,44**, ziņota kā „£1,44 sociālās vērtības par katru ieguldīto £1"

**Labdarības organizācija**: £60 000 vērts draudzēšanās pakalpojums mazina vientulību 80 vecākiem cilvēkiem, novērtētam ar aizstājējrādītāju £1 100 uz cilvēku gadā. Bruto vērtība £88 000; pēc 35 % inerces efekta un 15 % attiecināšanas neto ietekme ir £88 000 × 0,65 × 0,85 = £48 620, SROI attiecība 0,81 — zem pašatmaksāšanās sliekšņa, kas ir likumīgs un noderīgs secinājums, nevis neizdevies ziņojums.

## Saikne ar programmatūras inženieriju

SROI kalkulators, kas ļauj lietotājam ievadīt iznākumu skaitu un aizstājējrādītāju vērtības, bet kam nav obligāta lauka inerces efekta, attiecināšanai vai saistītai pārmaiņu teorijai, pēc noklusējuma radīs piepūstas attiecības, jo korekciju izlaišana ir vieglākais ceļš. Iestrādājiet disciplīnu shēmā: katrai iznākuma rindai jāatsaucas uz ieinteresēto pušu grupu, pierādītu daudzumu, finanšu aizstājējrādītāju ar tā avotu un neizlaižamiem inerces efekta/attiecināšanas laukiem. Skatiet [iznākumi un izlaide](../rezultāti-pret-izlaidi/) par nošķīrumu, uz kuru balstās SROI iznākumu attēlošana, un [loģikas modelis](../loģikas-modelis/) par ķēdi, kas rīkam jāatspoguļo savā datu modelī.

## Biežākās kļūdas

- **Inerces efekts un attiecināšanas izlaišana.** Galvenā attiecība bez šīm korekcijām ir bruto, nevis neto ietekmes skaitlis, un Social Value UK principi tieši pieprasa abas.
- **Attiecību salīdzināšana starp organizācijām.** SROI attiecība ir atkarīga no apjoma un aizstājējrādītāju izvēles katrā gadījumā atsevišķi; uzskatīt vienā ziņojumā iegūto 4:1 attiecību par „labāku" nekā otrā iegūto 2:1 nozīmē ignorēt, ka pieņēmumi nav standartizēti kā finanšu uzskaites attiecība.
- **Pārklājošos aizstājējrādītāju dubultā uzskaite.** „Mazākas vientulības" aizstājējrādītāja un „uzlabotas garīgās labklājības" aizstājējrādītāja summēšana tiem pašiem labuma guvējiem var divreiz novērtēt vienu pamatā esošu izmaiņu.
- **Ieinteresēto pušu iesaistes izlaišana.** Pirmais princips pieprasa iznākumus definēt kopā ar cilvēkiem, kas tos piedzīvo, nevis ļaut modeļa veidotājam analītiķim tos pieņemt.

## Avoti

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
