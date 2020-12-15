import React from "react";
import classes from "./CartButtons.module.css";
import CartButton from "./CartButton/CartButton";
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartButtons = (props) => {
  return (
    <div className={classes.CartButtons}>
      <CartButton onClick={props.onComplete} disabled={props.shouldAutoCompleteBeDisabled}>Complete Game</CartButton>
      <CartButton disabled={props.shouldBeDisabled} onClick={props.onClear}>
        Clear Game
      </CartButton>
      <CartButton
        disabled={props.shouldBeDisabled || props.shouldPurchase}
        filled
        onClick={props.onSave}
      >
        {" "}
        Add to Cart <HiOutlineShoppingCart />{" "}
      </CartButton>
    </div>
  );
};

export default CartButtons;
