import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import '../components/Error/error.css'

function Error() {
    return (
        <div className="mainError">
            <Header />
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/" className="homeLink">Retourner sur la page d'accueil</Link>
            <Footer />
        </div>
    );
}

export default Error;
