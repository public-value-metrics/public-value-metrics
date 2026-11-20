# Hodnotenie podľa Green Book (päťprípadový model)

Green Book je záväzné usmernenie britského ministerstva financií (HM Treasury) na posudzovanie a hodnotenie návrhov vládnych výdavkov v Spojenom kráľovstve. Jeho ústredný nástroj, päťprípadový model (five-case model), núti podnikateľský zámer (business case) odpovedať na päť samostatných otázok (je to dobrý nápad, prináša to hodnotu, dá sa to obstarať, dá sa to financovať a dá sa to dodať) namiesto zrútenia všetkého do jediného čísla, ktoré môže minister odmávnuť.

## Prečo na tom záleží

Každý návrh výdavkov britskej ústrednej vlády nad rezortné delegované limity musí pred uvoľnením financií prejsť hodnotením podľa Green Book a preskúmanie Green Book Review 2020 ministerstva financií (zverejnené po kritike, že proces zvýhodňoval bohatšie regióny na úkor chudobnejších, pozri <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) sprísnilo požiadavku, aby sa možnosti porovnávali s reálnou základňou „do minimum“ a aby sa strategické zapadnutie preukázalo ešte pred posúdením hodnoty za peniaze. Samotný päťprípadový model je starší než Green Book: vznikol v Office of Government Commerce ako štandardná štruktúra podnikateľského zámeru, ale vydanie Green Book z roku 2022 ho zakotvuje ako záväzný tvar každého podnikateľského zámeru, ktorý žiada o schválenie ministerstva financií: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Zmyslom rozdelenia prípadu na päť častí je, že návrh môže zlyhať v ktorejkoľvek jednej dimenzii bez ohľadu na ostatné. Strategicky správna a nákladovo efektívna replatformizácia IT môže stále zlyhať v komerčnom prípade, ak ju vie dodať len jeden dodávateľ (čo vytvára riziko zákazky bez súťaže), alebo v manažérskom prípade, ak rezort nemá skúsenosti s dodaním programov takého rozsahu. Jediné skóre „hodnoty za peniaze“ skrýva práve tento druh zlyhania.

## Matematika

Päťprípadový model je štruktúra, nie vzorec, ale každý prípad má vlastný kvantitatívny alebo dôkazový test:

```
1. Strategický prípad (strategic case)
   Dôkaz o cieli výdavkov prepojenom so stratégiou organizácie.
   Test: existuje vôbec dôvod na zmenu? („nerobiť nič“ je vždy možnosť.)

2. Ekonomický prípad (economic case)
   Posúdenie možností voči základni „do minimum“ pomocou
   sociálnej analýzy nákladov a prínosov alebo analýzy nákladovej efektívnosti.
   Test: ktorá možnosť maximalizuje čistú verejnú hodnotu?
   Pozri ../social-cost-benefit-analysis/ a ../cost-effectiveness-analysis-in-government/

3. Komerčný prípad (commercial case)
   Zapojenie trhu, spôsob obstarávania, rozdelenie rizík medzi
   kupujúceho a dodávateľa.
   Test: dá sa uprednostňovaná možnosť obstarať za prijateľných podmienok?

4. Finančný prípad (financial case)
   Finančná dostupnosť v rámci rozpočtových limitov rezortu, zdroj financovania,
   účtovné zaobchádzanie.
   Test: môžeme si to dovoliť, tento rok aj každý ďalší?

5. Manažérsky prípad (management case)
   Riadenie, plán projektu, plán realizácie prínosov, register rizík.
   Test: dokáže to táto organizácia skutočne dodať?
   Pozri ../benefits-realization/
```

V ekonomickom prípade žije kvantitatívne posúdenie: možnosti sa porovnávajú na báze čistej súčasnej hodnoty upravenej o [sociálnu diskontnú sadzbu](../sociálna-diskontná-sadzba/) metódou [sociálnej analýzy nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/), alebo, ak sa prínosy nedajú čestne speňažiť, prostredníctvom [analýzy nákladovej efektívnosti](../analýza-nákladovej-efektívnosti-vo-verejnej-správe/) či [viackriteriálnej analýzy rozhodovania](../viackriteriálna-analýza-rozhodovania/).

## Vypracovaný príklad

**Miestny úrad**: mestská rada, ktorá posudzuje IT systém opráv bývania za £12 miliónov, prechádza päť prípadov takto. Strategický prípad: nahromadené opravy porušia zákonný štandard slušného bývania do 18 mesiacov, ak sa nezasiahne. Ekonomický prípad: tri možnosti nacenené na 10-ročné obdobie posúdenia pri diskontnej sadzbe 3,5 % (podľa štandardnej sadzby sociálnej časovej preferencie podľa Green Book 2022): „do minimum“ (záplatovať starší systém, NPV −£4,1 mil.), „kúpiť“ (platforma COTS, NPV +£2,3 mil.), „vybudovať“ (zákazková platforma, NPV +£0,6 mil. po uplatnení 40 % optimism bias pre vývoj softvéru na nediskontované kapitálové náklady podľa prílohy A Green Book). V ekonomickom prípade vyhráva kúpa. Komerčný prípad: existujú dvaja životaschopní dodávatelia, súťaž je uskutočniteľná, vyhovuje. Finančný prípad: kapitál je dostupný od Public Works Loan Board, prevádzkové náklady sa zmestia do strednodobého finančného plánu, vyhovuje. Manažérsky prípad: úrad za posledných päť rokov dodal dva porovnateľné systémy, vyhovuje. Návrh pokračuje s možnosťou „kúpiť“.

**Rezort ústrednej vlády**: návrh so silným ekonomickým prípadom (NPV +£40 mil.), kde však príslušnú akreditáciu drží len jeden dodávateľ, neprejde komerčným prípadom z hľadiska súťažného prostredia a vynúti si buď výnimku pre zákazku bez súťaže (s vlastnou záťažou kontroly), alebo prepracovanie špecifikácie na otvorenie trhu; samotný ekonomický prípad by to nikdy neodhalil.

## Súvislosť so softvérovým inžinierstvom

Inžinierske tímy vo vláde alebo v organizáciách financovaných z grantov zvyčajne vidia len ekonomický prípad, pretože práve ten sa od vedenia produktu a inžinierstva žiada zdôvodniť („aké je ROI tejto migrácie?“). Podnikateľský zámer, ktorý prejde ministerstvom financií alebo grantovou komisiou, však potrebuje všetkých päť a inžinieri sú často najlepšie umiestnení odpovedať na komerčný prípad (dá sa to skutočne obstarať, alebo nás to uzamkne do proprietárneho formátu jedného dodávateľa?) a na manažérsky prípad (máme dodávkovú kapacitu, alebo to závisí od toho, že neodídu traja konkrétni ľudia?). Žiadosť o „iba čísla pre business case“ berte ako žiadosť o jednu pätinu skutočného rozhodnutia. Pozri [hodnotu za peniaze](../hodnota-za-peniaze/), ako sa výstup ekonomického prípadu zvyčajne zhŕňa, a [celkové náklady vlastníctva](../celkové-náklady-vlastníctva-vo-vládnom-it/) pre bežné kvantitatívne jadro finančného prípadu.

## Úskalia

- **Písať ekonomický prípad ako prvý a strategický prípad mu prispôsobiť.** Green Book Review 2020 zistil, že práve tento spôsob zlyhania ženie skreslenie hodnotenia k miestam a sektorom, ktoré boli už dobre zdokumentované, a upevňuje regionálnu nerovnosť; strategický prípad má stanoviť cieľ pred porovnaním možností.
- **Považovať „do minimum“ za „nerobiť nič“.** Správnou základňou je najlacnejšia možnosť, ktorá ešte spĺňa minimálne právne alebo bezpečnostné povinnosti, nie fantázia nulových výdavkov; porovnávanie s doslovnou nulou nafukuje zdanlivú hodnotu každej možnosti.
- **Vynechať komerčný a manažérsky prípad, lebo ekonomický prípad je silný.** Návrh s vysokou NPV, ktorý sa nedá súťažne obstarať alebo ho nedokáže dodať zadávajúca organizácia, nie je financovateľným návrhom; posudzovatelia ministerstva financií ho bežne zamietajú z týchto dôvodov aj pri presvedčivom ekonomickom prípade.
- **Uplatniť päťprípadový model raz, na začiatku.** Green Book vyžaduje, aby sa prípad prehodnotil pri každej ďalšej schvaľovacej bráne (strategic outline case, outline business case, full business case), keď sa upresňujú náklady a dôkazy; prípad zmrazený v štádiu náčrtu prehliadne nárast nákladov, ktorý by neskoršia brána zachytila.

## Zdroje

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
