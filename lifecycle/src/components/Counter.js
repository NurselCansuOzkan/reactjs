import {useState, useEffect} from "react";

function Counter(){

    //Hooklar kullanılırken herhangi bir condition içinde olmamalı
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Nursel");

  //Component DOM a mount olduğu anda çalışır
  useEffect(()=>{
    console.log("Component mount edildi");

    const interval = setInterval(()=>{
        setNumber((n)=> n+1 )
    }, 1000)
    
    return () => clearInterval(interval);

  }, []);

  

  //hangi statein güncellendiğini yakalamak için
  useEffect(()=>{
    console.log("number State güncellendi");
  }, [number]);

  useEffect(()=>{
    console.log("name State güncellendi");
  }, [name]);
  
  
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number +1)} >Click</button>
            <br/>
            <hr/>
            {name}
            <br/>
            <button onClick={()=>setName("Maya")} >Click</button>
      </div>
    );
}

export default Counter;