# Additionality at Deadweight: Ano ang Tunay na Naidagdag ng Programa

Itinatanong ng additionality kung ang isang interbensyon ba ang naging sanhi ng isang kinalabasan (outcome) na hindi sana nangyari kung wala ito. Ang deadweight ang kabaligtaran nito: ang bahagi ng kinalabasan na mangyayari pa rin kahit walang programa, grant, o subsidy. Halos bawat pahayag ng epekto mula sa isang programa ng pamahalaan o charity ay nagpapalaki ng bisa nito hangga't hindi pa binabawas ang deadweight, kaya itinuturing ito ng gabay sa ebalwasyon ng UK bilang una at pinakamahalagang pagsasaayos sa anumang headline na bilang.

## Bakit ito mahalaga

Ang "Tinulungan namin ang 500 negosyo na lumago" ay mukhang tagumpay, ngunit kung 300 sa mga negosyong iyon ay lalago pa rin naman — dahil bumabawi ang lokal na ekonomiya, dahil may iba silang mapagkukunan ng pondo, o dahil nasa landas na sila ng paglago bago pa magsimula ang programa — ang tunay na karagdagang kontribusyon ng programa ay 200, hindi 500. Ang Magenta Book ng HM Treasury at ang matagal nang "Additionality Guide" ng HM Treasury/BIS (orihinal na binuo para sa mga programa sa rehiyonal na pag-unlad at pagpapasigla ng mga lugar, at malawakang ginagamit sa ebalwasyon ng pamahalaan ng UK mula noon) ay nagtatakda sa deadweight bilang panimulang pagsasaayos sa karaniwang pagkakasunod-sunod ng net impact: gross na epekto, bawas ang deadweight, bawas ang displacement, bawas ang leakage, isaayos para sa multiplier effect, katumbas ng net additional impact. Ang pagpapabaya sa hakbang na ito ang pinakakaraniwang paraan kung paano napapalobo ang mga pahayag ng epekto sa pampublikong sektor at sektor ng lipunan, sinadya man o hindi — ang programang grant na gross na kinalabasan ng mga kalahok lamang ang sinusukat, at walang comparison group, ay hindi makapaghihiwalay sa sarili nitong epekto mula sa kung ano ang mangyayari pa rin.

Ang deadweight ay hindi nakapirming porsiyento; nakadepende ito nang buo sa counterfactual para sa partikular na populasyon at interbensyon (tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/)). Ang mga ebalwasyon ng rehiyonal na pag-unlad sa England sa ilalim ng dating Regional Development Agencies ay karaniwang nakatagpo ng mga antas ng deadweight na nasa 20–60% depende sa uri ng suporta sa negosyo, kaya ang mapagkakatiwalaang ebalwasyon ng programa ay nag-uulat ng saklaw na inayos para sa deadweight sa halip na iisang ipinapalagay na bilang, at kaya hinihiling ng mga tagapondo gaya ng National Lottery Community Fund at Big Society Capital sa mga tumatanggap ng grant na tahasang harapin ang deadweight sa pag-uulat ng outcome sa halip na mag-ulat ng gross na bilang ng mga kalahok.

## Ang matematika

Ang karaniwang pagkakasunod-sunod ng pagsasaayos para sa net impact, ayon sa gabay sa ebalwasyon ng UK (Magenta Book; HM Treasury/BIS Additionality Guide; gabay sa ebalwasyon ng ESIF at structural funds):

```
Gross na kinalabasan
  − Deadweight       (ang mangyayari pa rin)
  − Displacement     (aktibidad/benepisyong inilipat mula sa ibang lugar, hindi nilikha — tingnan ang
                       displacement-and-attribution)
  − Leakage          (benepisyong napupunta sa labas ng target na grupo/lugar)
  × Multiplier        (karagdagang di-tuwiran/induced na aktibidad pang-ekonomiya, kung positibo)
  = Net additional impact
```

Antas ng deadweight bilang proporsiyon:

```
Antas ng deadweight = mga kinalabasang mangyayari kahit walang interbensyon
                       / kabuuang gross na kinalabasang naobserbahan

Net additional na kinalabasan = Gross na kinalabasan × (1 − Antas ng deadweight)
```

## Halimbawang kalkulasyon

**Programang grant para sa suporta sa negosyo**: iniulat ng isang rehiyonal na scheme ng grant na 500 sinuportahang negosyo ang nagdagdag ng empleyo sa sumunod na taon, average na 3 trabaho bawat isa — gross na pahayag na 1,500 trabaho.

Ipinapakita ng isang matched comparison group ng magkakahawig na negosyong hindi sinuportahan (tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/)) na 40% ng paglago ng empleyo ng mga sinuportahang negosyo ay mangyayari pa rin, batay sa naging takbo ng matched group sa parehong panahon.

```
Antas ng deadweight = 40%
Net additional na trabaho = 1,500 × (1 − 0.40) = 900 trabaho
```

Ang tapat na maiuulat na tagumpay ng programa ay 900 trabaho, hindi 1,500 — 40% na pagbawas mula sa pagsasaayos para sa deadweight lamang, bago pa isaalang-alang ang displacement o leakage.

**Programa ng charity para sa empleyo**: naglagay ang isang charity ng 200 matagal nang walang trabaho sa mga trabaho sa halagang £600,000 (£3,000 bawat placement, gross). Ipinapakita ng pambansang datos ng labor market na, kung walang anumang interbensyon, humigit-kumulang 15% ng katulad na cohort ng matagal nang walang trabaho ay makakahanap ng trabaho sa parehong panahon dahil sa natural na pag-ikot ng job market.

```
Antas ng deadweight = 15%
Net additional na placement = 200 × (1 − 0.15) = 170
Tunay na gastos bawat karagdagang placement = £600,000 / 170 ≈ £3,529
```

Ang gross na gastos bawat placement (£3,000) ay nagpapababa ng tunay na gastos ng karagdagang kontribusyon ng charity nang humigit-kumulang 15%.

## Kaugnayan sa software engineering

Direktang mahalaga ang additionality at deadweight sa sinumang gumagawa ng software para sa pagsukat ng epekto o pamamahala ng grant sa pampubliko o panlipunang sektor:

- Dapat sa disenyo pa lamang ay kumukuha na ang mga sistema ng pag-uulat ng outcome ng comparison o baseline group, hindi lamang ng kinalabasan ng mga kalahok — mas mahirap nang magdagdag ng counterfactual matapos ilunsad ang sistemang wala nito kaysa isama ito mula sa simula (tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/)).
- Ang mga dashboard na gross na bilang ng kalahok lamang ang iniuulat ay sistematikong magpapalaki ng epekto sa harap ng mga tagapondo at mga katawan ng pangangasiwa; kung may mga pagtatantya ng deadweight (mula sa panitikan ng ebalwasyon o isang comparison group), dapat ipakita ng software ang bilang na bawas na ang deadweight kasabay ng gross na bilang, hindi bilang kapalit nito.
- Direktang konektado ito sa [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/), na ang SROI ratio ay mapagkakatiwalaan lamang kapag nabawasan na ang deadweight (at displacement) mula sa gross na inaangking kinalabasan — ang SROI calculator na lumalaktaw sa hakbang na ito ay magbubunga ng pinalobong ratio na hindi tatagal sa masusing pagsusuri.

## Mga karaniwang pagkakamali

- **Pag-uulat ng gross na kinalabasan na parang lahat ay karagdagan.** Ito ang pinakakaraniwang pagkakamali sa pagsukat ng epekto sa pag-uulat ng grant at programa; laging itanong ang "mangyayari ba ito kahit wala kami?" bago maglathala ng headline na bilang.
- **Pag-aakalang iisang porsiyento ng deadweight ang angkop sa lahat ng lugar.** Malaki ang pagkakaiba ng deadweight ayon sa sektor, populasyon, at lokal na kalagayang pang-ekonomiya; gumamit ng comparison group o ebidensiyang partikular sa sektor sa halip na muling gamitin ang bilang mula sa walang kaugnayang ebalwasyon.
- **Paghahalo ng deadweight at displacement.** Ang deadweight ay tungkol sa mga counterfactual na kinalabasan para sa parehong mga kalahok; ang displacement ay tungkol sa epekto sa ibang tao o lugar — tingnan ang [displacement at attribution](../displacement-at-attribution-paglilipat-ng-benepisyo-at-pag-aangkin-ng-kredito-sa-resulta/). Ang paghahalo sa dalawa ay humahantong sa dobleng pagbibilang o kulang na pagbibilang ng pagsasaayos.
- **Deadweight na iniulat mismo ng mga kalahok.** Ang pagtatanong sa mga benepisyaryo ng "mangyayari ba ito kahit wala ang tulong namin?" ay sistematikong nagbubunga ng mababang pagtatantya ng deadweight (may hilig ang mga kalahok na iukol ang tagumpay sa programa); mas mapagkakatiwalaan ang isang independiyenteng comparison group.

## Mga sanggunian

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  gabay sa deadweight, displacement, at leakage sa ebalwasyon ng structural funds.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
