import React from "react";
import './host.css'

function Host({ picture, name }) {
    return (
        <div className="host">
            <p className="hostName">{name}</p>
            <img src={picture} alt={name} className="hostPicture"></img>
        </div>
    );
}

export default Host;
