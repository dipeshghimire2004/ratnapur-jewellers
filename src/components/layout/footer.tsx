'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Globe, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="relative z-20 bg-[#1D1D1D] text-zinc-300 pt-16 pb-8 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-xs">
          
          {/* Column 1: Store Location & Legacy */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase border-b border-[#333333] pb-2 inline-block">
              Our Showroom
            </h3>
            
            <div className="space-y-3 font-sans text-zinc-400 leading-relaxed">
              <div>
                <p className="text-zinc-200 font-medium">{siteConfig.name}</p>
                <p>{siteConfig.contact.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#c5a059] hover:underline mt-1 font-medium"
                >
                  <MapPin className="w-3 h-3" /> Get Directions
                </a>
              </div>

              <div className="pt-2 border-t border-[#2A2A2A] space-y-1">
                <p className="text-[#c5a059] font-medium font-sans flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> A decade of excellence
                </p>
                <p className="text-zinc-400 text-[11px]">Crafted with pride in Nepal</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase border-b border-[#333333] pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-2.5 font-sans text-zinc-400">
              <div>
                <span className="block text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Landline:</span>
                <p className="text-zinc-200 font-medium">{siteConfig.contact.phoneLandline}</p>
              </div>

              <div className="pt-1">
                <span className="block text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Mobile &amp; WhatsApp:</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 font-medium hover:text-[#c5a059] transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#c5a059]" />
                  {siteConfig.contact.phoneMobile}
                </a>
              </div>

              <div className="pt-1">
                <span className="block text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Worldwide Services:</span>
                <p className="text-[#c5a059] font-medium flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> Worldwide delivery available
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Connect & Inquiry */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase border-b border-[#333333] pb-2 inline-block">
              Connect With Us
            </h3>
            <p className="text-zinc-400 leading-relaxed font-sans">
              Personalize your jewelry with our expertise. Reach out directly for bespoke design inquiries.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#262626] hover:bg-[#c5a059] text-zinc-300 hover:text-black flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#262626] hover:bg-[#c5a059] text-zinc-300 hover:text-black flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="w-8 h-8 rounded-full bg-[#262626] hover:bg-[#c5a059] text-zinc-300 hover:text-black flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#c5a059] group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Column 4: Support & Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-semibold tracking-wider text-white uppercase border-b border-[#333333] pb-2 inline-block">
              Bespoke Services
            </h3>
            <ul className="space-y-2.5 font-sans text-zinc-400">
              <li>
                <Link href="/contact" className="hover:text-[#c5a059] transition-colors">
                  Personalized Jewelry Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c5a059] transition-colors">
                  Custom Craftsmanship &amp; Design
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c5a059] transition-colors">
                  Worldwide Shipping &amp; Care
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-14 pt-6 border-t border-[#2A2A2A] text-center font-sans text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()}, {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
