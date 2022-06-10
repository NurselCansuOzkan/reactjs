import React, {useContext} from 'react';
import Button from './Button';
import Header from './Header';
import Profile from "./Profile";

import ThemeContext from '../context/ThemeContext';

function Container() {

    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
        <Button />
        <br/>
        <hr/>
        <Header />
        <hr/>
        <Profile />
    </div>
  );
}

export default Container;
