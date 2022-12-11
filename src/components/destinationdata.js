import "./destination.css"

export default function Destinationdata(props){
    return(
        <div className={props.classname}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>{props.para}</p>
                </div>
                <div className="des-img">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt=""/>
                </div>
            </div>
    )
}
