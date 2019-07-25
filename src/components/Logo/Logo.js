import React from 'react';
import logoIcon from '../../assets/images/logo.svg';
import classes from './logo.css';


const logo =(props) =>(

    <div className={classes.Logo}>
        <img src={logoIcon} alt=""/>
    </div>


);

export default logo;