'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X, MapPin, FileCheck, HelpCircle, Car, Shield } from 'lucide-react';
import { locationPages, siteConfig } from '@/lib/pagesData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sr22DropdownOpen, setSr22DropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileSr22Open, setMobileSr22Open] = useState(true);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const services = [
    {
      name: 'What is SR-22?',
      href: '/what-is-sr22/',
      description: 'Understanding Texas financial responsibility requirements',
      icon: HelpCircle,
    },
    {
      name: 'How to Get an SR-22',
      href: '/how-to-get-an-sr22-in-fort-worth/',
      description: 'Step-by-step TxDPS license reinstatement process',
      icon: FileCheck,
    },
    {
      name: 'Non-Owners SR-22 Insurance',
      href: '/non-owners-sr22-insurance/',
      description: 'Low-cost coverage for drivers without a registered vehicle',
      icon: Car,
    },
  ];

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
          <nav className="hidden xl:flex items-center gap-7">
            <Link
              href="/"
              className="text-navy font-semibold text-[0.95rem] hover:text-brandBlue transition-colors py-2"
            >
              Home
            </Link>

            {/* Sr22 Insurance Dropdown with Services */}
            <div
              className="relative group"
              onMouseEnter={() => setSr22DropdownOpen(true)}
              onMouseLeave={() => setSr22DropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-navy font-semibold text-[0.95rem] hover:text-brandBlue transition-colors py-2 focus:outline-none"
                onClick={() => setSr22DropdownOpen(!sr22DropdownOpen)}
                aria-expanded={sr22DropdownOpen}
              >
                <span>Sr22 Insurance</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 group-hover:text-brandBlue transition-transform duration-200 ${
                    sr22DropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-surface-line py-3 transition-all duration-200 ${
                  sr22DropdownOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="px-4 py-1.5 border-b border-slate-100 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-gold" />
                    SR-22 Coverage Services
                  </span>
                </div>
                <div className="space-y-1 px-2">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brandBlue-soft hover:text-brandBlue transition-colors group/item"
                        onClick={() => setSr22DropdownOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-surface-off text-navy group-hover/item:bg-navy group-hover/item:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy group-hover/item:text-brandBlue">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-navy font-semibold text-[0.95rem] hover:text-brandBlue transition-colors py-2 focus:outline-none"
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                aria-expanded={areasDropdownOpen}
              >
                <span>Service Areas</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 group-hover:text-brandBlue transition-transform duration-200 ${
                    areasDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-surface-line py-3 transition-all duration-200 ${
                  areasDropdownOpen
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="px-4 py-1.5 border-b border-slate-100 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    Tarrant County Cities
                  </span>
                </div>
                <div className="max-h-80 overflow-y-auto px-2 space-y-0.5">
                  {locationPages.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.url}
                      className="block px-3 py-2 rounded-lg text-sm text-navy hover:bg-brandBlue-soft hover:text-brandBlue transition-colors font-medium"
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
              className="text-navy font-semibold text-[0.95rem] hover:text-brandBlue transition-colors py-2"
            >
              FAQ
            </Link>
            <Link
              href="/contact-us/"
              className="text-navy font-semibold text-[0.95rem] hover:text-brandBlue transition-colors py-2"
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
        <div className="xl:hidden bg-white border-b border-surface-line shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Sr22 Insurance Accordion */}
            <div className="rounded-xl border border-surface-line overflow-hidden bg-slate-50/50">
              <button
                type="button"
                className="w-full flex items-center justify-between px-3.5 py-3 text-left font-bold text-navy text-base"
                onClick={() => setMobileSr22Open(!mobileSr22Open)}
              >
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold" />
                  Sr22 Insurance
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    mobileSr22Open ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileSr22Open && (
                <div className="px-3 pb-3 space-y-1 border-t border-slate-100 bg-white">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-brandBlue-soft hover:text-brandBlue"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Service Areas Accordion */}
            <div className="rounded-xl border border-surface-line overflow-hidden bg-slate-50/50">
              <button
                type="button"
                className="w-full flex items-center justify-between px-3.5 py-3 text-left font-bold text-navy text-base"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  Service Areas
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    mobileAreasOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileAreasOpen && (
                <div className="p-3 grid grid-cols-2 gap-1 border-t border-slate-100 bg-white">
                  {locationPages.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.url}
                      className="block px-2.5 py-1.5 rounded-md text-xs font-medium text-navy hover:bg-brandBlue-soft hover:text-brandBlue"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {loc.pageName.replace(' (Location Page)', '')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

            {/* Mobile CTA */}
            <div className="pt-3">
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
