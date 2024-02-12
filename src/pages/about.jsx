import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../assets/banner-about.jpg"
import Valeurs from "../components/Valeurs";
import Dropdown from "../components/Dropdown";

function About() {
    return (
        <div>
            <Header />,
            <div className="bannerContainer">
                <img className="banner" src={Banner} alt="Banner"></img>
            </div>
            <Valeurs/>,
            <Dropdown/>,
            <Footer/>
        </div>
    );
}
export default About;
