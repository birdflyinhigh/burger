import React from "react";

import Aux from '../../../hoc/axu';


const orderSummary = (props) => {
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {Object.keys(props.ingredients)
                    .map((igkey) => (
                        <li key={igkey}><span style={{textTransform: "capitalize"}}>{igkey}</span>: {props.ingredients[igkey]}</li>
                    ))}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;