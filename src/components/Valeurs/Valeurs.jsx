import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./valeurs.css";
const response = await fetch("about.json");
const data = await response.json();

function Valeurs() {
    const [valeurs, setValeurs] = useState([]);

    useEffect(() => {
        setValeurs(data);
    }, []);

    return (
        <ul className="listValeurs">
            
                {valeurs.map((valeur) => (
                    <li key={valeur.id}>
                        <Dropdown title={valeur.title} text={valeur.text} />
                    </li>
                ))}
            
        </ul>
    );
}
//Faire fichier json a part et aller le fetch
export default Valeurs;
