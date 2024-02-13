import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../assets/banner-about.jpg"
import Valeurs from "../components/Valeurs";
import '../css/valeurs.css'

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
