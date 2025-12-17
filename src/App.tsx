import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Navbar } from "./components/NavBar"
import Blog from "./pages/Blog"
import { Contact } from "./components/contact"
import PortfolioPage from "./pages/portofolio"
import AboutPage from "./pages/Aboutus"
import ServicesPage from "./pages/services"
import PortfolioItemPage from "./components/portofolioDetail"



function App() {

  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/blogs" element={<Blog/>}/>
    <Route path= "/contact" element={<Contact/>}/>
    <Route path = "/services" element= {<ServicesPage/>}/>
    <Route path = "/portfolio" element={<PortfolioPage/>}/>
    <Route path = "/aboutus" element={<AboutPage/>}/>
<Route
          path="/portfolio/:id"
          element={<PortfolioItemPage />}
        />
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default App
