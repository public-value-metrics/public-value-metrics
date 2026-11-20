# Evalwazzjoni tal-Impatt vs Evalwazzjoni tal-Proċess

L-evalwazzjoni tal-impatt tistaqsi jekk programm ikkawżax ir-riżultati maħsuba tiegħu. L-evalwazzjoni tal-proċess tistaqsi jekk il-programm tassew tqassamx kif ġie ddisinjat — lil min, b'liema doża, u b'liema ostakli jew faċilitaturi tul it-triq. Dawn huma mistoqsijiet differenti li jeħtieġu metodi differenti, u l-Magenta Book tat-HM Treasury jittratta l-kummissjonar taż-żewġ evalwazzjonijiet flimkien bħala prattika standard, għax riżultat dgħajjef jew null tal-impatt ma jistax jiġi interpretat waħdu: ma jistax jgħidlek jekk it-teorija sottostanti tal-programm kinitx ħażina, jew jekk teorija tajba sempliċement qatt ma twassalet kif suppost.

## Għaliex hu importanti

L-evalwazzjonijiet tal-gvern iktar minn darba sabu l-ebda effett li jista' jitkejjel minn programm filwaqt li ma kien hemm l-ebda evalwazzjoni tal-proċess biex tispjega għaliex — u ħallew lill-kummissjonarji ma jistgħux jiddistingwu bejn "din l-idea ma taħdimx" (falliment tat-teorija) u "din l-idea qatt ma ġiet ittestjata kif suppost" (falliment tal-implimentazzjoni). Il-gwida tal-Medical Research Council dwar l-evalwazzjoni tal-proċess ta' interventi kumplessi, ippubblikata fil-BMJ fl-2015 u ċċitata ħafna flimkien mal-Magenta Book, iffurmalizzat il-fedeltà, id-doża, u l-firxa bħala l-affarijiet ewlenin li evalwazzjoni tal-proċess trid tkejjel. Il-kummissjonar ta' evalwazzjoni tal-impatt mingħajr evalwazzjoni tal-proċess jirriskja li jitwarrab disinn tal-programm verament tajjeb għax twassal lil nofs il-popolazzjoni maħsuba b'frazzjoni tal-intensità maħsuba — żball li bennej ta' sistemi huwa f'pożizzjoni tajba biex jipprevjeni, għax il-fedeltà tat-twassil hija eżattament dak li s-sistemi operattivi tad-dejta jistgħu jaqbdu kważi fil-ħin reali.

## Il-matematika

```
L-evalwazzjoni tal-proċess tistaqsi:
 - Twassal lill-popolazzjoni fil-mira, bid-doża/intensità ppjanata?
 - It-twassil qabel mad-disinn tal-mudell loġiku / teorija tal-bidla?
 - Liema ostakli jew faċilitaturi affettwaw it-twassil?
 Metodi: kontrolli tal-fedeltà kontra limiti speċifikati minn qabel, studji ta' każ,
         intervisti, dejta amministrattiva tat-twassil.

L-evalwazzjoni tal-impatt tistaqsi:
 - X'inbidel, u kemm minn dik il-bidla hija attribwibbli għall-programm?
 Metodi: RCT, DiD, PSM, RDD — ara impact-evaluation-methods — kontra kontrafattwali.

Dijanjosi kkombinata:
 L-ebda effett  + fedeltà għolja  → falliment tat-teorija: il-mudell innifsu ma pproduċiex ir-riżultat
 L-ebda effett  + fedeltà baxxa   → falliment tal-implimentazzjoni: il-mudell qatt ma ġie ttestjat kif suppost
 Effett misjub + fedeltà għolja   → irreplika bil-fiduċja
 Effett misjub + fedeltà baxxa    → investiga aktar: l-effett jista' jkun fraġli jew speċifiku għas-sit
```

## Eżempju prattiku

**Awtorità lokali (programm ta' ġenituri)**: evalwazzjoni tal-impatt bl-użu tad-differenza fid-differenzi ssib bidla ta' +2 punti perċentwali f'miżura tal-benessri tat-tfal — mhux statistikament sinifikanti. L-evalwazzjoni tal-proċess, imħaddma flimkien magħha, issib li l-programm laħaq 210 biss mill-500 familja fil-mira (42% firxa), u minn dawk, 95 biss lestew il-limitu ta' fedeltà speċifikat minn qabel ta' 75%+ tas-sessjonijiet attendut — 19% tal-firxa ppjanata oriġinali. Konklużjoni: ir-riżultat dgħajjef tal-impatt huwa konsistenti ma' falliment tal-implimentazzjoni, mhux evidenza li l-mudell tal-programm ma jaħdimx; ir-rispons xieraq huwa li tissewwa l-mogħdija tar-referenza li kkawżat it-telf ta' 58%, mhux li jitwarrab id-disinn tal-programm.

**Karità (programm ta' litteriżmu diġitali)**: evalwazzjoni tal-impatt issib effett qawwi (+18-il punt perċentwali fuq punteġġ ta' fiduċja diġitali), u evalwazzjoni tal-proċess parallela tikkonferma 92% fedeltà għall-kurrikulu ppjanat madwar it-12-il sit kollha tat-twassil. Flimkien, il-finanzjatur jista' jkabbar il-programm bil-fiduċja, għax l-effett intwera li jinżamm b'mod konsistenti minflok ma huwa prodott ta' sit wieħed eċċezzjonalment tajjeb.

## Rabta mal-inġinerija tas-software

Id-dejta tal-evalwazzjoni tal-proċess hija eżattament dak li s-sistemi tat-twassil huma f'pożizzjoni tajba biex jaqbdu: preżenza kontra l-pjan, doża tas-sessjonijiet, u telf f'kull stadju ta' funnel ta' referenza jew ta' reġistrazzjoni — l-istess funnel analytics li l-inġiniera diġà jibnu għal karatteristiċi tal-prodott, applikat għall-pipeline tat-twassil ta' programm soċjali minflok. L-għoti ta' metriċi ta' fedeltà u firxa lill-maniġers tal-programm kważi fil-ħin reali, minflok li tistenna evalwazzjoni ta' tmiem l-għotja, tħalli mogħdija mkissra tar-referenza tiġi rranġata f'nofs il-programm minflok tinstab biss wara li jkun intemm il-perjodu tal-finanzjament. Ara [metodi tal-evalwazzjoni tal-impatt](../metodi-tal-evalwazzjoni-tal-impatt/) għad-disinji kawżali li magħhom hija mqabbla l-evalwazzjoni tal-proċess, [teorija tal-bidla](../teorija-tal-bidla/) u [mudell loġiku](../mudell-loġiku/) għad-disinn li li kontrih l-evalwazzjoni tal-proċess tiċċekkja l-fedeltà, u [realizzazzjoni tal-benefiċċji](../ir-realizzazzjoni-tal-benefiċċji/) biex it-twassil jiġi segwit sar-riżultati li ġew imwiegħda.

## Żbalji komuni

- **Jiġi kummissjonat biss evalwazzjoni tal-impatt.** Riżultat null jew dgħajjef ma jistax jiġi interpretat bħala falliment tat-teorija jew falliment tal-implimentazzjoni, li eżattament hija d-distinzjoni li tgħodd biex jiġi deċiż x'jiġi wara.
- **L-evalwazzjoni tal-proċess titqies bħala żieda mhux importanti.** Teħtieġ l-istess rigorożità u kriterji ta' fedeltà speċifikati minn qabel bħad-disinn tal-impatt, jew tinbidel f'anekdota meta jaslu r-riżultati.
- **Jiġi konfuż "fil-ħin u fil-baġit" ma' "imwassal kif iddisinjat".** L-evalwazzjoni tal-proċess tiċċekkja l-fedeltà għall-mudell — doża, grupp fil-mira, kontenut — mhux l-istatus RAG tal-ġestjoni tal-proġett.
- **Ma jiġux irreġistrati minn qabel il-limiti tal-fedeltà.** Id-deċiżjoni wara l-fatt dwar x'jgħodd bħala "doża suffiċjenti" tagħmel kull spjegazzjoni ta' riżultat diżappuntanti tal-impatt tidher bħal skuża wara l-fatt.

## Sorsi

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
