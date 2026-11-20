# Grantu iznākumu ziņošana (IRIS+)

Grantu iznākumu ziņošana ir prakse, kad grantu saņēmēji finansētājiem ziņo standartizētus, salīdzināmus iznākumu rādītājus — pretstatā tam, ka katrs finansētājs izdomā savu speciālu ziņošanas veidni. IRIS+, ko uztur Global Impact Investing Network (GIIN), ir visplašāk pieņemtais šāds standarts: iepriekš definētu sociālo, vides un finanšu snieguma rādītāju katalogs, ko ietekmes investori un arvien biežāk arī grantu piešķīrēji fondi pieprasa vai iesaka grantu saņēmējiem izmantot.

## Kāpēc tas ir svarīgi

Pirms standartizētas ziņošanas katrs fonds prasīja grantu saņēmējiem citu rādītāju kopumu citā formātā, un vidēja lieluma labdarības organizācija ar desmit finansētājiem varēja īstenot desmit paralēlus ziņošanas procesus pārklājošam darbam — labi dokumentēts ziņošanas sloga cēlonis, ko grantu iznākumu standartizācija ir paredzēta samazināt. IRIS+ risina šo problēmu, dodot finansētājiem un grantu saņēmējiem kopīgu vārdnīcu: pamata rādītāju kopas (Core Metrics Sets), grupētas pa tēmām (piem., pieejami mājokļi, tīras enerģijas pieejamība, finanšu iekļaušana), katrs rādītājs definēts pietiekami precīzi, lai “radītās darba vietas” vai “apkalpotās mājsaimniecības” nozīmētu to pašu neatkarīgi no tā, kas ziņo, un saskaņots ar ANO Ilgtspējīgas attīstības mērķiem (SDG), lai finansētājs varētu apkopot grantu saņēmēju līmeņa datus līdz portfeļa līmeņa SDG stāstam. GIIN ziņo, ka IRIS rādītājus izmanto aptuveni puse ietekmes investoru un lielais vairums fondu pārvaldītāju, banku un attīstības finanšu iestāžu, kas darbojas šajā jomā.

Standartizācija vissvarīgākā ir tur, kur tā mijiedarbojas ar [iznākumiem pret izlaidi](../rezultāti-pret-izlaidi/): IRIS+ virza ziņošanu uz definētiem iznākuma un ietekmes rādītājiem, nevis uz to, ko grantu saņēmēja esošā lietu pārvaldības sistēma gadās reģistrēt, un tas ir tieši tas trūkums, ko apraksta [izmaksas uz iznākumu](../izmaksas-uz-iznākumu/) pretstatā [izmaksām uz labuma guvēju](../izmaksas-uz-saņēmēju/).

## Matemātika

Grantu iznākumu ziņošana ir ietvars un process, nevis formula:

```
1. Finansētājs izvēlas granta tēmai atbilstošu pamata rādītāju kopu
   (piem., IRIS+ “Finanšu iekļaušana” vai “Ilgtspējīga lauksaimniecība”)
2. Katram rādītājam ir fiksēta definīcija, mērvienība un aprēķina metode,
   ko publicējis GIIN — nevis izdomāta katram finansētājam atsevišķi
3. Grantu saņēmējs ziņo pret tām pašām rādītāju definīcijām visiem saviem
   finansētājiem, kas izmanto šo standartu, samazinot dublējošos ziņošanas pūliņus
4. Finansētājs apkopo grantu saņēmēju līmeņa rādītājus portfeļa līmeņa ziņošanā,
   salīdzināmā gadu no gada un starp grantu saņēmējiem, izmantojot to pašu rādītāju
```

Efektivitātes ieguvums ir kombinatorisks: N finansētāju × M grantu saņēmēju standartizēšana uz vienu kopīgu vārdnīcu pārvērš N×M speciālas ziņošanas attiecības aptuveni N+M kartējumos pret vienu standartu.

## Aprēķina piemērs

**Grantu saņēmējs ar trim finansētājiem pirms standartizācijas**: ziņo “apkalpotie cilvēki” 1. finansētājam, izmantojot galvu skaita definīciju, “sasniegtie labuma guvēji” 2. finansētājam, izmantojot mājsaimniecības definīciju, un “ietekmētie indivīdi” 3. finansētājam, izmantojot pakalpojuma epizodes definīciju (tātad viens cilvēks, kas apmeklē divreiz, tiek skaitīts divreiz). Trīs ziņojumi, trīs skaitļi, neviens nav salīdzināms, un neviens nav salīdzināms ar cita grantu saņēmēja skaitļiem pat viena finansētāja portfelī.

**Tas pats grantu saņēmējs ar IRIS+**: ziņo pret definētu IRIS+ sasniegto indivīdu rādītāju kopā ar definētu iznākuma rādītāju no attiecīgās pamata rādītāju kopas, abiem izmantojot GIIN publicēto aprēķina metodoloģiju. Visi trīs finansētāji tagad saņem to pašu skaitli, aprēķinātu vienādi, un var salīdzināt šī grantu saņēmēja izmaksas uz IRIS+ definēto vienību ar citiem savā portfelī, izmantojot identisku rādītāju — ziņošanas infrastruktūras mērogā ekvivalents kopīgai [vienības izmaksu datubāzei](../vienības-izmaksu-datubāzes/).

## Saikne ar programmatūras inženieriju

Grantu pārvaldības platformām IRIS+ rādītāju identifikatori jāuztver kā ārējā atslēga, nevis brīvs teksts: publicētā rādītāja koda glabāšana blakus grantu saņēmēja ziņotajai vērtībai (nevis lokāli izdomāts lauks ar nosaukumu “labuma guvēji”) ir tas, kas vēlāk ļauj apkopot starp finansētājiem un portfeļiem bez datu tīrīšanas projekta. Ja platformai jāatbalsta finansētāji, kas nav pieņēmuši IRIS+, pragmatisks dizains ir ļaut vietējo rādītāju kartēt uz tuvāko IRIS+ definīciju, nevis uzreiz piespiest katru finansētāju uz standartu — salīdzināmība uzlabojas pakāpeniski, jo vairāk grafa tiek kartēts uz kopīgiem identifikatoriem. Radniecīgo tēmu [izmaksas uz iznākumu](../izmaksas-uz-iznākumu/) skatiet, lai uzzinātu, ko savāktie ziņotie skaitļi jāizmanto aprēķināt.

## Biežākās kļūdas

- **IRIS+ ieviešanas uztvere kā automātiska salīdzināmība.** Divi grantu saņēmēji var abi ziņot pret to pašu IRIS+ rādītāju un tomēr nebūt salīdzināmi, ja atšķiras to pamatā esošo datu kvalitāte vai kontrafaktiskie pieņēmumi; standarts nosaka definīcijas, nevis mērīšanas stingrību.
- **Finansētāju izdomāti “IRIS saskaņoti” rādītāji.** Rādītājs, kas tikai iedvesmots no IRIS+ valodas, bet nav faktiskā publicētā definīcija, atjauno sadrumstalotību, ko standarts ir paredzēts risināt.
- **Ziņošanas nogurums no pārmērīgas izvēles.** Pieprasot grantu saņēmējam ziņot pret visu pamata rādītāju kopu, kad lēmumiem ir svarīgi tikai divi vai trīs rādītāji, slogs tiek atjaunots standartizētā iesaiņojumā.
- **Nekāda iznākuma rādītāja.** IRIS+ iekļauj daudzus tīri izlaides rādītājus (piem., apkalpoto cilvēku skaitu); izvēloties tikai tos un nevienu iznākuma līmeņa rādītāju, tiek iegūta [izmaksu uz labuma guvēju](../izmaksas-uz-saņēmēju/) veida ziņošana ar iznākumu ziņošanas etiķeti.

## Avoti

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
