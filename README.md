# דוגמאות קוד ותרגילים לתרגול ליווי פרוייקט W171124MR

תאריך: 1.4.2025

## דוגמאות קוד

### קונטקס בסיסי - useContext

מציג שמוש בסיסי ב-React context

* createContext - [App.jsx](useContext\src\App.jsx)
* Context.Provider - [App.jsx](useContext\src\App.jsx)
* useContext - [Component2.jsx](useContext\src\components\Component2.jsx)

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