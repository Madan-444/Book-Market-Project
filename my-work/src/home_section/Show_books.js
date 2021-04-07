import React, { useState } from "react";
import book_set from "../book_set1";
import { GiShoppingCart } from "react-icons/gi";
import ShowButton from "./ShowButton";
import Show_selected_carts from "../cart_section/Show_selected_carts";
import { useGlobalContext } from "../context";
import FilterByGenre from "../filter_by_genre/FilterByGenre";

const myCategories = new Set(book_set.map((item) => item.genre));
const myArrayOfGenre = ["all", ...myCategories];

function Show_books() {
  const { openModal } = useGlobalContext();
  const [bookList, setBookList] = useState(book_set);
  const arrOfitem = [];

  const filterBooksByGenre = (category) => {
    console.log("myCategory value", category);
    const booksByCategory = book_set.filter(
      (books) => books.genre === category
    );
    setBookList(booksByCategory);
  };

  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const [selectedCartList, setSelectedCartList] = useState([]);

  selectedCartList.map((book)=> {
    arrOfitem.push(book.price)
  })
 
  let sum = arrOfitem.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  },0);
  console.log("The sum of price item in show cart is:",sum)


  return (
    <div className="book-item">
      <div className="filter-container">
        <FilterByGenre
          myArrayOfGenre={myArrayOfGenre}
          filterBooksByGenre={filterBooksByGenre}
        />
      </div>

      <div className="container__cart-item">
        <button onClick={() => openModal()}>
          <GiShoppingCart className="icon-cart" />
          <p className="noOfCarts">{numberOfItemsInCart}</p>
        </button>
      </div>
      <div className="items-container">
        {bookList.map((book_details, index) => {
          const {
            id,
            name,
            image,
            stock,
            price,
            author,
            genre,
            published_date,
          } = book_details;
          const nepaliPrice = parseInt(price.split("$")[1] * 100);
          const dateFormat_by_me = published_date.split("/");
          const dd = dateFormat_by_me[2];
          const mm = dateFormat_by_me[1];
          const yyyy = dateFormat_by_me[0];
          const formatedDate = `${dd}-${mm}-${yyyy}`;

          return (
            <section key={id} className="book-item__boxes">
              <div className="grid-container">
                <div>
                  <div className="book-item-details">
                    <p className="book-name">Name : {name} </p>
                    <p>Author: {author}</p>
                    <p>Genre: {genre}</p>
                    <p>Only {stock} items left</p>
                    <p>Created Date: {formatedDate}</p>
                  </div>
                </div>
                <img src={image} alt={name} className="book-item-img" />

                <ShowButton
                  setSelectedCartList={setSelectedCartList}
                  selectedCartList={selectedCartList}
                  name={name}
                  stock={stock}
                  id={id}
                  price={nepaliPrice}
                  numberOfItemsInCart={numberOfItemsInCart}
                />
              </div>
            </section>
          );
        })}
      </div>
      <Show_selected_carts
      sum ={sum}
        setNumberOfItem={setNumberOfItemsInCart}
        selectedCartList={selectedCartList}
        setSelectedCartList={setSelectedCartList}
      />
    </div>
  );
}

export default Show_books;
