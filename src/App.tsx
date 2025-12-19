import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Home from "./pages/Home"
import { Navbar } from "./components/NavBar"
import Blog from "./pages/Blog"
import { Contact } from "./components/contact"
import PortfolioPage from "./pages/portofolio"
import AboutPage from "./pages/Aboutus"
import ServicesPage from "./pages/services"
import PortfolioItemPage from "./components/portofolioDetail"
import BlogPostPage from "./components/BlogDetail"



function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home/>
          </motion.div>
        }/>
        <Route path="/blogs" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Blog/>
          </motion.div>
        }/>
        <Route path="/blogs/:id" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogPostPage/>
          </motion.div>
        }/>
        <Route path="/contact" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact/>
          </motion.div>
        }/>
        <Route path="/services" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServicesPage/>
          </motion.div>
        }/>
        <Route path="/portfolio" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PortfolioPage/>
          </motion.div>
        }/>
        <Route path="/aboutus" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutPage/>
          </motion.div>
        }/>
        <Route path="/portfolio/:id" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PortfolioItemPage />
          </motion.div>
        }/>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <AnimatedRoutes/>
  </BrowserRouter>
   </>
  )
}

export default App
