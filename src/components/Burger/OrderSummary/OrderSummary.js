import React from "react";
import Button from '../../UI/Button/Button';
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
            <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>

        </Aux>
    )
};

export default orderSummary;