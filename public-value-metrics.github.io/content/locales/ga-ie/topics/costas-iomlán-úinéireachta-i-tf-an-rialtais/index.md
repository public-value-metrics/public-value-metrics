# Costas iomlán úinéireachta (TCO) i TF an rialtais

Is é costas iomlán úinéireachta costas iomlán saolré córais — éadáil móide gach bliain dá oibriú — lascainithe go dáta
comhchoitianta. I TF an rialtais, is é an earráid réamhaisnéise is iontaofa amháin soláthraithe nó roghanna a chur i
gcomparáid ar phraghas éadála amháin, nuair a chuireann oibríochtaí agus cothabháil idir leath agus ceithre chúigeán de
bhille na saolré de ghnáth i gcuntas.

## Cén fáth a bhfuil tábhacht leis

Éilíonn Green Book HM Treasury go gclúdóidh an cás airgeadais in aon chás gnó de chuid an Five Case Model costais
saolré iomláin, ní caiteachas caipitil amháin — ach fuair an National Audit Office arís agus arís eile go gceadaíonn ranna
infheistíochtaí TF i gcoinne réamhaisnéis costais reatha neamhiomlán nó dóchasach, gan fíorchostas oibríochta a
fháil amach ach nuair a bhíonn an córas beo agus nuair a dhúntar líne bhuiséid an chaipitil. Brúnn Cód Cleachtais
Teicneolaíochta an Government Digital Service agus an Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>)
ranna i dtreo óstála scamall agus tráchtearraí go páirteach toisc go ndéanann sé costas leanúnach infheicthe agus
inchomparáide, seachas é a adhlacadh laistigh d'fhigiúr soláthair caipitil amháin a bhreathnaíonn íseal ar
tharraingteach ag am an cheadaithe agus mícheart go costasach trí bliana ina dhiaidh.

## An mhatamaitic

```
TCO = Costas éadála + Σ(t=1..N) Costas oibríochta bliantúil_t / (1+r)^t
      − luach iarmharach (lascainithe)

r = ráta lascaine sóisialta caighdeánach Green Book HM Treasury, 3.5%/bliain
    (sceideal rátaí laghdaitheach do léaslínte níos faide ná 30 bliain)

Comhpháirteanna costais oibríochta: óstáil/ceadúnú, tacaíocht agus cothabháil,
paistiú slándála agus comhlíonadh, am foirne, athnuachan/imirce pleanáilte
```

Féach [ráta lascaine sóisialta](../an-ráta-lascaine-sóisialta/) chun a fháil amach cén fáth a bhfuil tábhacht leis an bhfachtóir lascaine thar
saolré chórais 5–10 mbliana tipiciúil, agus [tógáil vs. ceannach sa rialtas](../tógáil-nó-ceannach-sa-rialtas/) chun a
fháil amach conas a chuireann TCO le cinneadh tógála/ceannaigh.

## Sampla oibrithe

Cuireann roinn dhá chóras bainistíochta cásanna i gcomparáid ar léaslíne 5 bliana ag ráta lascaine 3.5% an Green Book.

```
Córas A: capex £3,500,000, opex £250,000/bliain
Córas B: capex £1,800,000 (breathnaíonn sé níos saoire), opex £650,000/bliain
          (tacaíocht díoltóra agus ualach comhtháthaithe níos troime)

Comparáid shimplí ar capex amháin: buann B, £1.8M < £3.5M.

Suim fhachtóirí lascaine, 5 bliana ag 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

Iompaíonn TCO an cinneadh simplí bunoscionn: tá Córas B beagán níos costasaí thar chúig bliana nuair a bhíonn costas
oibríochta lascainithe agus suimithe, mar gurb é 62% (2,934,750 / 4,734,750) a sciar opex de chostas na saolré i
gcomparáid le 24% do Chóras A — sampla coincréideach den fhionnachtain "is é cothabháil formhór an bhille", atá folaithe
go hiomlán nuair a chuirtear praghsanna greamáin i gcomparáid.

## Nasc leis an innealtóireacht bogearraí

Is é TCO an uimhir ba cheart disciplín a chur ar gach cinneadh [tógála vs. ceannaigh](../tógáil-nó-ceannach-sa-rialtas/) agus
ar gach cás aisíoca [fiachais theicniúil](../fiachas-theicniúil-mar-chreimeadh-ar-luach-poiblí/), toisc gur línte costais oibríochta
iad ús fiachais agus cothabháil iarchurtha, a bhaineann leis an iomlán lascainithe céanna cibé ar rianaigh aon duine iad nó nár rianaigh. Ba cheart
d'innealtóirí a mholann ardán nó rogha díoltóra an tábla TCO iomlán a chur i láthair, ní praghas an tsoláthair, mar is é praghas an
tsoláthair an uimhir go beacht a dearadh cás airgeadais an Green Book chun cosc a chur ar ranna bheith ag brath uirthi ina haonar.
Is é TCO an ainmneoir macánta freisin do bhreithiúnais [luach ar airgead](../luach-ar-airgead/) — cuireann VFM tairbhe i
gcomparáid le costas, agus cuireann líne costais tearc-chomhaireamh gach cóimheas VFM sa chás gnó i bhfiús.

## Contúirtí

- **Comparáid capex amháin**: an earráid soláthair is coitianta amháin — praghsanna liostaithe soláthróirí a chur i gcomparáid gan réamhaisnéis costais
  oibríochta chomhoiriúnach do gach rogha.
- **Costais scoir agus imirce a eisiamh**: is línte fíor TCO iad eastóscadh sonraí ag deireadh conartha, athardánú agus pionóis
  faoi ghlas isteach díoltóra nach bhfuil le feiceáil go minic sa chás gnó bunaidh.
- **Costas slándála agus comhlíonta a eisiamh**: téann minicíocht phaistithe, athnuachan creidiúnaithe agus costas iniúchta in
  oiriúint le haois agus castacht an chórais — féach [luach cibearshlándála san earnáil phoiblí](../luach-na-cibearshlándála-san-earnáil-phoiblí/) — agus fágtar
  amach go rialta iad ón réamhaisnéis opex.
- **Comparáid gan lascainiú idir roghanna le próifílí costais éagsúla**: tríd an rogha atá trom ar capex a chur i
  gcomparáid le ceann atá trom ar opex gan lascainiú, tugtar fabhar go córasach don rogha a chuireann níos mó costais siar go blianta níos déanaí.

## Foinsí

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
