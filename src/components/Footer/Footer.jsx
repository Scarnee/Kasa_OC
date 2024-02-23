import React from "react";
import Logo from "../../assets/LOGO.svg";

import "./Footer.css";

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo Kasa"></img>
            <p>2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
