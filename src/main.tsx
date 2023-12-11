import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Table from "./Table.tsx";
import Order from "./Order.tsx";
import Kitchen from "./Kitchen.tsx";
import Login from "./Login.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Table /> },
  { path: "order", element: <Order /> },
  { path: "kitchen", element: <Kitchen /> },
  { path: "login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
