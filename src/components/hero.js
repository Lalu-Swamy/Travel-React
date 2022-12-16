import "./hero.css"
export default function Hero(props){
    return(
        <div className={props.cName}>
            <img alt="" src={props.heroimg} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>

    )
}
