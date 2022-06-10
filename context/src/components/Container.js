import React from 'react';
import Button from './Button';
import Header from './Header';
import Profile from "./Profile";

import {useTheme} from '../context/ThemeContext';

function Container() {

    const {theme, setTheme} = useTheme();
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
