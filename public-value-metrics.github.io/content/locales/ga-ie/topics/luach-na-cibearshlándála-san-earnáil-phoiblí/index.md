# Luach na Cibearshlándála san Earnáil Phoiblí

Is é luach na cibearshlándála san earnáil phoiblí an smacht a bhaineann le praghas a chur ar laghdú
riosca: cad é luach a dhéanamh nach dócha go mbeadh sárú ar shonraí saoránach ann, agus an caiteachas
slándála gan aschur infheicthe nuair a oibríonn sé agus aschur an-infheicthe nuair a theipeann air? I
gcás seirbhíse a choinníonn taifid shochair, sonraí sláinte nó taifid chánach, is é an airí "dofheicthe
nuair a oibríonn sé" sin go beacht an fáth a dteastaíonn argóint luacha sainráite uaidh, ní tic
comhlíonta amháin.

## Cén fáth a bhfuil tábhacht leis

Tugann Creat Measúnaithe Cibear (CAF) Lárionad Náisiúnta Cibearshlándála na RA bealach struchtúrtha
d'eagraíochtaí san earnáil phoiblí slándáil a dhéanamh ina smacht inmheasúnaithe, bunaithe ar thorthaí,
seachas seicliosta: sainmhíníonn sé ceithre chuspóir ardleibhéil (riosca slándála a bhainistiú, cosaint
ar chibirionsaí, imeachtaí cibearshlándála a bhrath, agus tionchar teagmhas a íoslaghdú) briste síos
ina dtorthaí rannchuidithe ar féidir úinéir córais a mheasúnú ina gcoinne, i spiorad
[caighdeán na seirbhíse digití](../an-caighdeán-um-sheirbhís-dhigiteach/) pointe 9 ("cruthaigh seirbhís shlán a
chosnaíonn príobháideacht úsáideoirí"). Tá lipéad praghais doiciméadaithe ar an méid a chosnaíonn
measúnú CAF ina choinne: rianaíonn Tuarascáil Cost of a Data Breach IBM meánchostas sáraithe de réir
earnála, agus fuair sí go seasmhach go bhfuil an earnáil phoiblí i dtreo bhun an raoin i gcomparáid le
hairgeadas nó cúram sláinte — cuireann eagráin le déanaí meán na hearnála poiblí thart ar $2.6–2.9
milliún in aghaidh an tsáraithe — ach ní hionann "níos ísle ná airgeadas" agus "íseal", agus tá
costais ag sáruithe rialtais nach nglacann figiúirí na tuarascála ina n-iomláine: cailleadh muiníne
saoránach i gcainéil dhigiteacha, rud a laghdaíonn [glacadh digiteach](../sábháil-ó-aistriú-cainéil/)
a mbraitheann cásanna gnó aistrithe cainéil air, agus costas polaitiúil agus dlíthiúil sonraí a nochtadh
a cheangail an stát ar shaoránaigh a thabhairt ar an gcéad dul síos.

## An mhatamaitic

Luachálaítear infheistíocht slándála ar an mbealach céanna le haon chaiteachas laghdaithe riosca: mar
laghdú ar chaillteanas ionchasach, ag úsáid an chéannachta clasaiceach bainistíochta riosca.

```
Ionchas Caillteanais Bliantúil (ALE) = Ionchas Caillteanais Aonair (SLE)
                                     × Ráta Tarlaithe Bliantúil (ARO)

Luach rialaithe slándála =
  ALE_roimh_an_rialú − ALE_tar_éis_an_rialaithe − costas bliantúil an rialaithe

Is fiú rialú a mhaoiniú nuair a bhíonn:
  (ALE_roimh − ALE_tar_éis) > costas bliantúil an rialaithe

Ní tháirgeann measúnú CAF dóchúlacht go díreach, ach is ionchur seachfhreastalaí réasúnta
é próifíl toraidh CAF seirbhíse (cé na torthaí rannchuidithe atá "bainte amach",
"bainte amach go páirteach" nó "gan bainte amach") chun ARO a mheas — tá ARO réalaíoch
i bhfad níos airde ag córas a bhfuil rochtain phribhléideach neamhbhainistithe aige nó
nach bhfuil plean freagartha teagmhais tástáilte aige ná ag ceann a bhfuil an dá cheann i
bhfeidhm aige.
```

## Sampla oibrithe

**Córas bainistíochta cásanna comhairle contae a choinníonn taifid cúraim shóisialta do 40,000 cónaitheoir**:

```
Ionchas Caillteanais Aonair (costas sáraithe), ag úsáid meán na hearnála poiblí
ó thuarascáil Cost of a Data Breach IBM le déanaí ≈ £2.1m
(tiontaithe, figiúr ord méide — athdhíorthaigh ón eagrán reatha i gcónaí
seachas figiúr seasta a athúsáid)

ARO reatha (rochtain phribhléideach neamhbhainistithe, gan freagairt
teagmhais tástáilte, de réir féinmheasúnaithe inmheánaigh CAF a thaispeánann
torthaí iolracha "gan bainte amach") ≈ 8% sa bhliain, measta
  ALE_roimh = £2.1m × 0.08 = £168,000/bliain

Rialú molta: bainistiú rochtana pribhléidí + plean freagartha teagmhais
tástáilte, ag bogadh na dtorthaí CAF ábhartha go "bainte amach",
measta ARO a ghearradh go 3%/bliain
  ALE_tar_éis = £2.1m × 0.03 = £63,000/bliain

Costas bliantúil an rialaithe (uirlisí + próiseas + tástáil) = £45,000

Luach an rialaithe = (168,000 − 63,000) − 45,000 = £60,000/bliain
  dearfach glan — maoinigh é. Léiríonn an uimhríocht freisin gur fiú
  an rialú a mhaoiniú fiú ag beagnach trí oiread an chostais, an cineál
  seiceála íogaireachta ba cheart a bheith ag gabháil le haon fhigiúr ALE
  a tógadh ar dhóchúlachtaí measta.
```

## Nasc leis an innealtóireacht bogearraí

Is leis na hinnealtóirí formhór na luamháin sa chothromóid ALE: dearadh rialaithe rochtana, sláinteachas
spleáchais agus paistí, clúdach logála agus brath, agus uirlisí freagartha teagmhais, bogann siad uile
an téarma ARO go díreach, rud a mhíníonn cén fáth a léitear measúnú CAF mar athbhreithniú ailtireachta
teicniúla chomh maith le hiniúchadh beartais. Is é seo [fiachas teicniúil mar chreimeadh ar luach poiblí](../fiachas-theicniúil-mar-chreimeadh-ar-luach-poiblí/)
ina fhoirm is géire — is fiachas iad córais gan paistí, gan monatóireacht, le rialú rochtana lag, a bhfuil a
n-ús ina riosca eireaball, ní tarraingt chobhsaí — agus ba cheart é a réiteach i gcomparáid le
[costas iomlán úinéireachta i dTF an rialtais](../costas-iomlán-úinéireachta-i-tf-an-rialtais/) ionas nach
gcaitear le caiteachas slándála mar rud scartha ó fhíorchostas rite an chórais. Is ionchur díreach é
freisin do mheasúnuithe [luach ar airgead](../luach-ar-airgead/) faoin Green Book: tá costas coigeartaithe do
riosca mar chuid de thaobh an "chostais" d'aon bhreithmheas roghanna, ní rud a fuarthas ina dhiaidh sin.

## Contúirtí

- **Féinmheasúnú CAF a mheas mar an tslándáil féin**: déanann measúnú críochnaithe cur síos ar sheasamh
  slándála; ní chruthaíonn sé ceann — tá an luach sna torthaí a baineadh amach, ní sa cháipéis.
- **Meánchostais sáraithe dhomhanda a úsáid mar mheastachán áitiúil gan coigeartú**: is meáin thar
  shamplaí móra éagsúla iad figiúirí IBM; is annamh a bhíonn ionchas caillteanais aonair réalaíoch
  údaráis áitiúil bhig mar a chéile le ceann roinne rialtais náisiúnta.
- **Neamhaird ar shíceolaíocht riosca eireaball i gcinntí infheistíochta**: déanann dóchúlacht
  bhliantúil íseal caiteachas slándála a chur siar go héasca go deo, go dtí an bhliain nach féidir —
  frithbheartaíonn tástáil íogaireachta ar ríomh ALE i gcoinne raon ARO, mar a bhí sa sampla oibrithe, é seo.
- **Costas sáraithe de chineál IBM amháin a chomhaireamh, ní an costas muiníne**: creimeann sárú a
  laghdaíonn toilteanas saoránach cainéil dhigiteacha a úsáid cás [channel-shift-savings](../sábháil-ó-aistriú-cainéil/)
  ar feadh blianta ina dhiaidh sin, costas nach gcuirtear san áireamh go minic i meastacháin costais sáraithe.

## Foinsí

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
