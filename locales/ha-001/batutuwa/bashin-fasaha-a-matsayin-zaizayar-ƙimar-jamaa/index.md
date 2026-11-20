# Bashin Fasaha a Matsayin Zaizayar Ƙimar Jama'a

Bashin fasaha (technical debt) misali ne na Ward Cunningham na 1992 game da kuɗin da ake bin nan gaba sakamakon shawarwarin rubuta lamba na gaggawa na baya: **ainihin bashi** (principal, aikin gyara da ake bi) da **ruwa** (interest, jan baya da yake yi wa isarwa kullum). A tsohon tsarin IT na gwamnati, ana biyan wannan ruwa kai tsaye daga ƙimar jama'a — jinkirin isar da sauye-sauyen doka, yawan gazawar ayyukan da 'yan ƙasa ke amfani da su, da raguwar adadin mutanen da za su iya taɓa tsarin lafiya.

## Dalilin da ya sa yake da muhimmanci

Tsoffin tsarin mainframe da na zamanin COBOL a ma'aikatun gwamnatin Birtaniya — HMRC da DWP cikin waɗanda aka fi ambata — suna ɗauke da haɗari da aka rubuta da kyau kuma yana ƙaruwa wanda National Audit Office ta yi gargaɗi a kai akai-akai, ciki har da a rahotonta *Digital Transformation in Government* (<https://www.nao.org.uk/>): tsoffin dandamali masu tsadar sauyawa, masu ƙara wahalar tsaro, kuma masu dogaro da ma'aikata na musamman da ke yin ritaya da sauri fiye da yadda ake maye gurbinsu. Ba kamar jerin ayyukan da ake jira na kamfani ba, wannan bashi yana tsakanin 'yan ƙasa da haƙƙoƙinsu na doka kai tsaye — injin lissafin tallafi da ba za a iya sauya shi lafiya ba cikas ne ga isar da manufa, ba wahalar injiniya kaɗai ba. Sake farawar shirin IT na Universal Credit a 2013, lokacin da National Audit Office ta gano cewa ainihin ginin ba zai isar da ƙimar da aka samu daidai da kuɗi ba kuma dole ne a soke wani babban ɓangare na kadarar manhajar, misali ne na asali na bashin fasaha da ba a ba shi farashi ba wanda ya riski shirin jama'a mai gudana wanda ministoci ke gani a fili.

## Lissafi

```
SQALE principal = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ citizen-facing incident rate × cost per incident
                + specialist-skills premium × affected headcount
Paydown case = PV(interest avoided over horizon) − remediation cost
               (discounted at the Green Book social discount rate, see
               social-discount-rate.md)
```

Ainihin bashi yana bayyana abin da ake bi; ruwa shi ne abin da ke yin shari'ar zuba jari ga kwamitin asusun jama'a.

## Misali aiki

Injin sarrafa da'awa mai layukan lamba 250,000 da aka rubuta a tsohon 4GL. Ta amfani da ma'aunin CAST Appmarq na kusan $3.61 na ainihin bashin fasaha a kowane layin lamba (≈£2.85 a canji na yau da kullum):

```
Principal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (grade C)
```

Ruwan da aka auna: ma'aikatar tana riƙe ƙwararrun ƴan kwangila uku a ƙarin 40% na kuɗin rana fiye da na manyan injiniyoyi na yau da kullum saboda ƙwarewar cikin gida ta ragu — ƙarin £180,000/shekara a ƙungiyar mutum shida. Tsarin kuma yana jawo tsayawar sarrafawa manya guda huɗu a kowace shekara, kowanne yana dakatar da shawarwari ga kusan masu da'awa 5,000 kuma yana tura su zuwa cibiyar tuntuɓa a kusan £25/kira:

```
Interest ≈ £180,000 (skills premium)
         + 4 × 5,000 × £25 = £500,000 (redirected-contact cost)
         ≈ £680,000/year
```

Gyaran da aka nufa na ɓangarorin da suka fi muni yana kashe £1,200,000 kuma an ƙirƙiri samfurin cewa zai rage ruwa da 70%:

```
Interest reduction = 0.70 × 680,000 = £476,000/year
Payback ≈ 1,200,000 / 476,000 ≈ 2.5 years
```

Nufin yana da muhimmanci: gyaran lamba da ba a taɓa ta ba yana saye da komai, domin ruwa yana taruwa inda yawan sauyi da yawan bashi suka kai kololuwa.

## Alaƙa da injiniyancin manhaja

Tsarin ƙimar jama'a da ke ɗaga shari'ar bashin fasaha fiye da "lambar ta tsufa": a bayyana tsohon tsarin a matsayin jerin inda ƙarfin isarwa da aka rasa yake taruwa, a haɗa shi a fili da [jimillar kuɗin mallaka](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/), domin ruwa kuɗin gudanarwa ne wanda ya cancanci shiga layin TCO ko da kuɗi bai taɓa neman hakan ba. Tsarin masu nauyin bashi kuma suna ɗauke da fallasa [tsaron intanet](../ƙimar-tsaron-yanar-gizo-a-ɓangaren-jamaa/) fiye da kima, domin saurin yin gyaran tsaro da yawan bashi suna da alaƙa — tsohon tsarin da ba za a iya yi masa gyaran tsaro ba bashin fasaha ne wanda ake biyan ruwansa da haɗarin aukuwar matsala maimakon fam. Kuma kowane musayar gyara-da-sabon-fasali shawara ce ta [kuɗin jinkiri (cost-of-delay)](../kuɗin-jinkiri-a-shirye-shiryen-jamaa/): biyan bashi yana jinkirta sauyin doka na gaba, wanda yake da CoD nasa wanda dole a auna shi da ruwan da aka ceto.

## Tarkuna

- **Bayar da rahoton ainihin bashi kaɗai**: ƙiyasin gyara babba mai ban tsoro ba tare da lambar ruwa ba ba ya tabbatar da komai ga mai amincewa da kashe kuɗi.
- **Ɗaukar lambobin bashi da kayan aiki suka samar a zahiri**: na'urorin duba irin na SQALE suna ƙirga take dokoki; suna rasa bashi mai tsada — shawarwarin gine-gine da ƙa'idodin kasuwanci na tsohon tsari da ba a rubuta ba — yayin da suke yi wa ƙananan abubuwa tuta.
- **"Sake rubutawa yana kauce wa duka"**: shirye-shiryen maye gurbi dole su cika irin horon kowace shari'ar kasuwanci — kuɗin yanayin da ba tare da shiri ba, yiwuwar nasara, da rage ƙima — ba su zama keɓantattu ba, kamar yadda sake farawar Universal Credit na 2013 ya nuna.
- **Mafarkin bashi sifili**: matakin bashi mafi dacewa ba sifili ba ne; bashi shi ne ƙarfin da ya saya isarwa da wuri. Tambayar da ke raye koyaushe ita ce kason ruwa, ba ko bashi yana wanzuwa ba.

## Majiyoyi

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
