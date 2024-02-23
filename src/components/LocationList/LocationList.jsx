import Thumbnail from "../Thumbnail/Thumbnail";
import React, { useState, useEffect } from "react";
import './locationlist.css'
import { getData } from "../../utils/GetData";


const LocationList = () => {

    const {data} = getData('/data.json')
    

    
    return (
        <div className="gallery">
            {data.map((location) => (  
                <Thumbnail id={location.id} title={location.title} cover={location.cover} key={location.id} />
            ))}
        </div>
    );
};

export default LocationList;
