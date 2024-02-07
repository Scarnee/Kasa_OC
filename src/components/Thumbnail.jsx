import React from "react";
import   '../css/Thumbnail.css'

function Thumbnail({ id, title, cover }) {
    return (
        <div id={id} className="image-container">
            <p className='image-title'>{title}</p>
            <img src={cover}></img>
        </div>
    );
}

export default Thumbnail;
