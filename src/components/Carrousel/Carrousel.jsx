import React, { useState, useEffect } from "react";
import "./carrousel.css";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";

function Carrousel({ pictures }) {
    // Calculation length of pictures array
    let arrayLength = pictures.length;

    // Declaring variable for index of pictures, initializing at 0
    const [index, setIndex] = useState(0);

    /**
     * Function to increase index
     * Increasing index by 1 until value of length of pictures array -1
     * Going back to 0 after last value to create loop of pictures
     */
    function increaseIndex() {
        if (index < arrayLength - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    /**
     * Function to decrease index
     * Decreasing index by 1 until 0
     * Going back to end of array after first value to create loop of pictures
     */
    function decreaseIndex() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(arrayLength - 1);
        }
    }
    return (
        <div className="carrousel">
            <img src={pictures[index]} className="imgCarrousel"></img>
            <button onClick={decreaseIndex} className={"btnDecrease" + (arrayLength == 1 ? " hidden" : "")}>
                {/* Hiding button if only 1 pictures in array of pictures */}
                <img src={backArrow} alt="backArrow"></img>
            </button>
            <button onClick={increaseIndex} className={"btnIncrease" + (arrayLength == 1 ? " hidden" : "")}>
                {/* Hiding button if only 1 pictures in array of pictures */}
                <img src={forwardArrow} alt="forwardArrow"></img>
            </button>
            <p className="countCarrousel">
                {index + 1} / {arrayLength}
            </p>
        </div>
    );
}

export default Carrousel;
