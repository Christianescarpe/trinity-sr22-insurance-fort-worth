'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/pagesData';

export default function MobileCallBar() {
  return (
    <>
      {/* Floating Circular Call Button (mobile only) */}
      <aside aria-label="Call Trinity SR22 Insurance Quick Contact" className="md:hidden fixed bottom-20 right-4 z-40">
        <a
          href={siteConfig.phoneTel}
          aria-label={`Call Trinity SR22 Insurance at ${siteConfig.phoneDisplay}`}
          className="flex items-center justify-center w-14 h-14 bg-gold hover:bg-gold-hover text-navy rounded-full shadow-2xl animate-pulse-glow transition-transform active:scale-95"
        >
          <Phone className="w-7 h-7 fill-navy text-navy" />
        </a>
      </aside>

      {/* Sticky Bottom Call Bar (mobile only) */}
      <aside aria-label="Mobile Call To Action Bar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-surface-line p-2.5 shadow-lg">
        <a
          href={siteConfig.phoneTel}
          className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white py-3 px-4 rounded-full font-bold text-sm shadow-md transition-colors"
        >
          <Phone className="w-4 h-4 text-gold fill-gold" />
          <span>Get Quote: {siteConfig.phoneDisplay}</span>
        </a>
      </aside>
    </>
  );
}
