import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function ShowButton({
  setSelectedCartList,
  selectedCartList,
  id,
  name,
  price,
  stock,
  numberOfItemsInCart,
}) {
  const [cartValue, setCartValue] = useState(0);

  const handleButtton = () => {
    if(cartValue!==0){
      let myListToCart = {
        id: id,
        name: name,
        stock: stock,
        cartValue: cartValue,
        price: price * cartValue,
        setCartValue: setCartValue,
      };
  
      setSelectedCartList([...selectedCartList, myListToCart]);
      if (numberOfItemsInCart > 4) {
        setSelectedCartList([...selectedCartList]);
        alert("You have reach maximun books.");
      }
  
      setCartValue(0);
    } else {
      alert("Please specify number of books first.")
      setSelectedCartList([])
    }
   
    // console.log("book name",cartItem.name)
  };

  return (
    <div className="container-buttons">
      <div className="book-price">Rs.{price}</div>
      <div>
        <div>
          <FaAngleUp
            className="container-button-up"
            onClick={() => setCartValue(cartValue + 1)}
          />
        </div>
        <div className="container-value">
          <p> {cartValue} </p>
        </div>
        <div>
          {cartValue > 0 ? (
            <FaAngleDown
              className="container-button-down"
              onClick={() => setCartValue(cartValue - 1)}
            />
          ) : (
            <FaAngleDown className="container-button-down" disabled />
          )}
        </div>
      </div>
      <div className="container-add-to-cart-btn">
        {cartValue <= stock? (
          <button className="add-to-cart-button" onClick={handleButtton}>
            Add to Cart
          </button>
        ) : (
          <button className="add-to-cart-button_nothover" disabled="true">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
}

export default ShowButton;
