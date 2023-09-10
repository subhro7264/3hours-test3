import React, { Fragment,useState } from "react";
import MedicineForm from "./MedicineForm";
import MedicineItem from "./MedicineItem"
// import CardContext from "../../store/cart-context";


const Med = (props) => {
    const [orderTable, setOrderTable] = useState([]);
    const orderHandler = (order) => {
      setOrderTable((perOrder) => {
        return [order, ...perOrder];
      });
    };

    const products = orderTable.map((product) => (
      <MedicineItem
        key={product.id}
        id={product.id}
        price={product.price}
        name={product.name}
        enteredDescriptions={product.enteredDescriptions}
      />
    ));
    console.log('orderTableData:',orderTable)
  return (
    <Fragment>
      <MedicineForm addTo={orderHandler}/>
      {products}
    </Fragment>
  );
};
export default Med;
