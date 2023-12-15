import React from "react";
import Nav from "./Nav";
import "./Table.css";

function Table() {

  async function fetchTableData() {
    try {
      const response = await fetch('/table');
      if (!response.ok) {
        throw new Error('Failed to fetch table data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchTableData();

  return (
    <>
      <Nav />
      <body>
        <div className="main-body-table">
          <div className="main-grid-container-table">

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
