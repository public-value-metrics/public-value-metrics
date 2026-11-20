# પરિણામ પર ચુકવણી અને સામાજિક અસર બૉન્ડ (Payment by Results and Social Impact Bonds)

પરિણામ પર ચુકવણી (payment by results, PbR) સેવા-પ્રદાતાને કરેલી પ્રવૃત્તિઓને આધારે નહીં, પણ ચકાસાયેલા પ્રાપ્ત પરિણામોને આધારે ચૂકવે છે. સામાજિક અસર બૉન્ડ (social impact bond, SIB) એ ચોક્કસ PbR નાણાકીય માળખું છે જેમાં ખાનગી કે પરોપકારી રોકાણકારો સેવા પહોંચાડવા માટે અગાઉથી ભંડોળ આપે છે, અને સરકારી કમિશનર તેમને વળતર સાથે ત્યારે જ પાછા ચૂકવે છે જ્યારે સ્વતંત્ર રીતે માપેલાં પરિણામો સંમત સીમાઓ પાર કરે; આમ ડિલિવરીનું જોખમ કરદાતા પાસેથી રોકાણકાર પર જાય છે.

## તે શા માટે મહત્વનું છે

વિશ્વનો પહેલો SIB સપ્ટેમ્બર 2010 માં HMP Peterborough ખાતે શરૂ થયો: Social Finance એ 17 રોકાણકારો પાસેથી £5 મિલિયન એકત્ર કર્યા "One Service" ને ભંડોળ આપવા, જે ટૂંકી સજાવાળા કેદીઓ (12 મહિનાથી ઓછી) સાથે ફરી ગુનો કરવાનું ઘટાડવા કામ કરતી હતી. Ministry of Justice અને Big Lottery Fund એ ત્યારે જ રોકાણકારોને પાછા ચૂકવવા સંમતિ આપી જો મેળ ખાતા રાષ્ટ્રીય સરખામણી જૂથની સામે ફરી દોષિત ઠરવાના બનાવો ઓછામાં ઓછા 7.5% ઘટે. Peterborough પાયલટના અંતિમ જૂથે ફરી દોષિત ઠરવામાં 9.7% નો ઘટાડો નોંધ્યો, જે સીમા કરતાં આરામથી ઊંચો છે, અને રોકાણકારોને વળતર સાથે પાછા ચૂકવાયા. આ પદ્ધતિ મહત્વની હતી કારણ કે તેણે ચોક્કસ કમિશનિંગ સમસ્યા ઉકેલી: સરકાર ઇનપુટને બદલે પરિણામ માટે ચૂકવવા માગતી હતી, પણ એવા હસ્તક્ષેપનું નાણાકીય જોખમ ઉઠાવી શકતી ન હતી જે કદાચ કામ ન કરે, એટલે SIB માળખાએ એ જોખમ તેને ઉઠાવવા તૈયાર રોકાણકારો પર મૂક્યું. Oxford ની Blavatnik School of Government ખાતેની Government Outcomes Lab (GO Lab) હવે વિશ્વભરમાં PbR અને SIB કામગીરી પરનો સૌથી સંપૂર્ણ જાહેર પુરાવા-આધાર જાળવે છે, વૈશ્વિક સ્તરે 200 થી વધુ impact bond ને ટ્રૅક કરે છે અને કઈ ડિઝાઇન લાક્ષણિકતાઓ સફળતા કે નિષ્ફળતા સાથે સંકળાયેલી છે તેના સંશોધન પ્રકાશિત કરે છે. પુરાવા-આધાર વારંવાર એ પાઠ પર પાછો ફરે છે કે *પસંદ કરેલો પરિણામ માપદંડ*, અને તેને ચૂકી જવાનું જોખમ કોણ ઉઠાવે છે, તે PbR કરાર વ્યવહારમાં કેવી રીતે વર્તે છે તે લગભગ બધું નક્કી કરે છે.

## ગણિત

```
PbR payment = base payment (if any) + Σ (outcome achieved × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital funding service delivery
  Outcome payment   = commissioner pays only if outcome ≥ threshold, scaled by
                       how far above threshold performance lands
  Investor return   = outcome payments received − investor outlay
                       (a rate of return, often capped, reflecting risk taken)

Key design parameters that determine the whole contract's behaviour:
  Outcome metric        — must be an outcome, not an output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually a matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment triggers
  Payment curve           — linear, stepped, or capped above the threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## ઉદાહરણ સાથે ગણતરી

**Peterborough One Service** (પ્રકાશિત મૂલ્યાંકનોમાંથી લીધેલા ઉદાહરણરૂપ આંકડા):

```
Investor capital raised:         £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction in reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below the contractual bar for that
                                  cohort alone under the original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  pays per percentage point above threshold, funding
                                  investor repayment plus a return
```

**સ્થાનિક સત્તામંડળનો PbR કરાર (ઉદાહરણરૂપ)**: એક કુટુંબ-હસ્તક્ષેપ સેવા રેફર થયેલા કુટુંબ દીઠ £4,000 (પ્રવૃત્તિ ચુકવણી) વત્તા બંધ થયાના 12 મહિના પછી બાળ-સંરક્ષણ માટે કોઈ વધુ રેફરલ ન હોય તેવા કુટુંબ દીઠ £6,000 (પરિણામ ચુકવણી) પર કમિશન કરાઈ છે. 200 કુટુંબો રેફર થયાં, 150 કેસ બંધ થયા, 96 12 મહિને રેફરલ-મુક્ત રહ્યા:

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## સૉફ્ટવેર એન્જિનિયરિંગ સાથે સંબંધ

પરિણામ પર ચુકવણી ડેટા સમસ્યા બને તે પહેલાં પ્રોત્સાહન-સંરેખણની સમસ્યા છે, અને ડેટા સિસ્ટમ એ જગ્યા છે જ્યાં તે સંરેખણ ટકે છે કે તૂટે છે. સ્વતંત્ર, છેડછાડ-દેખાય તેવી પરિણામ ચકાસણી જ આખી રમત છે: અસ્પષ્ટ કેસને કેવી રીતે કોડ કરવો તેમાં કમિશનર અને પ્રદાતાના પ્રોત્સાહન વિરોધી છે, એટલે પરિણામ નોંધતી સિસ્ટમને ઑડિટ ટ્રેલ, સ્વતંત્ર ચકાસનાર સાથે ડેટા-વહેંચણી કરાર (ઘણી વાર પ્રદાતાથી અલગ સંસ્થા, ક્યારેક પોલીસ કે લાભ રેકૉર્ડ સાથે મેળવણી કરતી સત્તાવાર આંકડાશાસ્ત્ર સંસ્થા), અને પરિણામ વ્યાખ્યાનું અપરિવર્તનીય વર્ઝનિંગ જોઈએ. આ [જાહેર ક્ષેત્રના KPI](../જાહેર-ક્ષેત્રના-મુખ્ય-કામગીરી-સૂચકો/) ની "માપદંડની પુનર્વ્યાખ્યા" ભૂલનું PbR સમકક્ષ છે. શ્રેય-ગણતરીઓ [counterfactual-analysis](../પ્રતિતથ્ય-વિશ્લેષણ/) ની મેળ ખાતા-જૂથ પદ્ધતિઓ પર આધાર રાખે છે, જેને પુનઃઉત્પાદિત, ઑડિટ કરી શકાય તેવો કોડ જોઈએ, એક-વારનું સ્પ્રેડશીટ નહીં. અને માપદંડ પોતે સાચું આઉટકમ હોવો જોઈએ, પ્રૉક્સી પ્રવૃત્તિ નહીં (જુઓ [આઉટકમ વિરુદ્ધ આઉટપુટ](../આઉટકમ-વિરુદ્ધ-આઉટપુટ/)), કારણ કે આઉટપુટ માટે ચૂકવતો PbR કરાર ફક્ત વધારાના વ્યવહાર ખર્ચ સાથે રોજિંદા ભંડોળને ફરી લેબલ કરે છે. જ્યાં SIB નું સામાજિક વળતર ભવિષ્યલક્ષી રીતે મૉડલ થતું હોય, ત્યાં તે મૂલ્યાંકન સામાન્ય રીતે [સામાજિક રોકાણ પર વળતર](../સામાજિક-રોકાણ-પર-વળતર/) ની પદ્ધતિમાંથી સીધું ઉધાર લે છે.

## સામાન્ય ભૂલો

- **સહેલાઈથી ચેડાં થઈ શકે તેવા પ્રૉક્સી પરિણામ માટે ચુકવણી**: "સત્રોમાં હાજરી" એ પરિણામનો વેશ પહેરેલી પ્રવૃત્તિ છે; એવા માપદંડનો આગ્રહ રાખો જે ઇચ્છિત ખરા ફેરફારને (ફરી ગુનો, રોજગાર, આવાસ સ્થિરતા) દર્શાવે.
- **વિશ્વસનીય પ્રતિતથ્ય નહીં**: મેળ ખાતા સરખામણી જૂથ વગર, સુધારો સરેરાશ તરફ પાછા ફરવું કે વ્યાપક વલણ હોઈ શકે, કાર્યક્રમની અસર નહીં. જુઓ [counterfactual-analysis](../પ્રતિતથ્ય-વિશ્લેષણ/) અને [additionality-and-deadweight](../વધારાપણું-અને-ડેડવેઇટ/).
- **વ્યવહાર અને મૂલ્યાંકન ખર્ચને ઓછા આંકવા**: PbR/SIB યોજનાઓ માટે સ્વતંત્ર ચકાસણી, ડેટા જોડાણ અને કરાર વહીવટ કરારના મૂલ્યની ટકાવારી તરીકે નિયમિતપણે બે-અંકી સંખ્યામાં જાય છે. GO Lab નો પુરાવા-આધાર આને યોજના બંધ થવાના વારંવાર આવતા કારણ તરીકે નોંધે છે.
- **ચેરી-પિકિંગ કે "પાર્કિંગ"**: પરિણામ દીઠ ચૂકવાતા પ્રદાતાઓને એવા ગ્રાહકોને પ્રાથમિકતા આપવાનું સીધું પ્રોત્સાહન છે જે કોઈ પણ રીતે સફળ થવાની સંભાવના ધરાવે છે અને સૌથી અઘરા કેસને ઓછી પ્રાથમિકતા; તેને રોકવા ચુકવણી સ્તરો કે કેસ-મિશ્રણ સમાયોજન ડિઝાઇન કરો.

## સ્રોતો

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
