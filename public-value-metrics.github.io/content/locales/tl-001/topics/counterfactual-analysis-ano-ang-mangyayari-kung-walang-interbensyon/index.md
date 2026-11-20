# Counterfactual Analysis: Ano ang Mangyayari Kung Walang Interbensyon

Ang counterfactual ay pagtatantya ng kung ano ang mangyayari kung wala ang isang interbensyon. Kung wala nito, ang naobserbahang pagbabago pagkatapos ilunsad ang isang programa ay hindi mapaghihiwalay sa pagbabagong mangyayari pa rin — walang counterfactual, walang ebidensiya ng epekto, gaano man kakumbinsi ang mga bilang bago-at-pagkatapos. Itinuturing ng Magenta Book ng HM Treasury ang pagbuo ng mapagkakatiwalaang counterfactual bilang pangunahing gawaing metodolohikal ng impact evaluation, mas mahalaga kaysa sa anumang iba pang solong pagpili sa disenyo.

## Bakit ito mahalaga

Ang "Bumaba ng 15% ang krimen sa taon pagkatapos naming ipakilala ang programa" ay hindi ebidensiyang gumana ang programa maliban kung alam mo ang mangyayari sa krimen kung wala ito — maaaring bumaba pa rin ang krimen nang 20% dahil sa walang kaugnayang ekonomiko o demograpikong takbo, ibig sabihin ay aktwal na pinalala ng programa ang sitwasyon kumpara sa counterfactual, sa kabila ng pagbuti ng hilaw na bilang. Ito ang pinakakaraniwang analitikal na pagkakamali sa mga pahayag ng epekto sa pampublikong sektor at sektor ng lipunan: ang pagkalito sa paghahambing na bago/pagkatapos bilang ebidensiya ng sanhi. Tahasan ang Magenta Book na umiiral ang impact evaluation upang sagutin ang counterfactual na tanong — "ano ang pagkakaibang nilikha ng interbensyong ito?" — at na ang pagsagot dito ay nangangailangan ng pagtatantya, hindi lamang paglalarawan, sa mundong hindi nangyari.

Iba't ibang pamamaraan ang bumubuo ng counterfactual na may iba't ibang antas ng kumpiyansa, at ni-rank ang mga ito ng gabay sa ebalwasyon ng pamahalaan nang naaayon. Ang mga randomized controlled trial (RCT), kung saan random na itinatalaga ang mga indibidwal o lugar na tatanggap o hindi tatanggap ng interbensyon, ang nagbubunga ng pinakamatibay na counterfactual dahil tinitiyak ng randomization na ang treatment at control group ay nagkakaiba, sa average, sa pagtanggap lamang ng interbensyon. Itinaguyod ng Cabinet Office at ng What Works Network ang mga RCT sa buong patakarang pampubliko ng UK mula sa ulat na "Test, Learn, Adapt" ng Behavioural Insights Team noong 2012, dahil mismo bulnerable sa confounding ang mga mas mahinang disenyo — maaaring sumasalamin ang naobserbahang pagkakaiba sa kung sino ang pumiling lumahok, hindi sa epekto ng programa. Kung hindi praktikal o hindi etikal ang randomization (gaya ng madalas sa mga programang may statutory entitlement, o sa mga pagbabago ng patakaran para sa buong populasyon), naglalatag ang Magenta Book ng tahasang hirarkiya ng mas mahina ngunit kapaki-pakinabang pa ring alternatibo: matched comparison group, disenyong difference-in-differences, regression discontinuity sa paligid ng mga threshold ng eligibility, at, bilang huling opsyon, payak na paghahambing na bago/pagkatapos — malinaw na minarkahan bilang pinakamahinang anyo ng ebidensiya, madaling malito ang epekto ng programa sa epekto ng lahat ng iba pang nagbago nang sabay.

## Ang matematika

Ang balangkas ng counterfactual, na angkop sa lahat ng pamamaraan:

```
Tinatayang epekto = Outcome(may interbensyon) − Outcome(counterfactual: walang interbensyon)

HINDI:
Tinatayang epekto ≠ Outcome(pagkatapos) − Outcome(bago)   [pinag-uugnay ang oras at treatment]
```

Ang difference-in-differences, isa sa pinakakaraniwang quasi-experimental na disenyo sa ebalwasyon ng pamahalaan, ay naihihiwalay ang epekto ng treatment sa pamamagitan ng pagbabawas ng sariling pagbabagong bago/pagkatapos ng comparison group:

```
DiD na pagtatantya = [Outcome(ginamot, pagkatapos) − Outcome(ginamot, bago)]
                   − [Outcome(comparison, pagkatapos) − Outcome(comparison, bago)]
```

Inaalis nito ang anumang takbong karaniwan sa dalawang grupo (hal. pambansang pagbabagong pang-ekonomiya na nakaaapekto sa lahat), at iniiwan lamang ang pagkakaibang pagbabagong maiuugnay sa interbensyon.

## Halimbawang kalkulasyon

**Programa sa empleyo, bago/pagkatapos (mahinang disenyo)**: iniuulat ng isang job-support scheme na tumaas ang empleyo ng mga kalahok mula 40% tungong 55% sa loob ng isang taon — walang-muwang na konklusyong "+15 percentage point dahil sa programa."

**Parehong programa, difference-in-differences (mas matibay na disenyo)**: ang matched comparison group ng magkakahawig na hindi kalahok, mula sa parehong lokal na labor market, ay nagpapakitang tumaas ang empleyo mula 38% tungong 47% sa parehong taon (may umuusbong na pambansang pagbawi ng ekonomiya).

```
Pagbabago ng ginamot na grupo:    55% − 40% = +15 percentage point
Pagbabago ng comparison group:    47% − 38% = +9 percentage point

DiD na pagtatantya (tunay na epekto ng programa) = 15 − 9 = +6 percentage point
```

Ang tapat na maiuugnay na epekto ay 6 percentage point, hindi 15 — higit sa kalahati ng lumilitaw na pagbuting bago/pagkatapos ay mangyayari pa rin kahit walang programa, dulot ng parehong pagbawi ng ekonomiya na nagpataas sa comparison group.

**Regression discontinuity, threshold ng eligibility**: ang isang grant scheme ay magagamit lamang sa mga negosyong may mas kaunti sa 50 empleyado. Ang paghahambing ng mga outcome ng mga negosyong nasa ibaba lamang ng threshold (45–49 empleyado, kwalipikado) laban sa mga nasa itaas lamang nito (50–54 empleyado, hindi kwalipikado) ay nagbibigay ng mapagkakatiwalaang counterfactual dahil magkahawig naman ang mga negosyo sa magkabilang panig ng arbitraryong administratibong cut-off — ang threshold, hindi anumang pinagbabatayang katangian ng negosyo, ang nagtatakda ng eligibility. Ang £2,000 na average na pagkakaiba ng outcome sa pagitan ng dalawang grupo, na naobserbahan sa threshold lamang, ay maiuugnay sa grant nang mas may kumpiyansa kaysa sa payak na paghahambing ng lahat ng kwalipikado laban sa lahat ng hindi kwalipikadong negosyo (na sistematikong magkaiba sa laki).

## Kaugnayan sa software engineering

Dapat hubugin ng counterfactual na pag-iisip kung paano dinidisenyo ang mga sistema ng pagsubaybay sa epekto at mga pipeline ng ebalwasyon para sa software ng pamahalaan at sektor ng lipunan:

- Isama ang pagkuha ng comparison group sa sistema mula pa sa simula — pagtatala kung sino ang kwalipikado ngunit hindi na-enroll, o matched na cohort ng mga hindi kalahok — sa halip na idagdag ito pagkatapos nang tumakbo ang programa at bago/pagkatapos na datos na lamang ang umiiral.
- Kung posible ang randomization (phased na rollout, digital na serbisyong pinagana para sa ilang user bago ang iba), i-instrument ang sistema upang mapanatili ang random na assignment bilang field na maaaring i-query; sinisira mismo ng phased na rollout ang halaga nito sa ebalwasyon kung hindi nilo-log ang pagkakasunod-sunod ng assignment.
- Ito ang pundamental na pamamaraan sa likod ng [mga pamamaraan ng impact evaluation](../mga-pamamaraan-sa-impact-evaluation-rct-difference-in-differences-matching-at-regression-discontinuity/) at ito ang naghihiwalay dito sa [impact evaluation kumpara sa process evaluation](../impact-evaluation-at-process-evaluation-pagkakaiba-ng-pagsusuri-sa-epekto-at-sa-paghahatid/), na ang huli ay nagtatanong kung naihatid ba ang programa ayon sa layunin sa halip na kung nagdulot ba ito ng epekto.
- Ang [additionality at deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/) at [displacement at attribution](../displacement-at-attribution-paglilipat-ng-benepisyo-at-pag-aangkin-ng-kredito-sa-resulta/) ay parehong, sa ugat, mga counterfactual na tanong — ang deadweight ay "ano ang magiging partikular na outcome na ito kung walang interbensyon", na inilalapat sa antas ng pagsasaayos sa halip na buong disenyo ng ebalwasyon.

## Mga karaniwang pagkakamali

- **Pagturing sa bago/pagkatapos bilang ebidensiya ng sanhi.** Ito ang pinakakaraniwan at pinakamabigat ang bungang pagkakamali sa pag-uulat ng epekto sa pampubliko at panlipunang sektor; ang pagbabagong bago/pagkatapos ay nagpapahalo sa epekto ng programa at sa lahat ng iba pang nagbago sa parehong panahon.
- **Paggamit ng comparison group na sistematikong naiiba sa ginamot na grupo.** Ang matched comparison group ay dapat tunay na magkahawig sa mga kaugnay na katangian (tingnan ang hirarkiya ng pamamaraan ng [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) sa Magenta Book); ang paghahambing ng mga kalahok sa programa (na pumili at madalas mas motibado) laban sa mga hindi kalahok (na hindi pumili) ay nanganganib na magpanggap na epekto ng programa ang selection bias.
- **Pagsira sa mga pagkakataon ng randomization dahil sa mahinang disenyo ng paghahatid.** Napapanatili lamang ng phased o randomized na rollout ang halaga nito sa ebalwasyon kung tunay na random at nakatala ang assignment — ang pagpapapili sa mga lokal na manager kung sino ang mauuna ay sumisira sa layunin.
- **Labis na pag-aangkin ng katumpakan mula sa mahinang disenyo.** Dapat iharap ang pagtatantyang bago/pagkatapos bilang indikatibo, hindi bilang nasukat na laki ng epekto; umiiral ang hirarkiya ng ebidensiya ng Magenta Book upang tumugma ang lakas ng pahayag sa lakas ng disenyong lumikha nito.

## Mga sanggunian

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (karaniwang sanggunian para sa mga pamamaraang difference-in-differences at regression
  discontinuity).
