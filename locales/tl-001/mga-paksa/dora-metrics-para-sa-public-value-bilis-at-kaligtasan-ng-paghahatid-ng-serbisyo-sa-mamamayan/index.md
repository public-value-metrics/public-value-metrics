# DORA Metrics para sa Public Value: bilis at kaligtasan ng paghahatid ng serbisyo sa mamamayan

Ang mga sukatan ng DORA (DevOps Research and Assessment) — deployment frequency, lead time for changes, change failure rate, at time to restore service, kasama ang reliability bilang ikalima — ang pinakamahusay na napatunayang benchmark ng pagganap sa paghahatid sa industriya ng software. Kapag isinalin sa mga termino ng pananagutan sa pampublikong sektor, bawat isa ay direktang proxy kung gaano kabilis, at kaligtas, naaabot ng public value ang mamamayan.

## Bakit ito mahalaga

Ang dekadang pananaliksik ng DORA, na inilalathala taon-taon bilang *Accelerate State of DevOps Report* (metodolohiya nina Forsgren, Humble at Kim, na pinapatakbo na ngayon ng Google Cloud), ay nagpapangkat sa mga koponan bilang elite, high, medium at low performer. Ang mga elite na koponan ay nagde-deploy kapag kailangan, wala pang isang araw mula commit hanggang production, bumabagsak ang humigit-kumulang 5% ng mga pagbabago, at bumabawi sa loob ng isang oras; ang mga low performer ay nagde-deploy buwan-buwan o mas bihira, inaabot ng mga buwan, bumabagsak ang humigit-kumulang 40% ng mga pagbabago, at bumabawi sa loob ng mga linggo. Sa pamahalaan, hindi ito mga vanity metric ng engineering: inuutos ng Service Standard ng Government Digital Service sa mga koponan na "mag-iterate at mag-improve nang madalas" at makatugon agad sa pangangailangan ng user, at ang mga departamentong hindi makapag-deploy nang ligtas at madalas ay istrukturang hindi makakatugon sa pamantayang iyon, anuman ang sabihin ng kanilang user research. Natuklasan ng sariling gawain ng Cabinet Office sa digital efficiency na magastos ang pagtulak sa mamamayan mula sa bigong o mabagal na digital na transaksyon tungo sa telepono o papel na channel — tinantiya ng Digital Efficiency Report ng GDS noong 2012 na ang ilang digital na transaksyon ay nagkakahalaga ng 20p lamang kumpara sa mga tawag o harapang pakikipag-ugnayan na umaabot sa £8.62 — kaya ang pagkabigo ng pagbabago sa serbisyong nakaharap sa publiko ay hindi lamang gastos sa oras ng engineering, kundi nagtutulak ng totoong pound sa badyet ng contact centre (tingnan ang [channel shift savings](../natipid-sa-channel-shift-paglipat-ng-mga-transaksyon-sa-digital/)).

## Ang matematika

```
Deployment frequency  = bilang ng deployment sa production / panahon
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = bumagsak na pagbabago / kabuuang pagbabago × 100
Time to restore (MTTR) = t(naibalik) − t(pagkabigo), median
Reliability            = pagtupad sa SLO (availability, latency, katumpakan)
```

Mga salin sa public value:

```
Lead time      → mga linggo sa pipeline × CoD, tingnan ang cost-of-delay-in-public-programmes
Failure rate   → rate ng insidenteng nakaaapekto sa mamamayan: CFR × gastos kada
                 na-redirect na tawag sa contact centre (o kada bigong statutory na transaksyon)
Recovery time  → pinsala ng outage ng serbisyo: MTTR × (mga claim/aplikasyong
                 naharang kada oras) × downstream na gastos o pagkawala ng wellbeing kada yunit
Reliability    → diskwento sa benepisyo: ang serbisyong may 99% availability ay naghahatid ng
                 ≈ 0.99 ng modelong benepisyo nito — ang katumbas sa paghahatid
                 ng kakulangan sa take-up o pagsunod
```

## Halimbawang kalkulasyon

Ang koponan ng benefits-claims portal ng isang lokal na awtoridad, bago at pagkatapos ng pamumuhunan sa delivery engineering:

```
                    Bago        Pagkatapos
Mga deploy          buwan-buwan  lingguhan
Lead time           8 linggo    5 araw
CFR                 30%         10%
MTTR                3 araw      4 oras
```

Naglalabas ang koponan ng humigit-kumulang 25 pagpapabuti/taon, average na halaga £8,000/linggo ([cost of delay](../cost-of-delay-sa-mga-programang-pampubliko/)). Ang pagbawas ng lead time ng humigit-kumulang 7.3 linggo ay nagpapaaga sa daloy ng benepisyo ng bawat pagpapabuti: 25 × 7.3 × 8,000 ≈ **£1,460,000/taon** ng halagang mas maagang naihatid. Sa failure rate: 25 × (0.30 − 0.10) = 5 mas kaunting bumagsak na pagbabago/taon; bawat bumagsak na pagbabago sa pampublikong portal ay karaniwang nagre-redirect ng tinatayang 2,000 mamamayan sa telepono sa halagang £8.62 kumpara sa 20p, netong gastos na humigit-kumulang £8.42 × 2,000 ≈ £16,840 kada insidente, kaya ang pag-iwas sa 5 insidente ay nakatitipid ng ≈ **£84,200/taon**. Ang pamumuhunan sa delivery engineering ay pinahahalagahan sa parehong salapi ng anumang ibang public-value case.

## Karugtong na halimbawa: reliability

Kung tumatakbo ang portal sa 97% availability sa halip na target na 99.5%, at ang bawat porsyentong punto ng downtime ay imodelo bilang 2% ng mga claim na nawala dahil sa pag-abandona, naghahatid ang serbisyo ng humigit-kumulang 0.975 ng modelong £2M/taon nitong benepisyo — diskwentong £50,000/taon sa benepisyo na hindi kailanman ipinapakita ng purong uptime dashboard.

## Kaugnayan sa software engineering

Mga operational metric ng serbisyong pampubliko ang mga DORA metric na nakadamit nang iba: ang lead time ay tumutugma sa [service standards at transaction metrics](../mga-service-standard-at-transaction-metric-apat-na-pangunahing-sukatan-ng-serbisyong-digital-ng-pamahalaan/); ang change failure rate ay tumutugma sa rate ng rework at reklamo; ang MTTR ay tumutugma sa tagal na hindi magamit ng mga claimant ang isang statutory na serbisyo. Nagagamit sa dalawang direksyon ang mga teknik sa pagpapabuti dahil parehong queueing system na may mga limitasyon sa pananagutan ang dalawa — tingnan ang [flow metrics sa paghahatid ng pamahalaan](../flow-metrics-sa-paghahatid-ng-serbisyo-ng-pamahalaan-littles-law-wip-at-cycle-time/) para sa pinagbabatayang matematika ng queueing. Tandaan din ang natuklasan ng DORA noong 2025 na ang pag-ampon ng AI ay nauugnay sa mas mataas na throughput ngunit *mas masamang* katatagan — isang interbensyong may bisa at may side effect, na mismong net-benefit analysis na tinatalakay ng paksang [AI productivity](../produktibidad-ng-ai-sa-pampublikong-sektor/) ng pangkat na ito.

## Mga karaniwang pagkakamali

- **Pagmamanipula ng sukatan**: pagpapalobo ng bilang ng deployment sa mga walang-saysay na release, o pag-alis ng mga hotfix sa bilang ng change failure. Tukuyin ang mga pangyayari nang kasing-tiyak ng pagtukoy ng isang statutory service standard sa "matagumpay na transaksyon".
- **Mga league table sa pagitan ng departamento**: inihahambing ng mga cluster ng DORA ang mga kasanayan sa paghahatid, hindi ang mga serbisyong magkaiba ang profile ng panganib; ang sistema ng pagbabayad ng buwis na may rating na "high" ay maaaring tamang postura kung ang "elite" ay padalus-dalos dahil sa mga kinakailangan sa assurance.
- **Pag-optimize sa isang sukatan lamang**: ang bilis na walang change failure rate ay klasikong trade-off ng throughput at kawalang-katatagan — iulat ang apat nang magkakasama, hindi bilang iisang iskor.

## Mga sanggunian

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
