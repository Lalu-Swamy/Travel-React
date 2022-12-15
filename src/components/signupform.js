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

        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="username" value={dataform.username} placeholder="Username" onChange={handleChange}></input>
            <input type="email" name="email" value={dataform.email} placeholder="Enter your Email"
            onChange={handleChange} ></input>
            <input type="password" name="password" value={dataform.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <input type="password" name="newpassword" value={dataform.newpassword} placeholder="Confirm your Password" onChange={handleChange} ></input>
            <input type="submit" value="Submit" ></input>
        </form>
    </div>
)

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h3>User {name} successfully registered!!</h3>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h3>Please enter all the fields</h3>
// 	</div>
// 	);
// };

// return (
// 	<div className="form">
//         <div className="heading-div" >
//             <h1>Sign Up</h1>
//         </div>

//         {/* Calling to the methods */}
//         <div className="messages">
//             {errorMessage()}
//             {successMessage()}
//         </div>

//         <form>
//             {/* Labels and inputs for form data */}
//             <label className="label">Name</label>
//             <input onChange={handleName} className="input"
//             value={name} type="text" placeholder="Username"/>

//             <label className="label">Email</label>
//             <input onChange={handleEmail} className="input"
//             value={email} type="email" placeholder="Enter your Email"/>

//             <label className="label">Password</label>
//             <input onChange={handlePassword} className="input"
//             value={password} type="password" placeholder="Type your password"/>

//             <button onClick={handleSubmit} className="btn" type="submit">
//             Submit
//             </button>
//         </form>
// 	</div>
// );
}
