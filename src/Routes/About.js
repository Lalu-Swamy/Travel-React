import Navbar from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer"
import Aboutus from "../components/aboutus";
import aboutpic from '../Assets/aboutpic.jpg'

export default function About(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-about"
            title="About"
            heroimg={aboutpic}
            
            />
            <Aboutus/>
            <Footer/>
        </>
    )
}
