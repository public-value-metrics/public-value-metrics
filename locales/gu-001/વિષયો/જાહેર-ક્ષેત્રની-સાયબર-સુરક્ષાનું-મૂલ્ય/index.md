# જાહેર ક્ષેત્રની સાયબર સુરક્ષાનું મૂલ્ય

જાહેર ક્ષેત્રની સાયબર સુરક્ષાનું મૂલ્ય એ જોખમ-ઘટાડાની કિંમત આંકવાની શિસ્ત છે: નાગરિકોના ડેટાનો ભંગ ઓછો સંભવિત બનાવવાની કિંમત શું છે, એ જોતાં કે સુરક્ષા ખર્ચ કામ કરે ત્યારે કોઈ દેખીતું આઉટપુટ આપતો નથી અને નિષ્ફળ જાય ત્યારે ખૂબ દેખીતું આપે છે? લાભ રેકૉર્ડ, આરોગ્ય ડેટા કે કર રેકૉર્ડ ધરાવતી સેવા માટે, આ "કામ કરતી વખતે અદૃશ્ય" ગુણધર્મ જ કારણ છે કે તેને માત્ર અનુપાલનના ટિકને બદલે સ્પષ્ટ મૂલ્ય-દલીલની જરૂર છે.

## તે શા માટે મહત્વનું છે

બ્રિટનના National Cyber Security Centre નું Cyber Assessment Framework (CAF) જાહેર ક્ષેત્રની સંસ્થાઓને સુરક્ષાને ચેકલિસ્ટને બદલે મૂલ્યાંકન કરી શકાય તેવી, પરિણામ-આધારિત શિસ્ત બનાવવાનો સંરચિત માર્ગ આપે છે: તે ચાર ઉચ્ચ-સ્તરના ઉદ્દેશો (સુરક્ષા જોખમનું સંચાલન, સાયબર હુમલા સામે રક્ષણ, સાયબર સુરક્ષા ઘટનાઓની શોધ, અને ઘટનાઓની અસર ઓછી કરવી) વ્યાખ્યાયિત કરે છે, જે યોગદાન આપતાં પરિણામોમાં વહેંચાયેલા છે જેની સામે સિસ્ટમ માલિકનું મૂલ્યાંકન થઈ શકે. આ [digital-service-standard](../ડિજિટલ-સેવા-ધોરણ/) ના મુદ્દા 9 ("વપરાશકર્તાઓની ગોપનીયતાનું રક્ષણ કરતી સુરક્ષિત સેવા બનાવો") ની ભાવના જેવું જ છે. CAF મૂલ્યાંકન જેની સામે રક્ષણ આપે છે તેની દસ્તાવેજીકૃત કિંમત છે: IBM નો Cost of a Data Breach Report ક્ષેત્ર પ્રમાણે સરેરાશ ભંગ ખર્ચને ટ્રૅક કરે છે, અને સતત જોયું છે કે જાહેર ક્ષેત્ર નાણાં કે આરોગ્ય સંભાળની સરખામણીમાં શ્રેણીના નીચલા છેડે છે. તાજેતરની આવૃત્તિઓ જાહેર ક્ષેત્રની સરેરાશ ભંગ દીઠ આશરે $2.6–2.9 મિલિયન મૂકે છે. પણ "નાણાં ક્ષેત્ર કરતાં ઓછું" એ "ઓછું" નથી, અને સરકારી ભંગોમાં એવા ખર્ચ હોય છે જે અહેવાલના આંકડા પૂરેપૂરા પકડતા નથી: ડિજિટલ માધ્યમોમાં નાગરિકના વિશ્વાસનો ક્ષય, જે [ડિજિટલ અપનાવણી](../ચૅનલ-શિફ્ટ-બચત/) ને દબાવે છે જેના પર ચૅનલ-શિફ્ટ બિઝનેસ કેસ નિર્ભર છે, અને રાજ્યે નાગરિકોને સોંપવા ફરજ પાડેલો ડેટા ખુલ્લો પાડવાનો રાજકીય અને કાનૂની ખર્ચ.

## ગણિત

સુરક્ષા રોકાણનું મૂલ્ય કોઈ પણ જોખમ-ઘટાડા ખર્ચની જેમ આંકવામાં આવે છે: અપેક્ષિત-નુકસાનમાં ઘટાડા તરીકે, ક્લાસિક જોખમ-વ્યવસ્થાપન સમીકરણ વાપરીને.

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

## ઉદાહરણ સાથે ગણતરી

**40,000 રહેવાસીઓના સામાજિક સંભાળ રેકૉર્ડ ધરાવતી કાઉન્ટી કાઉન્સિલ કેસ-મેનેજમેન્ટ સિસ્ટમ**:

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

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

ALE સમીકરણના મોટા ભાગના લિવર એન્જિનિયરો પાસે છે: ઍક્સેસ કંટ્રોલ ડિઝાઇન, ડિપેન્ડન્સી અને પૅચ સ્વચ્છતા, લૉગિંગ અને શોધ કવરેજ, અને ઘટના-પ્રતિસાદ સાધનો બધાં સીધા ARO પદને હલાવે છે, જેથી CAF મૂલ્યાંકન નીતિ ઑડિટ જેટલું જ ટેકનિકલ આર્કિટેક્ચર સમીક્ષા જેવું વંચાય છે. આ [technical-debt-as-public-value-erosion](../જાહેર-મૂલ્યના-ધોવાણ-તરીકે-ટેક્નિકલ-ડેટ/) નું સૌથી તીવ્ર સ્વરૂપ છે: પૅચ ન કરાયેલી, દેખરેખ વિનાની, ખરાબ ઍક્સેસ-નિયંત્રિત સિસ્ટમો એવું ઋણ છે જેનું વ્યાજ સતત ઘસારો નહીં પણ છેડાનું જોખમ છે. તેને [total-cost-of-ownership-in-government-it](../સરકારી-it-માં-માલિકીનો-કુલ-ખર્ચ/) સાથે મેળવવું જોઈએ જેથી સુરક્ષા ખર્ચ સિસ્ટમના વાસ્તવિક ચલાવવાના ખર્ચથી અલગ ન ગણાય. Green Book હેઠળ [value-for-money](../નાણાં-માટે-મૂલ્ય/) મૂલ્યાંકનો માટે તે સીધો ઇનપુટ પણ છે: જોખમ-સમાયોજિત ખર્ચ કોઈ પણ વિકલ્પ મૂલ્યાંકનની "ખર્ચ" બાજુનો ભાગ છે, અંતે ઉમેરેલો વિચાર નહીં.

## સામાન્ય ભૂલો

- **CAF સ્વ-મૂલ્યાંકનને જ સુરક્ષા ગણવું**: પૂરું થયેલું મૂલ્યાંકન સુરક્ષા સ્થિતિનું વર્ણન કરે છે; તે તેને સર્જતું નથી. મૂલ્ય દસ્તાવેજમાં નહીં, પ્રાપ્ત પરિણામોમાં છે.
- **વૈશ્વિક સરેરાશ ભંગ ખર્ચને સમાયોજન વગર સ્થાનિક અંદાજ તરીકે વાપરવો**: IBM ના આંકડા મોટા, વિવિધ નમૂનાઓની સરેરાશ છે; નાના સ્થાનિક સત્તામંડળનું વાસ્તવિક single loss expectancy ભાગ્યે જ રાષ્ટ્રીય સરકારી વિભાગ જેટલું હોય છે.
- **રોકાણ નિર્ણયોમાં છેડાના જોખમના મનોવિજ્ઞાનને અવગણવું**: નીચી વાર્ષિક સંભાવના સુરક્ષા ખર્ચને અનિશ્ચિત સમય સુધી મુલતવી રાખવો સહેલો બનાવે છે, ત્યાં સુધી કે જે વર્ષે એવું ન થાય. ઉદાહરણમાં જેમ, ALE ગણતરીનું ARO ની શ્રેણી સામે સંવેદનશીલતા-પરીક્ષણ આનો સામનો કરે છે.
- **ફક્ત IBM-શૈલીનો ભંગ ખર્ચ ગણવો, વિશ્વાસનો ખર્ચ નહીં**: જે ભંગ નાગરિકોની ડિજિટલ માધ્યમ વાપરવાની તૈયારી ઘટાડે છે તે [channel-shift-savings](../ચૅનલ-શિફ્ટ-બચત/) ના કેસને વર્ષો સુધી ખોખલો કરે છે, જે ખર્ચ ભંગ-ખર્ચ અંદાજોમાં ભાગ્યે જ ગણાય છે.

## સ્રોતો

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
