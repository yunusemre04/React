import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getUsers } from './redux/users';


function userDisplay() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const { users } = useSelector(store => store.user);
    console.log(users);

    return (
        <>
            {users.map((user, index) => (
                <div key={index}>{user.name}</div>
            ))}
        </>
    )
}

export default userDisplay