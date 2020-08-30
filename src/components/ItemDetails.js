import React from "react";
import {} from "react-router-dom";

export default function ItemDetails({ itemList, match, addToCart }) {
  let item = {};
  itemList.forEach((data) => {
    if (data.id === Number(match.params["id"])) {
      item = data;
    }
  });
  const isItemInCart = false;
  const button = isItemInCart ? (
    <button className="btn btn-primary">Go To Cart</button>
  ) : (
    <button className="btn btn-warning">Add To Cart</button>
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 border">
          <div className="row">
            <div className="col-md-5 border item-image py-3">
              <img
                className="img-fluid"
                src={item.image}
                alt="item"
                style={{ width: "auto", height: "480px" }}
              ></img>
            </div>
            <div className="col-md-7 product-details py-3 text-justify">
              <p className="font-weight-bold text-black">Title : {item.name}</p>
              <p className="font-weight-bold text-black">
                Category :{" "}
                <span className="bg-warning text-white font-weight-bold px-2">
                  {item.category}
                </span>
              </p>
              <p className="font-weight-bold text-black">
                Color : {item.color}
              </p>
              <p className="font-weight-bold text-black">
                Price : $ {item.price}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 font-weight-bold text-justify py-3"
          style={{ backgroundColor: "#f6f6f6" }}
        >
          <p style={{ color: "#666" }}>
            <i className="fa fa-money" aria-hidden="true"></i>
            &nbsp;Cash On Delivery
          </p>
          <p style={{ color: "#666" }}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
            &nbsp;3 Days Return
          </p>
          <p style={{ color: "#666" }}>
            <i className="fa fa-usd" aria-hidden="true"></i>
            &nbsp;Delivery Charge : $ 1
          </p>
          <hr></hr>
          <p style={{ color: "#666" }}>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            &nbsp;Happy Shoping !!
          </p>
        </div>
      </div>
    </div>
  );
}
