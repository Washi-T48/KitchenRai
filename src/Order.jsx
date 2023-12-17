import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Order.css";

function Order() {
  const [menu, setMenu] = useState([]);
  const [receiptNumber, setReceiptNumber] = useState([]);
  const [logAction, setLogAction] = useState([]);
  const [currentMenu, setCurrentMenu] = useState([]);
  const [currentMenuName, setCurrentMenuName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menu/")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
    if (receiptNumber == '') {
      setReceiptNumber(Math.floor(Math.random() * 1000000));
    }
  }, []);


  const handleMenuClick = (e) => {
    if (e) {
      fetch("http://localhost:3000/orders/additem/" + receiptNumber + "/menu/" + e.target.id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data[0]);
          setCurrentMenu(data[0].menu_id);
          setCurrentMenuName(e.target.name);
        });
    }
  };

  // const handleOrder = () => {

  // };

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
              {logAction}
            </div>
            <div className="grid-item" id="transaction">
              {receiptNumber <= 0 ? 'No Item' : '#' + receiptNumber}
            </div>
            <div className="grid-item" id="order-list">
              <p id="list">Order List</p>
            </div>
            <div className="grid-item" id="total">
              <p id="total-text">TOTAL ANYSAX </p>
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
