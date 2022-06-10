import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res) =>{
            const users = res.data;
            setUsers(users);
        })
        .finally(()=>setLoading(false))
    }, []);
  return (
    <div>
    <h1>Users</h1>
      <nav>   

      {loading && (<div>Yükleniyor...</div>)}
        {
            
            users.map((user)=>(
                <li key={user.id}>
                    <Link to={`/user/${user.id}`} >{user.name}</Link>
                </li>
            ))
        }
       
            
      </nav>
    </div>
  );
}

export default Users;
