import React from "react";
import   '../css/Thumbnail.css'

function Thumbnail({ id, title, cover }) {
    return (
        <a href={"../pages/location/"+id}  id={id} className="image-container">
            <div className="gradient"></div>
            <p className='image-title'>{title}</p>
            <img src={cover}></img>
        </a>
    );
}

export default Thumbnail;
