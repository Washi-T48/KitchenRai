import { Fragment } from "react";
function TopNav() {
  const items = ["Table", "Order", "Kitchen", "Promotion"];

  return (
    <Fragment>
      <div className="nav-grid">
        <div className="nav-item-grid">
          {items.map((item) => (
            <div className="nav-item" key="item">
              {item}
            </div>
          ))}
        </div>
        <div className="rightest">
          <div></div>
        </div>
      </div>
    </Fragment>
  );
}

export default TopNav;
