import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Table.css";



function Table() {

  const [table, setTable] = useState([]);
  const [currentTable, setCurrentTable] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/tables")
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
      })
  }, []);

  const handleTableClick = (e) => {
    if (e) {
      console.log(e.target.id);
      setCurrentTable(e.target.id);
    }
  }

  const handleCheckin = () => {
    if (currentTable !== '') {
      fetch("http://localhost:3000/tables/" + currentTable + "/checkin")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      fetch("http://localhost:3000/tables")
        .then((res) => res.json())
        .then(() => {
          fetch("http://localhost:3000/tables")
            .then((res) => res.json())
            .then((data) => {
              setTable(data);
            })
        })
    }
  }

  const handleCheckout = () => {
    if (currentTable !== '') {
      fetch("http://localhost:3000/tables/" + currentTable + "/checkout")
        .then((res) => res.json())
        .then(() => {
          fetch("http://localhost:3000/tables")
            .then((res) => res.json())
            .then((data) => {
              setTable(data);
            })
        });

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
              {currentTable}
            </div>
            <div className="grid-item" id="status">

            </div>
            <div className="grid-item" id="reserve">
              <button id="reserve-btn" onClick={handleCheckin}>Check in</button>
            </div>
            <div className="grid-item" id="checkOut">
              <button id="checkOut-btn" onClick={handleCheckout}>Check out</button>
            </div>
          </div>
        </div>
      </body >
    </>
  );
}

export default Table;
