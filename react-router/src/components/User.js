import React, {useEffect, useState} from 'react';
import {useParams, NavLink }  from "react-router-dom";
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

let aa = 'null';
function User() {

const [user, setUser] = useState({});
const [loading, setLoading] = useState(true);
// const [loading, setLoading] = useState(true);
  const {id} = useParams();
  let {url, path} = useRouteMatch;
  
  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{setUser(res.data)})
    .finally(() => setLoading(false))
}, [id])
  return (
    <div>
        
      <h1>User Detail</h1>
      id:{id}
      <br/>

    { loading &&  (<div>Yükleniyor..</div>)}
      
      <br/>
      <code>
      {!loading && JSON.stringify(user)}
      </code>
      <NavLink activeClassName='active' to={`/users/${parseInt(id)+1}`}>Next User {parseInt(id)+1}</NavLink>

      
    </div>
  );
}

export default User;
