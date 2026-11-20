# Cuimsiú digiteach

Is éard is cuimsiú digiteach ann an disciplín chun a chinntiú nach n-éiríonn "digiteach mar réamhshocrú" ina "digiteach amháin" — go n-oibríonn seirbhísí poiblí atá dearthaithe thart ar an gcainéal is saoire fós do na saoránaigh nach féidir leo, nó nach mian leo, é a úsáid gan chúnamh. Chum GDS an mheicníocht seachadta shonrach, "digiteach cúnta", mar riachtanas éigeantach do gach seirbhís dhigiteach rialtais, ní mar bhreis roghnach.

## Cén fáth a bhfuil tábhacht leis

Leag Government Digital Strategy 2012 an uaillmhian amach go soiléir: ba cheart seirbhísí digiteacha a thógáil digiteach mar réamhshocrú, ach d'admhaigh an straitéis féin nach mbeadh thart ar 10% d'aosaigh na Ríochta Aontaithe in ann iad a úsáid gan chabhair, agus gheall sí do ranna tacaíocht dhigiteach chúnta a sholáthar — bealach idirghabháilte ag duine, ar an nguthán, duine le duine, nó trí idirghabhálaí — mar chuid den tseirbhís, ní cúltaca ar leith greamaithe air níos déanaí. Is pointe 5 den [digital-service-standard](../an-caighdeán-um-sheirbhís-dhigiteach/), "cinntigh gur féidir le gach duine an tseirbhís a úsáid", an gealltanas sin anois. Déanann Consumer Digital Index bliantúil Lloyds Banking Group scála an eisiaimh leanúnaigh a rianú: fuair eagrán 2024 go bhfanann thart ar 1.6 milliún duine sa Ríocht Aontaithe as líne, agus go claonann an grúpa seo go mór i dtreo daoine idir 70 agus 79 bliain d'aois, iad siúd a thuilleann faoi bhun £35,000, agus iad siúd atá ar scor nó dífhostaithe — go beacht an daonra is dóichí a bheith ag brath ar na seirbhísí poiblí atá á n-athdhearadh. Fuair an tuarascáil chéanna nach raibh ach 48% d'fhórsa oibre na Ríochta Aontaithe in ann gach 20 tasc ar chreat na Scileanna Riachtanacha Digiteacha a chomhlánú, rud a chiallaíonn nach nasc dénártha atá san eisiamh, ach speictream scileanna, muiníne agus iontaobhais a chailleann méadrach simplí "tá leathanbhanda aige" go hiomlán.

## An mhatamaitic

Is creat agus seiceáil chothromais é cuimsiú digiteach seachas foirmle amháin, ach comhdhéanann sé le measúnú meáite luacha trí [ualú dáileacháin](../meáchan-dáilte/):

```
Luach saoithiúil aistrithe cainéil:
  luach = méid aistrithe × (costas_sean − costas_digiteach)     [féach channel-shift-savings]

Luach coigeartaithe do chuimsiú:
  luach = (méid aistrithe × sábháil gan ualú)
        − (úsáideoirí eisiata × costas sholáthar digiteach cúnta)
        − (coigeartú ualaithe dáileacháin do dhochar do ghrúpaí
           eisiata a chailleann rochtain nó a bhfuil cáilíocht seirbhíse
           díghrádaithe acu)

Ní iarmhar costais teipe é digiteach cúnta — is cainéal dearthaithe é
a bhfuil a [chostas in aghaidh an idirbhirt](../costas-in-aghaidh-an-idirbhirt/) féin aige,
a bhíonn de ghnáth i bhfad níos airde in aghaidh an idirbhirt ná digiteach
féinseirbhíse ach fós níos saoire de ghnáth ná an cainéal oidhreachta a
chuireann sé ina áit go páirteach.
```

## Sampla oibrithe

**Seirbhís sochair náisiúnta de chineál Universal Credit**: 2.5 milliún éileamh sa bhliain, measúnaithe mar dhaoine a bhfuil tacaíocht dhigiteach chúnta de dhíth ar mheastachán 10% d'éilitheoirí de réir bonn tuisceana pleanála an Government Digital Strategy.

```
Cohórt eisiata/digiteach cúnta = 2,500,000 × 10% = 250,000 éileamh/bliain

Costas chainéal digiteach cúnta (tacaíocht ghutháin + duine le duine,
foirnithe chun leochaileacht agus castacht a láimhseáil) ≈ £9.50/éileamh
  = 250,000 × £9.50 = £2,375,000/bliain

Costas digiteach féinseirbhíse don 90% eile ≈ £0.40/éileamh
  = 2,250,000 × £0.40 = £900,000/bliain

Costas measctha in aghaidh an idirbhirt = (2,375,000 + 900,000) / 2,500,000
  = £1.31/éileamh

Ní dhíbríonn dearadh a scipeálann digiteach cúnta chun costas ceannlíne
níos ísle in aghaidh an idirbhirt a bhaint amach (m.sh. £0.40 measctha, ag déanamh neamhaird
ar an 250,000 éilitheoir eisiata) an costas £2.375m sin — aistríonn sé
é go teidlíochtaí gan éileamh, achomhairc, agus éileamh síos an abhainn
ar sheirbhísí géarchéime a thiteann ar bhuiséad éagsúil go hiomlán.
```

## Nasc leis an innealtóireacht bogearraí

Is cainéal dearthaithe é digiteach cúnta, rud a chiallaíonn go bhfuil comhéadain, SLAnna agus ionstraimiú aige cosúil le haon cheann eile: uirlis cásoibrí ghutháin, tairseach idirghabhálaí do Citizens Advice nó d'údarás áitiúil, nó sreabhadh ciosca duine le duine. Is é caitheamh leis mar iarsmaí — uimhir ghutháin i gcló beag seachas cainéal a meastar ón bhfionnachtain — an bealach is coitianta ina dteipeann ar sheirbhísí pointe 5 den [digital-service-standard](../an-caighdeán-um-sheirbhís-dhigiteach/) ag measúnú. Is é cuimsiú digiteach an lionsa cothromais ar gach topaic eile sa ghrúpa seo: cuireann sé teorainn leis an gcaoi is mó atá [channel-shift-savings](../sábháil-ó-aistriú-cainéil/) in ann a bheith réadaithe, is mír líne é a chaithfear a áireamh go hionraic i [gcostas in aghaidh an idirbhirt](../costas-in-aghaidh-an-idirbhirt/), agus is é an feidhmiú díreach é de [ualú dáileacháin](../meáchan-dáilte/) ar chomhthéacs seirbhísí digiteacha — ba cheart sábháil a thiteann go díréireach ar dhaoine atá eisiata cheana ó thaobh digiteach agus eacnamaíochta de a ualú síos, gan caitheamh léi mar choibhéis le sábháil atá scaipthe go cothrom thar an daonra.

## Contúirtí

- **"Digiteach mar réamhshocrú" léite mar "digiteach amháin"**: an líne ghutháin nó an cuntar a dhúnadh nuair a thrasnaíonn glacadh digiteach tairseach, gan a fhíorú go bhfuil malairt atá inúsáidte i ndáiríre ag an gcohórt a fhanann.
- **Cuimsiú a thomhas ar nascacht dhénártha**: is seachvolta lag é "tá leathanbhanda aige" nó "úinéir fón cliste" d'acmhainn idirbheart ar leith a chomhlánú — léiríonn bearna na Scileanna Riachtanacha Digiteacha (nach gcomhlánaíonn ach 48% d'fhórsa oibre na Ríochta Aontaithe gach 20 tasc, de réir Lloyds 2024) go bhfuil scileanna agus muinín chomh tábhachtach le rochtain.
- **Digiteach cúnta a chostáil mar earráid shlánaithe**: é a bhuiséadú mar líne beag teagmhasach seachas mar chainéal cuí lena [chostas in aghaidh an idirbhirt](../costas-in-aghaidh-an-idirbhirt/) féin, ansin bheith iontas air nuair atá easpa maoinithe agus foirneála air ag an seoladh.
- **Suirbhé a dhéanamh ar chríochnaitheoirí rathúla digiteacha amháin**: caillfidh taighde sásaimh agus inúsáidteachta a reáchtáiltear go hiomlán in-seirbhíse na daoine nár shroich an pointe sin riamh, arb é go beacht an daonra atá obair chuimsithe dhigiteach beartaithe chun a chosaint.

## Foinsí

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
