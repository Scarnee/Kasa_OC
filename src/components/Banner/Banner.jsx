import React from 'react'
import './banner.css'

function Banner ({URL, text}) {
    return(
        <div className="bannerContainer">
                <img className="banner" src={URL} alt="Banner"></img>
                <div className="bannerGradient"></div>
                <p className="bannerText">{text}</p>
        </div>
    )
}

export default Banner