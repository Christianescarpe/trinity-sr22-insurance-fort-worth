import React from 'react';
import Image from 'next/image';
import { Phone, CheckCircle2, Shield, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/pagesData';

interface HeroProps {
  h1: string;
  introHtml: string;
  heroImage?: string;
  imageAlt?: string;
  badgeText?: string;
}

export default function Hero({
  h1,
  introHtml,
  heroImage = '/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp',
  imageAlt = 'SR-22 insurance paperwork and car keys in Fort Worth, Texas',
  badgeText = 'Same-day electronic filing with Texas DPS',
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-navy via-brandBlue-dark to-navy text-white overflow-hidden pt-10 md:pt-16 pb-20 md:pb-24">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brandBlue/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Intro, CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {badgeText && (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium text-slate-200 shadow-sm animate-fade-in">
                <Shield className="w-4 h-4 text-gold" />
                <span>{badgeText}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              {h1}
            </h1>

            {/* Intro HTML directly from the Google Sheet */}
            <div
              className="text-slate-200 text-base sm:text-lg leading-relaxed space-y-3 font-normal [&>p]:mb-3 [&>p>a]:text-gold [&>p>a]:underline [&>p>a]:font-semibold"
              dangerouslySetInnerHTML={{ __html: introHtml }}
            />

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 bg-white text-navy hover:bg-slate-100 px-6 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-brandBlue fill-brandBlue" />
                <span>Get Quote: {siteConfig.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Free phone consultation & instant quote</span>
              </div>
            </div>

            {/* Quick Benefits Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-slate-200 shadow-lg max-w-xl">
              <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                Call For A Filing-Ready Quote
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  SR-22 certificate with Texas DPS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Non-owner policy if you don&apos;t own a car
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Matches TxDPS notice requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  Serving all Tarrant County drivers
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Clear, High-Visibility Hero Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 bg-white group">
              <Image
                src={heroImage}
                alt={imageAlt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
              {/* Subtle glass brand badge on bottom for credibility */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3.5 py-2.5 shadow-md flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-navy flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-gold" />
                    Trinity SR22 Insurance
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">Fort Worth, TX · (817) 607-3345</p>
                </div>
                <span className="text-[11px] font-bold text-brandBlue bg-brandBlue-soft px-2.5 py-1 rounded-full">
                  TxDPS Filing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-white block"
        >
          <path
            d="M0 28C160 60 320 4 480 12C640 20 720 52 880 48C1040 44 1120 8 1280 16C1360 20 1400 32 1440 40V72H0V28Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
