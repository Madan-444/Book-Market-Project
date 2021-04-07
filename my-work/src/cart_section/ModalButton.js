import React, { useState, useEffect } from "react";

function ModalButton({ cartValue, price, stock,handlePlus,handleMinus}) {
  const [newCartValue, setNewCartValue] = useState(cartValue);
  // const [cartPrice,setCartPrice] = useState(sum)

  const total_Price = price * newCartValue;

  const handleUpButton = ()=> {
    setNewCartValue(newCartValue + 1)
    handlePlus(price)

  }
  const handleDownButton = ()=> {
    setNewCartValue(newCartValue -1)
    handleMinus(price)
  }

  return (
    <section>
      <div className="cart-two-button">
        <div className="cart-increase-decrease">
          {newCartValue < stock ? (
            <button onClick={handleUpButton}>+</button>
          ) : (
            <button onClick={() => setNewCartValue(newCartValue)}>+</button>
          )}
        </div>
        <div className="cart-increase-decrease"> {newCartValue} </div>
        <div className="cart-increase-decrease">
          {newCartValue > 0 ? (
            <button onClick={handleDownButton}>-</button>
          ) : (
            <button>-</button>
          )}
        </div>
        <p className="modal-price">{total_Price}</p>
      </div>

      <div></div>
    </section>
  );
}

export default ModalButton;
