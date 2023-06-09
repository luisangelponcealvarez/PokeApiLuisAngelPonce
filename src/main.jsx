import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./components/404";
import Contacto from "./components/Contacto/Contacto";
import Site from "./components/site";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contact",
    element: <Contacto />,
  },
  {
    path: "/pokemon/1/",
    element: <Site />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
