import Destinationdata from "./destinationdata"
import "./destination.css"

export default function Destination(){
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>“Not all those who wander are lost.”</p>
            <Destinationdata
                classname="des-1"
                heading="Rann of Kutch"
                para="Rann of Kutch is a massive expanse of cracked earth, inland from the sea, that promises to take your breath away. The nothingness for miles is both nerve wracking and stunning with small oasis of water bodies and shrub forests doubling up as homes for pink flamingoes and wild asses. Tribal hamlets with cylindrical mud bhungas (huts) are the epicenter for Kutchi embroidery, tie and dye, leatherwork, pottery, bell metal craft and the famous Rogan painting by the only surviving expert family. Approximately 200 km east of the Rann, is the Little Rann of Kutch, which houses the 4953-sq-km Wild Ass Sanctuary. It homes the only remaining population of the chestnut-coloured Indian wild ass (khur), as well as blue-bulls, blackbuck and chinkara."
                img1="http://www.yogoyo.com/india-gujarat-travel-guide/rann-of-kutch-photos/from-viewing-tower-rann-of-kutch-gujarat-india.jpg"
                img2="https://c1.wallpaperflare.com/path/227/438/522/rann-utsav-2017-18-kutch-rann-utsav-rann-utsav-online-906e8cd822e301dd0f781db89b1b6b41.jpg"
            />
            <Destinationdata
                classname="des-2"
                heading="Kyoto: City of Scenery"
                para="Fushimi Inari Shrine (伏見稲荷大社, Fushimi Inari Taisha) is an important Shinto shrine in southern Kyoto. It is famous for its thousands of vermilion torii gates, which straddle a network of trails behind its main buildings. The trails lead into the wooded forest of the sacred Mount Inari, which stands at 233 meters and belongs to the shrine grounds.Fushimi Inari is the most important of several thousands of shrines dedicated to Inari, the Shinto god of rice. Foxes are thought to be Inari's messengers, resulting in many fox statues across the shrine grounds. Fushimi Inari Shrine has ancient origins, predating the capital's move to Kyoto in 794.
                  "
                img1="https://r4.wallpaperflare.com/wallpaper/463/199/754/landscape-bamboo-path-japan-wallpaper-89c0e86d81fa6deb26a778bf50f1d69d.jpg"
                img2="https://c1.wallpaperflare.com/path/420/554/413/gate-structure-path-kyoto-5e7ee37ee7d8fc4642f69b6e60333e47.jpg"
            />
        </div>
    )
}
