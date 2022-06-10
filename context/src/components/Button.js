import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function Button() {
    const {theme, setTheme} = useContext(ThemeContext);
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
