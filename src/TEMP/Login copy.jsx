// import React from "react";

import "./Login.css";
import kitchen_logo from "./assets/kitchen-logo.jpg";
import user_logo from "./assets/user-logo.png";
import password_logo from "./assets/password-logo.png";

function Login() {
  return (
    <>
      <div className="login-header">
        <div className="login-logo">
          <img src={kitchen_logo} />
          <h1 className="logo_name">KITCHEN RAI</h1>
        </div>
        <form action="#">
          <div className="login-signup">
            <button> SIGN-UP </button>
          </div>
        </form>
      </div>
      <div className="login-grid">
        <div className="login-body">
          <div className="AUTH">Welcome to Kitchen Rai</div>
          <div className="user">
            <input type="text" placeholder="Username" id="username" />
            <img className="user_logo" src={user_logo} />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" id="password" />
            <img className="password_logo" src={password_logo} />
          </div>
        </div>
        {/* <div className="login-item-footer">
          <label>
            <input type="checkbox" className="remember-me" />
            <p>Remember me</p>
          </label>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div> */}
      </div>
      <form action="/">
        <button className="login-btn">Login</button>
      </form>
    </>
  );
}

export default Login;
