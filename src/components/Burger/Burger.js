import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // object to array.
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((item, i) =>{
                return <BurgerIngredient type={igKey} key={igKey+(i+1)}/>
            })
        }).reduce((arr, el) =>{
            return arr.concat(el);

        }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p> please adding ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};


export default burger;