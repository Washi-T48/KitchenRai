import { Fragment } from "react";
import "./Kitchen.css";
function TopNav() {

    return (
        <Fragment>
            <div className="order-item-grid">
                <div className="order-item" key="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consectetur quidem exercitationem aperiam magnam, dolor illum. Soluta vitae neque a molestiae sapiente dicta voluptates ut esse, asperiores, iste minus officiis.</div>
                <div className="order-item status" key="item">Status 1</div>
            </div>
        </Fragment>
    );
}

export default TopNav;
