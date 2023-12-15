// import React from "react";
import Nav from "./Nav";
import "./Order.css";

function Order() {
  return (
    <>
      <Nav />
      <body>
        <div className="main-body-order">
          <div className="main-grid-container-order">
            <div className="grid-item" id="01">
              01
            </div>
          </div>

          <div className="second-grid-container-order">
            <div className="grid-item" id="table-id">
              01
            </div>
            <div className="grid-item" id="transaction">
              Transaction
            </div>
            <div className="grid-item" id="order-list">
              <p id="list">Order List</p>
            </div>
            <div className="grid-item" id="total">
              <p id="total-text">TOTAL </p>
            </div>
            <div className="grid-item" id="process">
              <button id="process-btn">PROCESS</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Order;
