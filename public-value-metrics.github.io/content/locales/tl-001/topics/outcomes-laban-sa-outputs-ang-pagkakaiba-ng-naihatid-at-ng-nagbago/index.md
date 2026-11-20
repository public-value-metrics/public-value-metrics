# Outcomes laban sa outputs: ang pagkakaiba ng naihatid at ng nagbago

Ang output ay ang direkta at mabibilang na produkto ng isang aktibidad — umiiral ito sa sandaling maganap ang paghahatid, anuman ang epekto nito. Ang outcome ay ang pagbabagong sumusunod para sa mga taong, lugar, o sistemang kasangkot. Ang "500 katao ang dumalo sa workshop sa paghahanap ng trabaho" ay output: totoo ito kahit walang nakahanap ng trabaho sa kanila. Ang "bumuti ang pagkakataong magkatrabaho ng 500 katao" ay pag-aangkin ng outcome, at nangangailangan ito ng ebidensya ng pagbabago, hindi lamang ng ebidensya ng pagdalo — ang pagkalitong ito ay nagbubunga ng mas maraming nakaliligaw na ulat ng grant kaysa sa halos anumang iba pang pagkakamali sa pagsukat sa sektor.

## Bakit ito mahalaga

Parehong hinihingi ng Magenta Book ng HM Treasury at ng mga tagapondo gaya ng National Lottery Community Fund ang pag-uulat ng outcome dahil ang mga output ang ini-uulat ng mga programa bilang default: mura silang bilangin, laging makukuha, at laging mukhang positibo. Ang bilang ng output ay literal na hindi kailanman bababa dahil bumagsak ang programa — ang mas maraming session na naihatid ay laging "mas marami," samantalang maaaring ibunyag ng outcome na hindi gumagana ang programa. Paulit-ulit na pinuna ng National Audit Office ang mga programa ng pamahalaan sa pag-uulat ng antas ng aktibidad na parang ebidensya ng tagumpay; ang software system na ginagawa lamang madaling iulat ang mga output ay nagpapatibay nito bilang default, dahil hindi nangangailangan ng follow-up na pangongolekta ng datos ang mga output samantalang kailangan ito ng mga outcome.

## Ang matematika

Walang pormula, ngunit may maaasahang pagsusulit para uriin ang isang metric:

```
Pagsusulit sa output:  mabibilang ba ito sa mismong punto ng paghahatid, at totoo kahit hindi naapektuhan ang tumanggap?
Pagsusulit sa outcome: nangangailangan ba ito ng paghahambing na bago/pagkatapos o may/wala para magkaroon ng saysay?

Kung ang isang numero ay maaaring maging totoo kahit walang benepisyo sa sinuman, output ito.
```

Nasa loob ito ng mas malawak na kadena ng [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) at nakasalalay sa mga ugnayan ng outcome na tinukoy sa isang [theory of change](../theory-of-change-pabalik-na-pagmamapa-ng-sanhi-mula-sa-layunin-hanggang-sa-mga-aktibidad/); ang paggawang pera ng isang outcome ay gumagamit ng mga pamamaraan sa [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/).

## Halimbawang kalkulasyon

**Lokal na awtoridad (suporta sa trabaho)**: output — 500 katao ang dumalo sa mga workshop sa paghahanap ng trabaho. Outcome — sa 12-buwang follow-up, 140 sa 500 (28%) ang may tuloy-tuloy na trabaho (6+ buwan). Ang comparison group na may katulad na katangian ngunit walang access sa programa ay may baseline na rate ng pagkakatrabaho na 15% sa parehong panahon. Net na pag-angat ng outcome: 28% − 15% = 13 puntos-porsyento, kaya tinatayang 500 × 0.13 = 65 karagdagang tao ang may trabaho na hindi sana nagkaroon — ang attributable na outcome, na naiiba sa 500 na bilang ng pagdalo at sa 140 na hilaw na bilang ng may trabaho.

**Charity (charity sa literacy)**: output — 1,200 reading session ang naihatid sa 300 bata. Outcome — ang karaniwang reading age ay bumuti ng 8 buwan sa loob ng 6-na-buwang panahon, laban sa inaasahang natural na baseline ng pag-unlad na 6 na buwan sa loob ng 6 na buwan. Net na natamo sa outcome: 8 − 6 = 2 buwang karagdagang pagbuti sa reading age bawat bata na maiuugnay sa programa, hindi ang buong 8 buwan.

## Kaugnayan sa software engineering

Halos awtomatikong ini-instrument ng mga event log at transaksyonal na sistema ang mga output — page view, session, ticket na naisara, appointment na na-book — dahil nalilikha ang mga ito ng sistemang ginagawa ang trabaho nito. Ang mga outcome ay nangangailangan ng data model na kumukuha sa parehong indibidwal sa mas huling punto ng panahon laban sa baseline o comparison, na kailangang sadyang idisenyo: mga follow-up na survey, naka-link na administratibong talaan, o comparison cohort. Ang reporting tool na sumusuporta lamang sa una ay tahimik na ihahatid ang isang organisasyon tungo sa pag-uulat na output lamang anuman ang hiningi ng tagapondo. Tingnan ang [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) para sa kinaroroonan ng mga outcome sa kadena ng pananagutan, ang [cost-per-outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/) para gawing unit-cost metric ang pagkakaibang ito, at ang [mga KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/) para sa mas malawak na pattern ng pagpili ng metric.

## Mga karaniwang pagkakamali

- **Pag-uulat ng mga output na parang mga outcome.** Ang "500 katao ang dumalo" ay nagpapahiwatig ng benepisyo nang hindi ito pinatutunayan; tahasang lagyan ng label na output ang pagdalo.
- **Walang baseline o comparison group.** Ang numero ng outcome na walang counterfactual — tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) — ay hindi kayang paghiwalayin ang epekto ng programa mula sa mangyayari rin naman.
- **Pag-optimize sa pinopondohang metric.** Kapag nakatali ang pondo sa dami ng output, makatwirang pinakamalalaki ng mga delivery team ang pagdalo kaysa sa pangmatagalang pagbabago, isang paraan ng pagkabigo ayon sa batas ni Goodhart.
- **Outcome washing.** Ang pag-relabel sa isang output metric gamit ang wikang tila outcome ("engagement outcomes: 500 dumalo") na walang anumang follow-up na pagsukat sa likod nito.

## Mga sanggunian

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
