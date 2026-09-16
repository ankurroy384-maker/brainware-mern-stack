import {BrowserRouter,Routes,Route} from "react-router"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Service from "./component/Service"
import Header from "./component/Header"
import State from "./component/State"
import From from "./component/From"


const App = () => {
  return <>
   <BrowserRouter>

    <Header></Header>
    <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/from" element={<From></From>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/contact" element={<Contact></Contact>}></Route>
       <Route path="/service" element={<Service></Service>}></Route>
       <Route path="/state" element={<State></State>}></Route>
    </Routes>

  

   </BrowserRouter>
  </>
}

export default App