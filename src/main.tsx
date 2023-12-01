import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
// import './index.css'
import TopNav from "./TopNav.tsx";
import "./TopNav.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TopNav />
  </React.StrictMode>
);
