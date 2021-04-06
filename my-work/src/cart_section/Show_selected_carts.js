import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import ModalButton from "./ModalButton";

function Show_selected_carts({ selectedCartList, setNumberOfItem }) {
  const { isCartOpen, closeModal } = useGlobalContext();
  const noOfItemsInCart = selectedCartList.length;
  const [amountInModal, setAmountInModal] = useState(null);

  useEffect(() => {
    setNumberOfItem(noOfItemsInCart);
  }, [noOfItemsInCart]);


  return (
    <div
      className={`${isCartOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <div className="modal-container">
        <h3>You have {noOfItemsInCart} total items in Cart</h3>
        <button className="close-modal-btn" onClick={() => closeModal()}>
          <FaTimes></FaTimes>
        </button>
        <div>
          <div className="cart-refrence-item">
            <h5>Index</h5>
            <h5>Book Name</h5>
            <h5>No Of Books</h5>
            <h5>Total Price</h5>
          </div>
          <div className="horizontal-line"></div>


          {selectedCartList.map((book, index) => {

            const { id, name, cartValue, price,stock } = book;

            return (
              <section key={id} className="container-for-book">
                <div className="cart-items">
                  <p className="id">{index + 1}</p>
                  <p className="name">{name}</p>
                  <p className="amount">
                    <ModalButton cartValue={cartValue} stock={stock} price={price/cartValue} />
                  </p>
                </div>
                <div className='horizontal-line-2'></div>
              </section>
              
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Show_selected_carts;
