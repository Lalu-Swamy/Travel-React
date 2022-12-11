import Navbar from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer"
import Contactform from "../components/contactform";

export default function Contact(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-contact"
            title="Contact"
            heroimg="https://r4.wallpaperflare.com/wallpaper/662/966/394/japan-tokyo-street-building-wallpaper-6920b80d111a4d2b6697f8ef40e1d63d.jpg"
            
            />
            <Contactform/>
            <Footer/>
        </>
    )
}
