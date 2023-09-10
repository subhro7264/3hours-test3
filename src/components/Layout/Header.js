import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import CardContext from "../../store/cart-context";

const Header = (props) => {
    const medCtx=useContext(CardContext);
    const numberOfCartItems=medCtx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
       },0);
  return (
    <Fragment>
      <div className={classes.cart}>
        <div>
          <h3>Medicine</h3>
        </div>
        <button className={classes.cartButton} onClick={props.onShowCart}>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
      </div>
    </Fragment>
  );
};
export default Header;
