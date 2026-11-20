# Flow Metrics sa Paghahatid ng Serbisyo ng Pamahalaan: Little's Law, WIP at cycle time

Inilalarawan ng mga flow metric — ang Little's Law, mga limitasyon ng work-in-progress (WIP), at flow efficiency — kung gaano kabilis dumadaloy ang gawain sa isang sistemang may limitadong kapasidad. Isang ganoong sistema ang sprint board; ang pila ng benefit claim, ang rehistro ng planning application, o ang backlog ng visa casework ay parehong-pareho ang matematika na iba lamang ang uniporme.

## Bakit ito mahalaga

Mga queueing system ang caseload ng pamahalaan, at sumusunod ang mga queueing system sa mga batas ng pila, sinusukat man ito ng sinuman o hindi. Ginagawang tahasan ito ng mga statutory na panahon ng pagpapasya: sa ilalim ng rehimeng Town and Country Planning, karamihan sa mga maliit na planning application ay may 8-linggong statutory na target sa pagpapasya at ang malalaking aplikasyon ay 13 linggo — pangakong cycle time na nakasulat mismo sa batas. Ang backlog ng asylum casework ng Home Office, na paulit-ulit na sinuri ng National Audit Office at ng Home Affairs Select Committee, ay mahusay na naitalang kaso ng pampublikong sistemang mas mabilis lumaki ang work-in-progress kaysa sa throughput sa mahabang panahon, na nagtulak sa cycle time nang higit pa sa anumang statutory o inaasahang serbisyo. Binibigyan ng mga flow metric ang mga engineer at casework manager ng iisa at kwantitatibong bokabularyo para sa mismong anyo ng pagkabigong ito, sa halip na iwanan itong kwalitatibong "problema sa backlog".

## Ang matematika

```
Little's Law:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Flow efficiency = aktibong (touch) na oras / kabuuang cycle time   (Vacanti)

Epekto ng WIP limit: sa nakapirming throughput, ang pagpapahati ng WIP ay halos
nagpapahati sa karaniwang cycle time (Little's Law na inayos) — ang pingga
na magagamit nang hindi nagdaragdag ng tauhan.
```

Tingnan ang [DORA metrics para sa public value](../dora-metrics-para-sa-public-value-bilis-at-kaligtasan-ng-paghahatid-ng-serbisyo-sa-mamamayan/) para sa katumbas na matematika na inilapat sa mga pipeline ng deployment ng software sa halip na casework.

## Halimbawang kalkulasyon

**Departamento ng planning ng lokal na awtoridad**: 400 aplikasyon ang bukas sa anumang oras (WIP), at nareresolba ng koponan ang 50 aplikasyon/linggo (throughput).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 linggo
```

Eksaktong tumatama ito sa statutory na 8-linggong target para sa maliliit na aplikasyon — na walang palugit, ibig sabihin, anumang pagbabago-bago sa papasok na demand o sa oras ng pagtugon ng consultee ay magtutulak sa mga pasya na lumampas sa legal na deadline.

**Flow efficiency**: sa 8 linggong iyon (56 na araw ng kalendaryo), karaniwang may humigit-kumulang 6 na oras ng aktuwal na oras ng pagproseso ng caseworker ang isang aplikasyon.

```
Flow efficiency = 6 na oras / (56 araw × 8 oras ng trabaho/araw)
                = 6 / 448 ≈ 1.3%
```

Inilalagay ng benchmark ni Vacanti para sa mga software team ang karaniwang flow efficiency sa 15–20%; ang casework ng pamahalaan, na may maraming paglilipat sa statutory na consultee at mga bintana ng public consultation, ay madalas na isang order of magnitude na mas mababa. Ang 98.7% ng oras ng "paghihintay" ang aktuwal na pinupuntahan ng walong linggo — hindi ang kapasidad ng caseworker.

**Interbensyon sa WIP limit**: ang paglilimita sa mga bukas na aplikasyon bawat caseworker sa 15 sa halip na walang hangganang 25 (pinananatiling pareho ang throughput) ay nagpapababa ng WIP mula 400 hanggang humigit-kumulang 240 sa koponang may 16 na tao:

```
Bagong cycle time = 240 / 50 = 4.8 linggo
```

Halos kalahati ang bawas sa cycle time mula sa pagbabago ng patakaran, hindi dagdag na tauhan — parehong pingga na hinihila ng mga delivery team na istilong DORA kapag nililimitahan ang WIP ng sprint.

## Kaugnayan sa software engineering

Ang mga flow metric ang karaniwang wika sa pagitan ng Kanban board ng delivery team at ng casework floor na pinagbubuuan nito ng software: ang pila ng caseworker at ang pila ng pull request ay parehong pinamamahalaan ng Little's Law, at parehong lumalampas sa target na cycle time sa parehong paraan — labis na WIP kaugnay ng throughput. Direktang mahalaga ito sa [cost of delay sa mga pampublikong programa](../cost-of-delay-sa-mga-programang-pampubliko/): ang cycle time × CoD ang mga pound na nakatengga sa pila sa anumang sandali, at mahalaga ito sa [service standards at transaction metrics](../mga-service-standard-at-transaction-metric-apat-na-pangunahing-sukatan-ng-serbisyong-digital-ng-pamahalaan/), kung saan ang inilathalang target ng turnaround ay pangakong cycle time na flow metric lamang ang makapag-diagnose kapag hindi ito natupad. Dapat ilantad ng software ng isang casework system ang WIP at cycle time bilang first-class na operational metric, hindi ibaon sa loob ng case-management system na walang nagku-query.

## Mga karaniwang pagkakamali

- **Pagdaragdag ng WIP limit nang hindi inaayos ang tunay na bottleneck**: kung ang hadlang ay ang oras ng pagtugon ng panlabas na statutory na consultee, ang paglilimita sa WIP ng caseworker ay naglilipat lamang ng pila paitaas sa halip na paikliin ito.
- **Pagtrato sa flow efficiency bilang target na imamanipula**: ang pagmamadali sa 1.3% ng aktibong oras ay halos hindi nagbabago sa cycle time; halos laging nasa mga estado ng paghihintay ang pingga, na karaniwang nangangahulugang muling pagdidisenyo ng proseso, hindi bilis ng caseworker.
- **Pagwawalang-bahala sa variability**: inilalarawan ng Little's Law ang mga average; ang caseload na malaki ang pagbabago-bago ng demand ay nangangailangan ng buffer na kapasidad, hindi lamang mas mahigpit na WIP limit, kung hindi, mamimiss pa rin ang mga statutory na deadline sa pabagu-bagong dulo kahit gumanda ang average.
- **Hindi pare-parehong pagsukat ng WIP**: ang kasong "bukas" sa sistema ng talaan ngunit aktuwal na nakatigil habang naghihintay ng ikatlong partido ay WIP pa rin; ang pag-alis dito ay nagpapaganda ng mga numero nang hindi binabago ang realidad na nakikita ng mamamayan.

## Mga sanggunian

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
