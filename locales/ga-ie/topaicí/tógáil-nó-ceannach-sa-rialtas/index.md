# Tógáil nó ceannach sa rialtas

Comparáid struchtúrtha, choigeartaithe do riosca is ea tógáil nó ceannach idir forbairt shaincheaptha agus éadálacha tráchtála nó earraí coitianta, arna comhdhéanamh ar [chostas iomlán úinéireachta](../costas-iomlán-úinéireachta-i-tf-an-rialtais/) lascainithe, ar am go luach agus ar riosca. Is earnáil cheannaigh í an rialtas go struchtúrtha — leagann an Technology Code of Practice presumption i bhfabhar réitigh earraí coitianta agus scamall — ach fós is gnách d'fhoirne innealtóireachta laistigh de ranna tógáil a roghnú de réir réamhshocraithe, ar na cúiseanna céanna a bhíonn ag tógálaithe i ngach áit.

## Cén fáth a bhfuil tábhacht leis

Brúnn Technology Code of Practice an Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) agus an treoir ghaolmhar Service Manual ar chinneadh an tógáil nó ceannach é ranna chun forbairt shaincheaptha a chosaint i gcoinne presumption gur chóir cumas earraí coitianta a cheannach, gan é a thógáil, agus nach dteastaíonn cód saincheaptha ach do chumas atá nua go fírinneach agus a dhéanann difríocht don mhisean. Tugann treoir fhorlíontach claonta dóchais HM Treasury don Green Book, a tarraingíodh ón athbhreithniú Mott MacDonald 2002 ar sholáthar mór poiblí, an raon ardaithe is leithne de gach catagóir a measadh do thionscadail TF — meastacháin chostais chaipitil a mholtar a ardú 10% ag an ceann íseal agus suas le 200% ag an ceann ard sula n-úsáidtear iad sa mheasúnú, rud a léiríonn chomh dona is a bhí tógálacha bogearraí á dtanaí go stairiúil i soláthar poiblí. Tá anailís tógála nó ceannaigh ann go beacht chun an coigeartú riosca sin a chur ar an mbord roimh fhormheas, seachas ligean dó teacht chun solais mar iarratas ar ró-chaiteachas laistigh den bhliain.

## An mhatamaitic

```
Déan comparáid thar an spéir chéanna 3–5 bliana, lascainithe ag ráta lascaine
sóisialta an Green Book (féach social-discount-rate.md):

NPV_rogha = PV(sochair, athraithe de réir ama go luach) − PV(TCO)

Coigeartuithe riosca (patrún claonta dóchais an Green Book):
  costas tógála × 1.1–3.0        (raon ardaithe tionscadal TF, Mott MacDonald)
  am go luach tógála + 40–60%     (réamh-mhoill imlonnaithe)
  ceannach: cuir seiceáil réaltachta comhtháthaithe agus costais scoir conartha leis ina áit

Tiománaithe cinnidh, san ord a chinneann siad de ghnáth:
  1. difreáil — an é an cumas seo an misean, nó pluiméireacht?
  2. am go luach × costas moille (féach cost-of-delay-in-public-programmes.md)
  3. costas iomlán úinéireachta coigeartaithe do riosca
```

## Sampla oibrithe

Teastaíonn córas bainistithe cásanna ó údarás áitiúil le haghaidh cúraim shóisialta do dhaoine fásta. Ceannach: SaaS ar £180,000/bliain, beo i 4 mhí. Tógáil: meastar £900,000 móide £150,000/bliain cothabhála, beo i 14 mhí.

```
Costas tógála coigeartaithe do riosca = 900,000 × 1.4 = £1,260,000
TCO 5 bliana:
  ceannach = 180,000 × 5 = £900,000
  tógáil   = 1,260,000 + 150,000 × 5 = £2,010,000

Téarma moille: seachnaíonn an córas £40,000/mí d'iarmheastóireachtaí dúbailte;
sroicheann an tógáil 10 mí níos déanaí ná an ceannach.
CoD = 10 × 40,000 = £400,000

Comparáid éifeachtach: £900,000 (ceannach) vs £2,010,000 + £400,000 = £2,410,000 (tógáil)
```

Buaileann an ceannach thart ar £1.5 milliún thar chúig bliana, agus is é costas na moille an líne is mó aonair tar éis an mheastacháin tógála féin, rud nach dtiocfadh chun solais i gcomparáid chaipitil amháin.

## Nasc leis an innealtóireacht bogearraí

Na disciplíní a aistrítear go díreach ón anailís seo isteach i gcleachtas seachadta: **coigeartú riosca bunaithe ar réamhfhianaise** — is é ardú Mott MacDonald coibhéis bogearraí claonta dóchais an Green Book a chuirtear i bhfeidhm go meicniúil, mar sin ba cheart d'fhoirne argóint a dhéanamh ar son eisceachtaí uaidh seachas glacadh leis gurb é a meastachán féin an eisceacht; **macántacht comparadóra** — is é an rogha ceannaigh is fearr atá ar fáil an dara rogha seachas tógáil, ní "rud ar bith", agus baineann sé sin go díreach le [costas deiseanna sa chaiteachas poiblí](../costas-deise-sa-chaiteachas-poiblí/); agus **comparáid ionraic TCO** — ba cheart gach togra tógála a chur i gcomparáid le [costas iomlán úinéireachta](../costas-iomlán-úinéireachta-i-tf-an-rialtais/) iomlán rogha ceannaigh, ní lena phraghas liosta. Nuair a bhuaileann an tógáil go fírinneach, ba cheart [costas moille](../costas-moille-i-gcláir-phoiblí/) an ama tógála breise a phraghsáil go sainráite sa chás gnó, gan é a fhágáil mar bhonn tuisceana gan ráiteas nach mbíonn tábhacht leis an am.

## Contúirtí

- **Praghas liosta díoltóra a chur i gcomparáid le meastachán tógála nach bhfuil coigeartaithe do riosca**: déanann sé seo plé ar an tógáil faoi dhó, uair amháin ar chostas agus uair amháin ar sceideal.
- **Saothar inmheánach praghsáilte ag nialas**: caitear le ham innealtóireachta na státseirbhíse mar "saor in aisce" toisc go bhfuil sé ar bhuiséad ceannlíon na roinne cheana féin, rud a cheileann a fhíorchostas deiseanna i gcoinne oibre eile a bhféadfadh an fhoireann sin a dhéanamh.
- **Faoi ghlas gan phraghas sa dá threo**: tá costais scoir díoltóra agus iniompartacht sonraí fíor, ach tá fachtóir bus agus spleáchas tógála saincheaptha ar fhoireann bheag inmheánach atá deacair a athsholáthar a choinneáil ar feadh a saolré fíor freisin.
- **Difreáil mhisin a éileamh ar phluiméireacht**: "tá sé seo lárnach dúinn" a dhearbhú faoi mheánearraí comhtháthaithe nó faoi stór doiciméad — déan tástáil air i gcoinne an mbeadh a fhios riamh ag saoránach nó cásoibrí cé acu atá ag rith faoi bhun.

## Foinsí

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
