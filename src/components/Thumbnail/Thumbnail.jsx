import React from "react";
import   './Thumbnail.css'
import {Link} from 'react-router-dom'

function Thumbnail({ id, title, cover }) {
    return (
        < Link to ={"../location/"+id}  id={id} className="image-container">
            <div className="gradient"></div>
            <p className='image-title'>{title}</p>
            <img src={cover}></img>
        </Link>
    );
}
{/*utiliser Link to
utiliser literal de gabarit pour URL*/}
export default Thumbnail;
