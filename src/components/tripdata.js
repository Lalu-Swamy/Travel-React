import "./trip.css"

export default function Tripdata(props){
    return(
        <div className="t-card">
            <div className="t-img">
                <img src={props.cardimg} alt="/"></img>
            </div>
            <div className="t-text">
                <h4>{props.heading}</h4>
                <p>{props.para}</p>
            </div>
            
        </div>
    )
}
