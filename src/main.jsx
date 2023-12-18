import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Table from "./Table.jsx";
import Order from "./Order.jsx";
import Kitchen from "./Kitchen.jsx";
import Login from "./Login.jsx";
import Transaction from "./Transaction.jsx";

const router = createBrowserRouter([
  { path: "/", element: React.createElement(Table) },
  { path: "order", element: React.createElement(Order) },
  { path: "kitchen", element: React.createElement(Kitchen) },
  { path: "login", element: React.createElement(Login) },
  { path: "transaction", element: React.createElement(Transaction)},
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   React.createElement(React.StrictMode, null,
//     React.createElement(RouterProvider, { router: router })
//   )

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(RouterProvider, { router: router })
);