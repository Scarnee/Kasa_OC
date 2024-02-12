import '../css/Header.css'
import Logo from "../assets/LOGO.png"

function Header() {
    return(
        <div className="header">
            <img src={Logo} alt="logoKasa"></img>
            <nav className="navigationBar">
                <ul>
                    <li><a href='../pages/main.jsx'>Accueil</a></li>
                    <li><a href='../pages/about.jsx'>A Propos</a></li>
                </ul>
            </nav>
        </div>
    )
    
}

export default Header
