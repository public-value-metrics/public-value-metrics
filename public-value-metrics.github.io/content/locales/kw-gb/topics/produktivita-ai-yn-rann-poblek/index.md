# Produktivita AI y'n Rann Poblek

Metrikow rag an pyth a wra gweres kodhya AI dhe ynjynnerieth — skeulyow degemmeres arghansow, speedyansow studhyow kontrollys, tremena PR, ha dalghyans kodh — a'n jeves kolonn dhiskonvedhek a dhisplegyans hag yn kyns an kowrans a rann bobel: klassifikasyon data a worth pyth a'n ertach a yll an daklow AI y gara, kylgh prenansow a styr bos an daklow yn isyans pols dhe jenyrasyon model a-dhelergh an ewnder a-lemmyn, ha'n dhrehevyansow klerans sekeredh a rewl piw a yll y dhevnydhya ha war pyth.

## Perag y talvos

An dhew studh kontrollys moyha kyttys a dhiskwedh war an tu dhe-vrassa. RCT GitHub Copilot a Peng et al. (2023) a gavas bos displegyoryon ow kowlwul tasg servyer HTTP nowydh 55.8% skwithes gans Copilot (1h11m erbyn 2h41m, n=95). RCT METR (2025) a gavas displegyoryon gedyoryon open-source, ow ri war *aga repositoriow gwynn aga honan*, bos 19% hweffa gans daklow AI a dhalleth 2025, ha'ga thybyans bos 20% skwithes. An dhew studh a yw sur; an ankevan yw an kavans — nyns yw kavans tasg nowydh trenys dhe effeythyans y'n kodva gwynn, ha meur a ober ynjynnerieth gwarnans yw ober kodva gwynn war estatys koth ha pluss spesel es an repository kenwerthel kres. Framweyth AI Jenerek rag HMG an Ofis Kreiz Data ha Didjital (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) a worr pennreyth rag kemeres atebel drefen na yll an kolonn dhisplegyans ma bos dres dhiworth demos an gwerthoryon; hwithrys yw dhe'n asrannansow prisya daklow erbyn aga edhomow daswir data ha sekeredh kyns dallethva.

## An matematik

```
Skeul degemmeres  = arghansow degemmerys / arghansow diskwedhys
Skeul dalghyans   = kodh AI a dhervyn dhe gesunya / kodh AI degemmerys
Speedyans         = (t_kontrol − t_AI) / t_kontrol  (dhiworth keskomparyans kontrollys HEPKEN)
Delta tremena     = Δ PR kesunyes/displegyer/seythun

Faktour kuvrans rann poblek:
  rann kodva dhelehek = LOC war systemow may hyll an klassifikasyon
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) an daklow oll

Model talvos = displegyoryon × kuvrans-dhelehek × termyn sawyes × kost leun × devnydh
             — pub ger a dhre musurans leel, ha'n faktour kuvrans
             nyns eus kehaval y'n rann privedh
```

## Ensampel oberys

Asrannans gwarnans a dowlenn gweres kodhya AI dres 300 displegyer, mes hepken systemow klassifiys OFFICIAL a yll devnydhya an daklow — 70% a'n estat herwydh dhelerya niver pennow, ha'n 30% a driga (systemow klassifikasyon uhella) kudhys yn tien.

```
Displegyoryon dhelehek = 300 × 0.70 = 210

Sewyans an towlen dallethus: termyn sawyes omrapportys 40 mynysenn/jydh;
              sawyans musurys dhe nivel tasg 12 mynysenn/jydh (0.2h)
              — an mylgh perspeksyon METR, dasprodhys y'n gwyls

Prisyewgh an niver MUSURYS:
  210 × 0.2h × 220 jydh × £55/our leun × 0.6 devnydh
  = 210 × 44 our × £55 × 0.6
  = 9,240 our × £55 × 0.6 ≈ £304,920/bledhen kapasita

Kost: 210 sedha lysansys × £22/mis × 12 ≈ £55,440/bledhen

Rasyo kapasita net ≈ 304,920 / 55,440 ≈ 5.5:1
```

Gallos dhe arghansa dhe dro dhe unn tryja an prow omrapportys, ha hepken wosa devnydhya an leder klassifikasyon — lysansya oll an 300 displegyer war dheroy an niver omrapportys a wrussa ankenna dhe'n dhew an poblans dhelehek ha'n sawyans ynwir.

## Kevrenn gans ynjynnerieth medhelweyth

An dhisplinow a gerdh dhe-ves yn skon: gorrewgh **prevyansow pragmatek** war kodva an asrannans y honan ha tikedhow gwir, ha nyns war daskow demos an gwerthoryon, drefen bos kavans METR kavans kodva gwynn arbennik; trewgh **skeul degemmeres avel proxy, ha nyns avel sewyans** — degemmeres uhel gans dalghyans isel yw kehaval medhelweyth an ankevan-kamdhiagnos; kesplegewgh pub hawl a dremena gans **gwiryans stabilita**, drefen bos rapport 2025 DORA ow kavos bos kemeres AI ow sevel tremena mes ow tewlel stabilita chanj, ha hemma yw an dhelergh an dhiskudhyans prow-net may fo [DORA metrics for public value](../metryksow-dora-rag-talvos-poblek/) byldys dh'y wul; ha bedhewgh onest bos gallos dhe vedhelweyth AI ledhya, ha nyns deghesya, an bwlh war estatys koth a'n [dhyvyth teknegel](../dyvas-teknegel-avel-dhirywyans-talvedh-poblek/) meur, drefen bos data dyskans a-dhelergh rag COBOL, 4GL, ha kodh mainframe erghys a yw kemmyn y'n gwarnans, ha rag henna ansawor an arghans war an systemow a'n jeves moyha edhom a weres yw dhe wella gwann. Hemma a sedh ryb an govynn ledan [talvos AI yn gwarnans](../talvos-ai-yn-gwarnans/) ha dal bos governys dre'n keth kowrans [talvos sekeredh kiber an rann bobel](../gwerth-diogeleth-kiber-yn-sektor-poblek/) a worth pyth a wel kodh po data daklow tryja-parti.

## Trapow

- **Trans-plansyans studh an gwerther**: devnydhya speedyansow RCT kodva nowydh war ober kesunya ertach yw an gwall pur a dhiskudhas studh METR.
- **Omrapport avel musurans**: mylgh 20-poynt ynter perspeksyon ha musurans yw an bias moyha godhvedhys yn skrifow ma, ha hi a ysyn kasow negys a dhevnydh sondyow displegyer hepken.
- **Hepkorr leder klassifikasyon**: modellow lysans ha talvos byldys war niver pennow hollek, ha nyns war an kevrenn dhelehek klerys klassifikasyon, a dhiwlel kost-effeythyans ha kuvrans possybyl yn kerdhys.
- **Daladh kylgh prenansow**: prenans daklow a-bervedh framweyth a yll styrya bos an towlen dallethus ow prisya jenyrasyon model 12–18 mis a-dhelergh an pyth yw dhe-les yn poblek erbyn an dallethva leun, ha gul kas negys kynsa'n speedyans kozh kyns mos yn bew.

## Fentynyow

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
