# Labklājības vērtēšana (WELLBY)

Labklājības vērtēšana novērtē politikas ietekmi tieši dzīves apmierinātības izteiksmē, kā vienību izmantojot WELLBY (labklājības koriģēto dzīves gadu) — viens WELLBY ir viena punkta izmaiņa 0–10 dzīves apmierinātības skalā, kas saglabājas vienu gadu. Tā ir HM Treasury oficiāli apstiprināta alternatīva katra ieguvuma izteikšanai naudā ar gatavību maksāt.

## Kāpēc tas ir svarīgi

HM Treasury "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) formāli ieviesa subjektīvās labklājības datus centrālās valdības novērtēšanā, dodot analītiķiem ceļu novērtēt iznākumus — sociālo saikni, garīgo veselību, drošību, pilsonisko līdzdalību —, ko [deklarēto preferenču](../deklarēto-preferenču-vērtēšana/) un [atklāto preferenču](../atklāto-preferenču-vērtēšana/) metodēm ir grūti pārliecinoši novērtēt, jo cilvēki bieži slikti prognozē, cik lielā mērā prece faktiski ietekmēs viņu apmierinātību ar dzīvi. Norādījumi, kas izstrādāti kopā ar What Works Centre for Wellbeing, nosaka ieteicamo naudas vērtību uz WELLBY — £13 000 (2021. gada cenās, periodiski pārskatāma) —, atvasinātu no attiecības, kas novērota lielās labklājības aptaujās (galvenokārt ONS Annual Population Survey, kas kopš 2011. gada uzdod četrus ONS4 labklājības jautājumus), starp ienākumiem un dzīves apmierinātību, dodot analītiķiem pārrēķina likmi atpakaļ mārciņās, kad vajadzīgs naudā izteikts salīdzinājums ar citiem Green Book novērtējumiem.

Metode ir svarīga, jo apgriež ierasto vērtēšanas loģiku: tā vietā, lai jautātu, cik cilvēki maksātu par iznākumu (deklarētās preferences) vai secinātu vērtību no saistīta tirgus darījuma (atklātās preferences), tā mēra iznākuma ietekmi uz ziņoto dzīves apmierinātību tieši, apejot plaisu starp to, ko cilvēki saka, ka vēlas, un to, kas viņus patiešām dara laimīgākus. Tas ir arī tās galvenais ierobežojums — paša ziņoto dzīves apmierinātību ietekmē pielāgošanās un ietvarošanas efekti, kas rūpīgam praktiķim jākontrolē.

## Matemātika

```
WELLBY = 1 dzīves apmierinātības punkts (0–10 skala), kas saglabājas 1 cilvēkam 1 gadu

Politikas kopējie WELLBY =
  Σ (dzīves apmierinātības vērtējuma izmaiņa) × (skarto cilvēku skaits)
    × (ilgums gados, diskontēts ar sociālo diskonta likmi)

Naudā izteikta vērtība = kopējie WELLBY × vērtība uz WELLBY
  (HM Treasury ieteiktā vērtība: £13 000 uz WELLBY, 2021. gada cenās,
   periodiski pārskatāma — pirms lietošanas pārbaudiet aktuālos norādījumus)
```

Tas atšķiras no veselības ekonomikas [labklājības koriģētā dzīves gada](../labklājības-koriģētie-dzīves-gadi/), kas parasti ir noenkurots pie ar veselību saistītas dzīves kvalitātes skalām (EQ-5D un līdzīgām), nevis vispārējas dzīves apmierinātības; abi ir saistīti, bet nav savstarpēji aizstājami, un Green Book novērtējumiem jābūt skaidriem, kura skala un izvilināšanas metode ir ziņotā WELLBY skaitļa pamatā.

## Aprēķina piemērs

**Pašvaldība**: pašvaldība vada kopienas draudzēšanās shēmu izolētiem vecākiem iedzīvotājiem, apkalpojot 400 cilvēkus. Pirms/pēc labklājības aptauja ar ONS4 dzīves apmierinātības jautājumu rāda, ka dalībnieku vidējais vērtējums pieaug no 5,8 uz 6,5 — 0,7 punktu pieaugums —, kas saglabājas programmas 2 gadu finansētajā ilgumā.

```
Radītie WELLBY = 400 cilvēki × 0,7 punkti × 2 gadi = 560 WELLBY
Naudā izteikta vērtība = 560 × £13 000 = £7,28 milj.
Programmas izmaksas = £450 000 par 2 gadiem

Ieguvumu un izmaksu attiecība ≈ £7,28 milj. / £0,45 milj. ≈ 16:1
```

Tik augstai attiecībai jāizraisa rūpīga pārbaude, nevis svinības — Green Book labklājības norādījumi skaidri brīdina neuzticēties nelielu izlašu paša ziņotiem pieaugumiem bez atlases efektu pārbaudes (vai shēmai pievienojās tikai visvairāk sabiedriskie, visticamāk uzlabošanās iedzīvotāji?) un bez salīdzināšanas grupas; labi izstrādāts novērtējums atskaitītu kontrfaktisko izmaiņu, kas novērota nedalībniekiem, skatiet [kontrfaktiskā analīze](../kontrfaktiskā-analīze/).

**Nacionālā valdība**: divu nodarbinātības programmu salīdzināšana ar WELLBY, nevis tikai ar ienākumiem, ietver to, ka bezdarbam ir labklājības izmaksa papildus zaudētajiem ienākumiem — Apvienotās Karalistes labklājības pētījumi konsekventi atklāj, ka bezdarbs samazina dzīves apmierinātību vairāk, nekā paredzētu tikai ienākumu zaudējums, jo zūd struktūra, mērķis un sociālie kontakti. Programma, kas novērtēta tikai pēc ienākumu pieauguma, nenovērtētu savu vērtību salīdzinājumā ar tādu, kas papildus novērtēta ar WELLBY.

## Saikne ar programmatūras inženieriju

Labklājības vērtēšana reti nonāk pie inženieru komandām tieši, taču tā veido to, kā tiek definēti „panākumi" sociālā sektora un publisko pakalpojumu produktiem — digitālai draudzēšanās platformai, garīgās veselības triāžas rīkam vai kopienas platformai izolētiem iedzīvotājiem jārēķinās, ka tās ietekme galu galā tiks mērīta šādi, kas nozīmē, ka produkta analītikai jāfiksē, *kuri* tiek sasniegti un *cik ilgi*, ne tikai lietojuma skaits. Iestrādājiet labklājības aptaujas instrumentāciju (ONS4 vai pārbaudītus ekvivalentus) pakalpojuma novērtēšanā no paša sākuma, nevis piestipriniet to atpakaļ; labklājības bāzes līmeņa pievienošana pēc pakalpojuma sākuma pilnībā zaudē pirms/pēc salīdzinājumu. Skatiet [iznākumi un izlaide](../rezultāti-pret-izlaidi/) un [ietekmes izvērtēšanas metodes](../ietekmes-izvērtēšanas-metodes/).

## Biežākās kļūdas

- **Nav kontrfaktiskā scenārija vai salīdzināšanas grupas.** Pirms/pēc labklājības pieaugums bez kontroles tam, kas būtu noticis tāpat, pārspīlē programmas efektu; skatiet [kontrfaktiskā analīze](../kontrfaktiskā-analīze/) un [papildinātība un inerces efekts](../papildinātība-un-inerces-efekts/).
- **Mazas, pašatlasītas izlases.** Labklājības aptaujas programmas dalībniekiem, kas pieteicās brīvprātīgi, ir pakļautas atlases novirzei — cilvēki, kas pievienojās un palika, ticami jau bija uz augšupejošas trajektorijas.
- **£ uz WELLBY pārrēķina uzskatīšana par precīzu.** Naudā izteiktā vērtība ir politikas konvencija, kas atvasināta no ienākumu–labklājības regresijām, nevis tirgus cena; izmantojiet to salīdzināmībai starp Green Book novērtējumiem, nevis kā apgalvojumu par to, „cik vērta" ir labklājība.
- **WELLBY sajaukšana ar ar veselību saistītiem QALY.** Abi mēra atšķirīgus konstruktus atšķirīgās skalās; skatiet [labklājības koriģētie dzīves gadi](../labklājības-koriģētie-dzīves-gadi/) par veselības ekonomikas variantu un nevidējojiet abus kopā.

## Avoti

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
