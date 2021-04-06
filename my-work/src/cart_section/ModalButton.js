import React, { useState, useEffect } from "react";

function ModalButton({ cartValue, price, stock }) {
  const [newCartValue, setNewCartValue] = useState(cartValue);

  const total_Price = price * newCartValue;

  return (
    <section>
      <div className="cart-two-button">
        <div className="cart-increase-decrease">
          {newCartValue < stock ? (
            <button onClick={() => setNewCartValue(newCartValue + 1)}>+</button>
          ) : (
            <button onClick={() => setNewCartValue(newCartValue)}>+</button>
          )}
        </div>
        <div className="cart-increase-decrease"> {newCartValue} </div>
        <div className="cart-increase-decrease">
          {newCartValue > 0 ? (
            <button onClick={() => setNewCartValue(newCartValue - 1)}>-</button>
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
