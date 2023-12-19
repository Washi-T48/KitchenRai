import { useState, useEffect } from "react";
// import React from "react";
import Nav from "./Nav";
import "./Transaction.css";

function Transaction() {
  const [receipt, setReceipt] = useState([])
  const [currentReceipt, setCurrentReceipt] = useState([]);
  const [cusrrentReceiptDetails, setCurrentReceiptDetails] = useState([]);

  function getReceipt() {
    fetch("http://localhost:3000/receipt")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReceipt(data);

      })
  }

  function handleReceiptClick(e) {
    e.preventDefault();
    console.log(e.target.id);
    setCurrentReceipt(e.target.id);
  }

  function handlePay(e) {
    e.preventDefault();
    console.log(e.target.id);
    setCurrentReceipt(e.target.id);
  }

  function handleCancel(e) {
    e.preventDefault();
    console.log(e.target.id);
    setCurrentReceipt(e.target.id);
  }


  useEffect(() => {
    getReceipt();
  }, []);



  return (
    <>
      <Nav />
      <body>
        <div className="main-body-transaction">
          <div className="main-grid-container-transaction">
            {receipt.map((receipt) => (
              <div className="grid-item" id={receipt.receipt_id} key={receipt.receipt_id} onClick={handleReceiptClick}>
                <p id={receipt.receipt_id} key={receipt.receipt_id} className="time">#{receipt.datetime}</p>
                <p id={receipt.receipt_id} key={receipt.receipt_id} className="receiptID">{receipt.receipt_id}</p>
                <p id={receipt.receipt_id} key={receipt.receipt_id} className="total">TABLE</p>
              </div>
            ))
            }
          </div>
          <div className="second-grid-container-transaction">
            <div className="grid-item" id="table-id">
              {currentReceipt != '' ? <>
                RECEIPT #{currentReceipt}
              </> : 'ORDER'}
            </div>
            <div className="grid-item" id="food">
              {cusrrentReceiptDetails != '' ? <></> : 'FOOD'}
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
