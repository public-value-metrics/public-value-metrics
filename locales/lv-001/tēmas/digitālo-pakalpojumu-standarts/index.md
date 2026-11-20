# Digitālo pakalpojumu standarts

GOV.UK pakalpojumu standarts (Service Standard) ir barjera, kas jāpārvar katram centrālās valdības digitālajam pakalpojumam pirms tā nodošanas ekspluatācijā: 14 publicēti punkti, kurus pēc katra piegādes posma beigām novērtē neatkarīga ekspertu komisija. Tas ir mehānisms, kas lozungu “veidot labus publiskos pakalpojumus” pārvērš par lēmumu “izpildīts / neizpildīts” ar dokumentētu pēdu — un tiešs 2012. gada Valdības digitālās stratēģijas principa “digitāli pēc noklusējuma” (“digital by default”) pēctecis.

## Kāpēc tas ir svarīgi

Pirms pakalpojumu standarta valdības IT neveiksmes parasti kļuva redzamas tikai pēc palaišanas, un reti kad tās varēja saistīt ar kādu konkrētu lēmumu. 2012. gada Valdības digitālā stratēģija uzlika ministrijām pienākumu pārveidot 25 visapjomīgākos iedzīvotājiem paredzētos darījumu pakalpojumus pēc principa “digitāli pēc noklusējuma”, un šo saistību pastiprināja ar atbilstības mehānismu: pakalpojumus nedrīkstēja palaist GOV.UK, ja tie nebija izturējuši pakalpojuma novērtējumu pēc tolaik spēkā esošā 26 punktu standarta (2019. gadā tas tika apvienots līdz 18 punktiem, bet tagad spēkā ir 14 punktu standarts, kas aptver trīs grupas — lietotāju vajadzību izpratni, labu pakalpojumu nodrošināšanu un pareizu tehnoloģiju izmantošanu). Pakalpojuma novērtējums ir reāls pasākums: GDS vai resora vērtētāju komisija izskata pierādījumus, iztaujā komandu un par katru punktu pieņem lēmumu — izpildīts, daļēji izpildīts vai neizpildīts —, kas tiek publicēts pakalpojuma novērtējuma lapā. Neizturēts novērtējums aptur pakalpojuma pāreju no slēgtās beta versijas uz publisko beta versiju vai no betas uz darbības režīmu — tā ir īsta barjera, nevis formāla pārskatīšana.

## Matemātika

Pakalpojumu standarts ir ietvars, nevis formula, taču tas darbojas kā pa posmiem sadalīta lēmumu struktūra:

```
Atklāšana  → Alfa novērtējums  → Beta novērtējums → Darbības novērtējums
             (nav obligāts      (obligāts pirms     (obligāts pirms “beta”
              visiem             publiskās betas     atzīmes noņemšanas
              pakalpojumiem,     palaišanas)         un vecā kanāla
              bet ieteicams)                         slēgšanas)

Katrs novērtējums: pierādījumi + komandas intervija → komisijas lēmums par katru punktu
  Izpildīts / Daļēji izpildīts / Neizpildīts
Kopējais iznākums: Izturēts / Izturēts ar nosacījumiem / Neizturēts (nepieciešams atkārtots novērtējums)

Neizturēšanas izmaksas ≈ nākamā sprinta cikla izmaksas trūkumu novēršanai
                       + kavējums [kanālu nobīdes ietaupījumos](../kanālu-pārslēgšanas-ietaupījumi/),
                         kurus pakalpojuma finansējums bija paredzēts nodrošināt
```

10. punkts (“definēt, kā izskatās panākumi, un publicēt darbības datus”) ir tas, kas baro [izmaksas par darījumu](../izmaksas-uz-darījumu/) un [pakalpojumu standartus un darījumu rādītājus](../pakalpojumu-standarti-un-darījumu-rādītāji/) — standarts uzliek par pienākumu mērīšanu, ne tikai pašu pakalpojumu.

## Aprēķina piemērs

**Pašvaldības mājokļa pieteikumu pakalpojums**: pašvaldības komanda nonāk līdz beta novērtējumam ar pakalpojumu, kas atbilst 11 no 14 punktiem, taču neizpilda 5. punktu (“nodrošināt, ka pakalpojumu var izmantot ikviens”), jo pieteikuma iesniedzējiem bez interneta pieejas nav asistētās digitālās ceļa, un neizpilda 9. punktu, jo personas dati tiek ierakstīti žurnālā nešifrētā tekstā pieteikuma kļūdu izsekošanā.

```
Tiešās neizturēšanas izmaksas:
  Atkārtotā novērtējuma laiks: 6–8 nedēļu gaidīšana uz nākamo pieejamo komisiju
  Trūkumu novēršanas sprints: 2 izstrādātāji × 3 nedēļas × £550/dienā ≈ £34 650
  Asistētā digitālā kanāla izstrāde: 1 pētnieks × 2 nedēļas ≈ £5 000

Kavējuma izmaksas: bija prognozēts, ka pakalpojums 40 % no 18 000 mājokļa
pieprasījumu gadā novirzīs no tālruņa zvaniem par £8,50 uz digitāliem
darījumiem par £0,20
  = 7 200 × (£8,50 − £0,20) = £59 760 gadā neiegūti, proporcionāli
    ~2 mēnešu kavējumam ≈ £9 960

Neizturētā novērtējuma kopējās izmaksas ≈ £49 610
```

Aprēķina jēga nav precizitātē, bet tajā, ka neizturētam novērtējumam ir reāla, aprēķināma cena — tieši tāpēc barjerai ir “zobi”.

## Saikne ar programmatūras inženieriju

Inženieriem standarts ir tikpat daudz arhitektūras un piegādes pārbaudes saraksts, cik politikas dokuments: 11. punkts (“izvēlēties piemērotus rīkus un tehnoloģijas”) un 12. punkts (“padarīt jauno pirmkodu atvērtu”) ir tieši inženiertehniski lēmumi, bet 14. punkts (“nodrošināt uzticamu pakalpojumu”) prasa tos pašus pakalpojuma līmeņa mērķus (SLO) un incidentu procesus, kādi vajadzīgi jebkurai ražošanas sistēmai. Tas ir vienojošais ietvars šai tēmu grupai — [kanālu nobīdes ietaupījumi](../kanālu-pārslēgšanas-ietaupījumi/) un [izmaksas par darījumu](../izmaksas-uz-darījumu/) ir tas, ko standarts cenšas finansiāli aizsargāt, [digitālā iekļautība](../digitālā-iekļaušana/) ir tas, ko garantē 5. punkts, bet [valdība kā platforma](../valdība-kā-platforma/) komponenti (GOV.UK Notify, Pay, One Login) 13. punktu (“izmantot atvērtos standartus, kopējos komponentus un modeļus un sniegt tajos ieguldījumu”) lielā mērā izpilda pēc noklusējuma. Par to, kā punkts par “piemērotiem rīkiem” izpaužas iepirkuma lēmumos, skatiet arī [veidot vai pirkt valdībā](../veidot-vai-pirkt-valdībā/).

## Biežākās kļūdas

- **Novērtējuma uztveršana kā formālas atbilstības atzīmes palaišanas dienā**: komandas, kas 14 punktus pirmoreiz izlasa nedēļu pirms beta novērtējuma, paredzami neiztur; standartam jāveido lēmumi jau kopš atklāšanas posma, nevis jāauditē tie pēc fakta.
- **Prototipa, nevis pakalpojuma novērtēšana**: spīdīga demonstrācija var izturēt pārbaudi, ko neizturētu darbojošā, asistēto digitālo iekļautību nodrošinošā un incidentus pārvaldošā pakalpojuma versija — vērtētājiem šī plaisa jāpārbauda, taču pašapliecinātu mazāku pakalpojumu gadījumā to bieži izlaiž.
- **Nav atkārtota novērtējuma pirms mērogošanas**: pakalpojums, kas novērtēts pie 5 % ieviešanas, ne automātiski paliek atbilstošs pie 100 % — mainās slodze, kļūmju radītais pieprasījums (failure demand) un malējo gadījumu lietotāji.
- **Pakalpojumu standarta jaukšana ar dizaina sistēmu**: GOV.UK dizaina sistēmas komponenti izpilda dažus punktus (konsekvence, pieejamība), bet standarts aptver arī komandas struktūru, agrīlo praksi un datu ētiku — labi noformēts pakalpojums joprojām var neizturēt 2., 6. vai 9. punktu.

## Avoti

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
