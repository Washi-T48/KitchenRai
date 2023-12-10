import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Table from "./Table";
import Order from "./Order";
import Login from "./Login";
import Kitchen from "./Kitchen";


const router = createBrowserRouter([
  { path: "/", element: <Table /> },
  { path: "order", element: <Order /> },
  { path: "kitchen", element: <Kitchen /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
