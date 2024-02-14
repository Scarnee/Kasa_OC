import Header from "../components/Header/Header.jsx";
import LocationList from "../components/LocationList/LocationList.jsx";
import Footer from "../components/Footer/Footer.jsx";
import URL from "../assets/banner.jpg";
import Banner from "../components/Banner/Banner.jsx";

function Home() {
    return (
        <div className="main">
            <Header />
            <Banner URL={URL} text="Chez vous, partout et ailleurs" />
            <LocationList />
            <Footer />
        </div>
    );
}

export default Home;
