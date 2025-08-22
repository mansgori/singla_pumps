

import './App.css'
import { useRef } from 'react'
import  Footer  from './components/Footer'
import HeroBanner from './components/Herobanner'
import ServicesSection from './components/ServicesSections'
import QuoteSection from './components/QuoteSection'
import FeatureSection from './components/FeatureSection'
import CounterSection from './components/CounterSection'
import GallerySection from './components/GallerySection'
import AboutSection from './components/AboutSection'
import {
    ARTIST_PHONE_IMAGES,
    CREATIVE_PHONE_IMAGES,
    MEDIA_PHONE_IMAGES,
} from "./utlis/helper";
import CommonPhone from './components/CommonPhone'
import VideoSection from './components/VideoSection'

function App() {
 const commonPhoneRef = useRef(null);
  return (
    <>
    
   
       <HeroBanner
      logo="http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/template_photo_1.jpg"
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
     <CounterSection/>
      <div
                ref={commonPhoneRef}
                className="relative lg:h-screen bg-white overflow-hidden lg:flex justify-center items-center"
            >
                <div className="lg:absolute inset-0 z-10 step-1">
                    <CommonPhone
                        phoneImages={ARTIST_PHONE_IMAGES}
                        url="/artist-avenue"
                        title="Artist Avenue: Revolutionizing Talent Discovery"
                        desc="Real-time gigs, verified profiles, audition alerts, skill-based hiring, rating system, direct access, multi-association sync, portfolio showcase, job hunter mode"
                    />
                </div>

                
            </div>
     <VideoSection />
     <GallerySection/>
     
    <FeatureSection />
    <QuoteSection />
    
      <Footer />
    </>
  )
}

export default App
