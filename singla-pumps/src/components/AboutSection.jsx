import { useEffect, useState } from "react";

const slides = [
  {
    title: "Warehousing",
    heading: "Head 1",
    text: "Our proprietary technology platform leverages AI and ML, blockchain, and IoT to optimize the agricultural value chain from pre-plantation to trade facilitation.",
    img: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/DSC_6072.jpg",
  },
  {
    title: "Digital marketplace",
    heading: "Head 2",
    text: "Empowering millions of farmers with direct market access through smart digital tools.",
    img: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/DSC_6080.jpg",
  },
  {
    title: "Collateral management",
    heading: "Head 3",
    text: "Secure collateral management solutions designed to empower farmers and improve trust.",
    img: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/DSC_6072.jpg",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto slide (desktop only)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper center py-10">
      <div class="relative min-h-[80vh]  overflow-hidden">

  <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[800px] h-[800px] opacity-10 animate-spin-slow"
        viewBox="0 0 512 512"
        fill="none"
        aria-hidden="true"
      >
        <path
          fill="#d3d3d3"
          d="M221 36c23-6 47-6 70 0l8 33a174 174 0 0 1 56 24l30-18a207 207 0 0 1 49 49l-18 30a174 174 0 0 1 24 56l33 8c6 23 6 47 0 70l-33 8a174 174 0 0 1-24 56l18 30a207 207 0 0 1-49 49l-30-18a174 174 0 0 1-56 24l-8 33c-23 6-47 6-70 0l-8-33a174 174 0 0 1-56-24l-30 18a207 207 0 0 1-49-49l18-30a174 174 0 0 1-24-56l-33-8c-6-23-6-47 0-70l33-8a174 174 0 0 1 24-56l-18-30a207 207 0 0 1 49-49l30 18a174 174 0 0 1 56-24l8-33Zm35 98a120 120 0 1 0 0 240 120 120 0 0 0 0-240Z"
          opacity=".9"
        />
        <circle cx="256" cy="256" r="52" fill="#f5f5f5" opacity=".5" />
      </svg>
      {/* ===== Desktop Layout ===== */}
      <div className="hidden md:flex items-center md:gap-[270px] justify-around max-w-[1310px] center">
        {/* Left side text */}
        <div className="w-1/2">
          <div
            key={activeIndex}
            className="transition-opacity duration-700 ease-in-out opacity-100"
          >
            <h2 className="text-3xl font-bold mb-6">
              Discover the Power of Innovation with Singla Motors!
            </h2>
            <p className="text-black md:text-lg">
              Since 1993, we’ve been leading the way in high-quality pumps &
              motors, renowned for energy efficiency, durability, and easy
              maintenance. Trusted by industries worldwide – From agriculture to
              industry, we’re powering the future.
            </p>
          </div>
        </div>

        {/* Right side images */}
        <div className="grid grid-cols-2 gap-6 w-1/2 h-[700px] pt-2.5">
          {/* Left column → 1 image in center */}
          <div className="flex items-center justify-center">
            <div
              className={`rounded-2xl p-3 shadow-md border-2 transition-all duration-700 ease-in-out ${
                activeIndex === 0
                  ? "border-green-500 scale-105 shadow-lg"
                  : "border-transparent opacity-70"
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
              className={`rounded-2xl p-3 shadow-md border-2 transition-all duration-700 ease-in-out ${
                activeIndex === 1
                  ? "border-green-500 scale-105 shadow-lg"
                  : "border-transparent opacity-70"
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
                activeIndex === 2
                  ? "border-green-500 scale-105 shadow-lg"
                  : "border-transparent opacity-70"
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
</div>

      {/* ===== Mobile Layout ===== */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        <img
          src={slides[0].img}
          alt={slides[0].title}
          className="w-full max-w-sm h-80 object-cover rounded-xl shadow-md"
        />
        <div className="text-center px-4">
          <h2 className="text-black text-2xl font-bold mb-2 text-left">
            Discover the Power of Innovation with Singla Motors!
          </h2>
          <p className="text-black text-justify">
            Since 1993, we’ve been leading the way in high-quality pumps &
            motors, renowned for energy efficiency, durability, and easy
            maintenance. Trusted by industries worldwide – From agriculture to
            industry, we’re powering the future.
          </p>
        </div>
      </div>
    </div>
  );
}
