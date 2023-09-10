import React, { Fragment } from "react";

const CartItem = (props) => {
//   const { name, amount, price, onAdd ,description} = props;

  return (
    <Fragment>
      <tr>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>x{props.amount}</td>
        <td>${props.price}</td>
        <td>
          <button onClick={props.onAdd}>
            Add
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default CartItem;
