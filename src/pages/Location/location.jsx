import { useParams } from "react-router-dom";
import "./location.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import React, { useState, useEffect } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Title from "../../components/Title/Title";
import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";

function Location() {
    const [data, setData] = useState([]);
    let { id } = useParams();
    console.log(id);

    const getData = async () => {
        const response = await fetch("../../data.json");
        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        let object = responseData.find((elem) => elem.id === id)[0];
        console.log(object)
        setData(object);
        console.log(data)
    };
    /*useEffect(() => {
        getData();
    }, []);*/
    getData()

    console.log(data)

    return (
        <div className="mainLocation">
            <Carrousel Array={data.pictures} />
            <div className="informations">
                <div className="informationsLeft">
                    <Title title={data.title} location={data.location} />
                    <Tags tagList={data.tags} />
                </div>
                <div className="informationsRight">
                    <Host picture={data?.host.picture} name={data.host.name} />
                    <Rating rating={data.rating} />
                </div>
            </div>
            <div className="details">
                <Dropdown title="Description" text={data.description} />
                <Dropdown
                    title="Equipements"
                    text={
                        <ul>
                            {data?.equipment.map((equipment) => (
                                <li>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
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
