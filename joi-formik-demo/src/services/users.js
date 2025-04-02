import { newUserSchema } from '../schemas/user';

const apiUrl = 'http://localhost:3000/users';

const getUsers = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
};

const getUser = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    return data;
};

const setIsAdmin = async (id, isAdmin) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            isAdmin
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    const data = await response.json();
    return data;
};

const deleteUser = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
};

const createUser = async (userData) => {
    const validationResult = newUserSchema.validate(userData);
    if (validationResult.error?.message) {
        return validationResult;
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    const data = await response.json();
    return data;
};

export { getUsers, getUser, setIsAdmin, deleteUser, createUser };
