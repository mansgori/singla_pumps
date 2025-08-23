import { useEffect, useState } from "react";

const slides = [
  {
    title: "Warehousing",
    heading:"Head 1",
    text: "Our proprietary technology platform leverages AI and ML, blockchain, and IoT to optimize the agricultural value chain from pre-plantation to trade facilitation.",
    img: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/DSC_6072.jpg",
  },
  {
    title: "Digital marketplace",
    heading:"Head 2",
    text: "Empowering millions of farmers with direct market access through smart digital tools.",
    img: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/DSC_6080.jpg",
  },
  {
    title: "Collateral management",
    heading:"Head 3",
    text: "Secure collateral management solutions designed to empower farmers and improve trust.",
    img: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/DSC_6072.jpg",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center md:gap-[270px] justify-around wrapper center py-10">
      {/* Left side text */}
      <div className="w-1/2">
        {/* <h2  key={activeIndex} className=" transition-opacity duration-700 ease-in-out opacity-100">
          {slides[activeIndex].heading}
        </h2> */}

        <div
          key={activeIndex} // important: re-render on slide change
          className=" transition-opacity duration-700 ease-in-out opacity-100"
        >
          <h2 className="text-3xl font-bold mb-4">
           Discover the Power of Innovation with Singla Motors! </h2>
        <p lassName="text-gray-600">  Since 1993, we’ve been leading the way in high-quality pumps & motors, renowned for energy efficiency, durability, and easy maintenance. Trusted by industries worldwide – From agriculture to industry, we’re powering the future.</p>
        </div>
      </div>

      {/* Right side images */}
      <div className="grid grid-cols-2 gap-6 w-1/2 h-[700px]">
        {/* Left column → 1 image in center */}
        <div className="flex items-center justify-center">
          <div
            className={`rounded-2xl p-3 shadow-md border-2 transition-all duration-700 ease-in-out ${
              activeIndex === 0 ? "border-green-500 scale-105 shadow-lg" : "border-transparent opacity-70"
            }`}
          >
            <img
              src={slides[0].img}
              alt={slides[0].title}
              className="w-64 h-64 object-cover rounded-xl"
            />
          
          </div>
        </div>

        {/* Right column → top & bottom */}
        <div className="flex flex-col justify-between">
          {/* Top */}
          <div
            className={` rounded-2xl p-3 shadow-md border-2 transition-all duration-700 ease-in-out ${
              activeIndex === 1 ? "border-green-500 scale-105 shadow-lg" : "border-transparent opacity-70"
            }`}
          >
            <img
              src={slides[1].img}
              alt={slides[1].title}
              className="w-64 h-64 object-cover rounded-xl"
            />
          
          </div>

          {/* Bottom */}
          <div
            className={`rounded-2xl p-3 shadow-md border-2 transition-all duration-700 ease-in-out ${
              activeIndex === 2 ? "border-green-500 scale-105 shadow-lg" : "border-transparent opacity-70"
            }`}
          >
            <img
              src={slides[2].img}
              alt={slides[2].title}
              className="w-64 h-64 object-cover rounded-xl"
            />
         
          </div>
        </div>
      </div>
    </div>
  );
}
