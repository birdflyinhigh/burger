import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div>
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={() => props.updated(props.type, -1)} >Less</button>
            <button className={classes.More} onClick={() => props.updated(props.type, 1)} >More</button>
        </div>
    </div>


);

export default buildControl;