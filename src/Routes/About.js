import Navbar from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer"
import Aboutus from "../components/aboutus";

export default function About(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-about"
            title="About"
            heroimg="https://c1.wallpaperflare.com/path/420/554/413/gate-structure-path-kyoto-5e7ee37ee7d8fc4642f69b6e60333e47.jpg"
            
            />
            <Aboutus/>
            <Footer/>
        </>
    )
}
