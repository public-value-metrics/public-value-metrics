# Giza Garapenaren Indizea (GGI)

GGI NBEren erantzuna da herrialdeak errentaren arabera bakarrik sailkatzeari: bizi-itxaropena, hezkuntza eta errenta 0 eta 1 arteko zenbaki bakar batean batzen ditu, Amartya Sen ekonomialariak argudiatu eta Mahbub ul Haq-ek NBErako garatutako premisa batetik abiatuta: garapena jendeak egin eta izan dezakeena zabaltzea da, ez irabazten duena bakarrik. 1990etik argitaratzen da urtero NBEren Garapen Programaren (UNDP) Giza Garapenaren Txostenean.

## Zergatik den garrantzitsua

GGI baino lehen, «garapena» ia osorik biztanleko BNGaren bidez neurtzen zen, eta horrek ez du ezer esaten hazkundea jende arruntaren osasunera edo hezkuntzara iristen den ala ez. Senen gaitasunen ikuspegiak garapena benetako askatasunen zabalkuntza gisa birformulatu zuen, eta ul Haq-ek UNDPk herrialde guztiak sailkatzeko erabil zezakeen indize argitaragarri bihurtu zuen, errentaren bidez bakarrik aberastu baina osasuna edo eskolatzea baztertu zuten gobernuak BPGk iradokitzen zuena baino sailkapen okerragoarekin aurrez aurre jarriz (Golkoko petrolio-estatuak eta ekonomia erauzle batzuk dira adibide estandarrak). GGIren hiru dimentsioko egiturak, gainera, [Pobrezia Multidimentsionalaren Indizearen](../pobrezia-multidimentsionalaren-indizea/) arbaso metodologiko zuzena da: biek uko egiten diote dimentsio batek bestearen gabezia ordaintzeari, batez besteko aritmetikoaren ordez geometrikoa erabiliz. UNDPk ohar tekniko osoak eta azpiko datuak argitaratzen ditu edizio guztietarako (<https://hdr.undp.org/data-center/human-development-index>), indizearen gainean eraikitzen duen edonorentzako iturri kanonikoa, berriz eratorri beharrean.

## Matematika

```
Bizi-itxaropenaren indizea (LEI)     = (LE − 20) / (85 − 20)

Batez besteko eskolatze-urteen indizea = batez besteko eskolatze-urteak / 15
Espero diren eskolatze-urteen indizea  = espero diren eskolatze-urteak / 18
Hezkuntza-indizea (EI)                 = (Batez besteko urteen indizea + Espero diren urteen indizea) / 2

Errenta-indizea (II)                   = (ln(biztanleko BNG) − ln(100)) / (ln(75000) − ln(100))

GGI = (LEI × EI × II) ^ (1/3)     [hiru azpiindizeen batez besteko geometrikoa]
```

Batez besteko geometrikoa nahita aukeratua da: biderkatu egiten duelako, ez batez beste, dimentsio batean puntuazio oso altuak ezin du guztiz konpentsatu beste batean oso baxua: UNDPk 2010ean zehazki desorekak zigortzeko hartutako diseinua, aurreko batez besteko aritmetikoaren formula ordezkatuz.

## Adibide landua

**Errenta ertaineko herrialdea**: bizi-itxaropena 72 urte, batez besteko eskolatze-urteak 8, espero diren eskolatze-urteak 13, biztanleko BNG $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

GGI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

0,713ko GGI UNDPren «giza garapen altua» tartean dago (0,700–0,799); «oso altua» 0,800tik hasten da. Kontuan hartu emaitza zein sentikorra den azpiindize ahulenarekiko: batez besteko eskolatze-urteak 8 ordez 4 balira (MYSI = 0,267, EI = 0,494), GGI (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639ra jaisten da —tarte oso bat—, beste ezer aldatu ez den arren.

## Software ingeniaritzarekin lotura

- Batez besteko geometrikoaren eredua zuzenean berrerabilgarria da zerbitzu edo produktu konposatuen edozein puntuaziotarako, non nahi ez duzun dimentsio indartsu batek dimentsio ahul kritiko bat estaltzea; adibidez, zerbitzu digital publiko baten irisgarritasun-, errendimendu- eta fidagarritasun-puntuazioak batez besteko haztatu bidez beharrean biderkatuz konbinatzea, azkarra baina irisgarria ez den zerbitzuak «ona» ateratzerik izan ez dezan.
- GGIren errentaren log-eraldaketa (libra gehigarri baten balio marjinal beherakorra) ebaluazioko [banaketa-haztapenaren](../banaketa-haztapena/) logika bera da: $1.000 gehigarriak etxe pobre batentzat askoz gehiago esan nahi du aberats batentzat baino, eta biak linealki tratatzeak inpaktua gaizki prezioztatzen du.
- «Inklusio digital» edo «herritarren emaitzen» puntuazio nahasi bakarra jakinarazten duen edozein panelek bere agregazio-formula UNDPren ohar teknikoek bezain esplizituki dokumentatu behar du; ikus [sektore publikoko KPIak](../sektore-publikoko-kpi-ak/) eta [balio publikoaren scorecard-a](../balio-publikoaren-puntuazio-txartela/).

## Tranpak

- **Batez besteko geometrikoaren ordez batez besteko aritmetikoa erabiltzea**: batez besteko aritmetikoak errenta altuak osasun edo hezkuntza eskasa erabat estaltzen uzten du; 2010eko metodologia-aldaketaren helburu osoa ordezkapen hori geldiaraztea zen.
- **GGI urtez urte alderatzea inflaziora doitutako BPG balitz bezala**: UNDPk aldizka indizea birbasatzen du (gutxieneko/gehieneko muga berriak, eskolatze-gailur berrikusiak), beraz sailkapen-aldaketa batek metodologia-eguneraketa isla dezake, ez benetako aldaketa; egiaztatu beti zifra zein HDR edizioetatik datorren.
- **GGI pobreziaren neurri gisa tratatzea**: batez besteko nazionala da eta ez du ezer esaten herrialdearen barneko banaketaz; horretarako erabili [Pobrezia Multidimentsionalaren Indizea](../pobrezia-multidimentsionalaren-indizea/) edo UNDPren Desberdintasunari doitutako GGI bereizia.

## Iturriak

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
