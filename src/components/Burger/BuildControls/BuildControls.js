import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: "Salad", type: 'salad'},
    {label: "Bacon", type: 'bacon'},
    {label: "Cheese", type: 'cheese'},
    {label: "Meat", type: 'meat'},
];

// functional components

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(
                control => (
                    <BuildControl
                        key={control.label}
                        label={control.label}
                        type={control.type}
                        updated={props.updateIngredent}
                    />
                )
            )}
        </div>
    )
};

export default buildControls;