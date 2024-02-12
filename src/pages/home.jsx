import Header from "../components/Header";
import LocationList from "../components/LocationList";
import Footer from "../components/Footer";
import Banner from "../assets/banner.jpg";

function Home() {
    return (
        <div className="main">
            <Header />
            <div className="bannerContainer">
                <img className="banner" src={Banner} alt="Banner"></img>
                <div className="bannerGradient"></div>
                <p className="bannerText">Chez vous, partout et ailleurs</p>
            </div>
            <LocationList />
            <Footer />
        </div>
    );
}

export default Home;
