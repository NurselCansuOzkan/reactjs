import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from 'react';

function App() {
  // //Bu şekilde de kullanılabilir ama çok fazla bileşen varken mantıklı değil
  // return React.createElement('div', null, 'Hello');

  //jsx kullanımı
  return (
    //Kapsayıcı element yoksa syntax hatası verir <></>, <React.Fragment> da kullanılabilir
    <div>
      <h1>Hello React</h1>
      <Header />
      <p className="xyz">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. 
      </p>

      <label htmlFor="myInput">
      Name
      <input type="text" id='myInput' />
      </label>


    </div>
  );
}

export default App;
