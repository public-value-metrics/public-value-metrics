# Nazarin Ingancin Kuɗi a Gwamnati

Nazarin ingancin kuɗi (cost-effectiveness analysis, CEA) yana kwatanta kuɗin hanyoyi daban-daban na cimma *sakamako iri ɗaya*, wanda aka bayyana a naúrori na halitta — kuɗin kowane mai kwana a titi da aka sama masa gida, kuɗin kowane ɗalibi da aka kai matakin da ake tsammani, kuɗin kowace tan na CO2 da aka rage — ba tare da mayar da sakamakon kansa zuwa kuɗi ba.

## Dalilin da ya sa yake da muhimmanci

Green Book yana ɗaukar CEA a matsayin hanyar ajiya lokacin da buƙatar [nazarin fa'ida da kuɗi na zamantakewa](../nazarin-kuɗi-da-amfani-na-zamantakewa/) ta mayar da kowace fa'ida zuwa kuɗi ta zama ba kawai mai wahala ba amma ta rashin gaskiya — a inda sanya farashi mai inganci a kan sakamakon zai buƙaci zato da babu wanda yake riƙe da shi da gaske
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Babi na 5, kan tantance zaɓuɓɓuka inda ba za a iya mayar da sakamako zuwa kuɗi cikin sauƙi ba). CEA ita ce hanyar da aka ari kai-tsaye daga tattalin arzikin kiwon lafiya — daidai take da yadda NICE ke kwatanta magunguna ta amfani da kuɗin kowace Shekarar Rayuwa Mai Daidaita Inganci (QALY) — amma ana amfani da ita ga shirye-shiryen jama'a marasa alaƙa da lafiya: shiga tsakani na ilimi ga kowane maki na sakamakon ɗalibi, shirye-shiryen gidaje ga kowane gida da aka hana rasa muhalli, shirye-shiryen aiki ga kowane sakamakon aiki mai ɗorewa.

Dalilin da ya sa CEA take da matsayinta tare da SCBA maimakon a haɗe ta ciki shi ne cewa tilasta ƙimar kuɗi a kan wasu sakamako yana samar da lamba mai daidaito isasshe don ya yi kama da hukuma kuma mai jayayya isasshe don ya zama mara amfani a muhawarar jama'a — sanya farashi a kan "yaro mai karatu a matakin da ake tsammani" yana gayyatar daidai irin ƙalubalen da ke lalata shawarar kasuwanci a kwamitin zaɓaɓɓu. CEA tana kauce wa jayayyar ta hanyar ƙin yin ta: tana jera zaɓuɓɓuka bisa kuɗin kowace naúrar *sakamakon kansa*, tana barin hukuncin siyasa dabam na ko sakamakon ya cancanci bi kwata-kwata ga shari'ar dabara.

## Lissafi

```
Ma'aunin ingancin kuɗi (matsakaici) = Jimillar kuɗi / Jimillar naúrorin sakamako da aka cimma

Ma'aunin ingancin kuɗi na ƙari (ICER), kwatanta zaɓi A da zaɓi B:
ICER = (Kuɗi_A − Kuɗi_B) / (Sakamako_A − Sakamako_B)

Tsari:
1. A kafa naúrar sakamako da hanyar auna a duk zaɓuɓɓukan da ake kwatantawa.
2. A ƙididdige kuɗin kowane zaɓi bisa tushe ɗaya (duba ../green-book-appraisal/, shari'ar kuɗi)
   a cikin tsawon lokaci ɗaya.
3. A yar da zaɓuɓɓukan da aka rinjaye: duk wani zaɓi da ke ci kuɗi fiye a kowace naúra
   fiye da mai rahusa da ke cimma sakamako iri ɗaya ko fiye ana yar da shi.
4. A jera sauran zaɓuɓɓuka bisa ma'aunin ingancin kuɗi na ƙari, ba na matsakaici ba.
```

CEA ita kaɗai ba za ta iya faɗin ko shirin ya cancanci kuɗi kwata-kwata ba — wanne ne kawai daga cikin hanyoyi da dama zuwa manufa ɗaya ya fi rahusa a kowace naúra. Yanke shawarar ko manufar kanta ta cancanci kashewa yana buƙatar ko dai komawa zuwa SCBA (idan ingantaccen ƙima ya wanzu) ko hukunci na siyasa/dabara a wajen lissafin. Inda ba za a iya rage sakamako zuwa naúra ɗaya da gaske ba — domin shirin yana samar da sakamako da dama da suke da muhimmanci ta hanyoyi daban-daban — a yi amfani da [nazarin yanke shawara na ma'auni da yawa](../nazarin-yanke-shawara-bisa-maauni-da-yawa/) maimakon.

## Misali aiki

**Karamar hukuma**: majalisa tana kwatanta hanyoyi uku na rage kwana a titi, kowanne an ƙididdige kuɗinsa a shekara ɗaya a kan sakamakon "mutanen da aka mayar da su zuwa wurin zama na dindindin na watanni 6+":

```
Zaɓi                            Kuɗi       Sakamakon da aka cimma   CER matsakaici
Housing First (mai zurfi)       £900,000   60                       £15,000/sakamako
Hostel + tallafin ci gaba       £600,000   50                       £12,000/sakamako
Outreach + gidajen haya masu zaman kansu £350,000  20               £17,500/sakamako

ICER, Hostel da Outreach:  (600k−350k)/(50−20) = £8,333 ga kowane ƙarin sakamako
ICER, Housing First da Hostel: (900k−600k)/(60−50) = £30,000 ga kowane ƙarin sakamako
```

Hostel ya rinjayi Outreach a kuɗin matsakaici, amma matakin *ƙari* daga Outreach zuwa Hostel yana ci £8,333 ne kawai ga kowane ƙarin mutum da aka sama wa gida — mai arha idan aka kwatanta da matakin Housing First, wanda ke ci £30,000 ga kowane ƙarin mutum bayan abin da Hostel ke cimmawa. Hukuma mai ƙuntataccen kasafi da ke faɗaɗawa ya kamata ta fi son faɗaɗa Hostel kafin Housing First, ko da Housing First yana kama da mafi kyau a ma'aunin matsakacinsa.

**Gwamnatin ƙasa**: ana kwatanta shirin kama-karatu na rubutu-da-karatu a samfuran isarwa uku bisa "kuɗin kowane ɗalibi da ya kai matakin karatu na shekarunsa": koyarwa ɗaya-da-ɗaya (£1,800/ɗalibi), koyarwa ta ƙaramin rukuni (£700/ɗalibi), da shiga tsakani na dijital kaɗai (£150/ɗalibi, amma kashi 40% kawai na yawan sakamakon koyarwar ƙaramin rukuni ga kowane ɗalibin da aka yi wa rajista bayan an gyara bisa faɗuwar sa hannu). Da zarar an gyara bisa ainihin kammalawa, dijital kaɗai yana ci £375 ga kowane ɗalibi da ya kai matakin — har yanzu mafi arha, amma CEA ba za ta iya faɗin ko ƙaramin adadin ɗaliban da dijital kaɗai ya taimaka, idan an isar a kasafi ɗaya da ƙaramin rukuni, abin karɓa ne a musanya da kaiwa ƙananan ɗalibai a zurfi mafi girma; wannan hukunci ne na rabo da CEA ke mayarwa ga masu yanke shawara.

## Alaƙa da injiniyancin manhaja

CEA ita ce madaidaicin tsari a duk lokacin da ƙungiyoyin injiniya ke tantance hanyoyin isarwa don *sakamakon hidima iri ɗaya* — kuɗin kowane ainihi da aka tabbatar cikin nasara a tsakanin masu sayarwa uku na tabbatar da ainihi, kuɗin kowace lamari da aka rarraba daidai a tsakanin ƙirar aikin atomatik biyu na shari'a, kuɗin kowane lahani na samun dama da aka warware a tsakanin gyara na cikin gida da na kwangila. Horon da take shigowa da shi kai-tsaye: a ayyana naúrar sakamako kafin kwatanta kuɗi (ba "tikitin da aka rufe" ba — abin da aka samar — sai dai "buƙatar mai amfani da aka warware da gaske"), kuma koyaushe a lissafta ma'aunin ƙari tsakanin tsarin da ke aiki da wanda aka ba da shawarar maye gurbinsa, ba matsakaicin kuɗin kowane tsari shi kaɗai ba. Duba [sakamako da abin da aka samar](../sakamako-da-fitarwa-bambancin-outcomes-da-outputs/) da [kuɗin kowane sakamako](../kuɗin-kowane-sakamako/).

## Tarkuna

- **Kwatanta ma'auni na matsakaici, ba na ƙari ba, lokacin yanke shawarar faɗaɗawa.** Kamar yadda misalin kwana a titi ya nuna, zaɓin da ke da mafi kyawun ma'aunin matsakaici ba koyaushe shi ne naúrar sakamako ta gaba mafi arha da za a saya ba.
- **Zaɓar naúrar sakamako da ainihi abin da aka samar ne.** "Mika da aka yi" ko "zaman da aka isar" suna auna aiki, ba sakamakon da shirin ke wanzuwa don samarwa ba; CEA kan abin da aka samar tana samar da lamba mai kama da tabbaci da ke amsa tambayar da ba ta dace ba.
- **Kwatanta tsakanin sakamako daban-daban da gaske.** CEA tana da inganci ne kawai idan kowane zaɓi yana nufin sakamako iri ɗaya da aka auna iri ɗaya; kwatanta "kuɗin kowane mai kwana a titi da aka sama wa gida" da "kuɗin kowane matashin da ya bar kulawa a haya mai ɗorewa" yana buƙatar ma'aunin sakamako na gama-gari ko [nazarin yanke shawara na ma'auni da yawa](../nazarin-yanke-shawara-bisa-maauni-da-yawa/), ba CEA ba.
- **Yin watsi da dorewar sakamako.** Zaɓi mai rahusa da ke samar da sakamakon da ba ya dawwama (ɗalibin da ya koma baya bayan shiga tsakani ya ƙare) ba shi da ingancin kuɗi fiye da haka idan aka auna a tsawon lokaci mai kama da juna; a daidaita lokacin biyo-baya a tsakanin zaɓuɓɓukan da ake kwatantawa.

## Majiyoyi

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  hanyar ingancin kuɗi da wannan daidaitawar gwamnati ta ari daga gare ta.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
