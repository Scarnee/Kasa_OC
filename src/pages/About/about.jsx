import URL from "../../assets/banner-about.jpg";
import Banner from "../../components/Banner/Banner.jsx";
import { getData } from "../../utils/GetData.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

import "./about.css";

function About() {
    //Getting Data from Json file for about page
    const { data } = getData("/about.json");

    return (
        <div className="main-about">
            <Banner URL={URL} text="" gradient={false} />
            <div className="listValeurs">
                {/* Mapping on data from json file and applying values to Dropdown element with title and text as props*/}
                {data.map((value) => {
                    return <Dropdown key={value.id} title={value.title} text={[value.text]} />;
                })}
            </div>
        </div>
    );
}
export default About;
