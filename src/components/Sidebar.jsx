// import React from "react";
// import { useState } from "react";
import { useCategory } from "../context/CategoryContext";
import { BsFillCircleFill } from "react-icons/bs";
import "./Sidebar.css";
function Sidebar() {
  const {
    selectedCategory,
    updateCategory,
    setsortby,
    sortby,
    setselectedcolor,
  } = useCategory();
  return (
    <div className="sidebar">
      <h2>Sort by brand</h2>
      <label>
        <input
          type="checkbox"
          // name="brandFilter"
          checked={selectedCategory === "All"}
          onChange={() => updateCategory("All")}
        />{" "}
        All
      </label>

      <label>
        <input
          type="checkbox"
          name="brandFilter"
          checked={selectedCategory === "Puma"}
          onChange={() => updateCategory("Puma")}
        />{" "}
        Puma
      </label>
      <label>
        <input
          type="checkbox"
          name="brandFilter"
          checked={selectedCategory === "Adidas"}
          onChange={() => updateCategory("Adidas")}
        />{" "}
        Adidas
      </label>
      <label>
        <input
          type="checkbox"
          name="brandFilter"
          checked={selectedCategory === "Nike"}
          onChange={() => updateCategory("Nike")}
        />{" "}
        Nike
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="brandFilter"
          checked={selectedCategory === "Reebok"}
          onChange={() => updateCategory("Reebok")}
        />{" "}
        Reebok
      </label>
      <label>
        <input
          type="checkbox"
          name="brandFilter"
          checked={selectedCategory === "Hrx"}
          onChange={() => updateCategory("Hrx")}
        />{" "}
        Hrx
      </label>
      <br />
      <h2>Sort by order</h2>
      <label>
        <input
          type="radio"
          name="sortOrder"
          checked={sortby === "Ascending"}
          onChange={() => setsortby("Ascending")}
        />{" "}
        Ascending
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="sortOrder"
          checked={sortby === "Descending"}
          onChange={() => setsortby("Descending")}
        />{" "}
        Descending
      </label>
      <h2>sort by color</h2>
      <span>
        <BsFillCircleFill
          color="cream"
          className="cursor"
          onClick={() => setselectedcolor("cream")}
        />
      </span>

      <span>
        <BsFillCircleFill
          color="black"
          className="cursor"
          onClick={() => setselectedcolor("black")}
        />
      </span>
      <span>
        <BsFillCircleFill
          color="white"
          className="cursor"
          onClick={() => setselectedcolor("white")}
        />
      </span>
      <span>
        <BsFillCircleFill
          color="purple"
          className="cursor"
          onClick={() => setselectedcolor("purple")}
        />
      </span>
    </div>
  );
}

export default Sidebar;
