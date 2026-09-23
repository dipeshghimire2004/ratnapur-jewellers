'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { y } = useScrollPosition();
  const isScrolled = y > 20;

  const navLinks = [
    { href: '/story', label: 'STORY' },
    { href: '/collections', label: 'COLLECTIONS' },
    { href: '/heritage', label: 'HERITAGE' },
    { href: '/craft', label: 'CRAFT' },
    { href: '/journal', label: 'JOURNAL' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1D1D1D]/90 backdrop-blur-md border-b border-white/10 py-2.5 lg:py-3 shadow-xl'
          : 'bg-transparent border-b border-transparent py-4 lg:py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Word-Mark Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-90 transition-opacity duration-300"
          >
            <Image
              src="/word-mark-logo.png"
              alt="Ratnapur Jewellers"
              width={220}
              height={55}
              className="h-9 sm:h-12 w-auto object-contain mix-blend-screen"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-zinc-200 font-semibold text-xs tracking-[0.2em] hover:text-[#c5a059] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/appointment"
              className="font-body text-xs font-semibold tracking-[0.15em] px-6 py-2.5 border border-[#c5a059]/80 text-[#e6c885] hover:bg-[#c5a059] hover:text-[#1D1D1D] transition-all duration-300 rounded-sm shadow-sm"
            >
              PRIVATE APPOINTMENT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#c5a059] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-5 border-t border-white/10 bg-[#1D1D1D]/98 backdrop-blur-xl px-4 mt-3">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-white font-semibold text-sm tracking-[0.2em] hover:text-[#c5a059] transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/appointment"
                className="font-body text-sm font-semibold tracking-[0.15em] px-6 py-3 border border-[#c5a059] text-[#e6c885] text-center hover:bg-[#c5a059] hover:text-[#1D1D1D] transition-all duration-300 mt-4 rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRIVATE APPOINTMENT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
