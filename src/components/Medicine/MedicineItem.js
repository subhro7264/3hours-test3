import React, { Fragment, useContext } from "react";

import classes from "./MedicineItem.module.css";
import CartContext from "../../store/cart-context";

const MedicineItem = (props) => {
  const medCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    medCtx.addItem({
      id: props.id,
      key: props.id,
      name: props.name,
      description: props.description,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Fragment>
      <div className={classes.div}>
        <div className={classes.list}>
          <div>
            <h3>{props.name}</h3>
          </div>
          <div>
            <h3>{props.description}</h3>
          </div>
          <div>
            <h3>{props.price}</h3>
          </div>
          <div>
            <h3> {props.amount}</h3>
          </div>
          <button className={classes.Button} onClick={() => addToCartHandler(1)}> Add To Cart</button>
        </div>
      </div>
    </Fragment>
  );
};
export default MedicineItem;
