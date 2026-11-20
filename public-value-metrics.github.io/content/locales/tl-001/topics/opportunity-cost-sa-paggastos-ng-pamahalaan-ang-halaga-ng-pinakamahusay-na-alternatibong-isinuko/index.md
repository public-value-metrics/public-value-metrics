# Opportunity cost sa paggastos ng pamahalaan: ang halaga ng pinakamahusay na alternatibong isinuko

Ang opportunity cost ay ang halaga ng pinakamahusay na alternatibong isinuko kapag ipinangako ng isang pampublikong katawan ang pera, oras ng kawani, o kapital na pampulitika sa isang opsyon sa halip na sa iba. Sa isang departamentong may takdang badyet, ang bawat pound na ginastos sa isang programa ay pound na hindi na magagastos sa susunod na pinakamahusay na programa — ang tunay na gastos ng isang desisyon ay hindi ang ginagastos nito, kundi ang inililipat o inaalis nito.

## Bakit ito mahalaga

May hangganang salapi ang mga pampublikong badyet sa loob ng isang panahon ng spending review, kaya — hindi tulad ng lumalagong pribadong kompanya — hindi basta "makahahanap ng dagdag na pera" ang isang departamento ng pamahalaan para sa mahusay na ideya; ang pagpopondo rito ay nangangahulugang pag-alis ng pondo sa iba. Itinuturing ng Green Book ng HM Treasury na pundasyon ito: kinakailangang ihambing ang bawat appraisal ng isang interbensyon sa baseline na "do minimum" *at* sa makatotohanang alternatibong gamit ng parehong resource, dahil ang tunay na tanong ng spending team ng Treasury ay hindi kailanman "mabuti ba ito?" kundi "mas mabuti ba ito kaysa sa iba pang mabibili ng perang ito?" Ang pangunahing prinsipyo ng appraisal ng Green Book — na dapat dumaloy ang mga pampublikong resource sa interbensyong may pinakamataas na net social value bawat pound — ay opportunity cost na isinaad bilang patakaran.

Madaling sabihin ngunit mahirap ilapat ito dahil bihirang makita sa iisang business case ang "susunod na pinakamahusay na alternatibo." Ang £2 milyong programa ng grant para sa trabaho ng kabataan ay inihahambing, sa business case, sa walang gagawin — ngunit ang tapat na katapat ay ang susunod na pinakamahusay na interbensyon sa trabaho ng kabataan, o maging ang susunod na pinakamahusay na gamit ng £2 milyon saanman sa portfolio, kabilang ang paggastos na hindi tungkol sa trabaho. Tahasang nagbababala ang Magenta Book (HM Treasury, 2020) na ang mga evaluation na naghahambing ng "may interbensyon" sa "walang interbensyon" ay minamaliit ang antas na dapat lampasan ng interbensyon, dahil ang "walang interbensyong ito" ay hindi katumbas ng "walang anuman" — ang perang napalaya ay nagpopondo ng iba.

## Ang matematika

```
Opportunity cost ng pagpili sa A = halaga ng pinakamahusay na isinukong alternatibo B

Net public value ng A = value(A) − value(B), hindi value(A) − 0
```

Walang pangkalahatang pormula dahil nakadepende sa konteksto ang isinukong alternatibo, ngunit nagagamit ang disiplina sa lahat ng kaso: tukuyin ang makatotohanang susunod na pinakamahusay na gamit ng parehong linya ng badyet (hindi ang ideyal na "walang gagawin"), pahalagahan ito sa parehong batayan (gawing pera hangga't maaari, ayon sa [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/)), at ibawas.

## Halimbawang kalkulasyon

**Linya ng badyet ng departamento**: ang £5 milyong pondo sa digital transformation ay kayang magpondo ng eksaktong isa sa dalawang panukala ngayong taon ng pananalapi.

- *Opsyon A*: bagong case-management platform, may naka-monetize na benepisyong £7.2 milyon sa loob ng 5 taon (tipid sa kahusayan at mas mabilis na paglutas ng kaso).
- *Opsyon B*: serbisyo sa identity-verification na pinagsasaluhan ng tatlong departamento, may naka-monetize na benepisyong £6.4 milyon sa loob ng 5 taon.

Ang naïve na business case para sa A ay naghahambing ng £7.2 milyong benepisyo sa £5 milyong gastos at nag-uulat ng benefit-cost ratio na 1.44:1 — tila malakas. Ngunit dahil nagpapaligsahan ang A at B para sa parehong £5 milyon, ang opportunity cost ng pagpili sa A ay ang £6.4 milyong benepisyo ng B na naisuko. Ang *net* na kaso para sa A kumpara sa makatotohanang alternatibo ay £7.2m − £6.4m = £0.8 milyon lamang, hindi ang buong £7.2 milyong headline. Kung may ikatlong opsyon, C, na nag-aalok ng £7.5 milyong benepisyo para sa parehong £5 milyon, ang pagpopondo sa A kaysa sa C ay sisira ng £0.3 milyong pampublikong halaga kahit mukhang ganap na makatwiran ang sariling business case ng A kapag mag-isa itong tiningnan.

**Oras ng kawani ng lokal na awtoridad**: ang tatlong-taong data team ng isang konseho ay maaaring bumuo ng alinman sa dashboard ng waitlist sa pabahay (tinatayang makakatipid ng 400 oras-ng-opisyal/taon, na pinahahalagahan sa £28/oras = £11,200/taon) o triage tool para sa panloloko sa benepisyo (tinatayang makakapigil ng £85,000/taon sa maling bayad). Ang pagbuo ng dashboard ay may opportunity cost na £85,000/taon na isinuko, hindi lamang ang gastos sa sahod ng data team — ang tunay na gastos ng "libreng" panloob na pagbuo ay ang mas malaking benepisyong maaari sanang nalikha ng team sa ibang lugar.

## Kaugnayan sa software engineering

Ang kapasidad sa engineering sa loob ng isang pampublikong katawan ay isa ring limitadong badyet — kapasidad ng sprint, hindi pound — at direktang nalalapat ang parehong disiplina:

- Laging pangalanan ang katapat na ihahambing: dapat sabihin ng business case ng isang feature kung ano pa ang maihahatid ng parehong team-linggo, hindi lamang ang sarili nitong balik.
- Ituring ang "may sobrang kapasidad kami sa engineering" bilang simula ng pagsusuri ng opportunity cost, hindi ang wakas — may pinakamahusay pa ring alternatibong gamit ang sobrang kapasidad, kahit pagbabayad-utang sa technical debt iyon (tingnan ang [technical debt bilang pagkaubos ng public value](../technical-debt-bilang-pagkaubos-ng-public-value-sa-it-ng-pamahalaan/)).
- Iugnay ito nang direkta sa [value for money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/): walang saysay ang pagsubok na "economy" ng VFM kung walang tapat na katapat sa opportunity cost, at sa [cost of delay sa mga pampublikong programa](../cost-of-delay-sa-mga-programang-pampubliko/), na nagpepresyo ng dimensyon ng oras ng parehong lohika ng isinukong alternatibo.

## Mga karaniwang pagkakamali

- **Paghahambing sa "walang gagawin" sa halip na sa susunod na pinakamahusay na alternatibo.** Kinakailangan ng Green Book ang baseline na "do minimum" dahil bihirang sero ang tunay na opportunity cost; ang business case na lumalampas lamang sa pamantayang "walang gagawin" ay hindi pa nagpapakitang nakahihigit ito sa makatotohanang alternatibo.
- **Pagbalewala sa kumpetisyon sa pagitan ng mga departamento para sa parehong pondo.** Ang mga linya ng badyet na mukhang nakalaan sa isang direktoryo ay madalas na nagpapaligsahan sa mas mataas na antas (spending review, capital programme) kung saan nagaganap ang tunay na opportunity cost.
- **Pag-aakalang walang karagdagang halaga ang oras ng kawaning napalaya.** Lumilikha lamang ng halaga ang "natipid" na oras kung ililipat ito sa isang mahalagang gawain; kung walang alternatibong gamit, haka-haka lamang ang pagtitipid.

## Mga sanggunian

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — ang kanonikal na empirikal na patunay ng opportunity cost bilang mahigpit na limitasyon sa takdang pampublikong badyet. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
