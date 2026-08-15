import React from 'react'
import { useState } from 'react';
import Navbar from "./components/Navbar"
import Profile from './components/Profile';
import { Usercontext } from './context/Usercontext';
function App() {
  // const products = [
  //   { id: 1, name: "Phone", price: 20000 },
  //   { id: 2, name: "Laptop", price: 50000 },
  //   { id: 3, name: "Watch", price: 3000 }
  // ];

const [user , setUser] = useState({
    name : "Neha",
    age: 23,
    role: "Developer"
})
//   return (
//       {/* {products.map((product) => (
//         <p key={product.id}>
//           <h1>{product.name}</h1>
//           <p>₹{product.price}</p>
//         </p>
//       ))} */}

// <Usercontext.Provider value={{user , setUser}}>
// <Navbar/>
// <Profile/>
//  </Usercontext.Provider> 
//   );
return (
    <Usercontext.Provider value={{ user, setUser }}>
      <Navbar />
      <Profile />
    </Usercontext.Provider>
  );
}
export default App