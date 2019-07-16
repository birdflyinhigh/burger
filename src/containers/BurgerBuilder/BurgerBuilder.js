import React, {Component} from 'react';
import Aux from '../../hoc/axu';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


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
        purchasable: false,
        purchasing: false,
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    componentDidMount() {
        this.updatePurchaseState(this.state.ingredients);
    }

    updatePurchaseState(updatedIngredients) {
        const ingredients = {
            ...updatedIngredients
        };
        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    updateIngredientHandler = (type, addition) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0 && addition === -1) {
            return;
        }
        const updatedCount = this.state.ingredients[type] + addition;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const totalPrice = this.state.totalPrice + addition * INGREDIENT_PRICES[type]
        this.setState({
            totalPrice: totalPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    };



    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    updateIngredent={this.updateIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    };


}

export default BurgerBuilder;