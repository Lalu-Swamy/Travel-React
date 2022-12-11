import Navbar from "../components/nav";
import Hero from "../components/hero";
import Destination from "../components/destination";
import Footer from "../components/footer"
import Trip from "../components/trip";

export default function Home(){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                title="A Journey is about finding your story"
                heroimg="https://r4.wallpaperflare.com/wallpaper/15/962/457/van-beach-minimalism-minimalist-wallpaper-83acff6589c320e7dce45bd294569bdf.jpg"
                text="Find your Story"
        
                url="/"
                btnclass="show"

            />
            <Destination />
            <Trip/>
            <Footer/>
        </>
    )
}
