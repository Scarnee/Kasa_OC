import URL from "../../assets/banner-about.jpg";
import Banner from "../../components/Banner/Banner.jsx";
import "./about.css";
import { getData } from "../../utils/GetData.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";

function About() {
    const { data } = getData("/about.json");
    return (
        <div className="main-about">
            <Banner URL={URL} text="" gradient={false} />
            <div className="listValeurs">
                {data.map((value) => {
                    return <Dropdown key={value.id} title={value.title} text={[value.text]} />;
                })}
            </div>
           
        </div>
    );
}
export default About;
