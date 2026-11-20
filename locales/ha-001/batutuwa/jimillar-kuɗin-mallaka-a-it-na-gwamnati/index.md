# Jimillar Kuɗin Mallaka (TCO) a IT na Gwamnati

Jimillar kuɗin mallaka (total cost of ownership) shi ne cikakken kuɗin tsawon rayuwar tsari — kuɗin saye tare da kowace shekara ta gudanar da shi — wanda aka rage ƙimarsa zuwa kwanan wata ɗaya. A IT na gwamnati, kuskuren hasashe mafi tabbaci shi ne kwatanta masu samarwa ko zaɓuɓɓuka bisa farashin saye kaɗai, alhali gudanarwa da kulawa yawanci suna ɗaukar tsakanin rabi da kashi huɗu bisa biyar na jimillar kuɗin tsawon rayuwa.

## Dalilin da ya sa yake da muhimmanci

Green Book ta HM Treasury tana buƙatar shari'ar kuɗi a kowace shari'ar kasuwanci ta Five Case Model ta ƙunshi kuɗin tsawon rayuwa gaba ɗaya, ba kuɗin jari kaɗai ba — duk da haka National Audit Office ta sha samun ma'aikatu suna amincewa da zuba jari na IT bisa hasashen kuɗin gudanarwa da bai cika ba ko mai kyakkyawan fata, sai daga baya su gano ainihin kuɗin gudanarwa da zarar tsarin yana raye kuma layin kasafin jari ya rufe. Technology Code of Practice na Government Digital Service da Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) yana tura ma'aikatu zuwa cloud da hosting na kayan yau da kullum wani ɓangare saboda yana sa kuɗin da ke ci gaba ya bayyana kuma za a iya kwatanta shi, maimakon a binne shi cikin lambar sayen jari ɗaya da ke kama da ƙasa mai jan hankali lokacin amincewa kuma kuskure mai tsada bayan shekaru uku.

## Lissafi

```
TCO = Acquisition cost + Σ(t=1..N) Annual operating cost_t / (1+r)^t
      − residual value (discounted)

r = HM Treasury Green Book standard social discount rate, 3.5%/year
    (declining rate schedule for horizons beyond 30 years)

Operating cost components: hosting/licensing, support and maintenance,
security patching and compliance, staff time, planned refresh/migration
```

Duba [kason rangwame na zamantakewa](../kason-rangwame-na-zamantakewa/) don dalilin da ya sa ma'aunin rangwame yake da muhimmanci a tsawon rayuwar tsari na shekaru 5–10 na yau da kullum, da [gina ko saye a gwamnati](../gina-ko-saya-a-gwamnati/) don yadda TCO ke shiga cikin shawarar gina/saye.

## Misali aiki

Ma'aikata tana kwatanta tsarin sarrafa shari'a guda biyu a tsawon shekaru 5 a kason rangwame na 3.5% na Green Book.

```
System A: capex £3,500,000, opex £250,000/year
System B: capex £1,800,000 (looks cheaper), opex £650,000/year
          (heavier vendor support and integration burden)

Naive comparison on capex alone: B wins, £1.8M < £3.5M.

Discount factor sum, 5 years at 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO yana juya shawarar da aka ɗauka ba tare da tunani ba: Tsarin B ya fi tsada kaɗan a tsawon shekaru biyar da zarar an rage ƙimar kuɗin gudanarwa aka haɗa, domin kason opex ɗinsa na jimillar kuɗin tsawon rayuwa 62% ne (2,934,750 / 4,734,750) idan aka kwatanta da 24% na Tsarin A — misali na zahiri na binciken "kulawa ita ce mafi yawan lissafin", wanda aka ɓoye gaba ɗaya ta kwatanta farashin da aka rubuta a kan kaya.

## Alaƙa da injiniyancin manhaja

TCO ita ce lambar da ya kamata ta ba da horo ga kowace shawarar [gina ko saye](../gina-ko-saya-a-gwamnati/) da kowace shari'ar biyan [bashin fasaha](../bashin-fasaha-a-matsayin-zaizayar-ƙimar-jamaa/), domin ruwan bashi da kulawar da aka jinkirta duka layukan kuɗin gudanarwa ne da suka cancanci shiga jimillar da aka rage ƙimarta ɗaya, ko da wani yana bibiyar su ko babu. Injiniyoyin da ke ba da shawarar zaɓin dandamali ko mai samarwa ya kamata su gabatar da cikakken teburin TCO, ba farashin saye ba, domin farashin saye shi ne daidai lambar da aka tsara shari'ar kuɗi ta Green Book don hana ma'aikatu dogaro da ita kaɗai. TCO kuma ita ce ainihin mai rarraba don hukuncin [ƙimar da aka samu daidai da kuɗi](../ƙimar-da-aka-samu-daidai-da-kuɗi/) — VFM tana kwatanta amfani da kuɗi, kuma layin kuɗi da aka ƙirga ƙasa da gaske yana ƙara girman kowane rabon VFM a shari'ar kasuwanci.

## Tarkuna

- **Kwatanta kuɗin jari kaɗai**: kuskuren saye mafi yawa — kwatanta farashin masu samarwa ba tare da hasashen kuɗin gudanarwa da ya dace da kowane zaɓi ba.
- **Cire kuɗin fita da ƙaura**: fitar da bayanai a ƙarshen kwangila, sake sanya dandamali, da hukuncin kullewa ga mai samarwa layukan TCO ne na gaske waɗanda da wuya su bayyana a shari'ar kasuwanci ta asali.
- **Cire kuɗin tsaro da bin ƙa'ida**: saurin gyaran tsaro, sabunta takardar shaida, da kuɗin bincike suna ƙaruwa da shekaru da sarƙaƙiyar tsari — duba [ƙimar tsaron intanet a ɓangaren jama'a](../ƙimar-tsaron-yanar-gizo-a-ɓangaren-jamaa/) — kuma ana barin su akai-akai daga hasashen opex.
- **Kwatanta ba tare da rage ƙima ba tsakanin zaɓuɓɓuka masu bambancin tsarin kuɗi**: kwatanta zaɓi mai nauyin jari da mai nauyin opex ba tare da rage ƙima ba yana fifita duk wanda ya jinkirta ƙarin kuɗi zuwa shekarun baya.

## Majiyoyi

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
