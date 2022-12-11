import Navbar from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer"
import Trip from "../components/trip";

export default function Service(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-service"
            title="Service"
            heroimg="https://r4.wallpaperflare.com/wallpaper/52/465/301/illustration-landscape-digital-art-mountains-wallpaper-50f055697ff63eb3883fc7f67ba6b4b8.jpg"
            
            />
            <Trip/>
            <Footer/>
        </>
    )
}
