# Stated preference valuation: pagtatantiya ng halaga sa pamamagitan ng pagtatanong sa mga tao

Tinatantiya ng mga pamamaraan ng stated preference ang halaga ng produktong walang pamilihan sa pamamagitan ng direktang pagtatanong sa mga tao kung magkano ang kaya nilang bayaran para rito, o kung magkano ang tatanggapin nilang kabayaran upang isuko ito, karaniwan sa pamamagitan ng nakabalangkas na survey na naglalarawan ng hipotetikal na sitwasyon. Ang contingent valuation ang pinakakilalang pamamaraan sa pamilyang ito.

## Bakit ito mahalaga

Inirerekomenda ng Green Book Annex 2 (suplementaryong gabay sa pagtataya ng mga non-market na epekto) ang mga pamamaraan ng stated preference para sa mga produktong walang nakikitang transaksyon sa pamilihan na mapagbabatayan ng halaga — kalidad ng hangin, biodiversity, proteksyon laban sa baha, at existence value ng tanawing maaaring hindi na kailanman bisitahin ng isang tao
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Naglathala ang Defra ng sarili nitong gabay sa stated preference para sa environmental appraisal dahil napakaraming halagang pangkapaligiran (pangangalaga ng tirahan, kalidad ng tubig) ang walang proxy na pamilihan, di tulad ng ingay, na may kaugnayan man lang sa mga nakikitang presyo ng bahay (tingnan ang [revealed preference valuation](../revealed-preference-valuation-pagpapahalaga-mula-sa-aktuwal-na-gawi-sa-pamilihan/)).

Ang pangunahing bentahe ng stated preference — kaya nitong bigyang-halaga ang literal na anumang bagay, kasama ang mga bagay na hindi pa kailanman naitransaksyon — ay siya ring pinagmumulan ng problema sa kredibilidad nito. Dahil hindi aktuwal na gumagastos ng pera ang mga respondent, mahina ang contingent valuation survey sa hypothetical bias (pinalalaki ng mga tao ang willingness-to-pay kapag walang tunay na limitasyon sa badyet), embedding effect (magkaiba ang halaga ng parehong produkto depende sa kasama nito sa survey), at starting-point bias sa mga disenyong bidding game. Ang NOAA panel noong 1993 sa contingent valuation, na binuo kasunod ng litigasyon sa oil spill ng Exxon Valdez, ay nagtakda ng mga pamantayan sa disenyo — binary na "babayaran mo ba ang £X, oo/hindi" na referendum format sa halip na open-ended na bidding, at sapilitang paalala ng aktuwal na limitasyon sa badyet ng respondent — na nananatiling pamantayang sanggunian para sa mga survey na maipagtatanggol.

## Ang matematika

```
Contingent valuation (referendum format):
  Magharap ng binary na pagpili: "babayaran mo ba ang £X kada taon para sa kinalabasang Y? oo/hindi"
  Baryahin nang random ang X sa mga respondent.
  I-fit ang willingness-to-pay bilang punsiyon ng rate ng sagot na oo/hindi sa bawat X.

Mean WTP = lawak sa ilalim ng tinantiyang demand curve
Kabuuang halaga = Mean WTP × apektadong populasyon

Bersyon na choice experiment (discrete choice modelling):
  Magharap sa mga respondent ng paulit-ulit na pagpili sa pagitan ng mga bundle ng katangian
  (kasama ang katangiang gastos), tantiyahin ang implicit price ng bawat
  katangiang hindi gastos mula sa mga trade-off na ipinapakita ng mga respondent.
```

Karaniwang mas gusto sa kasalukuyang praktika ng UK ang bersyon na choice-experiment kaysa sa contingent valuation na may iisang tanong, dahil ang paulit-ulit na pagpilit sa mga respondent na magtimbang ng ilang katangian laban sa gastos ay nagbubunga ng mas pare-parehong panloob at mas mahirap dayain na mga tantiya kaysa sa iisang tanong na oo/hindi.

## Halimbawang kalkulasyon

**Pambansang pamahalaan**: nag-utos ang Defra ng contingent valuation survey upang bigyang-halaga ang programa sa pagpapabuti ng kalidad ng tubig ng ilog. Ipinapakita ng referendum-format na survey sa 2,000 sambahayan na 62% ang magbabayad ng £40/taon sa pamamagitan ng hipotetikal na dagdag sa singil sa tubig, at ang tinantiyang demand curve ay nagbibigay ng mean willingness-to-pay na £28/taon kada sambahayan.

```
Mean WTP = £28/sambahayan/taon
Mga sambahayan sa catchment = 340,000
Kabuuang taunang halaga = £28 × 340,000 = £9.52m/taon

Sa 20-taong appraisal period sa 3.5% na discount rate (annuity factor ≈ 14.2):
PV(benepisyo) ≈ £9.52m × 14.2 ≈ £135m
```

Ang kabuuang bilang na ito ay ikinukumpara sa panig ng gastos ng programa sa [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/). Hinihingi ng Green Book na iulat ang ganitong ebidensya ng stated preference kasama ang confidence interval at metodolohiya ng survey, hindi bilang hubad na point estimate, dahil mas marupok ang pinagbabatayang bilang kaysa sa presyo sa pamilihan.

**Charity**: sinusurvey ng isang heritage trust ang mga bisita at hindi-bisita tungkol sa willingness-to-pay upang maiwasan ang pagsasara ng makasaysayang gusali na hindi nila kinakailangang binibisita (existence value nito). Dahil ang mga hindi-bisitang hindi kailanman makakakita sa gusali ay nag-uulat pa rin ng positibong WTP, nakukuha ng survey ang existence at bequest value na lubusang hindi mapapansin ng simpleng bilang ng kita mula sa bayad ng bisita (revealed-preference na proxy) — na nagpapakita ng tunay na bentahe ng stated preference kung saan walang anumang transaksyon sa pamilihan upang ibunyag ang halaga.

## Kaugnayan sa software engineering

Bihirang direktang naaangkop ang mga pamamaraan ng stated preference sa gawaing software engineering, ngunit ang mga engineer na bumubuo ng mga platform ng konsultasyon ng mamamayan, mga tool sa paglahok sa badyet, o imprastraktura ng pampublikong survey ay madalas na bumubuo ng instrumentong inaasahan ng ekonomiks. Ang tamang disenyo ng survey — random na halaga ng bid, binary na referendum framing sa halip na open-ended na tanong, tahasang paalala ng limitasyon sa badyet — ay hindi luho ng UX, ito ang nagpapahusay sa pagiging maipagtatanggol ng resultang pagtataya sa ilalim ng pagsusuri; ang mahinang disenyo ng in-app survey ay maaaring magpawalang-bisa sa buwan-buwang kasunod na pagsusuring pang-ekonomiya. Tingnan ang [citizen satisfaction metrics](../mga-sukatan-ng-kasiyahan-ng-mamamayan-sa-serbisyong-pampubliko/) para sa mas pangkalahatang disiplina ng pangangalap ng datos ng opinyon ng publiko na tatanggap ng bigat na pagsusuri.

## Mga karaniwang pagkakamali

- **Open-ended na tanong na "magkano ang babayaran mo?"** Mas madaling tamaan ng strategic at anchoring bias ang mga ito kaysa sa binary na referendum framing; umiiral ang rekomendasyon ng NOAA panel na gumamit ng referendum format dahil mahina ang open-ended na elicitation.
- **Walang paalala ng aktuwal na limitasyon sa badyet ng respondent.** Kung wala ito, madalas na lumalampas ang stated WTP sa babayaran ng parehong mga tao kapag may tunay na trade-off sa badyet — hypothetical bias.
- **Pagwawalang-bahala sa embedding effect.** Magkaiba ang tantiya ng WTP kapag mag-isang tinaya ang produkto kumpara sa bahagi ng mas malaking bundle; iulat kung ano pa, kung mayroon, ang nasa balangkas ng survey.
- **Pagturing sa point estimate ng iisang survey bilang tiyak na.** Inaasahan ng praktika ng Green Book ang saklaw at talakayan ng mga kilalang bias, hindi hubad na bilang na ipinapasa sa cost-benefit table na parang presyo sa pamilihan.

## Mga sanggunian

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method." Resources for the Future, 1989.
