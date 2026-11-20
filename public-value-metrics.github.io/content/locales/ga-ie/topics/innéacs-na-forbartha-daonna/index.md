# Innéacs na Forbartha Daonna (HDI)

Is é an HDI an mhalairt cheannlíne de chuid na NA ar thíortha a rangú de réir ioncaim amháin: comhcheanglaíonn sé ionchas saoil, oideachas, agus ioncam in uimhir amháin idir 0 agus 1, ar an réamhphrionsabal — a d'áitigh an t-eacnamaí Amartya Sen agus a d'fhorbair Mahbub ul Haq don NA — gur faoi leathnú an méid is féidir le daoine a dhéanamh agus a bheith atá an fhorbairt, ní hamháin cad a thuilleann siad. Foilsítear gach bliain é i dTuarascáil Forbartha Daonna Chlár Forbartha na Náisiún Aontaithe ó 1990 i leith.

## Cén fáth a bhfuil tábhacht leis

Roimh an HDI, tomhaiseadh "forbairt" beagnach go hiomlán de réir OTN per capita, nach ndeir faic faoi cibé an sroicheann fás sláinte nó oideachas gnáthdhaoine. D'athfhrámaigh cur chuige cumais Sen forbairt mar leathnú saoirsí fíora, agus rinne ul Haq innéacs foilsithe de a bhféadfadh an UNDP gach tír a rangú de réir, ag cur iallach ar rialtais a d'fhás saibhir ar ioncam amháin ach a rinne dearmad ar shláinte nó ar scolaíocht aghaidh a thabhairt ar rang níos measa ná mar a mhol a OTI (is iad stáit ola na Murascaille agus roinnt geilleagar eastósctha na samplaí caighdeánacha). Is é struchtúr trí-bhealach an HDI freisin sinsear modheolaíochta díreach an [Innéacs Bochtaineachta Ildoiseach](../innéacs-boichtineachta-illtoiseach/): diúltaíonn an dá cheann ligean do thoise amháin easnamh i dtoise eile a cheannach ar ais, ag úsáid meán geoiméadrach seachas uimhríochtúil. Foilsíonn UNDP nótaí teicniúla iomlána agus na sonraí bunúsacha do gach eagrán (<https://hdr.undp.org/data-center/human-development-index>), arb é an fhoinse chanónach é d'aon duine a thógann ar an innéacs seachas é a athdhíorthú.

## An mhatamaitic

```
Innéacs Ionchais Saoil (LEI)    = (LE − 20) / (85 − 20)

Innéacs Meánbhlianta Scolaíochta   = meánbhlianta scolaíochta / 15
Innéacs Blianta Scolaíochta Súil   = blianta scolaíochta súil leo / 18
Innéacs Oideachais (EI)           = (Innéacs Meánbhlianta + Innéacs Blianta Súil) / 2

Innéacs Ioncaim (II)              = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [meán geoiméadrach na dtrí fho-innéacs]
```

Tá an meán geoiméadrach d'aon ghnó: toisc go méadaíonn sé seachas go meánaíonn, ní féidir le scór an-ard i dtoise amháin scór an-íseal i dtoise eile a chúiteamh go hiomlán — dearadh a ghlac UNDP in 2010 go sonrach chun éagothroime a phionósú, ag cur in ionad na foirmle meáin uimhríochtúla roimhe sin.

## Sampla oibrithe

**Tír meánioncaim**: ionchas saoil 72 bliain, meánbhlianta scolaíochta 8, blianta scolaíochta súil leo 13, GNI per capita $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

Titeann HDI de 0.713 i mbanda "forbairt dhaonna ard" UNDP (0.700–0.799); tosaíonn "an-ard" ag 0.800. Tabhair faoi deara cé chomh híogair is atá an toradh don fho-innéacs is laige: dá mba 4 in ionad 8 an meánbhlianta scolaíochta (MYSI = 0.267, EI = 0.494), titeann HDI go (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — ag titim banda iomlán — cé nár athraigh aon rud eile.

## Nasc leis an innealtóireacht bogearraí

- Is féidir patrún an mheáin gheoiméadraigh a athúsáid go díreach d'aon scór comhchumaisc seirbhíse nó táirge nach dteastaíonn uait go gclúdódh toise láidir amháin toise criticiúil lag — e.g. scóir inrochtaineachta, feidhmíochta, agus iontaofachta do sheirbhís dhigiteach phoiblí a chomhcheangal go iolraíoch seachas le meán meáchaite, ionas nach bhféadfadh seirbhís atá tapa ach neamhinrochtana scór "maith" a fháil.
- Is é lógchlaochlú ioncaim an HDI (luach imeallach laghdaitheach punt breise) an loighic chéanna atá taobh thiar de [mheáchan dáilte](../meáchan-dáilte/) i measúnú: ciallaíonn $1,000 breise i bhfad níos mó do theaghlach bocht ná do cheann saibhir, agus déanann an dá cheann a láimhseáil go líneach praghas mícheart ar thionchar.
- Ba cheart d'aon phainéal a thuairiscíonn scór "cuimsiú digiteach" nó "torthaí saoránach" cumaisc amháin a fhoirmle comhiomlánaithe a dhoiciméadú chomh sainráite agus a dhéanann nótaí teicniúla UNDP — féach [KPIanna na hearnála poiblí](../kpinna-na-hearnála-poiblí/) agus [clár scóir luach poiblí](../cárta-scórála-na-luacha-poiblí/).

## Contúirtí

- **Meánú in ionad an meán geoiméadrach a úsáid** — ligeann meán uimhríochtúil d'ioncam ard sláinte nó oideachas bocht a cheilt go hiomlán; ba é pointe iomlán athrú modheolaíochta 2010 an ionadú sin a stopadh.
- **HDI a chur i gcomparáid bliain ar bhliain amhail is gur OTI coigeartaithe do bhoilsciú praghsanna é** — athbhunaíonn UNDP an t-innéacs ó am go ham (teorainneacha nua íosta/uasta, caipíní scolaíochta athbhreithnithe), mar sin is féidir le hathrú rangaithe nuashonrú modheolaíochta a léiriú, ní athrú fíor; seiceáil i gcónaí cén t-eagrán HDR as a dtagann figiúr.
- **HDI a láimhseáil mar thomhas bochtaineachta** — is meán náisiúnta é agus ní deir sé faic faoi dháileadh laistigh de thír; chuige sin, úsáid an [Innéacs Bochtaineachta Ildoiseach](../innéacs-boichtineachta-illtoiseach/) nó HDI Coigeartaithe do Neamhionannas ar leith UNDP.

## Foinsí

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
