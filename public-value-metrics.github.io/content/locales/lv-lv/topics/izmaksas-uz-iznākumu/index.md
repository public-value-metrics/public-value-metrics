# Izmaksas uz iznākumu

Izmaksas uz iznākumu ir programmas kopējie izdevumi, dalīti ar to cilvēku skaitu, kuri sasniedz definētas, jēgpilnas izmaiņas savos apstākļos — nevis ar to, cik vienkārši saņēma pakalpojumu. Tas ir asākais efektivitātes rādītājs, ko finansētājs vai piegādes komanda var lietot, jo tas liek uzdot iepriekšēju jautājumu, no kura vairums labdarības organizāciju izvairās: kas tieši tiek uzskatīts par panākumiem?

## Kāpēc tas ir svarīgi

Pārtikas banka no viena un tā paša gada pārskatiem var uzrādīt divus ļoti atšķirīgus skaitļus. Izmaksas uz izdalīto pārtikas paku varētu būt £15. Izmaksas uz mājsaimniecību, kas sasniedz pārtikas drošību — vairs nav vajadzīga neatliekamā pārtikas palīdzība, pārbaudīts novērošanas brīdī —, varētu būt £340. Abi ir patiesi. Tikai viens stāsta finansētājam, vai nauda darbojas. Plaisa starp tiem ir plaisa starp izlaidi un iznākumu: izdalīta paka ir izlaide; mājsaimniecība, kas vairs nav krīzē, ir iznākums. Sk. [iznākumi un izlaide](../rezultāti-pret-izlaidi/).

Apvienotās Karalistes trešais sektors divdesmit gadus ir veidojis infrastruktūru, lai piespiestu šo atšķirību. New Philanthropy Capital „četru pīlāru pieeja" labdarības efektivitātei skaidri prasa organizācijām norādīt savus iznākumus pirms izlaides, un Inspiring Impact — Apvienotās Karalistes finansētāju atbalstītā ietekmes mērīšanas sadarbība — publicē Outcomes Matrix, ko daudzi grantu pieteikumi tagad prasa labdarības organizācijām aizpildīt. Trussell Trust ikgadējā „State of Hunger" pētījumu programma, ko veic kopā ar Heriot-Watt University, pastāv tieši tāpēc, ka vien pakas skaits neko nesaka par to, vai cilvēki izbēg no pārtikas nedrošības.

Izmaksas uz iznākumu kaut ko nozīmē tikai tad, kad ir nofiksēts kontrfaktiskais scenārijs: iznākums, kas sasniegts „tāpat", nav iznākums, ko programma nopirka. Sk. [kontrfaktiskā analīze](../kontrfaktiskā-analīze/) un [izspiešana un attiecināšana](../izspiešana-un-attiecināšana/).

## Matemātika

```
Izmaksas uz iznākumu = programmas kopējās izmaksas / to saņēmēju skaits, kas sasniedz definēto iznākumu

kur:
  Programmas kopējās izmaksas = tiešās piegādes izmaksas + taisnīga administratīvo izmaksu daļa
  Definētais iznākums         = iepriekš noteikta, izmērāma stāvokļa maiņa
                                 (piem., „pārtikas drošība 6 mēnešu novērošanā",
                                 nevis „saņēma pārtikas paku")
```

Salīdziniet ar [vienības izmaksu datubāzēm](../vienības-izmaksu-datubāzes/) (piem., nozarei specifiskiem vienības izmaksu etaloniem), lai spriestu, vai konkrētas izmaksas uz iznākumu ir labas, vidējas vai sliktas attiecībā pret salīdzināmām intervencēm.

## Aprēķina piemērs

**Pārtikas banka, viens gads**:

- Programmas kopējās izmaksas: £450 000
- Izdalītās pakas: 30 000
- Izmaksas uz paku (izlaides rādītājs): £450 000 / 30 000 = **£15**

Labdarības organizācija veic arī sešu mēnešu novērošanas aptauju ar mājsaimniecību izlasi, konstatējot, ka 35 % mājsaimniecību, kas saņēma trīs vai vairāk pakas, ziņo, ka vairs nav vajadzīga neatliekamā pārtikas palīdzība, un pārsniedz pārtikas drošības slieksni standarta pārtikas drošības aptaujas modulī. No 1 800 mājsaimniecībām, kas tajā gadā saņēma trīs un vairāk pakas, 630 sasniedz šo iznākumu.

```
Izmaksas uz iznākumu = £450 000 / 630 = £714 uz mājsaimniecību, kas sasniedz pārtikas drošību
```

Tieši £714 skaitlis ir tas, kas jālieto finansētājam, kurš salīdzina šo labdarības organizāciju ar naudas pārskaitījumu izmēģinājumu vai parādu konsultāciju pakalpojumu — nevis £15. Ja salīdzināma naudas pārskaitījumu programma tajā pašā reģionā sasniedz pārtikas drošību par £500 uz mājsaimniecību, pārtikas banka nav acīmredzami efektīvāks ceļš uz to pašu iznākumu, kaut arī tās izmaksas uz paku izskatās zemas.

## Saikne ar programmatūras inženieriju

Lielākā daļa lietu pārvaldības sistēmu ir veidotas, lai reģistrētu izlaidi, jo izlaide ir tas, kas notiek darījuma iekšienē (pasniedz paku, iesniedz veidlapu). Iznākumi parasti notiek vēlāk, bieži ārpus sistēmas parastā uztveres loga, un prasa apzinātu dizaina lēmumu: veidot turpmākās izsekošanas mehānismu (aptaujas trigeris, atkārtotas sazināšanās darbplūsma, datu sasaistes darbība) kā pirmās šķiras funkciju, nevis kā piedēkli, kas pielikts gada pārskatam. Inženieriem, kas veido grantu pārvaldības vai lietu pārvaldības platformas nozarei, jāuztver „kāds ir iznākuma notikums un kā mēs to novērojam" kā prasību jautājums, kas uzdots pirms datu modeļa fiksēšanas — daudz grūtāk ir pēc fakta pievienot iznākuma lauku nekā izlaides skaitītāju. Sk. [iznākumi un izlaide](../rezultāti-pret-izlaidi/) un [loģikas modelis](../loģikas-modelis/), kā strukturēt šo prasību sarunu, un [izmaksas uz saņēmēju](../izmaksas-uz-saņēmēju/) ātrākam, rupjākam rādītājam, pie kura komandas ķeras, kad iznākumu izsekošana vēl nav izveidota.

## Biežākās kļūdas

- **Izlaides uzrādīšana kā iznākumu.** „Aizsniegtie cilvēki" nav „cilvēki, kam palīdzēts". Ja rādītāju var iegūt no sistēmas žurnāla bez turpmākas saziņas, tā gandrīz noteikti ir izlaide.
- **Saucēja manipulācijas.** Iznākuma populācijas sašaurināšana līdz „tiem, kas pabeidza programmu", klusi izslēdz cilvēkus, kas pameta, — bieži vien grūtākos gadījumus — un uzpūš šķietamo līmeni. Norādiet saucēju kā visus, kas sāka, nevis visus, kas pabeidza.
- **Nav kontrfaktiskā scenārija.** Visu, kas sasniedza iznākumu, ieskaitīšana, tostarp tos, kas to būtu sasnieguši tāpat, pārspīlē to, ko programma nopirka. Sk. [kontrfaktiskā analīze](../kontrfaktiskā-analīze/).
- **Salīdzināšana starp nesaderīgām iznākuma definīcijām.** „Pārtikas drošība", ko mēra ar validētu aptaujas moduli, nav salīdzināma ar „pārtikas drošību", kas pašu ziņota apmierinātības veidlapā; izmaksu uz iznākumu līgas tabula ir godīga tikai tad, kad iznākuma definīcijas sakrīt.

## Avoti

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
