import {useState, useMemo, useCallback} from "react";
import Header from "./components/Header";
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  // const data = useMemo(()=>{
  //   return calculateObject(number)
  // },[number]);

  // const data = calculateObject();

  const increment = useCallback(() => {
    setNumber((prevState)=>prevState+1)
  }, []);
  return (
    <div className="App">
    <Header increment={increment} />
    <hr/>
    <h1>{number}</h1>
    <br/><br/>
    <input value={text} onChange={({target})=>{setText(target.value)}} />
    
    </div>
  );
}

function calculateObject(number){
  console.log("Calculating");
  for (let index = 0; index < 1000000; index++) {}
  console.log("Calculate completed");

  return {name:"Nursel", number};
}

export default App;
