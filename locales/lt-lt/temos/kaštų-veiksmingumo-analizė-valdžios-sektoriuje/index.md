# Kaštų veiksmingumo analizė valdžios sektoriuje

Kaštų veiksmingumo analizė (angl. cost-effectiveness analysis, CEA) lygina alternatyvių būdų pasiekti *tą patį* rezultatą kaštus, išreikštus natūriniais vienetais – kaštai vienam apgyvendintam gatvėje miegančiam asmeniui, kaštai vienam mokiniui, pasiekusiam numatytą standartą, kaštai vienai sumažintai CO2 tonai, – pačio rezultato nepaverčiant pinigais.

## Kodėl tai svarbu

„Green Book“ laiko CEA atsarginiu metodu, kai [socialinės kaštų ir naudos analizės](../socialinė-kaštų-ir-naudos-analizė/) reikalavimas pinigais įvertinti kiekvieną naudą tampa ne tik sudėtingas, bet ir nesąžiningas – kai patikima rezultato kaina reikalautų prielaidų, kurių niekas iš tikrųjų nelaiko
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
5 skyrius, apie variantų vertinimą, kai rezultatų nėra lengva įvertinti pinigais). CEA yra metodas, tiesiogiausiai pasiskolintas iš sveikatos ekonomikos – struktūriškai jis identiškas tam, kaip NICE lygina gydymo būdus pagal kaštus vienam kokybiškai pakoreguotam gyvenimo metui (QALY), tik taikomas ne sveikatos viešosioms programoms: švietimo intervencijoms vienam mokinio rezultato balui, būsto programoms vienam namų ūkiui, apsaugotam nuo benamystės, užimtumo programoms vienam išlaikytam darbo rezultatui.

Priežastis, kodėl CEA užima vietą šalia SCBA, o nėra jos absorbuojama, yra ta, kad priverstinis kai kurių rezultatų įvertinimas pinigais sukuria skaičių, pakankamai tikslų, kad atrodytų autoritetingas, ir pakankamai ginčytiną, kad viešoje diskusijoje būtų beverčių – įkainojus „vaiką, skaitantį numatytu standartu“, kviečiamas būtent toks užginčijimas, kuris nuvertina verslo atvejį parlamento komitete. CEA šio ginčo išvengia atsisakydama jį kelti: ji vertina variantus pagal kaštus vienam *paties rezultato* vienetui, o atskirą politinį sprendimą, ar rezultatą apskritai verta siekti, palieka strateginiam atvejui.

## Matematika

```
Kaštų veiksmingumo santykis (vidutinis) = Bendri kaštai / Visi pasiekti rezultato vienetai

Inkrementinis kaštų veiksmingumo santykis (ICER), lyginant variantą A su B:
ICER = (Kaštai_A − Kaštai_B) / (Rezultatas_A − Rezultatas_B)

Procedūra:
1. Nustatyti rezultato vienetą ir matavimo metodą visiems lyginamiems variantams.
2. Įkainoti kiekvieną variantą tuo pačiu pagrindu (žr. ../green-book-appraisal/, finansinis atvejis)
   tuo pačiu laiko horizontu.
3. Atmesti dominuojamus variantus: bet kuris variantas, kainuojantis daugiau už vienetą nei
   pigesnė alternatyva, pasiekianti tą patį ar geresnį rezultatą, atmetamas.
4. Likusius variantus reitinguoti pagal inkrementinį, o ne vidutinį kaštų veiksmingumo santykį.
```

Vien CEA negali pasakyti, ar programą apskritai verta finansuoti – tik kuris iš kelių to paties tikslo siekimo būdų yra pigiausias vienetui. Sprendimui, ar paties tikslo vertas išlaidų, reikia arba grįžti prie SCBA (jei yra patikimas įvertinimas), arba politinio / strateginio sprendimo už matematikos ribų. Kai rezultatų iš tikrųjų negalima sumažinti iki vieno vieneto – nes programa sukuria kelis rezultatus, kurie svarbūs skirtingai, – vietoj to naudokite [daugiakriterinę sprendimų analizę](../daugiakriterė-sprendimų-analizė/).

## Pavyzdys su skaičiavimais

**Vietos valdžia**: taryba lygina tris požiūrius į gatvėje miegančiųjų mažinimą, kiekvienas įkainotas vieniems metams pagal rezultatą „asmenys, perkelti į stabilų būstą 6+ mėnesių“:

```
Variantas                          Kaštai     Pasiekti rezultatai   Vid. CER
Housing First (intensyvus)         £900 000   60                    £15 000/rezultatui
Nakvynės namai + tolesnė parama    £600 000   50                    £12 000/rezultatui
Aktyvus darbas + privati nuoma     £350 000   20                    £17 500/rezultatui

ICER, Nakvynės namai prieš Aktyvų darbą:  (600k−350k)/(50−20) = £8 333 už papildomą rezultatą
ICER, Housing First prieš Nakvynės namus: (900k−600k)/(60−50) = £30 000 už papildomą rezultatą
```

Aktyvus darbas pagal vidutinius kaštus dominuojamas Nakvynės namų, tačiau *inkrementinis* žingsnis nuo Aktyvaus darbo iki Nakvynės namų kainuoja tik £8 333 už papildomą apgyvendintą asmenį – pigu palyginti su Housing First žingsniu, kuris kainuoja £30 000 už kiekvieną papildomą asmenį virš to, ką pasiekia Nakvynės namai. Biudžeto ribojama savivaldybė, plėsdama veiklą, turėtų pirmiausia plėsti Nakvynės namus, o ne Housing First, nors Housing First pagal savo vidutinį santykį atrodo geriau.

**Nacionalinė vyriausybė**: raštingumo pasivijimo programa lyginama trimis teikimo modeliais pagal „kaštus vienam mokiniui, pasiekusiam amžių atitinkantį skaitymo standartą“: individualus korepetitorius (£1 800/mokiniui), mažos grupės korepetitorius (£700/mokiniui) ir tik skaitmeninė intervencija (£150/mokiniui, bet tik 40 % mažos grupės korepetitoriaus rezultato dažnio vienam užsiregistravusiam mokiniui, pakoregavus dėl įsitraukimo kritimo). Pakoregavus dėl faktinio baigimo, tik skaitmeninė intervencija kainuoja £375 vienam standartą pasiekusiam mokiniui – vis dar pigiausia, bet CEA negali pasakyti, ar mažesnis absoliutus mokinių skaičius, kuriems padeda tik skaitmeninė intervencija, jei teikiama už tą patį biudžetą kaip mažos grupės, yra priimama kompensacija už mažesnio skaičiaus mokinių pasiekimą didesniu gyliu; tai paskirstymo sprendimas, kurį CEA grąžina sprendimų priėmėjams.

## Ryšys su programine inžinerija

CEA yra tinkamas pagrindas, kai inžinerijos komandos vertina teikimo būdus *tam pačiam* paslaugos rezultatui – kaštai vienai sėkmingai patikrintai tapatybei trims tapatybės patikros tiekėjams, kaštai vienai teisingai išrūšiuotai bylai dviem bylų automatizavimo dizainams, kaštai vienam išspręstam prieinamumo defektui vidiniam ir pasamdytam taisymui. Drausmė, kurią ji tiesiogiai importuoja: apibrėžkite rezultato vienetą prieš lygindami kaštus (ne „uždarytus užsakymus“ – tai produktas, o „iš tikrųjų išspręstą naudotojo poreikį“) ir visada skaičiuokite inkrementinį santykį tarp veikiančios sistemos ir siūlomo pakaitalo, o ne kiekvienos sistemos vidutinius kaštus atskirai. Žr. [rezultatai ir produktai](../rezultatai-ir-produktai/) ir [kaštai vienam rezultatui](../kaštai-vienam-rezultatui/).

## Dažniausios klaidos

- **Vidutinių, o ne inkrementinių santykių lyginimas sprendžiant dėl plėtros.** Kaip rodo gatvėje miegančiųjų pavyzdys, variantas su geriausiu vidutiniu santykiu ne visada yra pigiausias kitas perkamas rezultato vienetas.
- **Rezultato vieneto pasirinkimas, kuris iš tikrųjų yra produktas.** „Atlikti nukreipimai“ ar „vykdytos sesijos“ matuoja veiklą, o ne rezultatą, kurį programa turi sukurti; CEA ant produktų sukuria užtikrintai atrodantį skaičių, atsakantį į neteisingą klausimą.
- **Lyginimas tarp iš tikrųjų skirtingų rezultatų.** CEA galioja tik tada, kai kiekvienas variantas siekia to paties rezultato, išmatuoto tuo pačiu būdu; „kaštų vienam apgyvendintam gatvėje miegančiam“ lyginimui su „kaštais vienam globos išėjusiam jaunuoliui stabilioje nuomoje“ reikia bendro rezultato matavimo ar [daugiakriterinės sprendimų analizės](../daugiakriterė-sprendimų-analizė/), o ne CEA.
- **Rezultato patvarumo ignoravimas.** Pigesnis variantas, kurio rezultatai neišlieka (mokinys, regresuojantis pasibaigus intervencijai), iš tikrųjų nėra veiksmingesnis kaštų požiūriu, kai matuojama palyginamu horizontu; suderinkite tolesnės stebėsenos laikotarpį tarp lyginamų variantų.

## Šaltiniai

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  kaštų veiksmingumo metodas, iš kurio ši valdžios sektoriaus adaptacija pasiskolinta.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
