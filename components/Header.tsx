'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X, MapPin } from 'lucide-react';
import { mainNavPages, locationPages, siteConfig } from '@/lib/pagesData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-line shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group py-2">
            <div className="relative h-14 md:h-16 w-44 md:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Trinity SR22 Insurance Fort Worth"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link
              href="/"
              className="text-navy font-semibold text-[0.92rem] hover:text-brandBlue transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/what-is-sr22/"
              className="text-navy font-semibold text-[0.92rem] hover:text-brandBlue transition-colors py-2"
            >
              What is SR-22?
            </Link>
            <Link
              href="/how-to-get-an-sr22-in-fort-worth/"
              className="text-navy font-semibold text-[0.92rem] hover:text-brandBlue transition-colors py-2"
            >
              How to Get SR-22
            </Link>
            <Link
              href="/non-owners-sr22-insurance/"
              className="text-navy font-semibold text-[0.92rem] hover:text-brandBlue transition-colors py-2"
            >
              Non-Owners
            </Link>

            {/* Service Areas Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-navy font-semibold text-[0.92rem] hover:text-brandBlue transition-colors py-2"
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                aria-expanded={areasDropdownOpen}
              >
                <span>Service Areas</span>
                <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-brandBlue transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-surface-line py-2 transition-all duration-200 ${
                  areasDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    Tarrant County Cities
                  </span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {locationPages.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.url}
                      className="block px-4 py-2 text-sm text-navy hover:bg-brandBlue-soft hover:text-brandBlue transition-colors"
                      onClick={() => setAreasDropdownOpen(false)}
                    >
                      {loc.pageName.replace(' (Location Page)', '')}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/faq/"
              className="text-navy font-semibold text-[0.92rem] hover:text-brandBlue transition-colors py-2"
            >
              FAQ
            </Link>
            <Link
              href="/contact-us/"
              className="text-navy font-semibold text-[0.92rem] hover:text-brandBlue transition-colors py-2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white px-5 py-3 rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 text-gold fill-gold" />
              <span>Get Quote: {siteConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={siteConfig.phoneTel}
              className="md:hidden inline-flex items-center justify-center p-2.5 bg-navy text-white rounded-full shadow hover:bg-navy-dark"
              aria-label="Call Trinity SR22 Insurance"
            >
              <Phone className="w-4 h-4 text-gold fill-gold" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-navy hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-navy" />
              ) : (
                <Menu className="w-6 h-6 text-navy" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-surface-line shadow-xl animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-1 divide-y divide-slate-100">
            <div className="space-y-1 pb-3">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/what-is-sr22/"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                onClick={() => setMobileMenuOpen(false)}
              >
                What is SR-22?
              </Link>
              <Link
                href="/how-to-get-an-sr22-in-fort-worth/"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to Get SR-22
              </Link>
              <Link
                href="/non-owners-sr22-insurance/"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Non-Owners
              </Link>
              <Link
                href="/faq/"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact-us/"
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Service Areas List */}
            <div className="pt-3 pb-2">
              <div className="px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                Service Areas in Tarrant County
              </div>
              <div className="grid grid-cols-2 gap-1 mt-2">
                {locationPages.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={loc.url}
                    className="block px-3 py-1.5 rounded-md text-sm text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {loc.pageName.replace(' (Location Page)', '')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4">
              <a
                href={siteConfig.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy text-white px-5 py-3.5 rounded-full font-bold text-base shadow hover:bg-navy-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 text-gold fill-gold" />
                <span>Get Quote: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
