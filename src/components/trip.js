import Tripdata from "./tripdata"
import "./trip.css"
import maldives from '../Assets/maldives.jpg'
import pyramids from '../Assets/pyramids.jpg'
import burj from '../Assets/burj.jpg'

export default function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can find unique destinations using Google Maps</p>
            <div className="trip-card">
                <Tripdata
                    cardimg={maldives}
                    heading="Maldives"
                    para="
                    The Maldives is a nation of islands in the Indian Ocean, that spans across the equator. The country is comprised of 1192 islands that stretch along a length of 871 kilometers. While the country covers an area of approximately 90,000 square kilometers, only 298 square kilometers of that is dry land. The islands are grouped into a double chain of 26 atolls.
                    "
                />
                <Tripdata
                    cardimg={pyramids}
                    heading="Pyramids of Giza"
                    para="The Great Pyramid of Giza is the biggest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
                />
                <Tripdata
                    cardimg={burj}
                    heading="Burj Khalifa"
                    para="The Burj Khalifa is the tallest building in the world and a global icon.

                    At 828m tall, this magnificent structure is located next to Dubai Mall and has drawn visitors from all over the world since opening in 2010. The unmatched Burj Khalifa view can be taken in from not one but two observations decks – the two-storey At the Top on the 124th and 125th floors, as well as one of the world’s highest observation decks (555m) on the 148th floor."
                />
            </div>
        </div>
    )
}

