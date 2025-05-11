# דוגמאות קוד ותרגילים לתרגול ליווי פרוייקט W171124MR

## דוגמאות קוד

### קונטקס בסיסי - useContext

מציג שמוש בסיסי ב-React context

* [יצירת context עם createContext](useContext/src/App.jsx#L4)
* [סיפוק הערך ל-context עם Context.Provider](useContext/src/App.jsx#L11)
* [קריאת ערך ה-context עם useContext](useContext/src/components/Component2.jsx#L5)

### העברת ערכים מחושבים דרך ה-context

ניתן להעביר כל ערך דרך ה-context. כדי להעביר ריבוי ערכים, יש לעטוף באוקייט (או במערך, אבל פחות נפוץ).

ניתן גם להעביר ערכים המחושבים על סמך משתני state או תוצאות של hooks אחרים.

* ה-context יכול להכיל גם ערכים מחושבים מתוך משתני state או hooks אחרים שהוגדרו בתוך הקומפוננטה. לדומא: [אובייקט style נקבע ב-App.jsx](theme-demo/src/App.jsx#L9)
* נעשה בו שימוש ב-[NavBar.jsx](theme-demo/src/components/NavBar.jsx#L6) וב-[TextContainer.jx](theme-demo/src/components/TextContainer.jsx#L5)
* לא מונע את השימוש במשתנה-state של `theme` בעצמו [כדי ליצור עיצוב נקודתי](theme-demo/src/components/NoteContainer.jsx#L7).

### שמוש ב-React Router

ספריית React Router מאפשרת הגדרת הקבלה בין רכיב נתיב מסויים וקומפוננטה מסויימת, דהיינו שנתיב `X` יביא לכך שקומפוננתטה `Y` תוצג.

תכונה נוספת: מאז גירסא 6.4 מאפשרת יצירת הקבלה נוספת: בין חלק הנתיב והקומפוננטה, לבין הנתונים הנדרשים עבור אותה קומפוננטה ([data APIs](https://reactrouter.com/start/data/data-loading)).

לדוגמא: 

| URL | Component | נתונים - שליפה מהשרת בכתובת המתאימה |
|--|--|--|
| `/products` | `<Products />` | `/ap/products` - רשימת מוצרים |
| `/products/5` | `<Product />` | `/api/products/5` - פרטים נרחבים עבור מוצר ספציפי |
| `/customers` | `<Customers />` | `/ap/customers` - רשימת לקוחות |

* [הגדרת נתיבים עם `createBrowserRouter` ו-`createRoutesFromElements`](react-router-demo/src/routes.jsx#L8)  
  זה מאפשר שימוש ב-data APIs של גירסא 6.4 ומעלה (לא מופיע בדוגמת הקוד)  
  אבל אם לא מתשמשים ב-data APIs, [ניתן להשתמש ב-`BrowserRouter` ו-`Routes`](https://reactrouter.com/start/declarative/routing)
* [ניתוב מקונן - מתחת לנתיב products יש גם נתיב products/:id](react-router-demo/src/routes.jsx#L15)
* [ניתוב דינמי עם פרמטרים](react-router-demo/src/routes.jsx#L15)
* [שמוש ב-`Link` ו-`NavLink`](react-router-demo/src/App.jsx#L13)
* [שימוש ב-`<Outlet />` כדי לקבוע היכן בדף ימוקם התוכן הדינמי שיספק React Router על סמך הנתיב](react-router-demo/src/App.jsx#L21)

## שימוש ב-Joi כדי לבצע ולידציה ו-Formik

ספריית Joi מאפשרת הגדרת כללים לצורה הנכונה של נתונים, ומאפשרת בדיקת נתונים מול אותם כללים, כולל פירוט מדויק של היכן הכללים לא התקיימו.

ספריית Formik חוסכת הרבה מהבלגן של עבודה עם טפסים ב-React: יצירת ריבוי משתני state עבור כל נתון ו-input, חיבור אירועים של ה-input לעדכון ה-state ולבדיקת ולדיציה, ועוד.

* [בניית ה-schema](joi-formik-demo/src/schemas/user.js) (Joi)
* [שימוש ב-`Formik`, `Field`, `ErrorMessage` ו-`Form`](joi-formik-demo/src/AddUser.jsx#L60) (Formik)
* [עדכון משתנה state כל פעם שיש בעיה בוולידציה](joi-formik-demo/src/components/AddUser.jsx#L21). נצרך כשיש שגיאה בכל האובייקט, לעומת `<ErrorMessage />` שמטבל רק במאפיין אחד
* [מיפוי שגיאות ולידציה מ-Joi ל-Formik](joi-formik-demo/src/components/AddUser.jsx#L27)

### אינטרקציה בין token ו-localStorage

* [משלוח בקשת login לשרת monkfish](token-demo/index.html#L27)
* [בהנתן והבקשה הצליחה, שמירת ה-token ב-localStorage](token-demo/index.html#L31)
* [שימוש ב-token השמור ב-localStorage כדי לבצע בקשה נוספת](token-demo/index.html#L42)
* [פעולת ניתוק - הסרת ה-token מה-localStorage](token-demo/index.html#L53)
* שמוש בסיסי ב-axios

## תרגילים

### שמוש ב-context כדי לשלוט ב-theme

* צרו אפליקציה שמגיבה לשינויי theme
* יש ליצור קומפוננטה `NavBar`, שתכיל קומפוננטה ייעודית לשינוי theme
* יש ליצור קומפוננטה `Main` שמכילה קומפוננטה נוספת, שהיא בתורה מכילה p עם טקסט
* יש לאפשר שינוי theme (עם ערכים אפשריים dark ו-light)
* ה-state יישמר ב-`App`.
* גם ה-`NavBar` וגם הקומפוננטה בתוך ה-`Main` יגיבו לשינויי ה-theme.
* אפשר להשתמש ב-prop של style בתוך כל קומפוננטה כדי לעצב. (לא נדרש עיצוב עם דברים יותר מורכבים כמו CSS Modules או Tailwind).

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

### שרת Express פשוט

צרו שרת Express עם ה-endpoints הבאים:

| Method | Enpdpoint | Action |
| -- | -- | -- |
| `GET` | `/` | Returns `"Welcome to the Express server"` |
| `GET` | `/status` | Returns a status object with a `status` property of `"ok"` and a `timestamp` property of the current date/time in ISO string format |
| `POST` | `/echo` | Returns the body sent in with the request |
| `GET` | `/error` | Throws an error; endpoint should return an error status code, and an object with an `error` property containing the error message. |
| `GET` | `/car/:id` | The `id` must be either `1`, `4`, or `15`. The endpoint will return a success string if the `id` is one of these. Otherwise it will return `404` and an error message |
| `POST` | `/car/:id` | The `id` must be either `1`, `4`, or `15`. The endpoint will return a success string if the `id` is one of these. Otherwise it will return `404` and an error message.<br />Also, verify that the received body is an object. |