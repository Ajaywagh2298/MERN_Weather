import "./css/home.css";
import HomeHeader from "./Home/home-header";
import HomeCoverImage from "./Home/home-cover-image";

function Home() {
    return (
        <div className={"box"}>
            <HomeHeader/>
            <HomeCoverImage/>
        </div>
    );
}

export default Home;
