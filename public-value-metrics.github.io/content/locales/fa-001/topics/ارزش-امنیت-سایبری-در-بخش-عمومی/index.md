# ارزش امنیت سایبری در بخش عمومی

ارزش امنیت سایبری در بخش عمومی انضباط قیمت‌گذاری کاهش ریسک است: ارزش کمتر کردن احتمال نقض داده‌های شهروندان چقدر است، با توجه به اینکه
هزینه‌کرد امنیتی وقتی کار می‌کند هیچ برونداد دیدنی ندارد و وقتی شکست می‌خورد بسیار دیدنی است؟ برای خدمتی که سوابق مزایا، داده‌های
سلامت یا پرونده‌های مالیاتی را نگه می‌دارد، همین ویژگی «نامرئی هنگام کار» دقیقاً دلیل آن است که به استدلال ارزشی صریح نیاز دارد، نه
فقط یک تیک انطباق.

## چرا اهمیت دارد

چارچوب ارزیابی سایبری (CAF) مرکز ملی امنیت سایبری بریتانیا (NCSC) راهی ساخت‌یافته در اختیار سازمان‌های بخش عمومی می‌گذارد تا امنیت را به
انضباطی قابل ارزیابی و پیامدمحور تبدیل کنند، نه فهرست وارسی: چهار هدف سطح بالا (مدیریت ریسک امنیتی، حفاظت در برابر حمله‌ی سایبری،
کشف رویدادهای امنیت سایبری و کمینه‌کردن اثر حوادث) را تعریف می‌کند که به پیامدهای مشارکت‌کننده‌ای شکسته شده‌اند که مالک سامانه
می‌تواند بر پایه‌ی آن‌ها ارزیابی شود، با همان روحیه‌ی بند 9 [استاندارد خدمات دیجیتال](../استاندارد-خدمات-دیجیتال/) («خدمتی امن
بسازید که حریم خصوصی کاربران را حفظ کند»). آن‌چه ارزیابی CAF در برابرش محافظت می‌کند برچسب قیمتی مستند دارد: گزارش «هزینه‌ی نقض
داده» IBM میانگین هزینه‌ی نقض را به تفکیک بخش پیگیری می‌کند و به‌طور مداوم بخش عمومی را در سمت پایین‌تر بازه نسبت به مالی یا
سلامت یافته است ــ چاپ‌های اخیر میانگین بخش عمومی را حدود 2.6 تا 2.9 میلیون دلار به ازای هر نقض آورده‌اند ــ اما «پایین‌تر از مالی» به
معنای «پایین» نیست، و نقض‌های دولتی هزینه‌هایی دارند که ارقام گزارش کامل نمی‌گیرد: از دست رفتن اعتماد شهروندان به کانال‌های دیجیتال،
که [استقبال دیجیتال](../صرفه-جویی-ناشی-از-جابه-جایی-کانال/) مورد نیاز طرح‌های توجیهی جابه‌جایی کانال را کاهش می‌دهد، و هزینه‌ی سیاسی و حقوقی افشای
داده‌ای که دولت شهروندان را وادار کرده بود در وهله‌ی نخست تحویل دهند.

## ریاضیات

سرمایه‌گذاری امنیتی همان‌طور ارزش‌گذاری می‌شود که هر هزینه‌کرد کاهش ریسک ارزش‌گذاری می‌شود: به‌صورت کاهش زیان مورد انتظار، با رابطه‌ی کلاسیک مدیریت ریسک.

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

## مثال عملی

**سامانه‌ی مدیریت پرونده‌ی شورای شهرستان که سوابق مراقبت اجتماعی 40,000 ساکن را نگه می‌دارد**:

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

## پیوند با مهندسی نرم‌افزار

مهندسان مالک بیشتر اهرم‌های معادله‌ی ALE هستند: طراحی کنترل دسترسی، بهداشت وابستگی‌ها و وصله‌ها، پوشش لاگ و کشف، و ابزار پاسخ به حادثه
همگی مستقیماً جمله‌ی ARO را جابه‌جا می‌کنند، و به همین دلیل ارزیابی CAF همان‌قدر که ممیزی سیاست است شبیه بازبینی معماری فنی است. این
[بدهی فنی به‌مثابه فرسایش ارزش عمومی](../بدهی-فنی-به-مثابه-فرسایش-ارزش-عمومی/) در حادترین شکل آن است ــ سامانه‌های وصله‌نشده،
بی‌پایش و با کنترل دسترسی ضعیف بدهی‌ای‌اند که بهره‌اش ریسک دنباله است، نه کشش ثابت ــ و باید با
[هزینه‌ی کل مالکیت در فناوری اطلاعات دولتی](../هزینه-ی-کل-مالکیت-در-فناوری-اطلاعات-دولتی/) تطبیق داده شود تا هزینه‌ی امنیت جدا از
هزینه‌ی واقعی اجرای سامانه تلقی نشود. همچنین ورودی مستقیم ارزیابی‌های [ارزش در برابر هزینه](../ارزش-در-برابر-هزینه/) تحت
کتاب سبز است: هزینه‌ی تعدیل‌شده بر پایه‌ی ریسک بخشی از سمت «هزینه» در هر ارزیابی گزینه‌هاست، نه ملحقاتی که در پایان به آن پیچ شود.

## دام‌ها

- **تلقی خودارزیابی CAF به‌عنوان خود امنیت**: ارزیابی تکمیل‌شده وضعیت امنیتی را توصیف می‌کند؛ آن را نمی‌آفریند ــ ارزش در پیامدهای حاصل‌شده است،
  نه سند.
- **استفاده از میانگین‌های جهانی هزینه‌ی نقض به‌عنوان برآورد محلی بدون تعدیل**: ارقام IBM میانگین نمونه‌های بزرگ و متنوع‌اند؛ انتظار
  زیان واحدِ واقع‌بینانه‌ی یک مقام محلی کوچک به‌ندرت با یک وزارتخانه‌ی دولت ملی یکی است.
- **نادیده‌گرفتن روان‌شناسی ریسک دنباله در تصمیم‌های سرمایه‌گذاری**: احتمال سالانه‌ی پایین، به تعویق انداختن هزینه‌ی امنیتی را بی‌پایان
  آسان می‌کند، تا سالی که دیگر آسان نیست ــ آزمون حساسیت محاسبه‌ی ALE در برابر بازه‌ای از ARO، چنان‌که در مثال عملی آمد، با این مقابله می‌کند.
- **شمارش فقط هزینه‌ی نقض به سبک IBM، نه هزینه‌ی اعتماد**: نقضی که تمایل شهروندان به استفاده از کانال‌های دیجیتال را کم می‌کند، مورد
  [صرفه‌جویی جابه‌جایی کانال](../صرفه-جویی-ناشی-از-جابه-جایی-کانال/) را سال‌ها بعد فرسایش می‌دهد، هزینه‌ای که به‌ندرت در برآوردهای هزینه‌ی نقض می‌آید.

## منابع

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
