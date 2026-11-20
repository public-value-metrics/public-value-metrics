# ថ្លៃចំណាយក្នុងមួយប្រតិបត្តិការ

ថ្លៃចំណាយក្នុងមួយប្រតិបត្តិការ (cost per transaction) គឺជារង្វាស់សេដ្ឋកិច្ចឯកតាចំណងជើងសម្រាប់សេវាឌីជីថលរបស់រដ្ឋាភិបាល៖ ថ្លៃចំណាយសរុបដើម្បីផ្តល់ឆានែលមួយ ចែកនឹងចំនួនប្រតិបត្តិការដែលបានបំពេញតាមរយៈវា។ វាជាតួលេខចម្បងនៅលើ GOV.UK Performance Platform ចាស់ ហើយជាលេខដែលផ្តល់មូលនិធិដល់ទសវត្សនៃការវិនិយោគ «ឌីជីថលជាលំនាំដើម» ដែលជាមូលហេតុដែលវាក៏ជារង្វាស់ដែលងាយត្រូវបានលេងល្បិចបំផុតដែរ។

## ហេតុអ្វីបានជាសំខាន់

Digital Efficiency Report ឆ្នាំ 2012 របស់ Cabinet Office បានដាក់ការប្រៀបធៀបថ្លៃចំណាយឆានែលក្នុងពាក្យដែលជាប់ចិត្ត៖ ប្រតិបត្តិការឌីជីថលត្រូវបានរកឃើញថាមានថ្លៃចំណាយថោកជាងតាមទូរស័ព្ទប្រហែល 20 ដង និងថោកជាងការជួបផ្ទាល់ប្រហែល 50 ដង ជាមួយតួលេខរដ្ឋាភិបាលមូលដ្ឋានបង្ហាញប្រហែល £0.15 ក្នុងមួយប្រតិបត្តិការតាមគេហទំព័រ ធៀបនឹង £2.83 តាមទូរស័ព្ទ និង £8.62 ជួបផ្ទាល់។ ការប្រៀបធៀបតែមួយនោះបានក្លាយជាហេតុផលសម្រាប់ការរចនាសេវាគំរូ 25 ដែលបានដាក់ឈ្មោះក្នុង Government Digital Strategy និងសម្រាប់រាល់ករណីអាជីវកម្មនាយកដ្ឋានដែលបានដកស្រង់ការសន្សំពីការផ្លាស់ប្តូរឆានែលតាំងពីពេលនោះមក។ តួលេខនេះមានប្រយោជន៍ពិតប្រាកដជាសញ្ញាលំដាប់ទំហំ ប៉ុន្តែសមាមាត្រអាស្រ័យទាំងស្រុងលើអ្វីដែលត្រូវបានរាប់នៅសងខាង៖ ថ្លៃចំណាយឆានែលទូរស័ព្ទយុត្តិធម៌រួមបញ្ចូលបុគ្គលិកមជ្ឈមណ្ឌលទូរស័ព្ទ កិច្ចសន្យាទូរសព្ទ ការបណ្តុះបណ្តាល និងទីតាំង ហើយថ្លៃចំណាយឌីជីថលយុត្តិធម៌រួមបញ្ចូលការបង្ហោះ ប្រាក់ខែក្រុមផលិតផលជាប់ជានិច្ច ពេលវេលាតុជំនួយសម្រាប់ដំណើរដែលបរាជ័យ និងឆានែលឌីជីថលដែលមានជំនួយដែលតម្រូវដោយចំណុចទី 5 នៃ [ស្តង់ដារសេវាឌីជីថល](../ស្តង់ដារសេវាឌីជីថល/)។ ដកអ្វីទាំងនេះចេញគ្រប់គ្រាន់ពីផ្នែកឌីជីថល ហើយសេវាណាក៏មើលទៅថោកដែរ។

## គណិតវិទ្យា

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost should include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users who fail digital and fall back to phone)
  − one-off build cost is amortized over expected service life, not
    expensed entirely into year one

The common accounting trick:
  "Marginal cost per transaction" (hosting only, once built) is quoted
  as if it were "average cost per transaction" (total cost including
  the team that keeps building and running it). The two can differ by
  10x or more for a service with a large, active delivery team.
```

## ឧទាហរណ៍គណនា

**សេវាបន្តពន្ធយានយន្ត**៖ ប្រតិបត្តិការ 4 លាន/ឆ្នាំ។

```
Marginal-only figure (the trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quoted in a business case

Fully-loaded figure (the honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loaded figure is still roughly 8x cheaper than the £2.83
phone-channel comparator from the Digital Efficiency Report — a real
and defensible saving — but 7.5x higher than the marginal-only figure
quoted in the shortcut version. Both numbers are "true"; only one is
comparable to the phone-channel cost it's being set against.
```

## ទំនាក់ទំនងជាមួយវិស្វកម្មកម្មវិធី

ថ្លៃចំណាយក្នុងមួយប្រតិបត្តិការគឺជាកន្លែងដែលការសម្រេចចិត្តស្ថាបត្យកម្មក្លាយជាលេខហិរញ្ញវត្ថុ៖ សេវាដែលពង្រីកដោយស្វ័យប្រវត្តិយ៉ាងស្អាត និងត្រូវការអន្តរាគមន៍ដោយដៃតិចតួច បន្ទាបលេខនេះតាមពេលវេលា ចំណែកសេវាដែលបង្កើតបរិមាណសំបុត្រគាំទ្រខ្ពស់ពីស្ថានភាពកំហុសដែលបណ្តាលឱ្យយល់ច្រឡំ លើកវាឡើង ទោះប្រសិទ្ធភាពការបង្ហោះយ៉ាងណាក៏ដោយ។ វាជារង្វាស់ដៃគូធម្មជាតិនៃចំណុចទី 10 នៃ [ស្តង់ដារសេវាឌីជីថល](../ស្តង់ដារសេវាឌីជីថល/) («កំណត់ថាជោគជ័យមើលទៅដូចម្តេច ហើយបោះពុម្ពទិន្នន័យសមិទ្ធផល») និង [ស្តង់ដារសេវា និងរង្វាស់ប្រតិបត្តិការ](../ស្តង់ដារសេវា-និងរង្វាស់ប្រតិបត្តិការ/) ដែលកំណត់សំណុំ KPI ពេញលេញដែលតួលេខនេះស្ថិតនៅក្នុង។ វាក៏បញ្ចូលដោយផ្ទាល់ទៅការគណនា [ការសន្សំពីការផ្លាស់ប្តូរឆានែល](../ការសន្សំពីការផ្លាស់ប្តូរឆានែល/) ហើយគួរត្រូវបានផ្សះផ្សាធៀបនឹង [ថ្លៃចំណាយសរុបនៃភាពជាម្ចាស់ក្នុង IT រដ្ឋាភិបាល](../ថ្លៃចំណាយសរុបនៃការជាម្ចាស់ក្នុង-it-របស់រដ្ឋាភិបាល/) ដើម្បីកុំឱ្យថ្លៃលើសវេទិកា និងសេវាចែករំលែកត្រូវបានទម្លាក់ដោយស្ងាត់ស្ងៀម។

## កំហុសដែលតែងកើតមាន

- **ថ្លៃចំណាយរឹម (marginal) ដែលតុបតែងជាថ្លៃចំណាយមធ្យម**៖ ការដកស្រង់ថ្លៃបង្ហោះតែមួយ នៅពេលសេវាត្រូវបានសាងសង់ ដោយទុកក្រុមជាប់ជានិច្ចដែលថែទាំ ធ្វើឡើងវិញ និងគាំទ្រវា សូមមើលឧទាហរណ៍អនុវត្តខាងលើ។
- **ការមិនរាប់ថ្លៃចំណាយឌីជីថលដែលមានជំនួយ**៖ ឆានែលមួយមិនអនុលោមតាម «ឌីជីថលជាលំនាំដើម» ហើយថ្លៃចំណាយពិតរបស់វាមិនត្រូវបានចាប់យកទេ ប្រសិនបើជម្រើសទូរស័ព្ទ/ក្រដាសដែលតម្រូវដោយ [ការរួមបញ្ចូលឌីជីថល](../ការរួមបញ្ចូលឌីជីថល/) ត្រូវបានកំណត់ថ្លៃដាច់ដោយឡែក ឬមិនអើពើ។
- **ការមិនអើពើនឹង failure demand**៖ ប្រតិបត្តិការដែលចាប់ផ្តើមឌីជីថល ហើយបរាជ័យ បង្កើតការហៅទូរស័ព្ទ ឬទម្រង់ក្រដាសដដែល គឺជាថ្លៃចំណាយនៃឆានែលឌីជីថល មិនមែនឆានែលដែលចាប់បរាជ័យនោះទេ។
- **ការប្រៀបធៀបប្រតិបត្តិការដែលស្មុគស្មាញខុសគ្នាឆ្លងឆានែល**៖ ការហៅទូរស័ព្ទដោះស្រាយករណីលំបាកខ្លាំងជាងសមាមាត្រ (អ្នកពឹងផ្អែកច្រើន ការកែកំហុស អ្នកដាក់ពាក្យងាយរងគ្រោះ) ការប្រៀបធៀបថ្លៃចំណាយទូរស័ព្ទមធ្យមជាមួយថ្លៃចំណាយឌីជីថលមធ្យម បំផ្លើសសមាមាត្រ លុះត្រាតែបន្សំប្រតិបត្តិការត្រូវគ្នា។

## ប្រភព

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
