

import './App.css'

import  Footer  from './components/Footer'
import HeroBanner from './components/Herobanner'
import FeatureSection from './components/FeatureSection'
import CounterSection from './components/CounterSection'
import GallerySection from './components/GallerySection'
import AboutSection from './components/AboutSection'
import {
    ARTIST_PHONE_IMAGES,
} from "./utlis/helper";
import CommonPhone from './components/CommonPhone'
import VideoSection from './components/VideoSection'
import CsrSection from './components/CsrSection'
import ReelCarousel from './components/ReelCorousal'


function App() {

  return (
    <>
    
   
       <HeroBanner
      logo="http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/SINGLA-LOGO.png"
      menuItems={[
        { label: "Home Page", link: "/" },
        { label: "Company Profile", link: "/services" },
        { label: "Our Products", link: "/page" },
        { label: "Careers", link: "/news" },
        { label: "Events", link: "/contact" },
        { label: "Contact Us", link: "/contact" },
      ]}
      contactText="CONTACT US"
      subtitle="Motors And Pumps"
      title="your Power, your way."
      buttonText="GET A QUOTE"
      heroImage="http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/template_photo_4.jpg" // dynamic background image
    />
    
    <AboutSection/>
     {/* <CounterSection/> */}
      
              
                    <CommonPhone
                        phoneImages={ARTIST_PHONE_IMAGES}
                        url="#"
                        title="Our Product Range"
                        desc="We specialize in manufacturing, exporting, trading, and supplying a diverse range of high-performance pumps and motors, designed to meet the needs of various industries globally."
                    />
         

  
     <VideoSection />
     {/* <GallerySection/> */}
    <CsrSection />
    <ReelCarousel />
    
      <Footer />
    </>
  )
}

export default App
