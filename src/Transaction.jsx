import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Transaction.css";
import Cookies from "universal-cookie";

function Transaction() {
  const cookies = new Cookies();
  const [receipt, setReceipt] = useState([])
  const [currentReceipt, setCurrentReceipt] = useState([]);
  const [orderList, setOrderList] = useState([]);

  const getReceipt = () => {
    fetch("http://localhost:3000/receipt")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReceipt(data);
      })
  }

  const getOrderList = () => {
    setOrderList([]);
    var currentReceiptNumber = cookies.get("receiptNumber");
    console.log(currentReceiptNumber);
    fetch("http://localhost:3000/receipt/" + currentReceiptNumber)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  }



  const handleReceiptClick = (e) => {
    cookies.set("receiptNumber", e.target.id, { path: "/" });
    setCurrentReceipt(e.target.id);
    getOrderList();
  }

  const handlePay = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setCurrentReceipt(e.target.id);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setCurrentReceipt(e.target.id);
  }


  useEffect(() => {
    if (cookies.get("receiptNumber")) {
      setCurrentReceipt(cookies.get("receiptNumber"));
    }
    getReceipt();
    if (cookies.get("receiptNumber")) {
      getOrderList();
    }
  }, []);



  return (
    <>
      <Nav />
      <body>
        <div className="main-body-transaction">
          <div className="main-grid-container-transaction">
            {receipt.map((receipt) => (
              <div className="grid-item" id={receipt.receipt_id} key={receipt.receipt_id} onClick={handleReceiptClick}>
                <p id={receipt.receipt_id} key={receipt.receipt_id} className="time">{receipt.datetime}</p>
                <p id={receipt.receipt_id} key={receipt.receipt_id} className=""></p>
                <p id={receipt.receipt_id} key={receipt.receipt_id} className="receiptID">#{receipt.receipt_id}</p>
              </div>
            ))
            }
          </div>
          <div className="second-grid-container-transaction">
            <div className="grid-item" id="table-id">
              {currentReceipt != '' ? <>
                RECEIPT #{currentReceipt}
              </> : 'RECEIPT'}
            </div>
            <div className="grid-item" id="food">
              {orderList.map((orderList) => (
                <p id={orderList.receipt_id} key={orderList.receipt_id} className="foodName">
                  {orderList.name} - {orderList.price}
                </p>
              ))}
            </div>
            <div className="grid-item" id="time">
              Time
            </div>
            <div className="grid-item" id="done">
              <button id="done-btn" onClick={handlePay}>PAY</button>
            </div>
            <div className="grid-item" id="cancel">
              <button id="cancel-btn" onClick={handleCancel}>CANCEL</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Transaction;
