import { useState } from 'react';
import { createUser } from '../services/users';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { newUserSchema } from '../schemas/user';

const AddUser = () => {
    const initialValues = {
        name: '',
        isAdmin: false,
        foo: 'bar'
    };

    const validate = (values) => {
        const { error } = newUserSchema.validate(values, { abortEarly: false });
        if (!error) {
            return {};
        }

        // כדי להציג שגיאות ולידציה שקשורות לכל הטופס, ולא לשדה מסויים.
        // לדוגמא, המאפיין הנוסף בשם foo
        setMsg(error.message);

        // פרומט השגיאות שמחזיר ה-Joi אינו תואם את המבנה שה-Formik מצפה לו
        // צריך למפות מפורמט אחד לשני
        // תוצאה של validate של Joi: https://joi.dev/api/?v=17.13.3#validationerror
        // ניתן לראות דוגמא של המבנה ש-Formik מצפה לו כאן: https://formik.org/docs/guides/validation#displaying-error-messages
        const errors = {};
        error.details.forEach(detail => {
            errors[detail.path[0]] = detail.message;
        });
        return errors;
    };

    const onSubmit = (values) => {
        const sendData = async () => {
            let data;
            try {
                data = await createUser(values);
                if (data.error?.message) {
                    setMsg(data.error.message);
                } else {
                    setMsg('User created successfully');
                }
                console.log(data);
            } catch (error) {
                setMsg(error.message);
            }
        };
        sendData();
    };

    const errStyle = { color: 'red', fontStyle: 'italic' };

    const errorRenderer = err => <span style={errStyle}>{err}</span>;

    const [msg, setMsg] = useState('');

    return (
        <>
            <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                {() => (
                    <Form>
                        <Field name="name" placeholder="Name" />
                        <ErrorMessage name="name" render={errorRenderer} />
                        <br />
                        <Field name="isAdmin" type="checkbox" /> Is Admin
                        <ErrorMessage name="isAdmin" render={errorRenderer} />
                        <br />
                        <button type="submit">Add User</button>
                    </Form>
                )}
            </Formik>
            <hr />
            <p style={errStyle}>{msg}</p>
        </>
    );
};

export default AddUser;
