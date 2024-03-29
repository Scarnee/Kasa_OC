import { Link } from "react-router-dom";

import "./error.css";

function Error() {
    return (
        <div className="mainError">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/" className="homeLink">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
