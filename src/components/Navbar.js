import React, { useState } from "react";
import { Link } from "react-router-dom";

import Category from "./Category";
import FilterComponent from "./FilterComponent";

export default function Navbar({
  itemList,
  orders,
  category,
  filterByCategory,
}) {
  const [searchKey, setSearch] = useState("");
  const [items, filterItems] = useState([]);

  const filterDataByKey = (key) => {
    let filteredData = itemList.filter((item) =>
      item.name.toLowerCase().includes(key.toLowerCase())
    );
    return filteredData;
  };

  const changeHandler = (event) => {
    document.getElementById("filter").style.display = "block";
    setSearch(event.target.value);
    let filteredData = filterDataByKey(event.target.value);
    filterItems(filteredData);

    // Have to fix this !! The state updates but the onchange starts after click 2..

    if (event.target.value === "") {
      document.getElementById("filter").style.display = "none";
      filterItems([]);
    }
  };

  const setSearchNull = (event) => {
    setSearch("");
    document.getElementById("filter").style.display = "none";
  };

  return (
    <div className="container-fluid ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">React Cart App</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/" className="nav-link">
              <li className="nav-item active">Home</li>
            </Link>
            <Link to="/cart" className="nav-link">
              <li className="nav-item">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                &nbsp;{orders.length}
              </li>
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </a>
              <Category
                category={category}
                filterByCategory={filterByCategory}
              />
            </li>
            <li className="nav-item">
              <input
                className="form-control mr-sm-2"
                id="search"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={changeHandler}
                value={searchKey}
              />
            </li>
          </ul>
        </div>
      </nav>
      <FilterComponent filteredItems={items} setSearch={setSearchNull} />
      <div className="container-fluid">
        <div className="row mt-3" id="alertMessage">
          
        </div>
      </div>
    </div>
  );
}
