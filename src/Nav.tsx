import { Link } from "react-router-dom";
// import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="NavGrid">
        <Link to="/">Table</Link>
        <Link to="/order">Order</Link>
        <Link to="/kitchen">Kitchen</Link>
      </div>
      <div className="Login">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Nav;
