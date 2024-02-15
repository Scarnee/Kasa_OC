import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
const response = await fetch("data.json");
const data = await response.json();
import Footer from "../../components/Footer/Footer";
import "./location.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import React, { useState, useEffect } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Title from "../../components/Title/Title";
import Host from "../../components/Host/Host";

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
            <Carrousel Array={object.pictures}/>
            <div className="informations">
                <Title title={object.title} location={object.location}/>
                <Host picture={object.host.picture} name={object.host.name}/>
                {/*<Tags />
                <Rating />*/}
            </div>  
            <div className="details">
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
            </div>
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
