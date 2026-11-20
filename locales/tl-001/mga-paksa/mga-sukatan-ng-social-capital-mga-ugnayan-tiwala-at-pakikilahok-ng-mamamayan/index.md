# Mga sukatan ng social capital: mga ugnayan, tiwala, at pakikilahok ng mamamayan

Sinusukat ng mga social capital metric ang mga network, tiwala, at pakikilahok ng mamamayan na nagpapahintulot sa mga komunidad at institusyon na gumana nang mahusay — ang "connective tissue" na walang linya sa anumang balance sheet ngunit nakikitang nagpapababa ng gastos at alitan kapag naroon, at nagpapataas nito kapag wala. Nagmula ang makabagong balangkas sa "Bowling Alone" (2000) ni Robert Putnam, na naghiwalay sa bonding capital (ugnayan sa loob ng magkatulad na grupo) at bridging capital (ugnayan sa pagitan ng magkakaibang grupo); mula noon, bumuo na ang Office for National Statistics ng UK ng nakatayong hanay ng mga indicator upang masubaybayan ito sa buong bansa.

## Bakit ito mahalaga

Ang sentrong empirikal na pahayag ni Putnam — na dokumentado sa pagbaba ng pagiging kasapi sa mga asosasyong sibiko sa US, pagsisimba, at pakikilahok sa unyon noong huling bahagi ng ikadalawampung siglo — ay hinuhulaan ng social capital ang mga kinalabasan na hirap ipaliwanag ng karaniwang ekonomiks: mas mababang krimen, mas mabuting kapakanan ng bata, mas epektibong lokal na pamahalaan, mas mabilis na paggaling ng ekonomiya matapos ang mga pagyanig. Mabuti ang bonding capital (matitibay na ugnayan sa loob ng masikip na grupo) para sa magkakatulungan, ngunit maaari itong tumigas tungo sa pagsasara; ang bridging capital (mas maluwag na ugnayan sa magkakaibang grupo) ang karaniwang may kaugnayan sa pagkakataon, daloy ng impormasyon, at tiwala sa institusyon. Sineryoso ito ng ONS hanggang bumuo ng pambansang balangkas ng indicator — sinusubaybayan ng serye nitong "Social Capital in the UK"
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) ang apat na haligi: personal na relasyon, suporta ng social network, pakikilahok sibiko, at tiwala at mga normang pangkooperasyon, bawat isa'y binuo mula sa mga kilalang tanong sa survey (Community Life Survey, Understanding Society). Para sa mga serbisyong digital ng pampublikong sektor, doble ang kaugnayan ng social capital: ito ay kinalabasang sinisikap buuin ng ilang programa (pondo para sa katatagan ng komunidad, social prescribing) at input din na tumutukoy kung gaano kahusay ma-aampon ang isang serbisyo — ang serbisyong inilunsad sa komunidad na mataas ang tiwala at mahusay ang network ay kakalat sa pamamagitan ng bibig-sa-bibig sa paraang hindi magagawa ng magkaparehong serbisyo sa lugar na mababa ang tiwala.

## Ang matematika

```
Balangkas ng apat na haligi ng ONS (mga indicator, ilustratibo):

Personal na relasyon:        % na may maaasahan sa oras ng krisis
Suporta ng social network:   % na makakahiram ng pera sa kaibigan/pamilya kung kailangan
Pakikilahok sibiko:          % na nag-volunteer o kumilos sibiko sa nakaraang 12 buwan
Tiwala at mga normang kooperatibo: % na sumasang-ayong "mapagkakatiwalaan ang karamihan ng tao"

Walang iisang composite score ng ONS na inilalathala — hiwa-hiwalay na
iniuulat ang mga haligi, sadya, dahil ang pagsasama sa iisang index
ay magtatago kung aling haligi ang mahina.

Hati ni Putnam na bonding/bridging (balangkas, hindi pormula):
  bonding capital ≈ densidad ng mga ugnayan sa loob ng homogeneous na grupo
  bridging capital ≈ dalas/lakas ng mga ugnayan sa pagitan ng magkakaibang grupo
```

## Halimbawang kalkulasyon

**Snapshot ng social capital sa isang kapitbahayan**: ipinapakita ng poll na istilong Community Life Survey sa isang lokal na lugar na 78% ang may maaasahan sa krisis (personal na relasyon), 61% ang makakahiram ng pera kung kailangan (suporta ng network), 24% ang nag-volunteer sa nakaraang taon (pakikilahok sibiko), at 41% ang sumasang-ayong "mapagkakatiwalaan ang karamihan ng tao" (tiwala at norma) — kumpara sa pambansang average na humigit-kumulang 85%, 70%, 30%, at 45% (ilustratibo, i-calibrate sa kasalukuyang bulletin ng ONS). Mababa ang lugar sa bawat haligi ngunit pinakamatindi sa tiwala (41% kontra 45% pambansa, agwat na 4 na punto) at pakikilahok sibiko (24% kontra 30%, agwat na 6 na punto) — kaya ang pakikilahok sibiko, hindi ang tiwala, ang pinakamalaking relatibong kakulangan na dapat paglaanan ng tiyak na pamumuhunan (halimbawa, programa ng community grants) sa halip na pangkalahatang inisyatibang "buuin ang tiwala".

**Bonding laban sa bridging, sa disenyo ng serbisyo**: napag-alaman ng isang jobs programme sa masikip na komunidad na mabilis ang pagkalat ng mga referral sa loob ng komunidad (mataas na bonding capital: kumakalat ang balita sa loob ng ilang araw) ngunit nahihirapan ang programang maabot ang mga residenteng nasa labas ng network (mababang bridging capital: halos zero ang uptake sa labas ng pangunahing komunidad matapos ang ilang buwan). Ang kailangang lunas ay hindi "mas maraming marketing" kundi sadyang pagbuo ng mga bridging tie — pakikipagtulungan sa mga organisasyong nasa *labas* ng umiiral na network, dahil hindi malulutas ng bonding capital lamang ang problema ng bridging capital.

## Kaugnayan sa software engineering

- Ang mga digital platform na nagruruta ng mutual aid, volunteering, o community grants (halimbawa, serbisyong "local connector") ay literal na bumubuo ng imprastraktura ng bridging capital; ang sukatan ng tagumpay nila ay dapat ang pagkakaiba-iba ng network ng mga koneksyong nabuo, hindi lang bilang ng transaksyon — tingnan ang [government-as-a-platform](../government-as-a-platform-mga-pinagsasaluhang-bahagi-ng-serbisyong-digital-ng-pamahalaan/) para sa mas malawak na padron ng imprastrakturang pinagtatayuan ng halaga ng iba.
- Kung tahasang tinatarget ng theory of change ng programa ang social capital bilang kinalabasan (pondo para sa katatagan ng komunidad, serbisyo ng social prescribing), dapat pangalanan ng [theory of change](../theory-of-change-pabalik-na-pagmamapa-ng-sanhi-mula-sa-layunin-hanggang-sa-mga-aktibidad/) at [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) nito ang tiyak na haligi (tiwala, pakikilahok sibiko, suporta ng network) na inaasahang gagalaw, sa halip na malabong kinalabasang "buuin ang komunidad" na hindi masusukat laban sa baseline ng ONS.
- Kapaki-pakinabang na lente ng equity ang mga indicator ng social capital kasabay ng [Index of Multiple Deprivation](../index-of-multiple-deprivation-opisyal-na-sukatan-ng-relatibong-kahirapan-ng-maliliit-na-lugar-sa-england/): maaaring kapos sa kita ngunit mayaman sa ugnayang panlipunan ang isang lugar, o kabaligtaran, at magkaibang-magkaiba ang interbensyong itinuturo ng dalawa.

## Mga karaniwang pagkakamali

- **Pagsasama ng apat na haligi ng ONS sa iisang composite score** — sadyang hindi ito ginagawa ng ONS; itinatago ng iisang bilang kung aling haligi ang nagpapababa ng basa, at itinatago ng pag-average ang komunidad na mataas ang tiwala ngunit walang pakikilahok sibiko laban sa kabaligtaran nito.
- **Pag-aakalang laging mabuti ang social capital** — maaaring aktibong labanan ng makapal na bonding capital sa saradong grupo ang mga panlabas na institusyon (kasama ang mga serbisyo ng pamahalaan); itinuturing ng sariling pagsusuri ni Putnam ang bonding at bridging bilang magkaibang kabutihan na may magkaiba, minsang magkasalungat, na epekto.
- **Paggamit ng mga sukat na batay sa survey bilang real-time na operational metric** — taon-taon o mas bihira pa ang takbo ng mga pinagbabatayang survey (Community Life Survey, Understanding Society); ituring ang datos ng social capital bilang mabagal-gumalaw na contextual indicator, hindi bagay na maa-update lingguhan ng service dashboard.

## Mga sanggunian

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster, 2000.
- ONS. "Social capital in the UK: bulletins." <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
