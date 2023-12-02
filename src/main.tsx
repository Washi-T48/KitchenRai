import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import './index.css'
import TopNav from "./TopNav.tsx";
import Kitchen from "./Kitchen.tsx";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TopNav />
    <Kitchen />
  </React.StrictMode>
);
