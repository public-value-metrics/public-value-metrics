# Nazarin Yanke Shawara Bisa Ma'auni Da Yawa (MCDA)

Nazarin yanke shawara bisa ma'auni da yawa (MCDA) yana ba da maki ga zaɓuɓɓuka kuma yana auna su a kan ma'auni daban-daban masu nauyi dabam-dabam a lokaci guda, don samar da kwatancen da aka jera su a matsayi ba tare da tilasta kowane ma'auni cikin ma'aunin kuɗi ɗaya ko na naúrar halitta ɗaya ba. Hanya ce ta kimanta zaɓuɓɓuka a lokacin yanke shawarar da sakamakon da ke da muhimmanci ba za a iya rage su zuwa lamba ɗaya ba.

## Dalilin da ya sa yake da muhimmanci

Littafin Green Book ya amince a fili da MCDA (ƙarin bayanin Box 2 na nazarin shari'o'i da Annex A duk sun tattauna shi kai tsaye) a kimanta zaɓuka da alfanun su "ba za a iya kwatanta su da juna ba" — inda sauya komai zuwa kuɗi ta hanyar [nazarin kuɗi da alfanu na zamantakewa (social cost-benefit analysis)](../nazarin-kuɗi-da-amfani-na-zamantakewa/), ko zuwa sakamako ɗaya ta hanyar [nazarin ingancin kuɗi (cost-effectiveness analysis)](../nazarin-ingancin-kuɗi-a-gwamnati/), zai karkatar da yanke shawarar maimakon ya fayyace ta (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Misali, zaɓar wurin gina sabon kurkuku yana auna kuɗin gini a gaban tasiri ga al'umma, haɗin sufuri, tasirin muhalli, da yiwuwar ɗaukar ma'aikata — ma'auni da ba su da naúra ɗaya, kuma tilasta musu naúra ɗaya (yawanci kuɗi) zai ɓoye hukuncin ƙima game da muhimmancin tasirin muhalli a gaban kuɗi, a ɗora masa lissafin da ake ganin na gaskiya ne.

Gaskiyar MCDA ita ce kuma babbar rauninsa: saboda duk wanda ke gudanar da kimantawar (ko wani kwamiti) shi ne ke ba da nauyin ma'auni, hanyar tana da halacci ne kawai gwargwadon yadda aka yi aikin ba da nauyi. Jagorar Green Book ta bayyana cewa dole ne a amince da ma'auni da nauyinsu a kuma wallafa su *kafin* a ba zaɓuɓɓuka maki, daidai don hana mai bita ya yi aiki a baya daga zaɓin da yake so zuwa nauyin da ke tabbatar da shi.

## Lissafi

```
For each option i and criterion j:
  Score_ij   = the option's performance against that criterion (often 0-100
               or 1-10, from evidence, expert judgement, or stakeholder scoring)
  Weight_j   = relative importance of criterion j, weights sum to 1 (or 100)

Weighted score of option i = Σ_j (Score_ij × Weight_j)

Procedure:
1. Agree the criteria set and weights BEFORE scoring any option (swing
   weighting or pairwise comparison, e.g. AHP, are common elicitation methods).
2. Score every option against every criterion on a common scale, from
   evidence where possible.
3. Compute weighted totals; rank options.
4. Sensitivity-test the weights: does the ranking survive plausible
   disagreement about how much each criterion should matter?
```

MCDA ba ya samar da ƙima cikakkiya da za a iya kare ta kamar yadda ƙimar yanzu ta ribar SCBA (net present value) take yi — yana samar da jerin matsayi ne kawai bisa nauyin da aka amince da shi. Wannan fa'ida ce idan shawarar tana game da auna kayayyaki marasa kwatanci da juna, kuma nakasa ce idan aka yi amfani da shi don kauce wa aiki mai wahala na mayar da abu zuwa kuɗi inda hakan ke yiwuwa a zahiri.

## Misali aiki

**Ƙaramar hukuma**: majalisa da ke zaɓar wuri don sabuwar cibiyar sake sarrafa shara ta gidaje tana ba wurare uku maki a kan ma'auni huɗu, wanda kwamitin sassa daban-daban ya ba su nauyi kafin duk wata ziyarar wuri:

```
Criteria (weight):        Capital cost (30%)  Transport access (25%)
                           Community impact (25%)  Environmental impact (20%)

Site scores (0-100, higher = better):
Site A: cost 80, access 60, community 40, environment 70
Site B: cost 60, access 90, community 70, environment 50
Site C: cost 90, access 50, community 80, environment 60

Weighted totals:
Site A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Site B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Site C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Wuri C ne ke kan gaba. Gwajin ji-da-sauyi (sensitivity) da ke ƙara nauyin tasirin al'umma daga 25% zuwa 35% (ana cire maki 10 daga kuɗin gini) yana sa jimillar Wuri C ta zama 71.5 − 3 + 8 = 76.5 Wuri B kuma 68 − 6 + 7 = 69 — Wuri C yana nan a kan gaba, don haka jerin matsayin yana jure wannan sabanin ra'ayi mai yiwuwa game da nauyi, wanda shi ne ainihin binciken da Green Book ke tsammanin a ga an bayar da rahoton sa.

**Ƙungiyar agaji**: gidauniyar bayar da tallafi da ke zaɓa tsakanin tallafa wa hidimar shawara kan basussuka, cibiyar sadarwar bankunan abinci, da shirin ilimin kuɗi tana amfani da MCDA maimakon SROI (duba [ribar zamantakewa a kan jari (social return on investment)](../ribar-zamantakewa-daga-zuba-jari/)) daidai saboda amintattunta suna da sabani, da kyakkyawar niyya, kan ko agajin gaggawa ko rigakafi ya fi nauyi — MCDA yana ba su damar amincewa da *siffar* sabanin (kewayon nauyi) maimakon su yi riya cewa ma'aunin SROI ɗaya zai warware shi.

## Alaƙa da injiniyancin manhaja

MCDA shi ne kayan aiki na halitta don zaɓar mai sayarwa da tsarin gine-gine lokacin da ma'auni ke cin karo da juna da gaske — zaɓa tsakanin tsarin sarrafa shari'o'i da ke kan gajimare da na cikin gida yana auna kuɗi, haɗarin mallakar bayanai a ƙasa, samun dama, da saurin isarwa ta hanyoyin da ba za a iya rage su zuwa lamba ɗaya ba. Ya kamata shugabannin injiniya su dage a yi aikin nauyi kafin a ba zaɓuɓɓuka maki, daidai yadda Green Book ke buƙata, saboda aikin nauyi da aka yi bayan an ga jerin zaɓaɓɓun yana karkata kullum zuwa zaɓin da ɗakin ya riga ya fi so. Duba [gina ko saya a gwamnati](../gina-ko-saya-a-gwamnati/) don wani amfani na MCDA da aka saba, da [katin kimanta ƙimar jama'a (public value scorecard)](../katin-kimanta-ƙimar-jamaa/) don kayan aikin ba da maki mai tsari da ke da alaƙa wanda ake amfani da shi bayan yanke shawara, ba kafin ba.

## Tarkuna

- **Ba da nauyi bayan an ga zaɓuɓɓuka.** Wannan ita ce hanya mafi yawa da ake murɗa MCDA, da gangan ko ba da gangan ba; a wallafa nauyi kafin a ba maki, a rubuta wanda ya ba da su.
- **Ɗaukar jimillar da aka auna a matsayin lamba tabbatacciya.** Maki 71.5 a gaban 68 ba bambanci ne mai ma'ana a ƙididdiga ba sai dai idan nazarin ji-da-sauyi ya tabbatar da cewa jerin matsayin yana tsayayye; a bayar da rahoton kewayo, ba daidaito na ƙarya ba.
- **Amfani da MCDA don kauce wa mayar da abu zuwa kuɗi inda hakan ke yiwuwa.** Idan yawancin ma'auni za a iya yi musu farashi mai inganci, komawa kan MCDA maimakon [SCBA](../nazarin-kuɗi-da-amfani-na-zamantakewa/) yana watsar da bayanin da kimantawar za ta iya amfani da shi.
- **Barin babban mai ruwa-da-tsaki ɗaya ya ba da dukkan nauyi shi kaɗai.** Kyakkyawan aiki a Green Book yana tsammanin a samo nauyi daga kwamiti wakilci, ba daga daraktan da ke ɗaukar nauyin shirin ba, don kimantawar kada ta sake samar da abin da wannan mutumin ya riga ya so.

## Majiyoyi

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
