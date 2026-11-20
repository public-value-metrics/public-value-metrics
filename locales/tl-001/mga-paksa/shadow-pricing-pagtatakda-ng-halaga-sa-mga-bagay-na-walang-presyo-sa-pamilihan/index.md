# Shadow pricing: pagtatakda ng halaga sa mga bagay na walang presyo sa pamilihan

Ang shadow price ay tantiyadong halagang itinatakda sa isang produkto, yaman, o externality na walang makikitang presyo sa pamilihan, o may presyong baluktot at hindi sumasalamin sa tunay na halagang panlipunan nito. Umaasa ang government appraisal sa kakaunting opisyal na shadow price — carbon, oras na hindi trabaho, at lakas-paggawa ng mga walang trabaho — na inilalathala nang sentral upang iisang bilang ang gamitin ng bawat departamento.

## Bakit ito mahalaga

Umiiral ang mga shadow price dahil hindi gumagana ang [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/) kung walang halagang pera ang bawat gastos at benepisyo, at maraming pinakamabibigat na bahagi nito — isang toneladang carbon na ibinuga, isang oras ng biyahe ng commuter, isang oras ng lakas-paggawang walang trabaho kung hindi man — ay walang presyo sa pamilihan, o may presyong mali ang naipapakita sa tunay na gastos panlipunan. Magkasamang inilalathala ng HM Treasury at ng Department for Energy Security and Net Zero ang shadow price ng carbon na ginagamit sa lahat ng appraisal ng pamahalaan ng UK
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Hindi ito hinango sa anumang presyo ng carbon sa pamilihan, kundi sa target-consistent na pamamaraan: itinatakda ang halaga ng carbon sa marginal abatement cost na kailangan upang maabot ang mga legislated carbon budget ng UK — ibang-iba ang lohikang ito sa pagtingin kung magkano talaga ang kalakal ng carbon sa EU o UK Emissions Trading Scheme.

Katulad na lohika ang sinusunod ng shadow wage rate sa panig ng paggawa. Ang pagpapasahod sa taong kung hindi ay walang trabaho ay hindi nagkakahalaga sa lipunan ng buong sahod niya — bahagi ng sahod na iyon ay paglilipat (transfer) mula sa nawalang benepisyo at nawalang oras ng pahinga o paghahanap ng trabaho, hindi bagong pasanin sa yaman ng lipunan — kaya nagtatakda ang gabay ng Green Book ng shadow price na mas mababa sa sahod sa pamilihan para sa lakas-paggawang mula sa kawalan ng trabaho, na sumasalamin sa tunay na opportunity cost ng paggawang iyon (tingnan ang [opportunity cost sa paggastos ng publiko](../opportunity-cost-sa-paggastos-ng-pamahalaan-ang-halaga-ng-pinakamahusay-na-alternatibong-isinuko/)) at hindi sa presyo nito sa pamilihan.

## Ang matematika

```
Shadow price ng carbon (ilustratibong istruktura; ang kasalukuyang mga halaga
ay mula sa opisyal na carbon values tool ng BEIS/DESNZ — huwag gumamit ng lumang bilang):
  Halaga sa traded sector: batay sa mga trajectory ng presyo ng ETS allowance
  Halaga sa non-traded sector (target-consistent): itinakda sa marginal cost
    ng abatement na kailangan upang maabot ang mga legislated carbon budget,
    tumataas habang nauubos ang mas madadaling opsyon sa abatement
  Paglalapat: £/tonelada ng CO2e × toneladang ibinuga o nabawas ng opsyon,
    dini-discount sa social discount rate para sa mga susunod na taon

Shadow wage rate (SWR):
  SWR = Sahod sa pamilihan − (halaga ng nawalang oras ng pahinga/paghahanap
                              na naiwasan + halaga ng mga benepisyong hindi na binabayaran)
  Karaniwang ipinapahayag bilang bahagi ng sahod sa pamilihan (hal. SWR = 0.6
    × sahod sa pamilihan sa lugar na mataas ang kawalan ng trabaho, ayon sa gabay
    ng Green Book Annex A sa mga labor market na may sobrang kapasidad)
```

Parehong kumbensiyon ng patakaran ang dalawang bilang na itinakda nang sentral, hindi obserbasyon sa pamilihan — ang buong layunin ng shadow price ay palitan ang nawawala o baluktot na pamilihan, kaya dapat banggitin ng appraisal na gumagamit nito ang kasalukuyang opisyal na pinagmulan sa halip na bumuo ng sariling bilang, upang maikumpara ang appraisal ng bawat departamento.

## Halimbawang kalkulasyon

**Pambansang pamahalaan**: tinatayang naiiwasan ng appraisal ng isang flood defence scheme ang 400 toneladang CO2e na emisyon kada taon (dahil sa mas kaunting paggamit ng emergency plant at mas kaunting embodied carbon mula sa naiwasang muling pagtatayo) sa loob ng 30-taong appraisal life, kumpara sa "do minimum" na baseline.

```
Ilustratibong shadow price ng carbon: £280/tonelada ng CO2e (taon 1, tumataas
  sa buong appraisal period ayon sa opisyal na iskedyul ng non-traded carbon values)
Benepisyo ng carbon sa taon 1 = 400 × £280 = £112,000
```

Dahil *tumataas* ang halaga ng carbon sa opisyal na iskedyul sa buong appraisal period (sumasalamin sa humihigpit na carbon budget), dapat ilapat ng analyst ang tamang halaga para sa bawat taon ng 30-taong daloy, hindi isang patag na rate — ang paggamit ng halaga sa taon 1 sa kabuuan ay magpapababa ng tantiya sa mga benepisyo sa mga huling taon at magbabaluktot sa pagraranggo laban sa ibang disenyo ng flood defence na may ibang carbon profile.

**Lokal na awtoridad**: naglalagay ang employment support programme ng isang konseho para sa mga matagal nang walang trabahong residente ng 150 tao sa mga trabahong may sahod na £11/oras. Kung ang buong sahod sa pamilihan ang gagamitin sa pagtataya, mapapatawan ang programa ng £11 × oras na nagtrabaho bilang benepisyong panlipunan, ngunit kinikilala ng shadow wage rate na hindi sila mga manggagawang kinuha mula sa ibang trabaho — mababa ang tunay na opportunity cost ng kanilang paggawa bago ang programa.

```
Sahod sa pamilihan: £11.00/oras
Shadow wage rate (ilustratibo, mataas na lokal na kawalan ng trabaho): 0.6 × sahod sa pamilihan = £6.60/oras
Netong benepisyong panlipunang maiuugnay kada oras ng trabaho ≈ £11.00 − £6.60 = £4.40/oras
  (ang "dagdag" na halagang nalilikha sa paglipat ng tunay na nakatenggang paggawa tungo sa produksyon,
   na iba sa sahod mismo, na higit na transfer)
```

Kaya nagpapakita ng positibong net social value ang appraisal ng mga employment programme sa mga lugar na mataas ang kawalan ng trabaho, kahit hindi ito mangyayari sa parehong programa sa lugar na may full employment, kung saan ang displaced na paggawa ay basta kukunin lamang mula sa ibang trabaho.

## Kaugnayan sa software engineering

Bihirang direktang tumama ang shadow pricing sa paghahatid ng software, ngunit mahalaga ito tuwing nagke-claim ang business case ng benepisyong carbon o panlipunan mula sa pagbabago sa IT — ang data-centre consolidation na nagke-claim ng natipid na carbon, o ang paperless service na nagke-claim ng naiwasang carbon sa pag-imprenta at postage, ay dapat gumamit ng kasalukuyang opisyal na shadow price ng carbon sa halip na imbentong bilang, at dapat ilapat ang tamang taon-taong iskedyul sa halip na patag na rate, gaya ng anumang input ng Green Book appraisal. Tingnan ang [total cost of ownership sa IT ng pamahalaan](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/) at ang [halaga ng cybersecurity sa pampublikong sektor](../halaga-ng-cybersecurity-sa-pampublikong-sektor-pagpepresyo-sa-pagbabawas-ng-panganib/), na parehong madalas nangangailangan ng shadow price para sa input na mahirap gawing pera (panganib ng breach, downtime) kasabay ng mga bagay na may direktang gastos.

## Mga karaniwang pagkakamali

- **Paggamit ng lumang halaga ng carbon o sahod.** Pana-panahong binabago ng sentral na gabay ang parehong halaga; hindi tatagal sa pagsusuri ng Treasury ang appraisal na nakabatay sa napalitan nang bilang.
- **Paglalapat ng patag na shadow price ng carbon sa appraisal na tumatagal ng ilang dekada.** Tumataas ang opisyal na iskedyul sa paglipas ng panahon; ang paggamit ng halaga sa taon 1 sa kabuuan ay nagbabaluktot sa profile ng mga benepisyo o gastos.
- **Pagkalito sa shadow wage at sa diskuwento sa aktuwal na sahod ng manggagawa.** Inaayos ng shadow wage rate ang pagtataya ng *appraisal* sa input na paggawa, hindi ang sahod na aktuwal na natatanggap ng manggagawa — ang paghahalo sa dalawa ay nag-aanyaya ng (maling) katwiran para sa sahod na mas mababa sa pamilihan.
- **Pagbuo ng sariling shadow price sa halip na gamitin ang opisyal.** Kumbensiyon ng patakaran ang mga shadow price upang maikumpara ang mga appraisal sa pagitan ng mga departamento; sinisira ng lokal na imbentong bilang, gaano man kahusay ang katwiran, ang pagkakumparang iyon.

## Mga sanggunian

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow price of labour, non-work time values). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann, 1974 (foundational shadow-pricing methodology).
