import React from "react";

export default function Orders({ orders, addToCart, decrement, deleteItem }) {
  const orderItems = orders.map((item) => (
    <div
      className="row d-flex align-items-center justify-content-between cart-items my-2"
      key={item.id}
    >
      <div className="item-image">
        <img
          src={item.image}
          className="img-fluid"
          style={{ width: "86px", height: "86px" }}
          alt=""
        ></img>
      </div>
      <div className="item-name">{item.name}</div>
      <div className="item-remove d-flex align-items-center justify-content-between">
        <i
          className="fa fa-minus font-weight-bold text-danger"
          onClick={() => decrement(item)}
          aria-hidden="true"
          role="button"
        ></i>
        &nbsp;
        <span className="quantity">{item.quantity}</span>
        &nbsp;
        <i
          className="fa fa-plus font-weight-bold text-success"
          onClick={() => addToCart(item)}
          role="button"
        ></i>
      </div>
      <div className="item-price">$ {item.price}</div>
      <div className="item-price">
        <i
          className="fa fa-trash-o text-danger"
          aria-hidden="true"
          onClick={(event) => deleteItem(item)}
          role="button"
        ></i>
      </div>
    </div>
  ));

  return <div>{orderItems}</div>;
}
