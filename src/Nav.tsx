import { Link } from "react-router-dom";
import './Nav.css'
import exit_logo from "./assets/exit-logo.svg"

function Nav() {
  return (
    <nav>
      <Link to="/">Table</Link>
      <Link to="/order">Order</Link>
      <Link to="/kitchen">Kitchen</Link>
      <Link to="/login" className="login"><img className="exit_logo" src={exit_logo} /></Link>
      
    </nav>
  );
}

export default Nav;
