import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../components/Index/index.css";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Error from "../pages/error.jsx";
//import Location from "../pages/location.jsx";

function Router() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/*<Route path="/location/:id" element={<Location />} />*/}
                <Route path="/*" element={<Error />} />
            </Routes>
       
    );
}

export default Router;
