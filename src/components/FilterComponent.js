import React from "react";
import { Link } from "react-router-dom";

export default function FilterComponent({ filteredItems, setSearch }) {
  const filterComponent = document.getElementById("filter");
  const handleClick = (event) => {
    if (event.target.id) {
      // console.log(event.target);
      // console.log(event.target.id);
      // console.log("searching........");
      if (event.target.id !== "search") {
        document.getElementById("filter").style.display = "none";
      }
    } else {
      document.getElementById("filter").style.display = "none";
      // console.log("outside id ", event.target.id);
      // console.log("outside the document");
    }
  };
  if (filterComponent) {
    // console.log(filterComponent);
    if (document.getElementById("filter").style.display === "block") {
      document.addEventListener("click", handleClick);
    }
  }

  return (
    <div
      className="container search-filter"
      id="filter"
      style={{ display: "none" }}
    >
      <ul className="list-unstyled align-items-left">
        {filteredItems.map((item) => (
          <li className="media col-md-6" key={item.id}>
            <img
              src={item.image}
              className="mr-3 img-fluid"
              style={{ width: "64px", height: "64px" }}
              alt="..."
            />

            <div className="media-body text-justify">
              <Link
                to={`/item/name/${item.name}/${item.id}`}
                className="text-decoration-none text-primary"
                onClick={setSearch}
              >
                <h5 className="mt-0 mb-1">{item.name}</h5>
              </Link>
              <p>Price : $ {item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
