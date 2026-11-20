# Build vs Buy sa Pamahalaan: Gagawin o Bibilhin?

Ang build-vs-buy ay isang istrukturado at inayos-sa-panganib na paghahambing ng custom na development laban sa komersyal o commodity na pagkuha, na inihahambing batay sa na-discount na [kabuuang gastos ng pagmamay-ari](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/), time-to-value, at panganib. Likas na sektor ng pagbili ang pamahalaan — itinatakda ng Technology Code of Practice ang presumpsyon pabor sa commodity at cloud na solusyon — ngunit ang mga engineering team sa loob ng mga departamento ay nagde-default pa rin sa paggawa, sa parehong mga dahilan ng mga tagabuo saanman.

## Bakit ito mahalaga

Itinutulak ng Technology Code of Practice ng Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) at ng kasamang gabay ng Service Manual sa pagpapasya kung gagawa o bibili ang mga departamento na bigyang-katwiran ang bespoke na development laban sa presumpsyong ang commodity na kakayahan ay dapat bilhin, hindi gawin, at ang tunay na bago at nagpapaiba sa misyon na kakayahan lamang ang nagbibigay-katwiran sa custom na code. Ang supplementary guidance sa optimism bias ng HM Treasury sa Green Book, hango sa 2002 na pagsusuri ng Mott MacDonald sa malalaking pampublikong procurement, ay nagbibigay sa mga proyektong IT ng pinakamalawak na saklaw ng uplift sa lahat ng kategoryang sinuri — mga pagtatantya ng capital cost na inirerekomendang dagdagan ng 10% sa mababang dulo at hanggang 200% sa mataas na dulo bago gamitin sa appraisal, na sumasalamin kung gaano kalala ang kasaysayang kakulangan ng pagtatantya sa mga software build sa pampublikong procurement. Umiiral ang pagsusuring build-vs-buy upang pilitin ang pagsasaayos sa panganib na iyon na mailagay sa mesa bago ang pag-apruba, sa halip na lumitaw ito bilang hiling na dagdag na pondo sa kalagitnaan ng taon.

## Ang matematika

```
Ihambing sa iisang 3–5 taong horizon, na na-discount sa social
discount rate ng Green Book (tingnan ang social-discount-rate.md):

NPV_option = PV(mga benepisyo, inilipat ayon sa time-to-value) − PV(TCO)

Mga pagsasaayos sa panganib (padron ng optimism bias ng Green Book):
  gastos sa build × 1.1–3.0        (saklaw ng uplift sa proyektong IT, Mott MacDonald)
  time-to-value ng build + 40–60% (naunang kaalaman sa pagkaantala ng deployment)
  buy: magdagdag ng reality-check sa integrasyon at gastos sa paglabas sa kontrata

Mga tagapagpasya, sa karaniwang pagkakasunod-sunod ng bigat:
  1. pagkakaiba — ang kakayahan bang ito ang misyon, o tubo lamang?
  2. time-to-value × cost of delay (tingnan ang cost-of-delay-in-public-programmes.md)
  3. kabuuang gastos ng pagmamay-ari na inayos sa panganib
```

## Halimbawang kalkulasyon

Kailangan ng isang lokal na awtoridad ng case-management system para sa adult social care. Buy: SaaS sa £180,000/taon, live sa loob ng 4 na buwan. Build: tinatayang £900,000 dagdag £150,000/taon na maintenance, live sa loob ng 14 na buwan.

```
Gastos sa build na inayos sa panganib = 900,000 × 1.4 = £1,260,000
5-taong TCO:
  buy  = 180,000 × 5 = £900,000
  build = 1,260,000 + 150,000 × 5 = £2,010,000

Termino ng pagkaantala: iniiwasan ng sistema ang £40,000/buwan sa dobleng assessment;
mas huling dumating ang build nang 10 buwan kaysa buy.
CoD = 10 × 40,000 = £400,000

Epektibong paghahambing: £900,000 (buy) kumpara sa £2,010,000 + £400,000 = £2,410,000 (build)
```

Nananalo ang buy nang humigit-kumulang £1.5 milyon sa loob ng limang taon, at ang pinakamalaking solong linya pagkatapos ng mismong pagtatantya ng build ay ang gastos sa pagkaantala na hindi sana lumitaw sa purong paghahambing ng capex.

## Kaugnayan sa software engineering

Ang mga disiplinang direktang naililipat mula sa pagsusuring ito tungo sa delivery practice: **pagsasaayos sa panganib batay sa prior** — ang uplift ng Mott MacDonald ay katumbas sa software ng optimism bias ng Green Book na mekanikal na inilalapat, kaya dapat ipaglaban ng mga team ang mga eksepsyon dito sa halip na ipalagay na ang kanilang pagtatantya ang eksepsyon; **katapatan sa comparator** — ang alternatibo sa paggawa ay ang pinakamahusay na magagamit na opsyon sa pagbili, hindi "wala", na direktang kaugnay ng [opportunity cost sa paggastos ng pamahalaan](../opportunity-cost-sa-paggastos-ng-pamahalaan-ang-halaga-ng-pinakamahusay-na-alternatibong-isinuko/); at **tapat na paghahambing ng TCO** — bawat panukala ng build ay dapat ihambing sa buong [kabuuang gastos ng pagmamay-ari](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/) ng opsyon sa pagbili, hindi sa list price nito. Kapag tunay na nananalo ang build, dapat tahasang ipresyo sa business case ang [cost of delay](../cost-of-delay-sa-mga-programang-pampubliko/) ng dagdag na oras ng paggawa, hindi iwanang hindi nabanggit na palagay na hindi mahalaga ang oras.

## Mga karaniwang pagkakamali

- **Paghahambing ng list price ng vendor sa hindi inayos-sa-panganib na pagtatantya ng build**: dalawang beses nitong pinapaboran ang build, minsan sa gastos at minsan sa iskedyul.
- **Zero na presyo sa lakas-paggawa sa loob**: itinuturing na "libre" ang oras ng mga engineer ng civil service dahil nasa badyet na ito ng headcount ng departamento, na nagtatago ng tunay nitong opportunity cost laban sa ibang gawaing maaaring gawin ng team.
- **Hindi napresyuhang lock-in sa dalawang direksyon**: totoo ang gastos sa paglabas sa vendor at data portability, ngunit totoo rin ang bus-factor ng bespoke na build at ang pagdepende nito sa pagpapanatili ng maliit at mahirap palitang in-house na team sa buong buhay nito.
- **Pag-aangking nagpapaiba sa misyon ang tubo**: "ito ay pangunahin sa amin" na iginigiit tungkol sa integration middleware o document store — subukin ito kung mapapansin ba ng isang mamamayan o caseworker kung alin ang tumatakbo sa ilalim.

## Mga sanggunian

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
