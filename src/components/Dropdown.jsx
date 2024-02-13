import * as React from "react";
import Arrow from '../assets/arrow.svg'


function Dropdown(props) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className="dropdown">
            <button onClick={handleOpen} className={"btnValeurs" + (open ? " btnOpen":"")}><img src={Arrow} alt="arrow"></img></button>
            {open ? (
                <div>{props.text}</div>
            ) : null}
        </div>
    );
}

export default Dropdown;
