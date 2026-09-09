import react, { useState } from "react"
function Todo(){
    const [todo,setTodo]=useState("")
    const [todos , setTodos]=useState([])
    const [editTodos , seteditTodos]=useState(null)
    function Addtodo(){
      setTodos([...todos,todo])
      setTodo("")
    }
    function handlechange(e){
     setTodo(e.target.value)
    }

    function deletetodo(index){
        const newtodo=todos.filter((item,i)=> i !== index)
        setTodos(newtodo)
    }

    function editTodo(index){
     setTodo(todos[index])
     seteditTodos(index)
    }
    function updatedTodos(){
        const updatedtask=[...todos]
        updatedtask[editTodos]=todo
        

    }
return(
    <>
    <h1>Todo</h1>
    <input
    type="text"
    value={todo}
    onChange={handlechange}
    placeholder="Write something......"/>
    
    <button onClick={editTodos === null ?Addtodo : updateTodo}>{editTodo===null?"ADD":"UPDATE"}</button>
    {
    
        todos.map((item , index)=>(
            <>
        <div key={index}>{item}</div>
         <button onClick={()=>{deletetodo(index)}}>Delete</button>
         <button onClick={()=>editTodo(index)}>Edit</button>
         </>
        )
        ) 
}  

    </>
)

}
export default Todo


