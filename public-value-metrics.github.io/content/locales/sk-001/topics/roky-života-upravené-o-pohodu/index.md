# Roky života upravené o pohodu (WELLBY)

WELLBY je jeden dodatočný bod spokojnosti so životom na štandardnej škále pohody 0 – 10 pre jednu osobu na jeden rok. Je to štrukturálny analóg QALY používaného v ekonómii zdravia – jediná jednotka, ktorá umožňuje porovnávať intervencie, ktorých výsledky nemajú nič iné spoločné – ale postavený na subjektívnej pohode namiesto klinických zdravotných stavov a vymedzený v dokumente HM Treasury „Wellbeing guidance for appraisal: supplementary Green Book guidance“ (2021).

## Prečo na tom záleží

Analýza nákladov a prínosov potrebuje spoločnú jednotku, aby porovnala grant pre mládežnícky klub, projekt bezpečnosti ciest a službu duševného zdravia, z ktorých žiadne nezdieľajú mieru výsledku. Ekonómia zdravia to pre klinické intervencie vyriešila pomocou QALY: kvalitou upraveného roku života, váženého od 0 (mŕtvy) po 1 (plné zdravie). Usmernenie HM Treasury k pohode rozširuje rovnakú logiku na nezdravotné verejné výdavky a ako rebrík výsledku používa harmonizovanú otázku ONS o spokojnosti so životom („Overall, how satisfied are you with your life nowadays?“, odpoveď 0 – 10) namiesto indexu zdravotného stavu. WELLBY 1 znamená, že spokojnosť so životom jednej osoby stúpne o celý bod na jeden rok (alebo ekvivalentne, že spokojnosť desiatich ľudí stúpne o 0,1 bodu na rok – WELLBY sa v populácii sčítavajú tak, ako QALY). Usmernenie HM Treasury stanovuje ilustratívnu peňažnú hodnotu na WELLBY (okolo £13 000, ceny 2019/20), odvodenú zosúladením údajov o subjektívnej pohode s inými prístupmi k hodnote roku života, čo dáva hodnotiteľom spôsob, ako oceniť v peniazoch výsledky – zníženie osamelosti, súdržnosť komunity, prístup k zeleni –, ktoré techniky [oceňovania pohody](../oceňovanie-pohody/) predtým vedeli len opísať, nie porovnať na spoločnom základe s výdavkami na zdravie alebo bezpečnosť.

## Matematika

```
WELLBY = Δ spokojnosť so životom (škála 0–10) × počet rokov, počas ktorých zmena pretrváva
        (sčítané naprieč všetkými dotknutými ľuďmi)

Peňažný prínos pohody = vytvorené WELLBY × hodnota na WELLBY (referenčná hodnota HMT)

porov. QALY = Δ úžitok zdravotného stavu (škála 0–1) × roky prežité v tomto stave
```

Škála spokojnosti 0 – 10 a škála užitku QALY 0 – 1 nie sú zameniteľné bez kroku prepočtu; usmernenie HM Treasury sa zaoberá zosúladením oboch, aby napríklad zdravotná intervencia hodnotená v QALY a sociálna intervencia hodnotená vo WELLBY neboli potichu dvojmo započítané alebo nezostali nesúmerateľné v rámci toho istého [hodnotenia podľa Green Book](../hodnotenie-podľa-green-book/).

## Vypracovaný príklad

**Služba proti osamelosti miestnej samosprávy**: program priateľstva (befriending) obsluhuje 400 izolovaných starších obyvateľov. Následné prieskumy ukazujú, že priemerná spokojnosť so životom stúpne z 5,2 na 6,0 (zisk 0,8 bodu) a účinok sa odhadom udrží 2 roky, kým vyprchá.

```
WELLBY = 400 ľudí × 0,8 bodu × 2 roky = 640 WELLBY

Peňažná hodnota = 640 × £13 000 = £8 320 000
```

Pri ročných nákladoch programu £300 000 (£600 000 za 2 roky) je pomer prínosov a nákladov približne 8 320 000 / 600 000 ≈ **13,9 : 1** – číslo, ktoré môže teraz sedieť v tej istej tabuľke hodnotenia ako náklady na zabránené QALY pri zdravotnom programe alebo úspory času cestovania pri dopravnom projekte.

**Charita, menší rozsah**: komunitný umelecký program osloví 50 účastníkov s nameraným nárastom spokojnosti o 0,3 bodu, ktorý trvá 1 rok.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Peňažná hodnota = 15 × £13 000 = £195 000
```

## Súvislosť so softvérovým inžinierstvom

- Každá služba pre občanov, ktorá už zbiera položku prieskumu o spokojnosti so životom alebo pohode (mnohé platformy miestnych samospráv a zdravotnej a sociálnej starostlivosti to robia podľa štyroch štandardných otázok ONS o pohode), môže WELLBY vypočítať priamo z existujúcich dátových pipeline namiesto objednávania osobitného ekonomického hodnotenia pre každú zmenu služby.
- WELLBY dávajú inžinierskym tímom, ktoré budujú vykazovanie podľa [zákona o sociálnej hodnote](../zákon-o-sociálnej-hodnote/) alebo [sociálnej návratnosti investície](../sociálna-návratnosť-investície/), celoštátne štandardizovaný menovateľ schválený HM Treasury, čím sa vyhnú množeniu osobitných „skóre dopadu“, ktoré sa nedajú porovnávať naprieč zmluvami alebo dodávateľmi.
- Keďže WELLBY sú aditívne naprieč ľuďmi a časom, čisto sa skladajú do populačného sledovania výsledkov používaného v systémoch [zodpovednosti založenej na výsledkoch](../zodpovednosť-založená-na-výsledkoch/) – dashboard služby môže vykazovať kumulatívne vytvorené WELLBY za štvrťrok tak, ako zdravotnícky systém vykazuje získané QALY.

## Úskalia

- **Predpoklad, že zisky zo sebavykazovanej spokojnosti sú plne pripísateľné intervencii** – bez kontrafaktuálu (porovnávacia skupina alebo návrh pred/po s kontrolami) nemožno oddeliť zisk WELLBY od všeobecných trendov; pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/).
- **Miešanie WELLBY a QALY do jedného súčtu bez zosúladenia** – usmernenie HM Treasury výslovne uvádza, že obe používajú odlišné škály a odlišné podkladové teórie hodnoty; ich naivné sčítanie dvojmo započítava prekrývajúci sa blahobyt.
- **Nekritické použitie referenčnej peňažnej hodnoty** – číslo v £ na WELLBY je odhad národného priemeru so skutočnými pásmami neistoty; usmernenie HM Treasury odporúča analýzu citlivosti, nie chápanie ako pevného výmenného kurzu.

## Zdroje

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
