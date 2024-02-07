import Thumbnail from "./Thumbnail";
const data = await import("../data.json");
const modifiedData = Object.values(data)[0];
import React, { useState, useEffect } from "react";

const LocationList = () => {
    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        setLocationList(modifiedData);
    }, []);

    return (
        <div className="gallery">
            {locationList.map((location) => (
                <Thumbnail id={location.id} title={location.title} cover={location.cover} />
            ))}
        </div>
    );
};

export default LocationList;
