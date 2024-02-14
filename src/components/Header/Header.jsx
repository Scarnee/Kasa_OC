import './Header.css'
import Logo from "../../assets/LOGO.png"
import {Link} from "react-router-dom"

function Header() {
    return(
        <div className="header">
            <img src={Logo} alt="logoKasa"></img>
            <nav className="navigationBar">
                <ul>
                    <li><Link to='/'>Accueil</Link></li> {/*prop isActive*/}
                    <li><Link to='/about'>A Propos</Link></li>
                </ul>
            </nav>
        </div>
    )
    
}

export default Header
