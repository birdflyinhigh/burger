import React, {Component} from 'react';
import Aux from '../../hoc/axu';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    salad: .5,
    bacon: .4,
    cheese: 1.3,
    meat: .7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
    };

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({
            totalPrice: totalPrice,
            ingredients: updatedIngredients,
        })
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredent={this.addIngredientHandler}
                />
            </Aux>
        );
    };


}

export default BurgerBuilder;