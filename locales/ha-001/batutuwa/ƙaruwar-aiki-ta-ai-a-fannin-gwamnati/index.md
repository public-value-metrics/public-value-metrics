# Ƙaruwar Aiki ta AI a Fannin Gwamnati

Ma'aunin abin da taimakon rubuta code na AI yake yi ga fitar aikin injiniya — yawan karɓar shawarwari, saurin da aka auna a gwaje-gwaje masu sarrafawa, yawan PR da ake haɗawa, da riƙon code — yana da tushen shaida mai sabani sosai ko da kafin a ƙara takurawar fannin gwamnati: rarraba bayanai (data classification) yana iyakance waɗanne sassa na tsohon tsarin za a bar kayan aikin AI ya taɓa, zagayen sayayya yana nufin kayan aikin da ake tantancewa sau da yawa yana ɗaya ko fiye da zamanin samfuri a baya da ƙarfin zamani, kuma buƙatun izinin tsaro suna ƙayyade wanda zai iya amfani da shi a kan me.

## Dalilin da ya sa yake da muhimmanci

Karatuttukan sarrafawa guda biyu da aka fi ambata suna nuni ga hanyoyi dabam-dabam. RCT na Peng et al. na GitHub Copilot na 2023 ya gano cewa masu haɓakawa sun kammala aikin HTTP-server na sabon farawa da kashi 55.8% da sauri tare da Copilot (1h11m da 2h41m, n=95). RCT na METR na 2025 ya gano cewa ƙwararrun masu haɓaka buɗaɗɗen code da ke aiki a *ma'ajiyoyin nasu masu balaga* sun fi jinkiri da kashi 19% tare da kayan aikin AI na farkon 2025, yayin da suke tsammanin sun fi sauri da kusan kashi 20%. Karatuttukan biyu suna da inganci; sabanin shi ne binciken — ingancin aikin sabon farawa ba ya komawa ga tasirin ma'ajiyar code balagaggiya, kuma yawancin aikin injiniyancin gwamnati aikin ma'ajiyar code balagaggiya ne a kan tsare-tsare da suka fi tsufa da bambanci fiye da matsakaicin ma'ajiyar kasuwanci. Generative AI Framework for HMG na Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) ya tsara ƙa'idodi na karɓa mai alhaki daidai saboda ba za a iya shigo da wannan tushen shaida kai tsaye daga nunin masu sayarwa ba; ana sa ran sassan gwamnati su tantance kayan aiki bisa buƙatunsu na sarrafa bayanai da tsaro kafin yaɗawa.

## Lissafi

```
Yawan karɓa  = shawarwarin da aka karɓa / shawarwarin da aka nuna
Yawan riƙo   = code na AI da ya kai ga haɗawa / code na AI da aka karɓa
Sauri        = (t_sarrafawa − t_AI) / t_sarrafawa  (daga kwatancen sarrafawa KAWAI)
Bambancin fitarwa = Δ PR da aka haɗa/mai haɓakawa/mako

Abin haɗin ɗaukar fannin gwamnati:
  kason ma'ajiyar code da ya cancanta = LOC a tsare-tsaren da rarrabuwar
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) ta ba da izinin kayan aikin

Samfurin ƙima = masu haɓakawa × ɗaukar da ya cancanta × lokacin da aka tsira × cikakken kuɗi/awa × yawan amfani
             — kowane sharaɗi yana buƙatar auna a gida, kuma abin haɗin ɗaukar
             ba shi da makamancinsa a fannin masu zaman kansu
```

## Misali aiki

Wani sashen gwamnati yana gwada kayan aikin rubuta code na AI a tsakanin masu haɓakawa 300, amma tsare-tsaren da aka rarraba a matsayin OFFICIAL kawai ne suka cancanci amfani da kayan aikin — 70% na tsarin bisa rabon adadin ma'aikata, sauran 30% (tsare-tsare masu mafi girman rarrabuwa) an cire su gaba ɗaya.

```
Masu haɓakawa da suka cancanta = 300 × 0.70 = 210

Sakamakon gwaji: lokacin da aka tsira da suka faɗa da kansu mintuna 40/rana;
              ainihin tanadin da aka auna a matakin aiki mintuna 12/rana (0.2h)
              — gibin fahimta na METR, an sake ganinsa a aikin gaske

A ƙima lambar da AKA AUNA:
  210 × 0.2h × kwanaki 220 × £55/awa cikakken kuɗi × 0.6 yawan amfani
  = 210 × awanni 44 × £55 × 0.6
  = awanni 9,240 × £55 × 0.6 ≈ £304,920/shekara damar aiki

Kuɗi: kujerun lasisi 210 × £22/wata × 12 ≈ £55,440/shekara

Rabon ribar damar aiki ≈ 304,920 / 55,440 ≈ 5.5:1
```

Ana iya ba da kuɗi a kan kusan kashi ɗaya bisa uku na fa'idar da aka faɗa da kai, kuma bayan an yi amfani da rufin rarrabuwar kawai — bayar da lasisi ga duka masu haɓakawa 300 bisa lambar da suka faɗa da kansu zai ƙara girman yawan wadanda suka cancanta da ainihin tanadi duka.

## Alaƙa da injiniyancin manhaja

Horon da ke wucewa kai tsaye: gudanar da **gwaje-gwaje masu amfani (pragmatic trials)** a kan code na sashen da ainihin tikiti, ba ayyukan nunin masu sayarwa ba, domin sakamakon METR bincike ne na musamman na ma'ajiyar code balagaggiya; ɗauki **yawan karɓa a matsayin wakili, ba sakamako ba** — babban karɓa tare da ƙarancin riƙo shi ne daidai da yawan ganewar cuta (overdiagnosis) a manhaja; haɗa kowane iƙirarin fitarwa da **binciken kwanciyar hankali**, domin rahoton DORA na 2025 ya gano cewa karɓar AI yana ƙara fitarwa amma yana lalata kwanciyar hankalin canje-canje, wanda shi ne ainihin nazarin ribar da [ma'aunin DORA don ƙimar jama'a](../maaunin-dora-don-ƙimar-jamaa/) aka gina don aiwatarwa; kuma a faɗi gaskiya cewa kayan aikin AI na iya faɗaɗa, ba rage ba, gibin a tsoffin tsare-tsare masu nauyin [bashin fasaha](../bashin-fasaha-a-matsayin-zaizayar-ƙimar-jamaa/), domin bayanan horo ba su wakilci COBOL, 4GL, da code na mainframe na musamman da ya zama ruwan dare a gwamnati ba, don haka ingancin shawarwari a daidai tsare-tsaren da suka fi buƙatar taimako sau da yawa shi ne mafi rauni. Wannan yana tare da faɗin tambayar [ƙimar AI a gwamnati](../ƙimar-ai-a-gwamnati/) kuma ya kamata a gudanar da shi ƙarƙashin takurawar [ƙimar tsaron intanet na fannin gwamnati](../ƙimar-tsaron-yanar-gizo-a-ɓangaren-jamaa/) iri ɗaya da ke iyakance inda kowane kayan aikin wani ɓangare na uku zai iya ganin code ko bayanai.

## Tarkuna

- **Dasa binciken masu sayarwa**: yin amfani da saurin RCT na sabon farawa ga aikin haɗa tsoffin tsare-tsare shi ne daidai kuskuren da binciken METR ya bayyana.
- **Faɗin kai a matsayin auna**: gibin maki 20 tsakanin fahimta da abin da aka auna shi ne mafi girman son zuciya da aka sani a wannan adabi, kuma yana ƙara girman shawarwarin kasuwancin da suka dogara da binciken masu haɓakawa kaɗai.
- **Yin watsi da rufin rarrabuwa**: samfuran lasisi da ƙima da aka gina a kan jimillar adadin ma'aikata maimakon ƙaramin rukunin da ya cancanta kuma aka share bisa rarrabuwa suna ƙara girman ingancin kuɗi da ɗaukar da za a iya samu koyaushe.
- **Jinkirin zagayen sayayya**: sayen kayan aiki bisa tsari na iya nufin gwaji yana tantance zamanin samfuri da yake watanni 12–18 a baya da abin da ake samu a bainar jama'a lokacin cikakken yaɗawa, wanda ke sa zaton saurin shawarar kasuwanci na asali ya tsufa kafin fara aiki.

## Majiyoyi

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
