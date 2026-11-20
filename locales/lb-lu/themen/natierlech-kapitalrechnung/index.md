# Natierlech Kapitalrechnung

D'Natierlech Kapitalrechnung stellt d'Ëmwelt op déiselwecht Basis wéi all aner national oder
organisatoresch Aktiv: si mësst de Bestand u natierleche Ressourcen (Bëscher, Biedem, Flëss,
Fiichtgebidder, d'Atmosphär) an de Floss vun de Servicer, déi se produzéieren (Kuelestoffbindung,
Héichwaasserschutz, Erhuelung, Liewensmëttel), souwuel a physeschen wéi a monetären Zuelen, sou datt den
Ëmweltverbrauch an der Entscheedungsfindung sichtbar gëtt, wéi et de Ofbau vu Finanzkapital géif. D'UK ass
eng vun de Regierungen, déi dat am wäitste systematesch maachen, ugedriwwen duerch de 25 Year Environment
Plan (2018) an ëmgesat duerch d'UK Natural Capital Accounts vum ONS an d'Ergänzungsleitlinne vum HM
Treasury zur Green Book.

## Firwat et wichteg ass

Konventionell Comptabilitéit – a Betriber wéi a Regierungen – behandelt e Bësch als wäertlos, bis e
gefällt a als Holz verkaaft gëtt, an deem Moment gëtt e Bestanddeel vum BIP. D'Natierlech Kapitalrechnung
gëtt et, fir dës Lück ze schléissen: dem UK säi 25 Year Environment Plan huet d'Regierung engagéiert,
d'Denken iwwer natierlecht Kapital an der ganzer Politik z'integréieren, mat der ausdrécklecher Ambitioun,
„déi éischt Generatioun ze sinn, déi d'Ëmwelt a engem besseren Zoustand hannerléisst, wéi mir se fonnt
hunn.“ De ONS huet zënterhir jäerlech UK Natural Capital Accounts publizéiert
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), déi de
monetäre Wäert vun Ökosystemservicer schätzen – vun der Bëscherhuelung iwwer d'Gesondheetsvirdeeler vu
grénge Flächen an de Stied bis zur Kuelestoffspäicherung am Moor – mat deemselwechte Rahmen vun den nationale
Comptë wéi fir produzéiert Kapital, sou datt natierlecht Kapital schliisslech an déiselwecht Bilanz wéi
Stroossen, Gebaier an Ausrüstung kënnt. D'Leitlinn Enabling a Natural Capital Approach (ENCA) vum HM
Treasury, ergänzend zur Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
beschreift, wéi Appraiser Ëmweltkäschten an -virdeeler a Business-Cases bewäerte sollen, sou datt e
Stroosseprojet, deen eelt Bëscher zerstéiert, oder e Héichwaasserschutzprojet, dee Fiichtgebidder
restauréiert, op konsequent monetärer Basis vergläichbar sinn, amplaz datt dee ee eng Zuel huet an deen
aneren e Paragraph vu Virbehalter.

## D'Mathematik

```
Wäert vum Ökosystemservice-Aktiv = NPV vum Floss vun de Servicer, déi d'Aktiv erbrénge

Wäert vum Aktiv = Σ (t = 1 bis T) [Wäert vum jäerleche Service-Floss_t / (1 + r)^t]

wou:
  Wäert vum Service-Floss_t = Quantitéit vum Service am Joer t × Eenheetswäert
                          (z. B. Erhuelungsbesiicher × Wäert pro Besuch;
                           Tonne gebonnene Kuelestoff × Kuelestoffpräis)
  r = Diskontsaz (Green-Book-Diskontsaz fir d'Gesellschaft – kuckt
      [sozialen Diskontsaz](../sozialen-diskontsaz/))
  T = Zäithorizont, iwwer deen d'Aktiv de Service viraussiichtlech erbréngt
```

Dat ass déiselwecht Netto-Gegenwaertswäert-Struktur, déi benotzt gëtt, fir produzéiert Kapital ze bewäerten
oder all ëffentlech Investitioun ënner der [Green-Book-Appraisal](../bewäertung-no-dem-green-book/) ze bewäerten –
de Bäitrag vun der natierlecher Kapitalrechnung ass et, glafwürdeg physesch Quantitéiten an Eenheetswäerter
fir Servicer ze liwweren, déi virdru mat null bepräist goufen.

## Rechebeispill

**Stad-Bësch, Erhuelungswäert**: E 50 Hektar grousse Bësch kritt geschat 80 000 Erhuelungsbesiicher pro Joer,
all bewäert (iwwer d'Reiskäschte- oder Stated-Preference-Method – kuckt
[Bewäertung duerch opgedeckte Präferenzen](../bewäertung-duerch-opgedeckte-präferenzen/) a
[Bewäertung duerch erkläert Präferenzen](../bewäertung-no-deklaréierte-präferenzen/)) mat £3 pro Besuch. De Bësch
soll dëse Service 50 Joer laang weider erbréngen, appraiséiert mat engem Diskontsaz vun 3,5 %.

```
Jäerleche Erhuelungswäert = 80 000 × £3 = £240 000/Joer

NPV iwwer 50 Joer bei 3,5 % ≈ £240 000 × Annuitéitsfaktor(3,5 %, 50 Joer)
Annuitéitsfaktor(3,5, 50) ≈ 21,4

Wäert vum Aktiv ≈ £240 000 × 21,4 ≈ £5 136 000
```

**Kuelestoffspäicherung derbäi**: Deeselwechte Bësch bënnt geschat 400 Tonne CO2 pro Joer, bewäert mam
Kuelestoffpräis vun der Regierung fir net gehandelt Emissiounen vu ronn £75/Tonn (illustrativ – fir eng
aktuell Appraisal déi aktuell publizéiert BEIS/DESNZ-Kuelestoffwäerter benotzen).

```
Jäerleche Kuelestoffwäert = 400 × £75 = £30 000/Joer
NPV iwwer 50 Joer bei 3,5 % ≈ £30 000 × 21,4 ≈ £642 000

Gesamtwäert vum Bësch-Aktiv (Erhuelung + Kuelestoff) ≈ £5 136 000 + £642 000
                                                   ≈ £5 778 000
```

Dat ass virun den Servicer fir Héichwasserdämpfung, Biodiversitéit oder Loftqualitéit, déi d'ENCA-Leitlinn
d'Appraiser och unhält ze berécksiichtegen – d'Total ass bewosst eng Ënnergrenz, keng Uewergrenz.

## Verbindung zur Softwareentwécklung

- Ëmwelt- a Asset-Management-Systemer fir lokal Behörden an Agencë (Parken, Stroossen, Gewässer) kënnen
  niewent hirem Register vu physeschen Aktiver e Register fir natierlecht Kapital féieren, mat deemselwechte
  Muster Service-Floss mol Eenheetswäert wéi bei all anerer [Datebank mat Eenheetskäschten](../datebanke-mat-eenheetskäschten/),
  déi d'Organisatioun ennerhält.
- Well den NPV vum natierleche Kapital sensibel op den Diskontsaz reagéiert (kuckt den Annuitéitsfaktor am
  Rechebeispill), soll all Tool, dat en ausrechent, de Saz an den Horizont als sichtbar Inputen exponéieren,
  net verstoppen – dat selwecht Transparenzprinzip, dat ënner
  [Generatiounsgerechtegkeet an Nohaltegkeets-Diskontéierung](../generatiounegerechtegkeet-an-diskontéierung-bei-der-nohaltegkeet/)
  behandelt gëtt.
- Natierlech Kapitalrechnunge ginn ëmmer méi en erfuerderlechen Input fir d'Ëmweltimpakt-Sektioune vun engem
  [Green-Book-Appraisal](../bewäertung-no-dem-green-book/)-Business-Case; en Delivery-Team, dat Tooling fir Business-Cases
  baut, sollt d'ONS-Comptë an d'ENCA-Eenheetswäerter als Referenzdaten behandelen, déi et integréiert, net
  als eppes, wat Appraiser all Kéier vun Null un nei berechnen.

## Feelerquellen

- **Iwwerlappend Ökosystemservicer duebel zielen** – Erhuelungswäert a Biodiversitéitswäert fir deeselwechte
  Site kënnen déiselwecht Basisdate vun der Zuelungsbereetschaft deelen; d'ENCA-Leitlinn warnt ausdrécklech
  dovir, Bewäertungen ze addéieren, déi aus iwwerlappenden Ëmfro-Instrumenter ofgeleet sinn.
- **E Wäert vum natierleche Kapital als statesch behandelen** – Service-Flëss änneren sech mat Klima,
  Gestioun a Landnotzungsdrock; de Kuelestoff- an Héichwasserdämpfungswäert vun engem Bësch an dësem
  Joerzéngt ass keng permanent Eegeschaft vum Site.
- **Nationale Duerchschnëttswäerter fir eng ganz lokal Entscheedung benotzen** – e Hektar zougängleche
  Stadbësch an e Hektar ofgeleeënt Héichland hunn ganz ënnerschiddleche Erhuelungswäert; d'ENCA-Leitlinn
  recommandéiert lokal oder site-spezifesch Wäerter, wou verfügbar, amplaz op nationale Duerchschnëtter
  zréckzefalen.

## Quellen

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
