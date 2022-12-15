import Navbar from "../components/nav";
import Hero from "../components/hero";
import Destination from "../components/destination";
import Footer from "../components/footer"
import Trip from "../components/trip";
import homepic from '../Assets/homepic.jpg'

export default function Home(){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                title="A Journey is about finding your story"
                heroimg={homepic}
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
