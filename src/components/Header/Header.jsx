import Logo from "../../assets/LOGO.png";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logoKasa"></img>
                </Link>
            </div>
            <nav className="navigationBar">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                        {/* Using NavLink to then underline it when active */}
                    </li>
                    <li>
                        <NavLink to="/about">A Propos</NavLink>
                        {/* Using NavLink to then underline it when active */}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
