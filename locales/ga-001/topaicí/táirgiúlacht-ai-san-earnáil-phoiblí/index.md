# Táirgiúlacht AI san earnáil phoiblí

Tá bonn fianaise atá contrártha go fírinneach ag na méadracha a thomhaiseann an éifeacht a bhíonn ag cúnamh códaithe AI ar aschur innealtóireachta — rátaí glactha moltaí, luasghéarú i staidéir rialaithe, tréchur PR agus coinneáil cód — fiú sula gcuirtear srianta na hearnála poiblí leis: cuireann rangú sonraí teorainn leis na codanna d'oidhreacht sheanchórais ar féidir le huirlis AI teagmháil a dhéanamh leo ar chor ar bith, ciallaíonn ciorcail soláthair gur minic go mbíonn an uirlis atá á meas ghlúin eiseamláir taobh thiar den chumas reatha, agus rialaíonn na riachtanais imréitigh slándála cé a fhéadfaidh í a úsáid ar cad.

## Cén fáth a bhfuil tábhacht leis

Pointeálann an dá staidéar rialaithe is mó a luaitear i dtreonna os coinne a chéile. Fuair RCT GitHub Copilot 2023 le Peng et al. gur chríochnaigh forbróirí tasc freastalaí HTTP ó thús ar 55.8% níos tapúla le Copilot (1u11n vs 2u41n, n=95). Fuair RCT METR 2025 go raibh forbróirí oibre foinse oscailte a bhfuil taithí acu, ag obair ar *a stórais aibí féin*, 19% níos moille le huirlisí AI tús 2025, cé gur chreid siad go raibh siad thart ar 20% níos tapúla. Tá an dá staidéar ceart; is é an contrárthacht an fhionnachtain — ní aistrítear éifeachtacht i dtasc ó thús go héifeachtúlacht i mbunachar cód aibí, agus is obair i mbunachar cód aibí cuid mhór d'innealtóireacht an rialtais, ar oidhreacht atá níos sine agus níos ait-nósmhaire ná an stór tráchtála meánach. Leagann Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) an Oifig Dhigiteach agus Sonraí Lárnach prionsabail amach le haghaidh glactha freagrach go beacht toisc nach féidir an bonn fianaise seo a allmhairiú go simplí ó thaispeántais díoltóirí; ionchasaítear ar ranna uirlisí a mheas i gcoinne a riachtanas féin um láimhseáil sonraí agus slándáil sula gcuirtear i bhfeidhm iad.

## An mhatamaitic

```
Ráta glactha     = moltaí glactha / moltaí taispeánta
Ráta coinneála   = cód AI a mhaireann go dtí cumasc / cód AI glactha
Luasghéarú       = (t_rialú − t_AI) / t_rialú  (ó chomparáid rialaithe AMHÁIN)
Delta tréchuir   = Δ PR cumaiscthe/forbróir/seachtain

Fachtóir clúdaigh na hearnála poiblí:
  sciar incháilithe den bhunachar cód = LOC ar chórais a gceadaíonn an rangú
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) an uirlis ar chor ar bith

Múnla luacha = forbróirí × clúdach incháilithe × am sábháilte × ráta lán-luchtaithe × úsáid
             — teastaíonn tomhas áitiúil ar gach téarma, agus níl coibhéis san earnáil
             phríobháideach ag an bhfachtóir clúdaigh
```

## Sampla oibrithe

Déanann roinn rialtais píolótú ar chúntóir códaithe AI thar 300 forbróir, ach níl ach córais atá rangaithe OFFICIAL incháilithe d'úsáid uirlise — 70% den oidhreacht de réir leithdháilte ceannlíon, agus an 30% eile (córais ranga níos airde) eisiata go hiomlán.

```
Forbróirí incháilithe = 300 × 0.70 = 210

Toradh an phíolóta: am sábháilte féintuairiscithe 40 nóim/lá;
              sábháil thomhaiste ar leibhéal tascanna 12 nóim/lá (0.2u)
              — bearna aireachtála METR, atáirgthe sa saol fíor

Luacháil an uimhir THOMHAISTE:
  210 × 0.2u × 220 lá × £55/u lán-luchtaithe × 0.6 úsáid
  = 210 × 44 uair × £55 × 0.6
  = 9,240 uair × £55 × 0.6 ≈ £304,920/bliain acmhainneachta

Costas: 210 suíochán ceadúnaithe × £22/mí × 12 ≈ £55,440/bliain

Cóimheas glan acmhainneachta ≈ 304,920 / 55,440 ≈ 5.5:1
```

Is féidir é a mhaoiniú ar thart ar thrian den bhuntáiste féintuairiscithe, agus ach amháin tar éis uasteorainn an rangaithe a chur i bhfeidhm — dá gceadúnófaí gach 300 forbróir ar neart an fhigiúir féintuairiscithe, bheadh an daonra incháilithe agus an fhíorshábháil araon gáirsithe.

## Nasc leis an innealtóireacht bogearraí

Na disciplíní a aistrítear go díreach: reáchtáil **trialacha pragmatacha** ar bhunachar cód agus ar fhíor-thicéid na roinne féin, ní ar thascanna taispeána díoltóirí, toisc gur fionnachtain bhunachair chód aibí go sonrach é toradh METR; caith leis an **ráta glactha mar sheachvolta, ní mar thoradh** — is ionann glacadh ard le coinneáil íseal agus an coibhéis bogearraí de róbhreithniú diagnóise; cuir **seiceáil cobhsaíochta** le gach éileamh tréchuir, toisc gur thuairiscigh tuarascáil DORA 2025 go méadaíonn glacadh AI an tréchur ach go ndéanann sé cobhsaíocht athruithe a mheath, arb é sin go beacht an anailís ghlansochair a thógadh [méadracha DORA don luach poiblí](../méadrachtaí-dora-don-luach-poiblí/) le rith; agus bí macánta gur féidir le huirlisí AI an bhearna ar [fhiachas teicniúil](../fiachas-theicniúil-mar-chreimeadh-ar-luach-poiblí/) i seanoidhreacht throm a leathnú, ní a chúngú, toisc nach bhfuil COBOL, 4GL agus cód príomhfhráma saincheaptha, atá coitianta sa rialtas, ionadaithe go leordhóthanach sna sonraí oiliúna, agus mar sin is minic gurb í cáilíocht na moltaí ar na córais is mó a bhfuil cabhair ag teastáil uathu an cháilíocht is laige. Luíonn sé seo taobh leis an gceist leathan [luach AI sa rialtas](../luach-na-hintleachta-saorga-sa-rialtas/) agus ba cheart é a rialú ag na srianta céanna [luach cibearshlándála san earnáil phoiblí](../luach-na-cibearshlándála-san-earnáil-phoiblí/) a chuireann teorainn leis an áit ar féidir le haon uirlis tríú páirtí cód nó sonraí a fheiceáil ar chor ar bith.

## Contúirtí

- **Aistriú staidéir díoltóra**: is é luasghéarú RCT ó thús a chur i bhfeidhm ar obair chomhtháthaithe oidhreachta an botún a nocht staidéar METR go beacht.
- **Féintuairisc mar thomhas**: is é bearna 20 pointe céatadáin idir aireachtáil agus tomhas an claonadh is mó atá ar eolas sa litríocht seo, agus géaraíonn sé cásanna gnó a bhraitheann ar shuirbhéanna forbróirí amháin.
- **Neamhaird a dhéanamh ar uasteorainn an rangaithe**: déanann múnlaí ceadúnúcháin agus luacha atá bunaithe ar iomlán an cheannlíon seachas ar an bhfosraon incháilithe imréitithe ó thaobh rangaithe de costéifeachtacht agus clúdach indéanta a ghéarú go córasach.
- **Moill an chiorcail soláthair**: is féidir le soláthar uirlise bunaithe ar chreat a chiallú go measúnaíonn píolót glúin múnla atá 12–18 mí taobh thiar de na rudaí atá ar fáil go poiblí faoin am a bhíonn an scaoileadh iomlán ann, rud a fhágann go bhfuil boinn tuisceana luasghéaraithe an chiseal gnó bhunaidh as dáta roimh an seoladh beo.

## Foinsí

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
