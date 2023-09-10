import React, { Fragment, useRef } from "react";
import classes from './MedicineForm.module.css';

const MedicineForm = (props) => {
  const nameRef = useRef();
  const descriptionsRef = useRef(); // Changed variable name to match camelCase convention
  const priceRef = useRef();
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredDescriptions = descriptionsRef.current.value; // Updated variable name
    const enteredPrice = priceRef.current.value; // Updated variable name
    const enteredAmount = +amountRef.current.value; // Converted to number directly

    const myObj = {
      id: Math.random().toString(),
      name: enteredName,
      description: enteredDescriptions,
      price: enteredPrice,
      amount: enteredAmount,
    };

    props.addTo(myObj);
    console.log('after Submit data',myObj)
    // Clear the form fields
    nameRef.current.value = '';
    descriptionsRef.current.value = '';
    priceRef.current.value = '';
    amountRef.current.value = '1';
  };

  return (
    <Fragment>
      <div className={classes.div}>
        <form onSubmit={submitHandler} className={classes.form}>
          <label htmlFor="name">Medicine Name</label>
          <input type="text" id="name" ref={nameRef} />
          <label htmlFor="descriptions">Descriptions</label>
          <input type="text" id="descriptions" ref={descriptionsRef} />
          <label htmlFor="price">Price</label>
          <input type="number" id="price" ref={priceRef} />
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" defaultValue={1} ref={amountRef} />
          <button type="submit">Add Products</button>
        </form>
      </div>
    </Fragment>
  );
};

export default MedicineForm;
