import { useParams, Navigate } from "react-router-dom";
import { getData } from "../../utils/GetData";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carrousel from "../../components/Carrousel/Carrousel";
import Title from "../../components/Title/Title";
import Host from "../../components/Host/Host";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";

import "./location.css";

function Location() {
    // Getting element ID through URL
    const { id } = useParams();

    // Getting locations data through getData function
    const { data } = getData("/../data.json");

    if (data.length === 0) return;

    // Filtering through array to find corresponding ID
    let object = data.filter((apart) => {
        if (apart.id === id) return apart;
    })[0];

    // Navigating to error page if no corresponding ID was find in json file
    if (!object) return <Navigate to="*" />;

    return (
        <div className="mainLocation">
            <Carrousel pictures={object?.pictures} />
            <div className="informations">
                <div className="informationsLeft">
                    <Title title={object?.title} location={object?.location} />
                    <Tags tagList={object?.tags} />
                </div>
                <div className="informationsRight">
                    <Host picture={object.host?.picture} name={object.host?.name} />
                    <Rating rating={object?.rating} />
                </div>
            </div>
            <div className="details">
                <Dropdown title="Description" text={[object?.description]} />
                <Dropdown title="Equipements" text={object?.equipments} />
            </div>
        </div>
    );
}

export default Location;
