import React from "react";

const ServicesSection = ({ services = [] }) => {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        {/* <p className="uppercase text-sm font-semibold tracking-widest">Our Services</p> */}
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Empowering Industries with Reliable Pump & Motor Solutions
        </h2>
        <p className="text-xl md:text-2xl  mt-2">
          From agriculture to industrial sectors, our cutting-edge products are designed for unmatched performance, efficiency, and durability.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="border p-6 px-7.5 text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image with Hover Zoom */}
            <div className="overflow-hidden mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto transform transition-transform duration-500 hover:scale-125"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>

            {/* Link */}
            <a
              href={service.link}
              className="text-Redlogo font-medium hover:underline"
            >
              Request a quote
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
