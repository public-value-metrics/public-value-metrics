# Mudell loġiku

Mudell loġiku huwa dijagramma lineari li torbot l-inputs, l-attivitajiet, l-outputs, l-eżiti u l-impatt ta' programm, li tinqara mix-xellug lejn il-lemin bħala katina ta' responsabbiltà: jidħlu r-riżorsi, isiru l-attivitajiet, jiġu prodotti l-outputs, jinbidlu l-affarijiet għall-benefiċjarji (eżiti), u l-impatt jinġabar fuq skala usa' jew fuq żmien itwal. Hija l-istruttura standard li l-finanzjaturi u l-awdituri jistennew li programm jirrapporta fuqha, u hija l-parti li tħares 'il quddiem mat-[teorija tal-bidla](../teorija-tal-bidla/), li titfassal lura mill-għan.

## Għaliex hu importanti

Il-Magenta Book tal-HM Treasury tispeċifika l-mudell loġiku bħala element meħtieġ fid-disinn tal-evalwazzjoni ta' programm, u finanzjaturi bħall-National Lottery Community Fund jibnu l-formoli tal-applikazzjoni u tar-rappurtar tagħhom madwar eżattament din il-katina ta' ħames kolonni. Il-valur tiegħu huwa li jġiegħel programm jgħid, f'dijagramma waħda, x'se jonfoq, x'se jagħmel bih, x'se jipproduċi u, b'mod kritiku, x'suppost jinbidel b'riżultat ta' dan, b'livell ta' speċifiċità li paragrafu ta' prosa spiss jaħbi. Mudell loġiku b'kolonni tal-inputs u tal-attivitajiet mimlijin imma b'kolonna tal-eżiti vojta jew vaga jidher mill-ewwel, u dan huwa eżattament għaliex il-finanzjaturi jitolbu wieħed.

## Il-matematika

Il-mudell loġiku huwa katina strutturali aktar milli formula:

```
Inputs          Attivitajiet      Outputs             Eżiti                 Impatt
(riżorsi        (x'isir           (prodotti diretti,   (bidla għall-         (bidla ffit-tul,
 impenjati)      bihom)            li jingħaddu)        benefiċjarji)         fil-livell tal-popolazzjoni
                                                                              jew sistemika)
```

Kull kolonna għandha tkun aktar speċifika mill-preċedenti: l-inputs huma dak li tonfoq, l-attivitajiet huma dak li tagħmel, l-outputs huma dak li jittwassal irrispettivament mill-effett, l-eżiti huma dak li jinbidel b'riżultat — id-distinzjoni titqies bis-sħiħ f'[eżiti vs outputs](../eżiti-vs-outputs/) — u l-impatt huwa l-bidla dejjiema fit-tul, li ta' spiss tista' tiġi attribwita biss parzjalment.

## Eżempju prattiku

**Awtorità lokali (servizz diġitali ta' pariri dwar id-dejn)**:

- Inputs: baġit annwali ta' £180,000, 4.0 FTE konsulenti, sistema tal-ġestjoni tal-każijiet.
- Attivitajiet: sessjonijiet ta' outreach, appuntamenti individwali ta' pariri dwar id-dejn.
- Outputs: 900 appuntament mogħtija; 750 pjan dwar id-dejn u l-benefiċċji maħruġa.
- Eżiti: mill-klijenti li laħqu s-segwitu wara 6 xhur, 60% (450 minn 750) jirrappurtaw arretrati mnaqqsa, b'medja ta' tnaqqis ta' £1,200 għal kull klijent — £540,000 tnaqqis aggregat tal-arretrati.
- Impatt: tnaqqis li jista' jitkejjel fl-applikazzjonijiet għal djar mill-bażi tal-klijenti tas-servizz fuq sentejn, attribwibbli biss parzjalment għal dan is-servizz flimkien ma' interventi oħra (ara l-[analiżi kontrofattwali](../analiżi-kontrofattwali/)).

**Karità (sħubija ta' referenzi għal bank tal-ikel)**:

- Inputs: £45,000, koordinatur 1.5 FTE, ftehimiet ta' sħubija ma' 12-il aġenzija ta' referenza.
- Attivitajiet: triage tar-referenzi, ippakkjar u distribuzzjoni tal-pakketti.
- Outputs: 5,000 pakkett tal-ikel distribwit lil 1,100 familja.
- Eżiti: 68% tal-familji mistħarrġa (748 minn 1,100) jirrappurtaw sigurtà alimentari mtejba f'telefonata ta' segwitu wara 4 ġimgħat.
- Impatt: kontribut għal domanda mnaqqsa fuq is-servizzi lokali ta' kriżi, ippruvat biss permezz ta' statistika aggregata tal-inħawi, mhux attribwibbli lil din il-karità waħedha.

## Rabta mal-inġinerija tas-software

Il-mudell loġiku huwa kważi mudell tad-data litterali għal sistema ta' eżiti: l-inputs u l-attivitajiet huma data operazzjonali li diġà għandek (nefqa, persunal, logs tas-sessjonijiet); l-outputs huma faċli biex jiġu strumentati għax jingħaddu fil-punt tat-twassil; l-eżiti jeħtieġu ġbir ta' data ta' segwitu ddisinjat apposta (stħarriġiet, rabta ta' data amministrattiva) li ma jeżistix sakemm ma jibnih xi ħadd; l-impatt normalment jeħtieġ data marbuta, longitudinali jew fil-livell tal-popolazzjoni lil hinn mis-sistemi ta' kwalunkwe programm wieħed. L-inġiniera li jibnu għodod tar-rappurtar għandhom jiġbdu lill-kummissjonarji biex jiddefinixxu indikaturi tal-eżiti u tal-impatt fil-ħin tad-disinn, minflok ma jaqgħu fuq dashboard tal-outputs biss għax dak huwa dak li d-data transazzjonali diġà tappoġġa. Ara r-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/) għal metodu li jevalwa b'mod speċifiku l-kolonni tal-eżiti u tal-impatt, u l-[realizzazzjoni tal-benefiċċji](../ir-realizzazzjoni-tal-benefiċċji/) biex tiġi segwita jekk il-kolonna tal-impatt tkunx tassew ġiet imwassla.

## Żbalji komuni

- **Li wieħed jieqaf fl-outputs.** Dashboard li jirrapporta appuntamenti mogħtija jew pakketti distribwiti u jimplika benefiċċju qed jirrapporta attività, mhux riżultati — ara [eżiti vs outputs](../eżiti-vs-outputs/).
- **Ebda rabta kawżali dikjarata bejn il-kolonni.** Mudell loġiku jiddikjara l-katina imma mhux għaliex l-attivitajiet suppost jipproduċu outputs li suppost jipproduċu eżiti; dak ir-raġunament jappartjeni lit-[teorija tal-bidla](../teorija-tal-bidla/), u mudell loġiku mingħajr waħda warajh ma jkunx ittestjat.
- **Li jiġi ttrattat bħala dokument ta' darba għall-offerta.** Mudelli loġiċi prodotti biss biex jissodisfaw applikazzjoni għal finanzjament u qatt ma jiġu aġġornati jieqfu jirriflettu dak li l-programm verament jagħmel.
- **Attribuzzjoni żejda fil-kolonna tal-impatt.** Li titqies bidla fil-livell tal-popolazzjoni bħala kkawżata biss minn programm wieħed, mingħajr kontrofattwali, tkabbar dak li l-evidenza tappoġġa.

## Sorsi

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
