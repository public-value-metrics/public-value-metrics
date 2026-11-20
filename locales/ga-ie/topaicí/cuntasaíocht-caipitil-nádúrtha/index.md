# Cuntasaíocht caipitil nádúrtha

Cuireann cuntasaíocht caipitil nádúrtha an comhshaol ar an bhunús céanna le haon sócmhainn náisiúnta nó
eagraíochtúil eile: tomhaiseann sí stoc na n-acmhainní nádúrtha (coillte, ithreacha, aibhneacha,
bogaigh, an t-atmaisféar) agus sreabhadh na seirbhísí a tháirgeann siad (seiceáil carbóin, cosaint
ar thuilte, caitheamh aimsire, bia), i dtéarmaí fisiciúla agus airgeadaíochta araon, ionas go
dtaispeántar ídiú comhshaoil i gcinnteoireacht ar an mbealach a thaispeánfadh ídiú caipitil airgeadais.
Tá an Ríocht Aontaithe ar cheann de na rialtais is mó chun cinn san obair seo a dhéanamh go córasach,
le Plean Comhshaoil 25 Bliain (2018) mar thiománaí, agus é curtha i bhfeidhm trí chuntais Caipitil
Nádúrtha na RA ón ONS agus trí threoir fhorlíontach Green Book HM Treasury.

## Cén fáth a bhfuil tábhacht leis

Caitheann cuntasaíocht thraidisiúnta — corparáideach agus rialtais araon — le foraois mar rud gan
luach go dtí go gearrtar agus go ndíoltar mar adhmad í, ag a bpointe a thagann sí chun bheith ina OTI.
Tá cuntasaíocht caipitil nádúrtha ann chun an bhearna sin a dhúnadh: ghlac Plean Comhshaoil 25 Bliain
na RA le hoibleagáid ag an rialtas smaointeoireacht chaipitil nádúrtha a leabú ar fud beartais, agus
luaigh sé go sainráite an uaillmhian "a bheith ar an gcéad ghlúin a d'fhág an comhshaol i riocht níos
fearr ná mar a fuaireamar é." Tá cuntais bhliantúla Caipitil Nádúrtha na RA foilsithe ag an ONS ó shin
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
a mheasann luach airgeadaíochta na seirbhísí éiceachórais — ó chaitheamh aimsire coille go sochair
sláinte spás glas uirbeach go stóráil carbóin portaigh — ag úsáid an chreata Náisiúnta Cuntas céanna a
úsáidtear do chaipiteal táirgthe, ionas gur féidir caipiteal nádúrtha a chur sa chlár comhardaithe
céanna le bóithre, foirgnimh agus trealamh sa deireadh. Leagann treoir Enabling a Natural Capital
Approach (ENCA) HM Treasury, forlíontach leis an Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
amach conas ba cheart do bhreithmheasóirí costais agus sochair chomhshaoil a luacháil i gcásanna
gnó, ionas gur féidir scéim bóthair a scriosann seanfhoraois nó scéim tuilte a athchruthaíonn
bogach a chur i gcomparáid i dtéarmaí airgeadaíochta comhsheasmhacha seachas uimhir a bheith ag
ceann amháin agus mír de choinníollacha ag an gceann eile.

## An mhatamaitic

```
Luach sócmhainne seirbhíse éiceachórais = NPV de shreabhadh na seirbhísí a sholáthraíonn an tsócmhainn

Luach sócmhainne = Σ (t = 1 go T) [luach bliantúil sreabhadh seirbhíse_t / (1 + r)^t]

nuair is:
  luach sreabhadh seirbhíse_t = méid na seirbhíse i mbliain t × luach aonaid
                          (m.sh. cuairteanna caitheamh aimsire × luach in aghaidh cuairte;
                           tonnaí carbóin seicáilte × praghas carbóin)
  r = ráta lascaine (ráta lascaine sóisialta an Green Book — féach
      [ráta lascaine sóisialta](../an-ráta-lascaine-sóisialta/))
  T = ábhar ama thar a bhfuiltear ag súil go soláthróidh an tsócmhainn an tseirbhís
```

Is í seo an struchtúr glanluacha reatha céanna a úsáidtear chun caipiteal táirgthe a luacháil nó aon
infheistíocht phoiblí a bhreithmheas faoi [bhreithmheas an Green Book](../measúnú-green-book/) —
is é rannchuidiú na cuntasaíochta caipitil nádúrtha ná cainníochtaí fisiciúla creidiúnacha agus
luachanna aonaid a sholáthar do sheirbhísí a raibh praghas náid orthu roimhe seo.

## Sampla oibrithe

**Coill uirbeach, luach caitheamh aimsire**: faigheann coill 50 heicteár measta 80,000 cuairt
chaitheamh aimsire in aghaidh na bliana, luachálta gach ceann (trí mhodh an chostais taistil nó
modh na rogha luaite — féach [luacháil rogha nochta](../luacháil-rogha-nochta/) agus
[luacháil rogha luaite](../luacháil-roghnaithe-luaite/)) ag £3 an chuairt. Táthar ag súil go leanfaidh
an choill ag soláthar na seirbhíse seo ar feadh 50 bliain, breithmheasta ar ráta lascaine 3.5%.

```
Luach bliantúil caitheamh aimsire = 80,000 × £3 = £240,000/bliain

NPV thar 50 bliain ag 3.5% ≈ £240,000 × fachtóir blianacháin(3.5%, 50 bliain)
fachtóir blianacháin(3.5%, 50) ≈ 21.4

Luach sócmhainne ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Stóráil carbóin a chur leis**: seicálann an choill chéanna 400 tona de CO2 measta in aghaidh na
bliana, luachálta ag praghas carbóin neamhthrádáilte an rialtais de thart ar £75/tona (léirithe — úsáid
na luachanna carbóin foilsithe reatha BEIS/DESNZ le haghaidh breithmheasa beo).

```
Luach bliantúil carbóin = 400 × £75 = £30,000/bliain
NPV thar 50 bliain ag 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Iomlán luach sócmhainne na coille (caitheamh aimsire + carbón) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

Tá sé seo sula gcuirtear seirbhísí maolaithe tuilte, bithéagsúlacht nó cáilíocht aeir leis a n-iarrann
treoir ENCA ar bhreithmheasóirí a mheas freisin — is íosmhéid d'aon ghnó an t-iomlán, ní uasmhéid.

## Nasc leis an innealtóireacht bogearraí

- Is féidir le córais comhshaoil agus bainistíochta sócmhainní d'údaráis áitiúla agus d'ghníomhaireachtaí
  (páirceanna, mórbhealaí, comhlachtaí uisce) clár caipitil nádúrtha a cheangal lena gclár sócmhainní
  fisiciúla, ag úsáid an phatrúin céanna sreabhadh seirbhíse faoi luach aonaid is a úsáidtear d'aon
  [bhunachar sonraí costais aonaid](../bunachair-costas-aonaid/) eile a choinníonn an eagraíocht.
- Toisc go bhfuil NPV an chaipitil nádúrtha íogair don ráta lascaine (féach fachtóir blianacháin an
  tsampla oibrithe), ba cheart d'aon uirlis a ríomhann é an ráta agus an t-ábhar ama a nochtadh mar
  ionchuir infheicthe, gan iad a adhlacadh — an prionsabal trédhearcachta céanna a chlúdaítear faoi
  [chothromas idirghlúine agus lascainiú inbhuanaitheachta](../cothroime-idirghlúine-agus-lascainiú-inbhuanaitheachta/).
- Is ionchur riachtanach de réir a chéile iad cuntais chaipitil nádúrtha do na hailt tionchair
  chomhshaoil de chás gnó [green-book-appraisal](../measúnú-green-book/); ba cheart d'fhoireann
  seachadta a thógann uirlisí cásanna gnó caitheamh le cuntais an ONS agus le luachanna aonaid ENCA
  mar shonraí tagartha le comhtháthú, ní mar rud a athríomhann breithmheasóirí ón tús gach uair.

## Contúirtí

- **Seirbhísí éiceachórais forluiteacha a dhúbailt** — is féidir le luach caitheamh aimsire agus luach
  bithéagsúlachta don suíomh céanna sonraí toilteanais íocaíochta bunúsacha céanna a roinnt; tugann treoir
  ENCA rabhadh go sainráite in aghaidh luachálacha a eascraíonn ó ionstraimí suirbhé forluiteacha a
  shuimiú.
- **Caitheamh le luach sócmhainne caipitil nádúrtha mar rud statach** — athraíonn sreabhadh seirbhíse
  le haeráid, bainistíocht agus brú úsáide talún; ní airí buan den suíomh é luach carbóin agus maolaithe
  tuilte coille sa deich mbliana seo.
- **Luachanna aonaid meán náisiúnta a úsáid do chinneadh an-áitiúil** — tá luach caitheamh aimsire an-
  difriúil ag heicteár coille uirbí inrochtana agus ag heicteár tailte ard iargúlta; molann
  treoir ENCA luachanna áitiúla nó suíomh-shonracha nuair atá siad ar fáil seachas teacht ar mheáin
  náisiúnta de réir réamhshocraithe.

## Foinsí

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
