'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageOption {
  id: 'full' | 'ruby' | 'clasp';
  label: string;
  src: string;
  alt: string;
}

const IMAGE_OPTIONS: ImageOption[] = [
  {
    id: 'full',
    label: 'FULL FORM',
    src: '/images/chandrahar-full.png',
    alt: 'The Ratna Chandrahar - Full Form Crescent 22k Gold Necklace',
  },
  {
    id: 'ruby',
    label: 'RUBY SETTING',
    src: '/images/chandrahar-ruby.png',
    alt: 'The Ratna Chandrahar - Hand-set Natural Ruby Detail',
  },
  {
    id: 'clasp',
    label: 'ARTISAN CLASP',
    src: '/images/chandrahar-clasp.png',
    alt: 'The Ratna Chandrahar - Hand-Chased Artisan Gold Clasp',
  },
];

export function SignatureShowcase() {
  const [activeTab, setActiveTab] = useState<'full' | 'ruby' | 'clasp'>('clasp');

  const activeImage = IMAGE_OPTIONS.find((img) => img.id === activeTab) || IMAGE_OPTIONS[2];

  const handleEnquire = () => {
    const text = encodeURIComponent(
      'Hello Ratnapur Jewellers, I would like to inquire about "The Ratna Chandrahar" signature piece.'
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section
      style={{ backgroundColor: 'var(--brand-ivory)' }}
      className="relative z-20 w-full bg-signature-bg text-[#2C221E] py-20 lg:py-28 px-4 sm:px-6 lg:px-12 border-t border-signature-border shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image Showcase + Tabs underneath */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Image Box */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-sm overflow-hidden bg-signature-card shadow-lg group border border-signature-border">
              {IMAGE_OPTIONS.map((img) => (
                <div
                  key={img.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeTab === img.id ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    priority={img.id === 'clasp'}
                  />
                  {/* Subtle soft vignetting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Sub-tabs Underneath Image */}
            <div className="flex items-center gap-6 pt-2 overflow-x-auto no-scrollbar">
              {IMAGE_OPTIONS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative py-1 text-[11px] font-sans tracking-[0.2em] font-semibold uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-[#1D1D1D]'
                        : 'text-stone-500 hover:text-stone-800'
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold animate-in fade-in duration-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Title, Description, Specs & Inquiry */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-7 max-w-xl">
            {/* Tagline */}
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-brand-gold block mb-3">
                THE SIGNATURE
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1D1D1D] tracking-tight leading-[1.08] font-normal">
                The Ratna <br />
                <span className="italic font-display">Chandrahar</span>
              </h2>
            </div>

            {/* Description */}
            <p className="font-body text-stone-700 text-sm sm:text-base leading-relaxed max-w-md">
              A crescent of hand-chased gold, articulated links and deep ruby light. Inspired by the moon necklaces once treasured in Newari households.
            </p>

            {/* Specs Table */}
            <div className="w-full pt-4 border-t border-signature-divider">
              <div className="divide-y divide-signature-divider">
                <div className="py-3 flex items-center justify-between text-xs font-sans">
                  <span className="text-stone-500 uppercase tracking-wider">Metal</span>
                  <span className="text-[#1D1D1D] font-medium">22k heirloom gold</span>
                </div>
                <div className="py-3 flex items-center justify-between text-xs font-sans">
                  <span className="text-stone-500 uppercase tracking-wider">Stones</span>
                  <span className="text-[#1D1D1D] font-medium">Natural ruby</span>
                </div>
                <div className="py-3 flex items-center justify-between text-xs font-sans">
                  <span className="text-stone-500 uppercase tracking-wider">Craft</span>
                  <span className="text-[#1D1D1D] font-medium">Hand chased &amp; set</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleEnquire}
                className="w-full py-4 px-6 border border-[#c5a059] bg-transparent hover:bg-[#c5a059] text-[#1D1D1D] hover:text-white font-sans text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 rounded-none shadow-sm"
              >
                ENQUIRE PRIVATELY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
