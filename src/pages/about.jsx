import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../assets/banner-about.jpg"
import Valeurs from "../components/Valeurs/Valeurs.jsx";

function About() {
    return (
        <div className="main-about">
            <Header />
            <div className="bannerContainer">
                <img className="banner" src={Banner} alt="Banner"></img>
            </div>
            <Valeurs/>
            <Footer/>
        </div>
    );
}
export default About;


