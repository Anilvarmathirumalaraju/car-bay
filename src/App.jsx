import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./pages/Header/header"
import Home from "./components/Home/home"
import Blogs from "./components/Blogs/blogs"
import Insurance from "./components/Insurance/insurance"

import Login from "./pages/login/login"
import Footer from "./pages/Footer/footer"

function App() {


  return (
    <> 
       <BrowserRouter>
        <Header/>
          <Routes>
             
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/blogs" element={<Blogs/>}/>
             <Route path="/insurance" element={<Insurance/>}/>
          </Routes>
        <Footer/>
       </BrowserRouter>
        
        
    </>
  )
}

export default App
