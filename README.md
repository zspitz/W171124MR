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

* ה-context יכול להכיל גם ערכים מחושבים מתוך משתני state או hooks אחרים שהוגדרו בתוך הקומפוננטה. לדומא: [אובייקט style נקבע ב-App.jsx](theme-demo/src/App.jsx#L9)
* נעשה בו שימוש ב-[NavBar.jsx](theme-demo/src/components/NavBar.jsx#L6) וב-[TextContainer.jx](theme-demo/src/components/TextContainer.jsx#L5)
* לא מונע את השימוש במשתנה-state `theme` בעצמו [כדי ליצור עיצוב נקודתי](theme-demo/src/components/NoteContainer.jsx#L7).

### שמוש ב-React Router

ספריית React Router מאפשרת הגדרת הקבלה בין רכיב נתיב מסויים וקומפוננטה מסויימת, דהיינו שנתיב x יביא לכ שקומפוננתטה y תוצגת.

תכונה נוספת: מאז גירסא 6.4 מייצרת הקבלה נוספת: בין חלק הנתיב והקומפוננטה, לבין הנתונים הנדרשים עבור אותה קומפוננטה ([data APIs](https://reactrouter.com/start/data/data-loading)).

לדוגמא: 

| URL | Component | נתונים |
|--|--|--|
| `/products` | `<Products />` | `/ap/products` - רשימת מוצרים |
| `/products/5` | `<Product />` | `/api/products/5` - פרטים נרחבים עבור מוצר ספציפי |
| `/customers` | `<Customers />` | `/ap/customers` - רשימת לקוחות |

* [הגדרת נתיבים עם `createBrowserRouter` ו-`createRoutesFromElements`](react-router-demo/src/routes.jsx#L8). זה מאפשר שימוש ב-data APIs של גירסא 6.4 ומעלה (לא מופיע בדוגמת הקוד)  
  אבל אם אין שימוש ב-data APIs, [ניתן להשתמש ב-`BrowserRouter` ו-`Routes`](https://reactrouter.com/start/declarative/routing)
* [ניתוב מקונן - מתחת לנתיב products יש גם נתיב products/:id](react-router-demo/src/routes.jsx#L15)
* [פרמטרים של נתיב](react-router-demo/src/routes.jsx#L15)
* [שמוש ב-`Link` ו-`NavLink`](react-router-demo/src/App.jsx#L13)

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
  המחירים יוצגו בשקלים, ומחיר הדולרים בסוגריים  
  ניתן יהיה לקבוע גלובלית את שער הדולר בשקל

2. על התרגיל הקודם, יש להוסיף את האפשרות לבחור ריבוי מטבעות  
  לדוגמא, אם המשתמש יבחר בשקלים, דולרים, ופראנק, המחירים יוצגו בכל המטבעות הללו.  
  כמובן שצריך לאפשר שליטה על השער עבור כל מטבע.  
  (המטבע הבסיסי ישאר הדולר)  