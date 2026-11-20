# Méadrachtaí DORA don Luach Poiblí

Is iad méadrachtaí DORA (DevOps Research and Assessment) — minicíocht imlonnaithe, am seachadta athruithe, ráta teipe athruithe, agus am chun seirbhís a athchóiriú, móide iontaofacht mar chúigiú ceann — na tagarmharcanna feidhmíochta seachadta is bailíochtaithe i dtionscal na mbogearraí. Aistrithe go téarmaí cuntasachta na hearnála poiblí, is ionadaí díreach é gach ceann acu do cé chomh tapa, agus cé chomh sábháilte, a shroicheann luach poiblí saoránach.

## Cén fáth a bhfuil tábhacht leis

Tá taighde deich mbliana DORA, a fhoilsítear gach bliain mar an *Accelerate State of DevOps Report* (modheolaíocht Forsgren, Humble agus Kim, arna reáchtáil anois ag Google Cloud), ag grúpáil foirne i bhfeidhmitheoirí elite, ard, meánach agus íseal. Imlonnaíonn foirne elite ar éileamh, glacann siad níos lú ná lá ón gcomhtharlú go dtí an táirgeadh, teipeann orthu thart ar 5% d'athruithe, agus athchóirítear iad laistigh d'uair an chloig; imlonnaíonn feidhmitheoirí ísle go míosúil nó níos annaimhe, glacann míonna, teipeann orthu thart ar 40% d'athruithe, agus athchóirítear iad i gceann seachtainí. Sa rialtas ní méadrachtaí vanity innealtóireachta iad seo: éilíonn Caighdeán Seirbhíse na Seirbhíse Digití Rialtais go ndéanfadh foirne "athrá agus feabhsú go minic" agus go mbeadh siad in ann freagairt go tapa d'éileamh úsáideoirí, agus tá ranna nach féidir leo imlonnú go sábháilte agus go minic go struchtúrtha ar neamhábaltacht an caighdeán sin a chomhlíonadh, is cuma cad a deir a dtaighde úsáideoirí. Fuair obair éifeachtúlachta digití Oifig an Chaibinéid féin go bhfuil sé costasach saoránach a bhrú ó idirbheart digiteach teipthe nó mall isteach i gcainéal gutháin nó páipéir — mheas Tuarascáil Éifeachtúlachta Digití 2012 GDS go raibh costas ag roinnt idirbheart digiteach chomh híseal le 20p i gcomparáid le teagmhálacha gutháin nó aghaidh-ar-aghaidh a chosain suas le £8.62 — mar sin ní hamháin gur am innealtóireachta a chosnaíonn teip athraithe i seirbhís atá os comhair an phobail, brúnn sí fíorphuint ar bhuiséad an ionaid teagmhála (féach [sutha aistrithe cainéil](../sábháil-ó-aistriú-cainéil/)).

## An mhatamaitic

```
Minicíocht imlonnaithe = imlonnuithe táirgeachta / am
Am seachadta athruithe = t(imlonnú) − t(coimitiú), airmheán
Ráta teipe athruithe   = athruithe teipthe / iomlán na n-athruithe × 100
Am chun athchóiriú (MTTR) = t(athchóirithe) − t(teipe), airmheán
Iontaofacht            = baint amach SLO (infhaighteacht, latency, cruinneas)
```

Aistriúcháin luach poiblí:

```
Am seachadta   → seachtainí sa phíblíne × CoD, féach cost-of-delay-in-public-programmes
Ráta teipe     → ráta teagmhais os comhair saoránach: CFR × costas in aghaidh gach
                 glao ionaid teagmhála athsheolta (nó in aghaidh idirbhirt reachtúil teipthe)
Am athchóirithe → dochar cur as seirbhíse: MTTR × (éilimh/iarratais blocáilte
                 in aghaidh na huaire) × costas iartheachtach nó caillteanas leasa in aghaidh an aonaid
Iontaofacht    → lascaine tairbhe: seirbhís ag infhaighteacht 99% a sheachadann
                 ≈ 0.99 dá tairbhe mhúnlaithe — comhshamhail seachadta
                 an easnaimh ar ghlacadh nó comhlíonta
```

## Sampla oibrithe

Foireann tairseach éileamh sochair de chuid údaráis áitiúil, roimh agus tar éis infheistíocht in innealtóireacht seachadta:

```
                    Roimh       Tar éis
Imlonnuithe         míosúil     seachtainiúil
Am seachadta        8 seachtaine   5 lá
CFR                 30%         10%
MTTR                3 lá        4 uair an chloig
```

Seolann an fhoireann thart ar 25 feabhsúchán/bliain, meánluach £8,000/seachtain ([costas moille](../costas-moille-i-gcláir-phoiblí/)). Trí am seachadta a ghearradh thart ar 7.3 seachtaine tarraingítear sruth tairbhe gach feabhsúcháin ar aghaidh: 25 × 7.3 × 8,000 ≈ **£1,460,000/bliain** luach a seachadadh níos luaithe. Maidir le ráta teipe: 25 × (0.30 − 0.10) = 5 athrú teipthe níos lú/bliain; athsheolann gach athrú teipthe ar thairseach phoiblí measta 2,000 saoránach chuig an gcainéal gutháin ag £8.62 in aghaidh 20p, glanchostas de thart ar £8.42 × 2,000 ≈ £16,840 in aghaidh an teagmhais, mar sin sábhálann 5 theagmhas a sheachaint ≈ **£84,200/bliain**. Luacháiltear an infheistíocht in innealtóireacht seachadta san airgeadra céanna le cás luach poiblí ar bith eile.

## Sampla oibrithe leanta: iontaofacht

Má ritheann an tairseach ag infhaighteacht 97% seachas sprioc 99.5%, agus má mhúnlaítear gach pointe céatadáin de thréimhse neamh-infhaighteachta mar 2% d'éilimh caillte trí thréigean, tá an tseirbhís ag seachadadh thart ar 0.975 dá tairbhe mhúnlaithe £2M/bliain — lascaine tairbhe £50,000/bliain nach dtugann painéal uptime amháin chun solais go deo.

## Nasc leis an innealtóireacht bogearraí

Is méadrachtaí oibríochtúla seirbhíse poiblí iad méadrachtaí DORA faoi éadaí éagsúla: mapálann am seachadta le [caighdeáin seirbhíse agus méadrachtaí idirbheartaíochta](../caighdeáin-seirbhíse-agus-méadrachtaí-idirbheartaíochta/); mapálann ráta teipe athruithe le rátaí athoibre agus gearán; mapálann MTTR le fad an ama a bhíonn seirbhís reachtúil gan fáil d'éilitheoirí. Aistrítear teicnící feabhsúcháin sa dá threo mar is córais scuaine faoi shrianta cuntasachta iad araon — féach [méadrachtaí sreafa i seachadadh rialtais](../méadrachtaí-sreafa-i-seachadadh-an-rialtais/) don mhatamaitic scuaine bhunúsach. Tabhair faoi deara freisin fionnachtain 2025 DORA go bhfuil glacadh AI comhghaolmhar le tréchur níos airde ach le cobhsaíocht *níos measa* — idirghabháil a bhfuil éifeachtacht agus fo-iarmhairtí araon aici, agus is é sin go beacht an anailís glantairbhe a oibríonn ábhar [táirgiúlacht AI](../táirgiúlacht-ai-san-earnáil-phoiblí/) an ghrúpa seo tríd.

## Contúirtí

- **Méadracht a chalaois**: líon na n-imlonnuithe a bhrú suas le heisiúintí gan éifeacht, nó hotfixes a eisiamh ón gcomhaireamh teipe athruithe. Sainmhínigh imeachtaí chomh beacht agus a shainmhíníonn caighdeán seirbhíse reachtúil "idirbheart rathúil".
- **Táblaí sraithe trasranna**: déanann braislí DORA cleachtais seachadta a chur i gcomparáid, ní seirbhísí le próifílí riosca difriúla; d'fhéadfadh córas íocaíochta cánach a rátáiltear "ard" a bheith ar an seasamh ceart nuair a bheadh "elite" meargánta ag cur ceanglais dhearbhaithe san áireamh.
- **Méadracht amháin a bharrfheabhsú ina haonar**: is é luas gan ráta teipe athruithe an malartú clasaiceach tréchur-éagobhsaíocht — tuairiscigh na ceithre cinn le chéile, ní mar scór amháin.

## Foinsí

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
