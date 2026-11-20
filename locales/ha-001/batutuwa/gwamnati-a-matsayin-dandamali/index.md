# Gwamnati a Matsayin Dandamali (GaaP)

Gwamnati a matsayin dandamali (Government as a Platform) dabara ce ta gina abubuwan haɗin gwiwa da za a sake amfani da su — hidimar sanarwa, hidimar biyan kuɗi, hidimar tantance ainihi — sau ɗaya, a tsakiya, domin ɗaruruwan hidimomin gwamnati daban-daban su yi amfani da su maimakon kowacce ta gina nata. Tana sake tsara kayayyakin dijital na jama'a a matsayin matsalar tattalin arzikin dandamali: ƙimar ba ta cikin wata haɗin kai guda ɗaya ba, tana cikin kuɗin ƙarshe na ƙungiyar *ta gaba* da za ta karɓe shi yana kusantar sifili.

## Dalilin da ya sa yake da muhimmanci

GDS ya tsara dabarar bisa ƙa'ida a cikin wallafar sa ta 2015 "Government as a Platform," yana hujjar cewa gwamnati ta kasance tana gina iyawa iri ɗaya — karɓar biyan kuɗi, sanar da mai amfani, tantance ainihi, neman adireshi — dabam a hidima bayan hidima, kowacce tana ɗaukar nauyin sayayyarta, tantance tsaro, da goyon baya mai ci gaba. Madadin shi ne ƙananan dandamali na haɗin gwiwa, da aka gina a matsayi mai girma sau ɗaya kuma aka sake amfani da su a ko'ina: GOV.UK Notify don aika imel, saƙonnin rubutu da wasiƙu, GOV.UK Pay don karɓar biyan kuɗi ta intanet, da GOV.UK One Login (magajin shirin tantance ainihi na GOV.UK Verify na farko) don tantance ainihi. Girman da waɗannan dandamali suka kai shi ne mafi bayyanannen shaidar cewa dabarar ta yi aiki: GOV.UK Pay ya sarrafa mu'amaloli sama da £10 billion a kusan hidimomi 1,800 — kuma inda ya ɗauki kusan shekaru huɗu don sarrafa £1 billion na farko, yanzu yana sarrafa wannan adadi cikin kusan watanni biyar — yayin da GOV.UK Notify ya aika saƙonni sama da biliyan 9 a madadin ƙungiyoyin gwamnati sama da 1,500. Kowace hidima da ta karɓe su ta guje wa ginawa, tabbatar da tsaro da kula da nata ƙofar biyan kuɗi ko bututun saƙo.

## Lissafi

```
Build cost per service (no platform) = N services × cost to build,
  secure-assess, and run one payment/notification/identity system

Platform cost = fixed platform build cost
              + marginal cost per adopting service (integration,
                configuration, ongoing platform-team support)

Reuse breaks even once:
  platform build cost < N × (per-service build cost − marginal
  integration cost)

For a mature platform, marginal cost per additional adopter approaches
the transaction/message fee alone — the fixed cost is amortized across
the whole government estate, not one department's budget, which is
why GaaP components are usually funded centrally rather than charged
at full cost-recovery to early adopters.
```

## Misali aiki

**Ƙaramar hukuma da ta karɓi GOV.UK Pay maimakon gina ƙofar biyan kuɗi**:

```
Build-your-own estimate:
  PCI-DSS compliance work + integration + ongoing maintenance
  ≈ £85,000 build + £22,000/year maintenance

GOV.UK Pay adoption:
  Integration effort ≈ £12,000 (developer time)
  Transaction fees: government-to-citizen card payments typically
  charged at a small percentage + fixed fee per transaction, no
  separate PCI-DSS burden carried by the council
  ≈ £12,000 one-off, ongoing cost variable with volume, not fixed

First-year saving ≈ £85,000 − £12,000 = £73,000, before counting the
avoided £22,000/year maintenance and the avoided compliance risk of
holding card data in a council-run system at all — this second
category is the security value covered in
public-sector-cybersecurity-value.
```

Faɗaɗa wannan £73,000 a kan kusan hidimomi 1,800 da yanzu ke amfani da GOV.UK Pay kuma jimillar kuɗin ginawa da aka guje wa a fadin gwamnati yana cikin ɗaruruwan miliyoyi — tattalin arzikin dandamali, ba wata haɗin kai ɗaya ba, shi ne inda ƙimar dabarar take.

## Alaƙa da injiniyancin manhaja

Gwamnati a matsayin dandamali hujja ce kai tsaye ga [gina ko saya a gwamnati](../gina-ko-saya-a-gwamnati/): idan akwai abin haɗin gwiwa da aka tantance, mai gudanarwa mai kyau, gina na musamman makamancinsa da wuya ya zama mafi kyawun zaɓi na [ƙimar kuɗi](../ƙimar-da-aka-samu-daidai-da-kuɗi/), kuma yana faɗuwa a ƙa'ida ta 13 ta [Ma'aunin Hidimar Dijital](../maaunin-hidimar-dijital/) ("yi amfani da kuma ba da gudummawa ga buɗaɗɗun ma'auni, abubuwan haɗin gwiwa da tsare-tsare") kusan ta hanyar ma'ana. Haka kuma yana canza siffar [jimillar kuɗin mallaka a fasahar sadarwa ta gwamnati](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/): karɓar dandamali yana musanya babban layin jari da kulawa da ƙaramin kuɗin aiki mai alaƙa da amfani, wanda ya fi sauƙin hasashe kuma ya fi sauƙin dakatar da kuɗinsa idan aka rufe hidima. Sake amfani da abubuwa a buɗe yana da dan uwa a [ƙimar buɗaɗɗun bayanai](../ƙimar-buɗaɗɗen-bayanai/) — duka dabaru ne na ɗaukar abin da gwamnati ke samarwa sau ɗaya a matsayin kayayyakin haɗin gwiwa maimakon kadarar ma'aikata.

## Tarkuna

- **Sake ginawa a ɓoye**: ƙungiyoyi suna gina nasu haɗin biyan kuɗi ko sanarwa a shiru saboda tsarin shigar da dandamali ya fi jinkiri fiye da yin da kansu — matsalar gogayyar shugabanci ce, ba ta fasaha ba, kuma tana lalata tattalin arzikin sake amfani da dukan dabarar ke dogaro da shi a shiru.
- **Ƙarancin kuɗin ƙungiyar dandamali idan aka kwatanta da ƙimar da take ƙirƙira**: ƙimar tana tarawa ga ma'aikatun da ke amfani yayin da kuɗin ke zaune a ƙungiyar dandamali, yana haifar da haɗarin rashin isasshen zuba jari na dogon lokaci sai dai idan an tsakiyar da kuɗin kuma aka kare shi — wani nau'in masifar kadarorin gama gari.
- **Auna nasarar dandamali da amfani kaɗai**: lambobin karɓa (hidimomin da aka shigar, saƙonnin da aka aika) alamar gaba ne, ba hujjar ƙima ba; ainihin gwajin shi ne lissafin kuɗin ginawa da aka guje wa da haɗarin da aka guje wa na sama.
- **Ɗaukar "dandamali" a matsayin daidai da "monolith"**: abubuwan GaaP suna samun nasara domin kowanne yana yin abu ɗaya da kyau tare da kunkuntar ƙirar mu'amala mai tsayayye — haɗa iyawa marasa alaƙa cikin "dandamali" ɗaya yana sake ƙirƙirar matsalar gina na musamman a wani ma'auni dabam.

## Majiyoyi

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
