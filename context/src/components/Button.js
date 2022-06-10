import React from 'react';
import {useTheme} from '../context/ThemeContext';

function Button() {
    const {theme, setTheme} = useTheme();
    console.log();
  return (
    <div>
      Active Theme : {theme} 
    <br/>
      <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>Change Theme</button>
    </div>
  );
}

export default Button;
