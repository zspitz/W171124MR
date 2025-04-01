import { useState } from "react"
import { createUser } from "../services/users"

const AddUser = () => {
    const [name, setName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const [msg, setMsg] = useState('')

    const submitHandler = e => {
        e.preventDefault()

        const sendData = async () => {
            let data
            try {
                data = await createUser({ name, isAdmin })
                setMsg(JSON.stringify(data))
            } catch (error) {
                setMsg(error.message)
            }
        }
        sendData()
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input name="name" type="text" placeholder="Name" value={name}
                    onChange={e => setName(e.target.value)} />
                <input type="checkbox" name="isAdmin" checked={isAdmin}
                    onChange={e => setIsAdmin(e.target.checked)}
                /> Is Admin
                <button type="submit">Add User</button>
            </form>
            <p>{msg}</p>
        </>
    )
}

export default AddUser