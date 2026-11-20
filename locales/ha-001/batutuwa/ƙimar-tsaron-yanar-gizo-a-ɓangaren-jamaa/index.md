# Ƙimar Tsaron Yanar Gizo a Ɓangaren Jama'a (Public Sector Cybersecurity Value)

Ƙimar tsaron yanar gizo a ɓangaren jama'a fanni ne na ƙididdige farashin rage haɗari: nawa ne darajar rage yiwuwar ɓarnar bayanan 'yan ƙasa, idan aka yi la'akari da cewa kashe kuɗi a tsaro ba ya samar da fitarwa mai gani idan yana aiki, kuma yana samar da mai bayyananne sosai idan ya gaza? Ga hidimar da ke riƙe da bayanan tallafi, bayanan lafiya, ko bayanan haraji, wannan siffa ta "ba a gani idan yana aiki" ita ce ainihin dalilin da yake buƙatar hujja ta ƙima a fili, ba kawai alamar bin ƙa'ida ba.

## Dalilin da ya sa yake da muhimmanci

Cyber Assessment Framework (CAF) na National Cyber Security Centre na Birtaniya yana ba ƙungiyoyin ɓangaren jama'a hanya mai tsari ta mayar da tsaro fanni da za a iya kimantawa bisa sakamako maimakon jerin dubawa: yana ayyana manyan manufofi huɗu (sarrafa haɗarin tsaro, kariya daga harin yanar gizo, gano al'amuran tsaron yanar gizo, da rage tasirin abubuwan da suka faru) da aka raba su zuwa sakamako masu bayar da gudummawa da za a iya kimanta mai tsarin a kansu, a ruhi ɗaya da batu na 9 na [ma'aunin hidimar dijital (digital-service-standard)](../maaunin-hidimar-dijital/) ("ƙirƙiri hidima mai tsaro da ke kare sirrin masu amfani"). Abin da kimantawar CAF ke karewa daga gare shi yana da farashi da aka rubuta: rahoton IBM na Cost of a Data Breach yana bin diddigin matsakaicin kuɗin ɓarna bisa fanni, kuma ya sami ɓangaren jama'a a ƙarshen ƙasa na kewayon idan aka kwatanta da kuɗi ko lafiya — bugu na kwanan nan sun sanya matsakaicin ɓangaren jama'a kusan $2.6–2.9 miliyan ga kowace ɓarna — amma "ƙasa da kuɗi" ba "ƙanƙanta" ba ne, kuma ɓarnar gwamnati tana ɗauke da kuɗaɗen da adadin rahoton bai kama cikakke ba: asarar amanar 'yan ƙasa a hanyoyin dijital, wanda ke rage [karɓar dijital (digital take-up)](../tanadin-sauya-hanyar-hidima/) da takardun shaidar kasuwanci na sauya hanya suka dogara da shi, da kuɗin siyasa da na doka na fallasa bayanan da gwamnati ta tilasta wa 'yan ƙasa su ba ta tun farko.

## Lissafi

Ana ƙididdige zuba jari a tsaro kamar yadda ake ƙididdige duk wani kashe kuɗi na rage haɗari: a matsayin raguwar asarar da ake tsammani, ta amfani da sanannen daidaiton sarrafa haɗari.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## Misali aiki

**Tsarin sarrafa shari'o'i na majalisar gundumar da ke riƙe da bayanan kulawar zamantakewa na mazauna 40,000**:

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## Alaƙa da injiniyancin manhaja

Injiniyoyi suna mallakar yawancin maɓallan lissafin ALE: tsarin sarrafa shiga, tsaftar dogaro da faci, ɗaukar rajista da ganowa, da kayan aikin amsa abubuwan da suka faru duk suna motsa kalmar ARO kai tsaye, shi ya sa kimantawar CAF take kama da nazarin tsarin gine-gine na fasaha kamar yadda take kama da binciken manufofi. Wannan [bashin fasaha a matsayin zaizayar ƙimar jama'a (technical-debt-as-public-value-erosion)](../bashin-fasaha-a-matsayin-zaizayar-ƙimar-jamaa/) ne a mafi tsananinsa — tsare-tsaren da ba a yi musu faci ba, ba a sa musu ido ba, kuma ba a sarrafa shigarsu da kyau ba bashi ne wanda ruwansa haɗarin wutsiya ne, ba tsayayyen nauyi ba — kuma ya kamata a daidaita shi da [jimillar kuɗin mallaka a IT na gwamnati (total-cost-of-ownership-in-government-it)](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/) don kada a ɗauki kashe kuɗin tsaro dabam da ainihin kuɗin tafiyar da tsarin. Hakanan shigarwa ce kai tsaye ga kimantawar [ƙimar kuɗi (value-for-money)](../ƙimar-da-aka-samu-daidai-da-kuɗi/) ƙarƙashin Green Book: kuɗin da aka daidaita da haɗari wani ɓangare ne na ɓangaren "kuɗi" na kowane kimanta zaɓuɓɓuka, ba abin da aka ƙara a ƙarshe ba.

## Tarkuna

- **Ɗaukar kimanta kai na CAF a matsayin tsaro kansa**: kimantawar da aka kammala tana kwatanta yanayin tsaro; ba ta ƙirƙirar shi — ƙimar tana cikin sakamakon da aka cimma, ba takardar ba.
- **Amfani da matsakaicin kuɗin ɓarna na duniya a matsayin ƙiyasin gida ba tare da daidaitawa ba**: adadin IBM matsakaici ne a manyan samfura daban-daban; ainihin asarar da ake tsammani ta ƙaramar hukuma da wuya ta yi daidai da ta ma'aikatar gwamnati ta ƙasa.
- **Watsi da ilimin halin ɗan adam game da haɗarin wutsiya a yanke shawarar zuba jari**: ƙarancin yiwuwar shekara yana sa jinkirta kashe kuɗin tsaro ya zama mai sauƙi har abada, har zuwa shekarar da ba haka ba — gwada ji-da-sauyin lissafin ALE a kan kewayon ARO, kamar a misalin aiki, yana magance wannan.
- **Ƙirga kuɗin ɓarna irin na IBM kawai, ba kuɗin amana ba**: ɓarnar da ke rage son 'yan ƙasa na amfani da hanyoyin dijital tana zaizaye [tanadin sauya hanya (channel-shift-savings)](../tanadin-sauya-hanyar-hidima/) tsawon shekaru bayan haka, kuɗin da da wuya a saka a ƙiyasin kuɗin ɓarna.

## Majiyoyi

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
