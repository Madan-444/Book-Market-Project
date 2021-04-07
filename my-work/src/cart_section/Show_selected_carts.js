import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import ModalButton from "./ModalButton";

function Show_selected_carts({
  selectedCartList,
  setSelectedCartList,
  setNumberOfItem,
  sum,
}) {
  const { isCartOpen, closeModal } = useGlobalContext();
  const noOfItemsInCart = selectedCartList.length;
  const [mySum, setMysum] = useState(0);

  // price will come from modalButton component to calculate grandTotal
  const handlePlus = (price) => {
    setMysum(mySum + price);
  };
  const handleMinus = (price) => {
    setMysum(mySum - price);
  };
  useEffect(() => {
    setNumberOfItem(noOfItemsInCart);
  }, [noOfItemsInCart]);

  return (
    <div
      className={`${isCartOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <div className="modal-container">
        <h3>You have {noOfItemsInCart} items in Cart</h3>
        <button className="close-modal-btn" onClick={() => closeModal()}>
          <FaTimes></FaTimes>
        </button>
        <div>
          <div className="cart-refrence-item">
            <h5>Index</h5>
            <h5>Book Name</h5>
            <h5>No Of Books</h5>
            <h5>Total Price (Rs)</h5>
          </div>
          <div className="horizontal-line"></div>

          {selectedCartList.map((book, index) => {
            const { id, name, cartValue, price, stock } = book;

            return (
              <section key={id} className="container-for-book">
                <div className="cart-items">
                  <p className="id">{index + 1}</p>
                  <p className="name">{name}</p>
                  <p className="amount">
                    <ModalButton
                      cartValue={cartValue}
                      stock={stock}
                      price={price / cartValue}
                      handlePlus={handlePlus}
                      handleMinus={handleMinus}
                    />
                  </p>
                </div>
                <div className="horizontal-line-2"></div>
              </section>
            );
          })}
          {noOfItemsInCart !== 0 && (
            <div className="grand-total">
              <h3 className="grand-total-h3">Grand Total</h3>

              <h3 className="grand-total-clearcart">
                <buton onClick={() => setSelectedCartList([])}>
                  Clear Cart??
                </buton>
              </h3>
              <h3 className="grand-total-value">Rs. {sum + mySum}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Show_selected_carts;
