import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div>
           <h1>My Website Top Users</h1>
           {
               users.map(user => <Link to={`/users/${user.id}`}>{user.id} </Link>)
           }
           <Outlet />
        </div>
    );
};

export default Users;