import { useReducer ,useCallback,useEffect} from "react";
import CartContext from "./cart-context";
import axios from "axios";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // if (action.type === "ADD") {
  //   const updateMed = state.items.concat(action.item);
  //   return {
  //     items: updateMed,
  //   };
  // }

  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;
  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.item.id
  );
  let updatedItems;
  if (existingCartItemIndex >= 0) {
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + action.item.amount,
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = state.items.concat(action.item);
  }
  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );



  const crudCrud = `https://crudcrud.com/api/97ef51bdcbb64771be86717a29b1e43c/med`;

  /*--------------------------------->GET DATA FROM  CRUD CRUD <------------------------------ */

  const getDataFromCrud = useCallback(async () => {
    try {
      const response = await axios.get(crudCrud);
      const data = await response.data;
      console.log("GET_Data_From_Crud", data);
      // Loop through the data to add items to the cart
      data.forEach((item) => {
        dispatchCartAction({ type: "ADD", item});
      });
    } catch (error) {
      console.log("Error To Get Data From Crud:", error);
    }
  }, [crudCrud, dispatchCartAction]); // Add any dependencies to the array that are used inside getDataFromCrud

  useEffect(() => {
    getDataFromCrud();
  }, [getDataFromCrud]);

  /*-------------------------------> ADD ITEM TO CART AND POST REQUEST TO CRUD-CRUD<----------------------------------*/

  

  const addItemToCartHandler = async (item) => {
    try {
      const response = await fetch(crudCrud, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }
      const data = await response.json();
      console.log("Added to cart:", data);
      dispatchCartAction({ type: "ADD", item });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };















  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
   
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
