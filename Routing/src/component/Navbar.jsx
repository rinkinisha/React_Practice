import React from "react";
import {Link , NavLink} from "react-router-dom"
function Navbar(){
    return(
        <>
        <nav><ul><NavLink to="/" className={({isActive})=> isActive?"active":""} >Home</NavLink>
        <NavLink to="/contect">Contect</NavLink>
        <NavLink to ="/about">About</NavLink></ul></nav></>

    )
}
export default Navbar