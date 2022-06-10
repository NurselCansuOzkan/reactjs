import React, {useEffect, useState} from 'react';
import { NavLink ,Route, useRouteMatch, Switch} from 'react-router-dom';
import axios from 'axios';
import User from './User';

function Users() {
   

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    let { path, url } = useRouteMatch();
    console.log(path, url);
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
      <ul>   

        {loading && (<div>Yükleniyor...</div>)}
        {
            
            users.map((user)=>(
                <li key={user.id}>
                    <NavLink activeClassName='active' to={`${url}/${user.id}`} >{user.name}</NavLink>
                </li>
            ))
        }
       
            
      </ul>

    <Switch>
        <Route exact path={path}>
            <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}>
            
        </Route>
    </Switch>

    </div>
  );
}

export default Users;
