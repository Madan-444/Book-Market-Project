import React, { useState, useEffect } from "react";

function FilterByGenre({ myArrayOfGenre, filterBooksByGenre }) {
  const [genre, setMyGenre] = useState("");

  const handleGenre = (e) => {
    console.log("e.target.value", e.target.value);
    filterBooksByGenre(e.target.value);
    setMyGenre(e.target.value);
  };
  return (
    <div>
      <label className="filter-heading">Filter By Genre </label>
      <select value={genre} onChange={handleGenre} className="filter-input-box">
        {myArrayOfGenre.map((myGenre, index) => {
          return (
            <option className="filte-input-option" value={myGenre} key={index}>
              {myGenre}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterByGenre;
