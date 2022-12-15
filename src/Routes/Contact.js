import Navbar from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer"
import Contactform from "../components/contactform";
import contactpic from '../Assets/contactpic.jpg'

export default function Contact(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-contact"
            title="Contact"
            heroimg={contactpic}
            
            />
            <Contactform/>
            <Footer/>
        </>
    )
}
