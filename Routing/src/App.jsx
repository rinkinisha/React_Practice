import {BrowserRouter , Route , Routes} from "react-router-dom"
import About from "./component/About"
import Contect from "./component/Contect"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import "./main"
function App(){
return(
  <>
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path="/contect" element={<Contect/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  <Navbar/>
  </>
)
}
export default App