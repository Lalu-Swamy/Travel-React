import Tripdata from "./tripdata"
import "./trip.css"
import maldives from '../Assets/maldives.jpg'
import pyramids from '../Assets/pyramids.jpg'
import burj from '../Assets/burj.jpg'
import sigiriya from '../Assets/sigiriya.jpg'
import greatwall from '../Assets/greatwallofchina.jpg'
import everest from '../Assets/everest.jpg'

export default function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can find unique destinations using Google Maps</p>
            <div className="trip-card">
                <Tripdata
                    cardimg={everest}
                    heading="Mt.Everest"
                    para="Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point. Its elevation of 8,848.86 m was most recently established in 2020 by the Chinese and Nepali authorities."
                />
                <Tripdata
                    cardimg={burj}
                    heading="Burj Khalifa"
                    para="The Burj Khalifa is the tallest building in the world and a global icon.

                    At 828m tall, this magnificent structure is located next to Dubai Mall and has drawn visitors from all over the world since opening in 2010. The unmatched Burj Khalifa view can be taken in from not one but two observations decks – the two-storey At the Top on the 124th and 125th floors, as well as one of the world’s highest observation decks (555m) on the 148th floor."
                />
                <Tripdata
                    cardimg={pyramids}
                    heading="Pyramids of Giza"
                    para="The Great Pyramid of Giza is the biggest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
                />
                </div>
                <div className="trip-card">
                <Tripdata
                    cardimg={sigiriya}
                    heading="Sigiriya"
                    para="Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m high."
                />
                <Tripdata
                    cardimg={maldives}
                    heading="Maldives"
                    para="
                    The Maldives is a nation of islands in the Indian Ocean, that spans across the equator. The country is comprised of 1192 islands that stretch along a length of 871 kilometers. While the country covers an area of approximately 90,000 square kilometers, only 298 square kilometers of that is dry land. The islands are grouped into a double chain of 26 atolls.
                    "
                />
                <Tripdata
                    cardimg={greatwall}
                    heading="Great Wall of China"
                    para="The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe."
                />
                </div>

        </div>
    )
}

