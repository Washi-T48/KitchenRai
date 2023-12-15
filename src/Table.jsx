import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Table.css";

var currentTable = '';

function Table() {

  const [table, setTable] = useState([]);

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
      if (confirm("Are you sure you want to select this table?")) {
        fetch("http://localhost:3000/tables/" + e.target.id).then((res) => res.json()).then((data) => {
          console.log(data);
        }
        )
      }
    }
  }

  return (
    <>
      <Nav />
      <body>
        <div className="main-body-table">
          <div className="main-grid-container-table">
            {table.map((table) => (
              <div className="grid-item" id={table.tables_id} style={{ backgroundColor: table.available === 0 ? 'red' : 'green' }} onClick={handleTableClick}>
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
              <button id="reserve-btn">Reserve</button>
            </div>
            <div className="grid-item" id="checkOut">
              <button id="checkOut-btn">Check out</button>
            </div>
          </div>
        </div>
      </body >
    </>
  );
}

export default Table;
