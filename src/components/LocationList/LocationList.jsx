import Thumbnail from "../Thumbnail/Thumbnail";
const response= await fetch("data.json")
const data = await response.json()
import React, { useState, useEffect } from "react";


const LocationList = () => {
    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        setLocationList(data);
    }, []);

    
    return (
        <div className="gallery">
            {locationList.map((location) => (  
                <Thumbnail id={location.id} title={location.title} cover={location.cover} key={location.id} />
            ))}
        </div>
    );
};
{/*mettre key*/}
export default LocationList;
