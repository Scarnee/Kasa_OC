import * as React from "react";
import Arrow from "../../assets/arrow.svg";
import "./dropdown.css";

function Dropdown({ title, text }) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className="dropdown" >
            <div className="dropdownTop" onClick={handleOpen}>
                <p className="dropdownTitle">{title}</p>
                <button className={"btnValeurs" + (open ? " btnOpen" : "")}>
                    <img src={Arrow} alt="arrow"></img>
                </button>
            </div>
             <div className={(open ? "dropdownText":"hidden")}>{text}</div>
        </div>
    );
}

export default Dropdown;
