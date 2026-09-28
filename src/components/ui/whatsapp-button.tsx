'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on Hover */}
      <div
        className={`transition-all duration-300 ease-out transform ${
          isHovered ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="bg-[#1D1D1D]/95 backdrop-blur-md text-zinc-100 border border-[#c5a059]/40 text-xs py-2 px-3.5 rounded-full shadow-2xl flex items-center gap-2 font-sans tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat with us on WhatsApp</span>
        </div>
      </div>

      {/* Floating Action WhatsApp SVG Button */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Ratnapur Jewellers on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] border border-[#c5a059]/50 hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:ring-offset-2 focus:ring-offset-black"
      >
        {/* Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-md group-hover:bg-[#25D366]/50 transition-all duration-300" />

        {/* Crisp Official WhatsApp SVG Logo */}
        <svg
          viewBox="0 0 24 24"
          className="relative w-7 h-7 fill-current drop-shadow-md transform group-hover:rotate-6 transition-transform duration-300"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.108 1.523 5.834L.055 23.473l5.776-1.516A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.805 0-3.525-.473-5.027-1.3l-.36-.212-3.437.902.918-3.35-.233-.37A9.957 9.957 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}
