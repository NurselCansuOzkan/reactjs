import React, {useState, useEffect} from 'react';


const initialValue = {fullname:"", phone_number:""};

function Form({addContact, contacts}) {
    // console.log(addContact);
    const [form, setForm] = useState(initialValue);
    useEffect(()=>{
        setForm(initialValue);
    }, [contacts]);

    const onChangeInput = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname ==="" || form.phone_number === ""){
            return false;
        }

        addContact([...contacts, form]);
        console.log(form);

        


    }
  return (
    <div>
        <form onSubmit={onSubmit} >
            <div>
                <input name='fullname' placeholder='Name' onChange={onChangeInput} value={form.fullname}/>
            </div>
            <div>
                <input name='phone_number' placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number}/>
            </div>
            <div className='btn'>
                <button  >Add</button>
            </div>
        </form>
    </div>
  );
}

export default Form;
