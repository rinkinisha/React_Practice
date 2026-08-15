import { Usercontext } from "../context/Usercontext";
import { useContext, useState } from "react";

function Navbar(){
    const {user}=useContext(Usercontext)
return(
    <>
    <h2>my app</h2>
    <p>Welcome , {Usercontext.name}</p>
    </>
)

}
export default Navbar