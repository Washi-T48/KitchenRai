// import React from "react";
import Nav from "./Nav";
import "./Kitchen.css";

function Kitchen() {
  return (
    <>
      <Nav />
      <body>
        <div className="main-body-kitchen">
          <div className="main-grid-container-kitchen">
            <div className="grid-item" id="01">
              01
            </div>
            <div className="grid-item" id="02">
              02
            </div>
            <div className="grid-item" id="03">
              03
            </div>
            <div className="grid-item" id="04">
              04
            </div>
            <div className="grid-item" id="05">
              05
            </div>
            <div className="grid-item" id="06">
              06
            </div>
            <div className="grid-item" id="07">
              07
            </div>
          </div>

          <div className="second-grid-container-kitchen">
            <div className="grid-item" id="table-id">
              01
            </div>
            <div className="grid-item" id="food">
              Food Name x1
            </div>
            <div className="grid-item" id="time">
              Time
            </div>
            <div className="grid-item" id="done">
              <button id="done-btn">Done</button>
            </div>
            <div className="grid-item" id="cancel">
              <button id="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Kitchen;
