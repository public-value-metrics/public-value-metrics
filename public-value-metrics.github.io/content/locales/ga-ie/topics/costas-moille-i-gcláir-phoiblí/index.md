# Costas moille i gcláir phoiblí (CoD)

Is é costas moille an luach poiblí a cailleadh in aghaidh gach aonaid ama nach bhfuil clár, seirbhís nó athrú córais *seachadta* go fóill. Is é an méadrach droichid máistir den ghrúpa topaicí seo é: aistríonn sé "shleamhnaigh an dul beo sé mhí" go punt in aghaidh na seachtaine, nó go WELLBYanna in aghaidh na seachtaine, ionas gur féidir argóint a dhéanamh faoin moill sa airgeadra céanna leis an gcás gnó féin.

## Cén fáth a bhfuil tábhacht leis

Aistrítear riail Reinertsen — "má thomhaiseann tú rud amháin, tomhais an costas moille" — isteach sa rialtas beagnach gan athrú, toisc go bhfuil cláir phoiblí neamhghnách de bheith nochta dó: formheastar cásanna gnó i gcoinne sruth sochair réamhaisnéisithe, ach ní thosaíonn an sruth ag sreabhadh ach ag dul beo, agus is seachtain de luach a tugadh suas gach seachtain sleamhnaithe nach bpraghsálann aon duine ar an gclár riosca. Léiríonn scrúdú athfhillteach an National Audit Office ar scaoileadh Universal Credit (féach a thuarascálacha "Rolling Out Universal Credit", <https://www.nao.org.uk/>) an patrún: rianaíodh agus tuairiscíodh sleamhnú sceidil, ach is annamh a luadh costas na bpunt in aghaidh na seachtaine as an gcóras athchóirithe a *neamhsheachadadh go fóill* chuig an gcéad tranche eile d'éilitheoirí mar fhigiúr ceannlíne, cé gurb é an uimhir a chóir a bheith tar éis tosaíochtú agus ardú a thiomáint. Gan figiúr CoD, breathnaíonn clár moillithe ar nós fadhb sceidil don bhord seachadta; leis, is fadhb creimthe luacha é don oifigeach cuntasaíochta.

## An mhatamaitic

```
CoD = sochar in aghaidh an aonaid ama a tugadh suas fad a bhí sé gan seachadadh   (£/seachtain nó WELLBYanna/seachtain)

Iomlán caillte moille = CoD × fad na moille

Sruthanna sochair le suimiú do chláir phoiblí:
  sábhálacha a scaoileann airgead tirim   (laghdú calaoise/earráide, costais shealadacha seachanta)
+ acmhainneacht neamh-airgid saortha  (uaireanta cásoibrí/oifigeach × costas lán-luchtaithe)
+ sochar folláine        (WELLBYanna × £13,000/WELLBY, HMT Green Book
                             treoir fhorlíontach folláine, praghsanna 2019)
```

Do sheirbhísí dírithe ar shaoránaigh, cuir ainmníocht ar fholláine chomh maith le hairgead — féach [blianta saoil coigeartaithe do fholláine](../blianta-saoil-coigeartaithe-do-dhea-bhail/) don aonad bunúsach, agus [costas deiseanna sa chaiteachas poiblí](../costas-deise-sa-chaiteachas-poiblí/) don mhéid a d'fhéadfadh an punt moillithe a mhaoiniú ar shlí eile.

## Sampla oibrithe

**Údarás áitiúil**: laghdaíonn uasghrádú ar chóras sochair tithíochta earráid róíocaíochta £150/éileamh/bliain thar 20,000 éileamh beo.

```
Sochar bliantúil = 150 × 20,000 = £3,000,000/bliain
CoD = 3,000,000 / 52 ≈ £57,700/seachtain
Chosnaíonn moill 12 mhí ar an gcur i bhfeidhm 52 × 57,700 ≈ £3,000,000 d'earráid sheachanta.
```

**Gníomhaireacht rialtais lárnaigh**: ciallaíonn seirbhís measúnaithe sochair míchumais, a seachadadh sé mhí (26 seachtain) níos déanaí ná mar a pleanáladh, go bhfanann 200,000 éilitheoir sa bhliain tréimhse trí sheachtain níos faide ar an meán le haghaidh cinnidh. Déantar gach seachtain bhreise d'éiginnteacht airgeadais a mhúnlú mar éifeacht −0.0018 WELLBY (pointe sásaimh saoil):

```
Caillteanas WELLBY in aghaidh an éilitheora = 3 × 0.0018 = 0.0054
Caillteanas WELLBY bliantúil = 200,000 × 0.0054 = 1,080 WELLBY/bliain
CoD_folláine = 1,080 / 52 ≈ 20.8 WELLBY/seachtain
CoD_airgead = 20.8 × £13,000 ≈ £270,000/seachtain de luach folláine
```

Dá bhrí sin "chosnaíonn" moill 26 seachtain thart ar 540 WELLBY — luach thart ar £7 milliún ag luacháil folláine an Green Book — rud a athchruthaíonn dáta dul beo a caillíodh mar ócáid leasa saoránach, ní mar fhonóta bainistíochta tionscadail.

## Nasc leis an innealtóireacht bogearraí

Is é CoD an rud a fhágann go bhfuil [méadracha DORA](../méadrachtaí-dora-don-luach-poiblí/) agus [méadracha sreafa](../méadrachtaí-sreafa-i-seachadadh-an-rialtais/) intuigthe ó thaobh airgeadais de: is airgead (nó folláine) é an t-am seolta sa phíblíne × CoD a dóitear i scuaineanna sula sroicheann sé saoránach riamh. Go sonrach:

- **Tosaíochtú**: rangaigh riaráiste de réir CoD ÷ fad seachas de réir sinsearacht páirtithe leasmhara — coibhéis innealtóireachta bogearraí d'iarraidh an Green Book roghanna a mheas ar luach, ní ar cé atá ag iarraidh.
- **Soláthar**: tá CoD ag ciorcal soláthair creata 12–18 mí; athraíonn a phraghsáil an cás práinne do bhealaí luathaithe, agus beathaíonn sé go díreach isteach i gcinntí [tógáil nó ceannach](../tógáil-nó-ceannach-sa-rialtas/) ina bhfuil am go luach ina thiománaí cinnidh.
- **Cás sochair**: ba cheart gach figiúr CoD a luaitear ag formheas teacht chun solais arís ag [réadú sochar](../réadú-sochar/) — má bhí costas na moille fíor, ba cheart go mbeadh an sochar luathaithe intomhaiste tar éis dul beo.

## Contúirtí

- **CoD líneach a ghlacadh as ucht**: tá luach cruth-sprice ag roinnt seirbhísí poiblí (dáta comhlíonta reachtúil — léimeann CoD go leibhéil riosca forfheidhmithe tar éis an dáta, gar do nialas roimhe) seachas ráta seachtainiúil réidh. Aicmigh an próifíl práinne sula ndéantar iolrú.
- **CoD ar aschuir nach bhfuil de dhíth ar aon duine**: ní bhíonn costas ar mhoill ach má tá luach ag an rud nár seachadadh; níl aon CoD ag córas nach n-úsáidfidh aon duine is cuma cé chomh déanach is atá sé.
- **Moill agus lascainiú a dhébhreith**: leagann an [ráta lascaine sóisialta](../an-ráta-lascaine-sóisialta/) praghas ar am cheana thar spéir mheasúnaithe iliarbhliantúil; is é CoD an leagan oibríochtúil laistigh den spéir do sheachtainí agus míonna. Úsáid CoD do shleamhnú sceidil, agus aistriú NPV d'athphaisiú iliarbhliantúil.

## Foinsí

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
