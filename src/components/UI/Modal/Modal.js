import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/axu';
import BackDrop from '../BackDrop/BackDrop';


const modal = (props) => (
    <Aux>
        <BackDrop show={props.show} modalClosed={props.modalClosed}/>
        <div className={classes.Modal}
             style={{
                 transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
                 opacity: props.show ? 0.8 : 0
             }}
        >
            {props.children}
        </div>
    </Aux>

);

export default modal;