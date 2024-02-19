import React, { useState, useEffect } from "react";
import "./carrousel.css";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";

function Carrousel({ Array }) {
    let arrayLength = Array.length;

    const [index, setIndex] = useState(0);

    function increaseIndex() {
        if (index < arrayLength - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function decreaseIndex() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(arrayLength - 1);
        }
    }
    return (
        <div className="carrousel">
            <img src={Array[index]} className="imgCarrousel"></img>
            <button onClick={decreaseIndex} className={"btnDecrease" + (arrayLength == 1 ? " hidden" : "")}>
                <img src={backArrow} alt="backArrow"></img>
            </button>
            <button onClick={increaseIndex} className={"btnIncrease" + (arrayLength == 1 ? " hidden" : "")}>
                <img src={forwardArrow} alt="forwardArrow"></img>
            </button>
            <p className="countCarrousel">
                {index + 1} / {arrayLength}
            </p>
        </div>
    );
}

export default Carrousel;
