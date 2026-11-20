# מדדי אמון ולגיטימציה

לגיטימציה ותמיכה היא אחת משלוש רגלי "המשולש האסטרטגי" של מארק מור (Mark Moore) בספר *Creating Public Value* (1995), לצד הערך הציבורי עצמו והיכולת התפעולית, והיא הרגל שהכי לעיתים קרובות נשארת ללא מדידה, כי בניגוד לתקציב או לספירת תפוקות, אין ללגיטימציה מספר יחיד ברור שצמוד אליה. מדדי אמון ולגיטימציה הם משפחת המדדים הנגזרים שבהם ממשלות ממלאות את הפער הזה: סקרי אמון במוסדות, דירוגי אמון של גופי פיקוח, נתוני תלונות וערעורים, ומדדי תמיכה פוליטית וחקיקתית.

## למה זה חשוב

הטיעון של מור הוא שמנהל ציבורי שמספק ערך אמיתי אך מאבד לגיטימציה פוליטית וציבורית יאבד בסופו של דבר את סביבת האישור הדרושה להמשך האספקה: התקציב ייחתך, המנדטים יצטמצמו והשירות יורעב, בלי קשר לאיכות התוצאות שלו. לכן לגיטימציה אינה מחשבה שנייה של יחסי ציבור שמוצמדת לכרטיס ניקוד של אספקה. היא תשומה נושאת עומס לשאלה אם אפשר בכלל להמשיך את המשימה, ולכן היא עומדת כפרספקטיבה שווה ב[כרטיס ניקוד של ערך ציבורי](../כרטיס-ניקוד-של-ערך-ציבורי/) ולא כהערת שוליים. תוכנית הסקרים "Trust in Government" של ה-OECD היא הניסיון המוביל ברמה הבין-לאומית לכמת זאת: היא עוקבת אחר חלקם של האזרחים במדינות ה-OECD שאומרים שיש להם אמון בממשלתם הלאומית, והנתונים ארוכי הטווח שלה מראים שאמון רגיש מאוד לזעזועים. גם המשבר הפיננסי של 2008 וגם מגפת COVID-19 הפיקו תנודות חדות ברמה הלאומית, שלא פעם בעקבותיהן התאוששות חלקית בלבד. הניתוח של ה-OECD מוצא בעקביות שה*כשירות* הנתפסת (האם הממשלה מספקת מה שהיא אומרת שתספק) וה*הגינות והיושרה* הנתפסות (האם הממשלה נתפסת כפועלת בלי שחיתות או העדפות) הם שני המניעים החזקים ביותר של נתון האמון, ושונים משביעות רצון מעסקה בודדת. ממשלות מנסות יותר ויותר ליישם לגיטימציה גם ברמה מפורטת יותר: הרגולטורים והמפקחים העצמאיים של בריטניה (משרד מבקר המדינה, נציב הביקורת על השירות הפרלמנטרי והבריאותי, רגולטורים מגזריים כמו Ofsted ו-Care Quality Commission) פועלים כבדיקות לגיטימציה מוסדיות, וממירים את השאלה "האם הציבור עדיין סומך על השירות הזה" לדירוגים הניתנים לביקורת.

## המתמטיקה

אמון ולגיטימציה הוא נושא בעל צורת מסגרת, ופרוקסי כמותיים שמישים שלו הם:

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## דוגמה מעובדת

**רשות מסים לאומית**: טריאנגולציה של לגיטימציה לדוח ערך ציבורי שנתי.

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

תזוזה של אחד מהנתונים האלה בלבד הייתה ראיה חלשה. שלושה מדדים עצמאיים שזזים יחד באותה תקופה הם הדפוס שהופך טענת לגיטימציה לניתנת להגנה.

## הקשר להנדסת תוכנה

מדדי לגיטימציה כמעט אינם מופקים מלוח מחוונים של צוות יחיד, וזהו בעצמו לקח התכנון: יש לבנות צינורות דיווח שיכולים לקלוט ולהתאים נתונים ממקורות חיצוניים עצמאיים (מערכות טיפול בתיקי נציב תלונות, עדכוני דירוג של רגולטורים, ספקי סקרים), ולא לתכנן את דיווח הלגיטימציה כמדד פנימי בלבד, כי טענות לגיטימציה שמקורן פנימי ("אנחנו מדרגים את עצמנו כאמינים") נושאות משקל ראייתי קטן. זו אותה בעיית עצמאות שצוינה לגבי פרספקטיבת הלגיטימציה ב[כרטיס ניקוד של ערך ציבורי](../כרטיס-ניקוד-של-ערך-ציבורי/). צינורות נתוני תלונות וערעורים ראויים לאותה קפדנות באיכות נתונים כמו כל צינור תוצאות שמזין חוזי [תשלום לפי תוצאות](../תשלום-לפי-תוצאות-ואגח-להשפעה-חברתית/), שכן מערך תלונות שדווח בחסר או סווג בצורה גרועה מקטין בשקט בעיית לגיטימציה, עוד לפני שהיא נראית בסקר אמון שנה אחר כך. ראו [מדדי שביעות רצון של אזרחים](../מדדי-שביעות-רצון-של-אזרחים/) למקבילה ברמת העסקה של מדד זה ברמת המוסד, ו[ערך ציבורי](../ערך-ציבורי/) למסגרת המשולש האסטרטגי המלאה של מור שהרגל הזו שייכת לה.

## מכשולים נפוצים

- **התייחסות לשביעות רצון כפרוקסי ללגיטימציה**: אזרח יכול להיות מרוצה מהממשק של עסקה בודדת ובה בעת לא סומך על המוסד בכללותו (או להפך). ראו [מדדי שביעות רצון של אזרחים](../מדדי-שביעות-רצון-של-אזרחים/) לשאלה מדוע יש לדווח על השניים בנפרד.
- **הסתמכות על מדד יחיד שדווח עצמית**: סקר אמון שמופעל פנימית בלי חיזוק עצמאי (נתוני נציב תלונות, דירוגי רגולטור) קל לפסילה כציון עצמי. יש לבצע טריאנגולציה.
- **התעלמות מפירוק דמוגרפי**: נתוני אמון לאומיים מצטברים יכולים להסתיר לגיטימציה שמתפצלת בחדות בין קבוצות מסוימות (לפי גיל, מוצא אתני, הכנסה או אזור). פרסומי Trust in Government של ה-OECD עצמו מפרקים בדיוק מסיבה זו.
- **קריאת ירידה חד-פעמית שנגרמה מזעזוע כמגמה קבועה**: נתוני אמון נעים בחדות סביב משברים (קריסות פיננסיות, מגפות, שערוריות בולטות) ומתאוששים חלקית. אין להקרין נקודת נתונים אחת שלאחר זעזוע לירידה ארוכת טווח בלי עוד נתונים.

## מקורות

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
