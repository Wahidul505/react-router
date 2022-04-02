import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data));
    },[userId])
    return (
        <div>
            <h2>{userId}</h2>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p><small>User Id: {user.id}</small></p>
        </div>
    );
};

export default UserDetails;