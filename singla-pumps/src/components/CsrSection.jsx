"use client"
import React from "react"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  {
    title: "Slide One",
    description: "This is the first slide with text on the left and image on the right.",
    image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/template_photo_4.jpg",
  },
  {
    title: "Slide Two",
    description: "This is the second slide with text on the left and image on the right.",
    image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/3-1.png",
  },
  {
    title: "Slide Three",
    description: "This is the third slide with text on the left and image on the right.",
    image: "http://singlapumps.alphabetasolution.co.in/wp-content/uploads/2025/08/DSC_6072.jpg",
  },
]

export default function CsrSection() {
  const [swiper, setSwiper] = useState(null)
  
    const handlePrevSlide = () => {
      if (swiper) {
        swiper.slidePrev()
      }
    }
  
    const handleNextSlide = () => {
      if (swiper) {
        swiper.slideNext()
      }
    }
  
  return (
    <section className="bg-[#f5f5f5]">
    <div className="max-w-6xl mx-auto py-10 mt-20">
    
      <h2 className="text-4xl font-bold text-center">Corporate Social Responsiblity</h2>
       <div className="flex gap-4 justify-end">
            <button
              onClick={handlePrevSlide}
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Previous project"
            >
              {/* <ChevronLeft className="w-6 h-6" /> */}
            </button>
            <button
              onClick={handleNextSlide}
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Next project"
            >
              {/* <ChevronRight className="w-6 h-6" /> */}
            </button>
          </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        onSwiper={setSwiper}
        spaceBetween={30}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1  items-center gap-6">
               {/* Right Side - Image */}
              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-2xl shadow-md object-cover max-h-[350px]"
                />
              </div>
              {/* Left Side - Text */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>

             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  )
}
