import Dropdown from "./Dropdown";
import '../css/valeurs.css'

function Valeurs() {
    return (
        <ul className="listValeurs">
            <li>
                Fiabilite
                <Dropdown text={"blabla"} />
            </li>

            <li>
                Respect
                <Dropdown text={"blabla"} />
            </li>

            <li>
                Service
                <Dropdown text={"blabla"} />
            </li>

            <li>
                Securite
                <Dropdown text={"blabla"} />
            </li>
        </ul>
    );
}

export default Valeurs;
