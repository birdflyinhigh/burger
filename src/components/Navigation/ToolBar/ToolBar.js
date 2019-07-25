import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';

const toolBar = (props)=> {
    return (
        <header className={classes.TooBar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                ...
            </nav>


        </header>
    )
}

export default toolBar;