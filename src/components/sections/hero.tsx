'use client';

import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1D1D1D] pt-16 lg:pt-20">
      {/* Background Video with Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Left side dark vignette for legibility + subtle top/bottom fade */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1D]/95 via-[#1D1D1D]/60 to-[#1D1D1D]/30 z-10" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1D]/60 via-transparent to-[#1D1D1D]/85 z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center  scale-105"
        >
          <source src="/hero-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl py-12 sm:py-16 lg:py-20">


            {/* Main Heading - BOLD Minimal Luxury Typography */}
            <h1 className="font-display mb-6 sm:mb-8">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-bold text-white tracking-tight leading-[0.95]">
                Crafted for Generations
              </span>

              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold italic tracking-tight leading-[1.05] mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#e6c885] via-[#c5a059] to-[#dfc285]">
                Worn with Grace.
              </span>
            </h1>

            {/* Description */}
            <p className="font-body text-zinc-300 text-base sm:text-lg leading-relaxed max-w-lg mb-10 sm:mb-12 ">
              A living archive of Nepali artistry, shaped by hand and held across time.
            </p>


          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
        <button
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 text-zinc-400 hover:text-[#c5a059] transition-colors group"
          aria-label="Scroll to content"
        >
          <span className="font-body text-[11px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a059]/90" />
        </button>
      </div>
    </section>
  );
}
