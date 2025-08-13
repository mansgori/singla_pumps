"use client"

import { useEffect, useState, useRef } from "react"

export default function CounterSection() {
  function Counter({ end, duration = 2000, suffix = "", label }) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const counterRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 },
      )

      if (counterRef.current) {
        observer.observe(counterRef.current)
      }

      return () => observer.disconnect()
    }, [])

    useEffect(() => {
      if (!isVisible) return

      let startTime
      let animationFrame

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, [isVisible, end, duration])

    // Final static number for background
    const finalNumber = `${end}${suffix}`

    return (
      <div ref={counterRef} className="relative text-center h-40">
        {/* Large background number with stroke only */}
        <div className="absolute inset-0 bottom-10 left-20 flex items-center justify-center pointer-events-none">
          <span 
            className="text-[7rem] md:text-[10rem] lg:text-[10rem] font-bold select-none leading-none text-transparent"
            style={{
              WebkitTextStroke: '2px #e5e7eb',
              textStroke: '2px #e5e7eb'
            }}
          >
            {finalNumber}
          </span>
        </div>
        
        {/* Animated counter on top */}
        <div className="relative z-10 flex flex-raw items-center justify-center h-full">
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-2">
            {count}
            {suffix}
          </div>
          <div className=" text-base md:text-lg font-medium px-2">
            {label}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <Counter end={8} suffix="K" label="Total installed power" duration={2500} />
          <Counter end={24} label="Years of experience" duration={2000} />
          <Counter end={75} label="Professionals in our team" duration={2200} />
          <Counter end={3} suffix="K" label="Our clients worldwide" duration={1800} />
        </div>
      </div>
    </section>
  )
}