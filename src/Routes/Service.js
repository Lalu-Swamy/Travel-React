import Navbar from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer"
import Trip from "../components/trip";
import servicepic from '../Assets/servicepic.jpg'

export default function Service(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-service"
            title="Service"
            heroimg={servicepic}
            
            />
            <Trip/>
            <Footer/>
        </>
    )
}
