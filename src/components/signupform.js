import "./signup.css"
import React from 'react'

export default function Signupform() {
	const [dataform,setDataform] = React.useState({
        username:"",
        email:"",
        password:"",
        newpassword:""
    })

    function handleChange(event){
        const {name,value} = event.target
        setDataform(prevdata => ({
            ...prevdata,
            [name]:value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        return <div>{(dataform.username.length === 0 || dataform.email.length === 0 || dataform.password.length === 0 || dataform.newpassword.length === 0) ? alert("Fill out all the Sections")
        : (dataform.password === dataform.newpassword) ? alert("Registered Sucessfully")
        : alert("Passwords do not Match")}</div>
    }
return(
    <div className="form-container">
        <h1 className="form-head">Sign Up</h1>
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="username" value={dataform.username} placeholder="Username" onChange={handleChange}></input>
            <input type="email" name="email" value={dataform.email} placeholder="Enter your Email"
            onChange={handleChange} ></input>
            <input type="password" name="password" value={dataform.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <input type="password" name="newpassword" value={dataform.newpassword} placeholder="Confirm your Password" onChange={handleChange} ></input>
            <input type="submit" value="Submit" className="btn" ></input>
        </form>
    </div>
)
}
