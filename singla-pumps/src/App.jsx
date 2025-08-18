
import './App.css'

import  Footer  from './components/Footer'
import HeroBanner from './components/Herobanner'
import ServicesSection from './components/ServicesSections'
import QuoteSection from './components/QuoteSection'
import FeatureSection from './components/FeatureSection'
import CounterSection from './components/CounterSection'
import GallerySection from './components/GallerySection'
import AboutSection from './components/AboutSection'
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
 
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
     <ServicesSection
      services={[
        {
          image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/icon1.jpg",
          title: "Our Product Range",
          description:
            "We specialize in manufacturing, exporting, trading, and supplying a diverse range of high-performance pumps and motors, designed to meet the needs of various industries globally.",
          link: "#",
        },
        {
          image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/icon2.jpg",
          title: "Commitment to Quality",
          description:
            "We are dedicated to upholding the highest standards of quality in both our products and business practices, ensuring excellence at every step.",
          link: "#",
        },
        {
          image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/icon3.jpg",
          title: "State-of-the-Art Infrastructure",
          description:
            "Our fully equipped infrastructure empowers us to produce a world-class range of products that meet international standards of excellence.",
          link: "#",
        },
      ]}
    />
     <CounterSection/>
     {/* <ParticlesBackground /> */}
     <GallerySection/>
     <AboutSection/>
    <FeatureSection />
    <QuoteSection />
    
      <Footer />
    </>
  )
}

export default App
