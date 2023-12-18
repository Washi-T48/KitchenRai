import { Link } from "react-router-dom";
import './Nav.css';
import exit_logo from "./assets/exit-logo.svg";



function Nav() {
  return (
    <div className="nav-grid">
      <div className="nav-item-grid">
        <div className="nav-item" >
          <Link to="/">Table</Link>
        </div>
        <div className="nav-item">
          <Link to="/order">Order</Link>
        </div>
        <div className="nav-item">
          <Link to="/transaction">Transaction</Link>
        </div>
        <div className="nav-item" id="kitchen-nav">
          <Link to="/kitchen">Kitchen</Link>
        </div>
      </div>
      <div className="logout">
        <div>
          <Link to="/login" className="login" ><img className="exit_logo" src={exit_logo} /></Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
