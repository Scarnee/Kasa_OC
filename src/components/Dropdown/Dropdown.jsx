import * as React from "react";
import Arrow from "../../assets/arrow.svg";
import './dropdown.css'

function Dropdown({title, text}) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className="dropdown">
            <div className="dropdownTop">
                <p className="dropdownTitle">{title}</p>
            <button onClick={handleOpen} className={"btnValeurs" + (open ? " btnOpen" : "")}>
                <img src={Arrow} alt="arrow"></img>
            </button>
            </div>
            {open ? <div className="dropdownText">{text}</div> : null}
        </div>
    );
}

export default Dropdown;
