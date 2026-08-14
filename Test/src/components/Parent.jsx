
import react, { useState } from "react"
import Child from "./Child";
function Parent(){
    const [name,setName]=useState("Rinki");

    return(
        <>
          <Child abc={name}/>
        </>
    )
}

export default Parent;