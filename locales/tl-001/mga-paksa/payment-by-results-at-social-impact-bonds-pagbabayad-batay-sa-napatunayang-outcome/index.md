# Payment by results at social impact bonds: pagbabayad batay sa napatunayang outcome

Ang payment by results (PbR) ay nagbabayad sa provider batay sa napatunayang mga outcome na nakamit, hindi sa mga aktibidad na isinagawa. Ang social impact bond (SIB) ay partikular na istrukturang pampinansya ng PbR kung saan ang mga pribado o pilantropikong investor ang nagpopondo sa paghahatid ng serbisyo nang paunahan at binabayaran — may kasamang tubo — ng commissioner ng pamahalaan lamang kung abutin ng malayang nasukat na mga outcome ang napagkasunduang threshold, na inililipat ang panganib sa paghahatid mula sa nagbabayad ng buwis tungo sa investor.

## Bakit ito mahalaga

Ang kauna-unahang SIB sa mundo ay inilunsad sa HMP Peterborough noong Setyembre 2010: nakalikom ang Social Finance ng £5 milyon mula sa 17 investor upang pondohan ang "One Service," na nakipagtrabaho sa mga bilanggong maikli ang sentensiya (wala pang 12 buwan) upang bawasan ang muling pagkakasala, at pumayag ang Ministry of Justice at Big Lottery Fund na bayaran lamang ang mga investor kung bumaba nang hindi bababa sa 7.5% ang mga kaganapan ng reconviction laban sa katugmang pambansang comparison cohort. Ang huling cohort ng pilot sa Peterborough ay nagtala ng 9.7% na pagbaba sa mga reconviction, mas mataas nang komportable sa threshold, at nabayaran ang mga investor na may tubo. Mahalaga ang mekanismo dahil nalutas nito ang tiyak na problema sa commissioning: gustong magbayad ng pamahalaan para sa mga outcome sa halip na mga input, ngunit hindi nito kayang sagutin ang panganib na pampinansya ng interbensyong maaaring hindi gumana, kaya inilipat ng istruktura ng SIB ang panganib na iyon sa mga investor na handang sumagot dito. Ang Government Outcomes Lab (GO Lab) sa Blavatnik School of Government ng Oxford ang nagpapanatili ngayon ng pinakakumpletong pampublikong batayan ng ebidensya sa performance ng PbR at SIB sa buong mundo, na sinusubaybayan ang mahigit 200 impact bond sa buong mundo at naglalathala ng pananaliksik kung aling mga katangian ng disenyo ang may kaugnayan sa tagumpay o pagkabigo. Ang aral na paulit-ulit na bumabalik sa batayan ng ebidensya ay ang *napiling outcome metric*, at kung sino ang may pasan ng panganib na hindi ito maabot, ang nagtatakda sa halos lahat ng iba pa tungkol sa aktuwal na pag-uugali ng kontrata ng PbR.

## Ang matematika

```
Bayad sa PbR = base payment (kung mayroon) + Σ (outcome na nakamit × presyo bawat yunit ng outcome)

Tubo ng investor sa social impact bond:
  Puhunan ng investor = paunang kapital na nagpopondo sa paghahatid ng serbisyo
  Bayad sa outcome    = nagbabayad lamang ang commissioner kung outcome ≥ threshold, na nasusukat
                         ayon sa kung gaano kataas sa threshold ang performance
  Tubo ng investor    = natanggap na bayad sa outcome − puhunan ng investor
                         (isang rate of return, madalas may takip, na sumasalamin sa panganib na kinuha)

Mga pangunahing parametro ng disenyo na nagtatakda sa pag-uugali ng buong kontrata:
  Outcome metric        — dapat outcome, hindi output (tingnan ang outcomes-vs-outputs)
  Comparison/counterfactual — karaniwang katugmang cohort (tingnan ang counterfactual-analysis)
  Payment threshold      — pinakamababang pagbuti bago magsimula ang anumang bayad
  Payment curve           — linear, hakbang-hakbang, o may takip sa itaas ng threshold
  Attribution/deadweight discount — tingnan ang additionality-and-deadweight
```

## Halimbawang kalkulasyon

**Peterborough One Service** (mga ilustratibong numerong hango sa mga inilathalang evaluation):

```
Nalikom na kapital ng investor:  £5,000,000
Cohort:                          ~3,000 lalaking bilanggong maikli ang sentensiya sa dalawang cohort
Threshold:                       ≥7.5% na pagbaba sa mga kaganapan ng reconviction kumpara sa katugmang
                                  pambansang comparison group, kung hindi ay walang bayad
Resulta ng Cohort 1:             8.4% na pagbaba — mas mababa sa kontraktwal na hadlang para sa
                                  cohort na iyon lamang sa ilalim ng orihinal na panuntunan
Pinagsama/huling resulta ng cohort: 9.7% na pagbaba — mas mataas sa threshold
Bayad sa outcome:                nagbabayad ang pamahalaan (Ministry of Justice / Big Lottery Fund)
                                  bawat puntos-porsyentong higit sa threshold, na nagpopondo sa
                                  pagbabayad sa investor at sa tubo
```

**Kontrata ng PbR ng lokal na awtoridad (ilustratibo)**: kinomisyon ang serbisyo ng family-intervention sa halagang £4,000 bawat pamilyang na-refer (bayad sa aktibidad) dagdag ang £6,000 bawat pamilyang walang karagdagang referral sa child protection 12 buwan matapos magsara ang kaso (bayad sa outcome). 200 pamilya ang na-refer, 150 kaso ang naisara, 96 ang nananatiling walang referral pagkaraan ng 12 buwan:

```
Bayad sa aktibidad = 200 × £4,000 = £800,000
Bayad sa outcome   = 96 × £6,000  = £576,000
Kabuuang gastos ng kontrata = £1,376,000 para sa 96 kumpirmadong tuloy-tuloy na outcome
Cost per confirmed outcome ≈ £14,333 (tingnan ang cost-per-outcome)
```

## Kaugnayan sa software engineering

Ang payment by results ay problema ng pag-aayos ng mga insentibo bago ito maging problema ng datos, at ang sistema ng datos ang lugar kung saan nananatili o nasisira ang pag-aayos na iyon. Ang malaya at tamper-evident na beripikasyon ng outcome ang buong laro: magkasalungat ang insentibo ng commissioner at provider kung paano ikokodigo ang malabong kaso, kaya ang sistemang nagtatala ng mga outcome ay nangangailangan ng audit trail, kasunduan sa pagbabahagi ng datos sa malayang verifier (madalas na ibang katawan mula sa provider, minsan ay opisyal na katawan ng estadistika na nagtutugma laban sa mga talaan ng pulisya o benepisyo), at hindi nababagong pag-version ng depinisyon ng outcome — ang katumbas sa PbR ng pagkakamaling "pagbabago ng kahulugan ng metric" sa [mga KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/). Ang mga kalkulasyon ng attribution ay nakasalalay sa mga pamamaraang matched-cohort ng [counterfactual-analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/), na nangangailangan ng nauulit at nasusuring code, hindi minsanang spreadsheet. At ang mismong metric ay dapat tunay na outcome, hindi proxy na aktibidad — tingnan ang [outcomes laban sa outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) — dahil ang kontrata ng PbR na nagbabayad para sa output ay nire-relabel lamang ang karaniwang pondo na may dagdag na gastos sa transaksyon. Kapag prospective na minomodelo ang social return ng isang SIB, karaniwang direktang hinihiram ng appraisal na iyon ang metodolohiya ng [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/).

## Mga karaniwang pagkakamali

- **Pagbabayad para sa proxy na outcome na madaling dayain**: ang "pagdalo sa mga session" ay aktibidad na nagbabalatkayong outcome; igiit ang sukat na sumasalamin sa aktuwal na pagbabagong hinahangad (muling pagkakasala, trabaho, katatagan ng pabahay).
- **Walang kapani-paniwalang counterfactual**: kung walang katugmang comparison group, ang pagbuti ay maaaring regression to the mean o mas malawak na takbo, hindi epekto ng programa — tingnan ang [counterfactual-analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) at [additionality-and-deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/).
- **Pagmamaliit sa gastos sa transaksyon at evaluation**: ang independiyenteng beripikasyon, data linkage, at administrasyon ng kontrata para sa mga scheme ng PbR/SIB ay karaniwang umaabot sa double digit na porsyento ng halaga ng kontrata — idinodokumento ng batayan ng ebidensya ng GO Lab ito bilang paulit-ulit na dahilan ng pagtigil ng mga scheme.
- **Cherry-picking o "parking"**: ang mga providerng binabayaran kada outcome ay may direktang insentibong unahin ang mga kliyenteng malamang na magtagumpay na rin naman at isantabi ang pinakamahihirap na kaso — idisenyo ang mga tier ng bayad o case-mix adjustment upang kontrahin ito.

## Mga sanggunian

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
