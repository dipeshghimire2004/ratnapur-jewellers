import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Gem, ShieldCheck, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Values & Mission | Ratnapur Jewellers',
  description: 'Explore the mission, heritage values, and master craftsmanship behind Ratnapur Jewellers fine heirloom creations.',
};

const BRAND_VALUES = [
  {
    icon: Sparkles,
    number: '01',
    title: 'Heirloom Artistry',
    description:
      'Every creation is hand-chased in 22k gold by master artisans using centuries-old Himalayan metalworking techniques passed down through generations.',
  },
  {
    icon: Gem,
    number: '02',
    title: 'Authentic Heritage',
    description:
      'We preserve and reimagine historic motifs—from traditional Newari Naugedi beads to classic Chandrahar crescents—bridging royal tradition with modern elegance.',
  },
  {
    icon: HeartHandshake,
    number: '03',
    title: 'Bespoke Reverence',
    description:
      'We treat every client story with deep respect. Our private advisory service guides families through custom commissions, restorations, and wedding heirlooms.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Uncompromised Quality',
    description:
      'We guarantee absolute purity in 22k heirloom gold, hand-set natural rubies, and ethically sourced gems, backed by full hallmark verification.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-24 bg-[#1D1D1D] text-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Top Hero Section */}
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#c5a059] font-medium block">
              HERITAGE &amp; LEGACY
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.1]">
              About Ratnapur Jewellers
            </h1>
            <p className="font-body text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              For generations, Ratnapur Jewellers has served as Nepal&apos;s custodian of fine jewelry art—creating timeless pieces that celebrate life&apos;s most meaningful milestones.
            </p>
          </div>

          {/* Full Screen Showcase Banner */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] rounded-sm overflow-hidden border border-[#333333] shadow-2xl group">
            <Image
              src="/second-image.png"
              alt="Ratnapur Jewellers Heritage Craftsmanship"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D] via-[#1D1D1D]/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-10 max-w-lg">
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#c5a059] block mb-1">
                KATHMANDU SHOWROOM
              </span>
              <p className="font-heading text-xl sm:text-2xl text-white font-normal">
                Where heritage craftsmanship meets contemporary refinement.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-[#242424] border border-[#383838] rounded-sm p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c5a059] inline-block" />
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                  OUR MISSION
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl text-white font-normal leading-snug">
                To honor Himalayan artistry by handcrafting heirloom jewelry that transcends generations.
              </h2>

              <p className="font-body text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                Our mission is to preserve Nepal&apos;s rich goldsmithing traditions while providing an exquisite, intimate luxury experience. We are dedicated to ensuring every jewel we craft carries emotional weight, lasting beauty, and unmatched craftsmanship for your family lineage.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#c5a059] font-medium">
                GUIDING PRINCIPLES
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-white font-normal">
                Our Core Values
              </h2>
              <div className="w-12 h-[2px] bg-[#c5a059] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BRAND_VALUES.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.number}
                    className="bg-[#242424]/90 border border-[#333333] hover:border-[#c5a059]/60 p-8 rounded-sm transition-all duration-300 space-y-4 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#1D1D1D] border border-[#383838] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059]/80 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-heading text-2xl text-zinc-600 group-hover:text-[#c5a059] transition-colors">
                        {val.number}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl text-white font-semibold tracking-wide">
                      {val.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Private Consultation CTA Banner */}
          <div className="border border-[#c5a059]/40 bg-gradient-to-r from-[#1A1A1A] via-[#242424] to-[#1A1A1A] rounded-sm p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-normal">
              Begin Your Bespoke Journey
            </h3>
            <p className="font-body text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Schedule a private consultation at our New Road or Lalitpur showrooms to discuss custom heirloom creations and restorations.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#c5a059] text-[#e6c885] hover:bg-[#c5a059] hover:text-[#1D1D1D] font-sans text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 rounded-sm shadow-md"
              >
                <span>BOOK A PRIVATE CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
