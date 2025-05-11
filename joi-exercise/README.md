# תרגיל וולידציה עם Joi

בתיקיה יש שלד של קוד ב-src/index.js

1. יש ליצור schema של Joi
2. יש לכתוב את וף הפונקציה printValidation, שמבצעת את הולידציה בפועל וקראת את תוצאה.
3. יש לבצע וולידציה עם אותו schema מול ארבעת האובייקטים ב-index.js
4. הפלט יראה כך:

```
Validation successful
Validation successful
----------------------------
Validation failed:
"street" length must be at least 5 characters long
"city" with value "L0s Angeles" fails to match the required pattern: /^[A-Za-z\s]+$/
"state" length must be 2 characters long
"zip" with value "9000" fails to match the required pattern: /^\d{5}(-\d{4})?$/
----------------------------
Validation failed:
"zip" with value "3310A" fails to match the required pattern: /^\d{5}(-\d{4})?$/
```