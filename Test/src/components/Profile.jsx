import { useContext } from "react";
import { Usercontext } from "../context/Usercontext";

function Profile(){
    const {user ,setUser} = useContext(Usercontext)
    const changeName =()=>{
        setUser({
            ...user,
            name : "Neha"
        })
    }
    return(
        <>

        <h1>profile</h1>
        {/* <p>Name{user.name}</p> */}
        <p>Age{user.age}</p>
        {/* <p>Role{user.role}</p> */}
        <button onClick={changeName}> Change name</button>
        </>
    )
}
export default Profile