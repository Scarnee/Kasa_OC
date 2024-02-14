import Header from "../components/Header/Header.jsx";
import LocationList from "../components/LocationList/LocationList.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../assets/banner.jpg";

function Home() {
    return (
        <div className="main">
            <Header />
            <div className="bannerContainer"> {/*faire compo banner*/}
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
