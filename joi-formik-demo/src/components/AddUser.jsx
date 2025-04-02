import { useState } from 'react';
import { createUser } from '../services/users';
import { useFormik } from 'formik';
import { newUserSchema } from '../schemas/user';
import ErrorBox from './ErrorBox';

const AddUser = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            isAdmin: false,
            foo: 'bar'
        },
        validate: (values) => {
            const { error } = newUserSchema.validate(values, { abortEarly: false });
            if (!error) {
                return {};
            }

            const errors = {};
            error.details.forEach(detail => {
                errors[detail.path[0]] = detail.message;
            });
            return errors;
        },
        onSubmit: values => {
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
        }
    });

    const [msg, setMsg] = useState('');

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input name="name" type="text" placeholder="Name" value={formik.values.name}
                    onChange={formik.handleChange} />
                <ErrorBox error={formik.errors.name} />
                <input type="checkbox" name="isAdmin" checked={formik.values.isAdmin}
                    onChange={formik.handleChange}
                /> Is Admin
                <ErrorBox error={formik.errors.isAdmin} />
                <button type="submit">Add User</button>
            </form>
            <p>{msg}</p>
        </>
    );
};

export default AddUser;
