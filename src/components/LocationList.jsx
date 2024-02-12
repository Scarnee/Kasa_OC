import Thumbnail from "./Thumbnail";
const data = await import("../data.json");
const modifiedData = Object.values(data)[0];
import React, { useState, useEffect } from "react";

const LocationList = () => {
    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        setLocationList(modifiedData);
    }, []);

    const reducedArray = locationList.filter((item, index) => index < 6)

    return (
        <div className="gallery">
            {reducedArray.map((location) => (
                <Thumbnail id={location.id} title={location.title} cover={location.cover} />
            ))}
        </div>
    );
};

export default LocationList;
