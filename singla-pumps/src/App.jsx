
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
          title: "Product Range",
          description:
            "Our company is manufacturing, exporting, trading and supplying the following products... ",
          link: "#",
        },
        {
          image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/icon2.jpg",
          title: "Quality Conformation",
          description:
            "We believe that by maintaining high quality in products as well as business activities...",
          link: "#",
        },
        {
          image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/icon3.jpg",
          title: "Our Infrastructure",
          description:
            "Our well furnished infrastructure enable us to manufacture international standard range... ",
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
