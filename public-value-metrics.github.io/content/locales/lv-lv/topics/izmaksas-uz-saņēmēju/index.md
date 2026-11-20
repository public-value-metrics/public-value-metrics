# Izmaksas uz saņēmēju

Izmaksas uz saņēmēju ir programmas kopējās izmaksas, dalītas ar unikālo cilvēku skaitu, kas saņēmuši pakalpojumu — ikviens, kuram pieskārusies programma, neatkarīgi no tā, vai viņu apstākļi patiešām mainījušies. Tas ir ātrākais efektivitātes skaitlis, ko organizācija var radīt, jo „kam mēs kalpojām" gandrīz vienmēr jau ir lietu pārvaldības sistēmā, bet „kam palīdzēts" parasti nav.

## Kāpēc tas ir svarīgi

Finansētāji nepārtraukti pieprasa izmaksas uz saņēmēju, un pamatotu iemeslu dēļ: tas ir pieejams nekavējoties, salīdzināms starp ļoti atšķirīgu programmu portfeli un godīgs par sasniegto apjomu tādā veidā, kā iznākumu apgalvojumi — kurus pārbaudīt prasa ilgāk un kurus vieglāk pārspīlēt — nav. Apvienotās Karalistes Charities SORP (Statement of Recommended Practice), kas regulē, kā labdarības organizācijas ziņo saskaņā ar FRS 102, prasa, lai pilnvarnieku gada ziņojumi aprakstītu sasniegumus pret mērķiem, taču lielākajai daļai mazāku labdarības organizāciju vadības pārskati joprojām pēc noklusējuma izmanto uz sasniedzamību balstītas vienības izmaksas, jo tās ir lētas izveidot un viegli auditējamas.

Briesmas ir izmaksas uz saņēmēju uzskatīt tā, it kā tās atbildētu uz jautājumu, uz kuru tās nevar atbildēt: vai nauda darbojās. Sk. [izmaksas uz iznākumu](../izmaksas-uz-iznākumu/) rādītājam, kas uz to patiešām atbild, un [iznākumi un izlaide](../rezultāti-pret-izlaidi/) pamatā esošajai atšķirībai. Izmaksas uz saņēmēju ir leģitīms šķirošanas un sasniedzamības rādītājs — tas stāsta finansētājam, cik tālu nauda sniedzas —, taču zemas izmaksas uz saņēmēju var nozīmēt vai nu patiesu efektivitāti, vai pakalpojumu tik seklu, ka tas neko nemaina.

## Matemātika

```
Izmaksas uz saņēmēju = programmas kopējās izmaksas / apkalpoto unikālo cilvēku skaits

Pretstats:
Izmaksas uz iznākumu = programmas kopējās izmaksas / cilvēku skaits, kas sasniedz definēto iznākumu

Izmaksas uz saņēmēju vienmēr ir ≤ izmaksām uz iznākumu, jo iznākuma populācija ir saņēmēju
populācijas apakškopa (bieži neliela).
```

## Aprēķina piemērs

**Pārtikas banka, tas pats gads kā izmaksu uz iznākumu piemērā**:

- Programmas kopējās izmaksas: £450 000
- Apkalpotās unikālās mājsaimniecības (trīs un vairāk pārtikas pakas): 1 800

```
Izmaksas uz saņēmēju = £450 000 / 1 800 = £250 uz apkalpoto mājsaimniecību
```

Salīdziniet abus rādītājus blakus:

| Rādītājs | Saucējs | Rezultāts |
|---|---|---|
| Izmaksas uz saņēmēju | 1 800 apkalpotās mājsaimniecības | £250 |
| Izmaksas uz iznākumu | 630 mājsaimniecības, kas sasniedz pārtikas drošību | £714 |

Finansētājs, kas redz tikai £250, var secināt, ka tā ir ļoti efektīva labdarības organizācija. Finansētājs, kas redz abus skaitļus, var uzdot lietderīgāku jautājumu: vai plaisa starp sasniedzamību (1 800) un iznākumu (630) ir datu vākšanas plaisa, dizaina plaisa vai godīgs atspoguļojums tam, cik grūti pārtikas drošību sasniegt tikai ar pārtikas palīdzību?

**Darba apmācības labdarības organizācija, ilustratīvi**: izmaksas uz saņēmēju (reģistrēts) = £2 000; izmaksas uz iznākumu (ilgstoša nodarbinātība 6 mēnešos) = £11 000, jo tikai 18 % reģistrēto pabeidz programmu un atrod ilgstošu darbu. Šo divu skaitļu atšķirība piecas reizes ir izplatīta visur, kur pabeigšanas vai noturības līmeņi ir zemi — apmācības labdarība un pārtikas banka šeit strukturāli ir identiskas.

## Saikne ar programmatūras inženieriju

Izmaksas uz saņēmēju ir noklusējuma rādītājs bezpeļņas programmatūrā, jo tas ir rādītājs, kas rodas no saņēmēja ieraksta bez papildu darba: izveido lietu, reģistrē pakalpojumu, saskaita rindas. Sistēmas veidošana, kas atbalsta arī izmaksas uz iznākumu, nozīmē apzināti pievienot otru pirmās šķiras entītiju — iznākuma notikumu, datētu un definētu neatkarīgi no pakalpojuma sniegšanas — un pretoties kārdinājumam ļaut „lietas slēgšanai" aizstāt „iznākums sasniegts". Nosakot grantu pārvaldības vai CRM platformas tvērumu, jautājiet, kuru no abiem rādītājiem katrs informācijas panelis patiesībā rāda, un attiecīgi to marķējiet; to sajaukšana vienā „ietekmes" flīzē ir viens no biežākajiem programmatūras līmeņa cēloņiem tālāk minētajām kļūdām. Sk. [vienības izmaksu datubāzes](../vienības-izmaksu-datubāzes/), lai salīdzinātu jebkuru rādītāju, kad tas pareizi marķēts.

## Biežākās kļūdas

- **Izmaksu uz saņēmēju uzrādīšana kā ietekme.** Tās mēra sasniedzamību, nevis izmaiņas. Marķējiet informācijas panelus un atskaites „izmaksas uz apkalpoto cilvēku", nevis „izmaksas uz cilvēku, kam palīdzēts".
- **Dubultā uzskaite starp programmām.** Cilvēks, kas no tās pašas labdarības organizācijas saņem gan pārtikas pakas, gan parādu konsultācijas, ir viens saņēmējs, nevis divi, ja saucējam jāapraksta unikālā sasniedzamība; izlemiet un dokumentējiet, kāda konvencija tiek lietota.
- **Zemāka skaitļa uzskatīšana par vienmēr labāku.** Atvērto durvju pusdienu klubs vienmēr uzvarēs intensīvu lietu pārvaldības pakalpojumu pēc izmaksām uz saņēmēju, jo viegli pieskarties kādam izmaksā mazāk. Tas neko nesaka par to, kurš rada noturīgākas pārmaiņas uz mārciņu.
- **Klusa saucēju maiņa starp atskaitēm.** Izmaksas uz saņēmēju, kas vienā gada ziņojumā minētas pret „reģistrētajiem" un nākamajā pret „pabeigušajiem", nav salīdzināmas gadu no gada; norādiet saucēju katru reizi.

## Avoti

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
