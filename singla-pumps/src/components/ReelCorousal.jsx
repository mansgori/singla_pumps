"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { REEL_COROUSEL } from "../utlis/helper";

export default function ReelCarousel() {
  return (
    <section className="wrapper center">
      <div className="w-full px-4 py-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },  // mobile
            640: { slidesPerView: 2 },  // small tablet
            1024: { slidesPerView: 5 }, // desktop → exactly 5
          }}
          className="w-full pb-2.5" 
        >
          {/* Slides */}
          {REEL_COROUSEL.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center rounded-2xl  shadow-lg">
                <video
                  className="h-[500px] w-[250px] object-cover rounded-2xl pb-1"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={url}
                    type="video/mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
