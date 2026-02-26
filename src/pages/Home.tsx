import { Services } from "@/components/services";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Portfolio } from "@/components/Portofolio";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/Footer";
import VideoSection from "@/components/Hero1";


export default function Home() {
  return (
     <div className=" mx-auto mt-10 ">
     <Hero/>
     <About/>
     <VideoSection/>
     <Services/>

     <Portfolio/>
     <Contact/>
     {/* <Testimonial/> */}
     <Footer/>

     </div>
  )
}
