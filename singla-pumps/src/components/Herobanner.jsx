import EllipseOrbit from "./EllipseOrbit";



const HeroBanner = ({
  logo = "/logo.png",
  menuItems = [],
  contactText = "CONTACT US",
  // subtitle = "RESIDENTIAL SOLAR SINCE 2011",
  // title = "Power your home, your way.",
  // buttonText = "GET A QUOTE",
  heroImage = "/hero.jpg",
}) => {
  return (
   <header className="relative h-screen overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/Singla-Pumps-Motors_1.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold text-xl text-black">
          <img src={logo} alt="Logo" className="h-12" />
          {/* <span>Singla Pumps</span> */}
        </div>

        <ul className="hidden md:flex gap-6 text-black font-medium">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a href={item.link} className="hover:text-blue-600 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* <button className="bg-Redlogo px-2 py-1 font-bold text-white rounded hover:bg-red-600 transition">
          {contactText}
        </button> */}
      </nav>

      {/* Hero Content */}
      {/* <div className="flex flex-col items-center justify-center text-center text-black px-4 mt-24 relative z-10">
        <p className="uppercase tracking-wide text-sm font-medium">
          {subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">{title}</h1>
        <button className="mt-6 bg-blue-700 text-white px-6 py-3 font-bold rounded hover:bg-blue-800 transition">
          {buttonText}
        </button>
      </div> */}

      {/* Orbit Animation - Bottom Right */}
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-0 pointer-events-none bg-transparent">
        <EllipseOrbit />
      </div>
    </header>
  );
};

export default HeroBanner;