# Ƙimar AI a Gwamnati

Ƙimar AI a gwamnati ita ce buƙatar cewa tsarin AI da ake amfani da shi a hidimar jama'a ya cika ma'aunin ƙimar kuɗi (value for money) da ƙimar jama'a kamar kowane shawarar kashe kuɗi — ba ƙasa da haka don sabon abu ne ba, kuma ba sama da haka don ana jin tsoronsa ba. Ita ce tambayar da dole ne ƙungiyar isar da hidima ta iya amsawa kafin, ba bayan, fitar da fasalin AI ba: shin wannan yana samar da ƙima fiye da kuɗin da yake ci, bayan an ƙididdige tabbatar da inganci, sa ido, da haɗari da gaskiya?

## Dalilin da ya sa yake da muhimmanci

Ofishin Central Digital and Data Office (CDDO) na Birtaniya ya buga Generative AI Framework for Government a 2024, bisa jagorar wucin gadi ta Yuni 2023, kuma ya tsara shi bisa ƙa'idodi goma da suka shafi menene generative AI, abubuwan da'a da ke tattare da shi, tsaron kayan aiki, matakan tabbatar da inganci, gudanar da cikakken rayuwar generative AI, gano ainihin lamuran amfani, haɗin gwiwa tsakanin sassan gwamnati, bayyana gaskiya, ƙwarewa, da shugabanci. Dagewar tsarin kan "ikon ɗan adam mai ma'ana" da cikakken gudanar da rayuwar aiki tana wanzuwa ne saboda shawarwarin kasuwancin ayyukan AI suna da wata hanyar kasawa ta musamman da sauran kashe kuɗin IT ba su da ita: lambar ƙaruwar aiki ta gwaji mai girma tana da sauƙin samarwa da sauƙin ƙara girmanta, domin ana auna ta kafin a ƙididdige nauyin tabbatarwa, gyara da sa ido da kayan aikin ke haifarwa. Tare da tsarin, Algorithmic Transparency Recording Standard (ATRS) yana buƙatar hukumomin gwamnati su buga rubutaccen bayani na yau da kullum — manufa, bayanan da aka yi amfani da su, aiki, gwajin adalci, tsarin sa ido na ɗan adam — ga kayan aikin algorithm masu muhimmin tasiri a shawarwari game da mutane, wanda ke sa kuɗin tabbatar da inganci na tsarin AI ya zama abin da jama'a za su iya gani, ba ƙiyasin cikin gida da ƙungiya za ta iya tsallakewa a ɓoye ba.

## Lissafi

Ana tantance karɓar AI a matsayin ƙari ga, ba maye gurbin, tantancewar [ƙimar kuɗi](../ƙimar-da-aka-samu-daidai-da-kuɗi/) ta yau da kullum, tare da bayyana sharuɗɗan da suka shafi AI a fili maimakon haɗa su cikin lamba ɗaya ta "ribar ƙaruwar aiki":

```
Ainihin ƙimar tsarin AI =
    ribar ƙaruwar aiki (lokacin da aka tsira × cikakken kuɗin ma'aikaci)
  − kuɗin lasisi/na'urar lissafi
  − kuɗin tabbatarwa da sa ido na ɗan adam (duba sakamakon AI kafin
    a yi aiki da shi — wannan ba ya raguwa zuwa sifili ko da kayan aiki
    balagaggu ne)
  − kuɗin ATRS na rubuce-rubuce da ci gaba da sa ido
  − kuɗin cutarwa daga kurakurai, son zuciya, ko hallucination da aka gyara
    bisa haɗari, an auna shi bisa ga wanda ke ɗaukar cutarwar (distributional-weighting)

Lambar ƙaruwar aiki ta gwaji da ta bar sharuɗɗan sa ido ba za a iya kwatanta
ta da tushen kuɗi na aikin yau da kullum wanda ya riga ya ƙunshi
daidai da duba ɗan adam ba — duba ai-productivity-in-the-public-sector
don cikakken horon auna ƙaruwar aiki da wannan ya karɓa daga gare shi.
```

## Misali aiki

**Karamar hukuma da ke amfani da kayan aikin generative AI don rubuta amsoshin farko ga tambayoyin yau da kullum game da harajin majalisa (council tax)**: tambayoyi 25,000/shekara, waɗanda a baya ma'aikatan shari'a ne suke sarrafa su gaba ɗaya a matsakaicin mintuna 14/tambaya, cikakken kuɗin ma'aikaci £34/awa.

```
Kuɗin tushe (ba AI):
  25,000 × (14/60) × £34 = £198,333/shekara

Iƙirarin gwaji mai girma: AI yana rubuta amsa cikin daƙiƙa 90,
ma'aikaci "kawai yana dubawa ya aika" — sabon lokacin da aka iƙirari mintuna 3
  25,000 × (3/60) × £34 = £42,500/shekara
  → ajiyar da aka iƙirari £155,833/shekara (yana kama da sauyi mai girma)

Cikakkiyar lamba, an auna ta bayan watanni 3 a aiki maimakon
a lamuran gwajin da aka zaɓa a hannu:
  Ainihin lokacin dubawa + gyara ga kowace amsa: mintuna 6 (rubuce-rubuce
  suna buƙatar gyara na gaske ga tambayoyi masu sarƙaƙiya ko na motsin rai)
  25,000 × (6/60) × £34 = £85,000/shekara
  Kuɗin lasisi/na'urar lissafi: £38,000/shekara
  Rubuce-rubucen ATRS da sa ido kan son zuciya/inganci na kowane kwata: £14,000/shekara
  Jimillar kuɗi = 85,000 + 38,000 + 14,000 = £137,000/shekara

Ainihin ajiya = 198,333 − 137,000 = £61,333/shekara — na gaske ne kuma
ya cancanci a riƙe, amma bai kai rabin iƙirarin gwajin ba, kuma ya buƙaci
auna lokacin sa ido da gaskiya, ba na mafi kyawun yanayin gwajin ba, don a gano shi.
```

## Alaƙa da injiniyancin manhaja

A nan ne [ai-productivity-in-the-public-sector](../ƙaruwar-aiki-ta-ai-a-fannin-gwamnati/) da wannan maudu'i suke haɗuwa: ƙungiyoyin injiniya da ke gina fasalolin AI cikin hidimomin jama'a su ne ke da kayan auna da ke ba da damar samun "ainihin" lambar a misali aikin — rubuta ainihin lokacin dubawa, bambancin rubutu tsakanin daftari da amsar da aka aika, da yawan mika ga manyan matakai, maimakon dogaro da yanayin nunin gwajin. Ya kamata a tantance fasalolin AI bisa [ma'aunin hidimar dijital](../maaunin-hidimar-dijital/) batu na 9 (amintaccen sabis, sirrin mai amfani) kuma a haɗa da [ƙimar tsaron intanet na fannin gwamnati](../ƙimar-tsaron-yanar-gizo-a-ɓangaren-jamaa/) a inda kayan aikin ke taɓa bayanan ɗan ƙasa, kuma kowane tsarin AI mai muhimmin tasiri a shawarwari game da mutane yana buƙatar rubutaccen ATRS kafin a ɗauke shi a shirye don tantancewa, kamar yadda hidima take buƙatar cin tantancewar [ma'aunin hidimar dijital](../maaunin-hidimar-dijital/) kafin ta fara aiki.

## Tarkuna

- **AI-washing**: sake sanya sunan aikin tsarin atomatik na ƙa'idoji a matsayin "AI" don samun kuɗi ko hankali da aka ware wa karɓar AI, ba tare da haɗarin daidaito ko son zuciya da ke tabbatar da ƙarin bincike na tsarin ba.
- **Auna ƙaruwar aiki ta gwaji, ba ta samarwa ba**: gwaje-gwaje suna aiki ne da lamuran gwaji da aka zaɓa tare da masu dubawa masu himma da hankali; samarwa yana aiki ne da cikakken cakuɗar lamuran gaske tare da masu dubawa da, a kan lokaci, suke ƙirƙirar son amincewa da atomatik (automation bias) kuma ba sa duba sakamako sosai — duka biyun suna karkatar da lambar kuɗin sa ido ta gaskiya.
- **Tsallake rajistar ATRS saboda kayan aikin "ba shawarar atomatik ba ne da gaske"**: iyakar ma'aunin ita ce muhimmin tasiri a shawara game da mutum guda, wanda yawancin kayan aikin rubutu ko rarraba lamura na AI da ke fuskantar ɗan ƙasa suna cikawa ko da ɗan adam ne yake sa hannu a ƙarshe.
- **Yin watsi da tasirin rabon kurakurai**: matsakaicin kuskuren tsarin AI a tsakanin duka masu amfani zai iya ɓoye mafi girman kuskure ko son zuciya ga wasu rukunoni; ya kamata a yi amfani da [auna rabo (distributional weighting)](../auna-rabon-faida-bisa-matsayin-mutane/) ga sharuɗɗan cutarwar da aka gyara bisa haɗari, ba ga jimillar daidaito kawai ba.

## Majiyoyi

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
