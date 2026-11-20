# Produktivitéit vun ëffentlechen Déngschter

D'Produktivitéit vun ëffentlechen Déngschter mëscht, wéi effizient ëffentlech Ausgaben Inputen (Personal,
Kapital, Wueren a Servicer) a qualitéitsberäinegt Outputen ëmsetzen, fir Servicer – Gesondheet, Bildung,
Policeaarbecht, Sozialpfleeg – déi kee Marchépräis hunn an dofir keng Recettezuel, duerch déi een d'Käschte
deele kéint. Dem UK säi Office for National Statistics publizéiert dës Serie zanter der Mëtt vun den
2000er Joren, an et bleift de methodologesch am meeschte entwéckelten nationalen Versuch, d'Fro ze beäntweren:
„gëtt d'Regierung besser oder méi schlecht doran, Geld a ëffentlech Servicer ëmzesetzen?“

## Firwat et wichteg ass

Op engem Marché ass d'Produktivitéit (Outputwäert) / (Inputkäschte), an de Wäert vum Output ass observéierbar,
well iergendeen derfir bezilt. Eng Hëftoperatioun, e Schoulplaz an eng Policepatrull hu kee Verkafspräis,
sou datt een naiv nëmmen *Inputen* (wat ausginn gouf) moosse kann – wat Kommentateure verleet, wuessend
ëffentlech Ausgaben automatesch als schlecht ze behandelen, well méi Input bei gläichbleibender
Schlagzeil-Aktivitéit no sënkender Produktivitéit ausgesäit. D'ONS-Methodologie, déi a senge
„Sources and Methods“-Publikatioune zur Produktivitéit vun ëffentlechen Déngschter dargestallt ass, léist dat,
andeems en en *Output*-Index aus Aktivitéitsvolumen (duerchgefouert Operatiounen, ënnerriicht Schüler,
ënnersicht Verbriechen) konstruéiert an dësen Output-Index dann *qualitéitsberäinegt* – fir d'Gesondheet
mat Iwwerlieweschancen a Waardezäiten, fir d'Bildung mat Leeschtungsniveauen, fir d'Policeaarbecht mat Outcomes wéi
der Fallléisung –, sou datt e Service, dee selwecht vill Operatiounen duerchféiert, mä besser
Iwwerlieweschancen erreecht, als méi produktiv registréiert gëtt, net just als méi deier. De Schlagzeilebefund,
dee bei ONS-Verëffentlechunge widderkënnt, ass fir de Secteur ernüchterend: d'Produktivitéit vun
ëffentlechen Déngschter am UK ass während der COVID-19-Pandemie staark gefall a war no den eegene ONS-Verëffentlechunge
vun der Mëtt vun den 2020er Joren a verschiddenen Ënnersecteuren, dorënner d'Gesondheetswiesen, nach ëmmer net
erëm um Niveau vun 2019, och wann d'Ausgabe geklomme sinn – eng Lück, déi „méi Finanzéierung“ a „méi
Produktivitéit“ als zwou komplett getrennte Froe nei formuléiert.

## D'Mathematik

```
Output-Index (Volumen) = Σ (Aktivitéit_i × relativt Eenheetskäschtegewiicht_i), mat Basisjoer gewiichtegt
                          iwwer all Serviceaktivitéiten (z. B. Hëftoperatiounen, Katarakt-Operatiounen,
                          Konsultatioune beim Allgemengdokter), analog zu engem Laspeyres/Paasche-Volumenindex

Qualitéitsberäinegung  = Output-Index × Qualitéitsberäinegungsfaktor
                          (z. B. eng Ännerung vun Iwwerlieweschancen, Waardezäiten,
                          Leeschtungsniveauen oder Récidivismus als Multiplikator op de rouen Volumen abezéien)

Input-Index            = Σ (Aarbechtsstonnen × Aarbechtskäschtegewiicht) + (Käschte vu Wueren/Servicer,
                          deflatéiert) + (Kapitalverbrauch)

Wuesstem vun der Gesamtfaktorproduktivitéit = % Ännerung vum qualitéitsberäinegten Output-Index
                                               − % Ännerung vum Input-Index
```

## Rechebeispill

**Illustrativ Berechnung vun der Produktivitéit am NHS-Akutsecteur** (Struktur no der ONS-Methodologie):

```
Joer 1: Output-Volumenindex = 100,0 (Basisjoer), Input-Index = 100,0
        → Produktivitéitsindex = 100,0

Joer 2: Aktivitéitsvolumen klëmmt ëm 3,0 % (méi Operatiounen, méi Rendez-vousen)
        mä d'duerchschnëttlech Waardezäit gëtt méi schlecht, wat e Qualitéits-
        berainegungsofschlag vun −1,0 % applizéiert
        Qualitéitsberäinegten Output-Index = 100 × 1,030 × 0,990 = 101,97

        Inputen klammen: Personalzuel +4,0 %, aner Käschte (deflatéiert) +1,5 %,
        gewiichtegen Input-Index = 100 × 1,032 = 103,2

Produktivitéitswuesstem = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                        = 1,97 % − 3,2 % = −1,23 Prozentpunkten

Interpretatioun: d'Aktivitéit ass geklomme, mä d'Inputen si méi séier geklomme an d'Qualitéit
ass liicht gefall, dofir ass d'Produktivitéit – Output pro Input-Eenheet – gefall,
obwuel „méi Pfleeg geliwwert gouf“.
```

Dat ass genee dat Muster, dat ONS-Verëffentlechunge widderholl fir Deeler vum NHS no der Pandemie gemellt hunn:
wuessend Ausgaben a wuessend rouer Aktivitéit, déi niewenee bestoe mat enger gemoossener Produktivitéit, déi fält,
sou séier wéi d'Qualitéitsberäinegung an d'Inputwuesstem béid berécksiichtegt ginn.

## Verbindung zur Softwareentwécklung

D'Produktivitéit vun ëffentlechen Déngschter ass d'Analogie op Niveau vun der Bevëlkerung zu den Debatten iwwer
d'Produktivitéit an der Softwareentwécklung (geliwwert Story Points géint [DORA-Metriken](../dora-metriken-fir-ëffentleche-wäert/)
géint [Flow-Metriken](../flowmetriken-an-der-regierungsliwwerung/)): rouen Duerchsatz ouni Qualitéitsberäinegung ass an engem
Spidol genee sou irreféierend wéi „geliwwert Zeilen Code“ an engem Softwareteam. Teams, déi Datepipelines fir Leeschtungsdaten
fir Departementer bauen, sollten d'Qualitéitsberäinegung als éischtklasseg, versionéiert Transformatiounsstuf behandelen,
net als Fussnott – well dem ONS seng eege Glafwürdegkeet drop berout, datt dës Berainegung transparent, reproduzéierbar
ass a revidéiert gëtt, wann besser Qualitéitsdate verfügbar ginn (den ONS revidéiert Produktivitéitsschätzunge vu vergaangene Joren,
wann déi ënnerläiend Qualitéitsdate – z. B. Iwwerlieweschancen – definitiv ginn, dofir muss all nofolgend System, dat
dës Statistike verbraucht, rëckwierkend Revisiounen ënnerstëtzen, net nëmmen nei Perioden unhänken). Et iwwerschneit sech och direkt mat
[Gesamtbesëtzkäschte](../gesamtbesëtzkäschte-an-der-verwaltungs-it/) an
[KI-Produktivitéit am ëffentleche Secteur](../ki-produktivitéit-am-ëffentleche-secteur/): e System, dat de rouen Aktivitéitsvolumen
erhéicht, ouni d'Qualitéit ze verbesseren oder ze halen, ass, nom ONS selwer, keng Produktivitéitsverbesserung.

## Feelerquellen

- **Inputwuesstem als Produktivitéitswuesstem behandelen**: méi Ausgaben, déi méi Personal finanzéieren, produzéieren méi
  *Aktivitéit*, net méi *Produktivitéit*, ausser den Output pro Input-Eenheet klëmmt och – déi zwee ginn   politescher Kommentaren routinéiert verwiesselt.
- **D'Qualitéitsberäinegung komplett ignoréieren**: en Output-Index, deen nëmmen aus rouen Aktivitéitszuelen opgebaut ass, weist
  „Produktivitéitsgewënn“ doduerch, datt méi vun eppes Mannerwäertegem oder méi niddreger Qualitéit gemaach gëtt; dem ONS seng
  Qualitéitsberäinegung gëtt et spezifesch, fir dat opzefänken.
- **Produktivitéitsindizes tëscht Ënnersecteuren ouni gläichen Alter vun der Methodologie vergläichen**: Produktivitéit vu
  Gesondheet, Bildung a Policeaarbecht ass jee aus anere Aktivitéits- a Qualitéitsdatequellen op ënnerschiddleche
  Revisiounszyklen opgebaut – e naive Vergläich iwwer Secteuren vergläicht inkompatibel Instrumenter.
- **De Fall vun der Produktivitéit an engem eenzele Joer als permanenten Trend liesen**: Produktivitéitszuelen aus der Pandemie-
  an Post-Pandemie-Zäit hunn bedeitend Joer-zu-Joer-Volatilitéit gewisen, well Qualitéitsdate (z. B. Waardelëschten, Erhuelung vun
  elektive Behandlungen) sech selwer verännert hunn; den ONS warnt konsequent dovir, Bewegungen vun engem eenzege Joer ze iwwerinterpretéieren.

## Quellen

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
