import { useContext } from "react";
import { Usercontext } from "../context/Usercontext";

function Profile(){
    const {user ,setUser} = useContext(Usercontext)
    const changeName =()=>{
        setUser({
            ...user,
            name:"Rinki"
        })
    }
    return(
        <>

        <h1>profile</h1>
        <p>Name{user.name}</p>
        <p>Age{use.age}</p>
        <p>Role{user.role}</p>
        <button onclick={changeName}> Change name</button>
        </>
    )
}
export default Profile