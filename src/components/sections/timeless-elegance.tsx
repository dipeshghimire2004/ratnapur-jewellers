'use client';

import Image from 'next/image';

export function TimelessElegance() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1D1D1D] flex items-end">
      {/* Full Screen Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/second-image.png"
          alt="Ratnapur Jewellers Timeless Craftsmanship"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle bottom-left gradient shadow for text legibility without blurring the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1D1D1D]/90 via-[#1D1D1D]/45 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Quote Container at Bottom Left */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-2xl text-left">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 h-[2px] bg-[#c5a059] inline-block" />
            <h2 className="font-body text-[#c5a059] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
              TIMELESS ELEGANCE
            </h2>
          </div>

          <blockquote className="font-display font-bold text-3xl sm:text-5xl md:text-5xl text-white tracking-tight leading-[1.1] drop-shadow-md">
            “Jewellery crafted to celebrate your most beautiful moments.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
