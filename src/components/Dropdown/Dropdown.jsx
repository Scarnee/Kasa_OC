import React from "react";
import Arrow from "../../assets/arrow.svg";

import "./dropdown.css";

function Dropdown({ title, text }) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        //State to handle open and close
        setOpen(!open);

        let dropdownText = document.querySelector(`#${title} .dropdownText`);
        let dropdownTop = document.querySelector(`#${title} .dropdownTop`);
        let childElement = document.querySelector(`#${title} .dropdownText ul`);

        // Changing styles when closed and open
        if (dropdownText.style.height === "" || dropdownText.style.height === "0px") {
            dropdownText.style.height = `${childElement.offsetHeight}px`;
            dropdownTop.style.borderBottomLeftRadius = "0px";
            dropdownTop.style.borderBottomRightRadius = "0px";
        } else {
            dropdownText.style.height = "0px";
            dropdownTop.style.borderBottomLeftRadius = "7px";
            dropdownTop.style.borderBottomRightRadius = "7px";
        }
    }

    return (
        <div id={title} className="dropdown">
            <div className="dropdownTop" onClick={handleOpen}>
                <p className="dropdownTitle">{title}</p>
                <button className={"btnValeurs" + (open ? " btnOpen" : "")}>
                    <img src={Arrow} alt="arrow"></img>
                </button>
            </div>
            <div className="dropdownText">
                <ul>
                    {text.map((content) => {
                        return <li key={content}>{content}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;
