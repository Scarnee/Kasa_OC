import React from "react";

function Thumbnail ( {id, title, cover }) {
    return (
        <div id={id}>
            <h1>{title}</h1>
            <img src={cover}></img>
        </div>
    );
};

export default Thumbnail;
