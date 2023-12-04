import { Fragment } from "react";
import "./TopNav.css";
function TopNav() {

  return (
    <>
      <div className="nav-grid">
        <div className="nav-item-grid">
          <a href="/table"><div className="nav-item" key="item">Table</div></a>
          <a href="/order"><div className="nav-item" key="item">Order</div></a>
          <a href="/kitchen"><div className="nav-item" key="item">Kitchen</div></a>
        </div>
      </div>
    </>
  );
}

export default TopNav;