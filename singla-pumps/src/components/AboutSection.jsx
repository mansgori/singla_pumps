"use client"

import { useState } from "react"
import { ArrowRight, Play } from "lucide-react"
import banner from "../assets/banner.webp"

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false)
  console.log(banner)

  return (
    <section className="relative h-fit bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.jameswalker.biz/getattachment/3660baf7-0f6e-4372-8160-24013c665e58/wind-banner.jpg')` // Replace with your image path
        }}
      >
        <div className="absolute inset-0 "></div> {/* Optional overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-80 flex items-center pt-6 pb-6">
        <div className="max-w-4xl ms-auto me-20 px-4 bg-white w-full">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            
            {/* Left side - can be empty or contain additional content */}
            <div></div>

            {/* Right side - Content */}
            <div className="text-black lg:pl-8">
              {/* Badge */}
              <div className="inline-block  backdrop-blur-sm text-black px-4 py-2 text-sm font-medium tracking-wider mb-6 border border-white/20">
                ABOUT COMPANY
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                We employ people
                <br />
                that take pride in
                <br />
                their work
              </h2>

              {/* Description */}
              <p className="text-black text-lg leading-relaxed mb-8 max-w-2xl">
                The project started in 1929 with the specific intention of rejecting large numbers 
                and widely accessible prices to encourage limited and niche production, where 
                the only determining factor is true French excellence. The choice of 
                implementing organic cultivation gives more prestige to the product, making it 
                free of chemical residues and respecting environmental sustainability.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  </div>
                  <p className="text-black font-medium">
                    Our sales engineers have experience & can design any system.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  </div>
                  <p className="text-black font-medium">
                    We must go above our customer expectations during interaction.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  </div>
                  <p className="text-black font-medium">
                    Our industrial solar systems are designed to reliably power.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-6">
                {/* Read More Button with Animation */}
                <button 
                  className="group relative bg-green-600 hover:bg-green-700 text-black px-8 py-4 font-semibold transition-all duration-300 overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Animated background layers */}
                  <div className={`absolute inset-0 bg-green-600 transition-transform duration-300 ${
                    isHovered ? 'transform translate-x-full' : 'transform translate-x-0'
                  }`}></div>
                  
                  <div className={`absolute inset-0 bg-white transition-transform duration-300 ${
                    isHovered ? 'transform translate-x-0' : 'transform -translate-x-full'
                  }`}></div>

                  <div className={`absolute inset-0 bg-black transition-transform duration-300 delay-100 ${
                    isHovered ? 'transform translate-x-0' : 'transform -translate-x-full'
                  }`}></div>

                  {/* Button content */}
                  <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-white'
                  }`}>
                    Read More 
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                {/* Watch Video Button */}
                <button className="group flex items-center gap-4 text-white hover:text-black transition-colors duration-300">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                  </div>
                  <span className="font-medium">Watch video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}