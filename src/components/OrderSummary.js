import React from "react";
import { Link } from "react-router-dom";

export default function OrderSummary({ state, cost }) {
  return (
    <div className="col-md-4 order-summary" style={{ height: "220px" }}>
      <h6>Summary</h6>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <h6>Order Total</h6>
          <span className="font-weight-bold">$ {cost}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <h6>Promo Code</h6>
          <span className="font-weight border px-2">Promo 500</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <h6>Shipping</h6>
          <span className="font-weight-bold">$ 200</span>
        </li>
        <div style={{ borderBottomStyle: "dashed" }}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <h6>Discount</h6>
            <span className="font-weight-bold">$ 0</span>
          </li>
        </div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to="/">
            <button className="btn btn-primary">Shop More</button>
          </Link>
          <button className="btn btn-warning">Checkout</button>
        </li>
      </ul>
    </div>
  );
}
