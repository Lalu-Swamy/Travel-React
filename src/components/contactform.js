import "./contactform.css"
 export default function Contactform(){
    return(
        <div className="form-container">
            <h1>Send a Message to Us</h1>
            <form>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Subject"></input>
                <textarea placeholder="Messsage" rows={4}></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
 }
