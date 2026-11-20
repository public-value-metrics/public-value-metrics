# Cothroime Idirghlúine agus Lascainiú Inbhuanaitheachta

Is gnáthchleachtas é costais agus tairbhí todhchaí a lascainiú ar ais go luach láithreach sa mheasúnú poiblí — féach an [ráta lascaine sóisialta](../an-ráta-lascaine-sóisialta/) — ach laghdaíonn aon ráta lascaine dearfach, comhshuimithe thar scórtha nó céadta bliain, an todhchaí i bhfad i gcéin i dtreo nialais i dtéarmaí an lae inniu. Do chinntí a bhfuil iarmhairtí acu céad bliain nó níos mó amach — athrú aeráide, dramhaíl núicléach, caillteanas bithéagsúlachta, inbhuanaitheacht pinsean — éiríonn an fíoras matamaiticiúil sin ina cheann eiticiúil: is féidir le lascainiú caighdeánach dochar tubaisteach do ghlúine todhchaí a dhéanamh dealraitheach, i dtéarmaí luacha láithrigh, nach fiú é a sheachaint go beag.

## Cén fáth a bhfuil tábhacht leis

Scoilteann cothromóid Ramsey, a díorthaíodh ag Frank Ramsey in 1928, an ráta lascaine ina dhá chomhpháirt: tosaíocht ama íon (δ, cé mhéad is fearr linn an lá inniu ná ar ball, gan spleáchas ar shaibhreas) agus an éifeacht fáis shaibhris (η×g, cé mhéad a lascainímid toisc go meastar go mbeidh glúine todhchaí níos saibhre, mar sin tá punt breise níos lú tábhachtach dóibh). Tá ráta lascaine fadtéarmach caighdeánach an Green Book sa RA tógtha ar an gcothromóid seo agus leanann sé sceideal *laghdaitheach* seachas ráta cothrom — dearadh fréamhaithe in obair Martin Weitzman ar "lascainiú gáma," a léiríonn nuair atá an ráta lascaine todhchaí féin éiginnte, go laghdaíonn an ráta coibhéise cinnteachta ba chóir a chur i bhfeidhm go matamaiticiúil le himeacht ama, mar go dtagann cásanna ráta íseal i réim an tuilleadh amach a fhéachann tú. Thóg Athbhreithniú Stern ar Eacnamaíocht an Athraithe Aeráide (2006), faoi stiúir Sir Nicholas Stern, an díospóireacht eiticiúil níos faide: d'áitigh Stern gur chóir tosaíocht ama íon a shocrú gar do nialas (d'úsáid sé δ ≈ 0.1%, ag léiriú ach dóchúlacht bheag tubaiste a chuirfeadh deireadh leis an sibhialtacht, ní fíor-fhabhar don lá inniu thar an todhchaí), ag táirgeadh ráta lascaine éifeachtach i bhfad níos ísle ná gnáthchleachtas an Green Book agus, dá réir sin, cás i bhfad níos mó sa lá inniu ar son gníomhaíochta aeráide. Dúirt criticeoirí (go háirithe William Nordhaus) go raibh ráta beagnach nialasach Stern inchosanta ó thaobh eiticiúil ach neamhchomhsheasmhach le hiompar iarbhír breathnaithe coigiltis agus infheistíochta. Ní fonóta theicniúil é an easaontas — is é an fáth is mó é go bhféadfadh beirt eacnamaithe atá chomh dian céanna tátail atá go mór difriúil a bhaint amach faoi cé mhéad ba chóir don ghlúin láithreach íobairt don todhchaí, agus is é an fáth é go gcaithfidh bogearraí a thacaíonn le measúnú infheistíochta poiblí fadtéarmach a dtoimhdí lascainithe a nochtadh seachas iad a adhlacadh i réamhshocrú scarbhileoige.

## An mhatamaitic

```
Cothromóid Ramsey:   r = δ + η × g

  r = ráta lascaine sóisialta
  δ = tosaíocht ama íon (ráta mífhoighne, gan spleáchas ar shaibhreas)
  η = leaisteachas úsáidiúlachta imeallaí tomhaltais (luach laghdaitheach
      tomhaltas breise de réir mar a éiríonn daoine níos saibhre)
  g = ráta fáis ionchais tomhaltais per capita

Sceideal fadtéarmach laghdaitheach Green Book (garbh, bandaí foilsithe reatha):
  Blianta 0–30:    3.5%
  Blianta 31–75:   3.0%
  Blianta 76–125:  2.5%
  Blianta 126–200: 2.0%
  Blianta 201–300: 1.5%
  Blianta 301+:    1.0%

Paraiméadair Athbhreithniú Stern: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Sampla oibrithe

**Luach inniu de £1 de dhochar seachanta i gceann 100 bliain**, faoi thrí réimeas lascainithe:

```
Ráta cothrom gearrthéarmach Green Book (3.5%, seasta ar feadh 100 bliain):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pingin)

Sceideal laghdaitheach Green Book (3.5% do bhl. 1–30, 3.0% do bhl. 31–75,
2.5% do bhl. 76–100):
  fachtóir(1–30)  = 1.035^30  ≈ 2.807
  fachtóir(31–75) = 1.03^45   ≈ 3.782
  fachtóir(76–100)= 1.025^25  ≈ 1.854
  fachtóir iomlán ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pingin)

Tosaíocht ama íon beagnach nialasach ar stíl Stern (r ≈ 1.4% cothrom):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pingin)
```

Is fiú an £1 céanna de dhochar seachanta céad bliain ón lá inniu 3.2p, 5.1p, nó 25p inniu ag brath ar an gconair lascainithe a úsáidtear amháin — raon beagnach ochtfhillte a thiomáineann cibé an ghlanann tionscadal maolaithe aeráide le costas tosaigh ard agus luaíocht céad bliain amach barra NPV dearfach ar chor ar bith. Is é seo an sásra taobh thiar de phríomhrabhadh an ábhair: ag aon ráta cothrom dearfach ar bhealach suntasach, scriostar dochar todhchaí a bhfuil fad go leor uaidh go huimhríochtúil ón measúnú, beag beann ar a dhéine iarbhír.

## Nasc leis an innealtóireacht bogearraí

- Ba cheart d'aon uirlis measúnaithe nó cháis ghnó fadtéarmach (bonneagar, oiriúnú aeráide, múnlú pinsean) sceideal *laghdaitheach* an Green Book a chur i bhfeidhm, ní ráta cothrom amháin — leabaíonn réamhshocrú ráta cothrom claonadh i bhfad níos láidre in aghaidh na todhchaí go ciúin ná mar a shonraíonn treoir reatha rialtas na RA.
- Ba cheart ráta lascaine agus léaslíne a nochtadh i gcónaí mar pharaiméadair infheicthe, iniúchta i mbogearraí measúnaithe, le híogaireacht an ríofa dóibh a thaispeáint go sainráite (mar sa sampla oibrithe thuas) — tugann ráta a adhlacadh i gcomhad cumraíochta cuireadh don "rogha eiticiúil i bhfolach" go beacht a thugann díospóireacht Stern-Nordhaus rabhadh ina leith; péireálann sé seo leis an bpointe trédhearcachta a rinneadh i [gcuntasaíocht caipitil nádúrtha](../cuntasaíocht-caipitil-nádúrtha/) agus tá sé mar bhonn leis an ábhar [ráta lascaine sóisialta](../an-ráta-lascaine-sóisialta/) go ginearálta.
- Nuair a bhíonn tairbhí clár go sainráite idirghlúine (cosaint tuilte, athchóiriú caipitil nádúrtha, bonneagar digiteach fadtéarmach), ba cheart d'[anailís shóisialta costais agus tairbhe](../anailís-shóisialta-costais-agus-tairbhe/) torthaí a thuairisciú faoi dhá thoimhde lascainithe ar a laghad (caighdeán Green Book agus cás íogaireachta ráta íseal) seachas meastachán pointe amháin, ionas go bhfeiceann cinnteoirí cén chaoi a n-athraíonn rogha an ráta lascaine amháin an freagra.

## Contúirtí

- **NPV lascainithe amháin a chur i láthair gan raon íogaireachta** — ós rud é cé mhéad a athraíonn an ráta lascaine amháin an freagra do thionscadail fhadtéarmacha, áibhéalaíonn NPV aon-ráta cruinneas go hábhartha; tuairiscigh raon i gcónaí a chuimsíonn ar a laghad an caighdeán Green Book agus cás ráta íseal.
- **An ráta cothrom gearrthéarmach (3.5%) a chur i bhfeidhm ar mheasúnú il-chéad bliain** — sonraíonn treoir féin an Green Book an sceideal laghdaitheach go beacht toisc gur measadh nach raibh an ráta cothrom cuí thar thart ar 30 bliain; má úsáidtear é ar aon nós, laghdaítear costais fhadtéarmacha.
- **δ (tosaíocht ama íon) a láimhseáil mar pharaiméadar teicniúil amháin** — níl luach beagnach nialasach Stern agus luach intuigthe níos airde an Green Book araon inchosanta ach mar sheasaimh eiticiúla faoi cé mhéad meáchan atá dlite ag an lá inniu don todhchaí, ní uimhreacha "ceart" nó "mícheart" go heimpíreach; ba cheart do bhogearraí an toimhde a dhéanamh infheicthe seachas figiúr amháin a chur i láthair mar cheart go hoibiachtúil.

## Foinsí

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
