import './nav.css'
import MenuItems from '../menuitems'
import travel from '../travel.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    const MenuLinks= MenuItems.map((item) => {
        return(
            <Link className={item.cName} to={item.url} ><i className={item.icon}></i>{item.title}</Link>
        ) 
    })
    const [toggle,setToggle]= React.useState(false);
    const handleToggle = ()=>{
        setToggle(!toggle);
    }
    return(
        <nav className='navbar-items'>
            <div className="nav-div-1">
                <a href='/'><img className='navbar-img' src={travel} alt='/'></img></a>
                <h1 className='navbar-logo'>NoMaD</h1>
            </div>
            <div className='nav-div-2'>
                <ul className={toggle ? "nav-menu" : "nav-menu-active"}>
                    {MenuLinks}
                    <button className='nav-butt'>Sign Up</button>
                </ul>
                <div className='nav-icon' onClick={handleToggle}>
                    {toggle ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                </div>
            </div>
        </nav>
    )
}
