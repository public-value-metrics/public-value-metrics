# Manyan Alamomin Aiki na Ɓangaren Jama'a (Public Sector KPIs)

Babbar alamar aiki (key performance indicator, KPI) ma'auni ne da aka zaɓa kuma ake bin diddigi wanda ke maye gurbin ko hidimar jama'a tana yin aikinta da kyau. A gwamnati zaɓin KPI ba ya taɓa zama na tsaka-tsaki: saboda KPI suna haɗe da kasafin kuɗi, jerin matsayi, da sana'o'i, aikin zaɓar ɗaya yana siffanta halayen duk wanda ke ƙasa da shi, sau da yawa fiye da manufar da ta ƙirƙiri hidimar.

## Dalilin da ya sa yake da muhimmanci

Lura da Charles Goodhart na 1975 kan manufofin kuɗi — daga baya Marilyn Strathern ta yaɗa shi a matsayin "idan ma'auni ya zama manufa, ya daina zama ma'auni mai kyau" — shi ne mafi muhimmin lakabin gargaɗi a sarrafa aikin ɓangaren jama'a. KPI da aka zaɓa don *kwatanta* tsari yana fara *murɗa* wannan tsari a lokacin da aka haɗa albarkatu, albashi, ko rayuwar siyasa da shi. Misalin da aka sani shi ne lokutan amsa motar asibiti na NHS: lokacin da manufar amsawa ta mintuna takwas ta Category A ta zama dole, an nuna wasu trusts sun "tara" motocin asibiti a bayan agogon lokacin amsa, ko sake rarraba kiraye-kiraye, don cimma lambar ba tare da sauya sakamakon marasa lafiya ba. Jagorar National Audit Office ta Birtaniya kan zaɓa da amfani da alamomin aiki — da aka bayyana a rahotannin ƙimar kuɗi da kuma tsarin "Performance Measurement by Regulators" da "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — ta wanzu daidai saboda ma'aikatu sun ci gaba da zaɓar alamomin da ke da sauƙin bayar da rahoto maimakon alamomin da ke da wuyar murɗawa. Injiniyan software da ya kai allon bayanai da minista ko darakta za a yi masa hukunci a kai, ko yana so ko bai so ba, yana tsara tsarin ƙwarin gwiwa na cibiyar jama'a.

## Lissafi

Tsara KPI batu ne mai siffar tsari, amma *kimanta* KPI ɗan takara jerin dubawa ne mai maimaituwa, ba dabara ba:

```
For each candidate KPI, score against:
  Fit for purpose  — does it measure the outcome, or a proxy several steps removed?
  Appropriate      — does it belong to the people who can actually influence it?
  Balanced         — is it paired with a counter-metric that catches gaming?
  Robust           — can it survive audit, or is it self-reported and unverifiable?
  Integrated       — does it fit the wider set, or push against another KPI?
  Cost-effective   — does collecting it cost more than the decision it informs?

Leading vs lagging split:
  Leading indicator  → predicts future outcome, but often gameable (e.g. calls answered <60s)
  Lagging indicator  → confirms the outcome happened, but arrives too late to steer (e.g. annual
                        satisfaction survey)
  A defensible KPI set pairs at least one of each per objective.
```

## Misali aiki

**Trust na motar asibiti**: trust yana bayar da rahoton KPI na lokacin amsa na Category A (barazanar rai) na "75% na kiraye-kirayen an amsa a cikin mintuna 8." A kwata ɗaya, kiraye-kirayen Category A 6,000 sun shigo; 4,500 an cika su cikin mintuna 8, wanda ke ba da 75.0% — da alama a kan manufa.

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (meets the 75% threshold)
```

Amma binciken Goodhart yana ƙara ma'aunin hamayya: matsakaicin lokacin amsa na kashi 10% mafi jinkiri na kiraye-kirayen.

```
Slowest decile mean response = 34 minutes (up from 19 minutes two years earlier)
```

Trust yana cimma manufar yayin da wutsiyar — kiraye-kirayen da suka fi yiwuwar zama barazanar rai da gaske idan tantancewa ba cikakke ba ne — ta ƙara muni sosai, domin ana ba ma'aikata fifiko ga kiraye-kirayen da ke kusa da bakin mintuna 8 maimakon gaggawar asibiti. KPI ɗaya ya faɗi labarin ƙarya; KPI biyu da aka haɗa sun faɗi na gaskiya.

## Alaƙa da injiniyancin manhaja

Injiniyoyin da ke gina allon bayanai na aiki na gwamnati, a aikace, suna tsara API na ƙwarin gwiwa na ƙungiyar. Abubuwan da suka biyo baya: a auna *ƙasan lissafi (denominator)* da tsanani daidai da *sama (numerator)* (KPI da aka ba da rahoto a matsayin kashi kaɗai yana gayyatar murɗa ƙasan lissafi — duba [kuɗi ga kowace mu'amala (cost-per-transaction)](../kuɗin-kowace-maamala/) don tarkon iri ɗaya a hidimomin dijital); a gina ma'aunan hamayya a allon bayanai ɗaya maimakon rahoto dabam da babu wanda ke karantawa, don murɗa ya bayyana a wurin yanke shawara; kuma a bayar da juzu'i ga ma'anar KPI, domin sake ayyana shiru (canza abin da ake ƙirga a matsayin "kira," "shari'a," ko "kammalawa") daidai yake da canza manufa ba tare da sanarwa ba. [Katin kimanta ƙimar jama'a (public value scorecard)](../katin-kimanta-ƙimar-jamaa/) hanya ɗaya ce mai tsari ta hana a karanta KPI ɗaya shi kaɗai, kuma [alhaki bisa sakamako (outcomes-based accountability)](../alhaki-bisa-sakamako/) fanni ne na zaɓar KPI na matakin al'umma da ƙungiya ɗaya ba za ta iya murɗawa ita kaɗai ba.

## Tarkuna

- **Zaɓar ma'aunin da ke da sauƙin tattarawa maimakon mai ma'ana**: lokacin amsa kira yana da sauƙin yin rajista; ko kiran ya warware matsalar ɗan ƙasa ba haka ba ne — amma na biyun ne kaɗai sakamako. A guji komawa kan abin da tsarin ke fitarwa tuni.
- **Rashin ma'aunin hamayya**: kowane KPI da ke haɗe da kuɗi ko suna za a murɗa shi a gefe; a fitar da shi tare da ma'aunin da aka haɗa da ke kama yiwuwar hanyar murɗawa kafin a wallafa shi.
- **Sake ayyana ma'auni ba tare da bayanin canje-canje ba**: musanya "kiraye-kirayen da aka karɓa" da "kiraye-kirayen da aka amsa" don yabon yanayi yana lalata amincin jerin lokaci a lokacin da aka gano — a koyaushe a wallafa bayanin canje-canjen ma'anoni tare da lambobin.
- **Rikita aiki da sakamako**: ƙirga binciken da aka kammala fitarwa ce; ƙirga wuraren da aka kawo wa ƙa'ida ya fi kusa da sakamako (duba [sakamako da fitarwa](../sakamako-da-fitarwa-bambancin-outcomes-da-outputs/)).

## Majiyoyi

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
