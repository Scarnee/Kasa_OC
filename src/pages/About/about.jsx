import URL from "../../assets/banner-about.jpg";
import Valeurs from "../../components/Valeurs/Valeurs.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import "./about.css";

function About() {
    return (
        <div className="main-about">
            <Banner URL={URL} text="" gradient={false} />
            <Valeurs />
        </div>
    );
}
export default About;
