import React from "react";
import { Link } from "react-router-dom";

import Orders from "./Orders";
import OrderSummary from "./OrderSummary";

export default function Cart({
  orders,
  addToCart,
  decrement,
  deleteItem,
  cost,
}) {
  const totalCost = cost(orders);
  if (orders.length < 1) {
    return (
      <div className="container my-5">
        <h3>No items in cart</h3>
        <Link to="/">
          <button className="btn btn-warning my-3">Go And Shop</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container my-2">
        {/* Bread Cumb */}

        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white">
              <Link to="/" className="breadcrumb-item">
                <li>Home</li>
              </Link>

              <li
                className="breadcrumb-item active text-danger font-weight-bold"
                aria-current="page"
              >
                Cart
              </li>
            </ol>
          </nav>
        </div>

        <hr></hr>

        <div className="row">
          <div className="col-12 order-list">
            {/* Order Details Component */}
            <Orders
              orders={orders}
              addToCart={addToCart}
              decrement={decrement}
              deleteItem={deleteItem}
            />
          </div>
        </div>
        <hr></hr>
        {/* Order Summary */}
        <OrderSummary cost={totalCost} />
      </div>
    );
  }
}
