import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
const response = await fetch("data.json");
const data = await response.json();
import Footer from "../../components/Footer/Footer";
import "./location.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import React, { useState, useEffect } from "react";

function Location() {
    let { id } = useParams();
    let object = data.filter((elem) => elem.id === id)[0];

    let [equipments, setEquipments] = useState([]);

    useEffect(() => {
        setEquipments(object.equipments);
    }, []);

    console.log(equipments);

    return (
        <div className="mainLocation">
            <Header />
            <p>oui</p>
            <p>{object.title}</p>
            <Dropdown title="Description" text={object.description} />
            <Dropdown
                title="Equipements"
                text={
                    <ul>
                        {equipments.map((equipment) => (
                            <li>{equipment}</li>
                        ))}
                    </ul>
                }
            />
            <Footer />
        </div>
    );
}

export default Location;

// recuper ID avec useParams dans l'url
// find dans le data avec cet id
// decomposer en sous-components
// slider, accordeon
// title, info
// host
// rating
// 2x collapse
