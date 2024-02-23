import * as React from "react";
import Arrow from "../../assets/arrow.svg";
import "./dropdown.css";

function Dropdown({ title, text }) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open);
        let dropdownText = document.querySelector('.dropdown .dropdownText')
        let dropdownTop = document.querySelector('.dropdown.dropdownTop')
        let childElement = document.getElementById(`#${title}`).children[0]

        console.log(childElement)
        console.log(dropdownTop)
        if (dropdownText.style.height === '' || dropdownText.style.height === 0){
            dropdownText.style.height = `${childElement.offsetHeight}px`;
            dropdownTop.style.borderBottomLeftRadius = '0px'
            dropdownTop.style.borderBottomRightRadius = '0px'
            
        } else {
            dropdownText.style.height = '0px'
            dropdownTop.style.borderBottomLeftRadius = '25px'
            dropdownTop.style.borderBottomRightRadius = '25px'
        }
    }

    return (
        <div id={title} className="dropdown" >
            <div className="dropdownTop" onClick={handleOpen}>
                <p className="dropdownTitle">{title}</p>
                <button className={"btnValeurs" + (open ? " btnOpen" : "")}>
                    <img src={Arrow} alt="arrow"></img>
                </button>
            </div>
             <div  className="dropdownText" style={{height : open ? "100%":"0px", visibility : open ? "visible":"hidden"} } >{text}</div>
        </div>
    );
}

export default Dropdown;
