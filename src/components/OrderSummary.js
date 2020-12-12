import React from "react";
import { Link } from "react-router-dom";

export default function OrderSummary({ cost }) {
  return (
    <>
    <div className="row mt-3 justify-content-center">
      <div className="col-md-4">
        <p className="lead text-monospace">Order Total</p>
      </div>
      <div className="col-md-4">
        <p className="lead font-weight-bold">{cost}</p>
      </div>
    </div>
    </>
    
    
  );
}
