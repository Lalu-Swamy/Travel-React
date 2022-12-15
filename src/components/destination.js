import Destinationdata from "./destinationdata"
import "./destination.css"
import Raanofkutch from '../Assets/Raanofkutch.jpg'
import raan from '../Assets/raan.jpg'
import kyoto from '../Assets/kyoto.jpg'
import aboutpic from '../Assets/aboutpic.jpg'
import paris1 from '../Assets/paris1.jpg'
import paris2 from '../Assets/paris2.jpg'
import tajj from '../Assets/tajj.jpg'
import tajmahal from '../Assets/tajmahal.jpg'
export default function Destination(){
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>“Not all those who wander are lost.”</p>
            <Destinationdata
                classname="des-1"
                heading="Rann of Kutch: The White Desert"
                para="Rann of Kutch is a massive expanse of cracked earth, inland from the sea, that promises to take your breath away. The nothingness for miles is both nerve wracking and stunning with small oasis of water bodies and shrub forests doubling up as homes for pink flamingoes and wild asses. Tribal hamlets with cylindrical mud bhungas (huts) are the epicenter for Kutchi embroidery, tie and dye, leatherwork, pottery, bell metal craft and the famous Rogan painting by the only surviving expert family. Approximately 200 km east of the Rann, is the Little Rann of Kutch, which houses the 4953-sq-km Wild Ass Sanctuary. It homes the only remaining population of the chestnut-coloured Indian wild ass (khur), as well as blue-bulls, blackbuck and chinkara."
                img1={Raanofkutch}
                img2={raan}
            />
            <Destinationdata
                classname="des-2"
                heading="Kyoto: City of Scenery"
                para="Fushimi Inari Shrine (伏見稲荷大社, Fushimi Inari Taisha) is an important Shinto shrine in southern Kyoto. It is famous for its thousands of vermilion torii gates, which straddle a network of trails behind its main buildings. The trails lead into the wooded forest of the sacred Mount Inari, which stands at 233 meters and belongs to the shrine grounds.Fushimi Inari is the most important of several thousands of shrines dedicated to Inari, the Shinto god of rice. Foxes are thought to be Inari's messengers, resulting in many fox statues across the shrine grounds. Fushimi Inari Shrine has ancient origins, predating the capital's move to Kyoto in 794.
                  "
                img1={kyoto}
                img2={aboutpic}
            />
            <Destinationdata
                classname="des-3"
                heading="Paris: City of Love & Cafe Culture"
                para="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
                img1={paris1}
                img2={paris2}
            />
            <Destinationdata
                classname="des-4"
                heading="Taj Mahal"
                para="The Taj Mahal, is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage'."
                img1={tajj}
                img2={tajmahal}
            />
        </div>
    )
}
