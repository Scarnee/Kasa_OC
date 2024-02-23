import Thumbnail from "../Thumbnail/Thumbnail";
import { getData } from "../../utils/GetData";

import "./locationlist.css";

const LocationList = () => {
    // Importing data through getData function
    const { data } = getData("/data.json");

    return (
        <div className="gallery">
            {/* Mapping on data and calling Thumbnail element on it with right props */}
            {data.map((location) => (
                <Thumbnail id={location.id} title={location.title} cover={location.cover} key={location.id} />
            ))}
        </div>
    );
};

export default LocationList;
