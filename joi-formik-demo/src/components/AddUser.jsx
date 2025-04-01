import { useState } from "react"
import { createUser } from "../services/users"
import { useFormik } from "formik"

const AddUser = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            isAdmin: false
        },
        // validate: (values) => newUserSchema.validate(values),
        onSubmit: values => {
            const sendData = async () => {
                let data
                try {
                    data = await createUser(values)
                    setMsg(JSON.stringify(data))
                } catch (error) {
                    setMsg(error.message)
                }
            }
            sendData()
        }
    })

    const [msg, setMsg] = useState('')

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input name="name" type="text" placeholder="Name" value={formik.values.name}
                    onChange={formik.handleChange} />
                <input type="checkbox" name="isAdmin" checked={formik.values.isAdmin}
                    onChange={formik.handleChange}
                /> Is Admin
                <button type="submit">Add User</button>
            </form>
            <p>{msg}</p>
        </>
    )
}

export default AddUser