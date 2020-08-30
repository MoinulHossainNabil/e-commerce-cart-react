import React from "react";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  const categoryList = category.map((cat, index) => {
    return (
      <Link to={`/item/category/${cat}`} className="dropdown-item" key={index}>
        <button className="dropdown-item">{cat}</button>
      </Link>
    );
  });
  return (
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      {categoryList}
    </div>
  );
}
