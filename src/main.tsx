import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import './index.css'
import TopNav from "./TopNav.tsx";
import Kitchen from "./Kitchen.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TopNav />
    <BrowserRouter>
      <Routes>
        <Route path="/table" element={<Kitchen />} />
        <Route path="/order" element={<Kitchen />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
