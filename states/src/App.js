import logo from './logo.svg';
import './App.css';
import {useState} from "react"; 

function App() {

  const [name, setName] = useState("Nursel");
  const [age, setAge] = useState(30);
  const [friends, setFriends] = useState(['Nursel', 'Maya']);
  const [address, setAddress] = useState({title:"Ankara", zip:6000});

  console.log(name, age);
  return (
    <div className="App">
     <h1>Merhaba {name}</h1>
     <h2>{age}</h2>
     <button onClick={() => setName('Tarçın')} >Change name</button>
     <button onClick={() => setAge(28)} >Change age</button>

     <hr/>
      <br/>
      <h2>Friends</h2>
     {
       friends.map((friend, index )=>(
         <div key={index}>{friend}</div>
       ))
     }
     <br/>
     <button onClick={() => setFriends([...friends,'Tarçın'])} >Add new friend</button>

     <hr/>
     <br/>
     <h2>Address</h2>
     <div>{ address.title }  {address.zip}</div>
     <br/>
     <button onClick={() => setAddress({...address, title:"Zonguldak", zip:23646})} >Add new address</button>

    </div>
  );
}

export default App;
