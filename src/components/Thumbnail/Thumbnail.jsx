import React from "react";
import { Link } from "react-router-dom";

import "./Thumbnail.css";

function Thumbnail({ id, title, cover }) {
    return (
        <Link to={`../location/${id}`} id={id} className="image-container">
            <div className="gradient"></div>
            <p className="image-title">{title}</p>
            <img src={cover}></img>
        </Link>
    );
}

export default Thumbnail;
