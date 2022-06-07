import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from 'react';
import User from './components/User';


// const name = "Nursel";
// const surname = "Ozkan";
// const age = 30;
// const isLoggedIn = false;
const friends = [
  {
    id:1,
    name:"Tarçın"
  },
  {
    id:2,
    name:"Maya"
  },
  {
    id:3,
    name:"Bade"
  }];
function App() {
  // //Bu şekilde de kullanılabilir ama çok fazla bileşen varken mantıklı değil
  // return React.createElement('div', null, 'Hello');

  //jsx kullanımı
  return (
    //Kapsayıcı element yoksa syntax hatası verir <></>, <React.Fragment> da kullanılabilir
    <div>
      <User 
      name="Nursel" 
      surname="Ozkan" 
      isLoggedIn={true} 
      age={30}
      friends={friends} 
      address={{
        title: "Ankara",
        zip: 6000,
      }}
      />


    {  /*<h1>{name}</h1>*/}
     { /* Koşullu render işlemi */}
      {/*<h1>
        { isLoggedIn
          ? `Benim adım ${name}, soyadım ${surname}`
          : "Giriş yapmadınız"
        }
      </h1>*/}
    </div>
  );
}

export default App;
