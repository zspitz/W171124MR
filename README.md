# דוגמאות קוד ותרגילים לתרגול ליווי פרוייקט W171124MR

תאריך: 1.4.2025

## דוגמאות קוד

### קונטקס בסיסי - useContext

מציג שמוש בסיסי ב-React context

* [יצירת context עם createContext](useContext/src/App.jsx#L4)
* [סיפוק הערך ל-context עם Context.Provider](useContext/src/App.jsx#L11)
* [קריאת ערך ה-context עם useContext](useContext/src/components/Component2.jsx#L5)

### העברת ערכים מחושבים דרך ה-context

ניתן להעביר כל ערך דרך ה-context. או ריבוי ערכים, שזה בדרך כלל נעשה עם אובייקט.

ניתן גם להעביר ערכים המחושבים ע"פ משתני state או תוצאות של hooks אחרים.

* [אובייקט style נקבע ב-App.jsx](theme-demo/src/App.jsx#L9)
* נעשה בו שימוש ב-[NavBar.jsx](theme-demo/src/components/NavBar.jsx#L6) וב-[TextContainer.jx](theme-demo/src/components/TextContainer.jsx#L5)
* לא מונע את השימוש במשתנה-state `theme` בעצמו [כדי ליצור עיצוב נקודתי](theme-demo/src/components/NoteContainer.jsx#L7).

* [ה-context יכול להכיל גם ערכים מחושבים מתוך משתני state או hooks אחרים שהוגדרו בתוך הקומפוננטה]

## תרגילים

### שמוש ב-context כדי לשלוט ב-theme

* צרו אפליקציה שמגיבה לשינויי theme
* יש ליצור navbar עם שתי קישורים, וקומפוננטה שינוי theme
* יש ליור main עם קומפוננטה שמכילה p עם טקסט
* יש לאפשר שינוי theme (עם ערכים אפשריים dark ו-light)
* ה-state יישמר ב-App.
* גם ה-navbar וגם הקומפוננטה בתוך ה-main יגיבו לשינויי ה-theme.
* אפשר להשתמש ב-prop של style בתוך כל קומפוננטה

היררכית הקומפוננטות:

```
App
	NavBar
		ThemeSelector
	Main
		TextContainer
```

פתרון התרגיל נמצא בתת-תיקיה theme-demo.

### קטלוג מוצרים עם מטבעות ושערים שונים

1. צרו אפליקציה להצגת קטלוג מוצרים, עם 10 מוצרים
מבחינת הנתונים, מחירי המוצרים יהיו בדולרים
המחירים יוצו בשקלים, ומחיר הדולרים בסוגריים
ניתן יהיה לקבוע גלובלית את שער הדולר בשקל

2. על התרגיל הקודם, יש להוסיף את האפשרות לבחור ריבוי מטבעות
לדוגמא, אם המשתמש יבחר בשקלים, דולרים, ופראנק, המחירים יוצגו בכל המטבעות הללו.
כמובן שצריך לאפשר שליטה על השער עבור כל מטבע.
(המטבע הבסיסי ישאר הדולר)