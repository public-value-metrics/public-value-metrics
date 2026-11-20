# Efektīvā altruisma izmaksu efektivitāte

Efektīvā altruisma (EA) izmaksu efektivitātes domāšana sarindo labdarības iejaukšanās pasākumus pēc tā, cik daudz laba tie dod — visbiežāk izsakot kā izglābtās dzīvības vai iegūto veselību uz katru iztērēto dolāru —, un virza naudu uz to iejaukšanos, kas uz robežas nopērk visvairāk laba. GiveWell ir šīs jomas ietekmīgākais praktiķis: tā publicē skaidras, atjauninātas aplēses par izmaksām uz vienu izglābtu dzīvību un uz iznākumu nelielam “labāko labdarības organizāciju” sarakstam un iesaka ziedotājiem dot tai, kurai pašlaik ir vieta papildu finansējumam ar vislabāko atdevi.

## Kāpēc tas ir svarīgi

GiveWell savā publicētajā metodoloģijā izmaksu efektivitāti min kā vadošo kritēriju: tā meklē uz pierādījumiem balstītus iejaukšanās pasākumus, aplēš to izmaksu efektivitāti kopīgā vienībā un sarindo pilnīgi nesaistītus mērķus — tīklus pret malāriju, A vitamīna papildināšanu, naudas pārskaitījumus, vakcinācijas stimulējošos maksājumus — pēc šīs vienīgās ass. Tas ir tiešs QALY/DALY tipa domāšanas imports no veselības ekonomikas filantropijā: tāpat kā veselības sistēma jautā “cik QALY uz mārciņu uz robežas”, GiveWell jautā “cik dzīvību vai dzīves gadu uz dolāru uz robežas” un uzskata mērķus par aizstājamiem, tos pārvēršot šajā kopīgajā vienībā. Šīs domāšanas ietvara publiskā sektora radinieku skatiet [izmaksu efektivitātes analīzē valdībā](../izmaksu-efektivitātes-analīze-valdībā/).

Visvairāk citētais GiveWell skaitlis attiecas uz Against Malaria Foundation (AMF), kas izplata ar insekticīdu apstrādātus moskītu tīklus. GiveWell publicētajā praktiskajā piemērā (izmantojot 2020. gada finansējuma datus) aptuveni $4 500 finansēja pietiekami daudz tīklu, lai novērstu vienu nāves gadījumu, ņemot vērā nepilnīgu tīklu lietošanu, bāzes mirstību bez tīkliem un korekciju par aizstāšanu (funging) — iespēju, ka AMF daļu šī finansējuma būtu saņēmusi no citiem ziedotājiem tik un tā. GiveWell skaidri norāda, ka šis skaitlis laika gaitā un dažādos reģionos mainās, mainoties malārijas izplatībai, tīklu izmaksām un finansējuma trūkumam, un ka izmaksas par dzīvības izglābšanu parasti gaidāmas pieaugam, jo vispirms tiek izmantotas lētākās iespējas; tas ir metodes ilustratīvs piemērs, nevis fiksēta cena.

## Matemātika

```
Izmaksu efektivitāte = Iejaukšanās izmaksas / Radītā laba vienības
                      (piem., $ par izglābtu dzīvību, $ par novērstu DALY, $ par QALY)

GiveWell ķēde moskītu tīklu programmai, ilustratīvi:
  $ par nopirktu un piegādātu tīklu
    ÷ faktiski izmantoto tīklu īpatsvars
    ÷ aizsargāto cilvēku skaits uz tīklu
    × bāzes gada mirstība bez tīkliem
    × mirstības samazinājums, kas attiecināms uz tīkla lietošanu (no RCT pierādījumiem)
    × aizsardzības gadi uz tīklu
    ÷ korekcija par aizstāšanu (nauda, kas aizstāj citu ziedotāju finansējumu)
  = $ par izglābtu dzīvību (neto no kontrafaktiskā finansējuma ietekmes)
```

Šī ķēde ir svarīga, jo katrs solis ir vieta, kur izmaksu efektivitātes aplēses bieži noiet no ceļa — skatiet zemāk biežākās kļūdas —, un tāpēc, ka tā skaidri parāda, ka “izmaksas par izglābtu dzīvību” nekad nav neapstrādāta novērota cena; tā ir modelēta aplēse, kas veidota no vairākiem atsevišķi nenoteiktiem ievaddatiem.

## Aprēķina piemērs

Divi hipotētiski iejaukšanās pasākumi, abi balstīti uz pierādījumiem, kas konkurē par vieniem un tiem pašiem robežlīdzekļiem £100 000:

- **Moskītu tīkli (AMF tipa)**: aptuveni $4 500 uz izglābtu dzīvību pēc GiveWell publicētā praktiskā piemēra ar 2020. gada datiem, t. i., ļoti aptuveni 20 izglābtas dzīvības uz £100 000, atkarībā no izmantotā valūtas kursa un gada.
- **Dehelmintizācijas programma**: nekāda ticama ieguvuma mirstībai, bet spēcīgi pierādījumi par ilgtermiņa ienākumu pieaugumu no bērnības dehelmintizācijas; GiveWell to vērtē ienākumu pieauguma izteiksmē, nevis izglābtajās dzīvībās, kas apgrūtina tiešu salīdzināšanu ar moskītu tīkliem bez kopīgas vienības. GiveWell izmanto skaidru “morālo svaru” ietvaru, lai abus pārvērstu vienā iekšējā vienībā rangošanai.

EA metodes disciplīna ir piespiest šo salīdzinājumu iznākt atklātībā, nevis finansēt abus, jo abi “skan labi”. Ekvivalento piespiedu mehānismu, ko izmanto Apvienotās Karalistes sociālie uzņēmumi un vietējie pasūtītāji, skatiet [sociālajā atdevē no ieguldījuma](../sociālā-ieguldījumu-atdeve/) — tā uzdod to pašu jautājumu (kāda ir labākā atdeve uz mārciņu), bet naudā izteiktas vērtības idiomā, nevis dzīvību/DALY idiomā.

## Saikne ar programmatūras inženieriju

Inženieriem, kas būvē ziedotāju platformas, grantu saskaņošanas rīkus vai ietekmes informācijas paneļus EA orientētiem finansētājiem (Open Philanthropy, pati GiveWell, efektīvās dāvināšanas platformas, piemēram, Giving What We Can), izmaksu efektivitātes aplēses jāattēlo kā diapazoni ar norādītiem pieņēmumiem, nevis atsevišķi skaitļi — pamatā esošajam modelim ir vairāki reizinoši nenoteikti ievaddati, un to sabrukšana līdz vienam skaitlim panelī sagroza pārliecības pakāpi, ko norāda pati GiveWell. Versionējiet katru aplēsi pēc publicēšanas datuma; GiveWell pārskata savus skaitļus, dažkārt būtiski, saņemot jaunus RCT pierādījumus vai finansējuma trūkuma datus, un platforma, kas kešo veco skaitli, klusi kļūst nepareiza.

## Biežākās kļūdas

- **Izmaksu efektivitātes aplēses uztvere kā fiksētu cenu.** Tā ir modeļa izvade ar vairākiem nenoteiktiem reizinošiem ievaddatiem (lietošanas līmeņi, bāzes mirstība, aizstāšanas korekcija); norādiet datumu un versiju.
- **Aizstāšanas (funging) un izspiešanas ignorēšana.** Organizācijas finansēšana, kas naudu būtu saņēmusi no cita ziedotāja tik un tā, nopērk mazāk kontrafaktiskā laba, nekā liecina virsraksta skaitlis — skatiet [papildinātība un bezpapildu efekts](../papildinātība-un-inerces-efekts/) un [izspiešana un attiecināšana](../izspiešana-un-attiecināšana/).
- **Salīdzināšana starp nesaderīgām vienībām bez pārvēršanas.** “Izglābtas dzīvības” un “iegūti ienākumi” nav tieši salīdzināmi bez skaidra morālo svaru ietvara; to attēlošana blakus, it kā tie būtu salīdzināmi, ir kategorijas kļūda.
- **Mērķa jomas tuneļredze.** Rangošana tikai vienas mērķa jomas robežās (piem., tikai globālās veselības labdarības organizācijas) un uzvarētāja saukšana par “izmaksu ziņā efektīvāko labdarības organizāciju” pārspīlē apgalvojumu; GiveWell starp mērķiem rangošana ir apzināti šaura (globālā veselība un labklājība), nevis universāla.

## Avoti

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
