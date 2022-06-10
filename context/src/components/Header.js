import React from 'react';
import {useTheme} from '../context/ThemeContext';

function Header() {
    const {theme, setTheme} = useTheme();
  return (
    <div>
      Active Theme : {theme}
      <br/>
      <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>Chane Theme Header</button>
    </div>
  );
}

export default Header;
