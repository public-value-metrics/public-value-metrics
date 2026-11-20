# Skaitmeninė įtrauktis

Skaitmeninė įtrauktis – tai drausmė, užtikrinanti, kad „pirmiausia skaitmeniniu būdu“ netaptų „tik skaitmeniniu būdu“: kad viešosios paslaugos, suprojektuotos aplink pigiausią kanalą, vis tiek veiktų piliečiams, kurie negali ar nenori jo naudoti be pagalbos. GDS sukūrė konkretų teikimo mechanizmą „padedamas skaitmeninis“ (assisted digital) kaip privalomą reikalavimą kiekvienai vyriausybės skaitmeninei paslaugai, o ne pasirenkamą priedą.

## Kodėl tai svarbu

2012 m. Vyriausybės skaitmeninė strategija aiškiai nustatė ambiciją: skaitmeninės paslaugos turi būti kuriamos pirmiausia skaitmeniniu būdu, tačiau pati strategija pripažino, kad apie 10 % JK suaugusiųjų negalės jomis naudotis be pagalbos, ir įpareigojo departamentus teikti padedamą skaitmeninę paramą – žmogaus tarpininkaujamą kelią telefonu, asmeniškai ar per tarpininką – kaip paslaugos dalį, o ne vėliau prikabintą atskirą atsarginį variantą. Šis įsipareigojimas dabar yra [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) 5 punktas „užtikrinkite, kad paslauga galėtų naudotis kiekvienas“. Tolesnės atskirties mastą stebi Lloyds Banking Group metinis JK vartotojų skaitmeninis indeksas (Consumer Digital Index): 2024 m. leidimas nustatė, kad apie 1,6 mln. žmonių JK vis dar neprisijungę prie interneto, ir kad ši grupė stipriai pasislinkusi link 70–79 metų asmenų, uždirbančių mažiau nei £35 000, ir išėjusių į pensiją ar bedarbių – būtent populiacijos, labiausiai priklausančios nuo viešųjų paslaugų, kurios perprojektuojamos. Ta pati ataskaita nustatė, kad tik 48 % JK darbo jėgos galėjo atlikti visas 20 Esminių skaitmeninių įgūdžių (Essential Digital Skills) sistemos užduočių, o tai reiškia, kad atskirtis nėra dvejetainis ryšys, o įgūdžių, pasitikėjimo ir pasitikėjimo spektras, kurio paprastas rodiklis „turi plačiajuostį internetą“ visiškai nepastebi.

## Matematika

Skaitmeninė įtrauktis yra sistema ir lygybės patikra, o ne viena formulė, tačiau ji jungiasi su kiekybiniu vertės vertinimu per [paskirstymo svertus](../paskirstymo-svertinimas/):

```
Naivi kanalų perkėlimo vertė:
  vertė = perkelta apimtis × (kaina_sena − kaina_skaitmeninė)     [žr. channel-shift-savings]

Įtraukties pakoreguota vertė:
  vertė = (perkelta apimtis × nesverto sutaupymo)
        − (atskirti naudotojai × padedamo skaitmeninio teikimo kaina)
        − (paskirstymo svorio korekcija žalai atskirtoms
           grupėms, kurios praranda prieigą ar susiduria su
           prastesne paslaugos kokybe)

Padedamas skaitmeninis kanalas nėra likutinė nesėkmės kaina – tai
suprojektuotas kanalas su savais [kaštais vienam sandoriui](../kaštai-vienam-sandoriui/),
paprastai kur kas didesniais už sandorį nei savitarnos skaitmeninis,
bet vis tiek paprastai pigesnis už senąjį kanalą, kurį iš dalies pakeičia.
```

## Pavyzdys su skaičiavimais

**Universal Credit tipo nacionalinė pašalpų paslauga**: 2,5 mln. paraiškų per metus, įvertinta, kad padedamo skaitmeninio palaikymo reikia maždaug 10 % pareiškėjų pagal Vyriausybės skaitmeninės strategijos planavimo prielaidą.

```
Atskirta / padedamo skaitmeninio kohorta = 2 500 000 × 10 % = 250 000 paraiškų per metus

Padedamo skaitmeninio kanalo kaina (telefonas + tiesioginė pagalba,
aprūpinta darbuotojais pažeidžiamumui ir sudėtingumui spręsti) ≈ £9,50 / paraiškai
  = 250 000 × £9,50 = £2 375 000 per metus

Savitarnos skaitmeninė kaina likusiems 90 % ≈ £0,40 / paraiškai
  = 2 250 000 × £0,40 = £900 000 per metus

Mišri kaina vienam sandoriui = (2 375 000 + 900 000) / 2 500 000
  = £1,31 / paraiškai

Dizainas, praleidžiantis padedamą skaitmeninį kanalą, kad pasiektų mažesnę pagrindinę
kainą vienam sandoriui (pvz., £0,40 mišri, ignoruojant 250 000
atskirtų pareiškėjų), neišnaikina tos £2,375 mln. kainos – jis
paverčia ją nepareikštomis teisėmis, apeliacijomis ir tolesniu
krizės paslaugų poreikiu, kuris krinta ant visiškai kito biudžeto.
```

## Ryšys su programine inžinerija

Padedamas skaitmeninis kanalas yra suprojektuotas kanalas, o tai reiškia, kad jis turi sąsajas, SLA ir instrumentaciją kaip bet kuris kitas: telefonu pagrįstą bylų tvarkytojo įrankį, tarpininko portalą „Citizens Advice“ ar vietos valdžiai arba tiesioginio aptarnavimo kiosko eigą. Laikyti jį papildomu dalyku – telefono numeriu smulkiu šriftu, o ne kanalu, apsvarstytu nuo atradimo etapo – yra vienas dažniausių būdų, kuriais paslaugos neišlaiko [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) 5 punkto vertinimo. Skaitmeninė įtrauktis yra lygybės lęšis kiekvienai kitai šios grupės temai: ji riboja, kaip agresyviai galima realizuoti [kanalų perkėlimo sutaupymus](../kanalų-perkėlimo-sutaupymai/), tai eilutė, kuri turi būti sąžiningai įtraukta į [kaštus vienam sandoriui](../kaštai-vienam-sandoriui/), ir tai tiesioginis [paskirstymo svorių](../paskirstymo-svertinimas/) taikymas skaitmeninių paslaugų kontekste – sutaupymas, neproporcingai tenkantis žmonėms, kurie jau yra skaitmeniškai ir ekonomiškai atskirti, turėtų būti sverto žemyn, o ne laikomas lygiaverčiu sutaupymui, tolygiai paskirstytam populiacijoje.

## Dažniausios klaidos

- **„Pirmiausia skaitmeniniu būdu“ skaitoma kaip „tik skaitmeniniu būdu“**: telefono linijos ar langelio uždarymas, kai skaitmeninis naudojimas viršija ribą, nepatikrinus, ar likusi kohorta turi tikrai tinkamą alternatyvą.
- **Įtraukties matavimas dvejetainiu ryšiu**: „turi plačiajuostį internetą“ ar „turi išmanųjį telefoną“ yra prastas gebėjimo atlikti konkretų sandorį pakaitalas – Esminių skaitmeninių įgūdžių spraga (tik 48 % JK darbo jėgos atlieka visas 20 užduočių pagal Lloyds 2024) rodo, kad įgūdžiai ir pasitikėjimas svarbūs tiek pat, kiek prieiga.
- **Padedamo skaitmeninio kanalo įkainojimas kaip apvalinimo paklaida**: biudžetuojant jį kaip nedidelę rezervo eilutę, o ne tinkamą kanalą su savais [kaštais vienam sandoriui](../kaštai-vienam-sandoriui/), o paskui nustebstama, kad paleidimo metu jis nepakankamai finansuotas ir aprūpintas.
- **Apklausos tik sėkmingai užbaigusių skaitmeniniu būdu**: pasitenkinimo ir naudojamumo tyrimai, atliekami visiškai paslaugos viduje, praleidžia žmones, kurie niekada neatsidūrė tame etape, o būtent šią populiaciją skaitmeninės įtraukties darbas ir skirtas apsaugoti.

## Šaltiniai

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
