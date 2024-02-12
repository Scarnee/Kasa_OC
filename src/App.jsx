// Filename - App.jsx

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
//import Error from "./pages/error.jsx";
//import Location from "./pages/location.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
      path: "/about",
      element:<About/>,
    },
    {
      path: "/location",
      element:<Location/>
    }
]);

function App () {
  return <RouterProvider router={router}/>
}

export default App
