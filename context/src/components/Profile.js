import React, { useState}  from 'react';

import {useUser} from '../context/UserContext';

function Profile() {
    const {user, setUser} = useUser();
    console.log(user);

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(()=>{
            setUser({id:1, username:"Nursel", bio:"Lorem ipsum"});
            setLoading(false);
        }, 1500);
    };

    const handleLogout = () => {
        setUser(null);
    }
  return (
    <div>
    {
        !user && (<button onClick={handleLogin} > {loading ? "loading.." :" Login"}</button>)
    }
    
      <code>
      {JSON.stringify(user)}
      </code>

      <br/>
      {
          user && <button onClick={handleLogout} >Logout</button>
      }
    </div>
  );
}

export default Profile;

