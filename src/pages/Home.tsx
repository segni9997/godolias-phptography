import { Services } from "@/components/services";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Portfolio } from "@/components/Portofolio";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
     <div className="max-w-7xl mx-auto mt-10">
     <Hero/>
     <About/>
     <Services/>
     <Portfolio/>
     <Contact/>
     {/* <Testimonial/> */}
     <Footer/>

     </div>
  )
}
