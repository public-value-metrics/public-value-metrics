# Bendrieji nuosavybės kaštai valdžios IT

Bendrieji nuosavybės kaštai (angl. total cost of ownership, TCO) – tai visi sistemos gyvavimo ciklo kaštai – įsigijimas plius kiekvieni eksploatavimo metai – diskontuoti iki bendros datos. Valdžios IT srityje patikimiausia prognozavimo klaida yra tiekėjų ar variantų lyginimas vien pagal įsigijimo kainą, nors eksploatavimas ir priežiūra paprastai sudaro nuo pusės iki keturių penktadalių visos gyvavimo sąskaitos.

## Kodėl tai svarbu

HM Treasury „Green Book“ reikalauja, kad bet kurio penkių atvejų modelio verslo atvejo finansinė dalis aprėptų viso gyvavimo kaštus, o ne vien kapitalo išlaidas – tačiau Nacionalinė audito tarnyba ne kartą nustatė, kad departamentai tvirtina IT investicijas remdamiesi nepilna ar optimistiška eksploatavimo kaštų prognoze, o tikruosius veiklos kaštus išsiaiškina, kai sistema jau veikia ir kapitalo biudžeto eilutė uždaryta. Vyriausybinės skaitmeninės tarnybos ir Centrinės skaitmeninių ir duomenų reikalų tarnybos Technologijų praktikos kodeksas (<https://www.gov.uk/guidance/the-technology-code-of-practice>) stumia departamentus link debesijos ir standartinio prieglobos dalinai todėl, kad tai daro nuolatinius kaštus matomus ir palyginamus, užuot palaidojus juos vienoje kapitalo pirkimo sumoje, kuri patvirtinimo metu atrodo viliojamai maža, o po trejų metų – brangiai klaidinga.

## Matematika

```
TCO = Įsigijimo kaštai + Σ(t=1..N) Metiniai eksploatavimo kaštai_t / (1+r)^t
      − likutinė vertė (diskontuota)

r = HM Treasury „Green Book“ standartinė socialinė diskonto norma, 3,5 % per metus
    (mažėjantis normų grafikas horizontams, ilgesniems nei 30 metų)

Eksploatavimo kaštų sudedamosios dalys: prieglobos paslaugos / licencijos,
palaikymas ir priežiūra, saugumo naujinimai ir atitiktis, darbuotojų laikas,
planinis atnaujinimas / migracija
```

Žr. [socialinė diskonto norma](../socialinė-diskonto-norma/) – kodėl diskonto koeficientas svarbus per tipinį 5–10 metų sistemos gyvavimo laikotarpį, ir [kurti ar pirkti valdžios sektoriuje](../kurti-ar-pirkti-valdžios-sektoriuje/) – kaip TCO naudojamas kūrimo ar pirkimo sprendimui.

## Pavyzdys su skaičiavimais

Departamentas lygina dvi bylų valdymo sistemas 5 metų horizonte taikydamas „Green Book“ 3,5 % diskonto normą.

```
A sistema: kapitalo išlaidos £3 500 000, eksploatavimo išlaidos £250 000 per metus
B sistema: kapitalo išlaidos £1 800 000 (atrodo pigiau), eksploatavimo išlaidos £650 000 per metus
          (didesnė tiekėjo palaikymo ir integracijos našta)

Naivus palyginimas vien pagal kapitalo išlaidas: laimi B, £1,8 mln. < £3,5 mln.

Diskonto koeficientų suma, 5 metai esant 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = £4 734 750
```

TCO apverčia naivų sprendimą: B sistema per penkerius metus kainuoja šiek tiek daugiau, kai eksploatavimo kaštai diskontuojami ir susumuojami, nes jos eksploatavimo dalis visuose gyvavimo kaštuose yra 62 % (2 934 750 / 4 734 750), palyginti su A sistemos 24 % – konkretus „priežiūra yra didžioji sąskaitos dalis“ išvados pavyzdys, visiškai paslėptas lyginant lipdukų kainas.

## Ryšys su programine inžinerija

TCO yra skaičius, kuris turėtų drausminti kiekvieną [kurti ar pirkti](../kurti-ar-pirkti-valdžios-sektoriuje/) sprendimą ir kiekvieną [techninės skolos](../techninė-skola-kaip-viešosios-vertės-erozija/) dengimo atvejį, nes skolos palūkanos ir atidėta priežiūra yra eksploatavimo kaštų eilutės, kurios priklauso tai pačiai diskontuotai sumai, nesvarbu, ar kas nors jas sekė. Inžinieriai, siūlantys platformą ar tiekėją, turėtų pateikti visą TCO lentelę, o ne pirkimo kainą, nes pirkimo kaina yra būtent tas skaičius, kuriuo vien pasikliauti „Green Book“ finansinė dalis skirta atgrasyti departamentus. TCO taip pat yra sąžiningas vardiklis [vertės už pinigus](../vertė-už-pinigus/) sprendimams – VFM lygina naudą su kaštais, o nepakankamai suskaičiuota kaštų eilutė išpučia kiekvieną verslo atvejo VFM santykį.

## Dažniausios klaidos

- **Palyginimas vien pagal kapitalo išlaidas**: dažniausia pirkimų klaida – tiekėjų kainoraščio kainų lyginimas be kiekvieno varianto suderintos eksploatavimo kaštų prognozės.
- **Pasitraukimo ir migracijos kaštų neįtraukimas**: duomenų išgavimas pasibaigus sutarčiai, perkėlimas į kitą platformą ir priklausomybės nuo tiekėjo (vendor lock-in) baudos yra tikros TCO eilutės, kurios retai atsiranda pradiniame verslo atvejyje.
- **Saugumo ir atitikties kaštų neįtraukimas**: naujinimų dažnis, akreditacijos atnaujinimas ir audito kaštai auga didėjant sistemos amžiui ir sudėtingumui – žr. [viešojo sektoriaus kibernetinio saugumo vertė](../viešojo-sektoriaus-kibernetinio-saugumo-vertė/) – ir įprastai praleidžiami eksploatavimo kaštų prognozėje.
- **Nediskontuotas variantų su skirtingais kaštų profiliais palyginimas**: lyginant daug kapitalo reikalaujantį variantą su daug eksploatavimo kaštų turinčiu be diskontavimo sistemingai pasirenkamas tas, kuris daugiau kaštų atideda vėlesniems metams.

## Šaltiniai

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
