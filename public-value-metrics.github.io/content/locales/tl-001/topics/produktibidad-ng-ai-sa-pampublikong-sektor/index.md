# Produktibidad ng AI sa Pampublikong Sektor

Ang mga sukatan kung ano ba talaga ang epekto ng AI coding assistance sa output ng engineering — antas ng pagtanggap sa mungkahi, pagbilis sa mga kontroladong pag-aaral, throughput ng PR, at pagpapanatili ng code — ay may tunay na magkasalungat na batayan ng ebidensiya kahit bago pa idagdag ang mga limitasyon ng pampublikong sektor: nililimitahan ng data classification kung aling bahagi ng lumang estate ang maaaring hawakan ng AI tool, ang mga siklo ng procurement ay nangangahulugang ang tool na sinusuri ay madalas isang henerasyon ng modelo ang atrasado sa kasalukuyang kakayahan, at ang mga kinakailangan sa security clearance ang nagtatakda kung sino ang maaaring gumamit nito at saan.

## Bakit ito mahalaga

Magkasalungat ang direksyon ng dalawang pinakamadalas banggitin na kontroladong pag-aaral. Natuklasan ng 2023 GitHub Copilot RCT nina Peng et al. na natapos ng mga developer ang isang greenfield na gawain sa HTTP server nang 55.8% na mas mabilis gamit ang Copilot (1h11m kumpara sa 2h41m, n=95). Natuklasan naman ng 2025 RCT ng METR na ang mga bihasang open-source developer na gumagawa sa *sarili nilang hinog na repository* ay 19% na mas mabagal gamit ang mga AI tool ng unang bahagi ng 2025, habang naniniwalang humigit-kumulang 20% silang mas mabilis. Parehong matibay ang dalawang pag-aaral; ang pagkakasalungat mismo ang natuklasan — ang bisa sa greenfield na gawain ay hindi naililipat sa bisa sa hinog na codebase, at malaking bahagi ng engineering ng pamahalaan ay trabaho sa hinog na codebase sa mga estate na mas luma at mas kakaiba kaysa sa karaniwang komersyal na repository. Inilatag ng Generative AI Framework for HMG ng Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) ang mga prinsipyo para sa responsableng pag-aampon dahil hindi basta maaangkat ang batayang ebidensiyang ito mula sa mga demonstrasyon ng vendor; inaasahang susuriin ng mga departamento ang mga tool laban sa sarili nilang mga kinakailangan sa paghawak ng datos at seguridad bago ang rollout.

## Ang matematika

```
Antas ng pagtanggap  = tinanggap na mungkahi / ipinakitang mungkahi
Antas ng pagpapanatili = AI code na umabot sa merge / tinanggap na AI code
Speedup          = (t_control − t_AI) / t_control  (mula LAMANG sa kontroladong paghahambing)
Delta ng throughput = Δ naka-merge na PR/dev/linggo

Salik ng saklaw sa pampublikong sektor:
  bahagi ng codebase na kwalipikado = LOC sa mga sistemang pinahihintulutan ng
    classification (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) na gamitan ng tool

Modelo ng halaga = devs × kwalipikadong saklaw × oras na natipid × loaded na rate × utilization
             — bawat termino ay nangangailangan ng lokal na pagsukat, at ang salik ng saklaw
             ay walang katumbas sa pribadong sektor
```

## Halimbawang kalkulasyon

Nag-pilot ang isang departamento ng pamahalaan ng AI coding assistant sa 300 developer, ngunit ang mga sistemang naka-classify na OFFICIAL lamang ang kwalipikadong gamitan ng tool — 70% ng estate ayon sa alokasyon ng headcount, at ang natitirang 30% (mga sistemang may mas mataas na classification) ay ganap na hindi isinama.

```
Kwalipikadong developer = 300 × 0.70 = 210

Resulta ng pilot: iniulat mismo na oras na natipid 40 min/araw;
              sinukat na tipid sa antas ng gawain 12 min/araw (0.2h)
              — ang perception gap ng METR, na naulit sa tunay na mundo

Halagahan ang SINUKAT na bilang:
  210 × 0.2h × 220 araw × £55/oras na loaded × 0.6 utilization
  = 210 × 44 oras × £55 × 0.6
  = 9,240 oras × £55 × 0.6 ≈ £304,920/taon na kapasidad

Gastos: 210 lisensyadong upuan × £22/buwan × 12 ≈ £55,440/taon

Net na ratio ng kapasidad ≈ 304,920 / 55,440 ≈ 5.5:1
```

Maaaring pondohan sa humigit-kumulang isang-katlo ng iniulat na benepisyo, at pagkatapos lamang ilapat ang limitasyon ng classification — ang paglilisensya sa lahat ng 300 developer batay sa iniulat na bilang ay magpapalaki sa parehong kwalipikadong populasyon at sa tunay na tipid.

## Kaugnayan sa software engineering

Ang mga disiplinang direktang naililipat: magpatakbo ng **pragmatic trial** sa sariling codebase at tunay na mga ticket ng departamento, hindi sa mga gawain sa demonstrasyon ng vendor, dahil ang resulta ng METR ay partikular na natuklasan sa hinog na codebase; ituring ang **antas ng pagtanggap bilang proxy, hindi outcome** — ang mataas na pagtanggap na may mababang pagpapanatili ay katumbas sa software ng overdiagnosis; ipares ang bawat pahayag ng throughput sa **pagsusuri ng katatagan**, dahil natuklasan ng ulat ng DORA 2025 na pinapataas ng pag-aampon ng AI ang throughput ngunit pinahihina ang katatagan ng pagbabago, na eksaktong net-benefit na pagsusuring itinayo ang [DORA metrics para sa public value](../dora-metrics-para-sa-public-value-bilis-at-kaligtasan-ng-paghahatid-ng-serbisyo-sa-mamamayan/) na gawin; at maging tapat na maaaring palawakin, hindi paliitin, ng AI tooling ang agwat sa mga lumang estate na mabigat sa [technical debt](../technical-debt-bilang-pagkaubos-ng-public-value-sa-it-ng-pamahalaan/), dahil kulang ang representasyon ng training data sa COBOL, 4GL, at bespoke na mainframe code na karaniwan sa pamahalaan, kaya ang kalidad ng mungkahi sa mismong mga sistemang higit na nangangailangan ng tulong ay madalas ang pinakamahina. Kasama ito ng mas malawak na tanong ng [halaga ng AI sa pamahalaan](../halaga-ng-ai-sa-pamahalaan/) at dapat pamahalaan sa ilalim ng parehong limitasyon ng [public-sector cybersecurity value](../halaga-ng-cybersecurity-sa-pampublikong-sektor-pagpepresyo-sa-pagbabawas-ng-panganib/) na naglilimita kung saan maaaring makakita ng code o datos ang anumang third-party na tool.

## Mga karaniwang pagkakamali

- **Paglilipat ng vendor study**: ang paglalapat ng speedup ng greenfield RCT sa trabahong legacy-integration ay eksaktong pagkakamaling inilantad ng pag-aaral ng METR.
- **Self-report bilang pagsukat**: ang 20-percentage-point na agwat ng persepsyon laban sa sinukat ang pinakamalaking kilalang bias sa panitikang ito, at pinapalobo nito ang mga business case na umaasa lamang sa mga survey ng developer.
- **Pagbalewala sa limitasyon ng classification**: ang mga modelo ng lisensya at halaga na batay sa kabuuang headcount sa halip na sa kwalipikado at clearance-cleared na subset ay sistematikong nagpapalaki ng parehong cost-effectiveness at makakamit na saklaw.
- **Pagkaantala dahil sa siklo ng procurement**: ang procurement ng tool batay sa framework ay maaaring mangahulugang ang pilot ay sumusuri sa isang henerasyon ng modelong 12–18 buwan nang atrasado sa magagamit ng publiko pagdating ng ganap na rollout, kaya lipas na ang palagay ng speedup sa orihinal na business case bago pa mag-go-live.

## Mga sanggunian

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
