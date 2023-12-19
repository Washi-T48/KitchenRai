import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Order.css";

function Order() {
  const cookies = new Cookies();
  const [menu, setMenu] = useState([]);
  const [currentTable, setCurrentTable] = useState([]);
  const [receiptNumber, setReceiptNumber] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    if (!cookies.get("receiptNumber")) {
      cookies.set("receiptNumber", (Math.floor(Math.random() * 1000000)), { path: "/" });
    }
    fetch("http://localhost:3000/menu/")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
    if (cookies.get("table")) {
      setCurrentTable(cookies.get("table"));
    }
    setReceiptNumber(cookies.get("receiptNumber"));
    getOrderList();
  }, []);


  const handleMenuClick = (e) => {
    if (e && cookies.get("table")) {
      fetch("http://localhost:3000/orders/additem/" + receiptNumber + "/menu/" + e.target.id + "/table/" + currentTable)
        .then((res) => res.json())
        .then(() => {
          getOrderList();
        });
    }
  };

  const getOrderList = () => {
    var currentReceiptNumber;
    if (receiptNumber == '') {
      currentReceiptNumber = cookies.get("receiptNumber");
    } else {
      currentReceiptNumber = receiptNumber;
    }
    fetch("http://localhost:3000/receipt/" + currentReceiptNumber)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  };

  const editReceiptNumber = (e) => {
    if (e) {
      if (e.target[0].value == '') {
        var generatedReceiptNumber = (Math.floor(Math.random() * 1000000));
        cookies.set("receiptNumber", generatedReceiptNumber, { path: "/" });
        setReceiptNumber(generatedReceiptNumber);
        e.target[0].placeholder = generatedReceiptNumber;
        getOrderList();
      } else {
        cookies.set("receiptNumber", e.target[0].value, { path: "/" });
        setReceiptNumber(e.target[0].value);
        getOrderList();
      }
    }
    getOrderList();
  }

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
              {currentTable == '' ? 'No Table' : 'Table #' + currentTable}
            </div>
            <div className="grid-item" id="transaction">
              Receipt ID :{<><form onSubmit={editReceiptNumber}><input placeholder={receiptNumber} type="number" min="0" max="2147483647" step="1" className="transactionInput" onChange={(e) => setReceiptNumber(e.target.value)}></input></form></>}
            </div>
            <div className="grid-item" id="order-list2">
              <p id="list">Order List</p>
              <div className="grid-item" id="order-list">
                {orderList.map((orderList) => (
                  <div className="order-list-item" id={orderList.order_id} key={orderList.order_id}>
                    <p id={orderList.order_id} key={orderList.order_id} className="orderListItem">T.{orderList.tables_id} | {orderList.menu_id} {orderList.name}</p>
                  </div>
                ))}</div>
            </div>
            {/* <div className="grid-item" id="total">
              <p id="total-text">TOTAL ANYSAX </p>
            </div>
            <div className="grid-item" id="process">
              <button id="process-btn">PROCESS</button>
            </div> */}
          </div>
        </div>
      </body >
    </>
  );
}

export default Order;
