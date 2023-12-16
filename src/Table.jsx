import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Table.css";



function Table() {

  const [table, setTable] = useState([]);
  const [currentTable, setCurrentTable] = useState([]);
  const [status, setStatus] = useState([true]);

  function getTable() {
    fetch("http://localhost:3000/tables")
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
      })
  }

  function getStatus(id) {
    fetch("http://localhost:3000/tables/" + id)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data[0].available);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3000/tables")
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
      })
  }, []);

  const handleTableClick = (e) => {
    if (e) {
      setCurrentTable(e.target.id);
      getStatus(e.target.id);
    }
  }

  const handleCheckin = () => {
    if (currentTable !== '') {
      fetch("http://localhost:3000/tables/" + currentTable + "/checkin")
        .then((res) => res.json())
        .then(() => {
          getTable();
          getStatus(currentTable);
        })
    }
  }

  const handleCheckout = () => {
    if (currentTable !== '') {
      fetch("http://localhost:3000/tables/" + currentTable + "/checkout")
        .then((res) => res.json())
        .then(() => {
          getTable();
          getStatus(currentTable);
        })
    }
  }

  return (
    <>
      <Nav />
      <body>
        <div className="main-body-table">
          <div className="main-grid-container-table">
            {table.map((table) => (
              <div className="grid-item" id={table.tables_id} key={table.tables_id} style={{ backgroundColor: table.available === 0 ? 'rgb(223, 56, 56)' : 'rgb(52, 209, 52)' }} onClick={handleTableClick}>
                {table.number}
              </div>
            ))}
          </div>
          <div className="second-grid-container-table">
            <div className="grid-item" id="table-id">
              {currentTable != '' ? `TABLE - ${currentTable}` : 'TABLE'}
            </div>
            <div className="grid-item" id="status">
              Status = {status ? 'Available' : 'Not Available'}
            </div>
            <div className="grid-item" id="reserve">
              <button id="reserve-btn" onClick={handleCheckin}>CHECK IN</button>
            </div>
            <div className="grid-item" id="checkOut">
              <button id="checkOut-btn" onClick={handleCheckout}>CHECK OUT</button>
            </div>
          </div>
        </div>
      </body >
    </>
  );
}

export default Table;
