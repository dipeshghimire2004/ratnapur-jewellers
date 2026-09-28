'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TestimonialItem {
  id: number;
  subtitle: string;
  quote: string;
  author: string;
  image: string;
  alt: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 0,
    subtitle: 'JEWELS WITH A LIFE',
    quote:
      'My grandmother’s Naugedi was the first jewel I remember. Ratnapur restored it for my wedding, preserving every mark of her life while making it feel entirely mine.',
    author: 'AARATI SHRESTHA • LALITPUR',
    image: '/images/testimonial-heirloom.png',
    alt: 'Elder passing heirloom necklace to bride',
  },
  {
    id: 1,
    subtitle: 'HERITAGE REIMAGINED',
    quote:
      'The craftsman understood the sentimental value of our heirloom crescent necklace. The custom finish and ruby setting exceeded every expectation.',
    author: 'SUNITA PRADHAN • KATHMANDU',
    image: '/images/chandrahar-ruby.png',
    alt: 'Custom ruby set gold jewelry',
  },
  {
    id: 2,
    subtitle: 'A TIMELESS LEGACY',
    quote:
      'Acquiring a signature piece from Ratnapur Jewellers feels like holding a piece of Himalayan history. The bespoke consultation and artistry are unmatchable.',
    author: 'PRERANA SHRESTHA • PATAN',
    image: '/images/chandrahar-full.png',
    alt: 'Artisan 22k gold necklace detail',
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Optional auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      style={{ backgroundColor: '#FAF7F2' }}
      className="relative z-20 w-full bg-[#FAF7F2] text-[#2C221E] py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-t border-[#EAE3D8] shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Image Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-square max-w-[420px] rounded-none overflow-hidden shadow-md bg-stone-200 border border-stone-300/60">
              {TESTIMONIALS.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                    }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quote Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 max-w-xl">
            {/* Subtitle / Category */}
            <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-[#9e7b39] block">
              {current.subtitle}
            </span>

            {/* Quote Mark & Body */}
            <div className="relative space-y-3 pt-1">
              <span className="font-heading text-5xl sm:text-6xl text-[#9e7b39]/40 leading-none select-none block -mb-4 font-serif">
                “
              </span>

              <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-[#3A2E28] leading-[1.38] font-normal min-h-[140px] sm:min-h-[120px] transition-all duration-500">
                {current.quote}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-2">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#8b6544] block">
                {current.author}
              </span>
            </div>

            {/* Slider Line Controls */}
            <div className="flex items-center gap-3 pt-4">
              {TESTIMONIALS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group py-2 px-1 focus:outline-none"
                >
                  <span
                    className={`block h-[2px] transition-all duration-300 rounded-full ${index === activeIndex
                      ? 'w-8 bg-[#9e7b39]'
                      : 'w-6 bg-stone-300 group-hover:bg-stone-400'
                      }`}
                  />
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
