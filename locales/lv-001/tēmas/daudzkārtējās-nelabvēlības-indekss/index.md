# Daudzkārtējās nelabvēlības indekss (IMD)

IMD ir oficiālais relatīvās nelabvēlības mērs mazām teritorijām Anglijā, kas sarindo visus 32 844 valsts zemākā slāņa pārraudzības apgabalus (Lower-layer Super Output Areas, LSOA, katrā aptuveni 1 500 iedzīvotāju) no 1 (visnelabvēlīgākais) līdz 32 844 (vismazāk nelabvēlīgais). To publicē tagadējā Mājokļu, kopienu un vietējās pārvaldes ministrija (MHCLG, agrāk MHCLG/DCLG), pēdējo reizi kā English Indices of Deprivation 2019, un tas tieši virza centrālās valdības finansējumu, sabiedrības veselības prioritizāciju un tiesības uz desmitiem vietējo shēmu.

## Kāpēc tas ir svarīgi

Nelabvēlība nav viena lieta — apkaime var būt ienākumu ziņā nabadzīga, bet droša, vai ienākumu ziņā pietiekama, bet ar sliktiem veselības rezultātiem un sliktiem mājokļiem. IMD priekšteči (kas sniedzas līdz 1970. gadu Department of the Environment nelabvēlības rādītājiem) attīstījās par mūsdienu septiņu jomu modeli tieši tāpēc, ka vienas rādītāja mērķēšana (piemēram, tikai bezdarba līmenis) regulāri palaida garām apgabalus, kas nelabvēlīgi citādi. IMD 2019 apvieno ienākumus, nodarbinātību, izglītību, veselību, noziedzību, šķēršļus mājoklim un pakalpojumiem, kā arī dzīves vidi vienā saliktā rangā uz LSOA, katru jomu veidojot no sava rādītāju groza un sverot pēc MHCLG metodoloģijas. Tā kā tas darbojas mazu apgabalu (LSOA), nevis vietējās pašvaldības līmenī, tas atklāj nelabvēlības kabatas, kas slēptas citādi pārtikušos apgabalos — iemesls, kāpēc tieši IMD, nevis vidējie vietējās pašvaldības ienākumi, ir tas, uz ko faktiski balstās NHS England, Department for Education skolēnu prēmija (pupil premium) un desmitiem vietējo pašvaldību finansēšanas formulu. Programmatūrai, kas nosaka atbilstību, prioritizē komunikāciju vai ziņo ietekmi pa apgabaliem Anglijā, IMD deciļi vai rangs jāuztver kā pirmšķirīga ievade, nevis pēcpārdomas — un ja programma apzināti mērķē uz nelabvēlīgākajiem apgabaliem, tās novērtējumā jāpiemēro [sadales svēršana](../sadales-svēršana/), kas atbilst šai mērķēšanai, nevis jāvērtē ieguvuma mārciņa vienādi neatkarīgi no tā, kur tā nonāk.

## Matemātika

```
7 jomas ar svariem:
  Ienākumi                                    22,5 %
  Nodarbinātība                               22,5 %
  Izglītība, prasmes un apmācība              13,5 %
  Veselības nelabvēlība un invaliditāte       13,5 %
  Noziedzība                                   9,3 %
  Šķēršļi mājoklim un pakalpojumiem            9,3 %
  Dzīves vide                                  9,3 %

Katras jomas vērtējums: rādītāji standartizēti (sarindoti, pēc tam
pārveidoti uz normālo sadalījumu) un apvienoti ar eksponenciālu
pārveidi, lai augstu nelabvēlību kādā vienā rādītājā nevarētu pilnībā
kompensēt zema nelabvēlība citos šīs jomas rādītājos.

IMD saliktais vērtējums (LSOA) = Σ (jomas vērtējums × jomas svars)
Sarindot LSOA pēc salikta vērtējuma → 1 (visnelabvēlīgākais) līdz 32 844 (vismazāk nelabvēlīgais)
Deciļi: rangs ÷ 3 284 (aptuveni), decilis 1 = nelabvēlīgākie 10 % LSOA
```

## Aprēķina piemērs

**LSOA saliktais vērtējums**, izmantojot ilustratīvus standartizētus jomu vērtējumus (0 = nav nelabvēlības signāla, augstāks = nelabvēlīgāks):

```
Ienākumi             0,35 × 0,225 = 0,07875
Nodarbinātība        0,30 × 0,225 = 0,06750
Izglītība            0,20 × 0,135 = 0,02700
Veselība             0,15 × 0,135 = 0,02025
Noziedzība           0,10 × 0,093 = 0,00930
Šķēršļi mājoklim     0,05 × 0,093 = 0,00465
Dzīves vide          0,08 × 0,093 = 0,00744

Saliktais vērtējums = 0,07875 + 0,06750 + 0,02700 + 0,02025
                    + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Šis saliktais vērtējums pēc tam tiek sarindots pret visu 32 844 LSOA vērtējumiem. Ja tas LSOA novieto 2 950. rangā, tas iekrīt 1. decilī (2 950 ÷ 3 284 ≈ 0,9, t. i., Anglijas nelabvēlīgāko 10 % apkaimju ietvaros) — kas daudzām finansēšanas formulām ir slieksnis, kas atver tiesības, neatkarīgi no tā, kā apkārtējā vietējā pašvaldība vērtējama vidēji.

## Saikne ar programmatūras inženieriju

- Jebkurš pakalpojums, kas ģeokodē lietotājus līdz pasta indeksam vai LSOA, var savienot publicēto IMD uzmeklēšanas tabulu (bezmaksas versionēts CSV no MHCLG), lai pievienotu nelabvēlības decili kā kovariātu — komunikācijas mērķēšanai, lietu slodzes prioritizēšanai vai iznākumu ziņošanai pa nelabvēlības joslām, nevācot jaunus personas datus.
- IMD decilis ir standarta taisnīguma pārbaude publiskajiem digitālajiem pakalpojumiem: pakalpojuma izmantošanas, atkrišanas vai apmierinātības šķērsanalīze pa IMD deciļiem atklāj piekļuves plaisas, ko apkopots rādītājs slēpj — skatiet [digitālo iekļautību](../digitālā-iekļaušana/) un [iedzīvotāju apmierinātības rādītājus](../iedzīvotāju-apmierinātības-rādītāji/).
- Tā kā IMD rangs ir relatīvs (tas vienmēr aizņem fiksētu rangu kopu visā Anglijā), tas nevar parādīt, vai nelabvēlība valstī laika gaitā pieaug vai samazinās — tikai to, kuri apgabali kuru vietu ieņem savā starpā šajā izdevumā; neveidojiet absolūto tendenču informācijas paneļus uz neapstrādāta IMD ranga vien.

## Biežākās kļūdas

- **IMD rangu salīdzināšana starp izdevumiem (2015 pret 2019) kā laika tendence** — pamatā esošie rādītāji, ģeogrāfijas un metodoloģija starp izdevumiem mainās; MHCLG skaidri iesaka neizmantot ranga izmaiņas kā pierādījumu tam, ka apgabals kļuvis vairāk vai mazāk nelabvēlīgs.
- **LSOA līmeņa IMD piemērošana indivīdiem** — 1. decila LSOA joprojām satur nenelabvēlīgas mājsaimniecības, un 10. decila LSOA joprojām satur nelabvēlīgas; IMD apraksta apgabalus, nevis cilvēkus, un tā izmantošana kā individuālas atbilstības aizstājējs nepareizi klasificē abos virzienos.
- **Jomu līmeņa detaļu ignorēšana par labu salikta ranga** — divi LSOA ar identiskiem saliktiem vērtējumiem var būt ar pilnīgi atšķirīgiem jomu profiliem (viens veselības ziņā nelabvēlīgs, otrs noziedzības ziņā); mērķēšanas shēmai, kas vērsta uz vienu problēmu, jāizmanto attiecīgās jomas vērtējums, nevis sajauktais saliktais.

## Avoti

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
