# Inpaktu-ebaluazioa eta prozesu-ebaluazioa

Inpaktu-ebaluazioak galdetzen du programak bere helburuko emaitzak eragin ote dituen. Prozesu-ebaluazioak galdetzen du programa benetan diseinatu bezala eman den ala ez: nori, zer dosiarekin eta zer oztopo edo errazgarrirekin. Galdera desberdinak dira eta metodo desberdinak behar dituzte, eta HM Treasury-ren Magenta Book-ak praktika estandartzat hartzen du biak batera enkargatzea, inpaktu-emaitza ahul edo nulu bat bere kabuz interpretaezina delako: ezin dizu esan programaren azpiko teoria okerra zen ala teoria ona inoiz behar bezala eman ez zen.

## Zergatik den garrantzitsua

Gobernuko ebaluazioek behin eta berriz aurkitu dute programa batek ez duela eragin neurgarririk izan, azaltzeko prozesu-ebaluaziorik izan gabe; enkargatzaileek ezin dute bereizi «ideia honek ez du funtzionatzen» (teoria-hutsegitea) eta «ideia hau inoiz ez zen benetan ondo probatu» (inplementazio-hutsegitea). Medical Research Council-en esku-hartze konplexuen prozesu-ebaluazioari buruzko gidak, 2015ean BMJ-n argitaratua eta Magenta Book-arekin batera zabal aipatua, fideltasuna, dosia eta irismena formalizatu zituen prozesu-ebaluazio batek neurtu behar dituen funtsezko gauza gisa. Inpaktu-ebaluazioa prozesu-ebaluaziorik gabe enkargatzeak programa-diseinu benetan sendoa baztertzeko arriskua dakar, helburuko biztanleriaren erdiari helburuko intentsitatearen frakzio bati eman zaiolako; sistema-eraikitzaile batek errazago saihestu dezakeen akatsa, entrega-fideltasuna hain zuzen datu-sistema operatiboek ia denbora errealean jaso dezaketen zerbait baita.

## Matematika

```
Prozesu-ebaluazioak galdetzen du:
 - Helburuko biztanleriari eman al zaio, planifikatutako dosiarekin/intentsitatearekin?
 - Entregak eredu logikoaren / aldaketaren teoriaren diseinuarekin bat egin al du?
 - Zer oztopo edo errazgarrik eragin dute entregan?
 Metodoak: aldez aurretik zehaztutako atalaseen aurkako fideltasun-egiaztapenak, kasu-azterketak,
           elkarrizketak, administrazio-entrega datuak.

Inpaktu-ebaluazioak galdetzen du:
 - Zer aldatu da, eta aldaketa horren zenbat egotz dakioke programari?
 Metodoak: RCT, DiD, PSM, RDD — ikus impact-evaluation-methods — kontrafaktual baten aurka.

Diagnostiko konbinatua:
 Eraginik ez + fideltasun altua  → teoria-hutsegitea: ereduak berak ez zuen emaitza sortu
 Eraginik ez + fideltasun baxua  → inplementazio-hutsegitea: eredua inoiz ez zen ondo probatu
 Eragina aurkitu + fideltasun altua → erreplikatu konfiantzaz
 Eragina aurkitu + fideltasun baxua → ikertu gehiago: efektua hauskorra edo lekuaren araberakoa izan daiteke
```

## Adibide landua

**Tokiko erakundea (guraso-programa)**: diferentzien diferentzia erabiltzen duen inpaktu-ebaluazioak haurren ongizate-neurri batean +2 ehuneko-puntuko aldaketa aurkitzen du, estatistikoki esanguratsua ez dena. Aldi berean egindako prozesu-ebaluazioak aurkitzen du programak helburuko 500 familietatik 210era bakarrik iritsi zela (%42ko irismena), eta horietatik 95ek bakarrik bete zuten aldez aurretik zehaztutako %75+ saioetara joatearen fideltasun-atalasea: hasieran planifikatutako irismenaren %19. Ondorioa: inpaktu-emaitza ahula inplementazio-hutsegitearekin bat dator, ez programaren eredua ez dabilelako froga; erantzun egokia %58ko uzte hori eragin zuen bideratze-bidea konpontzea da, ez programaren diseinua uztea.

**Karitatea (alfabetatze digitaleko programa)**: inpaktu-ebaluazioak efektu sendoa aurkitzen du (+18 ehuneko-puntu konfiantza digitaleko puntuazioan), eta paraleloko prozesu-ebaluazioak berresten du curriculum planifikatuarekiko %92ko fideltasuna 12 entrega-lekuetan. Batera, finantzatzaileak programa konfiantzaz eskalatu dezake, efektuak koherenteki mantentzen dela frogatu delako, leku bakar bereziki on baten produktua izan beharrean.

## Software ingeniaritzarekin lotura

Prozesu-ebaluazioaren datuak dira entrega-sistemek ondo jasotzeko moduan daudenak: planarekiko asistentzia, saioen dosia eta bideratze- edo izen-emate-hodi baten etapa bakoitzeko uztea: ingeniariek produktuaren eginbideetarako eraikitzen dituzten funnel-analitika berberak, programa sozial baten entrega-pipeline-ari aplikatuta. Fideltasun- eta irismen-metrikak programa-kudeatzaileei ia denbora errealean emateak, dirulaguntzaren amaierako ebaluazioa itxaron beharrean, bideratze-bide hautsi bat programaren erdian konpontzea ahalbidetzen du, finantzaketa-aldia amaitu ondoren bakarrik aurkitu beharrean. Ikus [inpaktu-ebaluazioaren metodoak](../inpaktu-ebaluazioaren-metodoak/) prozesu-ebaluazioarekin parekatzen diren diseinu kausaletarako, [aldaketaren teoria](../aldaketa-teoria/) eta [eredu logikoa](../logika-eredua/) prozesu-ebaluazioak fideltasuna egiaztatzen duen diseinurako, eta [onuren gauzatzea](../onuren-gauzatzea/) entrega agindutako emaitzetaraino jarraitzeko.

## Tranpak

- **Inpaktu-ebaluazioa bakarrik enkargatzea.** Emaitza nulu edo ahulak orduan ezin dira interpretatu teoria-hutsegite edo inplementazio-hutsegite gisa, hain zuzen hurrengo urratsa erabakitzeko axola duen bereizketa.
- **Prozesu-ebaluazioa gehigarri leun gisa tratatzea.** Inpaktu-diseinuak bezain zorroztasun eta aldez aurretik zehaztutako fideltasun-irizpide berberak behar ditu, bestela anekdota bihurtzen da emaitzak iristean.
- **«Garaiz eta aurrekontuaren barruan» «diseinatu bezala emana» direla uste izatea.** Prozesu-ebaluazioak ereduarekiko fideltasuna egiaztatzen du —dosia, helburuko taldea, edukia—, ez proiektu-kudeaketaren RAG egoera.
- **Fideltasun-atalaseak aldez aurretik ez erregistratzea.** «Dosi nahikoa» zer den gertakizunaren ondoren erabakitzeak inpaktu-emaitza etsigarri baten edozein azalpen post-hoc aitzakia-egite gisa ikusarazten du.

## Iturriak

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
