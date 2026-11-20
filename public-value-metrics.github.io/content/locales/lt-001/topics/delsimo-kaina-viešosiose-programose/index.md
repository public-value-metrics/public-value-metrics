# Delsimo kaina viešosiose programose (CoD)

Delsimo kaina (angl. Cost of Delay) – tai visuomeninė vertė, prarandama per laiko vienetą, kol programa, paslauga ar sistemos pakeitimas *dar nepateiktas*. Tai pagrindinis šios temų grupės jungiamasis rodiklis: jis paverčia „paleidimas nukeltas šešiems mėnesiams“ svarais per savaitę ar WELLBY per savaitę, kad dėl vėlavimo būtų galima ginčytis ta pačia valiuta kaip ir pats verslo atvejis.

## Kodėl tai svarbu

Reinertseno taisyklė – „jei kiekybiškai įvertinsite tik vieną dalyką, įvertinkite delsimo kainą“ – į valdžios sektorių pereina beveik nepakitusi, nes viešosios programos yra neįprastai jautrios: verslo atvejai tvirtinami pagal prognozuojamą naudos srautą, bet srautas pradeda tekėti tik paleidus, ir kiekviena vėlavimo savaitė yra savaitė prarastos vertės, kurios niekas neįkainoja rizikų registre. Nacionalinio audito biuro (National Audit Office) pakartotinė „Universal Credit“ diegimo patikra (žr. jo ataskaitas „Rolling Out Universal Credit“, <https://www.nao.org.uk/>) iliustruoja šį modelį: tvarkaraščio vėlavimas buvo stebimas ir pranešamas, bet svarų per savaitę kaina už tai, kad reformuota sistema *dar* nepateikta kitai pareiškėjų partijai, retai buvo nurodoma kaip pagrindinis skaičius, nors būtent tas skaičius turėjo lemti prioritetų nustatymą ir eskalavimą. Be CoD skaičiaus vėluojanti programa atrodo kaip tvarkaraščio problema teikimo valdybai; su juo – tai vertės erozijos problema apskaitos pareigūnui.

## Matematika

```
CoD = nauda per laiko vienetą, prarasta kol nepateikta   (£/savaitę ar WELLBY/savaitę)

Bendri vėlavimo nuostoliai = CoD × vėlavimo trukmė

Naudos srautai, sumuojami viešosioms programoms:
  pinigus išlaisvinantys sutaupymai   (sukčiavimo / klaidų mažinimas, išvengtos laikinos išlaidos)
+ pinigų neišlaisvinantis išlaisvintas pajėgumas  (atvejų darbuotojų / pareigūnų valandos × pilnutinė kaina)
+ gerovės nauda                    (WELLBY × £13 000/WELLBY, HMT Green Book
                                    papildomos gerovės gairės, 2019 m. kainos)
```

Piliečiams skirtoms paslaugoms nurodykite ir gerovę, ir pinigus – pagrindinį vienetą žr. [gerovės pakoreguoti gyvenimo metai](../gerovės-pakoreguoti-gyvenimo-metai/), o tai, ką būtų galima finansuoti atidėtu svaru – [alternatyvieji kaštai viešosiose išlaidose](../alternatyvioji-kaina-viešosiose-išlaidose/).

## Pavyzdys su skaičiavimais

**Vietos valdžia**: būsto pašalpos sistemos atnaujinimas sumažina permokų klaidą £150 už paraišką per metus 20 000 veikiančių paraiškų.

```
Metinė nauda = 150 × 20 000 = £3 000 000 per metus
CoD = 3 000 000 / 52 ≈ £57 700 per savaitę
12 mėnesių diegimo vėlavimas kainuoja 52 × 57 700 ≈ £3 000 000 išvengiamos klaidos.
```

**Centrinės valdžios agentūra**: negalios pašalpų vertinimo paslauga, pateikta šešiais mėnesiais (26 savaitėmis) vėliau nei planuota, reiškia, kad 200 000 pareiškėjų per metus vidutiniškai trim savaitėms ilgiau laukia sprendimo. Kiekviena papildoma finansinio neapibrėžtumo savaitė modeliuojama kaip −0,0018 WELLBY (gyvenimo pasitenkinimo balo) poveikis:

```
WELLBY nuostolis vienam pareiškėjui = 3 × 0,0018 = 0,0054
Metinis WELLBY nuostolis = 200 000 × 0,0054 = 1 080 WELLBY per metus
CoD_gerovė = 1 080 / 52 ≈ 20,8 WELLBY per savaitę
CoD_pinigai = 20,8 × £13 000 ≈ £270 000 per savaitę gerovės vertės
```

26 savaičių vėlavimas todėl „kainuoja“ maždaug 540 WELLBY – apie 7 mln. svarų pagal „Green Book“ gerovės vertinimą – paversdamas praleistą paleidimo datą piliečių gerovės įvykiu, o ne projektų valdymo išnaša.

## Ryšys su programine inžinerija

CoD daro [DORA rodiklius](../dora-metrikos-viešajai-vertei/) ir [srauto rodiklius](../srauto-metrikos-vyriausybės-teikime/) finansiškai suprantamus: vedimo laikas konvejeryje × CoD yra pinigai (ar gerovė), sudeginti eilėse, dar nepasiekus piliečio. Konkrečiai:

- **Prioritetų nustatymas**: reitinguokite atsilikusių darbų sąrašą pagal CoD ÷ trukmė, o ne pagal suinteresuotųjų šalių vyresnybę – programinės inžinerijos analogas „Green Book“ reikalavimui vertinti variantus pagal vertę, o ne pagal tai, kas prašo.
- **Pirkimai**: 12–18 mėnesių pagal sistemą vykdomas pirkimo ciklas turi CoD; jį įkainojus keičiasi paspartintų kelių skubumo pagrindimas, ir tai tiesiogiai maitina [kurti ar pirkti](../kurti-ar-pirkti-valdžios-sektoriuje/) sprendimus, kuriuose laikas iki vertės yra sprendimo veiksnys.
- **Naudos atvejis**: kiekvienas tvirtinimo metu nurodytas CoD skaičius turėtų vėl atsirasti [naudos realizavime](../naudos-realizavimas/) – jei vėlavimo kaina buvo tikra, paspartinta nauda turėtų būti išmatuojama po paleidimo.

## Dažniausios klaidos

- **Tiesinio CoD prielaida**: kai kurios viešosios paslaugos turi terminų pavidalo vertę (teisės aktais nustatyta atitikties data – CoD po datos šoktelia iki vykdymo rizikos lygio, o prieš ją beveik nulis), o ne tolygią savaitinę normą. Prieš dauginant suklasifikuokite skubumo profilį.
- **CoD produktams, kurių niekam nereikia**: vėlavimas turi kainą tik tada, jei nepateiktas dalykas turi vertę; sistema, kurios niekas nenaudos, turi nulinį CoD, kad ir kaip vėluotų.
- **Dvigubas vėlavimo ir diskontavimo skaičiavimas**: [socialinė diskonto norma](../socialinė-diskonto-norma/) jau įkainoja laiką daugiamečiuose vertinimo horizontuose; CoD yra horizonto viduje veikianti, operacinė versija savaitėms ir mėnesiams. CoD naudokite tvarkaraščio vėlavimui, NPV poslinkį – daugiamečiam fazių perskirstymui.

## Šaltiniai

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
