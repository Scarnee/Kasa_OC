import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import URL from "../assets/banner-about.jpg"
import Valeurs from "../components/Valeurs/Valeurs.jsx";
import Banner from "../components/Banner/Banner.jsx";

function About() {
    return (
        <div className="main-about">
            <Header />
            <Banner URL={URL} text=''/>
            <Valeurs/>
            <Footer/>
        </div>
    );
}
export default About;


