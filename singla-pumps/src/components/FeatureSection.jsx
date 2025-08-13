import { useEffect } from "react";

export default function FeatureSection() {
  useEffect(() => {
    const ball = document.getElementById("orbit-ball");
    let angle = 0;

    const animate = () => {
      angle += 0.5; // speed
      const radius = 200; // adjust for path size
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      ball.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative bg-[#1c1f26] text-white py-20 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg width="500" height="500">
          <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <div
          id="orbit-ball"
          className="absolute w-3 h-3 bg-yellow-400 rounded-full"
          style={{ transform: "translate(200px, 0)" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div className="space-y-12">
          <Feature
            icon="/icons/icon-long.svg"
            title="Long time to use"
            text="Lobortis non et dolor laoreet proin lectus. Potenti etiam convallis sed consectetur nibh nisi."
          />
          <Feature
            icon="/icons/icon-solar.svg"
            title="Easy installation"
            text="At neque, commodo sit molestie. Amet amet, faucibus risus, est bibendum volutpat."
          />
          <Feature
            icon="/icons/icon-maintenance.svg"
            title="Maintenance services"
            text="Porttitor lacus blandit ornare pulvinar egestas. Augue nunc, viverra diam ornare tortor."
          />
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img src="/images/wind-turbine.png" alt="Wind Turbine" className="max-h-[500px]" />
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          <Feature
            icon="/icons/icon-leaf.svg"
            title="Renewable energy"
            text="Augue nunc, viverra diam ornare tortor, maecenas id. At neque, commodo sit molestie."
            align="right"
          />
          <Feature
            icon="/icons/icon-lightbulb.svg"
            title="Environmental solutions"
            text="Curabitur viverra lorem egestas elit tortor. Adipiscing in viverra rhoncus risus."
            align="right"
          />
          <Feature
            icon="/icons/icon-charging.svg"
            title="For many purposes"
            text="Egestas cras gravida egestas pretium. Sed id quisque pellentesque et, quis sit pharetra venenatis."
            align="right"
          />
        </div>

      </div>
    </section>
  );
}

function Feature({ icon, title, text, align = "left" }) {
  return (
    <div className={`flex items-start ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
      <img src={icon} alt="" className="w-12 h-12 text-yellow-400" />
      <div className={`${align === "right" ? "mr-4" : "ml-4"}`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300 mt-2">{text}</p>
      </div>
    </div>
  );
}
