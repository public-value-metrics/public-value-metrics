# Adalci tsakanin Tsararraki da Rangwamen Dorewa

Rangwame na kuɗaɗe da fa'idodin gaba zuwa ƙimar yanzu daidaitaccen aiki ne a kimanta shawarwarin jama'a — duba [ƙimar rangwame ta zamantakewa](../kason-rangwame-na-zamantakewa/) — amma kowace ƙimar rangwame mai kyau, idan aka haɗa ta cikin shekaru da dama ko ƙarni, tana rage nesa ta gaba zuwa kusan sifili a ma'anar yau. Ga yanke shawara masu sakamako ƙarni ko fiye daga yanzu — sauyin yanayi, sharar nukiliya, asarar halittu, dorewar fansho — wannan gaskiyar lissafi ta zama ta ɗabi'a: daidaitaccen rangwame na iya sa mummunar cutarwa ga tsararraki masu zuwa ta bayyana, a ma'anar ƙimar yanzu, da kyar ta cancanci a guje mata.

## Dalilin da ya sa yake da muhimmanci

Daidaitawar Ramsey, da Frank Ramsey ya samo a 1928, tana raba ƙimar rangwame zuwa abubuwa biyu: fifikon lokaci zalla (δ, yadda muke fifita yanzu da kawai fiye da daga baya, ba tare da dogaro da arziki ba) da tasirin ci gaban arziki (η×g, yadda muke ragewa saboda ana tsammanin tsararraki masu zuwa za su fi arziki, don haka ƙarin fam yana da ƙarancin muhimmanci a gare su). Ƙimar rangwame ta dogon lokaci ta Green Book ta Burtaniya an gina ta ne a kan wannan daidaitawa kuma tana bin jadawali *mai raguwa* maimakon ƙima mai tsayayye — ƙira da ta samo asali daga aikin Martin Weitzman kan "gamma discounting," wanda ke nuna cewa lokacin da ƙimar rangwame ta gaba da kanta ba ta da tabbas, ƙimar daidai-da-tabbas da ya kamata ka yi amfani da ita tana raguwa a tsawon lokaci a lissafi, saboda yanayi masu ƙarancin ƙima suna mamaye yayin da ka duba nesa. Stern Review kan Tattalin Arzikin Sauyin Yanayi (2006), wanda Sir Nicholas Stern ya jagoranta, ya ɗauki muhawarar ɗabi'a gaba: Stern ya yi hujjar cewa fifikon lokaci zalla ya kamata a saita shi kusa da sifili (ya yi amfani da δ ≈ 0.1%, yana nuna ɗan ƙaramar yiwuwar masifar da ke kawo ƙarshen wayewa kawai, ba ainihin fifikon yanzu fiye da gaba ba), yana haifar da ƙimar rangwame mai tasiri ƙasa sosai fiye da aikin Green Book na al'ada kuma, daidai da haka, hujja mafi girma ta yau don aikin yanayi. Masu suka (musamman William Nordhaus) sun yi hujjar cewa ƙimar Stern kusa da sifili tana da kariya ta ɗabi'a amma ba ta dace da ainihin halayen tanadi da zuba jari da aka lura ba. Rashin yarjejeniyar ba ɗan bayanin ƙasa na fasaha ba ne — shi ne babban dalili guda ɗaya da masana tattalin arziki biyu masu tsauri daidai suke iya kaiwa ga ƙarshe daban-daban sosai kan nawa ya kamata tsarar yanzu ta yi hadaya ga gaba, kuma shi ne dalilin da ya sa manhajar da ke tallafa wa kimanta zuba jarin jama'a na dogon lokaci dole ta bayyana zaton rangwamenta maimakon ta binne su a tsohuwar ƙimar spreadsheet.

## Lissafi

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3.5%
  Years 31–75:   3.0%
  Years 76–125:  2.5%
  Years 126–200: 2.0%
  Years 201–300: 1.5%
  Years 301+:    1.0%

Stern Review parameters: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Misali aiki

**Ƙimar yau ta £1 na cutarwar da aka guje wa a shekaru 100**, ƙarƙashin tsare-tsaren rangwame uku:

```
Flat Green Book short-term rate (3.5%, held constant for 100 years):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Green Book declining schedule (3.5% for yrs 1–30, 3.0% for yrs 31–75,
2.5% for yrs 76–100):
  factor(1–30)  = 1.035^30  ≈ 2.807
  factor(31–75) = 1.03^45   ≈ 3.782
  factor(76–100)= 1.025^25  ≈ 1.854
  total factor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Stern-style near-zero pure time preference (r ≈ 1.4% flat):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

£1 ɗaya na cutarwar da aka guje wa ƙarni ɗaya daga yanzu yana da daraja 3.2p, 5.1p, ko 25p a yau gwargwadon wacce al'adar rangwame ake amfani da ita kawai — kewayo na kusan sau takwas wanda ke tantance ko aikin rage tasirin yanayi mai tsadar farko da riba ƙarni ɗaya a gaba ya wuce gindin NPV mai kyau kwata-kwata. Wannan shi ne hanyar da ke bayan babban gargaɗin batun: a duk wata ƙima mai tsayayye mai kyau ta gaske, cutarwar gaba mai nisa isasshe tana gogewa a lissafi daga kimantawa, ba tare da la'akari da ainihin tsananinta ba.

## Alaƙa da injiniyancin manhaja

- Duk wani kayan aikin kimantawa ko shari'ar kasuwanci na dogon lokaci (kayayyakin more rayuwa, daidaita yanayi, ƙirar fansho) ya kamata ya aiwatar da jadawali *mai raguwa* na Green Book, ba ƙima ɗaya tsayayye ba — tsohuwar ƙima tsayayye tana saka ɓangarancin da ya fi ƙarfi a kan gaba a shiru fiye da yadda jagorar gwamnatin Burtaniya ta yanzu ta ƙayyade.
- Ya kamata a bayyana ƙimar rangwame da zangon lokaci koyaushe a matsayin sigogi bayyanannu, masu bincikuwa a manhajar kimantawa, tare da nuna a fili yadda lissafin ke da hankali gare su (kamar a misalin da aka warware a sama) — binne ƙimar a fayil ɗin saiti yana gayyatar daidai "zaɓin ɗabi'a da aka ɓoye" da muhawarar Stern-Nordhaus ke gargaɗi game da shi; wannan yana haɗuwa da batun bayyanawa da aka yi a [lissafin kadarorin halitta](../lissafin-jarin-halitta/) kuma yana ƙarƙashin batun [ƙimar rangwame ta zamantakewa](../kason-rangwame-na-zamantakewa/) gabaɗaya.
- Inda fa'idodin shiri a bayyane suke na tsakanin tsararraki (kariyar ambaliya, dawo da kadarorin halitta, kayayyakin more rayuwa na dijital na dogon lokaci), ya kamata [nazarin fa'ida da kuɗi na zamantakewa](../nazarin-kuɗi-da-amfani-na-zamantakewa/) ya ruwaito sakamako a ƙarƙashin aƙalla zaton rangwame biyu (daidaitaccen na Green Book da yanayin gwaji na ƙaramar ƙima) maimakon ƙiyasin maki ɗaya, domin masu yanke shawara su ga yadda zaɓin ƙimar rangwame kaɗai ke motsa amsar.

## Tarkuna

- **Gabatar da NPV ɗaya mai rangwame ba tare da kewayon hankali ba** — idan aka yi la'akari da nawa ƙimar rangwame kaɗai ke canza amsa ga ayyukan dogon lokaci, NPV na ƙima ɗaya yana wuce gona da iri kan daidaito; koyaushe ruwaito kewayo wanda ya ƙunshi aƙalla daidaitaccen Green Book da yanayin ƙaramar ƙima.
- **Amfani da ƙimar gajeren lokaci tsayayye (3.5%) ga kimantawar ƙarni da dama** — jagorar Green Book kanta tana ƙayyade jadawali mai raguwa daidai saboda an ga ƙima tsayayye ba ta dace ba bayan kusan shekaru 30; amfani da ita ko ta yaya yana rage ƙimar kuɗin dogon lokaci.
- **Ɗaukar δ (fifikon lokaci zalla) a matsayin sigar fasaha zalla** — ƙimar Stern kusa da sifili da ƙimar da Green Book ke nufi mafi girma duka ana iya kare su ne kawai a matsayin matsayin ɗabi'a kan nawa nauyi yanzu ke bin gaba, ba lambobi "daidai" ko "kuskure" na gwaji ba; ya kamata manhaja ta bayyana zaton maimakon gabatar da lamba ɗaya a matsayin daidai a zahiri.

## Majiyoyi

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
