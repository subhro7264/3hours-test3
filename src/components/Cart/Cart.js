import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItem=cartCtx.items.length>0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const cartItems = cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          description={item.description}
          amount={item.amount}
          price={item.price}
        //   onRemove={() => cartItemRemoveHandler(item._id)}
        //   onCrudRemove={() => crudItemRemoveHandler(item._id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ));
      const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
      };
  return (
    <Fragment>
 <div >
      <div>
        <h3>Cart Items</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
      <div>
        <div >
          <span>Total Amount:</span>
          <span>{totalAmount}</span>
        </div>
        <div >
          <button onClick={props.onHideCart} >
            Close
          </button>
          {hasItem && (
            <button >
              Place Order
            </button>
          )}
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Cart
