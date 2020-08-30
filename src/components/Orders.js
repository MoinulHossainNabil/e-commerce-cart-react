import React from "react";

export default function Orders({ orders, addToCart, decrement, deleteItem }) {
  const orderItems = orders.map((item) => (
    <div
      className="row single-item align-items-center justify-content"
      key={item.id}
    >
      <div className="col-md-2 item-image">
        <img
          src={item.image}
          className="img-fluid"
          style={{ width: "86px", height: "86px" }}
          alt=""
        ></img>
      </div>
      <div className="col-md-2 item-name">{item.name}</div>
      <div className="col-md-2 item-remove">
        <i
          className="fa fa-minus font-weight-bold text-danger"
          onClick={() => decrement(item)}
          aria-hidden="true"
          role="button"
        ></i>
        &nbsp;
        <span>{item.quantity}</span>
        &nbsp;
        <i
          className="fa fa-plus font-weight-bold text-success"
          onClick={() => addToCart(item)}
          role="button"
        ></i>
      </div>
      <div className="col-md-2 item-price">$ {item.price}</div>
      <div className="col-md-1 item-price">
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
