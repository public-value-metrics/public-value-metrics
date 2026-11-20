# પ્લૅટફૉર્મ તરીકે સરકાર (GaaP)

પ્લૅટફૉર્મ તરીકે સરકાર (Government as a Platform) એ વહેંચાયેલા, પુનઃઉપયોગી ઘટકો — સૂચના સેવા, ચુકવણી સેવા, ઓળખ સેવા — એક વાર, કેન્દ્રીય રીતે બનાવવાની વ્યૂહરચના છે, જેથી સેંકડો વ્યક્તિગત સરકારી સેવાઓ દરેક પોતાનું બનાવવાને બદલે તેનો ઉપયોગ કરે. તે જાહેર ડિજિટલ માળખાને પ્લૅટફૉર્મ અર્થશાસ્ત્રની સમસ્યા તરીકે ફરી ઘડે છે: મૂલ્ય કોઈ એક સંકલનમાં નથી, પણ *આગામી* ટીમ તેને અપનાવે ત્યારે સીમાંત ખર્ચ શૂન્ય તરફ જાય તેમાં છે.

## તે શા માટે મહત્વનું છે

GDSએ 2015ના "Government as a Platform" પ્રકાશનમાં આ વ્યૂહરચના ઔપચારિક રીતે મૂકી, દલીલ કરતાં કે સરકાર એકની એક ક્ષમતાઓ — ચુકવણી સ્વીકારવી, વપરાશકર્તાને સૂચના, ઓળખ ચકાસણી, સરનામું શોધ — સેવા પછી સેવામાં અલગથી બનાવતી હતી, દરેક પોતાની ખરીદી, સુરક્ષા મૂલ્યાંકન અને ચાલુ સપોર્ટનો બોજ વહન કરતી. વિકલ્પ હતો થોડાં વહેંચાયેલાં પ્લૅટફૉર્મ, જે એક વાર ઊંચા ધોરણે બનાવાય અને બધે પુનઃઉપયોગ થાય: ઇમેઇલ, ટેક્સ્ટ સંદેશા અને પત્રો મોકલવા માટે GOV.UK Notify, ઑનલાઇન ચુકવણી સ્વીકારવા માટે GOV.UK Pay, અને ઓળખ ચકાસણી માટે GOV.UK One Login (અગાઉના GOV.UK Verify ઓળખ કાર્યક્રમનો અનુગામી). આ પ્લૅટફૉર્મ જે સ્તરે પહોંચ્યાં છે તે વ્યૂહરચના કામ કરી ગઈ તેનો સૌથી સ્પષ્ટ પુરાવો છે: GOV.UK Payએ આશરે 1,800 વ્યક્તિગત સેવાઓ પર £10 બિલિયનથી વધુના વ્યવહારો પ્રક્રિયા કર્યા છે — અને જ્યાં પોતાનું પહેલું £1 બિલિયન પ્રક્રિયા કરવામાં આશરે ચાર વર્ષ લાગ્યાં હતાં, ત્યાં હવે તેટલું આશરે પાંચ મહિનામાં કરે છે — જ્યારે GOV.UK Notifyએ 1,500થી વધુ સરકારી સંસ્થાઓ વતી 9 બિલિયનથી વધુ સંદેશા મોકલ્યા છે. આ અપનાવનાર દરેક સેવાએ પોતાનો ચુકવણી ગેટવે કે સંદેશ પાઇપલાઇન બનાવવાનું, સુરક્ષિત કરવાનું અને જાળવવાનું ટાળ્યું.

## ગણિત

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

## ઉદાહરણ સાથે ગણતરી

**ચુકવણી ગેટવે બનાવવાને બદલે GOV.UK Pay અપનાવતું સ્થાનિક સત્તામંડળ**:

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

તે £73,000ને હાલ GOV.UK Pay વાપરતી આશરે 1,800 સેવાઓ પર વિસ્તારો તો સમગ્ર સરકારમાં ટળેલો બાંધકામ ખર્ચ સેંકડો મિલિયનમાં થાય છે — વ્યૂહરચનાનું મૂલ્ય ખરેખર ક્યાં છે તે કોઈ એક સંકલન નહીં, પ્લૅટફૉર્મ અર્થશાસ્ત્ર છે.

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

પ્લૅટફૉર્મ તરીકે સરકાર એ [સરકારમાં બનાવવું કે ખરીદવું](../સરકારમાં-બનાવવું-કે-ખરીદવું/) માટે સીધી દલીલ છે: જ્યારે વહેંચાયેલો, મૂલ્યાંકન પામેલો, સારી રીતે ચાલતો ઘટક અસ્તિત્વમાં હોય, ત્યારે તેના જેવો કસ્ટમ ઘટક બનાવવો ભાગ્યે જ વધુ સારી [નાણાંનું મૂલ્ય](../નાણાં-માટે-મૂલ્ય/) પસંદગી હોય, અને તે [ડિજિટલ સેવા ધોરણ](../ડિજિટલ-સેવા-ધોરણ/)ના મુદ્દા 13 ("ખુલ્લા ધોરણો, સામાન્ય ઘટકો અને પૅટર્નનો ઉપયોગ કરો અને તેમાં યોગદાન આપો")માં લગભગ વ્યાખ્યા પ્રમાણે નિષ્ફળ જાય છે. તે [સરકારી IT માં માલિકીનો કુલ ખર્ચ](../સરકારી-it-માં-માલિકીનો-કુલ-ખર્ચ/)નો આકાર પણ બદલે છે: પ્લૅટફૉર્મ અપનાવવાથી મોટી મૂડી અને જાળવણી પંક્તિ નાના, ઉપયોગ-સંલગ્ન સંચાલન ખર્ચ સાથે બદલાય છે, જેનું અનુમાન કરવું સરળ છે અને સેવા બંધ થાય ત્યારે ભંડોળ કાપવું સરળ છે. ઘટકોના ખુલ્લા પુનઃઉપયોગનો સગો [ખુલ્લા ડેટાનું મૂલ્ય](../ખુલ્લા-ડેટાનું-મૂલ્ય/) છે — બંને એવી વ્યૂહરચનાઓ છે જે સરકાર એક વાર ઉત્પન્ન કરે તેને વિભાગીય સંપત્તિને બદલે વહેંચાયેલા માળખા તરીકે ગણે છે.

## સામાન્ય ભૂલો

- **છૂપું પુનઃનિર્માણ**: ટીમો ચૂપચાપ પોતાનું ચુકવણી કે સૂચના સંકલન બનાવે છે કારણ કે પ્લૅટફૉર્મની ઑનબોર્ડિંગ પ્રક્રિયા જાતે કરવા કરતાં ધીમી છે — આ શાસનના ઘર્ષણની સમસ્યા છે, ટેક્નોલૉજીની નહીં, અને તે સમગ્ર વ્યૂહરચના જેના પર આધારિત છે તે પુનઃઉપયોગના અર્થશાસ્ત્રને ચૂપચાપ ક્ષીણ કરે છે.
- **પ્લૅટફૉર્મ ટીમને તે સર્જેલા મૂલ્યની સરખામણીમાં ઓછું ભંડોળ**: મૂલ્ય ઉપયોગ કરનારા વિભાગોને મળે છે જ્યારે ખર્ચ પ્લૅટફૉર્મ ટીમ પાસે રહે છે, જે ક્રોનિક ઓછા-રોકાણનું જોખમ સર્જે છે સિવાય કે ભંડોળ કેન્દ્રીય અને સુરક્ષિત હોય — સામાન્ય સંસાધનોની દુર્ઘટના (tragedy of the commons)નું એક સ્વરૂપ.
- **પ્લૅટફૉર્મની સફળતા માત્ર ઉપયોગથી માપવી**: અપનાવવાની સંખ્યાઓ (ઑનબોર્ડ થયેલી સેવાઓ, મોકલાયેલા સંદેશા) અગ્રણી સૂચક છે, મૂલ્યનો પુરાવો નથી; સાચી કસોટી ઉપર દર્શાવેલ ટળેલા-બાંધકામ-ખર્ચ અને ટળેલા-જોખમની ગણતરી છે.
- **"પ્લૅટફૉર્મ"ને "મોનોલિથ" સમાનાર્થી ગણવું**: GaaP ઘટકો સફળ થાય છે કારણ કે દરેક સાંકડા, સ્થિર ઇન્ટરફેસ સાથે એક જ કામ સારી રીતે કરે છે — અસંબંધિત ક્ષમતાઓને એક "પ્લૅટફૉર્મ"માં બાંધવાથી કસ્ટમ-બાંધકામની સમસ્યા અલગ સ્તરે ફરી સર્જાય છે.

## સ્રોતો

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
