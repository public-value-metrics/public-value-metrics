# Starppaaudžu taisnīgums un ilgtspējas diskontēšana

Nākotnes izmaksu un ieguvumu diskontēšana atpakaļ uz pašreizējo vērtību ir standarta prakse publiskajā novērtēšanā — skatiet [sociālo diskonta likmi](../sociālā-diskonta-likme/) —, taču jebkura pozitīva diskonta likme, saliktā pa desmitgadēm vai gadsimtiem, saraujas tālu nākotni līdz nullei šodienas izteiksmē. Lēmumiem ar sekām gadsimtu vai vairāk uz priekšu — klimata pārmaiņas, kodolatkritumi, bioloģiskās daudzveidības zudums, pensiju ilgtspēja — šis matemātiskais fakts kļūst par ētisku: standarta diskontēšana var likt katastrofālam kaitējumam nākamajām paaudzēm pašreizējās vērtības izteiksmē šķist tikko vērtam novēršanas.

## Kāpēc tas ir svarīgi

Ramsija vienādojums, ko 1928. gadā atvasināja Frenks Ramsijs, sadala diskonta likmi divās sastāvdaļās: tīrā laika preference (δ, cik daudz mēs vienkārši dodam priekšroku tagadnei pār vēlāku laiku, neatkarīgi no bagātības) un bagātības pieauguma efekts (η×g, cik daudz mēs diskontējam, jo nākamās paaudzes gaidāmi būs bagātākas, tāpēc papildu mārciņa tām nozīmē mazāk). Apvienotās Karalistes Green Book standarta ilgtermiņa diskonta likme ir balstīta uz šo vienādojumu un seko *dilstošam* grafikam, nevis fiksētai likmei — dizains, kas sakņojas Mārtina Veicmana darbā par “gamma diskontēšanu”, kas parāda, ka, kad pati nākotnes diskonta likme ir nenoteikta, nenoteiktības ekvivalentā likme, kas jāpiemēro, matemātiski laika gaitā krītas, jo zemas likmes scenāriji sāk dominēt, jo tālāk skatāties. Stern Review par klimata pārmaiņu ekonomiku (2006), ko vadīja sers Nikolass Sterns, ētisko debati aizveda tālāk: Sterns argumentēja, ka tīrā laika preference jānosaka tuvu nullei (viņš izmantoja δ ≈ 0,1 %, atspoguļojot tikai nelielu civilizācijas beigu katastrofas varbūtību, nevis patiesu priekšrocību tagadnei pār nākotni), radot daudz zemāku efektīvo diskonta likmi nekā parastā Green Book prakse un attiecīgi daudz spēcīgāku mūsdienu pamatojumu klimata rīcībai. Kritiķi (īpaši Viljams Nordhauss) argumentēja, ka Sterna gandrīz nulles likme ir ētiski aizstāvama, bet nesaderīga ar faktisko novēroto uzkrāšanas un ieguldījumu uzvedību. Nesaskaņa nav tehnisks zemsvītras piezīmes jautājums — tas ir vienīgais lielākais iemesls, kāpēc divi vienlīdz stingri ekonomisti var nonākt pie ļoti atšķirīgiem secinājumiem par to, cik daudz pašreizējai paaudzei jāupurē nākotnes labā, un tas ir iemesls, kāpēc programmatūrai, kas atbalsta ilgtermiņa publisko ieguldījumu novērtēšanu, savi diskontēšanas pieņēmumi jāatklāj, nevis jāaprok izklājlapas noklusējumā.

## Matemātika

```
Ramsija vienādojums:   r = δ + η × g

  r = sociālā diskonta likme
  δ = tīrā laika preference (nepacietības likme, neatkarīga no bagātības)
  η = patēriņa robežderīguma elastība (papildu patēriņa dilstošā vērtība,
      cilvēkiem kļūstot bagātākiem)
  g = gaidāmais patēriņa uz iedzīvotāju pieauguma temps

Green Book dilstošais ilgtermiņa grafiks (aptuvens, pašreiz publicētās joslas):
  Gadi 0–30:     3,5 %
  Gadi 31–75:    3,0 %
  Gadi 76–125:   2,5 %
  Gadi 126–200:  2,0 %
  Gadi 201–300:  1,5 %
  Gadi 301+:     1,0 %

Stern Review parametri: δ ≈ 0,1 %, η = 1, g ≈ 1,3 %  → r ≈ 1,4 %
```

## Aprēķina piemērs

**Šodienas vērtība £1 novērsta kaitējuma pēc 100 gadiem** pie trim diskontēšanas režīmiem:

```
Fiksēta Green Book īstermiņa likme (3,5 %, nemainīga 100 gadus):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pensi)

Green Book dilstošais grafiks (3,5 % 1.–30. gadam, 3,0 % 31.–75. gadam,
2,5 % 76.–100. gadam):
  koeficients(1–30)   = 1,035^30  ≈ 2,807
  koeficients(31–75)  = 1,03^45   ≈ 3,782
  koeficients(76–100) = 1,025^25  ≈ 1,854
  kopējais koeficients ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 pensi)

Sterna tipa gandrīz nulles tīrā laika preference (r ≈ 1,4 % fiksēta):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pensi)
```

Tā pati £1 novērsta kaitējuma pēc gadsimta šodien ir vērta 3,2 p, 5,1 p vai 25 p atkarībā tikai no tā, kura diskontēšanas konvencija tiek izmantota — gandrīz astoņkārtējs diapazons, kas nosaka, vai klimata mazināšanas projekts ar augstām sākotnējām izmaksām un atdevi pēc gadsimta vispār pārsniedz pozitīvas NPV latiņu. Tas ir šīs tēmas galvenā brīdinājuma mehānisms: pie jebkuras jēgpilni pozitīvas fiksētas likmes pietiekami tāls nākotnes kaitējums tiek aritmētiski dzēsts no novērtējuma neatkarīgi no tā reālās smaguma pakāpes.

## Saikne ar programmatūras inženieriju

- Jebkuram ilgtermiņa novērtējuma vai biznesa gadījuma rīkam (infrastruktūra, pielāgošanās klimatam, pensiju modelēšana) jāīsteno Green Book *dilstošais* grafiks, nevis viena fiksēta likme — fiksētas likmes noklusējums klusi iebūvē daudz spēcīgāku pretnākotnes aizspriedumu, nekā nosaka pašreizējās Apvienotās Karalistes valdības vadlīnijas.
- Diskonta likmei un horizontam novērtēšanas programmatūrā vienmēr jābūt redzamiem, auditējamiem parametriem, aprēķina jutīgumu pret tiem skaidri parādot (kā iepriekšējā praktiskajā piemērā) — likmes aprakšana konfigurācijas failā uzaicina tieši tādu “slēptu ētisku izvēli”, par ko brīdina Sterna–Nordhausa debates; tas savienojas ar [dabas kapitāla uzskaites](../dabas-kapitāla-uzskaite/) caurskatāmības punktu un ir [sociālās diskonta likmes](../sociālā-diskonta-likme/) tēmas pamatā kopumā.
- Ja programmas ieguvumi ir skaidri starppaaudžu (plūdu aizsardzība, dabas kapitāla atjaunošana, ilgtermiņa digitālā infrastruktūra), [sociālajai izmaksu un ieguvumu analīzei](../sociālā-izmaksu-un-ieguvumu-analīze/) jāziņo rezultāti vismaz pie diviem diskontēšanas pieņēmumiem (Green Book standarts un zemas likmes jutīguma gadījums), nevis viena punkta aplēse, lai lēmumu pieņēmēji redzētu, kā diskonta likmes izvēle vien pārvieto atbildi.

## Biežākās kļūdas

- **Vienas diskontētās NPV uzrādīšana bez jutīguma diapazona** — ņemot vērā, cik daudz diskonta likme vien maina atbildi ilgtermiņa projektiem, vienas likmes NPV būtiski pārvērtē precizitāti; vienmēr ziņojiet diapazonu, kas aptver vismaz Green Book standartu un zemas likmes scenāriju.
- **Īstermiņa fiksētās likmes (3,5 %) piemērošana vairāku gadsimtu novērtējumam** — pati Green Book vadlīnijas nosaka dilstošo grafiku tieši tāpēc, ka fiksētā likme tika atzīta par nepiemērotu pēc aptuveni 30 gadiem; tās tomēr izmantošana nenovērtē ilgtermiņa izmaksas pietiekami.
- **δ (tīrās laika preferences) uztvere kā tīri tehniska parametra** — Sterna gandrīz nulles vērtība un Green Book augstākā netiešā vērtība ir aizstāvamas tikai kā ētiskas nostājas par to, cik lielu svaru tagadne ir parādā nākotnei, nevis empīriski “pareizi” vai “nepareizi” skaitļi; programmatūrai pieņēmums jāpadara redzams, nevis jāuzrāda viens skaitlis kā objektīvi pareizs.

## Avoti

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
