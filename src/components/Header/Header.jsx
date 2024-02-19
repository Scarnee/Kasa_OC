import "./Header.css";
import Logo from "../../assets/LOGO.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src={Logo} alt="logoKasa"></img></Link>
            </div>
            <nav className="navigationBar">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>{" "}
                    <li>
                        <NavLink to="/about">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
