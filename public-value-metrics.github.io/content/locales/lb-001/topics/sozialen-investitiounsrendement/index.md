# Sozialen Investitiounsrendement (SROI)

De sozialen Investitiounsrendement (Social Return on Investment, SROI) ass e Rahmen, fir e breede Wäertbegrëff – sozial, ökologesch a wirtschaftlech – ze moossen, ze monetariséieren an ze bilanzéieren a als Verhältnis zu de investéierte Ressourcen auszedrécken, zum Beispill „£1,44 sozialen Wäert fir all investéierte £1". Hien ass entwéckelt ginn, fir d'Logik vun der Finanzbuchhaltung op Resultater auszedehnen, déi d'Mäert net bepräisen, ouni d'Disziplin vun der Buchhaltung ze verléieren: all Zuel an engem SROI muss op e Resultat zeréckzeféieren sinn, dat vun de Betraffenen definéiert ass, op eng Beweisbasis an op eng explizit Upassung fir dat, wat souwisou geschitt wier.

## Firwat et wichteg ass

De SROI gëtt vu Social Value UK a Social Value International gepflegt, de Nofolgeorganisatioune vum SROI Network, deem säi „A Guide to Social Return on Investment" (2012) nach ëmmer d'Referenzmethodologie ass. De Rahmen baséiert op siwe Prinzipien – d'Betraffen abannen, verstoen, wat sech ännert, d'Saache bewäerten, déi zielen, nëmmen dat abezéien, wat wesentlech ass, net iwwerdreiwen, transparent sinn an d'Resultat verifizéieren –, an et ass Prinzip fënnef, „net iwwerdreiwen", un deem déi meescht SROI-Berichter an der Praxis scheitern. E Verhältnis, dat ouni Upassunge fir Matnahmeeffekt an Zouuerdnung entstanen ass, ass kee SROI; et ass eng Marketingzuel am Kleed vun engem SROI. Softwareentwéckler, déi Berichtsinstrumenter fir Associatiounen, Sozialunternehmen oder Auftraggeber bauen, mussen den Ënnerscheed kennen, well den Tool entweder déi Disziplin duerchsetzt oder et einfach mécht, se ze iwwersprangen.

## D'Mathematik

De SROI hänkt vun enger [Wierkungstheorie (Theory of Change)](../wierkungstheorie/) of, fir ze identifizéieren, wéi eng Resultater am Ëmfang sinn, a bréngt se mat deeselwechte Verantwortungskette wéi e [Logikmodell](../logikmodell/) zum Ausdrock:

```
SROI-Verhältnis = Gegewaartswäert vun de Resultater / Wäert vun den Inputen

Prozess:
 1. Ëmfang festleeën an d'Betraffe identifizéieren, deenen hir Resultater gemooss ginn
 2. Resultater kartéieren (eng Wierkungstheorie, mat de Betraffe belegt, net ugeholl)
 3. Resultater belegen a mat Hëllef vu finanziellen Ersatzgréissten (Proxies) bewäerten
 4. Wierkung feststellen: Brutto-Wäert − Matnahmeeffekt − Zouuerdnung − Verdrängung, dann Drop-off uwenden
 5. De SROI berechnen: Nettogegewaartswäert vun der Wierkung ÷ Wäert vun den Inputen
 6. Berichten, notzen an verankeren — d'Verhältnis ass en Kommunikatiounsmëttel, net den Endpunkt
```

Matnahmeeffekt, Zouuerdnung a Verdrängung ginn an [Additionalitéit a Matnahmeeffekt](../additionalitéit-a-matnahmeeffekt/) a [Verdrängung an Zouuerdnung](../verdrängung-a-zouerdnung/) behandelt; alle dräi si do, fir déi richteg [kontrafaktesch](../kontrafaktesch-analys/) Wierkung vum Brutto-Resultat ze isoléieren.

## Rechebeispill

**Beschäftegungsprogramm vun enger lokaler Behörd**: jäerlech Inputkäschten £250.000. Sechzeg Participante kommen an eng dauerhaft Beschäftegung; e finanzielle Proxy fir dat Resultat (Wuelbefannen-Gewënn, manner Ofhängegkeet vu Sozialleeschtungen a Steiereinnahmen zesummen) ass £8.500 pro Persoun fir dat éischt Joer – kuckt [Datebanke mat Eenheetskäschten](../datebanke-mat-eenheetskäschten/), wou esou Proxies hierkommen.

- Brutto-Resultatwäert: 60 × £8.500 = £510.000
- Minus Matnahmeeffekt (40 % hätten wahrscheinlech och ouni de Programm Aarbecht fonnt): £510.000 × 0,60 = £306.000
- Minus Zouuerdnung (30 % vun der verbleiwender Ännerung ginn op d'Ënnerstëtzung vun anere Stellen zeréck): £306.000 × 0,70 = £214.200
- Resultat am Joer 2 bei 30 % Drop-off: £214.200 × 0,70 = £149.940, mat 3,5 %/Joer diskontéiert (kuckt [sozialen Diskontsaz](../sozialen-diskontsaz/)): £149.940 ÷ 1,035 = £144.870
- Gesamte Gegewaartswäert vun der Wierkung: £214.200 + £144.870 = £359.070
- **SROI-Verhältnis: £359.070 ÷ £250.000 = 1,44**, gemellt als „£1,44 sozialen Wäert fir all investéierte £1"

**Associatioun**: e Besuchsservice fir £60.000 reduzéiert d'Eenzamkeet bei 80 eelere Leit, bewäert mat engem Proxy vun £1.100/Persoun/Joer. Brutto-Wäert £88.000; no 35 % Matnahmeeffekt a 15 % Zouuerdnung ass d'Nettowierkung £88.000 × 0,65 × 0,85 = £48.620, e SROI-Verhältnis vun 0,81 – ënner dem Break-even, wat e legitimt a nëtzlecht Resultat ass, kee Grond, et net opzeschreiwen.

## Verbindung zur Softwareentwécklung

E SROI-Rechner, deen et engem Benotzer erlaabt, Resultatzuelen a Proxy-Wäerter anzeginn, awer kee obligatorescht Feld fir Matnahmeeffekt, Zouuerdnung oder eng verlinkt Wierkungstheorie huet, produzéiert standardméisseg opgeblosen Verhältnisser, well d'Auslosse vun Upassunge de Wee vum klengste Widderstand ass. D'Disziplin an d'Schema afbauen: all Resultatzeil soll op eng Betraffegrupp, eng belegt Quantitéit, e finanziellen Proxy mat senger Quell an net fakultativ Felder fir Matnahmeeffekt/Zouuerdnung verweisen. Kuckt [Resultater géint Outputen](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/) fir den Ënnerscheed, vun deem d'SROI-Resultatkartéierung ofhänkt, a [Logikmodell](../logikmodell/) fir d'Kette, déi den Tool a sengem Datemodell nobilde soll.

## Feelerquellen

- **Matnahmeeffekt an Zouuerdnung iwwersprangen.** D'Schlagzuel ouni dës Upassunge ass eng Brutto-Zuel, keng Netto-Wierkungszuel, an d'Prinzipie vu Social Value UK verlaangen allen zwee explizit.
- **Verhältnisser tëscht Organisatiounen vergläichen.** E SROI-Verhältnis hänkt vun Ëmfang a Proxy-Wale of, déi vun Fall zu Fall getraff ginn; e Verhältnis vu 4:1 aus engem Rapport als „besser" wéi 2:1 aus engem anere ze behandelen, ignoréiert, datt d'Viraussetzungen net wéi bei enger finanzbuchhalteresche Kennzuel standardiséiert sinn.
- **Iwwerlappend Proxies duebel zielen.** E Proxy „manner Eenzamkeet" mat engem Proxy „besser mental Wuelbefannen" fir déiselwecht Begënschtegt ze stapelen, kann eng an dieselwecht Ännerung duebel bewäerten.
- **D'Betraffenebedeelegung iwwersprangen.** Prinzip eent verlaangt, datt Resultater mat de Leit definéiert ginn, déi se erliewen, net vum Analyst ugeholl ginn, deen d'Modell baut.

## Quellen

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
