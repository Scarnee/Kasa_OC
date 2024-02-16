import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../components/Index/index.css";
import Home from "../pages/Home/home.jsx";
import About from "../pages/About/about.jsx";
import Error from "../pages/Error/error.jsx";
import Location from "../pages/Location/location.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Router() {
    return (
        <div className="main">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/location/:id" element={<Location />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Router;
