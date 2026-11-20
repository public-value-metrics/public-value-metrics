# Gina ko Saya a Gwamnati

Gina-ko-saya (build vs buy) kwatance ne mai tsari, wanda aka gyara bisa haɗari, tsakanin haɓaka na musamman da samun kasuwanci ko na kayayyaki na yau da kullum, ana kwatantawa bisa [jimillar kuɗin mallaka](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/) da aka rage (discounted), lokacin isa ga ƙima, da haɗari. Gwamnati ta tsari fannin saye ne — Technology Code of Practice yana kafa ƙa'ida ta fifita mafita ta kayayyaki da gajimare (cloud) — amma ƙungiyoyin injiniya a cikin sassan gwamnati har yanzu suna komawa ga gini, saboda dalilai iri ɗaya da magina a ko'ina suke da su.

## Dalilin da ya sa yake da muhimmanci

Technology Code of Practice na Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) da jagorar Service Manual da ke tare da shi game da yanke shawarar gina ko saya suna tura sassan gwamnati su tabbatar da haɓaka na musamman a kan ƙa'ida cewa ya kamata a saya ƙarfin kayayyaki, ba a gina shi ba, kuma sabon ƙarfi mai bambanta manufa kaɗai ne ya cancanci code na musamman. Jagorar ƙari ta Green Book ta HM Treasury kan son zuciya na kyakkyawan fata (optimism bias), wadda aka samo daga bitar Mott MacDonald na 2002 na manyan sayayyar gwamnati, tana ba ayyukan IT mafi faɗin kewayon ƙari na kowane rukuni da aka tantance — ƙiyasin kuɗin jari da ake ba da shawarar ƙarawa da 10% a ƙasa kuma har zuwa 200% a sama kafin a yi amfani da su wajen tantancewa, wanda ke nuna yadda aka daɗe ana raina gina manhaja a sayayyar gwamnati. Nazarin gina-ko-saya yana wanzuwa daidai don tilasta wannan gyaran haɗari a kan tebur kafin amincewa, maimakon barin shi ya fito a matsayin buƙatar ƙarin kuɗi a tsakiyar shekara.

## Lissafi

```
A kwatanta a cikin tsawon shekaru 3–5 iri ɗaya, an rage su da kuɗin rangwamen
zamantakewa na Green Book (duba social-discount-rate.md):

NPV_zaɓi = PV(fa'idodi, an motsa su bisa lokacin isa ga ƙima) − PV(TCO)

Gyare-gyaren haɗari (tsarin son zuciya na kyakkyawan fata na Green Book):
  kuɗin gini × 1.1–3.0        (kewayon ƙarin ayyukan IT, Mott MacDonald)
  lokacin isa ga ƙima na gini + 40–60% (jinkirin fara aiki da aka sani a baya)
  saya: a ƙara binciken gaskiyar haɗawa da kuɗin ficewa daga kwangila a maimakon haka

Masu yanke shawara, bisa tsarin da galibi suke yanke shawara:
  1. bambanci — shin wannan ƙarfin shi ne manufar, ko bututun ruwa ne kawai?
  2. lokacin isa ga ƙima × kuɗin jinkiri (duba cost-of-delay-in-public-programmes.md)
  3. jimillar kuɗin mallaka da aka gyara bisa haɗari
```

## Misali aiki

Karamar hukuma tana buƙatar tsarin sarrafa lamura don kula da zamantakewar manya. Saya: SaaS a £180,000/shekara, yana aiki cikin watanni 4. Gina: ƙiyasin £900,000 tare da £150,000/shekara na kulawa, yana aiki cikin watanni 14.

```
Kuɗin gini da aka gyara bisa haɗari = 900,000 × 1.4 = £1,260,000
TCO na shekaru 5:
  saya  = 180,000 × 5 = £900,000
  gina  = 1,260,000 + 150,000 × 5 = £2,010,000

Sharaɗin jinkiri: tsarin yana kauce wa £40,000/wata na tantance-tantance da aka maimaita;
ginin yana zuwa watanni 10 bayan sayen.
CoD = 10 × 40,000 = £400,000

Kwatancen mai tasiri: £900,000 (saya) da £2,010,000 + £400,000 = £2,410,000 (gina)
```

Sayen yana yin nasara da kusan fam miliyan 1.5 a cikin shekaru biyar, kuma babban layi na ɗaya bayan ƙiyasin ginin kansa shi ne kuɗin jinkirin da kwatancen capex tsantsa ba zai taɓa bayyanawa ba.

## Alaƙa da injiniyancin manhaja

Horon da ke wucewa kai tsaye daga wannan nazari zuwa aikin isarwa: **gyaran haɗari bisa tarihi** — ƙarin Mott MacDonald daidai yake da son zuciya na kyakkyawan fata na Green Book da aka yi amfani da shi kai tsaye, don haka ƙungiyoyi su yi hujja don banda maimakon zaton ƙiyasinsu shi ne banda; **gaskiyar abin kwatantawa** — madadin gini shi ne mafi kyawun zaɓin saye da ake da shi, ba "komai ba", wanda ke da alaƙa kai-tsaye da [kuɗin damar da aka rasa a kashe kuɗin gwamnati](../kuɗin-damar-da-aka-rasa-a-kashe-kuɗin-jamaa/); da **kwatancen TCO na gaskiya** — kowane tsarin gini ya kamata a kwatanta shi da cikakken [jimillar kuɗin mallaka](../jimillar-kuɗin-mallaka-a-it-na-gwamnati/) na zaɓin saye, ba farashin lissafinsa ba. A inda gini ya yi nasara da gaske, ya kamata a ƙididdige [kuɗin jinkirin](../kuɗin-jinkiri-a-shirye-shiryen-jamaa/) ƙarin lokacin gini a fili a cikin shawarar kasuwanci, ba a bar shi a matsayin zato maras suna cewa lokaci ba ya da muhimmanci ba.

## Tarkuna

- **Kwatanta farashin lissafin mai sayarwa da ƙiyasin gini da ba a gyara bisa haɗari ba**: wannan yana yabon gini sau biyu, sau ɗaya a kuɗi kuma sau ɗaya a jadawali.
- **Aikin cikin gida da aka ƙididdige a sifili**: lokacin injiniyoyin gwamnati ana ɗaukarsa "kyauta" domin ya riga ya kasance a kasafin adadin ma'aikatan sashen, wanda ke ɓoye ainihin kuɗin damar da aka rasa a kan sauran aikin da ƙungiyar za ta iya yi.
- **Kulle-kulle da ba a ƙididdige ba a kowane bangare**: kuɗin ficewa daga mai sayarwa da ɗaukar bayanai na gaske ne, amma haka ma bus-factor na ginin musamman da dogaronsa a kan riƙe ƙaramar ƙungiyar cikin gida mai wahalar maye a tsawon rayuwarsa.
- **Iƙirarin bambancin manufa ga bututun ruwa**: "wannan ginshiƙi ne a gare mu" da aka faɗa game da middleware na haɗawa ko ajiyar takardu — a gwada shi bisa ko ɗan ƙasa ko ma'aikacin shari'a zai taɓa lura da wanne ke aiki a ƙasa.

## Majiyoyi

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
