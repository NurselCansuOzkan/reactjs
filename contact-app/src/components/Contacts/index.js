import React, {useState, useEffect} from 'react';
import Form from './Form';
import List from './List';
import {} from './styles.css';

function Contacts() {

    const [contacts, setContacts]  = useState([
        {
            fullname:"Nursel",
            phone_number:"0554 556 7676"
        },
        {
            fullname:"Maya",
            phone_number:"0555 555 5555"
        }
    ]);
    useEffect(()=>{
        console.log(contacts);
    }, [contacts]);

  return (
    <div id='container'>
    <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts}  contacts={contacts} />
    </div>
  );
}

export default Contacts;
