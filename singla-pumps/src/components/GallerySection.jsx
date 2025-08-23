"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
// import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const projects = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/women-collaborating-laptop-XyAmhwAM33utccQxPzcYDx8NHzb3Hb.png",
    alt: "Wind turbine maintenance",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/solar-panel-installation-rA2OsNRnfuCYsK5OrVWUpVX5rAzazZ.png",
    alt: "Team collaboration",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/renewable-energy-landscape-w0Wo2VsXCYGWU3WPEelw13dUIGDT4P.png",
    alt: "Solar panel installation",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/women-collaborating-laptop-XyAmhwAM33utccQxPzcYDx8NHzb3Hb.png",
    alt: "Renewable energy project",
  },
]

export default function GallerySection() {
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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-block bg-black text-white px-4 py-2 text-sm font-medium tracking-wider mb-4">
              GALLERY THE PROJECTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Here you can see our
              <br />
              latest projects
            </h2>
          </div>

          <div className="flex gap-4">
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
        </div>
      </div>

      <div className="gallery-swiper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={1}
          loop={true}
          speed={500}
          onSwiper={setSwiper}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .gallery-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  )
}