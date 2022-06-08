import React, {useEffect, useState} from 'react';


function Users() {

    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
            setUsers(users)
           
        })
        .catch(e => console.log(e))
        .finally(()=>setIsLoading(false))
    }, []);
  return (
    <div>
        <h1>Users</h1>
        {
            isLoading && <div>Loading...</div>
        }
        {
            users.map((user, i)=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default Users