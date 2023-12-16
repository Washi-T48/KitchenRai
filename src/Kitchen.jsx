import { useState, useEffect } from "react";
// import React from "react";
import Nav from "./Nav";
import "./Kitchen.css";


function Kitchen() {
  const [orders, setOrders] = useState([])
  const [currentOrder, setCurrentOrder] = useState([]);
  const [currentOrderDetails, setCurrentOrderDetails] = useState([]);

  function getOrders() {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
  }


  useEffect(() => {
    getOrders();
  }, []);

  const handleOrderClick = (e) => {
    if (e) {
      fetch("http://localhost:3000/orders/" + e.target.id).then((res) => res.json()).then((data) => {
        setCurrentOrder(data[0].order_id);
        setCurrentOrderDetails(data.map((item) => {
          return item.name + "  โต๊ะ " + item.tables_id;
        }));
      })
    }
  }

  const handleServe = () => {
    if (currentOrder != '') {
      fetch("http://localhost:3000/orders/" + currentOrder + "/serve").then((res) => res.json()).then(() => {
        // console.log(data);
      }).then(() => {
        setCurrentOrder('');
        getOrders();
      })
    }
  }

  const handleCancel = () => {
    if (currentOrder != '') {
      fetch("http://localhost:3000/orders/" + currentOrder + "/cancel").then((res) => res.json()).then(() => {
        // console.log(data);
      }).then(() => {
        setCurrentOrder('');
        getOrders();
      })
    }
  }

  return (
    <>
      <Nav />
      <body>
        <div className="main-body-kitchen">
          <div className="main-grid-container-kitchen">
            {orders.map((orders) => (
              <div className="grid-item" id={orders.order_id} key={orders.order_id} onClick={handleOrderClick}>
                <p id="orderNo">ORDER {orders.order_id}</p> 
                <p id="foodName">{orders.name}</p>
                 <p id="tableNo">TABLE {orders.tables_id}</p> 
              </div>
            ))}
          </div>
          <div className="second-grid-container-kitchen">
            <div className="grid-item,time1" id="table-id">
              {currentOrder != '' ? <>
                ORDER #{currentOrder}
              </> : 'ORDER'}
            </div>
            <div className="grid-item" id="food">
              {currentOrderDetails}
            </div>
            <div className="grid-item" id="time">
              Time
            </div>
            <div className="grid-item" id="done">
              <button id="done-btn" onClick={handleServe}>SERVE</button>
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

export default Kitchen;
