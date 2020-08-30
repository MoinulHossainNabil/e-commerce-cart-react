import React from "react";
import { Link } from "react-router-dom";

export default function Items({ itemList, addToCart }) {
  const items = itemList.map((item) => (
    <div className="card col-md-3 my-2" key={item.id}>
      <Link to={`/item/name/${item.name}/${item.id}`}>
        <img
          src={item.image}
          className="card-img-top img-fluid"
          alt="..."
          style={{ width: "240px", height: "180px" }}
        />
      </Link>
      <div className="card-body">
        <h6 className="card-title">{item.category}</h6>
        <h5 className="card-title">{item.name}</h5>

        <p className="card-text">
          Lorem ipsum dolor eto pare
        </p>
      </div>
      <div className="card-footer row align-items-center justify-content">
        <div className="col-md-6">
          <button
            className="btn btn-primary"
            data-product={item.id}
            onClick={() => addToCart(item)}
          >
            Add To Cart
          </button>
        </div>
        <div className="col-md-6">
          <p className="card-link font-weight-bold mt-1 mt-1">$ {item.price}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="row align-items-center justify-content my-2">{items}</div>
    </div>
  );
}
