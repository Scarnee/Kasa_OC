import LocationList from "../../components/LocationList/LocationList.jsx";
import URL from "../../assets/banner.jpg";
import Banner from "../../components/Banner/Banner.jsx";
import './home.css'

function Home() {
    return (
        <div className="mainHome">
            <Banner URL={URL} text="Chez vous, partout et ailleurs" gradient={true} />
            <LocationList />
        </div>
    );
}

export default Home;
