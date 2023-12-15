import React from "react";
import { useState, useEffect } from "react";
// import fetch from 'node-fetch';
import Nav from "./Nav";
import "./Table.css";
import TableList from "./TableList";

function Table() {

  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tables")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTable(data);
      })
  }, []);

  return (
    <>
      <Nav />
      <body>
        <div className="main-body-table">
          <div className="main-grid-container-table">
            {/* ตรงนี้ */}
            {/* https://youtu.be/qdCHEUaFhBk */}
            {table && <TableList table={table} />}
          </div>
          <div className="second-grid-container-table">
            <div className="grid-item" id="table-id">
              01
            </div>
            <div className="grid-item" id="status">
              Status =
            </div>
            <div className="grid-item" id="reserve">
              <button id="reserve-btn">Reserve</button>
            </div>
            <div className="grid-item" id="checkOut">
              <button id="checkOut-btn">Check out</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Table;
