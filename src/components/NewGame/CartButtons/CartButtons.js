import React from 'react';
import classes from './CartButtons.module.css';
import CartButton from './CartButton/CartButton';
import {HiOutlineShoppingCart} from 'react-icons/hi';

const CartButtons = (props)=>{
    return (<div className={classes.CartButtons}>
        <CartButton>Complete Game</CartButton>
        <CartButton disabled={props.shouldBeDisabled}>Clear Game</CartButton>
        <CartButton disabled={props.shouldBeDisabled} filled> Add to Cart <HiOutlineShoppingCart/> </CartButton>
    </div>)
}

export default CartButtons;
