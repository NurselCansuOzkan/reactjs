import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from 'react';


const name = "Nursel";
const surname = "Ozkan";
const isLoggedIn = false;

function App() {
  // //Bu şekilde de kullanılabilir ama çok fazla bileşen varken mantıklı değil
  // return React.createElement('div', null, 'Hello');

  //jsx kullanımı
  return (
    //Kapsayıcı element yoksa syntax hatası verir <></>, <React.Fragment> da kullanılabilir
    <div>
      <h1>{name}</h1>
      //Koşullu render işlemi
      <h1>
        { isLoggedIn
          ? `Benim adım ${name}, soyadım ${surname}`
          : "Giriş yapmadınız"
        }
      </h1>
    </div>
  );
}

export default App;
