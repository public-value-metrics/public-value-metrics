# תמחור צל

מחיר צל (shadow price) הוא ערך מוערך שמיוחס למוצר, למשאב או להשפעה חיצונית שאין להם מחיר שוק נצפה, או שמחיר השוק שלהם מעוות ואינו משקף את ערכם החברתי האמיתי. הערכת פרויקטים ממשלתית נשענת על מספר מצומצם של מחירי צל רשמיים, כמו פחמן, זמן שאינו זמן עבודה ועבודה של מובטלים, שמתפרסמים באופן מרכזי כדי שכל משרד ישתמש באותו מספר.

## למה זה חשוב

מחירי צל קיימים משום ש[ניתוח עלות-תועלת חברתי](../ניתוח-עלות-תועלת-חברתי/) אינו יכול לפעול בלי ערך כספי לכל עלות ולכל תועלת, ולכמה מהמרכיבים המשמעותיים ביותר, כמו טונה של פחמן שנפלטה, שעת נסיעה של נוסע או שעת עבודה של אדם שהיה מובטל אחרת, אין מחיר שוק כלל, או שמחיר השוק שלהם מעוות את העלות החברתית האמיתית. משרד האוצר הבריטי (HM Treasury) ומשרד הביטחון האנרגטי ואפס נטו (DESNZ) מפרסמים במשותף את מחיר הצל של פחמן שבו משתמשת כל הערכת מדיניות ממשלתית בבריטניה
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>).
המחיר נגזר לא ממחיר שוק כלשהו של פחמן אלא מגישה העקבית ליעד: ערך הפחמן נקבע לפי עלות ההפחתה השולית הנדרשת כדי לעמוד בתקציבי הפחמן שנקבעו בחקיקה בבריטניה, וזוהי לוגיקה שונה מהותית מהתצפית על מחיר הפחמן בפועל במערכת סחר הפליטות של האיחוד האירופי או של בריטניה.

שיעור שכר הצל פועל באותו היגיון בצד העבודה. העסקת אדם שהיה מובטל אחרת אינה עולה לחברה את מלוא שכרו, שכן חלק מהשכר הוא העברה של תשלומי קצבאות שהופסקו ושל זמן פנאי וחיפוש עבודה שאבדו, ולא משיכה נטו נוספת ממשאבי החברה. לכן הנחיות ה-Green Book קובעות מחיר צל נמוך משכר השוק לעבודה שנלקחת מאבטלה, כך שהוא משקף את עלות ההזדמנות האמיתית של אותה עבודה (ראו [עלות הזדמנות בהוצאה ציבורית](../עלות-הזדמנות-בהוצאה-ציבורית/)) ולא את מחיר השוק שלה.

## המתמטיקה

```
Shadow price of carbon (illustrative structure, current values from the
official BEIS/DESNZ carbon values tool — do not use stale figures):
  Traded sector value: informed by ETS allowance price trajectories
  Non-traded sector (target-consistent) value: set to the marginal cost
    of abatement needed to meet legislated carbon budgets, rising over
    time as easier abatement options are exhausted
  Applied as: £/tonne CO2e × tonnes emitted or abated by the option,
    discounted at the social discount rate for future years

Shadow wage rate (SWR):
  SWR = Market wage − (value of foregone leisure/search time saved
                        + value of welfare payments no longer paid)
  Typically expressed as a fraction of the market wage (e.g. SWR = 0.6
    × market wage in a high-unemployment area, per Green Book Annex A
    guidance on labour markets with spare capacity)
```

שני הנתונים הם מוסכמות מדיניות שנקבעות באופן מרכזי, ולא תצפיות שוק אמפיריות. כל תכליתו של מחיר צל היא להחליף שוק חסר או מעוות, ולכן הערכה שמשתמשת בו חייבת לצטט את המקור הרשמי העדכני ולא לגזור נתון משלה, וזאת בדיוק כדי שהערכות של כל המשרדים יהיו ברות השוואה.

## דוגמה מעובדת

**ממשל לאומי**: הערכה של תוכנית להגנה מפני שיטפונות מעריכה שהיא מונעת פליטה של 400 טונות שווה ערך פחמן דו-חמצני (CO2e) בשנה (באמצעות שימוש מופחת בציוד חירום והפחתת הפחמן המגולם בבנייה מחדש שנמנעה), לאורך תקופת הערכה של 30 שנה, בהשוואה לבסיס "עשה מינימום".

```
Illustrative shadow price of carbon: £280/tonne CO2e (year 1, rising over
  the appraisal period per the official non-traded carbon values schedule)
Year 1 carbon benefit = 400 × £280 = £112,000
```

מכיוון שלפי הלוח הרשמי ערך הפחמן *עולה* לאורך תקופת ההערכה (בשל הידוק תקציבי הפחמן), על האנליסט להחיל את הערך הנכון לכל שנה בנפרד לאורך זרם 30 השנים ולא שיעור קבוע. שימוש בערך של שנה 1 לכל התקופה היה מקטין את התועלות בשנים המאוחרות ומעוות את הדירוג מול חלופות הגנה אחרות מפני שיטפונות בעלות פרופיל פחמן שונה.

**רשות מקומית**: תוכנית תמיכה בתעסוקה של מועצה עבור תושבים מובטלי טווח ארוך משבצת 150 איש בעבודות בשכר של £11 לשעה. הערכת התוכנית לפי שכר השוק המלא הייתה זוקפת לה תועלת חברתית של £11 כפול שעות העבודה, אך גישת שכר הצל מכירה בכך שאלה לא היו עובדים שנלקחו ממשרות אחרות: עלות ההזדמנות האמיתית של עבודתם לפני התוכנית הייתה נמוכה.

```
Market wage: £11.00/hour
Shadow wage rate (illustrative, high local unemployment): 0.6 × market wage = £6.60/hour
Net social benefit attributable per hour worked ≈ £11.00 − £6.60 = £4.40/hour
  (the "extra" value created by moving genuinely idle labour into production,
   as distinct from the wage itself, which is largely a transfer)
```

משום כך הערכות של תוכניות תעסוקה באזורים עם אבטלה גבוהה יכולות להראות ערך חברתי נטו חיובי, גם כשאותה תוכנית, אילו הופעלה באזור של תעסוקה מלאה שבו העבודה הייתה נלקחת ממשרות אחרות, לא הייתה מראה זאת.

## הקשר להנדסת תוכנה

תמחור צל כמעט אינו נוגע ישירות באספקת תוכנה, אך הוא חשוב בכל פעם שבסיס עסקי טוען לתועלת פחמנית או חברתית משינוי בתחום ה-IT. איחוד מרכזי נתונים שטוען לחיסכון בפחמן, או שירות ללא נייר שטוען להימנעות מפחמן של הדפסה ודואר, חייב להשתמש במחיר הצל הרשמי העדכני של פחמן ולא במספר מומצא, וחייב להחיל את הלוח השנתי הנכון ולא שיעור קבוע, בדיוק כמו בכל תשומה אחרת בהערכת Green Book. ראו [עלות בעלות כוללת ב-IT ממשלתי](../עלות-בעלות-כוללת-ב-it-ממשלתי/) ו[ערך אבטחת הסייבר במגזר הציבורי](../ערך-אבטחת-הסייבר-במגזר-הציבורי/). שניהם זקוקים לא פעם למחיר צל לתשומה שקשה לכמת כספית (סיכון לפריצה, השבתה) לצד פריטים בעלי עלות ישירה.

## מכשולים נפוצים

- **שימוש בנתון מיושן של פחמן או שכר.** שני הערכים מתעדכנים מעת לעת בהנחיות המרכזיות. הערכה שנבנתה על נתון שהוחלף לא תעמוד בביקורת של משרד האוצר.
- **החלת מחיר פחמן צל קבוע על הערכה של עשרות שנים.** הלוח הרשמי עולה עם הזמן. שימוש בערך של שנה 1 לאורך כל התקופה מעוות את פרופיל התועלות או העלויות.
- **בלבול בין שכר הצל לבין הנחה בשכרו בפועל של העובד.** שיעור שכר הצל מתאים את הערכת *ההערכה* של תשומת העבודה, ולא את השכר שהעובד מקבל בפועל. ערבוב ביניהם מזמין (שלא בצדק) הצדקה לשכר נמוך משכר השוק.
- **גזירת מחיר צל מותאם אישית במקום שימוש במחיר הרשמי.** מחירי צל הם מוסכמות מדיניות דווקא כדי שהערכות יהיו ברות השוואה בין משרדים. נתון שהומצא מקומית, גם אם נומק היטב, פוגע בהשוואתיות הזו.

## מקורות

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
