import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Order.css";

function Order() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu/")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  const handleMenuClick = (e) => {
    if (e) {
      fetch("http://localhost:3000/menu/" + e.target.id);
    }
  };

  return (
    <>
      <Nav />
      <body>
        <div className="main-body-order">
          <div className="main-grid-container-order">
            {menu.map((menu) => (
              <div
                className="grid-item"
                id={menu.menu_id}
                key={menu.menu_id}
                onClick={handleMenuClick}
              >
                {menu.name}
              </div>
            ))}
          </div>

          <div className="second-grid-container-order">
            <div className="grid-item" id="table-id">
              {/* {currentTable != '' ? `TABLE - ${currentTable}` : 'TABLE'} */}
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
