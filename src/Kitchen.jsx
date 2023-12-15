// import React from "react";
import Nav from "./Nav";
import "./Kitchen.css";

function Kitchen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
  }, []);

  const handleMenuClick = (e) => {
    if (e) {
      console.log(e.target.id);
      if (confirm("Are you sure you want to select this order?")) {
        fetch("http://localhost:3000/orders/" + e.target.id).then((res) => res.json()).then((data) => {
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
        <div className="main-body-kitchen">
          <div className="main-grid-container-kitchen">
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
