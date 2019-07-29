import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolBar = (props)=> {
    return (
        <header className={classes.TooBar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>


        </header>
    )
}

export default toolBar;