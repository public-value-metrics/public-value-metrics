# Total cost of ownership sa IT ng pamahalaan: ang buong gastos sa buong buhay ng sistema

Ang total cost of ownership ay ang buong gastos ng sistema sa buong lifecycle nito — ang pagbili kasama ang bawat taon ng pagpapatakbo — na dini-discount sa iisang petsa. Sa IT ng pamahalaan, ang pinakamapagkakatiwalaang pagkakamali sa forecasting ay ang paghahambing ng mga supplier o opsyon sa presyo lang ng pagbili, gayong ang operasyon at maintenance ay karaniwang bumubuo ng kalahati hanggang apat-na-ikalimang bahagi ng buong singil sa buong buhay.

## Bakit ito mahalaga

Hinihingi ng Green Book ng HM Treasury na saklawin ng financial case sa anumang business case na Five Case Model ang whole-life costs, hindi lang capital expenditure — ngunit paulit-ulit na natuklasan ng National Audit Office na inaaprubahan ng mga departamento ang mga pamumuhunan sa IT laban sa hindi kumpleto o labis-na-optimistikong forecast ng running cost, at saka lamang matutuklasan ang tunay na gastos sa operasyon kapag live na ang sistema at sarado na ang linya ng capital budget. Itinutulak ng Technology Code of Practice ng Government Digital Service at Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) ang mga departamento tungo sa cloud at commodity hosting, bahagyang dahil nagiging nakikita at maihahambing ang patuloy na gastos, sa halip na nakabaon sa iisang bilang ng capital procurement na kaakit-akit na mababa sa pag-apruba at mahal na mali pagkaraan ng tatlong taon.

## Ang matematika

```
TCO = Gastos ng pagbili + Σ(t=1..N) Taunang gastos sa operasyon_t / (1+r)^t
      − residual value (na-discount)

r = pamantayang social discount rate ng Green Book ng HM Treasury, 3.5%/taon
    (bumababang iskedyul ng rate para sa horizon na lampas sa 30 taon)

Mga bahagi ng gastos sa operasyon: hosting/licensing, suporta at maintenance,
security patching at compliance, oras ng staff, planadong refresh/migration
```

Tingnan ang [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/) para sa dahilan kung bakit mahalaga ang discount factor sa karaniwang 5–10 taong buhay ng sistema, at ang [build vs buy sa pamahalaan](../build-vs-buy-sa-pamahalaan-gagawin-o-bibilhin/) para sa kung paano pumapasok ang TCO sa desisyong build/buy.

## Halimbawang kalkulasyon

Ikinukumpara ng isang departamento ang dalawang case-management system sa 5-taong horizon sa 3.5% na discount rate ng Green Book.

```
Sistema A: capex £3,500,000, opex £250,000/taon
Sistema B: capex £1,800,000 (mukhang mas mura), opex £650,000/taon
          (mas mabigat na suporta ng vendor at pasanin sa integrasyon)

Walang-ingat na paghahambing sa capex lamang: panalo ang B, £1.8M < £3.5M.

Kabuuan ng discount factor, 5 taon sa 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

Binabaligtad ng TCO ang walang-ingat na desisyon: bahagyang mas mahal ang Sistema B sa loob ng limang taon kapag na-discount at naipon ang gastos sa operasyon, dahil 62% ng buhay-na-gastos nito ang opex (2,934,750 / 4,734,750) laban sa 24% ng Sistema A — konkretong halimbawa ng natuklasang "maintenance ang karamihan ng singil", na ganap na natatago kapag sticker price lang ang pinaghahambing.

## Kaugnayan sa software engineering

Ang TCO ang bilang na dapat magdisiplina sa bawat desisyong [build vs buy](../build-vs-buy-sa-pamahalaan-gagawin-o-bibilhin/) at bawat kaso ng pagbabayad ng [technical debt](../technical-debt-bilang-pagkaubos-ng-public-value-sa-it-ng-pamahalaan/), dahil ang interest ng utang at ipinagpaliban na maintenance ay parehong linya ng gastos sa operasyon na nabibilang sa iisang na-discount na kabuuan, nasusubaybayan man ito ng sinuman o hindi. Dapat ihain ng mga engineer na nagmumungkahi ng platform o pagpili ng vendor ang buong TCO table, hindi ang presyo ng procurement, dahil ang presyo ng procurement mismo ang bilang na binuo ang financial case ng Green Book upang pigilan ang mga departamento sa pag-asa rito nang mag-isa. Ang TCO rin ang tapat na denominator para sa mga pasya sa [value for money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/) — ikinukumpara ng VFM ang benepisyo sa gastos, at ang kulang-na-nabilang na linya ng gastos ay nagpapalobo sa bawat VFM ratio sa business case.

## Mga karaniwang pagkakamali

- **Paghahambing sa capex lamang**: ang pinakakaraniwang pagkakamali sa procurement — paghahambing ng list price ng mga supplier nang walang katapat na forecast ng gastos sa operasyon para sa bawat opsyon.
- **Pagbubukod sa exit at migration costs**: ang pagkuha ng data sa pagtatapos ng kontrata, re-platforming, at parusa ng vendor lock-in ay totoong linya ng TCO na bihirang lumitaw sa orihinal na business case.
- **Pagbubukod sa gastos sa seguridad at compliance**: lumalaki ang bilis ng pag-patch, pag-renew ng accreditation, at gastos sa audit habang tumatanda at kumplikado ang sistema — tingnan ang [halaga ng cybersecurity sa pampublikong sektor](../halaga-ng-cybersecurity-sa-pampublikong-sektor-pagpepresyo-sa-pagbabawas-ng-panganib/) — at karaniwang naiiwan sa forecast ng opex.
- **Hindi na-discount na paghahambing ng mga opsyong magkaiba ang profile ng gastos**: ang paghahambing ng capex-heavy na opsyon sa opex-heavy na opsyon nang walang discounting ay sistematikong pumapabor sa opsyong nagpapaliban ng mas maraming gastos sa mga huling taon.

## Mga sanggunian

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
