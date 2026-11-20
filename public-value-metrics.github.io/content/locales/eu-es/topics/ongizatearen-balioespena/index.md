# Ongizatearen balioespena (WELLBY)

Ongizatearen balioespenak politika baten eragina zuzenean bizitzarekiko asebetetzearen terminoetan prezioztatzen du, WELLBY-a (ongizatera egokitutako bizi-urtea) bere unitate gisa erabiliz: WELLBY bat 0-10 bizitzarekiko asebetetze-eskalan puntu bateko aldaketa da, urte batez mantendua. HM Treasury-ren onartutako ordezko ofiziala da onura bakoitza ordaintzeko borondatearen bidez diruztatzearen aurrean.

## Zergatik den garrantzitsua

HM Treasury-ren "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
dokumentuak ongizate subjektiboaren datuak formalki sartu zituen gobernu zentraleko balioespenean, analistei bidea emanez [adierazitako lehentasunen](../adierazitako-lehentasunen-balioespena/) eta [agerian utzitako lehentasunen](../agerian-utzitako-lehentasunen-balioespena/) metodoek sinesgarriro prezioztatzeko zailtasunak dituzten emaitzak balioesteko (gizarte-lotura, buruko osasuna, segurtasuna, partaidetza zibikoa), jendea askotan aurreikusle txarra delako ondasun batek bizitzarekiko asebetetzean benetan zenbat eragingo duen. What Works Centre for Wellbeing-ekin elkarrekin garatutako gidaliburuak WELLBY bakoitzeko diru-balio gomendatu bat ezartzen du, £13.000 (2021eko prezioak, aldizka berrikusia), ongizate-inkesta handietan (batez ere ONSen Annual Population Survey, 2011tik ONS4 lau ongizate-galderak egiten dituena) behatutako diru-sarreren eta bizitzarekiko asebetetzearen arteko harremanetik eratorria, Green Book-aren beste balioespenekin diruztatutako alderaketa behar denean liberetara bihurtzeko tasa bat emanez.

Metodoa garrantzitsua da ohiko balioespen-logika irauli egiten duelako: jendeak emaitza batengatik zenbat ordainduko lukeen galdetu (adierazitako lehentasunak) edo erlazionatutako merkatu-transakzio batetik balioa ondorioztatu (agerian utzitako lehentasunak) beharrean, emaitzak jakinarazitako bizitzarekiko asebetetzean duen eragina zuzenean neurtzen du, jendeak nahi duela dioenaren eta benetan hobeto uzten duenaren arteko arrakala saihestuz. Hau da, halaber, bere muga nagusia: auto-jakinarazitako bizitzarekiko asebetetzeari egokitzapen- eta enuntziatu-efektuek eragiten diote, eta praktikatzaile zuhur batek kontrolatu behar ditu.

## Matematika

```
WELLBY = bizitzarekiko asebetetze-puntu 1 (0-10 eskala) pertsona batentzat urte batez mantendua

Politika baten WELLBY-ak guztira =
  Σ (bizitzarekiko asebetetze-puntuazioaren aldaketa) × (eragindako pertsona-kopurua)
    × (iraupena urtetan, gizarte-deskontu tasaz deskontatua)

Balio diruztatua = WELLBY-ak guztira × WELLBY bakoitzeko balioa
  (HM Treasury-ren balio gomendatua: £13.000 WELLBY bakoitzeko, 2021eko prezioak,
   aldizkako berrikuspenaren mende — egiaztatu egungo gidaliburua erabili aurretik)
```

Honek osasunaren ekonomiako [ongizatera egokitutako bizi-urteaz](../ongizatera-egokitutako-bizi-urteak/) bereizten da, hori normalean osasunari lotutako bizi-kalitatearen eskalatan (EQ-5D eta antzekoak) ainguratzen baita, bizitzarekiko asebetetze orokorrean baino; biak lotuta daude baina ez dira trukagarriak, eta Green Book-aren balioespenek esplizituak izan behar dute jakinarazitako WELLBY zifra baten azpian zein eskala eta elikatze-metodo dagoen.

## Adibide landua

**Toki-agintaritza**: udal batek adiskidetze-eskema komunitario bat dauka adineko egoiliar isolatuentzat, 400 pertsona zerbitzatuz. ONS4 bizitzarekiko asebetetze-galdera erabiltzen duen aurretik/ondoren ongizate-inkesta batek erakusten du parte-hartzaileen batez besteko puntuazioa 5,8tik 6,5era igotzen dela (0,7 puntuko irabazia), programaren 2 urteko finantzaketa-iraupenean zehar mantendua.

```
Sortutako WELLBY-ak = 400 pertsona × 0,7 puntu × 2 urte = 560 WELLBY
Balio diruztatua = 560 × £13.000 = £7,28 milioi
Programaren kostua = £450.000 2 urtetan

Onura-kostu ratioa ≈ £7,28 milioi / £0,45 milioi ≈ 16:1
```

Hain altua den ratio batek zorroztasuna eragin beharko luke ospakizuna baino: Green Book-aren ongizate-gidaliburuak esplizituki ohartarazten du lagin txikietako auto-jakinarazitako irabaziak itxuraz hartzearen aurka, hautaketa-efektuak egiaztatu gabe (eskemara gizartekoienak, hobetzeko probabilitate handienak zituzten egoiliarrak bakarrik batu al ziren?) eta konparazio-talderik gabe; ebaluazio ongi diseinatu batek parte hartzen ez duten pertsonetan behatutako aldaketa kontrafaktuala kenduko luke, ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/).

**Gobernu nazionala**: bi enplegu-programa WELLBY-ekin alderatzeak, irabaziak bakarrik erabili ordez, jasotzen du langabeziak galdutako diru-sarrerek baino ongizate-kostu handiagoa duela: Erresuma Batuko ongizate-ikerketak etengabe aurkitzen du langabeziak bizitzarekiko asebetetzea diru-sarreren galerak bakarrik aurreikusiko lukeena baino gehiago murrizten duela, egitura, helburua eta gizarte-kontaktua galtzearen efektu ez-ekonomikoengatik. Irabazi-irabazian bakarrik ebaluatutako programa batek bere balioa gutxiesten du WELLBY-etan ere ebaluatutako batekiko.

## Software ingeniaritzarekin lotura

Ongizatearen balioespenak gutxitan iristen dira zuzenean ingeniaritza-taldeetara, baina gizarte-sektoreko eta zerbitzu publikoko produktuetarako "arrakasta" zer den definitzen laguntzen du: adiskidetze-plataforma digital batek, buruko osasuneko triaje-tresna batek edo egoiliar isolatuentzako komunitate-plataforma batek bere eragina azkenean horrela neurtuko dela espero beharko luke, eta horrek esan nahi du produktu-analitikak *nor* iristen den eta *zenbat denboraz* jaso behar duela, ez erabilera-kopuruak bakarrik. Eraiki ongizate-inkestaren tresnak (ONS4 edo baliokide balioztatuak) zerbitzuaren ebaluazioan hasieratik, geroago erretrospektiboki gehitu beharrean; zerbitzua abiarazi ondoren ongizate-oinarri-lerro bat berreskuratzeak aurretik/ondoren konparazioa erabat galtzen du. Ikus [emaitzak vs. irteerak](../emaitzak-eta-irteerak/) eta [inpaktuaren ebaluazio-metodoak](../inpaktu-ebaluazioaren-metodoak/).

## Tranpak

- **Kontrafaktualik edo konparazio-talderik ez egotea.** Nolanahi ere gertatuko zenaren kontrolik gabeko aurretik/ondoren ongizate-irabazi batek programaren eragina gainestimatzen du; ikus [analisi kontrafaktuala](../analisi-kontrafaktuala/) eta [gehigarritasuna eta pisu hila](../gehigarritasuna-eta-pisu-hila/).
- **Lagin txiki eta auto-hautatuak.** Parte hartzea aukeratu duten programa-parte-hartzaileen ongizate-inkestak hautaketa-alborapenaren aurrean ahulak dira: batu eta jarraitu zutenak dagoeneko gorako joeran zeuden ziurrenik.
- **£/WELLBY bihurketa zehatzat tratatzea.** Balio diruztatua diru-sarrera-ongizate erregresioetatik eratorritako politika-konbentzio bat da, ez merkatu-prezio bat; erabili Green Book-aren balioespenen arteko konparagarritasunerako, ez ongizateak "zenbat balio duen" esateko.
- **WELLBY-ak osasunari lotutako QALY-ekin nahastea.** Biek eraikuntza desberdinak neurtzen dituzte eskala desberdinetan; ikus [ongizatera egokitutako bizi-urteak](../ongizatera-egokitutako-bizi-urteak/) osasunaren ekonomiaren aldaerarako, eta ez egin biekin batez bestekorik.

## Iturriak

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
